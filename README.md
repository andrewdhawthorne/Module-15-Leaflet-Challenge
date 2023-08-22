# Module-15-Leaflet-Challenge
files for Data Boot Camp Module 15 Leaflet Challege

## Challenge Overview 
In this challenge I built a world map tracking daily earthquake data from the United States Geological Survey (USGS). The USGS provides earthquake data in several formats, which are updated every 5 minutes. Using the USGS GeoJSON feed (https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php), I chose the dataset for "All Earthquakes from the Past Day" and used JavaScript to create a map with the following features: 

Link to map: 

1. Data markers reflect the magnitude of the earthquake by their size (higher magnitudes correspond with a larger radius).

2. Data markers reflect the depth of the earthquake by their color (greater depth corresponds with darker color).

3. Each marker includes a popup displaying the magnitude, location, and depth of that particular earthquake. 

4. A legend in the lower right hand corner provides the gradient for the earthquake depths ranging from darker (greater depth) to ligher colors (less depth). 

### Sources: 

#### Classmates: I worked with cohort member Fidel C on creating the map and receieved support from cohort member Jason P on creating the legend 

#### Class Activities: 

01-Ins_Basic_Map - Mapping day 1 (creating map object and adding tile layer)

03-Stu_City_Markers - Mapping day 1 (popup)

10-Stu_GeoJson - Mapping day 1 (creating GeoJSON layer and adding it to map)

01-Evr_BasicNYCBoroughs - Mapping day 2 (creating GeoJSON layer)

#### Links: 

https://github.com/randiesinclair/Leaflet-Challenge/blob/main/Leaflet-challenge/js/logic2.js (checking/troubleshooting code, especially map style and depth marker bins)

https://github.com/JeremyTallant/leaflet-challenge/blob/main/Leaflet-Part-1/js/logic.js (checking/troubleshooting code, especially legend)

https://github.com/JordanJaner/leaflet-challenge/blob/main/Leaflet-Step-1/static/js/logic.js (referene code)

https://github.com/TanishaCooper/leaflet-challenge/blob/main/Leaflet-Part-1/logic.js (reference code)

https://github.com/yeyanwang/leaflet-challenge/blob/main/static/js/logic.js (reference code)

https://leafletjs.com/examples/quick-start/ (html file code and markers)

https://www.tutorialspoint.com/javascript/javascript_switch_case.htm (statement for changing marker color based on depth)

https://www.colorhexa.com/ (color codes for marker color based on depth)

https://www.igismap.com/legend-in-leafletjs-map-with-topojson/ (creating legend)

https://leafletjs.com/examples/choropleth/ (html file code for legend)