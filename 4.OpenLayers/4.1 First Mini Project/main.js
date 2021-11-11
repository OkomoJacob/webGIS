window.onload = init;

function init(){
    const map = new ol.Map({
        view: new ol.View({
            center: [4176064.061715488, 7011.839939746307],
            zoom: 6.2,
            minZoom: 6,
            maxZoom: 20,
            rotation: 0.5 
        }),
        layers: [
            // Tile layers array
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        target: 'js-map'
    })
    // reveal myCoordinates
    map.on('click', function(e){
        console.log(e.coordinate)
    })
}
