"use strict";
// Some global variables
//for max bounds
var bound_sw = [60.0, 24.2];
var bound_ne = [60.5, 25.7];

// Add basemap and map settings.
L.mapbox.accessToken = 'pk.eyJ1IjoiYmVsZjUiLCJhIjoieWo2RGFFRSJ9.cPBUdeKuql4tG_5ZYzXx2w';
var map = L.mapbox.map('map', 'belf5.m8829b1a', {
        maxZoom: 18, // Zoom in
        minZoom: 11 // Zoom out
    });
        // .addTo(map)
        //.setView([60.170014, 24.938466], 12)

// Set max bounds
var bounds = L.latLngBounds(bound_sw, bound_ne);
map.setMaxBounds(bounds);

// filters
/*
uimarannat = document.getElementById('uimarannat'),
ulkoliikuntapaikat = document.getElementById('ulkoliikuntapaikat'),
all = document.getElementById('all');

uimarannat.onclick = function(e) {
    all.className = '';
    this.className = 'active';
    // The setFilter function takes a GeoJSON feature object
    // and returns true to show it or false to hide it.
    map.featureLayer.setFilter(function(f) {
        return f.properties['marker-symbol'] === 'fast-food';
    });
    return false;
};

all.onclick = function() {
    food.className = '';
    this.className = 'active';
    map.featureLayer.setFilter(function(f) {
        // Returning true for all markers shows everything.
        return true;
    });
    return false;
};
*/

// Marker options, 1
var geojsonMarkerOptions = {
    radius: 6,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.9
};

// Marker options, uimaranta
var uimarantaMarkerOptions = {
    radius: 6,
    fillColor: "#3333FF",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.9
};

var uimapaikkaMarkerOptions = {
    radius: 6,
    fillColor: "#0BB5FF",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.9
};

var uimahalliMarkerOptions = {
    radius: 6,
    fillColor: "#F88D6C",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.9
};

// Marker options, uimaranta
var lahiliikuntaMarkerOptions = {
    radius: 6,
    fillColor: "#F89FE9",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.9
};

var pallokenttaMarkerOptions = {
    radius: 6,
    fillColor: "#CF581D",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.9
};

var kuntosaliMarkerOptions = {
    radius: 6,
    fillColor: "#9FF8AE",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.9
};


var koripallokenttaMarkerOptions = {
    radius: 6,
    fillColor: "#F88D6C",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.9
};

var tenniskenttaMarkerOptions = {
    radius: 6,
    fillColor: "#CC0066",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 1.0
};

var lentopallokenttaMarkerOptions = {
    radius: 6,
    fillColor: "#7A6CF8",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.9
};

var beachvolleykenttaMarkerOptions = {
    radius: 6,
    fillColor: "#CC9900",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.9
};


// Set popup content
function onEachFeature(feature, layer) {
    // Check if the feature has a property nimi_fi
    if (feature.properties && feature.properties.nimi_fi) {
        layer.bindPopup('<h4>' + feature.properties.nimi_fi + '</h4>' + '<br>' + '<strong> Tyyppi </strong>: ' + layer.feature.properties.tyyppi + '<br><br>' + '<strong>Kuvaus: </strong><br>' + layer.feature.properties.lisatieto + '<br><br>' + '<strong> Osoite </strong>: ' + layer.feature.properties.osoite + '<br>' + '<strong> URL </strong>: <a href="' + feature.properties.url  + '" target="_blank"> URL </a>'
                       )};
}
                        

function iconByName(name) {
	return '<i class="icon icon-bar"></i>';
}


function featureToMarker(feature, latlng) {
	return L.marker(latlng, {
		icon: L.divIcon({
			className: 'marker-bar',
			html: iconByName('marker-bar'),
			iconUrl: '../images/icons/bar.png',
			iconSize: [25, 41],
			iconAnchor: [12, 41],
			popupAnchor: [1, -34],
			shadowSize: [41, 41]
		})
	});
}


