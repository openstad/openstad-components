'use strict';

import OpenStadComponent from '../../component/index.jsx';
import OpenStadComponentLibs from '../../libs/index.jsx';
import OpenStadComponentPoll from '../../poll/index.jsx';
import OpenStadComponentReactions from '../../reactions/index.jsx';

import VoteButtons from './vote-buttons.jsx';
import { IdeaImage as OpenStadComponentIdeaImage } from '../../image/index.jsx';

'use strict';

// todo: een error op fetch wordt niet goed afgevangen

export default class IdeasDetails extends OpenStadComponent {

  constructor(props) {

    super(props, {
      siteId: null,
      ideaId: null,
      idea: {
        showVoteButtons: true,
        showLabels: false,
        shareChannelsSelection: ["facebook","twitter","mail","whatsapp"],
        metaDataTemplate: null,
      },
      image: {
        allowMultipleImages: false,
      },
      argument: {
        isActive: true,
        formIntro: 'Mijn reactie op deze inzending is ...',
        ignoreReactionsForIdeaIds: '',
        closeReactionsForIdeaIds: '',
      },
      poll: {
        canAddPolls: false,
      },
      vote: {},
      labels: {},
      types: null,
      typeField: 'typeId',
      typeLabel: 'Thema',
		});

    this.state = {
      idea: this.props.idea,
      ideaId: ( props.idea && props.idea.id ) || this.config.ideaId,
      showPollForm: false,
    };
        
  }

	componentDidMount(prevProps, prevState) {

    let self = this;
    
		self.reactionAddedListener = function(event) {
      self.onReactionStored(event.detail, true);
    }
    document.addEventListener('osc-new-reaction-stored', self.reactionAddedListener);

		self.reactionEditedListener = function(event) {
      self.onReactionStored(event.detail);
    }
    document.addEventListener('osc-reaction-edited', self.reactionEditedListener);

		self.reactionDeletedListener = function(event) {
      self.onReactionDeleted(event.detail);
    }
    document.addEventListener('osc-reaction-deleted', self.reactionDeletedListener);
    
		self.pollCreatedListener = function(event) {
      self.onPollCreated(event.detail);
    }
    document.addEventListener('osc-new-poll-stored', self.pollCreatedListener);
    
		self.pollDeletedListener = function(event) {
      self.onPollDeleted(event.detail);
    }
    document.addEventListener('osc-poll-deleted', self.pollDeletedListener);

    self.fetchData();

	}

  componentWillUnmount() {
		document.removeEventListener('osc-new-reaction-stored', this.reactionAddedListener);
		document.removeEventListener('osc-reaction-edited', this.reactionEditedListener);
		document.removeEventListener('osc-reaction-deleted', this.reactionDeletedListener);
		document.removeEventListener('osc-new-poll-stored', this.pollCreatedListener);
		document.removeEventListener('osc-poll-deleted', this.pollDeletedListener);
  }

  dispatchEditIdeaButtonClick(e) {
    e.stopPropagation();
    if ( this.config.editIdeaLink ) {
      document.location.href = this.config.editIdeaLink;
    } else {
		  var event = new window.CustomEvent('osc-edit-idea-button-click', { detail: this.state.idea });
		  document.dispatchEvent(event);
    }
  };

  showPollForm() {
    this.setState({
      showPollForm: true
    })
  }

  hidePollForm() {
    this.setState({
      showPollForm: false
    })
  }

  dispatchAddPollClick(e) {
    e.stopPropagation();
    this.showPollForm();
  }
  
  onReactionStored(data, isNew) {
    if (isNew) this.state.idea.argCount++;
    this.setState({ idea: this.state.idea });
  }

  onReactionDeleted(data) {
    this.state.idea.argCount--;
    this.setState({ idea: this.state.idea });
  }

  onPollCreated() {
    this.hidePollForm();
    this.fetchData();
  }

  onPollDeleted() {
    this.fetchData();
  }
  
