# Maps Finder

A route finder working with Google Maps.

## Goals

1. Clean the primary data (Currently at)
2. Query information about each traverse
3. Use the information + Google Maps

### 1. Clean the primary data (Data mining)

#### Buses' routes data

Updated information about all the transportation system: `https://www.datos.gov.co/Transporte/8-RUTAS-TRANSPORTE-URBANO/kcdt-jbvj/about_data`,
and map illustration of each route if it is needed: `https://www.amb.gov.co/rutas-publico-colectivo-complementario/#1690929061667-426b45df-5f88`.

To play rapidly with queries visit: `https://www.datos.gov.co/en/Transporte/8-RUTAS-TRANSPORTE-URBANO/kcdt-jbvj/explore/query`, base encoded component: `SELECT%0A%20%20%60codigo%60%2C%0A%20%20%60ruta%60%2C%0A%20%20%60terminal%60%2C%0A%20%20%60empresa%60%2C%0A%20%20%60cartel_de_ruta_ida%60%2C%0A%20%20%60recorrido%60%2C%0A%20%20%60capacidad_minima%60%2C%0A%20%20%60capacidad_maxima%60%2C%0A%20%20%60frecuencia_de_despacho_hora_pico%60%2C%0A%20%20%60hora_primer_despacho%60%2C%0A%20%20%60hora_ultimo_despacho%60%2C%0A%20%20%60long_km%60%2C%0A%20%20%60servicio%60%2C%0A%20%20%60clase%60%2C%0A%20%20%60cartel_de_ruta_regreso%60%2C%0A%20%20%60frecuencia_despacho_hora_valle%60/page/filter`

All retreived data and scripts is being saved under `/data` and `NOTES.md` is there to find any clarification.

#### Buses routes description patterns

Properties that are key to build a data structure that can help.

* They are circular, meaning that they end exactly at where they started.
* Each street or avenue is separated with a hyphen '-'
* Sometimes is possible to see a '- -', meaning that a place was deleted or it was a mistake from who wrote them.

* The values were human made (noticeably)

#### Scrapy the buses routes

There is a public page ``, that allows to see the route drew on the map, with this as guide is possible to contrast the result of the search algorithm and the 'official route'

Every map has an iframe like this:

``` HTML
<iframe loading="lazy" src="https://www.google.com/maps/d/u/1/embed?mid=11vUH9m9HZ6fknyUKUoz11QaS_BvaRRo&amp;ehbc=2E312F" width="800" height="480"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe>
```

Every map is under the `<div class="wpb_text_column wpb_content_element">` node parent and at the same all the map parents have a container `<div class="vc_tta-panels-container">`.


### 2. Query information about each route

Once the data is cleaned and easy to traverse, how we enquire it?

### 3. Use the information + Google Maps

* Search API for using the `autoComplete`

Create the `autoComplete` instance: `https://developers.google.com/maps/documentation/javascript/reference/places-widget#PlaceAutocompleteElement`

Use the next object to configure the instance:

``` JavaScript
  const options = {
    includedRegionCodes: ["co"],
    locationBias: location,
  };
```

We use `LatLng`(`https://developers.google.com/maps/documentation/javascript/reference/coordinates#LatLng`) to configure the `AutocompleteElement.locationBias`.

Is possible to use the `Circle` (`https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es-419#CircleOptions`)

### Tutorials

[Embed and customize maps](https://smultron.software/blog/embed-and-customize-google-maps)

> The easiest way (but also the one that gives you the least amount of control) is to embed the map view via an iframe directly from Google Maps.

> So if you need to embed a map with multiple markers, information on the coverage of a selected service, or enrich it with interactions or data that are not publicly available, it is worth turning to a specialist with such a task.

> For sites with higher traffic, you will have to pay for each additional 1,000 requests. Fees vary, depending on the API used and the total number of requests. As an example, the cost of Maps Javascript API, after exceeding 28,500 requests, is $7 for each additional 1,000 requests (above 100,000 requests, the cost per 1,000 requests decreases)

