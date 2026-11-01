const { chromium } = require(process.env.TEMP + '/eon-responsive-qa/node_modules/playwright-core');
const fs = require('node:fs');
const path = require('node:path');
const phase = process.argv[2] || 'before';
const sizes = [[320,568],[360,800],[390,844],[430,932],[768,1024],[1024,768],[1280,720],[1920,1080],[2560,1440],[599,800],[600,800],[767,900],[825,900],[900,800],[901,800],[1100,800],[1281,800]];
(async () => {
 const browser = await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe', headless:true});
 const dir = path.join('docs','responsive',phase); fs.mkdirSync(dir,{recursive:true});
 const results=[];
 for(const [width,height] of sizes){
  const page=await browser.newPage({viewport:{width,height}}); const errors=[];
  page.on('pageerror', e=>errors.push(e.message));
  await page.goto('http://127.0.0.1:5173/'); await page.evaluate(()=>document.fonts.ready);
  await page.addStyleTag({content:'html { scroll-behavior:auto !important; }'});
  const layout=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth, outside:[...document.querySelectorAll('h1,h2,p,input,button,.pillar,.resonance__reveal')].filter(e=>{const r=e.getBoundingClientRect();return r.left< -1||r.right>innerWidth+1}).map(e=>e.className)}));
  await page.locator('.join__header').scrollIntoViewIfNeeded();
  await page.waitForFunction(()=>getComputedStyle(document.querySelector('.join__form')).opacity==='1');
  const formVisible=await page.locator('.join__form').evaluate(e=>getComputedStyle(e).opacity==='1');
  results.push({width,height,...layout,formVisible,errors});
  if([390,768,1920].includes(width)){
   await page.locator('#availability').scrollIntoViewIfNeeded(); await page.waitForTimeout(20000);
   await page.locator('#resonance').scrollIntoViewIfNeeded(); await page.waitForTimeout(20000);
   await page.screenshot({path:path.join(dir,`${width}-full.png`),fullPage:true});
   await page.locator('#hero').scrollIntoViewIfNeeded(); await page.screenshot({path:path.join(dir,`${width}-hero.png`)});
  }
  await page.close();
 }
 fs.writeFileSync(path.join(dir,'matrix.json'),JSON.stringify(results,null,2));
 console.log(JSON.stringify(results,null,2)); await browser.close();
})();
