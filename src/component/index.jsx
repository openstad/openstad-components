import merge from 'merge';
import React from 'react';

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
    Object.keys(propsConfig).forEach(key => propsConfig[key] === undefined ? delete propsConfig[key] : {}); // remove undefined
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
    
    window[self.divId] = self;

  }

  componentDidMount(prevProps, prevState) {
    // let event = new Event('isReady');
    // self.isReady = true;
    // self.instance.dispatchEvent(event);
  }

}
