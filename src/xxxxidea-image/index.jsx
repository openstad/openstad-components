// polyfills
import 'whatwg-fetch';

// react
import React from 'react';
import ReactDOM from 'react-dom';

// import css to make sure it is generated in the result
import './css/default.less';

// the module
import OpenStadComponentIdeaImage from './component/idea-image.jsx';

// render elements
OpenStadComponentIdeaImage.renderElement = function renderElement( elem, config ) {
  let attributes = elem.attributes;
	ReactDOM.render( <OpenStadComponentIdeaImage attributes={attributes} config={config}/>, elem)
}

export {
  OpenStadComponentIdeaImage as default,
  OpenStadComponentIdeaImage as IdeaImage,
};

