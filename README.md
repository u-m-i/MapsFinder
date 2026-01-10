
## Procedure

### Goals

1. Clean the primary data
2. Query information about each traverse
3. Use the information + Google Maps

### 1.  Clean the primary data

### 2. Query information about each traverse

### 3. Use the informatio + Google Maps

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

## Buses information

Updated information about all the transportation system: `https://www.datos.gov.co/Transporte/8-RUTAS-TRANSPORTE-URBANO/kcdt-jbvj/about_data`

Under `/data` all the data formats, scripts and raw information live.

If confirmation and map illustration is needed: `https://www.amb.gov.co/rutas-publico-colectivo-complementario/#1690929061667-426b45df-5f88`

### Tutorials

[Embed and customize maps](https://smultron.software/blog/embed-and-customize-google-maps)

> The easiest way (but also the one that gives you the least amount of control) is to embed the map view via an iframe directly from Google Maps.

> So if you need to embed a map with multiple markers, information on the coverage of a selected service, or enrich it with interactions or data that are not publicly available, it is worth turning to a specialist with such a task.

> For sites with higher traffic, you will have to pay for each additional 1,000 requests. Fees vary, depending on the API used and the total number of requests. As an example, the cost of Maps Javascript API, after exceeding 28,500 requests, is $7 for each additional 1,000 requests (above 100,000 requests, the cost per 1,000 requests decreases)

