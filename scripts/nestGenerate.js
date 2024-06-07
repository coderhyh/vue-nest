import { execSync } from 'node:child_process'
import fs from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const args = process.argv.slice(2)
const resourceName = args[0]

if (!resourceName) {
  console.error('请提供资源名称')
  process.exit(1)
}

try {
  execSync(`pnpm --filter service exec nest generate resource ${resourceName}`, { stdio: 'inherit' })

  const __dirname = dirname(fileURLToPath(import.meta.url))
  const p = resolve(__dirname, `../service/src/${resourceName}/${resourceName}.controller.ts`)
  const f = fs.readFileSync(p, 'utf-8')
  const code = `/* eslint-disable ts/consistent-type-imports */\n`
  fs.writeFileSync(p, code + f)
}
catch (error) {
  console.error('执行命令时出错:', error)
  process.exit(1)
}
