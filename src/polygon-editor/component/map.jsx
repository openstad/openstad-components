import merge from 'merge';
import React from 'react';
import OpenStadComponentNLMap from '../../nlmap/index.jsx';

'use strict';

export default class Map extends OpenStadComponentNLMap {

  constructor(props) {

    super(props);

		// config
		this.defaultConfig = {
      autoZoomAndCenter: 'polygon',
    };
		this.config = merge.recursive(this.defaultConfig, this.config, props.config || {})

    this.state = {
      points: [],
    };

  }

	componentDidMount(prevProps, prevState) {

    let self = this;
    super.componentDidMount(prevProps, prevState);

		document.addEventListener('osc-map-marker-click', function(event) {
			self.onMarkerClick(event.detail);
		});

  }

	onMapClick(detail) {
    super.onMapClick(detail);
    console.log(detail);
  }

	onMarkerClick(detail) {
    console.log(detail);
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
    let self = this;
    self.markers.forEach((marker) => {
      if (exception && marker.data && marker.data.id && exception.id == marker.data.id) {
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

}
