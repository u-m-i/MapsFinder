<!-- <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAnWWgrVioUDz3-wFjlSunUsGG4u9srYSs&libraries=places&callback=initMap" async defer> -->
<script>
  import Map from "./Map";

    let directionsService;
    let directionsRenderer;
    /**
     * @type {*}
     */
    const state = {
      inputs: {
        origin: undefined,
        destination: undefined,
      }
    };


    function setupAutocomplete(location) {
      const box = document.getElementById("route-box");

      /* Set a locationBias */

      // Bias the search results towards Bucaramanga, Colombia
      // Search API
      // const options = {
      //   componentRestrictions: { country: 'co' }, // Colombia
      //   fields: ['place_id', 'geometry', 'name', 'formatted_address'],
      // };

      const options = {
        includedRegionCodes: ["co"],
        locationBias: location,
      };

      state.inputs.origin = new google.maps.places.PlaceAutocompleteElement(options);
      state.inputs.destination = new google.maps.places.PlaceAutocompleteElement(options);

      // originInput.addEventListener('place_changed', calculateAndDisplayRoute);
      // destInput.addEventListener('place_changed', calculateAndDisplayRoute);

      box.append(state.inputs.origin, state.inputs.destination);
      // destinationLabel.appendChild(destInput);
    }

    function calculateAndDisplayRoute() {
      const start = state.inputs.origin.Eg.value;
      const end = state.inputs.destination.Eg.value;

      // Only run if both fields have values
      if (!start || !end) {
        return;
      }


      // Request the route
      const request = {
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC, // Use kilometers
      };

      directionsService.route(request, (response, status) => {
        if (status === 'OK') {
          directionsRenderer.setDirections(response);
        } else {
          // Display an error to the user if the route could not be found
          window.alert('Could not find a route: ' + status);
          directionsRenderer.setDirections({ routes: [] }); // Clear any previous route
        }
      });
    }
</script>

<svelte:head>
  <title>Dynamic Route Tracing - Bucaramanga</title>
  <link type="text/css" rel="stylesheet" href="./fast.css"/>
  <script>
    (g => { var h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__", m = document, b = window; b = b[c] || (b[c] = {}); var d = b.maps || (b.maps = {}), r = new Set, e = new URLSearchParams, u = () => h || (h = new Promise(async (f, n) => { await (a = m.createElement("script")); e.set("libraries", [...r] + ""); for (k in g) e.set(k.replace(/[A-Z]/g, t => "_" + t[0].toLowerCase()), g[k]); e.set("callback", c + ".maps." + q); a.src = `https://maps.${c}apis.com/maps/api/js?` + e; d[q] = f; a.onerror = () => h = n(Error(p + " could not load.")); a.nonce = m.querySelector("script[nonce]")?.nonce || ""; m.head.append(a) })); d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)) })({
      key: "AIzaSyAnWWgrVioUDz3-wFjlSunUsGG4u9srYSs",
      v: "weekly",
    });
  </script>
</svelte:head>

<body>
  <div id="route-box">
    <!-- <label id="origin-label"></label>
    <label id="destination-label"></label> -->
    <button id="route-finder">
      Find Route
    </button>
  </div>

  <div id="map"></div>
  <Map></Map>
</body>