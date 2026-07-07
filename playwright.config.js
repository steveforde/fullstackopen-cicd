/* eslint-env node */
import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './e2e-tests',
  timeout: 30000,
  use: {
    baseURL: 'http://localhost:8080',
  },
webServer: {
    command: 'npm run start',
    url: 'http://localhost:8080',
    timeout: 120000,
    reuseExistingServer: !globalThis.process?.env?.CI,
  },
})