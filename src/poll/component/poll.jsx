'use strict';

import OpenStadComponent from '../../component/index.jsx';
import OpenStadComponentLibs from '../../libs/index.jsx';
import OpenStadComponentForms from '../../forms/index.jsx';
import OpenStadComponentPollForm from './poll-form.jsx';

export default class OpenStadComponentPoll extends OpenStadComponent {

  constructor(props) {

    super(props, {
      siteId: null,
      ideaId: null,
      title: null, // hoort niet hier
      titleMinLength: 30,
      titleMaxLength: 500,
      descriptionMinLength: 30,
      descriptionMaxLength: 500,
      user: null,
      loginUrl: '',
      api: {
        url: null,
        headers: null,
      },
      requiredUserRole: 'member',
      withPercentage: true,
      allowChoiceTitles: true,
      allowShowResultsIfNotVoted: false,
    });

    let self = this;

    self.hideEditForm = self.hideEditForm.bind(self);

    self.state = {
      user: self.config.user,
      poll: props.poll,
      pollId: ( props.poll && props.poll.id ) || self.config.pollId,
      selectedChoice: null,
      showResult: false,
      showQuestion: false,
      editMode: false,
      showVoteSucceeded: false,
    };

    if (self.state.poll) {
      self.parseVoteCount(self.state.poll);
      if (self.state.poll.userVote) {
        self.state.selectedChoice = self.state.poll.userVote;
      }
    }

  }

  componentDidMount(prevProps, prevState) {

    let self = this;

    // user
    if (!( self.state.user && self.state.user.role )) {
      OpenStadComponentLibs.user.getUser({ user: self.config.user, jwt: self.config.jwt, siteId: self.config.siteId, api: self.config.api }, (err, user) => {
        self.setState({ user }, () => {
          if (!self.state.poll && self.config.ideaId) self.fetchData();
        });
      });
    } else {
      if (!self.state.poll && self.config.ideaId) self.fetchData();
    }

  }

  fetchData(next) {

    let self = this;

    if (!self.state.pollId) {
      // no data: show new poll form
      return self.setState({ editMode: true }, () =>{
      })
    }

    let url = `${self.config.api && self.config.api.url   }/api/site/${  self.config.siteId  }/idea/${  self.config.ideaId  }/poll/${ self.state.pollId }?withUser=1&withUserVote=1&withVoteCount=1&withVotes=1`;
    let headers = OpenStadComponentLibs.api.getHeaders(self.config);

    fetch(url, { headers })
      .then( function(response) {
        if (response.ok) {
          return response.json();
        }
        throw response.text();
      })
      .then(function(json) {

        let state = { ...self.state, showResult: false, showQuestion: false, };
        state.poll = json;
        state.pollId = json.id;

        self.parseVoteCount(state.poll);

        if (state.poll.userVote) {
          state.selectedChoice = state.poll.userVote;
        }

        self.setState(state, function() {
          if (next) return next();
        });

      })
      .catch(function(error) {
        console.log(error);
        error.then(function(messages) { return console.log(messages);} );
      });

  }

  parseVoteCount(poll) {
    let self = this;
    if (poll.voteCount) {
      Object.keys(poll.choices).sort().forEach((key) => {
        let choice = poll.choices[key];
        choice.votesAbs = poll.voteCount[key]
        choice.votesPrc = parseInt(100 * ( poll.voteCount[key] / poll.voteCount.total ));
        choice.votesPrc = choice.votesPrc || 0;
      });
    }

  }

  showEditForm() {
    this.setState({ editMode: true });
  }

  hideEditForm() {
    this.setState({
      editMode: false,
    }, function() {
      this.fetchData()
    });
  }

  setShowResult() {
    this.setState({ showResult: true });
  }

  setShowQuestion() {
    this.setState({ showQuestion: true });
  }

  selectChoice(data) {
    this.setState({ selectedChoice: data.choice });
  }

