import merge from 'merge';
import storage from '../lib/localstorage.js';
import React from 'react';
import ReactDOM from 'react-dom';
import OpenStadComponent from '../../component/index.jsx';

'use strict';

export default class OpenStadComponentUser extends OpenStadComponent {

  constructor(props) {

    super(props);

		var self = this;

		// config
		self.defaultConfig = {
		};
		self.config = Object.assign(self.defaultConfig, props.config, self.config || {})

    console.log('xx', self.config);

    self.state = {
    }
    
  }

	componentDidMount(prevProps, prevState) {

    let self = this;

    // jwt in url
    let match = window.location.search.match(/(?:\?|&)jwt=([A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*)(?:&|$)/);
    if (match) {
      let jwt = match[1];
      let url = self.config.api.url + '/oauth/site/22/me';
      let headers = { 'X-Authorization': 'Bearer ' + jwt, 'Content-Type': 'application/json' };
      console.log(headers);
      fetch(url, { headers } )
        .then((response) => {
          if (!response.ok) throw new Error('Error on fetch')
          return response.json();
        })
        .then( json => {
          console.log('Ok');
          console.log(json);
        })
        .catch((err) => {
          console.log('Niet goed', err);
        });

    }
    
    // form changes
		document.addEventListener('newIdeaStored', function(event) {
      self.onNewIdeaStored(event.detail.idea);
    });
    
	}

  fetchData() {
  }
  
	render() {

    return (
			<div id={this.divId} className="" ref={el => (this.instance = el)}>
        <a href="http://openstad-api.francesco.denes.nl/oauth/site/22/login?redirectUrl=http://niels.xs4all.nl/openstad/user/example.html">Login</a>
			</div>
    );

  }

}
