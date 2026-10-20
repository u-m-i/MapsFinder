import fs from 'fs/promises'

/**
 * 
 * @param {String} mid - ID of the 'My Maps' entity
 */
async function getKML(mid){

    const URI = `https://www.google.com/maps/d/kml?mid=<MID>&forcekml=1`

    await fetch(URI)
}

/**
 * @param {String|URL} file - innerHTML of `div.vc_tta-panels-container` saved by `index.js`
 */
async function loadRawMap(file = new URL('../json/scrapped/30-8-2026/maps.xml', import.meta.url)){

    return fs.readFile(file, 'utf-8')
}

async function getAllmid(){

    // * Loads the map
    const rawMap = await loadRawMap()

    // Text of the <td> next to the one labeled `label`, without tags
    const cell = (panel, label) => {
        const match = panel.match(new RegExp(`<td[^>]*>(?:<[^>]*>|\\s|&nbsp;)*${label}(?:<[^>]*>|\\s|&nbsp;)*</td>\\s*<td[^>]*>([\\s\\S]*?)</td>`))
        return match ? match[1].replace(/<[^>]*>/g, '').replaceAll('&nbsp;', ' ').trim() : ''
    }

    // * analyze every mid and extract it
    return rawMap
        .split(/class="vc_tta-panel[ "]/)
        .slice(1)
        .map((panel) => ({
            mid: panel.match(/mid=([^&"]+)/)?.[1] ?? '',
            routeCode: cell(panel, 'C[ÓO]DIGO'),
            routeString: cell(panel, 'RECORRIDO'),
            routeTitel: panel.match(/vc_tta-title-text">([^<]*)/)?.[1].trim() ?? '', // Yes in German
        }))
}

async function saveKML(){

}

async function saveObject(method){

}

/**
 * KML has lng/lat/alt
 * 
 * 
 */