function featureToMarker_basic(feature, latlng) {
	return L.marker(latlng, {
		icon: L.MakiMarkers.icon({icon: "circle", color: "#62c462", size: "l"})
	});
}


/*
$('.menu-ui a').on('click', function() {
    // For each filter link, get the 'data-filter' attribute value.
    var filter = $(this).data('filter');
    $(this).addClass('active').siblings().removeClass('active');
    map.geoJsonLayer.setFilter(function(f) {
        // If the data-filter attribute is set to "all", return
        // all (true). Otherwise, filter on markers that have
        // a value set to true based on the filter name.
        return (filter === 'all') ? true : f.properties[tyyppi] === '3220';
    });
    return false;
});
*/

/*
//WORKING
// Get all points of interest initially
$.ajax({
    type: 'GET',
    dataType : 'json',
    //jsonpCallback : 'getJson',
    url: 'all',

    success: function (data) {
        var geoJsonLayer = L.geoJson(data, {
            onEachFeature: onEachFeature,
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, geojsonMarkerOptions);
            }
        }).addTo(map);
    }
});

*/


var promise = $.getJSON("all");
    promise.then(function(data) {
        // var kaikkipaikat = L.geoJson(data);
        
        // Create GeoJSON layer 1
        /*
        var ulkoliikuntapaikat = {
            "Ulkoliikuntapaikat": L.geoJson(data, {
                filter: function(feature, layer) {
                    return feature.properties.tyyppikoodi == "1130";
                }
            })
        };
          
        // Create GeoJSON layer 2
        var uimarannat = {
            "Uimarannat": L.geoJson(data, {
                filter: function(feature, layer) {
                    return feature.properties.tyyppikoodi == "3220";
                }
            })
        };
        */
        
        var ulkoliikuntapaikat = L.geoJson(data, {
            onEachFeature: onEachFeature,
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, geojsonMarkerOptions);
            },
            filter: function(feature, layer) {
                return feature.properties.tyyppikoodi == "1130";
            }
        });
        
        var uimarannat = L.geoJson(data, {
            onEachFeature: onEachFeature,
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, uimarantaMarkerOptions);
            },
            filter: function(feature, layer) {
                return feature.properties.tyyppikoodi == "3220";
            }
        });
        
        var lahiliikuntapaikat = L.geoJson(data, {
            onEachFeature: onEachFeature,
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, lahiliikuntaMarkerOptions);
            },
            filter: function(feature, layer) {
                return feature.properties.tyyppikoodi == "1120";
            }
        });
        

        
        var kuntosalit = L.geoJson(data, {
            onEachFeature: onEachFeature,
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, kuntosaliMarkerOptions);
            },
            filter: function(feature, layer) {
                return (feature.properties.tyyppikoodi == "2120" || feature.properties.tyyppikoodi == "2130");
            }
        });
        
        
        
        var uimapaikat = L.geoJson(data, {
            onEachFeature: onEachFeature,
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, uimapaikkaMarkerOptions);
            },
            filter: function(feature, layer) {
                return feature.properties.tyyppikoodi == "3230";
            }
        });
        
        var uimahallit = L.geoJson(data, {
            onEachFeature: onEachFeature,
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, uimahalliMarkerOptions);
            },
            filter: function(feature, layer) {
                return feature.properties.tyyppikoodi == "3110";
            }
        });
        
        var koripallokentat = L.geoJson(data, {
            onEachFeature: onEachFeature,
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, koripallokenttaMarkerOptions);
            },
            filter: function(feature, layer) {
                return feature.properties.tyyppikoodi == "1310";
            }
        });
        
        var pallokentat = L.geoJson(data, {
            onEachFeature: onEachFeature,
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, pallokenttaMarkerOptions);
            },
            filter: function(feature, layer) {
                return feature.properties.tyyppikoodi == "1340";
            }
        });     
        
        var tenniskentat = L.geoJson(data, {
            onEachFeature: onEachFeature,
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, tenniskenttaMarkerOptions);
            },
            filter: function(feature, layer) {
                return feature.properties.tyyppikoodi == "1370";
            }
        });
        
        var lentopallokentat = L.geoJson(data, {
            onEachFeature: onEachFeature,
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, lentopallokenttaMarkerOptions);
            },
            filter: function(feature, layer) {
                return feature.properties.tyyppikoodi == "1320";
            }
        });
        
        var beachvolleykentat = L.geoJson(data, {
            onEachFeature: onEachFeature,
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, beachvolleykenttaMarkerOptions);
            },
            filter: function(feature, layer) {
                return feature.properties.tyyppikoodi == "1330";
            }
        });
        
        
        
        // Switchable base layers
        var baseLayers = [
            {
                group: "Taustakartat",
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
                        name: "Mustavalkoinen",
                        layer: L.tileLayer.provider('OpenStreetMap.BlackAndWhite')
                    },
                    {
                        name: "DarkMatter",
                        layer: L.tileLayer.provider('CartoDB.DarkMatter')
                    },
                    {
                        name: "Positron",
                        layer: L.tileLayer.provider('CartoDB.Positron')
                    },

                    /*
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
        
        // Togglable layers    
        var overLayers = [
            {
                group: "Uimapaikat",
                layers: [
                    {
                        name: "Uimarannat",
                        icon: '<i class="icon icon-drinking_water"></i>',
                        layer: uimarannat,
                        active: true
                    },
                    {
                        name: "Uimapaikat",
                        icon: '<i class="icon icon-drinking_water"></i>',
                        layer: uimapaikat,
                        active: true
                    },                    
                    {
                        name: "Uimahallit",
                        icon: '<i class="icon icon-drinking_water"></i>',
                        layer: uimahallit,
                        active: true
                    }
                ],
            },
            {
                group: "Liikuntapaikat",
                layers: [
                    {
                        name: "Ulkokuntoilupaikat",
                        icon: '<i class="icon icon-bar"></i>',
                        layer: ulkoliikuntapaikat,
                        active: true
                    },
      
                    {
                        name: "Lähiliikuntapaikat",
                        icon: '<i class="icon icon-bar"></i>',
                        layer: lahiliikuntapaikat,
                        active: true
                    },
                    {
                        name: "Kuntosalit",
                        icon: '<i class="icon icon-bar"></i>',
                        layer: kuntosalit,
                        active: true
                    },

                ]
            },
            {
                group: "Palloilupaikat",
                layers: [
                    {
                        name: "Pallokentat",
                        icon: '<i class="icon icon-fuel"></i>',
                        layer: pallokentat,
                        active: false
                    },
                    {
                        name: "Koripallokentat",
                        icon: '<i class="icon icon-fuel"></i>',
                        layer: koripallokentat,
                        active: false
                    },
                    {
                        name: "Tenniskentat",
                        icon: '<i class="icon icon-fuel"></i>',
                        layer: tenniskentat,
                        active: false
                    },
                    {
                        name: "Lentopallokentät",
                        icon: '<i class="icon icon-fuel"></i>',
                        layer: lentopallokentat,
                        active: false
                    },
                    {
                        name: "Beachvolleykentät",
                        icon: '<i class="icon icon-fuel"></i>',
                        layer: beachvolleykentat,
                        active: false
                    },
                ]
            }
        ];
            
        
        // Control Using PanelLayers JS library, add baseLayers & overLayers
        map.addControl( new L.Control.PanelLayers(baseLayers, overLayers) );
        
        // Cr
        //L.control.layers(ulkoliikuntapaikat, uimarannat).addTo(map);
    
        //WORKING, not needed?
        //ulkoliikuntapaikat.addTo(map);
        //uimarannat.addTo(map);
        

    });

