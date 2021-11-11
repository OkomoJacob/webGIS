window.onload = init;

function init(){
    const map = new ol.Map({
        view: new ol.View({
            center: [4176064.061715488, 7011.839939746307],
            zoom: 6.2,
            minZoom: 6,
            maxZoom: 20,
            // rotation: 0.5 // in radians
        }),
        target: 'js-map'
    })
    // reveal myCoordinates
    map.on('click', function(e){
        console.log(e.coordinate)
    })

    // Adding OSM Standard and Humaniterain basemap Layers
    const openStreetMapStandard = new ol.layer.Tile({
        source: new ol.source.OSM(),
        visibile: true,
        title: 'OSMStandard'
    })

    const openStreetMapHumanitairian = new ol.layer.Tile({
        source: new ol.source.OSM({
            url: 'https://tile.openstreetmap.org/${z}/${x}/${y}.png'
        }),
        visibile: true,
        title: 'OSMHumanitarian'
    })

    const stamenTerrain = new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: 'https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg',
            attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
        }),
        visibile: false,
        title: 'StamenTerrain'
    })
    // Layer Groups
    // map.addLayer(stamenTerrain);
    const baseLayerGroup = new ol.layer.Group({
        layers: [
            openStreetMapStandard, openStreetMapHumanitairian, stamenTerrain
        ]
    })
    map.addLayer(baseLayerGroup);
}
