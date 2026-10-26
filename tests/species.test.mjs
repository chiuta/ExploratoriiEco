// EXPLORATORII ECO 2.0 — fișe de specie (jurnal ↔ enciclopedie), măsurători atașate din calculatoare, calculator de densitate, export CSV.
// Rulare: node tests/species.test.mjs
import {launch, check, summary, axeRun, hOverflow} from "./_lib.mjs";
import fs from "node:fs";

const {browser, page, st} = await launch({w: 1280, h: 900});
await page.waitForTimeout(1200);
const nav = async (sec) => { await page.evaluate((s) => document.querySelector('.navlink[data-sec="' + s + '"]').click(), sec); await page.waitForTimeout(120); };
const addObs = async (specie, numar = "1", loc = "", data = "2026-10-20") => {
  await page.fill("#jSpecies", specie); await page.fill("#jCount", String(numar)); await page.fill("#jDate", data); await page.fill("#jLoc", loc);
  await page.click("#jAddBtn");
};
const jlist = () => page.$$eval("#jList .journal-entry", (a) => a.map((e) => ({sp: e.querySelector(".jsp").textContent, link: e.querySelector(".jsp").tagName === "BUTTON", text: e.textContent})));

console.log("1. calculator de densitate pe transect");
await nav("calculatoare");
check("secțiunea 09 există", /Densitate pe transect/.test(await page.$eval("#sec-calculatoare", (e) => e.textContent)));
let out = await page.$eval("#transOut", (e) => e.textContent);
check("valorile implicite (12 / 500 m × 20 m) dau 12 ind./ha și 1200 ind./km²", /12 indivizi pe 10000 m² → 12 ind\.\/ha \(1\D?200 ind\.\/km²\)/.test(out), out);
await page.fill("#transN", "7"); await page.fill("#transL", "250"); await page.fill("#transW", "10");
out = await page.$eval("#transOut", (e) => e.textContent);
check("7 indivizi pe 2500 m² → 28 ind./ha", /7 indivizi pe 2500 m² → 28 ind\.\/ha/.test(out), out);
await page.fill("#transW", "0");
check("lățime 0: mesaj de validare", /lungimea și lățimea > 0/.test(await page.$eval("#transOut", (e) => e.textContent)));
await page.fill("#transN", "-1"); await page.fill("#transW", "10");
check("număr negativ respins", /≥ 0/.test(await page.$eval("#transOut", (e) => e.textContent)));
await page.fill("#transN", "0");
check("0 indivizi → 0 ind./ha", /0 indivizi pe 2500 m² → 0 ind\.\/ha/.test(await page.$eval("#transOut", (e) => e.textContent)));
await page.fill("#transN", "7");

console.log("2. atașare fără observații");
await page.click("#attBtn-trans");
check("fără observații: mesaj clar, nimic salvat", /Alege o observație/.test(await page.$eval("#attMsg-trans", (e) => e.textContent)));

console.log("3. jurnal ↔ fișă de specie");
await nav("jurnal");
check("lista de specii (datalist) are fișe flora + fauna", (await page.$$("#jSpeciesList option")).length >= 25);
await addObs("Fag", 3, "KN34bk", "2026-10-18");
await addObs("Fagus sylvatica (fag)", 2, "Cheile Turzii", "2026-10-20");
await addObs("Bubo bubo / buhă", 1);
await addObs("Pisică de casă", 1);
let L = await jlist();
check("Fag, Fagus sylvatica și Bubo bubo se leagă automat de fișă", L.filter((x) => x.link).length === 3 && L.find((x) => /Pisic/.test(x.sp)).link === false, L.map((x) => [x.sp, x.link]));
await page.click('#jList .specOpen[data-k="flora:Fagus sylvatica"]');
await page.waitForTimeout(150);
let card = await page.$eval("#specCard", (e) => ({hidden: e.hidden, t: e.textContent}));
check("fișa Fag se deschide cu 2 observații și 5 indivizi", !card.hidden && /Fișa speciei: Fag/.test(card.t) && /2 observații · 5 indivizi/.test(card.t), card.t.slice(0, 300));
check("fișa arată prima/ultima dată și locurile", /prima: 2026-10-18 · ultima: 2026-10-20/.test(card.t) && /KN34bk/.test(card.t) && /Cheile Turzii/.test(card.t));
check("fișa conține descrierea din enciclopedie", /Scoarță netedă, cenușie/.test(card.t));
check("focusul merge pe titlul fișei", await page.evaluate(() => document.activeElement && document.activeElement.id === "specCardH"));

