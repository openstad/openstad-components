// polyfills
import 'whatwg-fetch';

// react
import React from 'react';
import ReactDOM from 'react-dom';

// import css to make sure it is generated in the result
import './css/default.less';

// the module
import OpenStadComponentIdeasOverview from './component/ideas-overview.jsx';
import OpenStadComponentIdeasFilter from './component/ideas-filter.jsx';
import OpenStadComponentIdeasSearch from './component/ideas-search.jsx';
import OpenStadComponentIdeasSort from './component/ideas-sort.jsx';

// render elements
OpenStadComponentIdeasOverview.renderElement = function renderElement( elem, config ) {
  let attributes = elem.attributes;
	ReactDOM.render( <OpenStadComponentIdeasOverview attributes={attributes} config={config}/>, elem)
}

export {
  OpenStadComponentIdeasOverview as default,
  OpenStadComponentIdeasOverview as IdeasOverview,
  OpenStadComponentIdeasFilter as IdeasFilter,
  OpenStadComponentIdeasSort as IdeasSort,
  OpenStadComponentIdeasSearch as IdeasSearch,
};

