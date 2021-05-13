// react
import React from 'react';
import ReactDOM from 'react-dom';

// import css to make sure it is generated in the result
import './css/default.less';

// the module
import OpenStadComponentReactions from './component/reactions.jsx';

// render elements
OpenStadComponentReactions.renderElement = function renderElement( elem, config ) {
  let attributes = elem.attributes;
	ReactDOM.render( <OpenStadComponentReactions attributes={attributes} config={config}/>, elem)
}

export {
  OpenStadComponentReactions as default,
  OpenStadComponentReactions as Reactions,
};