console.log("4. enciclopedie → fișă");
await nav("flora");
let fagItem = await page.$$eval("#floraList .qitem", (a) => a.filter((q) => /Fagus sylvatica/.test(q.textContent)).map((q) => q.querySelector(".specOpen").textContent.trim()));
check("în enciclopedie, Fag arată „Fișa mea (2)”", fagItem.length === 1 && /Fișa mea \(2\)/.test(fagItem[0]), fagItem);
await page.click('#floraList .specOpen[data-k="flora:Taxus baccata"]');
await page.waitForTimeout(150);
check("fișa unei specii fără observații spune asta", /Nu ai încă nicio observație/.test(await page.$eval("#specCard", (e) => e.textContent)) && await page.$eval("#sec-jurnal", (e) => e.classList.contains("active")));
check("etichetă „protejat” păstrată în fișă", /protejat/.test(await page.$eval("#specCard", (e) => e.textContent)));
await page.click("#specEnc");
await page.waitForTimeout(150);
check("„Vezi în enciclopedie” filtrează lista după numele științific", (await page.$eval("#sec-flora", (e) => e.classList.contains("active"))) && (await page.$$("#floraList .qitem")).length === 1 && (await page.inputValue("#floraSearch")) === "Taxus baccata");
await page.fill("#floraSearch", "");
await nav("fauna");
check("faună: Bufniță/Bubo bubo arată 1 observație", await page.$$eval("#faunaList .qitem", (a) => a.some((q) => /Bubo bubo/.test(q.textContent) && /Fișa mea \(1\)/.test(q.textContent))));

console.log("5. calculatoare → măsurători în observație");
await nav("calculatoare");
const opts = await page.$$eval("#attSel-trans option", (a) => a.map((o) => o.textContent));
check("lista de atașare conține observațiile din jurnal", opts.length === 5 && /Fag/.test(opts[1]), opts);
await page.click("#attBtn-trans");
check("fără observație aleasă: mesaj", /Alege o observație/.test(await page.$eval("#attMsg-trans", (e) => e.textContent)));
await page.fill("#transN", "7"); await page.fill("#transL", "250"); await page.fill("#transW", "10");
const idxFag = await page.$$eval("#attSel-trans option", (a) => a.find((o) => /Fag.*2026-10-20/.test(o.textContent)).value);
await page.selectOption("#attSel-trans", idxFag);
await page.click("#attBtn-trans");
check("rezultatul se salvează în observație", /Rezultat salvat/.test(await page.$eval("#attMsg-trans", (e) => e.textContent)));
await page.selectOption("#attSel-grid", idxFag);
await page.fill("#gridLat", "46.5"); await page.fill("#gridLon", "23.7"); await page.click("#gridCalcBtn");
await page.click("#attBtn-grid");
const stored = await page.evaluate(() => null);
await nav("jurnal");
L = await jlist();
const fagEntry = L.find((x) => /Fagus sylvatica/.test(x.sp));
check("observația arată cele două măsurători atașate", /Densitate: 7 indivizi pe 2500 m² → 28 ind\.\/ha/.test(fagEntry.text) && /Locator Maidenhead/.test(fagEntry.text), fagEntry.text);
await page.click('#jList .specOpen[data-k="flora:Fagus sylvatica"]');
check("fișa speciei listează măsurătorile atașate", /Măsurători atașate/.test(await page.$eval("#specCard", (e) => e.textContent)) && /Densitate/.test(await page.$eval("#specCard", (e) => e.textContent)));
await page.click("#jList .measDel");
check("ștergerea unei măsurători o scoate din observație", (await page.$$("#jList .measDel")).length === 1);

console.log("6. plafon de 8 măsurători");
await nav("calculatoare");
await page.selectOption("#attSel-trans", idxFag);
for (let i = 0; i < 9; i++) await page.click("#attBtn-trans");
const nm = await page.$$eval("#jList .measDel", (a) => a.length);
check("maximum 8 măsurători pe observație, apoi mesaj", nm === 8 && /deja 8/.test(await page.$eval("#attMsg-trans", (e) => e.textContent)), nm);

console.log("7. export / import");
await nav("jurnal");
const dl = page.waitForEvent("download");
await page.click("#jExportBtn");
const jpath = await (await dl).path();
const J = JSON.parse(fs.readFileSync(jpath, "utf8"));
check("exportul JSON include măsurătorile", J.observatii.some((o) => Array.isArray(o.masuratori) && o.masuratori.length === 8), J.observatii.map((o) => (o.masuratori || []).length));
const hostile = {tip: "exploratorii-eco-jurnal", versiune: 1, observatii: [
  {specie: "Fag", numar: "1", data: "2026-01-01", masuratori: Array.from({length: 30}, (_, i) => ({tip: "x".repeat(500), rez: "<img src=x onerror=alert(1)>" + "y".repeat(1000), extra: i}))},
  {specie: "Lup", masuratori: "nu-e-lista"},
  {specie: "Urs", masuratori: [null, 5, {rez: ""}, {tip: "ok", rez: "bun"}]},
  {specie: "Râs", masuratori: {0: {rez: "obiect"}}},
]};
fs.writeFileSync("/tmp/hostile-jurnal.json", JSON.stringify(hostile));
await page.setInputFiles("#jImportFile", "/tmp/hostile-jurnal.json");
await page.waitForTimeout(500);
const imp = await page.evaluate(() => [...document.querySelectorAll("#jList .journal-entry")].map((e) => ({sp: e.querySelector(".jsp").textContent, meas: [...e.querySelectorAll(".jmeas")].map((m) => m.textContent.length), html: e.innerHTML.includes("<img")})));
const fag30 = imp.filter((x) => x.sp === "Fag").find((x) => x.meas.length === 8 && x.meas.every((n) => n <= 300));
check("import ostil: 30 măsurători → 8, câmpuri tăiate la lungimea maximă", !!fag30, imp);
check("import ostil: HTML-ul din măsurători nu devine element", imp.every((x) => !x.html));
const urs = imp.find((x) => x.sp === "Urs");
check("import ostil: intrările invalide sunt omise, cea validă rămâne", urs && urs.meas.length === 1);
check("import ostil: măsurători ne-listă ignorate", imp.find((x) => x.sp === "Lup").meas.length === 0 && imp.find((x) => x.sp === "Râs").meas.length === 0);
check("fără alert / pageerror", st.errs.length === 0, st.errs);

