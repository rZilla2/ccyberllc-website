import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("hero section renders with content visible", async ({ page }) => {
    const hero = page.locator("h1");
    await expect(hero).toBeVisible();
    await expect(hero).toContainText("Strategic Direction");
  });

  test("navbar logo is visible", async ({ page }) => {
    const logo = page.locator('header img[alt="Convergent Cyber"]');
    await expect(logo).toBeVisible();
  });

  test("Book a Meeting button is visible and clickable", async ({ page }) => {
    const cta = page.locator("a", { hasText: "Book a Meeting" }).first();
    await expect(cta).toBeVisible();
    const box = await cta.boundingBox();
    expect(box).not.toBeNull();
    expect(box!.width).toBeGreaterThanOrEqual(36);
    expect(box!.height).toBeGreaterThanOrEqual(36);
  });

  test("carousel dot indicators have adequate touch targets", async ({ page }) => {
    const dots = page.locator('button[aria-label^="Go to slide"]');
    const count = await dots.count();
    expect(count).toBe(4);

    for (let i = 0; i < count; i++) {
      const box = await dots.nth(i).boundingBox();
      expect(box).not.toBeNull();
      expect(box!.width).toBeGreaterThanOrEqual(24);
      expect(box!.height).toBeGreaterThanOrEqual(24);
    }
  });

  test("carousel arrows have aria-labels", async ({ page }) => {
    await expect(page.locator('button[aria-label="Previous slide"]')).toBeVisible();
    await expect(page.locator('button[aria-label="Next slide"]')).toBeVisible();
  });

  test("no horizontal overflow", async ({ page }) => {
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const viewportWidth = await page.evaluate(() => window.innerWidth);
    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth);
  });

  test("below-fold sections render", async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await expect(page.locator("h2", { hasText: "How We Help" })).toBeVisible();
    await expect(page.locator("h2", { hasText: "Built by Practitioners" })).toBeVisible();
    await expect(page.locator("h2", { hasText: "Ready to Elevate" })).toBeVisible();
  });

  test("footer renders with correct headings", async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    const footerHeadings = page.locator("footer h2");
    const count = await footerHeadings.count();
    expect(count).toBe(3);
  });
});

test.describe("Inner pages", () => {
  test("services page renders", async ({ page }) => {
    await page.goto("/services");
    await expect(page.locator("h1")).toContainText("Strategic Security Expertise");
  });

  test("about page renders", async ({ page }) => {
    await page.goto("/about");
    await expect(page.locator("h1")).toContainText("Built by Practitioners");
  });

  test("contact page renders with form", async ({ page }) => {
    await page.goto("/contact");
    await expect(page.locator("h1")).toContainText("Discuss Your Growth");
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
  });
});

test.describe("Navigation", () => {
  test("nav links work", async ({ page, isMobile }) => {
    await page.goto("/");

    if (isMobile) {
      // Mobile: nav links are hidden, use footer links instead
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.locator("footer a", { hasText: "vCISO Engagements" }).click();
      await expect(page).toHaveURL(/\/services/);
    } else {
      await page.locator("header a", { hasText: "Services" }).click();
      await expect(page).toHaveURL(/\/services/);

      await page.locator("header a", { hasText: "About" }).click();
      await expect(page).toHaveURL(/\/about/);

      await page.locator("header a", { hasText: "Contact" }).click();
      await expect(page).toHaveURL(/\/contact/);
    }
  });

  test("skip nav link targets main content", async ({ page }) => {
    await page.goto("/");
    const skipLink = page.locator('a[href="#main-content"]');
    await expect(skipLink).toHaveCount(1);
  });

  test("scroll changes navbar background", async ({ page, isMobile }) => {
    test.skip(!!isMobile, "scroll detection test for desktop only");
    await page.goto("/");
    const header = page.locator("header");

    // Initially transparent
    await expect(header).not.toHaveClass(/backdrop-blur/);

    // After scroll
    await page.evaluate(() => window.scrollTo(0, 100));
    await page.waitForTimeout(500);
    await expect(header).toHaveClass(/backdrop-blur/);
  });
});
