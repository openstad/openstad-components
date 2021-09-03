// react
import React from 'react';
import ReactDOM from 'react-dom';

import './css/default.less';

import DecisionTree from './component/decision-tree.jsx';


// render elements
DecisionTree.renderElement = function renderElement( elem, config ) {
    ReactDOM.render( <DecisionTree config={config} />, elem)
}

export {
    DecisionTree as default,
    DecisionTree
}