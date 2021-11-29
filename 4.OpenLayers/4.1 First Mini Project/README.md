# Open Layers,Getting Started
### List of Contents:
- [Open Layers,Getting Started](#open-layersgetting-started)
    - [List of Contents:](#list-of-contents)
  - [The Open Layers Starting Point](#the-open-layers-starting-point)
  - [Just getting into the ol Library](#just-getting-into-the-ol-library)
  - [Adding OSM Basemaps](#adding-osm-basemaps)
    
## The Open Layers Starting Point
To get started, cd into your working directory and install the `ol` library or head to [the official Open Layrers Installation page]()
Installation: 
With Node installed, just install as below: 

```jsx

npm install ol

```
## Just getting into the ol Library
Add this code into ypour `main.js` or `script.js` file:
```jsx

window.onload = init;

function init(){
    const map = new ol.Map({
        view: new ol.View({
            center: [0, 0],
            zoom: 2
        }),
        layers: [
            // Tile layers array
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        target: 'js-map'
    })
}

```
## Adding OSM Basemaps
- OSM basemaps in png can be found [here as Tile servers](https://wiki.openstreetmap.org/wiki/Tile_servers).
- Stamen [Raster Terrain Basemaps](http://maps.stamen.com/#terrain/12/37.7706/-122.3782), and scroll down to `Elsewhere`
- 