console.log("8. export CSV");
const dl2 = page.waitForEvent("download");
await page.click("#jCsvBtn");
const csv = fs.readFileSync(await (await dl2).path(), "utf8");
const lines = csv.trim().split("\r\n");
check("CSV: antet cu coloane Darwin Core", /^\uFEFF?scientificName,vernacularName,individualCount,eventDate,eventTime,verbatimLocality,behavior,occurrenceRemarks,measurementRemarks$/.test(lines[0]), lines[0]);
check("CSV: numele științific vine din fișă (Fag → Fagus sylvatica), restul rămân ca introduse", lines.some((l) => /^"Fagus sylvatica","Fag"/.test(l)) && lines.some((l) => /^"Pisică de casă",""/.test(l)));
check("CSV: măsurătorile ajung în measurementRemarks", lines.some((l) => /Densitate: 7 indivizi/.test(l)));
await addObs("=HYPERLINK(\"http://x\")", 1);
const dl3 = page.waitForEvent("download"); await page.click("#jCsvBtn");
const csv2 = fs.readFileSync(await (await dl3).path(), "utf8");
check("CSV: injecția de formule e neutralizată", /"'=HYPERLINK/.test(csv2) && !/^"=/m.test(csv2));

console.log("9. păstrare pe dispozitiv");
await page.check("#jKeep");
await page.waitForTimeout(200);
await page.goto(page.url()); await page.waitForTimeout(1200);
await nav("jurnal");
L = await jlist();
check("după reîncărcare observațiile revin, cu măsurători și legătura la fișă", L.length >= 5 && (await page.$$("#jList .measDel")).length >= 8 && L.some((x) => x.link), L.length);

console.log("10. limbi");
for (const l of ["en", "fr", "it", "es", "pt", "de", "hu"]) {
  await page.selectOption("#langSel", l); await page.waitForTimeout(150);
  await nav("calculatoare");
  const h = await page.$eval("#sec-calculatoare", (e) => e.textContent);
  const romanian = /Densitate pe transect|Indivizi numărați|Atașează rezultatul/.test(h);
  await nav("jurnal");
  const j = await page.$eval("#sec-jurnal", (e) => e.textContent);
  check("limba " + l + ": calculatorul 09, atașarea și fișa nu rămân în română", !romanian && !/Exportă CSV \(coloane|Fișa mea|Alege o specie din listă/.test(j), [romanian]);
}
await page.selectOption("#langSel", "ro");

console.log("11. accesibilitate, mobil, rețea");
check("0 erori / 0 rețea", st.errs.length === 0 && st.net.length === 0, [st.errs, st.net]);
await page.setViewportSize({width: 360, height: 740}); await page.waitForTimeout(200);
await nav("jurnal");
check("fără depășire orizontală la 360 px (jurnal)", (await hOverflow(page)) <= 1, await hOverflow(page));
await nav("calculatoare");
check("fără depășire orizontală la 360 px (calculatoare)", (await hOverflow(page)) <= 1, await hOverflow(page));
await browser.close();
{
  const L2 = await launch({w: 1280, h: 900, bypassCSP: true});
  await L2.page.waitForTimeout(1200);
  await L2.page.click('.navlink[data-sec="jurnal"]');
  await L2.page.fill("#jSpecies", "Fag"); await L2.page.click("#jAddBtn");
  await L2.page.click("#jList .specOpen");
  const ax1 = await axeRun(L2.page);
  check("axe 0 violări pe jurnal cu fișa deschisă", ax1 === null || ax1.length === 0, ax1);
  await L2.page.click('.navlink[data-sec="calculatoare"]');
  const ax2 = await axeRun(L2.page);
  check("axe 0 violări pe calculatoare", ax2 === null || ax2.length === 0, ax2);
  await L2.browser.close();
}
summary();
