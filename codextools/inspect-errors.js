const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1200 } });
  const errors = [];
  page.on('pageerror', error => errors.push({ type: 'pageerror', message: error.message, stack: error.stack }));
  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push({ type: 'console', message: msg.text() });
    }
  });
  await page.goto('file:///D:/%23yeonhui/korea-consumer/Korea-Consumer-Agency-Renual/index.html');
  await page.waitForTimeout(2000);
  console.log(JSON.stringify(errors, null, 2));
  await browser.close();
})();
