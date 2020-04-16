// polyfills
//import 'core-js/es/map';
//import 'core-js/es/set';
import 'whatwg-fetch';

// react
import React from 'react';
import ReactDOM from 'react-dom';

// import css to make sure it is generated in the result
import './css/default.less';

// the module
import OpenStadComponentChoicesGuide from './component/choices-guide.jsx';

// render the base element
OpenStadComponentChoicesGuide.renderElement = function renderElement( elem, config ) {
  let attributes = elem.attributes;
	ReactDOM.render( <OpenStadComponentChoicesGuide attributes={attributes} config={config}/>, elem)
}

export { OpenStadComponentChoicesGuide as ChoicesGuide, OpenStadComponentChoicesGuide as default };

