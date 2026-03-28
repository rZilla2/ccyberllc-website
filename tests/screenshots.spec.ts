import { test } from "@playwright/test";

const pages = [
  { name: "homepage", path: "/" },
  { name: "services", path: "/services" },
  { name: "about", path: "/about" },
  { name: "contact", path: "/contact" },
];

for (const pg of pages) {
  test(`screenshot ${pg.name}`, async ({ page }, testInfo) => {
    await page.goto(pg.path);
    await page.waitForTimeout(1000);
    await page.screenshot({
      path: `screenshots/${testInfo.project.name}-${pg.name}.png`,
      fullPage: true,
    });
  });
}
