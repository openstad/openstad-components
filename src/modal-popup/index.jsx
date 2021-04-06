// polyfills
import 'whatwg-fetch';
import 'core-js/es/array/find-index';

// react
import React from 'react';
import ReactDOM from 'react-dom';

// import css to make sure it is generated in the result
import './css/default.less';

// the module
import OpenStadComponentModalPopup from './component/modal-popup.jsx';

// render elements
OpenStadComponentModalPopup.renderElement = function renderElement( elem, config ) {
  let attributes = elem.attributes;
	ReactDOM.render( <OpenStadComponentModalPopup attributes={attributes} config={config}/>, elem)
}

export {
  OpenStadComponentModalPopup as default,
  OpenStadComponentModalPopup as ModalPopup,
};

