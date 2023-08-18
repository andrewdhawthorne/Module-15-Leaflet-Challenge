// Creating initial map object 
var myMap = L.map("map", {
    center: [39.8283, -98.5795],
    zoom: 5
  });

  // Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);
  
// Use this link to get the GeoJSON data
let link = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson?";
  
// Getting our GeoJSON data for all earthquakes in past day 
d3.json(link).then(function(data) {
  console.log(data);
  // Creating a GeoJSON layer with the retrieved data
  L.geoJson(data).addTo(myMap);
}); 

var earthquake = data.features; 

features.forEach((id) => {

  console.log(id); 
});









// Define a markerSize() function that will give each earthquake a different radius based on its magnitude 
//function markerSize(magnitude) {
  //return Math.sqrt(magnitude) * 50;

//var earthquakes = []


// Define a markerSize() function that will give each earthquake a different color based on its depth  
