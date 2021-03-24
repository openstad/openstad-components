// polyfills
import 'whatwg-fetch';

// react
import React from 'react';
import ReactDOM from 'react-dom';

// import css to make sure it is generated in the result
import './css/default.less';

// the module
import OpenStadComponentIdeasList from './component/ideas-list.jsx';
import OpenStadComponentIdeasOverview from './component/ideas-overview.jsx';
import OpenStadComponentIdeasFilterbar from './component/ideas-filterbar.jsx';
import OpenStadComponentIdeasFilter from './component/ideas-filter.jsx';
import OpenStadComponentIdeasSearch from './component/ideas-search.jsx';
import OpenStadComponentIdeasSort from './component/ideas-sort.jsx';
import OpenStadComponentIdeaTile from './component/idea-tile.jsx';

// render elements
OpenStadComponentIdeasOverview.renderElement = function renderElement( elem, config ) {
  let attributes = elem.attributes;
	ReactDOM.render( <OpenStadComponentIdeasOverview attributes={attributes} config={config}/>, elem)
}

export {
  OpenStadComponentIdeasOverview as default,
  OpenStadComponentIdeasList as IdeasList,
  OpenStadComponentIdeasOverview as IdeasOverview,
  OpenStadComponentIdeasFilterbar as IdeasFilterbar,
  OpenStadComponentIdeasFilter as IdeasFilter,
  OpenStadComponentIdeasSort as IdeasSort,
  OpenStadComponentIdeasSearch as IdeasSearch,
  OpenStadComponentIdeaTile as IdeaTile,
};

