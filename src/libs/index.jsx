// polyfills
//import 'core-js/es/map';
//import 'core-js/es/set';
import 'whatwg-fetch';

// react
import React from 'react';
import ReactDOM from 'react-dom';

// import css to make sure it is generated in the result
import './css/default.less';

// the module
import api from './lib/api/index.js';
import auth from './lib/auth.js';
import user from './lib/user/index.js';
import ideasSort from './lib/ideas-sort.js';
import localStorage from './lib/local-storage.js';
import sessionStorage from './lib/session-storage.js';
import reactTemplate from './lib/react-template.js';
import { addToClassname, removeFromClassName } from './lib/class-name.js';

let OpenStadComponentLibs = {
  api,
  auth,
  user,
  ideasSort,
  localStorage,
  sessionStorage,
  reactTemplate,
  addToClassname,
  removeFromClassName,
}

export default OpenStadComponentLibs;

export {
  ideasSort,
  localStorage,
  sessionStorage,
  reactTemplate,
  addToClassname,
  removeFromClassName,
};


