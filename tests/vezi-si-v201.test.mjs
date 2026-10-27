import {launch,check,summary} from "./_lib.mjs";
const {page,st}=await launch({});
await page.waitForTimeout(1200);
const q=async()=>page.evaluate(()=>{const a=[...document.querySelectorAll('#sec-intro a, section a[href*="chiuta.github.io/FieldObserver"]')];const n=document.querySelector('a[href*="FieldObserver"]').closest('.note');return {t:n.textContent,hrefs:[...n.querySelectorAll('a')].map(x=>x.href+'|'+x.rel+'|'+x.target)}});
let r=await q(); check('ro are Vezi și',/Vezi și/.test(r.t),r.t); check('2 linkuri rel',r.hrefs.length===2&&r.hrefs.every(h=>h.includes('noopener')),r.hrefs);
for(const l of ['en','de','hu']){
  await page.evaluate(x=>{const s=document.getElementById("langSel"); s.value=x; s.dispatchEvent(new Event("change",{bubbles:true}));},l);
  await page.waitForTimeout(600);
}
const d=await page.evaluate(()=>[document.querySelector('meta[name=description]').content.slice(0,60),JSON.parse(document.getElementById('fff-info').textContent).description.slice(0,60),document.documentElement.lang]);
console.log(d);
check('fără rețea',st.net.length===0,st.net); check('fără erori',st.errs.length===0,st.errs); check('fără CSP',(await page.evaluate(()=>window.__csp)).length===0);
summary();
