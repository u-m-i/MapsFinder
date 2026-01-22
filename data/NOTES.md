

### Under the json Folder

*buses.json*: describe the properties of each bus and its route. state: dirty.
taken from: `https://www.datos.gov.co/resource/kcdt-jbvj.json`. also can be taken at: `https://www.datos.gov.co/api/odata/v4/kcdt-jbvj` comment: use GET without any Auth header to get the JSON.


*carrera-33.json*: buses that have this avenue included on its route. state: dirty.
taken from: `https://www.datos.gov.co/resource/kcdt-jbvj.json?$query=SELECT%0A%20%20%60codigo%60%2C%0A%20%20%60ruta%60%2C%0A%20%20%60terminal%60%2C%0A%20%20%60empresa%60%2C%0A%20%20%60cartel_de_ruta_ida%60%2C%0A%20%20%60recorrido%60%2C%0A%20%20%60capacidad_minima%60%2C%0A%20%20%60capacidad_maxima%60%2C%0A%20%20%60frecuencia_de_despacho_hora_pico%60%2C%0A%20%20%60hora_primer_despacho%60%2C%0A%20%20%60hora_ultimo_despacho%60%2C%0A%20%20%60long_km%60%2C%0A%20%20%60servicio%60%2C%0A%20%20%60clase%60%2C%0A%20%20%60cartel_de_ruta_regreso%60%2C%0A%20%20%60frecuencia_despacho_hora_valle%60%0AWHERE%0A%20%20%60terminal%60%20IS%20NOT%20NULL%0A%20%20AND%20caseless_contains(%60cartel_de_ruta_ida%60%2C%20%22CARRERA%2033%22)`


Every bus has:

``` JSON
  {
    "codigo": "",
    "ruta": "GALÁN MODELO ESTADIO",
    "terminal": "BARRIO GALÁN",
    "empresa": "COTRANDER",
    "cartel_de_ruta_ida": "",
    "recorrido": "",
    "capacidad_minima": "15",
    "capacidad_maxima": "19",
    "frecuencia_de_despacho_hora_pico": "7",
    "hora_primer_despacho": "05:00:00 a.m.",
    "hora_ultimo_despacho": "08:00:00 p.m.",
    "servicio": "BASICO",
    "clase": "BUS / BUSETA / MICROBUS",
    "frecuencia_despacho_hora_valle": "12"
  }
```

Observations

* `"hora_primer_despacho"` and `"hora_ultimo_despacho"` is not always present
* `"ruta"` have separated with a hyphen '-' a value within.

* Ibid. Sometimes is possible to see a '- -', meaning that a place was deleted or it was a mistake from who wrote them.
* Ibid.  meaning that they end exactly at where they started.

* It was human made (noticeably)

Where to query: `https://www.datos.gov.co/en/Transporte/8-RUTAS-TRANSPORTE-URBANO/kcdt-jbvj/explore/query`.
Documentation: `https://support.socrata.com/hc/en-us/articles/115005364207-Access-Data-Insights-Data-using-OData`.

Base encoded component: `SELECT%0A%20%20%60codigo%60%2C%0A%20%20%60ruta%60%2C%0A%20%20%60terminal%60%2C%0A%20%20%60empresa%60%2C%0A%20%20%60cartel_de_ruta_ida%60%2C%0A%20%20%60recorrido%60%2C%0A%20%20%60capacidad_minima%60%2C%0A%20%20%60capacidad_maxima%60%2C%0A%20%20%60frecuencia_de_despacho_hora_pico%60%2C%0A%20%20%60hora_primer_despacho%60%2C%0A%20%20%60hora_ultimo_despacho%60%2C%0A%20%20%60long_km%60%2C%0A%20%20%60servicio%60%2C%0A%20%20%60clase%60%2C%0A%20%20%60cartel_de_ruta_regreso%60%2C%0A%20%20%60frecuencia_despacho_hora_valle%60/page/filter`


### Enquiries

  * *Buses available hours*
 
  * *Buses routes card*

  * *Buses routes traverse*