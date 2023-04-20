var map;
function initMap() {
    const { Map } = await google.maps.importLibrary("maps");

    map = new Map(document.getElementById("map"), {
    center: { lat: 41.8781, lng: -87.6298},
    zoom: 8

    });
}