// polyfills
import 'whatwg-fetch';
import 'core-js/es/array/find';
import 'core-js/es/array/find-index';
import 'core-js/es/array/includes';
import 'core-js/es/string/includes';
import 'core-js/es/object/assign';
import 'custom-event-polyfill';

// react
import React from 'react';
import ReactDOM from 'react-dom';

// import css to make sure it is generated in the result
import './css/default.less';

// the module
import OpenStadComponentChoicesGuide from './component/choices-guide.jsx';
import OpenStadComponentChoicesGuideResult from './component/choices-guide-result.jsx';

// render elements
OpenStadComponentChoicesGuide.renderElement = function renderElement( elem, config ) {
  let attributes = elem.attributes;
	ReactDOM.render( <OpenStadComponentChoicesGuide attributes={attributes} config={config}/>, elem)
}
OpenStadComponentChoicesGuideResult.renderElement = function renderElement( elem, config ) {
  let attributes = elem.attributes;
	ReactDOM.render( <OpenStadComponentChoicesGuideResult attributes={attributes} config={config}/>, elem)
}

export {
  OpenStadComponentChoicesGuide as default,
  OpenStadComponentChoicesGuide as ChoicesGuide,
  OpenStadComponentChoicesGuideResult as ChoicesGuideResult,
};
