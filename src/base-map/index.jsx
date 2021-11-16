// polyfills
import 'whatwg-fetch';

// react
import React from 'react';
import ReactDOM from 'react-dom';

// import css to make sure it is generated in the result
import './css/default.less';
import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/dist/styles.min.css';

// the module
import OpenStadComponentBaseMap from './component/base-map.jsx';

// render elements
OpenStadComponentBaseMap.renderElement = function renderElement( elem, config ) {
  let attributes = elem.attributes;
	ReactDOM.render( <OpenStadComponentBaseMap attributes={attributes} config={config}/>, elem)
}

export {
  OpenStadComponentBaseMap as default,
  OpenStadComponentBaseMap as BaseMap,
};

