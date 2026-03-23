import { test, expect } from "@playwright/test";

test.describe("Theme Switcher — byte-folio", () => {
  test.beforeEach(async ({ page }) => {
    // Clear localStorage to start fresh
    await page.goto("/");
    await page.evaluate(() => localStorage.clear());
    await page.reload();
    await page.waitForLoadState("networkidle");
  });

  test("theme switcher button is visible and clickable", async ({ page }) => {
    const button = page.getByLabel("Switch color theme");
    await expect(button).toBeVisible();

    // Check button has the primary color dot
    const dot = button.locator("span");
    await expect(dot).toBeVisible();
    const bgColor = await dot.evaluate((el) => getComputedStyle(el).backgroundColor);
    console.log("Button dot background-color:", bgColor);
  });

  test("clicking button opens theme dropdown", async ({ page }) => {
    const button = page.getByLabel("Switch color theme");
    await button.click();

    // Check dropdown appeared — look for theme labels
    const deepSpace = page.getByText("Deep Space");
    const codeRabbit = page.getByText("CodeRabbit");
    const terminal = page.getByText("Terminal");

    console.log("Deep Space visible:", await deepSpace.isVisible().catch(() => false));
    console.log("CodeRabbit visible:", await codeRabbit.isVisible().catch(() => false));
    console.log("Terminal visible:", await terminal.isVisible().catch(() => false));

    await expect(deepSpace).toBeVisible();
    await expect(codeRabbit).toBeVisible();
    await expect(terminal).toBeVisible();
  });

  test("dropdown panel has visible background", async ({ page }) => {
    const button = page.getByLabel("Switch color theme");
    await button.click();

    // Find the dropdown panel (parent of theme buttons)
    const panel = page.locator("[class*='fixed'][class*='right-4'][class*='bottom-'] > div").first();
    const panelBg = await panel.evaluate((el) => getComputedStyle(el).backgroundColor);
    const panelBorder = await panel.evaluate((el) => getComputedStyle(el).borderColor);
    const panelDisplay = await panel.evaluate((el) => getComputedStyle(el).display);

    console.log("Panel background-color:", panelBg);
    console.log("Panel border-color:", panelBorder);
    console.log("Panel display:", panelDisplay);

    // Background should not be transparent or empty
    expect(panelBg).not.toBe("rgba(0, 0, 0, 0)");
    expect(panelBg).not.toBe("transparent");
  });

  test("selecting a theme changes CSS variables", async ({ page }) => {
    // Capture initial primary color
    const initialPrimary = await page.evaluate(() =>
      getComputedStyle(document.documentElement).getPropertyValue("--color-primary").trim()
    );
    console.log("Initial --color-primary:", initialPrimary);

    // Open switcher and select CodeRabbit
    await page.getByLabel("Switch color theme").click();
    await page.getByText("CodeRabbit").click();

    // Wait for style injection
    await page.waitForTimeout(500);

    const newPrimary = await page.evaluate(() =>
      getComputedStyle(document.documentElement).getPropertyValue("--color-primary").trim()
    );
    console.log("After CodeRabbit --color-primary:", newPrimary);

    // Should be different (orange vs cyan)
    expect(newPrimary).not.toBe(initialPrimary);

    // Check localStorage was set
    const stored = await page.evaluate(() => localStorage.getItem("eportfolio-color-theme"));
    console.log("localStorage theme:", stored);
    expect(stored).toBe("coderabbit");
  });

  test("injected style element exists after theme selection", async ({ page }) => {
    await page.getByLabel("Switch color theme").click();
    await page.getByText("Terminal").click();
    await page.waitForTimeout(500);

    const styleContent = await page.evaluate(() => {
      const style = document.getElementById("eportfolio-theme-vars");
      return {
        exists: !!style,
        content: style?.textContent?.slice(0, 500) ?? "N/A",
      };
    });
    console.log("Style element exists:", styleContent.exists);
    console.log("Style content (first 200 chars):", styleContent.content);

    expect(styleContent.exists).toBe(true);
    expect(styleContent.content).toContain("--color-primary");
  });

  test("debug: dump all CSS variable values on page load", async ({ page }) => {
    const vars = await page.evaluate(() => {
      const style = getComputedStyle(document.documentElement);
      const keys = [
        "--color-bg", "--color-surface", "--color-surface-hover",
        "--color-text", "--color-text-secondary",
        "--color-primary", "--color-primary-hover",
        "--color-border", "--color-border-hover",
      ];
      return Object.fromEntries(keys.map((k) => [k, style.getPropertyValue(k).trim()]));
    });
    console.log("CSS Variables on load:", JSON.stringify(vars, null, 2));

    // Check that primary has a value
    expect(vars["--color-primary"]).not.toBe("");
  });

  test("debug: check if theme-switcher component renders in DOM", async ({ page }) => {
    // Check the fixed container exists
    const container = page.locator("[class*='fixed'][class*='right-4'][class*='bottom-']");
    const count = await container.count();
    console.log("Fixed bottom-right containers found:", count);

    // Check all buttons on page
    const buttons = page.locator("button");
    const buttonCount = await buttons.count();
    console.log("Total buttons on page:", buttonCount);

    // List all button aria-labels
    for (let i = 0; i < buttonCount; i++) {
      const label = await buttons.nth(i).getAttribute("aria-label");
      const text = await buttons.nth(i).innerText().catch(() => "");
      console.log(`Button ${i}: aria-label="${label}", text="${text}"`);
    }
  });
});
