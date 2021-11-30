## In this Open Layers mini Project
-Just basics of the Open Layers Open Source Library

Add this code into ypour `main.js` or `script.js` file:
```jsx

// Layer switcher logic for Basemaps : Using Query selectors
    const baseLayerElements = document.querySelectorAll('.sidebar > input[type=radio]');
    for (let baseLayerElement of baseLayerElements){
        baseLayerElement.addEventListener('change', function (){
            let baseLayerElementValue = this.value;

            //Get each element in the ol.group
            baseLayerGroup.getLayers().forEach(function (element, index, array){
                let baseLayerTitle = element.get('title');
                // Toggling visibility
                element.setVisible(baseLayerTitle === baseLayerElementValue);
            })
        })
    }

```
- To add your own custom shapefiles (Vector e.g GeoJSON). 
- You can edit and dowwnload your GeoJSON shapefiles [here](https://geojson.io/#map=10/-1.0375/36.9285)
- 
```jsx
//Adding Vector Layers
    const kiambuGeosJSON = new ol.layer.VectorImage({
        source: new ol.source.Vector({
            url: '/data/vector_data/kiambu.geojson',
            format: new ol.format.GeoJSON()
        }),
        visible: true,
        title: 'Kiambu Kenya'
    })
    map.addLayer(kiambuGeosJSON);
}

```

### Sample result shown below, focus at `Kiambu County` in Central Kenya.

<img src = "https://github.com/OkomoJacob/webGIS/blob/main/4.OpenLayers/4.1%20Getting%20Started/imgs/addingVectorData.png"> <br>

## Adding OSM Basemaps
- OSM basemaps in png can be found [here as Tile servers](https://wiki.openstreetmap.org/wiki/Tile_servers).
- Stamen [Raster Terrain Basemaps](http://maps.stamen.com/#terrain/12/37.7706/-122.3782), and scroll down to `Elsewhere`

## Styling your Vector Layers
- You can do more vector styling as seen in the code snippet below. More styles can be found in the [ol Api Doc](https://openlayers.org/en/latest/apidoc/module-ol_style_Style-Style.html)

```jsx

import {Fill, Stroke, Circle, Style} from 'ol/style';

 var fill = new Fill({
   color: 'rgba(255,255,255,0.4)'
 });
 var stroke = new Stroke({
   color: '#3399CC',
   width: 1.25
 });
 var styles = [
   new Style({
     image: new Circle({
       fill: fill,
       stroke: stroke,
       radius: 5
     }),
     fill: fill,
     stroke: stroke
   })
 ];
 
```

- Styling  makes your vector layers look even more awesome as shown below
- The points are seen as distinct red circles, ploygons as blue. This were implemented by the `ol.style.Circle`

<img src = "https://github.com/OkomoJacob/webGIS/blob/main/4.OpenLayers/4.1%20Getting%20Started/imgs/stylingTerrainVectorData.png"> <br>


## Adding Interactivity to your Vector Features

```jsx
import Map from 'ol/Map';

import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

var map = new Map({
  view: new View({
    center: [0, 0],
    zoom: 1
  }),
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  target: 'map'
});

```
- Read more at [forEachFeatureAtPixe()](https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html#forEachFeatureAtPixel)

## Enabling Pop-ups onClick by using `Overlay`
- Read more about it [here](https://openlayers.org/en/latest/apidoc/module-ol_Overlay-Overlay.html)

### Sample snippet
```jsx
import Overlay from 'ol/Overlay';
```
An element to be displayed over the map and attached to a single map location

#### Example popup
```jsx
import Overlay from 'ol/Overlay';

var popup = new Overlay({
  element: document.getElementById('popup')
});
popup.setPosition(coordinate);
map.addOverlay(popup);
```
### Sample Pop-Up on click

<img src = "https://github.com/OkomoJacob/webGIS/blob/main/4.OpenLayers/4.1%20Getting%20Started/imgs/finalStyles.png">

## Filter Layers.
- If you have very many layers, but onky want to display a given one,
### Example

- Only display layer with the title as `Kiambu Kenya`
  
```jsx

//Filter only a specific layer if you have many layers to display
layerFilter: function (layerCandidate){
    return layerCandidate.get('title') === 'Kiambu Kenya'
}
```
  * Read more about **filtering layers** [here](https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html#forEachFeatureAtPixel)
## Refernces
1. [All ol Classes, Elements in the Official API Docs](https://openlayers.org/en/latest/apidoc/)<br>
2. 


