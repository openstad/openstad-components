'use strict';

import merge from 'merge';
import OpenStadComponent from '../../component/index.jsx';
import amapsCreateClusterIcon from '../lib/amaps-cluster-icon.js';
import { searchAddressByLatLng, suggestAddresses, LookupLatLngByAddressId } from '../lib/search.js';

export default class OpenStadComponentMap extends OpenStadComponent {

  constructor(props, defaultConfig) {

    super(props, defaultConfig, {
			style: 'standaard',
			marker: false,
			search: false,
			center: {
				lat: 52.37104644463586,
				lng: 4.900402911007405,
			},
			zoom: 14,
      // todo: minzoom/maxzoom
			zoomposition     : 'bottomleft',
			disableDefaultUI : true,
			polygon : null,
			autoZoomAndCenter: false,
		});

		var self = this;
    self.config.target = self.divId;

    // backwards compatibility
    self.config.center.lat = props.config && props.config.center && props.config.center.latitude || self.config.center.lat;
    self.config.center.lng = props.config && props.config.center && props.config.center.longitude || self.config.center.lng;
    
		// external css and script files
		self._loadedFiles = 0;
		self.files = [
			{ type: 'css', href: "https://unpkg.com/leaflet@1.0.3/dist/leaflet.css" },
			{ type: 'script', src: "https://unpkg.com/leaflet@1.0.3/dist/leaflet.js" },
		];
		self.files.push({ type: 'css', href: "https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.css"  });
		self.files.push({ type: 'script', src: "https://unpkg.com/leaflet.markercluster@1.4.1/dist/leaflet.markercluster.js" });

    // search functions
    self.searchAddressByLatLng = searchAddressByLatLng.bind(self);
    self.suggestAddresses = suggestAddresses.bind(self);
    self.LookupLatLngByAddressId = LookupLatLngByAddressId.bind(self);

		self.markers = self.config.markers || [];
		
  }

	componentDidMount(prevProps, prevState) {
    var self = this;
    self.loadNextFile(function() {
      // initSingleClick();
			// loading script files is ready; create the map
			self.createMap();
			// dispatch an event
			self.mapIsReady = true;
			var event = new CustomEvent('osc-map-is-ready', { detail: { id: self.divId } });
			document.dispatchEvent(event);
    });
	}

  loadNextFile(next) {
    var self = this;
    var file = self.files[self._loadedFiles];
    if (file) {
			let element;
			if (file.type === 'script') {
				element = document.createElement('script');
				element.src = file.src;
				element.async = true;
			}
			if (file.type === 'css') {
				element = document.createElement('link');
				element.href = file.href;
				element.rel = 'stylesheet';
			}
			if (element) {
				element.onload = function() {
          self.loadNextFile(next);
				}
				this.instance.appendChild(element);
			}
    }
		if (self._loadedFiles == self.files.length) {
      next()
    }
		self._loadedFiles++;
  }

