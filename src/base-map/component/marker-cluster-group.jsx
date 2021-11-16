'use strict';

import React from 'react';
import OpenStadComponent from '../../component/index.jsx';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import Marker from './marker.jsx';
import amapsCreateClusterIcon from '../lib/amaps-cluster-icon.js';

export default class OpenStadComponentMapMarkerCluster extends OpenStadComponent {

  constructor(props, defaultConfig) {

    super(props, defaultConfig, {
      isActive: true,
      maxClusterRadius: 40,
      showCoverageOnHover: false,
      categorize: {
        categorizeByField: 'xxx',
        categories: {},
      }
    });

    this.iconCreateFunction = this.iconCreateFunction.bind(this);

  }

  componentDidMount() {
  }

	iconCreateFunction(cluster) {
    // TODO: uitwerken default voor andere varianten dan amaps
		let iconCreateFunction = this.config.iconCreateFunction || amapsCreateClusterIcon // ( this.config.variant == 'amaps' ? amapsCreateClusterIcon.bind(self) : self.createClusterIcon );
		if (iconCreateFunction && typeof iconCreateFunction == 'string') iconCreateFunction = eval(iconCreateFunction);
    iconCreateFunction = iconCreateFunction.bind(this)
    return iconCreateFunction(cluster, this.props.markers);
  }
  
	onClusterClick(event) {
    let func = this.config.onClusterClick;
    if (func) {
			if (typeof func == 'string') func = eval(func);
      func(event);
    }
		let customEvent = new CustomEvent('osc-map-cluster-click', { event });
		document.dispatchEvent(customEvent);
  }

	onClusterAnimationEnd(event) {
    // todo: deze lijkt niets te doen
    let func = this.config.onClusterAnimationEnd;
    if (func) {
			if (typeof func == 'string') func = eval(func);
      func(event);
    }
		let customEvent = new CustomEvent('osc-map-cluster-animation-end', { event });
		document.dispatchEvent(customEvent);
  }

  render() {

    let self = this;

    return (
      <MarkerClusterGroup {...this.config} iconCreateFunction={self.iconCreateFunction} onClick={e => self.onClusterClick(e)} onAnimationEnd={e => self.onClusterAnimationEnd(e)}>
        {this.props.markers.map((data, i) => 
          <Marker {...data} key={`marker-${i}`}/>
        )}
      </MarkerClusterGroup>
    );
  }
  
}
