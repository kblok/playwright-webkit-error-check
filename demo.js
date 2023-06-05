const playwright = require("playwright");

(async () => {
  const context = await playwright.webkit.launchPersistentContext("persist", {
    headless: true,
  });
  const page = (await context.pages())[0];
  await page.goto("https://playwright.dev");
  await page.close();
  await context.close();
})();