	createMap() {

		var self = this;

		// init map

    self.map = L.map(self.config.target, {
      ...self.config,
    })

    switch(self.config.variant) {
			case "n9r":
        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	        maxZoom: 19,
          subdomains: 'abcd',
        }).addTo(self.map);
        break;
			case "amaps":
				L.tileLayer('https://t{s}.data.amsterdam.nl/topo_wm/{z}/{x}/{y}.png', {
					subdomains: '1234',
	        minZoom: 11,
	        maxZoom: 21,
				}).addTo(self.map);
				break;
			case "custom":
        L.tileLayer(self.config.mapTilesUrl, {
	        maxZoom: 19,
          subdomains: self.config.mapTilesSubdomains,
        }).addTo(self.map);
        break;
			default:
			case "nlmaps":
        L.tileLayer('https://service.pdok.nl/brt/achtergrondkaart/wmts/v2_0/standaard/EPSG:3857/{z}/{x}/{y}.png', {
	        minZoom: 6,
	        maxZoom: 19,
	        bounds: [[50.5, 3.25], [54, 7.6]],
	        attribution: 'Kaartgegevens &copy; <a href="kadaster.nl">Kadaster</a>'
        }).addTo(self.map);
		}

		// clustering
		if (self.config.clustering && self.config.clustering.isActive && L.markerClusterGroup) {
			let iconCreateFunction = self.config.clustering.iconCreateFunction || amapsCreateClusterIcon.bind(self) // ( self.config.variant == 'amaps' ? amapsCreateClusterIcon.bind(self) : self.createClusterIcon );
			if (iconCreateFunction && typeof iconCreateFunction == 'string') iconCreateFunction = eval(iconCreateFunction);
			self.markerClusterGroup = L.markerClusterGroup({iconCreateFunction, showCoverageOnHover: self.config.clustering.showCoverageOnHover, maxClusterRadius: self.config.clustering.maxClusterRadius || 80});
			self.markerClusterGroup.on('clusterclick', self.onClusterClick);
			self.markerClusterGroup.on('animationend', self.onClusterAnimationEnd);
			self.map.addLayer(self.markerClusterGroup);
		}
		
		// on map click
		self.map.on('click', self.onMapClick);

		// add polygon
		if (self.config.polygon) {
			self.createCutoutPolygon( self.config.polygon );
		}

		// add markers
		if (self.markers.length) {
			self.markers.forEach(function(marker) {
				self.addMarker( marker )
			})
		}

	  // set bounds and center
	  if (self.config.autoZoomAndCenter) {
		  var centerOn = ( self.config.autoZoomAndCenter == 'polygon' && self.config.polygon ) || ( self.markers && self.markers.length && self.markers ) || self.config.polygon;
		  if (self.editorMarker) {
			  if (self.editorMarker.position) {
				  centerOn = [self.editorMarker];
			  } else {
				  centerOn = self.config.polygon;
			  }
		  }
		  if (centerOn) {
			  self.setBoundsAndCenter( centerOn );
		  }
	  }

	}

	addMarkers(markerData) {
		var self = this;
    markerData.forEach((marker) => {
      self.addMarker(marker)
    });
  }

	addMarker(markerData) {

		var self = this;

		let icon = markerData.icon;
		if (!icon) {
			let iconCreateFunction = self.config.iconCreateFunction;
			if (iconCreateFunction && typeof iconCreateFunction == 'string') {
				iconCreateFunction = eval(iconCreateFunction);
				icon = iconCreateFunction();
			}
		}

		var marker;
		if (icon) {
			marker = L.marker([markerData.lat, markerData.lng], { icon });
		} else {
			marker = L.marker([markerData.lat, markerData.lng]);
		}

    marker.visible = true;
		marker.data = markerData.data;
		marker.doNotCluster = markerData.doNotCluster;

		if (markerData.href) {
			markerData.onClick = function() {
				document.location.href = markerData.href;
			}
		}
		let onClick = self.onMarkerClick;
		if (onClick) {
			if (typeof onClick == 'string') onClick = eval(onClick);
			// marker.on('singleclick', onClick);
			marker.on('click', onClick);
		}

		if (self.markerClusterGroup && !markerData.doNotCluster) {
			self.markerClusterGroup.addLayer(marker);
		} else {
			self.map.addLayer(marker);
		}

		self.markers.push(marker);

		return marker;

	}

	removeMarker(marker) {
    if (!marker) return;
    let index = this.markers.indexOf(marker);
    if (index > -1) {
      this.markers.splice(index, 1)
		  this.map.removeLayer(marker);
			this.markerClusterGroup.removeLayer(marker);
    }
  }

	updateMarker(marker, newData) {
    if (newData.location) {
      var newLatLng = new L.LatLng(newData.location.lat, newData.location.lng);
      marker.setLatLng(newLatLng); 
    }
  }

	createClusterIcon(cluster) {
		var count = cluster.getChildCount();
		return L.divIcon({ html: count, className: 'osc-map-icon-cluster', iconSize: L.point(20, 20), iconAnchor: [20, 10] });
	}

	createCutoutPolygon(polygon) {

		var self = this;

		// polygon must defined from the south west corner to work with the outer box
		var bounds = L.polygon(polygon).getBounds();
		var center = bounds.getCenter();

		var smallest = 0; var index = 0;

		polygon.forEach(function( point, i ) {
			var y = Math.sin(point.lng-center.lng) * Math.cos(point.lat);
			var x = Math.cos(center.lat)*Math.sin(point.lat) - Math.sin(center.lat)*Math.cos(point.lat)*Math.cos(point.lng-center.lng);
			var bearing = Math.atan2(y, x) * 180 / Math.PI;
			if (45 - bearing < smallest) {
				smallest = 45 - bearing;
				index = i;
			}
		});

		var a = polygon.slice(0, index);
		var b = polygon.slice(index, polygon.length);
		polygon = b.concat(a);

		// outer box
		// TODO: should be calculated dynamically from the center point
		var delta1 = 0.01;
		var delta2 = 5;
		var outerBox = [
			{lat: -90 + delta2, lng:  -180 + delta1 },
			{lat: -90 + delta2, lng:     0          },
			{lat: -90 + delta2, lng:   180 - delta1 },
			{lat:   0,          lng:   180 - delta1 },
			{lat:  90 - delta2, lng:   180 - delta1 },
			{lat:  90 - delta2, lng:     0          },
			{lat:  90 - delta2, lng:  -180 + delta1 },
			{lat:  90 - delta2, lng:  -180 + delta1 },
			{lat:   0,          lng:  -180 + delta1 },
		];

		// polygon style
		let polygonStyle = merge({
			"color": "#d00",
			"fillColor": "#000",
			"fillOpacity": 0.15
		}, self.config.polygonStyle);

		let result = L.polygon([outerBox, polygon], polygonStyle);
    self.map.addLayer(result);

    return result;

	}

  removePolygon(polygon) {
	  var self = this;
    if (polygon) {
      self.map.removeLayer(polygon);
    }
  }

  setBoundsAndCenter( points ) {

	  var self = this;

    if (!Array.isArray(points)) {
      self.map.panTo(new L.LatLng(self.config.center.latitude, self.config.center.longitude));
      return;
    }

	  var poly = [];
	  points.forEach(function(point) {
		  if (point._latlng) {
			  point = point._latlng;
		  } else if (point.position) {
			  point = point.position.coordinates ? { lat: point.position.coordinates[0], lng: point.position.coordinates[1] }  : point.position;
		  }
		  poly.push(point);
	  })

    if (poly.length == 1) {
      self.map.panTo(new L.LatLng(poly[0].lat, poly[0].lng));
    } else {
	    var bounds = L.latLngBounds(poly);
	    self.map.fitBounds(bounds);
    }

	  // var zoom = parseInt(self.map.getZoom())
	  // self.map.setZoom(zoom - 1)

  }

  showMarkers(markers) {
	  var self = this;
    markers.forEach((marker) => {
      self.showMarker(marker);
    });
  }
  
  showMarker(marker) {
	  var self = this;
    marker.visible = true;
	  if (self.markerClusterGroup && !marker.doNotCluster) {
		  self.markerClusterGroup.addLayer(marker);
	  } else {
		  marker.addTo(self.map)
	  }
  }

  hideMarkers(markers) {
	  var self = this;
    markers.forEach((marker) => {
      self.hideMarker(marker);
    });
  }
  
  hideMarker(marker) {
	  var self = this;
    marker.visible = false;
	  if (self.markerClusterGroup && !marker.doNotCluster) {
		  self.markerClusterGroup.removeLayer(marker);
	  } else {
		  marker.remove(self.map)
	  }
  }

  setFilter(filterFuntion) {
	  var self = this;
	  self.filterFunction = filterFuntion;
	  self.applyFilter();
  }

  applyFilter() {
	  var self = this;
	  if (self.filterFunction) {
		  self.markers.forEach(function(marker) {
			  if ( self.filterFunction(marker) ) {
				  self.showMarker(marker);
			  } else {
				  self.hideMarker(marker);
			  }
		  });
	  } else {
		  self.markers.forEach(function(marker) {
			  self.showMarker(marker);
		  });
	  }
  }

  isPointInPolygon(point, polygon) {

    if (!point) return false;
    if (!polygon) return true;

	  // taken from http://pietschsoft.com/post/2008/07/02/Virtual-Earth-Polygon-Search-Is-Point-Within-Polygon

    var x = point.lat, y = point.lng;

    var inside = false;
    for (var i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        var xi = polygon[i].lat, yi = polygon[i].lng;
        var xj = polygon[j].lat, yj = polygon[j].lng;

        var intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }

    return inside; 

  }

	onMapClick(detail) {
		var event = new CustomEvent('osc-map-click', { detail });
		document.dispatchEvent(event);
  }

	onMarkerClick(detail) {
		var event = new CustomEvent('osc-map-marker-click', { detail });
		document.dispatchEvent(event);
  }

	onClusterClick(detail) {
		var event = new CustomEvent('osc-map-cluster-click', { detail });
		document.dispatchEvent(event);
  }

	onClusterAnimationEnd(detail) {
		var event = new CustomEvent('osc-map-cluster-animation-end', { detail });
		document.dispatchEvent(event);
  }

	render() {

    return (
			<div id={this.divId} className={this.props.className || 'osc-map'} ref={el => (this.instance = el)}>
				<div id={this.divId + '-map'}></div>
			</div>
    );

  }

}
