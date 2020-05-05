// polyfills
import 'whatwg-fetch';
import 'core-js/es/array/find-index';

// react
import React from 'react';
import ReactDOM from 'react-dom';

// import css to make sure it is generated in the result
import './css/default.less';

// the module
import OpenStadComponentLightbox from './component/lightbox.jsx';

// render elements
OpenStadComponentLightbox.renderElement = function renderElement( elem, config ) {
  let attributes = elem.attributes;
	ReactDOM.render( <OpenStadComponentLightbox attributes={attributes} config={config}/>, elem)
}

export {
  OpenStadComponentLightbox as default,
  OpenStadComponentLightbox as Lightbox,
};

