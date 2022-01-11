'use strict';

import OpenStadComponent from '../../component/index.jsx';
import OpenStadComponentLibs from '../../libs/index.jsx';
import OpenStadComponentNumberplateButton from '../../button/component/button.jsx';

'use strict';

export default class VoteButton extends OpenStadComponent {

  constructor(props) {

    super(props, {
      vote: {
        isActive: false,
        requiredUserRole: 'member',
        voteType: 'likes',
        voteValues: [
          {
            label: 'like',
            value: 'yes'
          }
        ]
      },
		});

    this.state = {
      value: this.props.value,
      busy: false,
    }

  }

	componentDidMount(prevProps, prevState) {
    // return from anonymous login
    let votePending = OpenStadComponentLibs.localStorage.get('osc-ideas-on-map-vote-pending');
    if (votePending) {
			this.doVote(null, votePending);
      OpenStadComponentLibs.localStorage.remove('osc-ideas-on-map-vote-pending');
		}
  }

  doVote(e, opinion) {

    if (e) e.stopPropagation();

    if (this.state.busy) return;
    this.setState({ busy: opinion });

    if (!this.config.vote.isActive) return;

    let self = this;
    let url = `${ self.config.api.url }/api/site/${ self.config.siteId }/vote`;
    let headers = OpenStadComponentLibs.api.getHeaders(self.config);

    if (!( self.config.user && self.config.user.role )) {
      OpenStadComponentLibs.localStorage.set('osc-ideas-on-map-vote-pending', opinion );
      let loginUrl = OpenStadComponentLibs.auth.getLoginUrl(self.config);
      if (self.config.vote.requiredUserRole == 'anonymous') loginUrl += '&useOauth=anonymous';
      return document.location.href = loginUrl;
    }

    let change = {};
    if (self.props.idea.userVote) change[self.props.idea.userVote.opinion] = -1;

    fetch(url, {
      method: 'post',
      headers,
      body: JSON.stringify({
        ideaId: self.props.idea.id,
        opinion: opinion,
      })
    })
      .then((response) => {
        if (!response.ok) throw Error('Stemmen is niet gelukt')
        return response.json();
      })
      .then( json => {

        let result;
        if (json.length) result = json[0];
        if (result) change[result.opinion] = 1;

        Object.keys(change).map(opinion => {
          self.props.idea[opinion] += change[opinion];
        });

        self.props.idea.userVote = result || null;

        this.setState({ busy: false });

		    var event = new window.CustomEvent('osc-idea-liked', { detail: { ideaId: self.props.idea.id, change } });
		    document.dispatchEvent(event);

      })
      .catch((err) => {
        alert(err.message);
      });
    
  }

	render() {

    let self = this;

    let className = 'osc-numberplate-button';
    if (!this.config.vote.isActive) className += ' osc-inactive';

    return this.config.vote.voteValues.map(voteValue => {
      let value = typeof this.props.idea[voteValue.value] != 'undefined' ? this.props.idea[voteValue.value] : 0;
      let buttonClassName = 'osc-vote-button-' + voteValue.value + ' ' + className;
      if (this.state.busy == voteValue.value) buttonClassName += ' osc-busy';
      if (voteValue.value == ( this.props.idea && this.props.idea.userVote && this.props.idea.userVote.opinion )) buttonClassName += ' osc-user-has-voted';
      return <OpenStadComponentNumberplateButton config={{ label: voteValue.label }} number={value} className={buttonClassName} onClick={(e) => self.doVote(e, voteValue.value)} key={`like-button-${voteValue.value}`}/>
    })

  }

}
