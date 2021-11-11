# Open Layers,Getting Started
### List of Contents:
- [Open Layers,Getting Started](#open-layersgetting-started)
    - [List of Contents:](#list-of-contents)
  - [The Open Layers Starting Point](#the-open-layers-starting-point)
    
## The Open Layers Starting Point
To get started, cd into your working directory and install the `ol` library or head to [the official Open Layrers Installation page]()
Installation: 
With Node installed, just install as below: 

```jsx

npm install ol

```

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