  onReactionEdited(reaction) {
    this.fetchData();
  }

  isValid() {
    return !!this.state.selectedChoice;
  }

  canSubmit() {
    let requiredUserRole = this.config.requiredUserRole;
    let user = this.state.user;
    return OpenStadComponentLibs.user.hasRole(user, requiredUserRole)
  }

  submitVote() {

    let self = this;

    self.setState({ isBusy: true }, () => {

      if (!self.isValid()) {
        self.setState({ isBusy: false, isValid: false });
        return;
      }

      if (!self.canSubmit()) return alert('Je bent niet ingelogd');

      let url = `${ self.config.api && self.config.api.url }/api/site/${ self.config.siteId }/idea/${ self.config.ideaId }/poll/${ self.state.poll.id }/vote`;
      let headers = OpenStadComponentLibs.api.getHeaders(self.config);
      let method = 'POST';

      let body = {
        choice: self.state.selectedChoice,
      };

      fetch(url, {
        method,
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

          self.fetchData( () => {
            self.setState({ isBusy: false, showVoteSucceeded: true, }, () => {
		          let event = new CustomEvent('osc-poll-voted', { detail: json });
		          document.dispatchEvent(event);
            });
          });

          if (typeof self.config.onSubmit == 'function') {
            self.config.onSubmit({ description: self.state.description });
          }
            
        })
        .catch(function(error) {
          error.then(function(messages) { alert(messages); return console.log(messages);} );
          self.setState({ isBusy: false, isValid: false });
        });

    });

  }

  deletePoll() {

    let self = this;

    self.setState({ isBusy: true }, () => {

      let poll = self.state.poll;
      if (!( poll && poll.can && poll.can.delete )) return alert('U kunt deze poll niet verwijderen');
      if (!( poll && poll.id )) return alert('U kunt deze poll niet verwijderen');

      let url = `${ self.config.api && self.config.api.url }/api/site/${ self.config.siteId }/idea/${ self.config.ideaId }/poll/${ self.state.poll.id }`;
      let method = 'DELETE';
      let headers = OpenStadComponentLibs.api.getHeaders(self.config);

      fetch(url, {
        method,
        headers,
      })
        .then( function(response) {
          if (response.ok) {
            return response.json();
          }
          throw response.text();
        })
        .then(function(json) {

		      let event = new CustomEvent('osc-poll-deleted', { detail: json });
		      document.dispatchEvent(event);

        })
        .catch(function(error) {
          console.log(error);
          error.then(function(messages) { alert(messages); return console.log(messages);} );
          self.setState({ isBusy: false });
        });

    });

  }

