'use strict';

import OpenStadComponentBaseMap from '../../base-map/index.jsx';

export default class Map extends OpenStadComponentBaseMap {

  constructor(props) {

    super(props, {
      clustering: {
        maxClusterRadius: 100,
        showCoverageOnHover: false,
      },
      locationIcon: { html: '<svg width="39" height="50" viewBox="0 0 39 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.1038 0C29.6577 0 38.2075 8.46671 38.2075 18.9181C38.2075 33.1786 21.7544 47.7273 21.0432 48.3035L19.1038 50L17.1643 48.3035C16.4532 47.7273 0 33.1786 0 18.9181C0 8.46831 8.54983 0 19.1038 0ZM32.3245 18.9181C32.3083 11.6837 26.4091 5.84187 19.1038 5.82586C11.7984 5.84187 5.89922 11.6837 5.88306 18.9181C5.88306 27.3367 14.1581 37.2439 19.0876 42.1095C23.1767 38.1242 32.3245 27.993 32.3245 18.9181Z" fill="#EC0000"/><path d="M19.104 5.82568C26.4093 5.84169 32.3086 11.6836 32.3247 18.9179C32.3247 27.9928 23.1769 38.124 19.0879 42.1093C14.1584 37.2437 5.8833 27.3366 5.8833 18.9179C5.89946 11.6836 11.7987 5.84169 19.104 5.82568ZM25.5689 18.9179C25.5689 15.3807 22.6759 12.5158 19.104 12.5158C15.5322 12.5158 12.6391 15.3807 12.6391 18.9179C12.6391 22.455 15.5322 25.3199 19.104 25.3199C22.6759 25.3199 25.5689 22.455 25.5689 18.9179Z" fill="white"/><path d="M19.1038 25.3202C22.6743 25.3202 25.5687 22.4539 25.5687 18.9182C25.5687 15.3824 22.6743 12.5161 19.1038 12.5161C15.5333 12.5161 12.6389 15.3824 12.6389 18.9182C12.6389 22.4539 15.5333 25.3202 19.1038 25.3202Z" fill="#EC0000"/></svg>', className: 'osc-ideas-on-map-icon', width: 39, height: 50, iconAnchor: [20, 50] },
      types: [],
    });

    // tmp fallback
    this.config.polygon = this.config.polygon;
    this.config.autoZoomAndCenter = this.config.autoZoomAndCenter || 'polygon'
    
    this.ideas = [];

    this.state = {
      filters: {},
    }

  }

	componentDidMount(prevProps, prevState) {

    super.componentDidMount(prevProps, prevState);

    let self = this;

    self.mapClusterAnimationEndListener = function(event) {
      self.onMapClusterAnimationEnd(event.detail);
    }
		document.addEventListener('osc-map-cluster-animation-end', self.mapClusterAnimationEndListener);

    self.ideasFilterOnchangeListener = function(event) {
      self.onChangeFilter(event.detail)
    }      
	  document.addEventListener('osc-ideas-filter-onchange', self.ideasFilterOnchangeListener);

    self.ideasFilterResetAllListener = function(event) {
      self.onResetFilters(event.detail)
    }      
	  document.addEventListener('osc-ideas-filter-reset-all', self.ideasFilterResetAllListener);
    
	}

  componentWillUnmount() {
		document.removeEventListener('osc-map-cluster-animation-end', this.mapClusterAnimationEndListener);
    document.removeEventListener('osc-ideas-filter-onchange', this.ideasFilterOnchangeListener)
    document.removeEventListener('osc-ideas-filter-reset-all', this.ideasFilterResetAllListener)
  }
  
  addIdea(idea) {
    let self = this;
    self.ideas.push(idea);
    // todo: dit moet met een iconCreate functie
    let typename = idea && self.config.typeField ? eval(`idea.${self.config.typeField}`) : 'typeId';
		let typeDef = self.config.types.find(entry => typename && ( entry.id == typename || entry.name == typename ));
    if (!typeDef) typeDef = {};
	  let color = typeDef.color || typeDef.backgroundColor || '#164995';
    let icondef = ( ( typeDef.mapicon || typeDef.icon ) ) || { html: `<svg viewBox="0 0 26 26"><circle cx="13" cy="13" r="13" fill="${color}"/></svg>`, width: 26, height: 26, anchor: [13, 13] };
		let icon = L.divIcon({ html: icondef.html, className: 'osc-ideas-on-map-icon', iconSize: L.point(icondef.width, icondef.height), iconAnchor: icondef.anchor });
    self.addMarker({ lat: idea.location.coordinates[0], lng: idea.location.coordinates[1], data: idea, icon });
  }

