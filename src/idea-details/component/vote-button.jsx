'use strict';

import OpenStadComponent from '../../component/index.jsx';
import OpenStadComponentLibs from '../../libs/index.jsx';
import OpenStadComponentNumberplateButton from '../../numberplates/component/numberplate-button.jsx';

'use strict';

export default class VoteButton extends OpenStadComponent {

  constructor(props) {

    super(props, {
      caption: 'like',
      name: 'votebutton',
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
			this.doVote();
      OpenStadComponentLibs.localStorage.remove('osc-ideas-on-map-vote-pending');
		}
  }

  doVote(e) {

    if (e) e.stopPropagation();

    if (this.state.busy) return;
    this.setState({ busy: true });

    let self = this;
    let url = `${ self.config.api.url }/api/site/${ self.config.siteId }/vote`;
      let headers = OpenStadComponentLibs.api.getHeaders(self.config);

    // if (!self.config.api.isUserLoggedIn) url += '?useOauth=anonymous'
    if (!( self.config.user && self.config.user.role )) {
      OpenStadComponentLibs.localStorage.set('osc-ideas-on-map-vote-pending', true );
      let loginUrl =  '/oauth/login?returnTo=' + encodeURIComponent(document.location.href) + '&useOauth=anonymous';
      return document.location.href = loginUrl;
    }

    fetch(url, {
      method: 'post',
      headers,
      body: JSON.stringify({
        ideaId: self.props.idea.id,
        opinion: self.config.opinion,
      })
    })
      .then((response) => {
        if (!response.ok) throw Error('Stemmen is niet gelukt')
        return response.json();
      })
      .then( json => {

        let change = json.length ? 1 : -1;
        let value = self.state.value + change;
        self.setState({ value })

        self.props.idea.userVote = json.length && json || null;

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

    let value = parseInt(self.state.value) || 0;

	  let value000 = parseInt(value/100) || 0;
	  let value00  = parseInt(( value - 100 * value000 )/10) || 0;
	  let value0   = value - value000 * 100 - value00 * 10;

    return (
      <OpenStadComponentNumberplateButton config={{ caption: 'eens' }} number={self.state.value} id="osc-like-button" className={`osc-numberplate-button ${this.props.idea.userVote ? ' osc-user-has-voted' : ''} ${this.state.busy ? ' osc-busy' : ''}`} onClick={(e) => self.doVote(e)} />
    );

  }

}