  fetchData() {

    let self = this;

    let ideaId = self.state.ideaId || (this.state.idea && this.state.idea.id);

    if (!ideaId) return;

    let url = `${ self.config.api.url }/api/site/${  self.config.siteId  }/idea/${ ideaId }?includeVoteCount=1&includeArguments=1&includeArgsCount=1&includeUser=1&includeUserVote=1`;
    if (self.config.poll.canAddPolls) url += '&includePoll=1';

    let headers = OpenStadComponentLibs.api.getHeaders(self.config);
		
    fetch(url, { headers })
      .then((response) => {
        if (!response.ok) throw Error('Error fechting detail');
        return response.json();
      })
      .then( json => {

        let idea = json;
        self.setState({ idea }, function() {
          if(OpenStadComponentLibs.localStorage.get('osc-login-pending-scroll-to-reactions')) {
            document.getElementById('reactions') && document.getElementById('reactions').scrollIntoView();
            OpenStadComponentLibs.localStorage.set('osc-login-pending-scroll-to-reactions', false)
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
        if ( this.config.afterDeleteIdeaLink ) {
          document.location.href = this.config.afterDeleteIdeaLink;
        } else {
		      var event = new window.CustomEvent('osc-idea-deleted', { detail: { ideaId } });
		      document.dispatchEvent(event);
        }
      })
      .catch((err) => {
        console.log('Niet goed');
        console.log(err);
      });

  }

	render() {

    let self = this;
    let idea = self.state.idea;

    if (!idea) return null;

    let labelHTML = null;

    if (self.config.idea.showLabels) {
      let typeId = eval(`idea.${self.config.typeField}`);
      let typeDef = self.config.types && self.config.types.find(def => def.id == typeId || def.value == typeId);
      if (typeDef) {
        let labelText = typeDef.label;
        let backgroundColor = typeDef.backgroundColor;
        let textColor = typeDef.textColor;
        labelHTML = (
          <div className="osc-idea-label" style={{ color: textColor, backgroundColor }}>{labelText}</div>
        );
      }
    }
    
    let pollHTML = null;
    let addPollButtonHTML = null;
    if (self.config.poll.canAddPolls) {
      if (idea.poll || self.state.showPollForm) {
        pollHTML = (
          <div>
			      <div id="poll" className="osc-poll-header"><h3>{self.config.poll.title || 'Poll'}</h3></div>
            <OpenStadComponentPoll config={{ ...self.config, ...self.config.poll, ideaId: self.state.ideaId }} poll={idea.poll}/>
          </div>
        )
      } else {
        if (idea.can && idea.can.edit) {
          addPollButtonHTML = (
            <div className="osc-editbuttons-container">
              <button className="osc-idea-details-editbutton osc-edit" onClick={(event) => self.dispatchAddPollClick(event)}>Poll toevoegen</button>
            </div>
          )
        }
      }
    }

    let voteButtonsHTML = null;
    if (self.config.idea.showVoteButtons && ( typeof self.config.vote.voteValues == 'undefined' || self.config.vote.voteValues.length > 0 )) {
      voteButtonsHTML = (
        <div className="osc-vote-buttons-container">
          <h3>Likes</h3>
          <VoteButtons config={this.config} idea={this.state.idea} name="likebutton"/>
        </div>
      );
    }

    let editButtonsHTML = null;
    if ( idea.can && idea.can.edit ) {
      editButtonsHTML = (
        <div className="osc-editbuttons-container">
          <button className="osc-idea-details-editbutton osc-edit" onClick={(event) => self.dispatchEditIdeaButtonClick(event)}>Bewerk idee</button>
          <button className="osc-idea-details-editbutton osc-delete" onClick={(event) => { if ( confirm('Weet u het zeker') ) self.deleteIdea(event) }}>Verwijder idee</button>
        </div>
      );

    }

    let modBreakHTML = null;
    if (idea && idea.modBreak) {
      modBreakHTML= (
        <div className="osc-modbreak">
          {idea.modBreakDateHumanized}<br/>
          <br/>
          {idea.modBreak}
        </div>
      );
    }

    let reactionsCountHTML = null;
    if ( self.config.argument.isActive ) {
      reactionsCountHTML = (
        <div>
          <h3>Reacties</h3>
          <a href="#reactions" className="osc-no-of-reactions">{idea.argCount || 0} reacties</a>
        </div>
      );
    }

    let reactionsHTML = null;
    if ( self.config.argument.isActive ) {
      // todo: refactor config zodat hij in reactions ook gewoon argument: {} heet, en dan deze regels naar daar
      let config = {...self.config}
      config.argument.isActive = this.config.argument.isActive && !this.config.argument.ignoreReactionsForIdeaIds.match(new RegExp(`(?:^|\\D)${idea.id}(?:\\D|$)`));
      config.argument.isClosed = this.config.argument.isClosed || this.config.argument.closeReactionsForIdeaIds.match(new RegExp(`(?:^|\\D)${idea.id}(?:\\D|$)`));
      let loginUrl = OpenStadComponentLibs.auth.getLoginUrl(self.config);
      reactionsHTML = (
        <div>
			    <div id="reactions" className="osc-reactions-header"><h3>{self.config.argument.title || 'Reacties'}</h3></div>
          <OpenStadComponentReactions config={{ ...self.config.argument, title: undefined, api: self.config.api, user: self.config.user, siteId: self.config.siteId, ideaId: idea.id, loginUrl: loginUrl, }}/>
        </div>
      );
    }

    let shareButtonsHTML = null;
    if (self.config.idea.shareChannelsSelection.length) {
      let facebookButtonHTML = self.config.idea.shareChannelsSelection.includes('facebook') ? (<li><a className="osc-share-facebook" target="_blank" href={ 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(document.location.href) }>Facebook</a></li>) : null;
      let twitterButtonHTML = self.config.idea.shareChannelsSelection.includes('twitter') ? (<li><a className="osc-share-twitter" target="_blank" href={ 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(document.location.href) }>Twitter</a></li>) : null;
      let mailButtonHTML = self.config.idea.shareChannelsSelection.includes('mail') ? (<li><a className="osc-share-email" target="_blank" href={ 'mailto:?subject=' + encodeURIComponent(eval(`idea.${self.config.titleField}`)) + '&body=' + encodeURIComponent(document.location.href)}>Email</a></li>) : null;
      let whatsappButtonHTML = self.config.idea.shareChannelsSelection.includes('whatsapp') ? (<li><a className="osc-share-whatsapp" target="_blank" href={ 'https://wa.me/?text=' + encodeURIComponent(document.location.href) }>WhatsApp</a></li>) : null;

      shareButtonsHTML = (
      <div className="osc-details-sharebuttons">
        <ul>
          {facebookButtonHTML}
          {twitterButtonHTML}
          {mailButtonHTML}
          {whatsappButtonHTML}
				</ul>
      </div>);


    }

    let authorHTML = idea.user.displayName;
    if (this.config.linkToUserPageUrl) {
      authorHTML = <a href={this.config.linkToUserPageUrl + '/' + idea.user.id} className="osc-author-link">{authorHTML}</a>
    }

    let metaDataHTML = self.config.idea.metaDataTemplate;
    if (metaDataHTML) {
      metaDataHTML = metaDataHTML.replace(/\{createDate\}/, idea.createDateHumanized);
      metaDataHTML = metaDataHTML.replace(/\{theme\}/, idea.extraData.theme);
      metaDataHTML = OpenStadComponentLibs.reactTemplate({ html: metaDataHTML, username: authorHTML })
    }

    return (
			<div id={self.id} className={self.props.className || 'osc-info-block-idea-details'} ref={el => (self.instance = el)}>

			  <div className="osc-spacer"></div>

			  <div className="osc-idea-details-container">
			    <div className="osc-idea-details">

				    <h2>{eval(`idea.${self.config.titleField}`)}</h2>

            <div className="osc-details-image-and-stats">

              <div className="osc-idea-image-container">
                <OpenStadComponentIdeaImage config={self.config} idea={idea}/>
              </div>

              {labelHTML}

              {shareButtonsHTML}

              <div className="osc-details-stats">
                {voteButtonsHTML}
                {reactionsCountHTML}
                {editButtonsHTML}
              </div>

            </div>

            <p className="">
              {metaDataHTML}
            </p>

            {modBreakHTML}

            <p className="osc-details-summary">{idea.summary}</p>

            <p className="osc-details-description" dangerouslySetInnerHTML={{ __html: idea.description }}></p>

            {addPollButtonHTML}

			    </div>

          {pollHTML}

          {reactionsHTML}

			    <div className="osc-bottom-spacer"></div>

        </div>

			</div>
    );

  }

}
