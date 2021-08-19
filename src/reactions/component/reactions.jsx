'use strict';

import OpenStadComponent from '../../component/index.jsx';
import OpenStadComponentLibs from '../../libs/index.jsx';
import OpenStadComponentReactionForm from './reaction-form.jsx';
import OpenStadComponentReaction from './reaction.jsx';
import OpenStadComponentNotLoggedInPopup from './not-logged-in-popup.jsx';

export default class OpenStadComponentReactions extends OpenStadComponent {

  constructor(props) {

    super(props, {
      scrollToNewReaction: true,
      isClosed: false,
      sentiment: undefined,
      siteId: null,
      ideaId: null,
      title: null,
      user: null,
      loginUrl: '',
      api: {
        url: null,
        headers: null,
      },
      requiredUserRole: 'member',
      placeholder: '',
      formIntro: '',

      emptyListText: 'Nog geen argumenten',
      isReplyingEnabled: true,
      isVotingEnabled: true,
      doShowLastName: true,
      
    });

    this.showNotLoggedInPopup = this.showNotLoggedInPopup.bind(this)

    this.state = {
      user: this.config.user,
      reactions: null,
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

    self.newReactionStoredListener = function(event) {
      self.onNewReactionStored(event.detail);
    };
    document.addEventListener('osc-new-reaction-stored', self.newReactionStoredListener);

    self.reactionEditedListener = function(event) {
      self.onReactionEdited(event.detail);
    };
    document.addEventListener('osc-reaction-edited', self.reactionEditedListener);

    self.reactionDeletedListener = function(event) {
      self.onReactionDeleted(event.detail);
    };
    document.addEventListener('osc-reaction-deleted', self.reactionDeletedListener);

  }

  componentWillUnmount() {
    document.removeEventListener('osc-new-reaction-stored', this.newReactionStoredListener);
    document.removeEventListener('osc-reaction-edited', this.reactionEditedListener);
    document.removeEventListener('osc-reaction-deleted', this.reactionDeletedListener);
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

  userIsModerator() {
    return OpenStadComponentLibs.user.hasRole(this.config.user, 'moderator');
  }

  showNotLoggedInPopup() {
    this.notLoggedInPopup.showPopup();
  }

  render() {

    let self = this;

    let reactionsHTML = null;
    if (Array.isArray(self.state.reactions)) {
      if (self.state.reactions.length > 0) {
        reactionsHTML =
          <ul className="osc-reactions-list">
            {self.state.reactions.map((reaction) => {

              let key = `osc-reaction-key-${   reaction.id || parseInt( 1000000 * Math.random() )}`;
              return (
                <li key={key}>
                  <OpenStadComponentReaction config={{ ...self.config, showNotLoggedInPopup: self.showNotLoggedInPopup }} user={self.state.user} data={{ ...reaction }}/>
                </li>
              );

            })}
          </ul>;
      } else {
        reactionsHTML = <div className="osc-empty-list-text">{self.config.emptyListText}</div>
      }
    }
    
    let title = self.config.title ? <h3>{self.config.title}</h3> : null;

    let reactionFormHTML = <OpenStadComponentReactionForm config={{ ...self.config, showNotLoggedInPopup: self.showNotLoggedInPopup }} user={self.state.user}/>;
    if (self.config.isClosed && !self.userIsModerator()) {
      if (self.config.closedText) {
        reactionFormHTML = <div className="osc-closed-text">{self.config.closedText}</div>
      } else {
        reactionFormHTML = null
      }
    }

    return (
      <div id={this.id} className={self.props.className || 'osc-reactions'} ref={(el) => { this.instance = el; }} >

        <OpenStadComponentNotLoggedInPopup config={self.config} ref={el => (self.notLoggedInPopup = el)}/>

        {title}

        {reactionFormHTML}

        {reactionsHTML}

        <br/><br/>

      </div>
    );

  }

}
