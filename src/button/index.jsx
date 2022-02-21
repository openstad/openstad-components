// polyfills
import 'whatwg-fetch';

// react
import React from 'react';
import ReactDOM from 'react-dom';

// import css to make sure it is generated in the result
import './css/default.less';

// the module
import OpenStadComponentButton from './component/button.jsx';
import OpenStadComponentNumberplates from './component/numberplates.jsx';

// render elements
OpenStadComponentButton.renderElement = function renderElement( elem, config ) {
  let attributes = elem.attributes;
	ReactDOM.render( <OpenStadComponentButton attributes={attributes} config={config}/>, elem)
}

export {
  OpenStadComponentButton as default,
  OpenStadComponentButton as Button,
  OpenStadComponentNumberplates as Numberplates,
};

