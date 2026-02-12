const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const ROOT = path.join(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'mockups');
const VIEWPORT = { width: 390, height: 844, deviceScaleFactor: 2 };

const pages = [
  { file: 'search.html', name: 'Search Screen Carpark Mock UI', out: 'search_screen_carpark_mock_ui.png' },
  { file: 'analytics.html', name: 'Carpark Analytics Mock UI', out: 'carpark_analytics_mock_ui.png' },
];

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const browser = await puppeteer.launch({ headless: 'new' });

  for (const { file, name, out } of pages) {
    const htmlPath = path.join(ROOT, file);
    const fileUrl = 'file://' + htmlPath.replace(/\\/g, '/');
    const page = await browser.newPage();
    await page.setViewport(VIEWPORT);
    await page.goto(fileUrl, { waitUntil: 'load', timeout: 15000 });
    await page.evaluate(() => new Promise(r => setTimeout(r, 800)));
    await page.screenshot({
      path: path.join(OUT_DIR, out),
      type: 'png',
      fullPage: false,
    });
    await page.close();
    console.log('Saved:', out);
  }

  await browser.close();
  console.log('Done. PNGs in mockups/');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
