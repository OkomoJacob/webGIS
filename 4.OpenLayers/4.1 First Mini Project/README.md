# Open Layers,Getting Started
### In this Mini Project
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
