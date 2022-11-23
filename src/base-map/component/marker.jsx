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
			}
			if (iconCreateFunction && typeof iconCreateFunction == 'function') {
				icon = iconCreateFunction();
			}
		}
    if (icon) {
      try {
        icon = JSON.parse(icon);
      } catch(err) {}

      if (!icon.iconSize && icon.width && icon.height) icon.iconSize = [icon.width, icon.height]
      if (!icon.iconAnchor && icon.anchor) icon.iconAnchor = icon.anchor

      addToClassname(icon, 'osc-map-marker', { before: true })
      markerprops.isFaded ? addToClassname(icon, 'osc-map-marker-faded') : removeFromClassName(icon, 'osc-map-marker-faded');
      if (icon.iconUrl) markerprops.icon = new L.Icon(icon);
      if (icon.html) markerprops.icon = new L.divIcon(icon);
    }

    // events
    let eventHandlers = {};
    for (let eventname of ['click', 'mouseDown', 'mouseUp', 'dragStart', 'dragEnd']) {
      let EventName = 'on' + eventname.charAt(0).toUpperCase() + eventname.slice(1);;
      eventname = eventname.toLowerCase();
      let onEvent = markerprops[EventName] || [];
      if (!Array.isArray(onEvent)) onEvent = [onEvent];
		  if (EventName == 'onClick' && this.props.href) {
		    onEvent.push(function() {
		      document.location.href = markerprops.href;
		    });
		  }
      if (onEvent.length) {
        eventHandlers[eventname] = e => {
          onEvent.map(func => {
			      if (typeof func == 'string') return eval(func)(e);
            return func(e);
          })
        }
		  }
    }

    let draggable = eventHandlers['dragstart'] || eventHandlers['dragend'];
    
    return this.props.visible ? (
      <Marker position={position} {...markerprops} eventHandlers={{ ...eventHandlers }} draggable={!!draggable}/>
    ) : null;

  }
  
}
