import React from 'react';
import merge from 'merge';

import OpenStadComponent from '../../component/index.jsx';
import OpenStadComponentLibs from '../../libs/index.jsx';

import OpenStadComponentReactionForm from './reaction-form.jsx';
import OpenStadComponentReaction from './reaction.jsx';

'use strict';

export default class OpenStadComponentReactions extends OpenStadComponent {

  constructor(props) {
    super(props);

    let self = this;
    self.id = props.id || `osc-reactions-${  parseInt( 1000000 * Math.random() )}`;

    self.defaultConfig = {
      scrollToNewReaction: true,
      sentiment: undefined,
      siteId: null,
      ideaId: null,
      title: null,
      descriptionMinLength: 30,
      descriptionMaxLength: 500,
      user: null,
      loginUrl: '',
      api: {
        url: null,
        headers: null,
      },
      requiredUserRole: 'member',
      placeholder: '',
      formIntro: '',
    };

    self.config = merge.recursive(self.defaultConfig, self.config, props.config || {});

    self.state = {
      user: self.config.user,
      reactions: [],
    };

  }

  componentDidMount(prevProps, prevState) {

    let self = this;

    // user
    if (!( self.state.user && self.state.user.role )) {
      OpenStadComponentLibs.user.getUser({ user: self.config.user, jwt: self.config.jwt, siteId: self.config.siteId, api: self.config.api }, (err, user) => {
        self.setState({ user }, () => {
          self.fetchData();
        });
      });
    } else {
      self.fetchData();
    }

    document.addEventListener('osc-new-reaction-stored', function(event) {
      self.onNewReactionStored(event.detail);
    });

    document.addEventListener('osc-reaction-edited', function(event) {
      self.onReactionEdited(event.detail);
    });

    document.addEventListener('osc-reaction-deleted', function(event) {
      self.onReactionDeleted(event.detail);
    });

  }

  fetchData(next) {

    let self = this;

    let url = `${self.config.api && self.config.api.url   }/api/site/${  self.config.siteId  }/idea/${  self.config.ideaId  }/argument?sentiment=${  self.config.sentiment  }&withUser=1&withUserVote=1&withVoteCount=1&includeReactionsOnReactions=1`;
    let headers = OpenStadComponentLibs.api.getHeaders(self.config);

    fetch(url, { headers })
      .then( function(response) {
        if (response.ok) {
          return response.json();
        }
        throw response.text();
      })
      .then(function(json) {

        let state = { ...self.state };
        state.reactions = json;
        state.reactions.sort((a, b) => {
          return a.createdAt < b.createdAt;
        });
        // console.log(state.reactions);
        self.setState(state, function() {
          if (next) return next();
        });

      })
      .catch(function(error) {
        console.log(error);
        error.then(function(messages) { return console.log(messages);} );
      });

  }

  onNewReactionStored(reaction) {
    this.fetchData(() => {
      if (this.config.scrollToNewReaction) {
        let element = document.getElementById(`osc-reaction-${  reaction.id}`);
        if ( element ) document.getElementById(`osc-reaction-${  reaction.id}`).scrollIntoView();
      }
    });
  }

  onReactionEdited(reaction) {
    this.fetchData();
  }

  onReactionDeleted(reaction) {
    this.fetchData();
  }

  render() {

    let self = this;

    let reactions =
      <ul className="osc-reactions-list">
        {self.state.reactions.map((reaction) => {

          let key = `osc-reaction-key-${   reaction.id || parseInt( 1000000 * Math.random() )}`;
          return (
            <li key={key}>
              <OpenStadComponentReaction config={self.config} user={self.state.user} data={{ ...reaction }}/>
            </li>
          );

        })}
      </ul>;

    let title = self.config.title ? <h3>{self.config.title}</h3> : null;

    return (
      <div id={this.id} className={self.props.className || 'osc-reactions'} ref={(el) => { this.instance = el; }} >

        {title}

        <OpenStadComponentReactionForm config={self.config} user={self.state.user}/>

        {reactions}
        <br/><br/>

      </div>
    );

  }

}
