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
import OpenStadComponentIdeasOnMap from './component/ideas-on-map.jsx';


// render elements
OpenStadComponentIdeasOnMap.renderElement = function renderElement( elem, config, store ) {
  let attributes = elem.attributes;
  ReactDOM.render( <Provider store={store}> <OpenStadComponentIdeasOnMap attributes={attributes} config={config}/> </Provider>, elem)
}

export {
  OpenStadComponentIdeasOnMap as default,
  OpenStadComponentIdeasOnMap as IdeasOnMap,
  store as OpenstadStore
};

