const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1200 } });
  await page.goto('file:///D:/%23yeonhui/korea-consumer/Korea-Consumer-Agency-Renual/index.html');
  await page.waitForTimeout(1500);
  await page.evaluate(() => window.scrollTo(0, 2200));
  await page.waitForTimeout(500);
  const result = await page.evaluate(() => {
    const selectors = ['.notice_tab', '.notice_controls', '.notice_content_wrap', '.sec3_cardNews', '.sec3_consumer'];
    return selectors.map((selector) => {
      const el = document.querySelector(selector);
      if (!el) return { selector, found: false };
      const rect = el.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + Math.min(rect.height / 2, 20);
      const topEl = document.elementFromPoint(x, y);
      return {
        selector,
        rect: { left: rect.left, top: rect.top, width: rect.width, height: rect.height },
        topElement: topEl ? { tag: topEl.tagName, className: topEl.className, id: topEl.id } : null,
        same: !!topEl && (topEl === el || el.contains(topEl)),
        section3Z: getComputedStyle(document.querySelector('#section3')).zIndex,
        scrollY: window.scrollY
      };
    });
  });
  console.log(JSON.stringify(result, null, 2));
  await browser.close();
})();
