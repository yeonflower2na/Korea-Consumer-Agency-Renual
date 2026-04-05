const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1200 } });
  const errors = [];
  page.on('pageerror', error => errors.push({ type: 'pageerror', message: error.message }));
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push({ type: 'console', message: msg.text() });
  });

  await page.goto('file:///D:/%23yeonhui/korea-consumer/Korea-Consumer-Agency-Renual/index.html');
  await page.waitForTimeout(1500);
  await page.evaluate(() => window.scrollTo(0, 2200));
  await page.waitForTimeout(500);

  const before = await page.evaluate(() => ({
    activeTab: document.querySelector('.notice_tab.active')?.textContent?.trim(),
    activePanel: document.querySelector('.notice_menu_list.active')?.id,
    section3Ready: typeof section3Asset === 'function'
  }));

  await page.click('.notice_tab[data-target="2"]');
  await page.waitForTimeout(300);
  const afterTabClick = await page.evaluate(() => ({
    activeTab: document.querySelector('.notice_tab.active')?.textContent?.trim(),
    activePanel: document.querySelector('.notice_menu_list.active')?.id
  }));

  await page.click('.notice_next');
  await page.waitForTimeout(300);
  const afterNextClick = await page.evaluate(() => ({
    activePanel: document.querySelector('.notice_menu_list.active')?.id,
    activeSlides: document.querySelectorAll('.notice_menu_list.active .swiper-slide-active').length
  }));

  console.log(JSON.stringify({ errors, before, afterTabClick, afterNextClick }, null, 2));
  await browser.close();
})();
