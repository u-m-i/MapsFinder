// Try puppeteer, but if possible pass to puppeteer-core
import fs from "fs/promises";
import puppeteer from "puppeteer";

const browser = await puppeteer.launch({ headless: "new" });
const page = await browser.newPage();

const queries = {
  mapsContainer: "div.vc_tta-panels-container",
  mapsClass: "div.vc_tta-panel",
  mapsIds: [],
};

await page.goto(process.env.MAPS_URL);

/** More about at `https://pptr.dev/guides/page-interactions#locators` */

const mapsContainer = await page.$eval(queries.mapsContainer, (node) => {
  console.log(node.innerHTML);

  return node.innerHTML;
});

// console.debug(mapsContainer);


await fs.writeFile("../json/maps.html", mapsContainer, (error) => {
  if (error) {
    console.log("Error writing the XML file");
  }
});

const ids = await page.$$eval(queries.mapsClass, (nodes) =>
  nodes.map((node) => node.id),
);

queries.mapsIds = ids;

await fs.writeFile(
  "../json/scrap-targets.json",
  JSON.stringify(queries),
  (error) => {},
);

await browser.close();