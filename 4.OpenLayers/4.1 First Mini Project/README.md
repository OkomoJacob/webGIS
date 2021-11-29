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
- To add your own custom shapefiles (Vector e.g GeoJSON
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

<img src = "https://github.com/OkomoJacob/webGIS/blob/main/4.OpenLayers/4.1%20First%20Mini%20Project/imgs/addingVectorData.png"> <br>

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
## Refernces
1. [All ol Classes, Elements in the Official API Docs](https://openlayers.org/en/latest/apidoc/)(br>
2. 


