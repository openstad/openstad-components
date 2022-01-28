'use strict';

import merge from 'merge';
import OpenStadComponent from '../../component/index.jsx';
import { MapContainer, MapConsumer } from 'react-leaflet';
import TileLayer from './tile-layer.jsx';
import Marker from './marker.jsx';
import MarkerClusterGroup from './marker-cluster-group.jsx';
import { OpenStadComponentMapArea as Area, createCutoutPolygon } from './area.jsx';
import { searchAddressByLatLng, suggestAddresses, LookupLatLngByAddressId } from '../lib/search.js';

// TODO: wat doet updatemarker?

export default class OpenStadComponentMap extends OpenStadComponent {

  constructor(props, defaultConfig) {

    super(props, defaultConfig, {
			style: 'standaard',
			search: false,
			center: {
				lat: 52.37104644463586,
				lng: 4.900402911007405,
			},
			zoom: 14,
			zoomposition: 'bottomleft',
			disableDefaultUI: true,
			area: null,
			autoZoomAndCenter: false,
      scrollWheelZoom: true,
      clustering: {
        isActive: true,
      },
		});

		let self = this;
    self.config.target = self.divId;

    // polygon is the old name for area
    if (self.config.polygon || self.config.autoZoomAndCenter == 'polygon') console.log("DEPRECATED: use 'area' instead of 'polygon'");
    if (self.config.polygon && !self.config.area) self.config.area = self.config.polygon;
    if (self.config.autoZoomAndCenter == 'polygon') self.config.autoZoomAndCenter = 'area';

    // more backwards compatibility
    self.config.center.lat = props.config && props.config.center && props.config.center.latitude || self.config.center.lat;
    self.config.center.lng = props.config && props.config.center && props.config.center.longitude || self.config.center.lng;

    // search functions
    self.searchAddressByLatLng = searchAddressByLatLng.bind(self);
    self.suggestAddresses = suggestAddresses.bind(self);
    self.LookupLatLngByAddressId = LookupLatLngByAddressId.bind(self);

    self.state = {
		  markers: [],
    }

  }

	async componentDidMount() {

    var self = this;

    // area
    if (self.config.area) {
			await self.setArea(self.config.area);
		}

    // initial markers
    if (self.config.markers && self.config.markers.length) {
      this.addMarkers(self.config.markers)
    }

	  // zoom and center
	  if (self.config.autoZoomAndCenter) {
		  var centerOn = ( self.config.autoZoomAndCenter == 'area' && self.config.area ) || ( self.state.markers && self.state.markers.length && self.state.markers ) || self.config.area;
		  if (self.editorMarker) {
			  if (self.editorMarker.position) {
				  centerOn = [self.editorMarker];
			  } else {
				  centerOn = self.config.area;
			  }
		  }
		  if (centerOn) {
			  self.setBoundsAndCenter( centerOn );
		  }
	  }

		self.mapIsReady = true;
		var event = new CustomEvent('osc-map-is-ready', { detail: { id: self.divId } });
		document.dispatchEvent(event);

	}

	addMarkers(markersData) {
		var self = this;
    markersData.forEach(markerData => {
      self.addMarker(markerData)
    });
  }

	addMarker(markerData) {

    let {markers} = this.state;

    markerData.iconCreateFunction = this.config.iconCreateFunction;
    if (!markerData.icon && this.config.categorize) {
      let category = markerData.data && eval(`markerData.data.${this.config.categorize.categorizeByField}`);
      let icon = ( this.config.categorize.categories[ category ] && this.config.categorize.categories[ category ].icon );
      if (icon) markerData.icon = icon;
    }
    if (!markerData.icon && this.config.defaultIcon) {
      markerData.icon = this.config.defaultIcon;
    }
    if (markerData.icon) {
      if (!markerData.iconSize && markerData.icon.width && markerData.icon.height) markerData.icon.iconSize = [markerData.icon.width, markerData.icon.height]
      if (!markerData.iconAnchor && markerData.icon.anchor) markerData.icon.iconAnchor = markerData.icon.anchor
    }

    markerData.onClick = markerData.onClick ? [ markerData.onClick, this.onMarkerClick ] : [ this.onMarkerClick ];
    markerData.visible = true;

		if (this.config.clustering && this.config.clustering.isActive && !markerData.doNotCluster) {
      markerData.isClustered = true;
		}

    markers.push(markerData);
    this.setState({markers});
    return markerData;

	}

