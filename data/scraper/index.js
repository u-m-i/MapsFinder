// Try puppeteer, but if possible pass to puppeteer-core
import fs from "fs/promises";
import puppeteer from "puppeteer";

const TARGET = `https://www.amb.gov.co/rutas-publico-colectivo-complementario/`;

const browser = await puppeteer.launch({ headless: "new" });
const page = await browser.newPage();

const queries = {
  mapsContainer: "div.vc_tta-panels-container",
  mapsClass: "div.vc_tta-panel",
  mapsIds: [],
};

const folderName = new Date(Date.now()).toLocaleString("es-CO").split(',')[0].replaceAll('/', '-');

await fs.mkdir(`../json/${folderName}`);

const path = (fileName) => `../json/${folderName}/${fileName}`;

await page.goto(TARGET);

/** More about at `https://pptr.dev/guides/page-interactions#locators` */

const mapsContainer = await page.$eval(queries.mapsContainer, (node) => {
  console.log(node.innerHTML);

  return node.innerHTML;
});


await fs.writeFile(path("maps.xml"), mapsContainer, (error) => {
  if (error) {
    console.log("Error writing the XML file");
  }
});

const maps = await page.$$eval(queries.mapsClass, (nodes) =>
  nodes.map((node) => ({nodeId: node.id})),
);

queries.maps = maps;

await fs.writeFile(
  path("scrap-targets.json"),
  JSON.stringify(queries, null, 2),
  (error) => {},
);

await browser.close();