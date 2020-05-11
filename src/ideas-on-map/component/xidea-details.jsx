// TODO: dit moet een eigen repo worden

import merge from 'merge';
import React from 'react';
import VoteButton from './vote-button.jsx';

import OpenStadComponentLibs from '../../libs/index.jsx';
import OpenStadComponentReactions from '../../reactions/index.jsx';

'use strict';

export default class IdeasDetails extends React.Component {

  constructor(props) {

    super(props);

		// config
		let defaultConfig = {
      siteId: null,
      ideaId: null,
      user: {},
			api: {
        url: null,
        headers: null,
        isUserLoggedIn: false,
      },
      argument: {
        descriptionMinLength: 30,
        descriptionMaxLength: 500,
        formIntro: 'Mijn reactie op deze inzending is ...',
        placeholder: '',
        requiredUserRole: 'member',
      },
		};
		this.config = merge.recursive(defaultConfig, this.config, this.props.config || {})

    this.state = {
      idea: this.props.idea
    };
        
  }

	componentDidMount(prevProps, prevState) {

    let self = this;
    
		self.storedListener = function(event) {
      self.onReactionStored(event.detail);
    }
    document.addEventListener('reactionStored', self.storedListener);
		self.deletedListener = function(event) {
      self.onReactionDeleted(event.detail);
    }
    document.addEventListener('reactionDeleted', self.deletedListener);

    self.fetchData();

	}

  componentWillUnmount() {
		document.removeEventListener('reactionStored', this.storedListener);
		document.removeEventListener('reactionDeleted', this.deletedListener);
  }

  dispatchEditIdeaClick(e) {
    e.stopPropagation();
		var event = new window.CustomEvent('editIdeaClick', { detail: this.state.idea });
		document.dispatchEvent(event);
  };

  dispatchDeleteIdeaClick(e) {
    e.stopPropagation();
		var event = new window.CustomEvent('deleteIdeaClick', { detail: this.state.idea });
		document.dispatchEvent(event);
  };
  
  onReactionStored(data) {
    this.state.idea.argCount++;
    this.setState({ idea: this.state.idea });
  }

  onReactionDeleted(data) {
    this.state.idea.argCount--;
    this.setState({ idea: this.state.idea });
  }

  fetchData() {

    if (!( this.state.idea || this.state.idea.id )) return;

    let self = this;
    let url = `${ self.config.api.url }/api/site/${  self.config.siteId  }/idea/${ this.state.idea.id }?includeVoteCount=1&includeArguments=1&includeUser=1&includeUserVote=1`;
    let headers = OpenStadComponentLibs.api.getHeaders(self.config);
		
    fetch(url, { headers })
      .then((response) => {
        if (!response.ok) throw Error('Error fechting detail');
        return response.json();
      })
      .then( json => {

        self.setState({ idea: json }, function() {
          if(OpenStadComponentLibs.localStorage.get('osc-reactions-login-pending')) {
            window.location.hash = `#reactions`;
            OpenStadComponentLibs.localStorage.set('osc-reactions-login-pending', false)
          }
        });

      })
      .catch((err) => {
        console.log('Niet goed');
        console.log(err);
      });

  }

  deleteIdea() {

    let self = this;

    if (!( self.config.user && self.config.user.role && self.config.user.role == 'admin' )) return;
    if (!( this.state.idea || this.state.idea.id )) return;

    let url = `${ self.config.api.url }/api/site/${  self.config.siteId  }/idea/${ this.state.idea.id }`;
    let headers = OpenStadComponentLibs.api.getHeaders(self.config);

    let ideaId = this.state.idea.id; // backup
		
    fetch(url, {
      method: 'DELETE',
      headers
    })
      .then((response) => {
        if (!response.ok) throw Error('Error deleting idea');
        return response.json();
      })
      .then( json => {
		    var event = new window.CustomEvent('ideaDeleted', { detail: { ideaId } });
		    document.dispatchEvent(event);
      })
      .catch((err) => {
        console.log('Niet goed');
        console.log(err);
      });

  }

