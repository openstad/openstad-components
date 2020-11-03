// polyfills
//import 'core-js/es/map';
//import 'core-js/es/set';
import 'core-js/es/array/find';
import 'whatwg-fetch';

// react
import React from 'react';
import ReactDOM from 'react-dom';

// import css to make sure it is generated in the result
import './index.less';

// the module
import OpenStadComponent from './component/index.jsx';
import OpenStadComponentLibs from './libs/index.jsx';
import OpenStadComponentForms from './forms/index.jsx';
import { ChoicesGuide, ChoicesGuideResult } from './choices-guide/index.jsx';
import OpenStadComponentNLMap from './nlmap/index.jsx';
import OpenStadComponentLightbox from './lightbox/index.jsx';
import OpenStadComponentIdeasOnMap from './ideas-on-map/index.jsx';
import OpenStadComponentIdeaDetails from './idea-details/index.jsx';
//import OpenStadComponentIdeasOverview from './ideas-overview/index.jsx';
import OpenStadComponentIdeasImage from './idea-image/index.jsx';
import OpenStadComponentPreviousNextButtonBlock from './previous-next-button-block/index.jsx';
import OpenStadComponentPoll from './poll/index.jsx';
import OpenStadComponentReactions from './reactions/index.jsx';


export {
  OpenStadComponent as Component,
  OpenStadComponentLibs as Libs,
  OpenStadComponentForms as Forms,
  ChoicesGuide,
  ChoicesGuideResult,
  OpenStadComponentNLMap as NLMap,
  OpenStadComponentIdeasOnMap as IdeasOnMap,
  OpenStadComponentIdeaDetails as IdeaDetails,
//  OpenStadComponentIdeasOverview as IdeasOverview,
  OpenStadComponentIdeasImage as IdeasImage,
  OpenStadComponentLightbox as Lightbox,
  OpenStadComponentPreviousNextButtonBlock as PreviousNextButtonBlock,
  OpenStadComponentPoll as Poll,
  OpenStadComponentReactions as Reactions,
}


