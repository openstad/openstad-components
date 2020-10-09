// polyfills
import 'whatwg-fetch';
import 'custom-event-polyfill';

// react
import React from 'react';
import ReactDOM from 'react-dom';

// import css to make sure it is generated in the result
import './css/default.less';

// the module
import OpenStadComponentPolygonEditor from './component/polygon-editor.jsx';

// render elements
OpenStadComponentPolygonEditor.renderElement = function renderElement( elem, config ) {
  let attributes = elem.attributes;
	ReactDOM.render( <OpenStadComponentPolygonEditor attributes={attributes} config={config}/>, elem)
}

export {
  OpenStadComponentPolygonEditor as default,
  OpenStadComponentPolygonEditor as PolygonEditor,
};

