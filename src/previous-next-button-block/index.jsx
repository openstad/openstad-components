// polyfills
import 'whatwg-fetch';

// react
import React from 'react';
import ReactDOM from 'react-dom';

// import css to make sure it is generated in the result
import './css/default.less';

// the module
import OpenStadComponentPreviousNextButtonBlock from './component/previous-next-button-block.jsx';

// render elements
OpenStadComponentPreviousNextButtonBlock.renderElement = function renderElement( elem, config ) {
  let attributes = elem.attributes;
	ReactDOM.render( <OpenStadComponentPreviousNextButtonBlock attributes={attributes} config={config}/>, elem)
}

export {
  OpenStadComponentPreviousNextButtonBlock as default,
  OpenStadComponentPreviousNextButtonBlock as PreviousNextButtonBlock,
};

