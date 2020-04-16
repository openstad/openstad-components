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
import InputWithCounter from './component/input-with-counter.jsx';
import Text from './component/text.jsx';
import Textarea from './component/textarea.jsx';
import Slider from './component/slider.jsx';
export default {
  InputWithCounter,
  Text,
  Textarea,
  Slider,
}

// render the base element
// function renderElement( elem, config ) {
//   let attributes = elem.attributes;
//   ReactDOM.render( <OpenStadComponentReactions attributes={attributes} config={config}/>, elem)
// }
// export {renderElement}

