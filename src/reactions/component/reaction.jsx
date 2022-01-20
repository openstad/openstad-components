'use strict';

import OpenStadComponent from '../../component/index.jsx';
import OpenStadComponentLibs from '../../libs/index.jsx';
import OpenStadComponentReactionForm from './reaction-form.jsx';

export default class OpenStadComponentReaction extends OpenStadComponent {

  constructor(props) {

    super(props, {
      siteId: null,
      ideaId: null,
      title: null,
      descriptionMinLength: 30,
      descriptionMaxLength: 500,
      api: {
        url: null,
        headers: null,
      },
      requiredUserRole: 'member',
      userNameFields: ['displayName'],
    });

    this.state = {
      user: props.user,
      isMenuActive: false,
      isReplyFromActive: false,
      editMode: false,
    };

  }

  componentDidMount(prevProps, prevState) {

    let self = this;

    self.newReactionStoredListener = function(event) {
      self.onNewReactionStored(event.detail);
    };
    document.addEventListener('osc-new-reaction-stored', self.newReactionStoredListener)

    self.reactionEditedListener = function(event) {
      self.onReactionEdited(event.detail);
    };
    document.addEventListener('osc-reaction-edited', self.reactionEditedListener)

  }

  componentWillUnmount() {
		document.removeEventListener('osc-new-reaction-stored', this.newReactionStoredListener);
		document.removeEventListener('osc-reaction-edited', this.reactionEditedListener);
  }

  showMenu() {
    this.setState({ isMenuActive: true });
  }

  toggleReplyForm() {
    this.setState({ isReplyFromActive: !this.state.isReplyFromActive });
  }

  toggleEditForm(what) {
    this.setState({ editMode: !this.state.editMode });
  }

  getUserName(user) {
    let self = this;
    let userNameFields = self.config.userNameFields;
    if (Array.isArray(userNameFields)) userNameFields = { or: [userNameFields] };
    return userNameFields.or.map(config => 
      Array.isArray(config) ? config.map(field => user[field]).join(' ') : user[config]
    ).find(name => !!name);
  }

  canEdit() {
    if (this.config.isClosed) return false;
    return this.props.data.can.edit;
  }

  canDelete() {
    if (this.config.isClosed) return false;
    return this.props.data.can.delete;
  }

  canLike() {
    if (this.config.isClosed) return false;
    let requiredUserRole = this.config.requiredUserRole;
    let userRole = this.props.user && this.props.user.role;
      return ( requiredUserRole == 'anonymous' && userRole )  ||
        ( requiredUserRole == 'member' && ( userRole == 'member' || userRole == 'editor' || userRole == 'moderator' || userRole == 'admin' ) )  ||
        ( requiredUserRole == 'editor' && ( userRole == 'editor' || userRole == 'moderator' || userRole == 'admin' ) )  ||
        ( requiredUserRole == 'moderator' && ( userRole == 'moderator' || userRole == 'admin' ) )  ||
        ( requiredUserRole == 'admin' && userRole == 'admin' );
  }

  canReply() {
    return this.props.data.can.reply;
  }

  userIsModerator() {
    return OpenStadComponentLibs.user.hasRole(this.config.user, 'moderator');
  }

  submitDelete() {

    let self = this;

    if (!self.canDelete()) return alert('U kunt deze reactie niet verwijderen');

    let url = `${self.config.api && self.config.api.url   }/api/site/${  self.config.siteId  }/idea/${  self.config.ideaId  }/argument/${  self.props.data.id}`;
    let headers = OpenStadComponentLibs.api.getHeaders(self.config);

    let body = {};

    fetch(url, {
      method: 'DELETE',
      headers,
      body: JSON.stringify(body),
    })
      .then( function(response) {
        if (response.ok) {
          return response.json();
        }
        throw response.text();
      })
      .then(function(json) {
        self.setState({ isDeleted: true });

		    let event = new CustomEvent('osc-reaction-deleted', { detail: { ideaId: self.config.ideaId } });
		    document.dispatchEvent(event);

      })
      .catch(function(error) {
        console.log(error);
        error.then(function(messages) { return console.log(messages);} );
      });

  }