  render() {

    let self = this;
    let poll = self.state.poll || {};

    if (self.state.editMode) {

      return (
        <div id={this.id} className={self.props.className || 'osc-poll'} ref={(el) => { this.instance = el; }} >
          <OpenStadComponentPollForm config={{ ...self.config, onFinished: self.hideEditForm }} pollId={self.state.poll && self.state.poll.id} poll={self.state.poll} user={self.state.user}/>
        </div>
      );
      
    } else {

      let questionHTML = null;
      if (( poll && poll.choices && !poll.userVote ) || self.state.showQuestion) {
        
        let config = { name: "pollChoice", choices: [] };
        Object.keys(poll.choices).sort().map(key => {
          let choiceHTML = self.config.allowChoiceTitles && poll.choices[key].title ? `<h4>${poll.choices[key].title}</h4>` : '';
          choiceHTML += poll.choices[key].description || '';
          config.choices.push({
            dangerousDescription: choiceHTML,
            value: key
          });
        })

        let submitButtonHTML = null;
        if (self.canSubmit()) {
          submitButtonHTML = (<button onClick={(e) => { if (!self.state.isBusy) self.submitVote(); }} className={`osc-button-blue${ !self.isValid() ? ' osc-disabled' : '' }`} >Stemmen</button>);
        } else {
          let loginUrl = OpenStadComponentLibs.auth.getLoginUrl(self.config);
          submitButtonHTML = (<button onClick={() => { OpenStadComponentLibs.localStorage.set('osc-poll-login-pending', true); document.location.href = loginUrl; }} className="osc-button-blue osc-not-logged-in-button">Inloggen</button>);
        }

        let showResultButtonHTML = null;
        if (self.config.allowShowResultsIfNotVoted &&  !(poll.userVote || self.state.showResult)) showResultButtonHTML = (<a className="osc-show-result-button" onClick={ e => this.setShowResult() }>Resultaat bekijken</a>);

        questionHTML = (
          <div className="osc-poll-question osc-form">
            <OpenStadComponentForms.Radios config={config} value={self.state.selectedChoice} onChange={ data => self.selectChoice({ choice: data.value }) } ref={el => (self.description = el)}/>
            <div className="osc-poll-question-buttons">
              {submitButtonHTML}
              {showResultButtonHTML}
            </div>
          </div>
        );
      }

      let resultHTML = null;
      if ( poll && ( poll.userVote || self.state.showResult ) ) {

        let showQuestionButtonHTML = null;
        if (!self.state.showQuestion && !(poll && poll.choices && !poll.userVote)) showQuestionButtonHTML = (<a className="osc-show-question-button" onClick={ e => this.setShowQuestion() }>Stem aanpassen</a>);

        let totalVotesHTML = null;
        if (poll.voteCount && poll.voteCount.total) {
          let xx = poll.voteCount.total == 1 ? 'stem' : 'stemmen';
          totalVotesHTML = <div>Totaal {poll.voteCount.total} {xx}<br/><br/></div>
        }

        resultHTML = (
          <ul className="osc-choices">
            {Object.keys(poll.choices).sort().map(key => {
              let choice = poll.choices[key];
              let titleHTML = null;
              if (self.config.allowChoiceTitles && choice.title) titleHTML = (<h4>{choice.title}</h4>);
              let descriptionHTML = null;
              if (choice.description) descriptionHTML = (<div>{choice.description}</div>);
              let percentageHTML = null;
              if (self.config.withPercentage) {
                percentageHTML = <div className="osc-percentage">{choice.votesPrc}%</div>
              }
              let scoreHTML = (
                <div className="osc-choice-default">
                  {titleHTML}
                  {descriptionHTML}
                  <div className={`osc-choice-bar${self.config.withPercentage ? ' osc-with-percentage' : ''}`}>
                    <div className="osc-choice-bar-mask"></div>
                    <div className="osc-choice-bar-progress" style={{ width: ( choice.votesPrc || 0 ) + '%' }}></div>
                  </div>
                  { percentageHTML }
                </div>
              );
              return (
                <li className="osc-choice" key={`osc-key-${key}`}>
                  {scoreHTML}
                </li>
              );
            })}
            {totalVotesHTML}
            {showQuestionButtonHTML}
          </ul>
        );
      }

      let editButtonsHTML = null;
      if (self.state.poll && self.state.poll.can && self.state.poll.can.edit) {
        editButtonsHTML =
          <div className="osc-editbuttons">
            <button className="osc-editbutton osc-edit" onClick={event => self.showEditForm()}>Bewerk poll</button>
            <button className="osc-editbutton osc-delete" onClick={event => { if (confirm('Weet u het zeker')) self.deletePoll() }}>Verwijder poll</button>
          </div>
      }

      let voteSucceededHTML = null;
      if (self.state.showVoteSucceeded) {
        voteSucceededHTML = <div className="osc-vote-succeeded">Uw stem is opgeslagen</div>
      }

      return (
        <div id={this.id} className={self.props.className || 'osc-poll'} ref={(el) => { this.instance = el; }} >
          {editButtonsHTML}
          {voteSucceededHTML}
          <h4>{poll.question}</h4>
          {questionHTML}
          {resultHTML}
          <br/><br/>
        </div>
      );

    }

  }

}
