// polyfills
import 'whatwg-fetch';

// react
import React from 'react';
import ReactDOM from 'react-dom';

// import css to make sure it is generated in the result
import './css/default.less';

// the module
import OpenStadComponentImage from './component/image.jsx';
import OpenStadComponentIdeaImage from './component/idea-image.jsx';

// render elements
OpenStadComponentIdeaImage.renderElement = function renderElement( elem, config ) {
  let attributes = elem.attributes;
	ReactDOM.render( <OpenStadComponentIdeaImage attributes={attributes} config={config}/>, elem)
}

export {
  OpenStadComponentImage as default,
  OpenStadComponentImage as Image,
  OpenStadComponentIdeaImage as IdeaImage,
};

