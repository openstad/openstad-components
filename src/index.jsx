// polyfills
//import 'core-js/es/map';
//import 'core-js/es/set';
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
import OpenStadComponentChoicesGuide from './choices-guide/index.jsx';
export {
  OpenStadComponent as Component,
  OpenStadComponentLibs as Libs,
  OpenStadComponentForms as Forms,
  OpenStadComponentChoicesGuide as ChoicesGuide,
}


