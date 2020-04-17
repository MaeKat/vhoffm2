var myMap = L.map('map').setView([45.8, -112.8], 2.8);

var Esri_NatGeoWorldMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
	maxZoom: 16,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(myMap);

var dataUrl = 'https://geog4046.github.io/assignment-resources/data/us_state_demographics_ESRI_2010A.geojson'

jQuery.getJSON(dataUrl, function (data) {
 
  var stateLines = function () {
    return {
      style: maleVsFemale,
      onEachFeature: mfPopup
    }
  }
  

  L.geoJSON(data, stateLines() ).addTo(myMap)

})


var maleVsFemale = function (feature) {
  var numMales = feature.properties.MALES 
  var numFemales = feature.properties.FEMALES
  var color = 'blue'
  var fill_color = "teal" 
  if ( numFemales > numMales ) {
     color = 'red'
     fill_color = "pink" 
} 
  return {
    color: color, 
    weight: 1,
    fillOpacity: 0.5,
    fillColor: fill_color
  }
}

var mfPopup = function (feature, layer) {
  var name = feature.properties.STATE_NAME
  var numMales = feature.properties.MALES 
  var numFemales = feature.properties.FEMALES
  layer.bindPopup('Number of Females in ' + name + ': ' + numFemales + '<br>Number of Males in ' + name + ': ' + numMales)
}