  getVisibleIdeas() {
    let self = this;
    let visibleIdeas = self.markers
        .filter( marker => marker.visible && marker.data && self.map.getBounds().contains(marker.getLatLng()))
        .map( marker => marker.data );
    self.setState({ visibleIdeas });
    return visibleIdeas;
  }

  setSelectedLocation(location) {
    this.selectedLocation = location;
    if (this.selectedLocation) {
      if (this.selectedLocationMarker) {
        this.updateMarker(this.selectedLocationMarker, { location });
      } else {
		    let icon = L.divIcon({ html: this.config.locationIcon.html, className: 'osc-ideas-on-map-icon', iconSize: L.point(this.config.locationIcon.width, this.config.locationIcon.height), iconAnchor: this.config.locationIcon.iconAnchor });
        this.selectedLocationMarker = this.addMarker({ ...location, icon, doNotCluster: true });
      }
    } else {
      if (this.selectedLocationMarker) {
        this.removeMarker(this.selectedLocationMarker);
      }
      this.selectedLocationMarker = null;
    }
  }

  setBoundsAndCenter(points) {
    super.setBoundsAndCenter(points || ( this.config.autoZoomAndCenter == 'polygon' && this.config.polygon ) || this.markers);
  }

  showMarkers({ keepCenter=false }) {
	  var self = this;
    self.markers.forEach((marker) => {
      self.showMarker(marker)
    });
    // if (!keepCenter) self.setBoundsAndCenter(( self.config.autoZoomAndCenter == 'polygon' && self.config.polygon ) || self.markers);
  }

  hideMarkers({ exception }) {
	  var self = this;
    if (exception && exception.location) self.setBoundsAndCenter([ exception.location ]);
    self.markers.forEach((marker) => {
      if (!(exception && exception.location && exception.location.lat == marker._latlng.lat && exception.location.lng == marker._latlng.lng)) {
        self.hideMarker(marker)
      }
    });
  }

  fadeMarkers({ exception }) {
    console.log('FADE');
    let self = this;
    self.markers.forEach((marker) => {
      if (exception && marker.data && marker.data.id && exception.id == marker.data.id) {
        if (marker.data) marker.data.isFaded = false;
      } else if (this.selectedLocationMarker && this.selectedLocationMarker == marker) {
        if (marker.data) marker.data.isFaded = false;
      } else {
        if (marker.data) marker.data.isFaded = true;
        let visibleParent = self.markerClusterGroup && self.markerClusterGroup.getVisibleParent(marker);
        let ignore = visibleParent && visibleParent.getAllChildMarkers && visibleParent.getAllChildMarkers().find( m => m.data && m.data.isFaded === false );
        if (!ignore && visibleParent) {
          visibleParent.setOpacity(0.3);
        }
      }
    });
  }

  // fix for https://github.com/Leaflet/Leaflet.markercluster/issues/177
  updateFading() {
    let self = this;
    self.markers.forEach((marker) => {
      let visibleParent = self.markerClusterGroup && self.markerClusterGroup.getVisibleParent(marker);
      if (visibleParent && marker.visible) {
        let ignore = visibleParent && visibleParent.getAllChildMarkers && visibleParent.getAllChildMarkers().find( m => m.data && m.data.isFaded === false );
        visibleParent.setOpacity(!ignore && marker.data && marker.data.isFaded ? 0.3 : 1);
      }
    });
  }

  unfadeAllMarkers() {
    console.log('UNFADE');
    let self = this;
    // markers
    self.markers.forEach((marker) => {
      if (marker.data) marker.data.isFaded = false;
      let visibleParent = self.markerClusterGroup && self.markerClusterGroup.getVisibleParent(marker);
        if (visibleParent) {
          visibleParent.setOpacity(1);
        }
    });
  }

  onMapClusterAnimationEnd() {
    this.updateFading();
  }

  onChangeFilter(filter) {
    // TODO: areas update zou ook met polygons moeten werken
    let self = this;
    let filters = self.state.filters;
    filters[filter.fieldName] = filter;
    self.setState({ filters }, () => {
	    self.setFilter(function(marker) {
        let result = true;
        Object.keys(self.state.filters).forEach((fieldName) => {
          let filter = self.state.filters[fieldName]
		      if (filter.value && filter.value !== '0') {
			      if (marker.data && !eval(`marker.data.${filter.fieldName}`) || eval(`marker.data.${filter.fieldName}`) != filter.value) result = false;
		      }
        });
        return result;
	    })
    });
  }

  onResetFilters(filter) {
    this.setBoundsAndCenter()
  }

}
