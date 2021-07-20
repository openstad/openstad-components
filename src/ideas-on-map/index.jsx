// polyfills
import 'whatwg-fetch';
import 'custom-event-polyfill';
import 'core-js/es/object/assign';

// react
import React from 'react';
import ReactDOM from 'react-dom';

// import css to make sure it is generated in the result
import './css/default.less';

// the module
import OpenStadComponentIdeasOnMap from './component/ideas-on-map.jsx';

// render elements
OpenStadComponentIdeasOnMap.renderElement = function renderElement( elem, config ) {
  let attributes = elem.attributes;
	ReactDOM.render( <OpenStadComponentIdeasOnMap attributes={attributes} config={config}/>, elem)
}

export {
  OpenStadComponentIdeasOnMap as default,
  OpenStadComponentIdeasOnMap as IdeasOnMap,
};

