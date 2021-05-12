// Add console.log to check to see if our code is working.
console.log("working");
// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([37.6213, -122.3790], 4);
// We create the tile layer that will be the background of our map.

// Then we add our 'graymap' tile layer to the map.
// We create the tile layer that will be the background of our map.
//to change the background of the map change "streets-v11" with "dark-v10 
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
//creating lines between airports
let line = [
    [37.6213, -122.3790],
    [39.849312, -104.673828],
    [43.6777, -79.6248],
    //[8.9834, -38.7963],
    [32.8998, -97.0403]
  ];
 // Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    strokeOpacity: 0.5,
    scale: 4,
    color: "blue"
  }).addTo(map);
  
  