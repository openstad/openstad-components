'use strict';

import React from 'react';
import { Marker, Popup } from 'react-leaflet'
import { addToClassname, removeFromClassName } from '../../libs/index.jsx';

export default class OpenStadComponentMapMarker extends React.Component {

  render() {

    let markerprops = { ...this.props };

    // position
    let position = this.props.position;
    if (this.props.lat) {
      position = [ this.props.lat, this.props.lng ];
    }

    // icon
    delete markerprops.icon;
		let icon = this.props.icon;
		if (!icon) {
			let iconCreateFunction = this.props.iconCreateFunction;
			if (iconCreateFunction && typeof iconCreateFunction == 'string') {
				iconCreateFunction = eval(iconCreateFunction);
				icon = iconCreateFunction();
			}
		}
    if (icon) {
      addToClassname(icon, 'osc-map-marker')
      markerprops.isFaded ? addToClassname(icon, 'osc-map-marker-faded') : removeFromClassName(icon, 'osc-map-marker-faded');
      if (icon.iconUrl) markerprops.icon = new L.Icon(icon);
      if (icon.html) markerprops.icon = new L.divIcon(icon);
    }

    // events
    let eventHandlers = {};
    let onClick = markerprops.onClick || [];
    if (!Array.isArray(onClick)) onClick = [onClick];
		if (this.props.href) {
		  onClick.push(function() {
		    document.location.href = markerprops.href;
		  });
		}
    if (onClick.length) {
      eventHandlers.click = event => {
        onClick.map(func => {
			    if (typeof func == 'string') onClick = eval(func);
          func(event);
        })
      }
		}

    return this.props.visible ? (
      <Marker position={position} {...markerprops} eventHandlers={{ ...eventHandlers }}/>
    ) : null;
  }
  
}
