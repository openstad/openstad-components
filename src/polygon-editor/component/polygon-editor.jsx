import merge from 'merge';
import React from 'react';
import ReactDOM from 'react-dom';

import OpenStadComponent from '../../component/index.jsx';
import OpenStadComponentLibs from '../../libs/index.jsx';

import Map from './map.jsx';

'use strict';

export default class OpenStadComponentPolygonEditor extends OpenStadComponent {

  constructor(props) {

    super(props);

		let self = this;

		// config
		self.defaultConfig = {
      user: {},
      api: {
        url: null,
        headers: null,
        isUserLoggedIn: false,
      },
      polygonEditor: {
        pointIcon: { html: '<svg width="15" height="15"  viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><circle style="fill:#880000;stroke:#880000;stroke-width:2.5;" id="path3337" cx="7.5" cy="7.5" r="5" /></svg>', width: 15, height: 15, anchor: [7.5, 7.5] },
        editPointIcon: { html: '<svg width="15" height="15"  viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><circle style="fill:#ffffff;stroke:#000000;stroke-width:2.5;" id="path3337" cx="7.5" cy="7.5" r="5" /></svg>', width: 15, height: 15, anchor: [7.5, 7.5] },
      }
		};
		self.config = merge.recursive(self.defaultConfig, self.config, props.config || {})

    self.state = {
      currentMouseOverIdea: null,
      points: props.points || [      {
			  lat: 52.37104644463586,
			  lng: 4.900402911007405,
      },
      {
			  lat: 52.37204644463586,
			  lng: 4.901402911007405,
      }
],
    }
    
  }

	componentDidMount(prevProps, prevState) {

    let self = this;

    // map events
		// document.addEventListener('osc-map-click', function(event) {
    //   self.onMapClick(event.detail);
    // });
		// document.addEventListener('osc-map-marker-click', function(event) {
    //   self.onMarkerClick(event.detail);
    // });
    // when the map is ready

		document.addEventListener('osc-map-click', function(event) {
			self.onMapClick(event.detail);
		});

		document.addEventListener('osc-map-mousedown', function(event) {
			self.onMapMouseDown(event.detail);
		});

		document.addEventListener('osc-map-mouseup', function(event) {
			self.onMapMouseUp(event.detail);
		});

		document.addEventListener('osc-map-is-ready', function(e) {
      self.init()
    })
    
	}

  init() {
    let self = this;
    self.drawPoints();
  }

  fetchData() {
  }

  setSelectedLocation(location) {
    let self = this;
    self.map.setSelectedLocation(location)
    if (self.ideaform) {
      if (!location) return;
      self.ideaform.handleLocationChange({ location, address: 'Bezig met adresgegevens ophalen...' });
			self.map.getPointInfo(location, null, function(json, marker) {
				let address = json && json._display || 'Geen adres gevonden';
				self.state.editIdea.address = address;
				self.ideaform.handleLocationChange({ location, address: address });
			})
    }
  }
  
	// onMarkerClick(event) {
  //   console.log(event.target.data);
  // }

  // onChangeMapBoundaries() {
  // }

  addPoint(latlng) {
		let self = this;
    let points = self.state.points;
    points.push(latlng)
    self.setState({ points }, function() {
      self.drawPoints();
    });
  }
  
  drawPoints() {
		let self = this;

    let iconDef = this.config.polygonEditor.pointIcon;
		let icon = L.divIcon({ html: iconDef.html, className: 'osc-ideas-on-map-icon', iconSize: L.point(iconDef.width, iconDef.height), iconAnchor: iconDef.anchor });
//    var polyline = L.polyline(points, { color: '#880000', weight: 4, }).addTo(map);

    let points = self.state.points;
    points.forEach((point) => {
      if (!point.marker) {
        self.map.addMarker(
          {
			      lat: point.lat,
			      lng: point.lng,
            icon,
          }
        );
      }
    });
  }


  onMapMouseDown(detail) {
    console.log('MouseDown:', detail);
  }

  onMapMouseUp(detail) {
    console.log('MouseUp:', detail);
  }

  onMapClick(detail) {
    console.log('Click:', detail);
    this.addPoint(detail.latlng);
  }

	render() {

    return (
			<div id={this.divId} className="osc-polygon-editor" ref={el => (this.instance = el)}>
			  <Map id={this.divId + '-map'} config={{ ...this.config.map }} ref={el => (this.map = el)}/>
			</div>
    );

  }

}


