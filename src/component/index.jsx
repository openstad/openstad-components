import merge from 'merge';
import React from 'react';
import 'core-js/es/array/includes';

'use strict';

export default class OpenStadComponent extends React.Component {

  constructor(props, defaultConfig = {}, defaultdefaultConfig = {}) {

    super(props);

    let self = this;

    if (props.attributes) {
      Object.keys(props.attributes).forEach((key) => {
        let attribute = props.attributes[key];
        self[attribute.name] = attribute.value;
      });
    }

		// config
    if (typeof self.config == 'string') {
      try {
        self.config = JSON.parse(self.config);
      } catch (err) {}
    }
    let propsConfig = props.config || {};
    propsConfig = removeUndefAndNull(propsConfig); // remove undefined and null
		self.config = merge.recursive({
      siteId: null,
			api: {
        url: null,
        headers: null,
        isUserLoggedIn: false,
      },
      user: {},
    }, defaultConfig, defaultdefaultConfig, propsConfig)

    self.divId = self.divId || ( self.config && self.config.divId ) || props.id || `openstad-component-${  parseInt( 100000000 * Math.random() )}`;
    self.config.divId = null; // do not propage to child components
    
    window[self.divId] = self;

  }

  componentDidMount(prevProps, prevState) {
    // let event = new Event('isReady');
    // self.isReady = true;
    // self.instance.dispatchEvent(event);
  }

}

function removeUndefAndNull(obj) {
  if (typeof obj != 'object') return obj;
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] == 'undefined' || obj[key] == null) delete obj[key];
    if (typeof obj[key] == 'object') obj[key] = removeUndefAndNull(obj[key]);
  });
  return  obj;
}
