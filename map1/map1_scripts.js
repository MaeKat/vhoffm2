var myMap = L.map('mapID').setView([50.18, 10.14], 6);

L.tileLayer('https://dev.{s}.tile.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
	maxZoom: 20,
    attribution: '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(myMap);

var myMarker = L.marker([50.18, 10.14]).addTo(myMap)

var myPoly = L.polygon([
    [52.18, 12.0],
    [50.18, 10.14],
    [51, 13.7]
  ]).addTo(myMap)

  var myLine = L.polygon([
    [52.18, 13.0],
    [52.18, 11.14],
  ]).addTo(myMap)

myPoly.bindPopup('this is a nice triangle')
myMarker.bindPopup('This is a marker on my map')
myLine.bindPopup('This is a line on a map that I made')