	removeMarker(marker) {

    if (!marker) return;
    let {markers} = this.state;

    let index = markers.indexOf(marker);
    if (index > -1) {
      markers.splice(index, 1)
    }

    this.setState({markers});

  }

	updateMarker(marker, newData) {

    if (!marker) return;
    let {markers} = this.state;

    let index = markers.indexOf(marker);

    if ( index != -1 ) {

      let lat = newData.lat || marker.lat;
      let lng = newData.lng || marker.lng;
      if (lat && lng) {
        markers[index].lat = lat
        markers[index].lng = lng
      }

      if (typeof newData.isFaded != 'undefined') {
        markers[index].isFaded = newData.isFaded
      }

      this.setState({markers});

    }

  }

  getMarkers() {
    return this.state.markers;
  }

  setMarkers(markers) {
    return this.setState({markers});
  }

  setArea(area) {
	  let polygon = createCutoutPolygon(area);
    this.setState({ area: polygon })
  }

  unsetArea(area) {
    this.setState({ area: null });
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
    if (!marker) return;
    let {markers} = this.state;

    let index = markers.indexOf(marker);
    if (index > -1) {
      markers[index].visible = true;
    }

    this.setState({markers});
  }

  hideMarkers(markers) {
	  var self = this;
    markers.forEach((marker) => {
      self.hideMarker(marker);
    });
  }
  
  hideMarker(marker) {
    if (!marker) return;
    let {markers} = this.state;

    let index = markers.indexOf(marker);
    if (index > -1) {
      markers[index].visible = false;
    }

    this.setState({markers});
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

  isPointInArea(point) {
    if (this.area) return this.area.isPointInArea(point);
  }

	onMapClick(event) {
		let customEvent = new CustomEvent('osc-map-click', { detail: event });
		document.dispatchEvent(customEvent);
  }

	onMarkerClick(event) {
    console.log(1, event);
		let customEvent = new CustomEvent('osc-map-marker-click', { detail: event });
		document.dispatchEvent(customEvent);
  }

  onMapClusterAnimationEnd(event) {
  }

	render() {

    let self = this;

    let areaHTML = null;
    if (self.state.area) {
      areaHTML = (<Area config={self.config} area={self.state.area} ref={el => (self.area = el)}/>);
    }

    let clusterMarkers = [];

    return (
      <MapContainer id={self.divId} className={self.props.className || 'osc-map'} center={[self.config.center.lat, self.config.center.lng]} zoom={self.config.zoom} scrollWheelZoom={self.config.scrollWheelZoom}>

        <MapConsumer>
          { map => {
            if (self.map) return null;
            self.map = map;
            map.on('click', event => {
              let onClick = self.config.onClick || [];
              if (!Array.isArray(onClick)) onClick = [onClick];
              onClick.push(self.onMapClick);
              onClick.map(func => {
			          if (typeof func == 'string') onClick = eval(func);
                func(event);
              })
            })
            return null;
          }}
        </MapConsumer>

        <TileLayer variant={self.config.variant} minZoom={self.config.minZoom} maxZoom={self.config.maxZoom} mapTiles={self.config.mapTiles}/>

        {self.state.markers.map((data, i) => {
          if (data.isClustered) {
            clusterMarkers.push(data);
          } else {
            return (<Marker {...data} key={`marker-${i}`}/>);
          }
        })}

        <MarkerClusterGroup config={{ ...self.config.clustering, categorize: self.config.categorize }} markers={clusterMarkers}/>

        {areaHTML}

      </MapContainer>
    );

  }

}
