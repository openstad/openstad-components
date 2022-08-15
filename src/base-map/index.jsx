// polyfills
import 'whatwg-fetch';

// react
import React from 'react';
import ReactDOM from 'react-dom';

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

