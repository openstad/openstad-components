// polyfills
import 'whatwg-fetch';
import 'custom-event-polyfill';

// react
import React from 'react';
import ReactDOM from 'react-dom';

// react redux
import { Provider } from 'react-redux'

// import css to make sure it is generated in the result
import './css/default.less';
import store from '../store';

// the module
import OpenStadComponentPreviousNextButtonBlock from './component/previous-next-button-block.jsx';

// render elements
OpenStadComponentPreviousNextButtonBlock.renderElement = function renderElement( elem, config, store ) {
  let attributes = elem.attributes;
  ReactDOM.render( <Provider store={store}> <OpenStadComponentPreviousNextButtonBlock attributes={attributes} config={config}/> </Provider>, elem)
}

export {
  OpenStadComponentPreviousNextButtonBlock as default,
  OpenStadComponentPreviousNextButtonBlock as PreviousNextButtonBlock,
  store as OpenstadStore
};

