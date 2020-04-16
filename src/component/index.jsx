import React from 'react';

'use strict';

export default class OpenStadComponent extends React.Component {

  constructor(props) {

    super(props);

    let self = this;

    if (props.attributes) {
      Object.keys(props.attributes).forEach((key) => {
        let attribute = props.attributes[key];
        self[attribute.name] = attribute.value;
      });
    }

    self.config = self.config || props.config;

    if (self.config) {
      try {
        self.config = JSON.parse(self.config);
      } catch (err) {}
    }

    self.divId = self.divId || ( self.config && self.config.divId ) || props.id || `openstad-component-${  parseInt( 100000000 * Math.random() )}`;
    
    window[self.divId] = this;

  }

  componentDidMount(prevProps, prevState) {
    // let event = new Event('isReady');
    // self.isReady = true;
    // self.instance.dispatchEvent(event);
  }

}
