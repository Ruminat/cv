import { readdir, readFile, rename, stat, writeFile } from 'node:fs/promises'
import path from 'node:path'

const OUT_DIR = path.resolve('out')
const oldPrefix = '/cv/_next/'
const newPrefix = '/cv/next/'

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        return walk(fullPath)
      }
      return [fullPath]
    }),
  )

  return files.flat()
}

function isTextFile(filePath) {
  return /\.(html|txt|js|css|map)$/i.test(filePath)
}

async function replaceInFile(filePath) {
  const source = await readFile(filePath, 'utf8')
  if (!source.includes(oldPrefix)) return
  const next = source.split(oldPrefix).join(newPrefix)
  await writeFile(filePath, next, 'utf8')
}

async function main() {
  const oldDir = path.join(OUT_DIR, '_next')
  const newDir = path.join(OUT_DIR, 'next')

  await stat(oldDir)
  await rename(oldDir, newDir)

  const files = await walk(OUT_DIR)
  await Promise.all(
    files.filter(isTextFile).map(replaceInFile),
  )
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
