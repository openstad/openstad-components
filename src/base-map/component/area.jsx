'use strict';

import OpenStadComponent from '../../component/index.jsx';
import { Polygon } from 'react-leaflet'

export function	createCutoutPolygon(area) {

	var self = this;

	// polygon must defined from the south west corner to work with the outer box
	var bounds = L.polygon(area).getBounds();
	var center = bounds.getCenter();

	var smallest = 0; var index = 0;

	area.forEach(function( point, i ) {
		var y = Math.sin(point.lng-center.lng) * Math.cos(point.lat);
		var x = Math.cos(center.lat)*Math.sin(point.lat) - Math.sin(center.lat)*Math.cos(point.lat)*Math.cos(point.lng-center.lng);
		var bearing = Math.atan2(y, x) * 180 / Math.PI;
		if (45 - bearing < smallest) {
			smallest = 45 - bearing;
			index = i;
		}
	});

	var a = area.slice(0, index);
	var b = area.slice(index, area.length);
	area = b.concat(a);

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

  let result = [
    outerBox.map(obj => [obj.lat, obj.lng]),
    area.map(obj => [obj.lat, obj.lng])
  ];

  return result;

}


export class OpenStadComponentMapArea extends OpenStadComponent {

  constructor(props, defaultConfig) {

    super(props, defaultConfig, {
			area: null,
      polygonStyle: {
			  "color": "#d00",
			  "fillColor": "#000",
			  "fillOpacity": 0.15
		  }
		});

  }

  isPointInArea(point) {

    let self = this;
    let polygon = self.props.area && self.props.area[1] && Array.isArray(self.props.area[1]) ? self.props.area[1] : self.props.area;

    if (!point) return false;
    if (!polygon) return true;

	  // taken from http://pietschsoft.com/post/2008/07/02/Virtual-Earth-Polygon-Search-Is-Point-Within-Polygon

    var x = point.lat, y = point.lng;

    var inside = false;
    for (var i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        var xi = polygon[i][0], yi = polygon[i][1];
        var xj = polygon[j][0], yj = polygon[j][1];

        var intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }

    return inside; 

  }
  
  render() {

    return (
      <Polygon positions={this.props.area} pathOptions={this.config.polygonStyle}/>
    );
    

  }

}

export default OpenStadComponentMapArea;

