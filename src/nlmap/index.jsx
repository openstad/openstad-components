// polyfills
import 'whatwg-fetch';

// react
import React from 'react';
import ReactDOM from 'react-dom';

// import css to make sure it is generated in the result
import './css/default.less';

// the module
import OpenStadComponentNLMap from './component/map.jsx';

// render elements
OpenStadComponentNLMap.renderElement = function renderElement( elem, config ) {
  let attributes = elem.attributes;
	ReactDOM.render( <OpenStadComponentNLMap attributes={attributes} config={config}/>, elem)
}

export {
  OpenStadComponentNLMap as default,
  OpenStadComponentNLMap as NLMap,
};

