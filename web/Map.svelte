<script>

  import { onMount } from "svelte";

  let mapElement;

    function initMap(google) {
      // Initialize the Map centered on Bucaramanga, Colombia
      /** @type {google.maps.LatLng} */
      const bucaramanga = { lat: 7.11391, lng: -73.1198 };

      map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: bucaramanga,
        mapTypeControl: false
      });

      directionsService = new google.maps.DirectionsService();
      directionsRenderer = new google.maps.DirectionsRenderer({
        map: map,
        draggable: true // Allows users to dynamically change the route by dragging markers
      });

      // Optional: Recalculate if the user drags the route on the map
      directionsRenderer.addListener("directions_changed", () => {
        const directions = directionsRenderer.getDirections();
        if (directions) {
          // This logs the summary of the dynamically changed route
          console.log("Route dynamically updated. Distance:", directions.routes[0].legs[0].distance.text);
        }
      });

      document.getElementById("route-finder").onclick = calculateAndDisplayRoute;
    }

    onMount(async () => {

    const { Place } = await window.google.maps.importLibrary("places");

    initMap(window.google);
    });
</script>

<div bind:this={mapElement}></div>