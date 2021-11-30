window.onload = init;

function init(){
    const map = new ol.Map({
        view: new ol.View({
            center: [4176064.061715488, 7011.839939746307],
            zoom: 6.2,
            minZoom: 6,
            maxZoom: 20
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
        visibility: true,
        title: 'OSMStandard'
    })

    const openStreetMapHumanitarian = new ol.layer.Tile({
        source: new ol.source.OSM({
            url: 'https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
        }),
        visibility: false,
        title: 'OSMHumanitarian'
    })

    const stamenTerrain = new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: 'https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg',
            attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
        }),
        visibility: false,
        title: 'StamenTerrain'
    })
    // Layer Groups
    // Buggy, stamen and OSMHumanitarian (But not onLoad as set) loads: openStreetMapHumanitarian doesn't load
    const baseLayerGroup = new ol.layer.Group({
        layers: [
            openStreetMapStandard, openStreetMapHumanitarian, stamenTerrain
        ]
    });
    map.addLayer(baseLayerGroup);

    // Layer switcher logic for Basemaps : Use Query selectors
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

    //Vector Layers and styling ol
    const fillStyle = new ol.style.Fill({
        color: [84, 118, 225, 1] //color value
    })

    const strokeStyle = new ol.style.Stroke({
        color: [46, 45, 45, 1],
        width: 1.2
    })

    const circleStyle = new ol.style.Circle({
        fill: new ol.style.Fill({
            color: [245, 49, 5, 1]
        }),
        radius: 7,
        stroke: strokeStyle
    })
    
    const kiambuGeosJSON = new ol.layer.VectorImage({
        source: new ol.source.Vector({
            url: '/data/vector_data/kiambu.geojson',
            format: new ol.format.GeoJSON()
        }),
        visible: true,
        title: 'Kiambu Kenya',
        style: new ol.style.Style({
            fill: fillStyle,
            stroke: strokeStyle,
            image: circleStyle
        })
    })
    map.addLayer(kiambuGeosJSON);
    
    //Interactivity: Vector Feature Pop-up Logic
    map.on('click', function(e){
        map.forEachFeatureAtPixel(e.pixel, function (feature, layer){
            
            let clickedFeatureGeom = feature.get('geometry');
            let clickedFeatureName = feature.get('Name');
            let clickedFeatureMoreInfo = feature.get('More Info');

            console.log(clickedFeatureGeom, clickedFeatureName, clickedFeatureMoreInfo)
        })
    })
}