	render() {

    let self = this;

    let labelHTML = null;
    if (self.config.labels && self.props.label) {
      console.log(self.config.labels[ self.props.label ]);
      labelHTML = (
        <div className="ocs-idea-label" style={{ color: self.config.labels[ self.props.label ].color, backgroundColor: self.config.labels[ self.props.label ].backgroundColor }}>{self.config.labels[ self.props.label ].text}</div>
      );
    }

    let editButtonsHTML = null;
    if ( self.config.user && self.config.user.role && self.config.user.role == 'admin' ) {
      editButtonsHTML = (
        <div className="osc-editbuttons-container">
          <button className="osc-idea-details-editbutton osc-edit" onClick={(event) => self.dispatchEditIdeaClick(event)}>Bewerk idee</button>
          <button className="osc-idea-details-editbutton osc-delete" onClick={(event) => { if ( confirm('Weet je het zeker') ) self.deleteIdea(event) }}>Verwijder idee</button>
        </div>
      );

    }

    let modBreakHTML = null;
    if (self.props.idea.modBreak) {
      console.log(self.props.idea);
      modBreakHTML= (
        <div className="osc-modbreak">
          {self.props.idea.modBreakDateHumanized}<br/>
          <br/>
          {self.props.idea.modBreak}
        </div>
      );
    }

    return (
			<div id={self.id} className={self.props.className || 'osc-info-block-idea-details'} ref={el => (self.instance = el)}>

			  <div className="osc-spacer"></div>

			  <div className="osc-idea-details-container">
			    <div className="osc-idea-details">

				    <h2>{eval(`self.props.idea.${self.config.titleField}`)}</h2>

            <div className="osc-details-image-and-stats">

              <div className="osc-image" style={{ backgroundImage: `url(${self.props.idea.image})` }}></div>

              {labelHTML}

              <div className="osc-details-sharebuttons">
                <ul>
							    <li><a className="osc-share-facebook" target="_blank" href={ 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(document.location.href) }>Facebook</a></li>
							    <li><a className="osc-share-twitter" target="_blank" href={ 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(document.location.href) }>Twitter</a></li>
							    <li><a className="osc-share-email" target="_blank" href={ 'mailto:?subject=' + encodeURIComponent(eval(`self.props.idea.${self.config.titleField}`)) + '&body=' + encodeURIComponent(document.location.href)}>Email</a></li>
							    <li><a className="osc-share-whatsapp" target="_blank" href={ 'https://wa.me/?text=' + encodeURIComponent(document.location.href) }>WhatsApp</a></li>
						    </ul>
              </div>

              <div className="osc-details-stats">

                <h3>Likes</h3>
                <VoteButton config={{ text: 'eens', opinion: 'yes', api: this.config.api, user: this.config.user, siteId: this.config.siteId }} idea={this.state.idea} name="likebutton" value={self.props.idea.yes}/>

                <br/>

                <h3>Reacties</h3>
                <a href="#reactions" className="osc-no-of-reactions">{self.props.idea.argCount || 0} reacties</a>

                {editButtonsHTML}

              </div>

            </div>

            <p className="">
              <span className="ocs-gray-text">Door </span>{self.props.idea.user.nickName || self.props.idea.user.fullName || self.props.idea.user.firstName +' ' + self.props.idea.user.lastName}
              <span className="ocs-gray-text"> op </span>{self.props.idea.createDateHumanized}
						  <span className="ocs-gray-text">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
						  <span className="ocs-gray-text">Thema: </span>{self.props.idea.extraData.theme}
            </p>

            {modBreakHTML}

            <p className="osc-details-summary">{self.props.idea.summary}</p>

            <p className="osc-details-description">{self.props.idea.description}</p>

			    </div>
			    <div id="reactions" className="osc-reactions-header"><h3>Reacties</h3></div>
          <OpenStadComponentReactions config={{ ...self.config.argument, api: self.config.api, user: self.config.user, siteId: self.config.siteId, ideaId: self.props.idea.id }}/>
			  </div>
			</div>
    );

  }

}
