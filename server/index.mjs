// Minimal, dependency-free contact relay.
//
// Receives the "Let's talk" form from the CV site and forwards it to a
// Telegram chat via the Bot API. Runs on Node 18+ (uses the built-in global
// `fetch`); Node 24 is what the site is built with.
//
// Configure via environment variables (see .env.example):
//   TELEGRAM_BOT_TOKEN  (required)  token from @BotFather
//   TELEGRAM_CHAT_ID    (required)  your numeric chat id
//   PORT                (optional)  default 8787
//   ALLOWED_ORIGIN      (optional)  CORS allow-list, comma-separated. Default "*"
//   MAX_REQUESTS_PER_MIN(optional)  per-IP rate limit, default 5

import { createServer } from 'node:http'

// Load .env next to this file if present, so `node index.mjs` works without
// needing the --env-file flag. Real env vars (e.g. from pm2/systemd) win.
try {
  process.loadEnvFile(new URL('.env', import.meta.url))
} catch {
  // No .env file — rely on the ambient environment.
}

const {
  TELEGRAM_BOT_TOKEN,
  TELEGRAM_CHAT_ID,
  PORT = '8787',
  ALLOWED_ORIGIN = '*',
  MAX_REQUESTS_PER_MIN = '5',
} = process.env

if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
  console.error(
    'Missing TELEGRAM_BOT_TOKEN and/or TELEGRAM_CHAT_ID. See server/.env.example.',
  )
  process.exit(1)
}

const MESSAGE_MAX = 4000
const CONTACT_MAX = 200
const BODY_LIMIT_BYTES = 16 * 1024
const RATE_LIMIT = Number(MAX_REQUESTS_PER_MIN) || 5
const RATE_WINDOW_MS = 60_000

const allowedOrigins = ALLOWED_ORIGIN.split(',')
  .map((origin) => origin.trim())
  .filter(Boolean)

// --- simple in-memory, per-IP rate limiter -------------------------------
/** @type {Map<string, number[]>} */
const hits = new Map()

function isRateLimited(ip) {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS)
  if (recent.length >= RATE_LIMIT) {
    hits.set(ip, recent)
    return true
  }
  recent.push(now)
  hits.set(ip, recent)
  return false
}

// Occasionally evict stale IPs so the map doesn't grow unbounded.
setInterval(() => {
  const now = Date.now()
  for (const [ip, times] of hits) {
    if (times.every((t) => now - t >= RATE_WINDOW_MS)) hits.delete(ip)
  }
}, RATE_WINDOW_MS).unref()

// --- helpers -------------------------------------------------------------
function corsHeaders(origin) {
  const allowAll = allowedOrigins.includes('*')
  const allowed =
    allowAll || (origin && allowedOrigins.includes(origin))
      ? allowAll
        ? '*'
        : origin
      : allowedOrigins[0] ?? '*'
  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  }
}

function json(res, status, body, extraHeaders = {}) {
  const payload = JSON.stringify(body)
  res.writeHead(status, {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(payload),
    ...extraHeaders,
  })
  res.end(payload)
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let size = 0
    const chunks = []
    req.on('data', (chunk) => {
      size += chunk.length
      if (size > BODY_LIMIT_BYTES) {
        reject(new Error('payload_too_large'))
        req.destroy()
        return
      }
      chunks.push(chunk)
    })
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')))
    req.on('error', reject)
  })
}

function clientIp(req) {
  const forwarded = req.headers['x-forwarded-for']
  if (typeof forwarded === 'string' && forwarded.length > 0) {
    return forwarded.split(',')[0].trim()
  }
  return req.socket.remoteAddress ?? 'unknown'
}

async function sendToTelegram({ message, contact }) {
  const lines = [
    '<b>📬 New message from your CV site</b>',
    '',
    escapeHtml(message),
  ]
  if (contact) {
    lines.push('', `<b>Reach back:</b> ${escapeHtml(contact)}`)
  }
  const text = lines.join('\n').slice(0, 4096)

  const response = await fetch(
    `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text,
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }),
    },
  )

  if (!response.ok) {
    const detail = await response.text().catch(() => '')
    throw new Error(`telegram_api_${response.status}: ${detail}`)
  }
}

// --- request handling ----------------------------------------------------
const server = createServer(async (req, res) => {
  const origin = req.headers.origin
  const headers = corsHeaders(origin)

  if (req.method === 'OPTIONS') {
    res.writeHead(204, headers)
    res.end()
    return
  }

  const url = new URL(req.url ?? '/', 'http://localhost')

  if (req.method === 'GET' && url.pathname === '/health') {
    json(res, 200, { ok: true }, headers)
    return
  }

  if (req.method !== 'POST' || url.pathname !== '/api/contact') {
    json(res, 404, { ok: false, error: 'not_found' }, headers)
    return
  }

  if (isRateLimited(clientIp(req))) {
    json(res, 429, { ok: false, error: 'rate_limited' }, headers)
    return
  }

  let raw
  try {
    raw = await readBody(req)
  } catch {
    json(res, 413, { ok: false, error: 'payload_too_large' }, headers)
    return
  }

  let parsed
  try {
    parsed = JSON.parse(raw || '{}')
  } catch {
    json(res, 400, { ok: false, error: 'invalid_json' }, headers)
    return
  }

  const message = typeof parsed.message === 'string' ? parsed.message.trim() : ''
  const contact = typeof parsed.contact === 'string' ? parsed.contact.trim() : ''

  if (!message) {
    json(res, 400, { ok: false, error: 'message_required' }, headers)
    return
  }

  try {
    await sendToTelegram({
      message: message.slice(0, MESSAGE_MAX),
      contact: contact.slice(0, CONTACT_MAX),
    })
    json(res, 200, { ok: true }, headers)
  } catch (error) {
    console.error('Failed to relay message to Telegram:', error)
    json(res, 502, { ok: false, error: 'relay_failed' }, headers)
  }
})

server.listen(Number(PORT), '127.0.0.1', () => {
  console.log(`Contact relay listening on http://127.0.0.1:${PORT}`)
})