  submitLike() {

    let self = this;

    if (!self.canLike()) return self.config.showNotLoggedInPopup();

    let url = `${self.config.api && self.config.api.url   }/api/site/${  self.config.siteId  }/idea/${  self.config.ideaId  }/argument/${  self.props.data.id  }/vote`;
    let headers = OpenStadComponentLibs.api.getHeaders(self.config);

    let body = {};

    fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    })
      .then( function(response) {
        if (response.ok) {
          return response.json();
        }
        throw response.text();
      })
      .then(function(json) {
        // console.log({ yes: json.yes, hasUserVoted: json.hasUserVoted });
        self.setState({ yes: json.yes, hasUserVoted: json.hasUserVoted });
      })
      .catch(function(error) {
        console.log(error);
        error.then(function(messages) { return console.log(messages);} );
      });

  }

  onNewReactionStored(reaction) {
    this.setState({ isMenuActive: false, isReplyFromActive: false });
  }

  onReactionEdited(reaction) {
    if (reaction.id == this.props.data.id) {
      this.setState({ editMode: false, isMenuActive: false });
    }
  }

  render() {

    let self = this;
    let data = self.props.data || { can: {} };

    if (data.isDeleted) return null;

    let userName = self.getUserName(data.user);
    let isAdmin = OpenStadComponentLibs.user.hasRole(data.user, 'editor') ? 'osc-is-admin' : '';
    let metadataHTML = <div className={`osc-reaction-user ${isAdmin}`}>{userName}</div>

    let menuHTML = null;
    if ( self.canEdit() && self.canDelete() ) {
      menuHTML = (
        <div className={ `osc-reaction-menu${   self.state.isMenuActive ? ' osc-reaction-hamburger-active' : ''}` } onClick={ () => { self.showMenu(); }}>
          <a className="osc-reaction-delete" title="Argument verwijderen" onClick={ () => { if (confirm('Weet u het zeker?')) self.submitDelete(); } }/>
          <a className="osc-reaction-edit" title="Argument bewerken" onClick={ () => self.toggleEditForm() }/>
        </div>
      );
    }

    let descriptionHTML = (<div className="osc-reaction-description" dangerouslySetInnerHTML={{__html: data.description }}></div>);
    if (self.state.editMode) {
      descriptionHTML = (
        <div className="osc-reaction-description">
          <OpenStadComponentReactionForm config={{ ...self.config, description: data.description, argumentId: data.id }} user={self.state.user} ref={el => (self.editForm = el)}/>
        </div>
      );
    }

    let likeButtonHTML = null;
    if (!data.parentId) {
      if (self.config.isVotingEnabled) {
        if ((!self.config.isClosed || self.userIsModerator() )) {
          likeButtonHTML = (
			      <a className={ `osc-reaction-like-button${ ( typeof self.state.hasUserVoted != 'undefined' ? self.state.hasUserVoted : data.hasUserVoted ) ? ' osc-reaction-like-button-hasvoted' : ''}` } onClick={ () => self.submitLike() }>
				      Mee eens (<span>{( typeof self.state.yes != 'undefined' ? self.state.yes : data.yes ) | 0}</span>)
            </a>
          );
        } else {
          likeButtonHTML = (
			      <div className={ `osc-reaction-like-button${ ( typeof self.state.hasUserVoted != 'undefined' ? self.state.hasUserVoted : data.hasUserVoted ) ? ' osc-reaction-like-button-hasvoted' : ''}` }>
				      Mee eens (<span>{( typeof self.state.yes != 'undefined' ? self.state.yes : data.yes ) | 0}</span>)
            </div>
          );
        }
      }
    }

    let replyButtonHTML = null;
    let replyFormHTML = null;
    if (self.config.isReplyingEnabled) {
      if (self.canReply() && (!self.config.isClosed || self.userIsModerator() )) {
        replyButtonHTML = (<a onClick={ () => self.toggleReplyForm() } className="osc-reply-button">Reageren</a>);
        if (self.state.isReplyFromActive) {
          let config = { ...self.config, parentId: data.id };
          config.formIntro = '';
          replyFormHTML = (
			      <div id={`osc-reaction-${data.id}`} className="osc-reply">
              <OpenStadComponentReactionForm config={config} user={self.state.user} ref={el => (self.editForm = el)}/>
            </div>
          );
        }
      }
    }

    let repliesHTML = null;
    if (data.reactions && data.reactions.length) {
      repliesHTML = (
        <ul className="osc-reactions-list">
          {data.reactions.map((reaction) => {

            let key = `osc-reaction-key-${   reaction.id || parseInt( 1000000 * Math.random() )}`;
            return (
              <li key={key}>
                <OpenStadComponentReaction config={self.config} className="osc-reply" user={self.state.user} data={reaction}/>
              </li>
            );

          })}
        </ul>
      );
    }

    return (
      <div>

			  <div id={`osc-reaction-${data.id}`} className={ self.props.className || 'osc-reaction' }>

          {menuHTML}

          {metadataHTML}
				  <div className="osc-reaction-date">{data.createDateHumanized}</div>
          {descriptionHTML}

          {likeButtonHTML}
			    {replyButtonHTML}

		    </div>

			  {replyFormHTML}
        {repliesHTML}

		  </div>

    );

  }

}
