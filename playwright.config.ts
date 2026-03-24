import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  timeout: 30000,
  use: {
    baseURL: "http://localhost:3002",
    headless: true,
    screenshot: "only-on-failure",
  },
  webServer: {
    command: "pnpm dev:byte",
    port: 3002,
    reuseExistingServer: true,
    timeout: 30000,
  },
  projects: [
    { name: "chromium", use: { browserName: "chromium" } },
  ],
});
