// polyfills
import 'whatwg-fetch';

// react
import React from 'react';
import ReactDOM from 'react-dom';

// import css to make sure it is generated in the result
import './css/default.less';

// the module
import OpenStadComponentNumberplates from './component/numberplates.jsx';
import OpenStadComponentNumberplateButton from './component/numberplate-button.jsx';

// render elements
OpenStadComponentNumberplates.renderElement = function renderElement( elem, config ) {
  let attributes = elem.attributes;
	ReactDOM.render( <OpenStadComponentNumberplates attributes={attributes} config={config}/>, elem)
}

OpenStadComponentNumberplateButton.renderElement = function renderElement( elem, config ) {
  let attributes = elem.attributes;
	ReactDOM.render( <OpenStadComponentNumberplateButton attributes={attributes} config={config}/>, elem)
}

export {
  OpenStadComponentNumberplates as default,
  OpenStadComponentNumberplates as Numberplates,
  OpenStadComponentNumberplateButton as NumberplateButton,
};

