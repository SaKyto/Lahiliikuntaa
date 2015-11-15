"use strict";
// Some global variables
//for max bounds
var bound_sw = [60.0, 24.2];
var bound_ne = [60.5, 25.7];

// Add custom basemap and map settings.
L.mapbox.accessToken = 'pk.eyJ1IjoiYmVsZjUiLCJhIjoieWo2RGFFRSJ9.cPBUdeKuql4tG_5ZYzXx2w';
var map = L.mapbox.map('map', '', {
        maxZoom: 18,
        minZoom: 12
    });

// Set initial view
map.setView([60.185014, 24.958466], 13);

// Set max bounds
var bounds = L.latLngBounds(bound_sw, bound_ne);
map.setMaxBounds(bounds);


// MARKER OPTIONS //
// TODO: Use dictionary Move to external file?
// Marker options, ulkokuntoilupaikat
var geojsonMarkerOptions = {
    radius: 6,
    fillColor: "#b15928",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

var lahiliikuntaMarkerOptions = {
    radius: 6,
    fillColor: "#33a02c",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

var kuntosaliMarkerOptions = {
    radius: 6,
    fillColor: "#fb9a99",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

// Marker options, uimaranta
var uimarantaMarkerOptions = {
    radius: 6,
    fillColor: "#1f78b4",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

var uimapaikkaMarkerOptions = {
    radius: 6,
    fillColor: "#cab2d6",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

var uimahalliMarkerOptions = {
    radius: 6,
    fillColor: "#6a3d9a",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};


var pallokenttaMarkerOptions = {
    radius: 6,
    fillColor: "#b2df8a",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};



var koripallokenttaMarkerOptions = {
    radius: 6,
    fillColor: "#ff7f00",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

var tenniskenttaMarkerOptions = {
    radius: 6,
    fillColor: "#fdbf6f",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

var lentopallokenttaMarkerOptions = {
    radius: 6,
    fillColor: "#B329B0",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

var beachvolleykenttaMarkerOptions = {
    radius: 6,
    fillColor: "#ffff99",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

// Set popup content
function onEachFeature(feature, layer) {
    // Check if the feature has a property nimi_fi
    if (feature.properties && feature.properties.nimi_fi) {
        layer.bindPopup('<h4>' + feature.properties.nimi_fi + '</h4>' + '<br>' + '<strong> Tyyppi </strong>: ' + layer.feature.properties.tyyppi + '<br><br>' + '<strong>Kuvaus: </strong><br>' + layer.feature.properties.lisatieto + '<br><br>' + '<strong> Osoite </strong>: ' + layer.feature.properties.osoite + '<br>' + '<strong> Lisatietoa </strong>: <a href="http://' + feature.properties.url  + '" target="_blank"> ' + feature.properties.url.substring(0, 30) + '</a>'
                       );
    }
}
                        
// Fetch all and create according GeoJSON layers by filtering. Also create circlemarkers.
var promise = $.getJSON("all");
promise.then(function (data) {
        // var kaikkipaikat = L.geoJson(data);


    var ulkokuntoilupaikat = L.geoJson(data, {
        onEachFeature: onEachFeature,
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, geojsonMarkerOptions);
        },
        filter: function (feature, layer) {
            return feature.properties.tyyppikoodi == "1130";
        }
    });

    var uimarannat = L.geoJson(data, {
        onEachFeature: onEachFeature,
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, uimarantaMarkerOptions);
        },
        filter: function (feature, layer) {
            return feature.properties.tyyppikoodi == "3220";
        }
    });

    var lahiliikuntapaikat = L.geoJson(data, {
        onEachFeature: onEachFeature,
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, lahiliikuntaMarkerOptions);
        },
        filter: function (feature, layer) {
            return feature.properties.tyyppikoodi == "1120";
        }
    });



    var kuntosalit = L.geoJson(data, {
        onEachFeature: onEachFeature,
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, kuntosaliMarkerOptions);
        },
        filter: function (feature, layer) {
            return (feature.properties.tyyppikoodi == "2120" || feature.properties.tyyppikoodi == "2130");
        }
    });



    var uimapaikat = L.geoJson(data, {
        onEachFeature: onEachFeature,
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, uimapaikkaMarkerOptions);
        },
        filter: function (feature, layer) {
            return feature.properties.tyyppikoodi == "3230";
        }
    });

    var uimahallit = L.geoJson(data, {
        onEachFeature: onEachFeature,
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, uimahalliMarkerOptions);
        },
        filter: function (feature, layer) {
            return feature.properties.tyyppikoodi == "3110";
        }
    });

    var koripallokentat = L.geoJson(data, {
        onEachFeature: onEachFeature,
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, koripallokenttaMarkerOptions);
        },
        filter: function (feature, layer) {
            return feature.properties.tyyppikoodi == "1310";
        }
    });

    var pallokentat = L.geoJson(data, {
        onEachFeature: onEachFeature,
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, pallokenttaMarkerOptions);
        },
        filter: function (feature, layer) {
            return feature.properties.tyyppikoodi == "1340";
        }
    });     

    var tenniskentat = L.geoJson(data, {
        onEachFeature: onEachFeature,
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, tenniskenttaMarkerOptions);
        },
        filter: function (feature, layer) {
            return feature.properties.tyyppikoodi == "1370";
        }
    });

    var lentopallokentat = L.geoJson(data, {
        onEachFeature: onEachFeature,
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, lentopallokenttaMarkerOptions);
        },
        filter: function (feature, layer) {
            return feature.properties.tyyppikoodi == "1320";
        }
    });

    var beachvolleykentat = L.geoJson(data, {
        onEachFeature: onEachFeature,
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, beachvolleykenttaMarkerOptions);
        },
        filter: function (feature, layer) {
            return feature.properties.tyyppikoodi == "1330";
        }
    });



    // Create Switchable Basemaps as a group
    var baseLayers = [
        {
            group: "TAUSTAKARTAT",
            layers: [

                {
                    name: "Oletus",
                    layer: L.mapbox.tileLayer('belf5.m8829b1a').addTo(map)
                },
                {
                    name: "Ilmakuva",
                    layer: L.tileLayer.provider('Esri.WorldImagery')
                },
                {
                    name: "Sketch",
                    layer: L.mapbox.tileLayer('belf5.a9ea205d')
                },
                {
                    name: "Positron",
                    layer: L.tileLayer.provider('CartoDB.Positron')
                }
                /*
                
                {
                    name: "Mustavalkoinen",
                    layer: L.tileLayer.provider('OpenStreetMap.BlackAndWhite')
                },
                {
                    name: "DarkMatter",
                    layer: L.tileLayer.provider('CartoDB.DarkMatter')
                },
                {
                    name: "OpenCycleMap",
                    layer: L.tileLayer('http://{s}.tile2.opencyclemap.org/transport/{z}/{x}/{y}.png')
                },
                {
                    name: "Stamen",
                    layer: L.tileLayer.provider('Stamen.Watercolor')
                },
                {
                    name: "Hydda",
                    layer: L.tileLayer('http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png')
                },
                */
            ]
        }
    ];

    // Create togglable layers - overlay, as theme groups
    var overLayers = [
        {
            group: "UIMAPAIKAT",
            layers: [
                {
                    name: "Uimarannat",
                    icon: '<i class="icon icon-uimarannat"></i>',
                    layer: uimarannat,
                    active: true
                },
                {
                    name: "Uimapaikat",
                    icon: '<i class="icon icon-uimapaikat"></i>',
                    layer: uimapaikat,
                    active: true
                },
                {
                    name: "Uimahallit",
                    icon: '<i class="icon icon-uimahallit"></i>',
                    layer: uimahallit,
                    active: true
                }
            ]
        },
        {
            group: "LIHASKUNTOILUPAIKAT",
            layers: [
                {
                    name: "Ulkokuntoilupaikat",
                    icon: '<i class="icon icon-ulkokuntoilupaikat"></i>',
                    layer: ulkokuntoilupaikat,
                    active: true
                },

                {
                    name: "Lähiliikuntapaikat",
                    icon: '<i class="icon icon-lahiliikuntapaikat"></i>',
                    layer: lahiliikuntapaikat,
                    active: true
                },
                {
                    name: "Kuntosalit",
                    icon: '<i class="icon icon-kuntosalit"></i>',
                    layer: kuntosalit,
                    active: true
                }
            ]
        },
        {
            group: "PALLOILUPAIKAT",
            layers: [
                {
                    name: "Pallokentat",
                    icon: '<i class="icon icon-pallokentat"></i>',
                    layer: pallokentat,
                    active: false
                },
                {
                    name: "Koripallokentat",
                    icon: '<i class="icon icon-koripallokentat"></i>',
                    layer: koripallokentat,
                    active: false
                },
                {
                    name: "Tenniskentat",
                    icon: '<i class="icon icon-tenniskentat"></i>',
                    layer: tenniskentat,
                    active: false
                },
                {
                    name: "Lentopallokentät",
                    icon: '<i class="icon icon-lentopallokentat"></i>',
                    layer: lentopallokentat,
                    active: false
                },
                {
                    name: "Beachvolleykentät",
                    icon: '<i class="icon icon-beachvolleykentat"></i>',
                    layer: beachvolleykentat,
                    active: false
                }
            ]
        }
    ];


    // Control Using PanelLayers JS library, add baseLayers & overLayers
    map.addControl(new L.Control.PanelLayers(baseLayers, overLayers));

    // Alternative leaflet layer control
    //L.control.layers(ulkoliikuntapaikat, uimarannat).addTo(map);


});

