// polyfills
import 'whatwg-fetch';

// react
import React from 'react';
import ReactDOM from 'react-dom';

// import css to make sure it is generated in the result
import './css/default.less';

// the module
import OpenStadComponentPoll from './component/poll.jsx';

// render elements
OpenStadComponentPoll.renderElement = function renderElement( elem, config ) {
  let attributes = elem.attributes;
	ReactDOM.render( <OpenStadComponentPoll attributes={attributes} config={config}/>, elem)
}

export {
  OpenStadComponentPoll as default,
  OpenStadComponentPoll as Poll,
};

