// polyfills
//import 'core-js/es/map';
//import 'core-js/es/set';
import 'core-js/es/array/find';
import 'core-js/es/array/find-index';
import 'core-js/es/array/includes';
import 'core-js/es/string/includes';
import 'core-js/es/object/assign';
import 'whatwg-fetch';

// react
import React from 'react';
import ReactDOM from 'react-dom';

// import css to make sure it is generated in the result
import './index.less';

// the module
import OpenStadComponent from './component/index.jsx';
import Libs from './libs/index.jsx';
import Forms from './forms/index.jsx';
import { ChoicesGuide, ChoicesGuideResult } from './choices-guide/index.jsx';
import BaseMap from './base-map/index.jsx';
import Button from './button/index.jsx';
import Lightbox from './lightbox/index.jsx';
import IdeasOnMap from './ideas-on-map/index.jsx';
import IdeaDetails from './idea-details/index.jsx';
import IdeasOverview from './ideas-overview/index.jsx';
import IdeasImage from './image/index.jsx';
import Poll from './poll/index.jsx';
import PreviousNextButtonBlock from './previous-next-button-block/index.jsx';
import Reactions from './reactions/index.jsx';

export {
  OpenStadComponent,
  Forms,
  ChoicesGuide,
  ChoicesGuideResult,
  BaseMap,
  Button,
  IdeasOnMap,
  IdeaDetails,
  IdeasOverview,
  IdeasImage,
  Lightbox,
  Poll,
  PreviousNextButtonBlock,
  Reactions,
}


