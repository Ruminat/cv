# Contact relay

A tiny, dependency-free Node server that receives the CV site's **"Let's talk"**
form and forwards each message to you on **Telegram**.

```
Browser (ContactDialog) --POST /api/contact--> this server --sendMessage--> Telegram
```

## 1. Create a Telegram bot

1. In Telegram, message [@BotFather](https://t.me/BotFather) → `/newbot`, follow the
   prompts. Copy the **bot token** it gives you.
2. Send any message to your new bot so it has a chat to reply into.
3. Open `https://api.telegram.org/bot<TOKEN>/getUpdates` in a browser and copy
   `result[0].message.chat.id` — that's your **chat id**.

## 2. Configure

```bash
cd server
cp .env.example .env
# edit .env: set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID
```

## 3. Run

```bash
node index.mjs          # or: npm start  (loads .env automatically)
```

Health check: `curl http://127.0.0.1:8787/health` → `{"ok":true}`

Smoke test:

```bash
curl -X POST http://127.0.0.1:8787/api/contact \
  -H 'Content-Type: application/json' \
  -d '{"message":"Hello from curl","contact":"me@example.com"}'
```

You should get a Telegram DM.

## 4. Deploy (VPS)

The site is served by nginx at `cv.shrek-labs.dev`. Run this relay on
`127.0.0.1:8787` and let nginx proxy `/api/` to it (see the `location /api/`
block added to `../nginx.conf`). That way the browser calls the **same origin**
and no CORS is involved.

Keep it alive with pm2 using the bundled config:

```bash
pm2 start ecosystem.config.cjs   # start (auto-restarts on crash)
pm2 restart ecosystem.config.cjs # after pulling new code
```

**Survive VPS reboots** — run these once so pm2 resurrects the relay on boot:

```bash
pm2 startup   # prints a sudo command — copy/paste and run it
pm2 save      # snapshot the current process list for boot
```

`pm2 startup` installs a systemd service that restores whatever `pm2 save`
recorded. Re-run `pm2 save` any time you change the running process list.

Handy checks: `pm2 status`, `pm2 logs cv-contact-relay`.

## Frontend wiring

The dialog posts to `import.meta.env.VITE_CONTACT_API_URL`, defaulting to the
same-origin `/api/contact`. For the same-origin nginx setup you don't need to
set anything. If you host the API on a different origin (e.g. the GitHub Pages
build talking to the VPS), set it at build time:

```
VITE_CONTACT_API_URL=https://cv.shrek-labs.dev/api/contact
```

and add that origin to `ALLOWED_ORIGIN` in the server's `.env`.

## Endpoints

| Method | Path           | Body                          | Response          |
| ------ | -------------- | ----------------------------- | ----------------- |
| POST   | `/api/contact` | `{ message, contact? }` JSON  | `{ ok: true }`    |
| GET    | `/health`      | –                             | `{ ok: true }`    |

Built-ins: per-IP rate limiting, 16 KB body cap, input validation, HTML
escaping, and CORS.
