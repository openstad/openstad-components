// polyfills
import 'whatwg-fetch';

// react
import React from 'react';
import ReactDOM from 'react-dom';

// import css to make sure it is generated in the result
import './css/default.less';

// the module
import OpenStadComponentIdeaDetails from './component/idea-details.jsx';

// render elements
OpenStadComponentIdeaDetails.renderElement = function renderElement( elem, config ) {
  let attributes = elem.attributes;
	ReactDOM.render( <OpenStadComponentIdeaDetails attributes={attributes} config={config}/>, elem)
}

export {
  OpenStadComponentIdeaDetails as default,
  OpenStadComponentIdeaDetails as IdeaDetails,
};

