import { test } from "@playwright/test";
import path from "path";

const screenshotDir = path.resolve("docs/screenshots");

const viewports = {
  desktop: { width: 1440, height: 900 },
} as const;

test.describe("Byte-Folio Screenshots", () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize(viewports.desktop);
  });

  // Home page sections
  const sections = [
    { id: "hero", path: "/", selector: "#hero", name: "byte-folio-hero" },
    { id: "about", path: "/", selector: "#about", name: "byte-folio-about" },
    { id: "experience", path: "/", selector: "#experience", name: "byte-folio-experience" },
    { id: "key-projects", path: "/", selector: "#key-projects", name: "byte-folio-key-projects" },
    { id: "projects", path: "/", selector: "#projects", name: "byte-folio-projects" },
    { id: "skills", path: "/", selector: "#skills", name: "byte-folio-skills" },
    { id: "contact", path: "/", selector: "#contact", name: "byte-folio-contact" },
  ];

  for (const section of sections) {
    test(`capture ${section.name}`, async ({ page }) => {
      await page.goto(section.path, { waitUntil: "networkidle" });
      // Wait for animations to settle
      await page.waitForTimeout(1500);
      const element = page.locator(section.selector);
      await element.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
      await element.screenshot({
        path: path.join(screenshotDir, `${section.name}.png`),
      });
    });
  }

  // Project detail pages
  const projects = [
    "meditrack", "aspire-nexus", "e-portfolio",
    "vue-identityserver4", "maui-mediatr", "elasticsearch-nest",
    "vuejs-hot-reload-docker", "resource-manager", "e-shop",
    "sql-converter", "push-notification", "hybrid-webview",
    "calendar-demo", "identityserver4-study",
  ];

  for (const slug of projects) {
    test(`capture project detail: ${slug}`, async ({ page }) => {
      await page.goto(`/projects/${slug}`, { waitUntil: "networkidle" });
      await page.waitForTimeout(1500);
      await page.screenshot({
        path: path.join(screenshotDir, `byte-folio-project-${slug}.png`),
        fullPage: true,
      });
    });
  }
});
