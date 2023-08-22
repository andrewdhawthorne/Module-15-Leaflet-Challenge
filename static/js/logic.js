// Use this link to get the GeoJSON earthquake data
let queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson?";

// Create initial map object 
var myMap = L.map("map", {
    // Set the initial center of the map
    center: [39.8283, -98.5795],
    // Set the initial zoom level
    zoom: 5
});

// Add a tile layer (the background map image) to map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Perform a GET request for all earthquakes in past day 
d3.json(queryUrl).then((data) => {
    // Console log the data and inspect 
    console.log(data);

    // Use earthquake features to determine marker style 
    function mapStyle(feature) {
        return {
            opacity: 1,
            fillOpacity: 0.75,
            fillColor: mapColor(feature.geometry.coordinates[2]),
            color: "black",
            radius: mapRadius(feature.properties.mag),
            stroke: true,
            weight: 0.5
        };
    }

      // Use earthquake magnitude to determine marker radius (higher magnitude = larger radius)
      function mapRadius(mag) {
        if (mag === 0) {
            return 1;
        }

        return mag * 5;
    }

    // Use earthquake depth to determine marker color (darker = greater depth)
    function mapColor(depth) {
        switch (true) {
            case depth > 90:
                return "#ae0c00";
            case depth > 70:
                return "#ff2111";
            case depth > 50:
                return "#ff7733";
            case depth > 30:
                return "#ffdd33";
            case depth > 10:
                return "#eeff33";
            default:
                return "#bbff33";
        }
    }

    // Create a GeoJSON layer that contains the earthquake data
    L.geoJson(data, {
          pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng);
        },

        // Apply map styling (colors and circle radius) based on quake depth and magnitude
        style: mapStyle,

        // Run the onEachFeature function once for each piece of data in the array and bind a popup
            //containing the magnitude, location, and depth for each earthquake 
        onEachFeature: function (feature, layer) {
            layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place + "<br>Depth: " + feature.geometry.coordinates[2]);

        }

    // Add the formatted earthquake data to the map 
    }).addTo(myMap);

// Create a legend with bins for the earthquake depth (darker = greater depth)
var legend = L.control({position: "bottomright"});
legend.onAdd = function() {
    var div = L.DomUtil.create("div", "info legend"),
    depth = [-10, 10, 30, 50, 70, 90];

    // Loop through the data and apply the depth color to the legend corresponding to the depth bins
    for (var i = 0; i < depth.length; i++) {
        div.innerHTML +=
        '<i style="background:' + mapColor(depth[i] + 1) + '"></i> ' + depth[i] + (depth[i + 1] ? '&ndash;' + depth[i + 1] + '<br>' : '+');
    }

  return div;
};

// Add legend to map, and add code to index.html file to complete legend formatting 
legend.addTo(myMap)
});