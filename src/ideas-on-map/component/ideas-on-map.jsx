import merge from 'merge';
import React from 'react';
import ReactDOM from 'react-dom';
import Filterbar from './filterbar.jsx';
import InfoBlock from './info-block.jsx';
import IdeaForm from './idea-form.jsx';
import Map from './map.jsx';

import OpenStadComponent from '../../component/index.jsx';
import OpenStadComponentLibs from '../../libs/index.jsx';
import OpenStadComponentIdeaDetails from '../../idea-details/index.jsx';

// TODO: clean up; ik gebruikte eerst setNewIdea en setSelected, maar nu onNewIdeaClick en onSelectedIdeaClick; trek dat gelijk

'use strict';

export default class OpenStadComponentIdeasOnMap extends OpenStadComponent {

  constructor(props) {

    super(props);

		var self = this;

		// config
		self.defaultConfig = {
			title: 'Inzendingen',
      types: [],
      typeField: 'extraData.theme',// null,

      // dit is opgezet maar wordt niet genbruikt en is daarom niet afgemaakt; latere wijzigingen maken dat dit niet meer werkt
      // currentPolygon: undefined,
      // areas: [
      //  { name: "Heel West",
      //    value: "Heel West",
      //    polygon: [{ "lng": 4.8353454, "lat": 52.3731265 }, { "lng": 4.8422025, "lat": 52.3721002 }, { "lng": 4.8421761, "lat": 52.3695836 }, { "lng": 4.8455807, "lat": 52.3696369 }, { "lng": 4.8476385, "lat": 52.369853 }, { "lng": 4.8477361, "lat": 52.3695885 }, { "lng": 4.8484176, "lat": 52.369697 }, { "lng": 4.8504835, "lat": 52.3653302 }, { "lng": 4.8504956, "lat": 52.3643692 }, { "lng": 4.8501587, "lat": 52.3638376 }, { "lng": 4.8494487, "lat": 52.3633001 }, { "lng": 4.8495059, "lat": 52.3610989 }, { "lng": 4.8489152, "lat": 52.3608149 }, { "lng": 4.8487824, "lat": 52.3578658 }, { "lng": 4.8504012, "lat": 52.3578553 }, { "lng": 4.8518982, "lat": 52.357844 }, { "lng": 4.8538275, "lat": 52.3581295 }, { "lng": 4.854723, "lat": 52.3578629 }, { "lng": 4.854635, "lat": 52.3577532 }, { "lng": 4.85436, "lat": 52.3572975 }, { "lng": 4.8540881, "lat": 52.3564026 }, { "lng": 4.8547969, "lat": 52.3562758 }, { "lng": 4.8698903, "lat": 52.3601067 }, { "lng": 4.8699397, "lat": 52.3600231 }, { "lng": 4.8714122, "lat": 52.3603737 }, { "lng": 4.8712647, "lat": 52.3605634 }, { "lng": 4.8715288, "lat": 52.3605997 }, { "lng": 4.8716826, "lat": 52.3604277 }, { "lng": 4.8738605, "lat": 52.3608533 }, { "lng": 4.8738525, "lat": 52.3610213 }, { "lng": 4.8740097, "lat": 52.3610407 }, { "lng": 4.8741351, "lat": 52.3608935 }, { "lng": 4.8750611, "lat": 52.3608041 }, { "lng": 4.8756501, "lat": 52.3606138 }, { "lng": 4.876429, "lat": 52.3607996 }, { "lng": 4.8765642, "lat": 52.3606177 }, { "lng": 4.876929, "lat": 52.3606957 }, { "lng": 4.8768495, "lat": 52.360911 }, { "lng": 4.8771709, "lat": 52.3609696 }, { "lng": 4.8774, "lat": 52.3607583 }, { "lng": 4.8819952, "lat": 52.3620427 }, { "lng": 4.8813956, "lat": 52.3630818 }, { "lng": 4.8808146, "lat": 52.3634904 }, { "lng": 4.8793708, "lat": 52.3643261 }, { "lng": 4.8792691, "lat": 52.3649574 }, { "lng": 4.8787082, "lat": 52.3658206 }, { "lng": 4.8775395, "lat": 52.3667815 }, { "lng": 4.8767523, "lat": 52.3685117 }, { "lng": 4.8754901, "lat": 52.3697867 }, { "lng": 4.8745065, "lat": 52.3718772 }, { "lng": 4.8745782, "lat": 52.3725454 }, { "lng": 4.8753796, "lat": 52.373407 }, { "lng": 4.8755899, "lat": 52.3743025 }, { "lng": 4.8799131, "lat": 52.3813052 }, { "lng": 4.8796339, "lat": 52.3819128 }, { "lng": 4.880478, "lat": 52.3822531 }, { "lng": 4.8818058, "lat": 52.3843528 }, { "lng": 4.882637, "lat": 52.3854107 }, { "lng": 4.8846503, "lat": 52.3883466 }, { "lng": 4.8857963, "lat": 52.3881476 }, { "lng": 4.8911796, "lat": 52.3884502 }, { "lng": 4.8937804, "lat": 52.3886712 }, { "lng": 4.8956658, "lat": 52.3888313 }, { "lng": 4.8927982, "lat": 52.3933453 }, { "lng": 4.8850924, "lat": 52.398824 }, { "lng": 4.8762366, "lat": 52.3945287 }, { "lng": 4.8726422, "lat": 52.3948206 }, { "lng": 4.8719896, "lat": 52.3947192 }, { "lng": 4.8719508, "lat": 52.3952766 }, { "lng": 4.8715979, "lat": 52.39538 }, { "lng": 4.8667403, "lat": 52.393136 }, { "lng": 4.8643092, "lat": 52.3927072 }, { "lng": 4.8627057, "lat": 52.3938521 }, { "lng": 4.8603441, "lat": 52.3949382 }, { "lng": 4.858593, "lat": 52.3952782 }, { "lng": 4.8569204, "lat": 52.3953667 }, { "lng": 4.8569896, "lat": 52.3938363 }, { "lng": 4.8573172, "lat": 52.3938424 }, { "lng": 4.8574043, "lat": 52.3920751 }, { "lng": 4.8589526, "lat": 52.3912226 }, { "lng": 4.8592744, "lat": 52.3905434 }, { "lng": 4.8592929, "lat": 52.3887899 }, { "lng": 4.8449045, "lat": 52.3887733 }, { "lng": 4.8451066, "lat": 52.3850658 }, { "lng": 4.8446526, "lat": 52.3850638 }, { "lng": 4.8390117, "lat": 52.3850241 }, { "lng": 4.8392807, "lat": 52.3829687 }, { "lng": 4.838548, "lat": 52.3808766 }, { "lng": 4.836707, "lat": 52.3763581 }, { "lng": 4.8353454, "lat": 52.3731265 }] },
      //  { name: "De Baarsjes",
      //    value: "De Baarsjes",
      //    polygon: [{"lng":4.8558724,"lat":52.374202},{"lng":4.8577714,"lat":52.3681953},{"lng":4.8582878,"lat":52.3648623},{"lng":4.8592819,"lat":52.3648966},{"lng":4.8598228,"lat":52.364783},{"lng":4.8613989,"lat":52.3664539},{"lng":4.8661845,"lat":52.3717538},{"lng":4.8664001,"lat":52.3721596},{"lng":4.8663889,"lat":52.372566},{"lng":4.865846,"lat":52.3733281},{"lng":4.8646717,"lat":52.3734961},{"lng":4.8641583,"lat":52.3750737},{"lng":4.8640923,"lat":52.3752839},{"lng":4.8559599,"lat":52.3743342},{"lng":4.8558724,"lat":52.374202}] },
      //  { name: "Oud West",
      //    value: "Oud West",
      //    polygon: [{"lng":4.8546816,"lat":52.3568634},{"lng":4.855041,"lat":52.3563261},{"lng":4.858839,"lat":52.3572696},{"lng":4.8625458,"lat":52.3582427},{"lng":4.8646701,"lat":52.3588487},{"lng":4.868731,"lat":52.3597955},{"lng":4.8703188,"lat":52.3601231},{"lng":4.8717136,"lat":52.3604376},{"lng":4.8738218,"lat":52.3609651},{"lng":4.8763055,"lat":52.3607226},{"lng":4.8776842,"lat":52.3608635},{"lng":4.878167,"lat":52.3610044},{"lng":4.8812676,"lat":52.3618856},{"lng":4.8807043,"lat":52.3623966},{"lng":4.8798675,"lat":52.3633663},{"lng":4.8795778,"lat":52.3639428},{"lng":4.8792613,"lat":52.3644931},{"lng":4.8791272,"lat":52.3650598},{"lng":4.8787785,"lat":52.3656691},{"lng":4.8779202,"lat":52.3663734},{"lng":4.8773838,"lat":52.366809},{"lng":4.8772336,"lat":52.3676312},{"lng":4.8769385,"lat":52.3681389},{"lng":4.8754311,"lat":52.3697536},{"lng":4.8746211,"lat":52.3714043},{"lng":4.8744494,"lat":52.3720594},{"lng":4.8744602,"lat":52.3723083},{"lng":4.8752166,"lat":52.3729895},{"lng":4.8745943,"lat":52.3731762},{"lng":4.870925,"lat":52.3724033},{"lng":4.8680175,"lat":52.3717974},{"lng":4.8665959,"lat":52.3715648},{"lng":4.8654211,"lat":52.3703825},{"lng":4.8641176,"lat":52.3689905},{"lng":4.8628623,"lat":52.3676443},{"lng":4.8616499,"lat":52.3662554},{"lng":4.8604268,"lat":52.3648862},{"lng":4.8602505,"lat":52.3647431},{"lng":4.8591448,"lat":52.3634056},{"lng":4.8580772,"lat":52.3621247},{"lng":4.8575783,"lat":52.3615515},{"lng":4.857117,"lat":52.3604245},{"lng":4.856248,"lat":52.3592681},{"lng":4.8555345,"lat":52.3580035},{"lng":4.855299,"lat":52.357674},{"lng":4.855269,"lat":52.3576447},{"lng":4.855115,"lat":52.3574166},{"lng":4.8549071,"lat":52.3571512},{"lng":4.85479,"lat":52.3570018},{"lng":4.8546816,"lat":52.3568634}] },
      // ],

      titleField: 'title',
      summaryField: 'summary',
      // areaField: self.config.areaField || 'extraData.gebied',
      user: {},
      api: {
        url: null,
        headers: null,
        isUserLoggedIn: false,
      },
      idea: {
        canAddNewIdeas: true,
        showVoteButtons: true,
        titleMinLength: 10,
        titleMaxLength: 20,
        summaryMinLength: 20,
        summaryMaxLength: 140,
        descriptionMinLength: 140,
        descriptionMaxLength: 5000,
      },
      argument: {
        isActive: true,
        descriptionMinLength: 30,
        descriptionMaxLength: 500,
        formIntro: 'Mijn reactie op deze inzending is ...',
        placeholder: '',
        requiredUserRole: 'member',
      },
      content: {
        mobilePreviewLoggedInHTML: 'Een locatie vlakbij <h4>{address}</h4>{addButton}',
        mobilePreviewNotLoggedInHTML: 'Een locatie vlakbij <h4>{address}</h4><div>Wilt u een nieuw punt toevoegen? Dan moet u eerst <a href="{loginLink}">inloggen</a>.</div>',
        ignoreReactionsForIdeaIds: '',
      },
		};
		self.config = merge.recursive(self.defaultConfig, self.config, props.config || {})

    // defaults
    self.config.doSearchFunction = self.config.doSearchFunction || self.doSearch.bind(self);

    // tmp
    if (self.config.types && self.config.types.length) {
      self.config.types.forEach((entry) => {
        if (entry.value && !entry.name) {
          entry.name = entry.value;
        }
        if (entry.mapicon && typeof entry.mapicon == 'string') {
          try {
            entry.mapicon = JSON.parse(entry.mapicon)
          } catch (err) { console.log(entry); console.log(err) }
        }
        if (entry.listicon && typeof entry.listicon == 'string') {
          try {
            entry.listicon = JSON.parse(entry.listicon)
          } catch (err) { console.log(entry); console.log(err) }
        }
      });
    }

    self.state = {
      ideas: [],
      visibleIdeas: [],
      status: 'default', // default, idea-selected, location-selected, idea-details, idea-form
      mobileState: 'closed',
      // oud
      currentIdea: null,
      editIdea: null,
      // new, maar nog niet overal gebruikt
      selectedIdea: null,
      selectedLocation: null,
      currentMouseOverIdea: null,
    }
    
  }

	componentDidMount(prevProps, prevState) {

    let self = this;

    // when the map is ready
		document.addEventListener('osc-map-is-ready', function(e) {

      // fetch the data
      self.fetchData({});

      // handle map changes
      self.map.map.on('zoomend', function() {
        self.onChangeMapBoundaries();
      });
      self.map.map.on('moveend', function() {
        self.onChangeMapBoundaries();
      });

    });

    // map events
		document.addEventListener('osc-map-click', function(event) {
      self.onMapClick(event.detail);
    });
		document.addEventListener('osc-map-marker-click', function(event) {
      self.onMarkerClick(event.detail);
    });
		document.addEventListener('osc-map-cluster-click', function(event) {
      self.onClusterClick(event.detail);
    });
    
    // handle filter changes
		document.addEventListener('typeFilterUpdate', function(event) {
      self.onChangeTypeFilter(event.detail.value);
    });
    // document.addEventListener('areaFilterUpdate', function(event) {
    //   self.onChangeAreaFilter(event.detail.value);
    // });

    // handle infoblock changes
		document.addEventListener('updateSelectedIdea', function(event) {
      self.onUpdateSelectedIdea(event.detail.idea);
    });
		document.addEventListener('closeSelectedLocation', function(event) {
      self.onCloseSelectedLocation(event.detail.idea);
    });
		document.addEventListener('updateEditIdea', function(event) {
      self.onUpdateEditIdea(event.detail.idea);
    });
		document.addEventListener('ideaClick', function(event) {
      self.onIdeaClick(event.detail.idea);
    });
		document.addEventListener('selectedIdeaClick', function(event) {
      self.onSelectedIdeaClick(event.detail.idea);
    });
		document.addEventListener('newIdeaClick', function(event) {
      self.onNewIdeaClick();
    });
		document.addEventListener('clickMobileSwitcher', function(event) {
      self.onClickMobileSwitcher();
    });
		document.addEventListener('mouseOverListItem', function(event) {
      self.onMouseOverListItem(event.detail.idea);
    });
		document.addEventListener('mouseOutListItem', function(event) {
      self.onMouseOutListItem();
    });

    // details changes
		document.addEventListener('osc-idea-liked', function(event) {
      self.onIdeaLiked(event.detail);
    });
		document.addEventListener('osc-reaction-stored', function(event) {
      self.onReactionStored(event.detail);
    });
		document.addEventListener('osc-reaction-deleted', function(event) {
      self.onReactionDeleted(event.detail);
    });
		document.addEventListener('osc-edit-idea-click', function(event) {
      self.onEditIdeaClick(event.detail);
    });
		document.addEventListener('osc-idea-deleted', function(event) {
      self.onIdeaDeleted(event.detail);
    });

    // form changes
		document.addEventListener('newIdeaStored', function(event) {
      self.onNewIdeaStored(event.detail.idea);
    });
    
	}

  fetchData({ showIdeaDetails, showIdeaSelected }) {

    let self = this;
    let url = `${ self.config.api.url }/api/site/${  self.config.siteId  }/idea?includeVoteCount=1&includeArguments=1&includeUser=1`;
    let headers = OpenStadComponentLibs.api.getHeaders(self.config);

    // remove existing
    while(self.map.markers.length > 0) {
      let marker = self.map.markers[0];
      self.map.removeMarker(marker)
    }
    self.map.markers = [];

    fetch(url, {
      headers,
    })
      .then((response) => {
        return response.json();
      })
      .then( json => {
        showIdeaDetails = showIdeaDetails || OpenStadComponentLibs.localStorage.get('osc-ideas-on-map-details'); //  document.location.hash.replace(/.*details=(\d+).*/, "$1");
        showIdeaSelected = showIdeaSelected || OpenStadComponentLibs.localStorage.get('osc-ideas-on-map-selected'); // document.location.hash.replace(/.*selected=(\d+).*/, "$1");
        let ideas = json.filter( idea => idea.location )
        ideas.map( idea => {
          if ( idea.id == showIdeaDetails) {
            showIdeaDetails = idea;
          }
          if ( idea.id == showIdeaSelected) showIdeaSelected = idea;
          idea.image = (idea.posterImage && idea.posterImage.key) || (idea.extraData && idea.extraData.images && idea.extraData.images[0]) || "https://stemvanwest.amsterdam.nl/img/placeholders/idea.jpg";
          self.map.addIdea(idea);
				});

        self.map.setBoundsAndCenter();

        self.setState({ ideas }, function () {
          // self.setSelectedLocation({ lat: 52.37104644463586, lng: 4.900402911007405 })
          // return setTimeout(function(){ self.showIdeaForm() }, 500)
          if (typeof showIdeaSelected == 'object' && showIdeaSelected != null) {
						self.setNewIdea(null);
						self.setSelectedIdea(showIdeaSelected);
            self.setState({ status: 'idea-selected', currentIdea: showIdeaSelected }, function() {
              // todo: dit zou hij zelf via state moeten doen
              self.map.map.invalidateSize();
              self.map.showMarkers({})
              self.setSelectedIdea(self.state.currentIdea)
            });
          }
          if (typeof showIdeaDetails == 'object' && showIdeaDetails != null) {
						self.setSelectedIdea(showIdeaDetails);
						self.setNewIdea(null);
					  self.showIdeaDetails(showIdeaDetails);
          }
          self.onChangeMapBoundaries();

          // dev form
          // if (!showIdeaSelected) {
					//   self.setSelectedIdea(null);
					//   self.setNewIdea({ location: { coordinates: [52.37104644463586, 4.900402911007405] }, title: "Rutrum tincidunt", type: "Kans", theme: "Overig", summary: "rutrum tincidunt, dui sapien feugiat justo, eget egestas ligula nulla nec erat.", description: "rutrum tincidunt, dui sapien feugiat justo, eget egestas ligula nulla nec erat. maecenas tempus tempor eros. donec a justo. curabitur tellus. pellentesque risus. fusce at arcu. ut lacinia mi vel lectus. phasellus imperdiet. fusce luctus lacus a odio. in et turpis at libero tristique vulputate. sed varius ipsum. suspendisse potenti. suspendisse potenti. donec tempus arcu quis metus."});
					//   self.showIdeaForm();
					// }
          // einde dev form
				});

      })
      .catch((err) => {
        console.log('Niet goed');
        console.log(err);
      });

  }

  showIdeaDetails(idea) {
    let self = this;
    self.setSelectedIdea(idea);
    OpenStadComponentLibs.localStorage.set('osc-ideas-on-map-details', idea && idea.id );
    OpenStadComponentLibs.localStorage.set('osc-ideas-on-map-selected', null);
    // self.infoblock.setState({ mobileState: self.state.mobileState = 'opened' })
    self.setState({ status: 'idea-details', currentIdea: idea }, function() {
    // self.setState({ status: 'idea-details', currentIdea: idea, mobileState: self.state.mobileState = 'opened' }, function() {
      self.map.map.invalidateSize();
      self.map.hideMarkers({ exception: { location: { lat: idea.location.coordinates[0], lng: idea.location.coordinates[1] } } })
    });
  }

  hideIdeaDetails() {
    let self = this;
    self.setState({ status: 'idea-selected' }, function() {
      // todo: dit zou hij zelf via state moeten doen
      self.map.map.invalidateSize();
      self.map.showMarkers({})
      self.setSelectedIdea(self.state.currentIdea)
    });
  }

  showIdeaForm(idea, next) {
    let self = this;
    self.setState({ status: 'idea-form', editIdea: idea }, function() {
      self.map.map.invalidateSize();
      self.map.hideMarkers({ exception: { location: idea && { lat: idea.location.coordinates[0], lng: idea.location.coordinates[1] } || self.map.selectedLocation } })
      if (next) next();
    });
  }

  hideIdeaForm() {
    let self = this;
    if (this.state.editIdea && typeof this.state.editIdea.id == 'number') {
      let idea = self.state.ideas.find(idea => idea.id == self.state.editIdea.id)
      self.showIdeaDetails(idea)
    } else {
      self.setState({ status: 'location-selected' }, function() {
        // todo: dit zou hij zelf via state moeten doen
        self.map.map.invalidateSize();
        self.map.showMarkers({})
        self.setNewIdea(self.state.editIdea)
      });
    }
  }

	doSearch(searchValue, callback) {

		let self = this;
    let searchValueLc = searchValue.toLowerCase();

		let searchResult = { ideas: [], locations: [] };

    // search in ideas
		this.state.ideas.forEach((idea) => {
			let title = eval(`idea.${self.config.titleField}`) || '';
      let titlelLc = title.toLowerCase();
			let summary = eval(`idea.${self.config.summaryField}`) || '';
      let summaryLc = summary.toLowerCase();
			if (titlelLc.match(searchValueLc) || summaryLc.match(searchValueLc)) {
				searchResult.ideas.push({
					text: title,
					onClick: function() {
            self.onUpdateSelectedIdea(idea)
          },
				})
			}
		});

    // search for addresses
    fetch('https://geodata.nationaalgeoregister.nl/locatieserver/v3/suggest?rows=5&fq=gemeentenaam:amsterdam&fq=*:*&q=' + searchValueLc, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
			.then((response) => {
				return response.json();
			})
      .then( json => {
        if (json && json.response && json.response.docs && json.response.docs.length) {
          searchResult.locations = json.response.docs.map( found => { return {
						text: found.weergavenaam,
						onClick: function() { onClickAddress(found.id) },
					}});
        }
        callback(searchValue, searchResult)
      })
      .catch((err) => {
        console.log('Search failed:', err);
        callback(searchValue, searchResult)
      });
    
    function onClickAddress(id) {
      fetch('https://geodata.nationaalgeoregister.nl/locatieserver/v3/lookup?fq=gemeentenaam:amsterdam&&id=' + id, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
			  .then((response) => {
				  return response.json();
			  })
        .then( json => {
          if (json && json.response && json.response.docs && json.response.docs[0]) {
            let centroide_ll = json.response.docs[0].centroide_ll;
            let match = centroide_ll.match(/POINT\((\d+\.\d+) (\d+\.\d+)\)/);
            self.map.map.panTo(new L.LatLng(match[2], match[1]));
            self.onMapClick({ latlng: { lat: match[2], lng: match[1] } }, true)
          }
        })
        .catch((err) => {
          console.log('Search failed:', err);
          callback(searchValue, searchResult)
        });
      
    }
		
	}

  // dit is opgezet maar wordt niet genbruikt en is daarom niet afgemaakt; latere wijzigingen maken dat dit niet meer werkt
  // setCurrentPolygon(polygon) {
  //   let state = { ...this.state };
  //   state.currentPolygon = polygon ? this.map.createCutoutPolygon(polygon): undefined;
  //   this.setState(state);
  // }

  // removeCurrentPolygon() {
  //   this.map.removePolygon(this.state.currentPolygon)
  //   let state = { ...this.state };
  //   state.currentPolygon = undefined;
  //   this.setState(state);
  // }

  getVisibleIdeas() {
		if ( this.state.mobileState == 'opened' ) { // werkt omdat hij alleen op mobiel opend kan zijn
      return this.state.visibleIdeas;
    } else {
      let visibleIdeas = this.map.getVisibleIdeas()
      this.setState({ visibleIdeas });
      return visibleIdeas;
    }
  }

  setSelectedLocation(location) {
    let self = this;
    self.map.setSelectedLocation(location)
    if (self.ideaform) {
      if (!location) return;
      self.ideaform.handleLocationChange({ location, address: 'Bezig met adresgegevens ophalen...' });
			self.map.getPointInfo(location, null, function(json, marker) {
				let address = json && json._display || 'Geen adres gevonden';
				self.state.editIdea.address = address;
				self.ideaform.handleLocationChange({ location, address: address });
			})
    }
  }

  setNewIdea(idea) {
    let self = this;
    if (idea) idea.isPointInPolygon = idea.location && self.map.isPointInPolygon( { lat: idea.location.coordinates[0], lng: idea.location.coordinates[1] }, self.config.map.polygon )
    self.setState({ editIdea: idea }, function() {
      if (idea) {
        self.map.fadeMarkers({exception: [idea.location]});
        self.setSelectedLocation({ lat: idea.location.coordinates[0], lng: idea.location.coordinates[1] });  
        if (self.infoblock) {
          self.setState({ editIdea: self.state.editIdea });
          self.infoblock.setNewIdea({ ...self.state.editIdea, address: 'Bezig met adresgegevens ophalen...' });
          self.map.getPointInfo({ lat: idea.location.coordinates[0], lng: idea.location.coordinates[1] }, null, function(json, marker) {
            let address = json && json._display || 'Geen adres gevonden';
            let editIdea = self.state.editIdea;
            editIdea.address = address;
            self.setState({ editIdea });
            self.infoblock.setNewIdea({ ...self.state.editIdea, address });
          })
          //self.infoblock.updateIdeas({ ideas: self.getVisibleIdeas().filter( x => x.id != idea.id ), sortOrder: 'distance', showSortButton: false, center: { lat: idea.location.coordinates[0], lng: idea.location.coordinates[1] }, maxLength: 5 });
          self.infoblock.updateIdeas({ ideas: self.state.ideas.filter( x => x.id != idea.id ), sortOrder: 'distance', showSortButton: false, center: { lat: idea.location.coordinates[0], lng: idea.location.coordinates[1] }, maxLength: 5 });
        }
      } else {
        self.map.unfadeAllMarkers();
        self.setSelectedLocation(null);
        if (self.infoblock) {
          self.infoblock.setNewIdea(null);
          self.infoblock.updateIdeas({ ideas: self.getVisibleIdeas(), showSortButton: true });
        }
      }
    });
  }

  setSelectedIdea(idea) {
    OpenStadComponentLibs.localStorage.set('osc-ideas-on-map-selected', idea && idea.id );
    OpenStadComponentLibs.localStorage.set('osc-ideas-on-map-details', null);
    this.selectedIdea = idea;
    if (idea) {
      this.map.fadeMarkers({exception: idea});
      if (this.infoblock) {
        this.infoblock.setSelectedIdea(idea);
        // this.infoblock.updateIdeas({ ideas: this.getVisibleIdeas().filter( x => x.id != idea.id ), sortOrder: 'distance', showSortButton: false, center: { lat: idea.location.coordinates[0], lng: idea.location.coordinates[1] }, maxLength: 5 });
        this.infoblock.updateIdeas({ ideas: this.state.ideas.filter( x => x.id != idea.id ), sortOrder: 'distance', showSortButton: false, center: { lat: idea.location.coordinates[0], lng: idea.location.coordinates[1] }, maxLength: 5 });
      }
    } else {
      this.map.unfadeAllMarkers();
      if (this.infoblock) {
        this.infoblock.setSelectedIdea(null);
        this.infoblock.updateIdeas({ ideas: this.getVisibleIdeas(), showSortButton: true });
      }
    }
  }
  
	onMapClick(event, forceSelectLocation) {


		if ( this.state.mobileState == 'opened' ) { // werkt omdat hij alleen op mobiel opend kan zijn
			this.infoblock.setState({ mobileState: 'closed' })
			this.setState({ mobileState: 'closed' }, function() {
				this.map.map.invalidateSize();
			})
			return;
		}

    switch (this.state.status) {

      case 'idea-details':
        break;

      case 'idea-form':
        let isPointInPolygon = this.map.isPointInPolygon( event.latlng, this.config.map.polygon );
        if (isPointInPolygon) this.setSelectedLocation(event.latlng)
        break;

      default:
        if (( this.selectedIdea || this.map.selectedLocation ) && !forceSelectLocation) {
          this.setState({ ...this.state, status: 'default', currentIdea: null });
          this.setSelectedIdea(null);
          this.setNewIdea(null);
          this.infoblock.updateIdeas({ ideas: this.getVisibleIdeas(), showSortButton: true });
        } else {
          this.setState({ ...this.state, status: 'location-selected', currentIdea: null });
          this.setSelectedIdea(null);
          let newIdea = { id: 'New Idea', location: { coordinates: [ event.latlng.lat, event.latlng.lng ] } };
          this.setNewIdea(newIdea);
          // setTimeout( function() {
		      // var event = new window.CustomEvent('newIdeaClick', { detail: { newIdea } });
		      //   document.dispatchEvent(event);
          // }, 500 );
        }
        this.map.updateFading();
        document.querySelector('#osc-ideas-on-map-info').scrollTo(0,0)
    }
  }

	onMarkerClick(event) {

		if ( this.state.mobileState == 'opened' ) { // werkt omdat hij alleen op mobiel opend kan zijn
			this.infoblock.setState({ mobileState: 'closed' })
			this.setState({ mobileState: 'closed' }, function() {
				this.map.map.invalidateSize();
			})
			return;
		}

		switch (this.state.status) {

      case 'idea-details':
        break;

      case 'idea-form':
        break;

      default:
        if (this.state.editIdea) {
          this.setState({ status: 'default', currentIdea: null });
          this.setNewIdea(null);
          this.setSelectedIdea(null);
          this.setSelectedIdea(null);
        } else {
          this.setState({ status: 'idea-selected', currentIdea: event.target.data });
          this.setNewIdea(null);
          this.setSelectedIdea(event.target.data);
        }
        document.querySelector('#osc-ideas-on-map-info').scrollTo(0,0)

    }
  }

	onClusterClick(event) {

		if ( this.state.mobileState == 'opened' ) { // werkt omdat hij alleen op mobiel opend kan zijn
			this.infoblock.setState({ mobileState: 'closed' })
			this.setState({ mobileState: 'closed' }, function() {
				this.map.map.invalidateSize();
			})
			return;
		}

    this.setState({ ...this.state, status: 'default', currentIdea: null });
    this.setNewIdea(null);
    this.setSelectedIdea(null);
  }

  onChangeMapBoundaries() {
    let self = this;
    self.map.updateFading();
    switch (self.state.status) {

      case 'idea-details':
        break;

      case 'idea-form':
        break;

      case 'idea-selected':
      case 'location-selected':
        if (self.infoblock) {
          let selectedIdea = self.state.currentIdea || self.selectedIdea || self.state.editIdea;
          if (selectedIdea && selectedIdea) {
            self.infoblock.updateIdeas({ ideas: self.state.ideas.filter( x => x.id != selectedIdea.id ), sortOrder: 'distance', showSortButton: false, center: { lat: selectedIdea.location.coordinates[0], lng: selectedIdea.location.coordinates[1] }, maxLength: 5 });
          }
        }
        break;

      default:
        if (self.infoblock) {
          self.infoblock.updateIdeas({ ideas: self.getVisibleIdeas(), showSortButton: true });
        }

    }
  }

	onUpdateEditIdea(idea) {
    this.setState({ ...this.state, editIdea: { ...idea }, currentIdea: idea });
  }

	onUpdateSelectedIdea(idea) {
    if (this.state.editIdea) this.setNewIdea(null);
    let status = idea ? 'idea-selected' : 'default';
    this.setState({ ...this.state, status, currentIdea: idea }, function() {
      this.setSelectedIdea(idea);
    });
  }

	onCloseSelectedLocation() {
    this.setState({ ...this.state, status: 'default', currentIdea: null }, function() {
      this.setSelectedIdea(null);
      this.setNewIdea(null);
      this.setSelectedLocation(null);
    });
  }
  
  onIdeaClick(idea) {
    // let showDetails = this.state.status == 'location-selected' || this.state.status == 'idea-selected';
    if (this.state.editIdea) this.setNewIdea(null);
    this.setState({ status: 'idea-selected', currentIdea: idea }, function() {
      this.setSelectedIdea(idea);
      // if (showDetails) this.showIdeaDetails(idea);
      this.showIdeaDetails(idea);
    });
  };

  onEditIdeaClick(idea) {
    let self = this;
    let location = { lat: idea.location.coordinates[0], lng: idea.location.coordinates[1] };
    self.showIdeaForm(idea, () => {
      self.ideaform.handleLocationChange({ location, address: 'Bezig met adresgegevens ophalen...' });
		  self.map.getPointInfo(location, null, function(json, marker) {
			  let address = json && json._display || 'Geen adres gevonden';
			  self.state.editIdea.address = address;
			  self.ideaform.handleLocationChange({ location, address: address });
		  })
    });
  };

  onIdeaDeleted(ideaId) {
    let self = this;
    self.setNewIdea(null);
    self.setSelectedIdea(null);
    self.setSelectedLocation(null);
    self.setState({ status: 'default' }, function() {
      self.map.map.invalidateSize();
      self.map.setBoundsAndCenter();
      self.fetchData({});
    });
  };

  onDeleteIdeaClick(idea) {
    console.log('Delete idea', idea.id);
    alert('TODO')
  };

  onSelectedIdeaClick(idea) {
    this.showIdeaDetails(idea);
  };
  
  onNewIdeaClick() {
    let self = this;
    self.showIdeaForm(this.state.editIdea, () => {
      let location = { lat: this.state.editIdea.location.coordinates[0], lng: this.state.editIdea.location.coordinates[1] };
      self.ideaform.handleLocationChange({ location, address: 'Bezig met adresgegevens ophalen...' });
		  self.map.getPointInfo(location, null, function(json, marker) {
			  let address = json && json._display || 'Geen adres gevonden';
			  self.state.editIdea.address = address;
			  self.ideaform.handleLocationChange({ location, address: address });
		  })
    });
  };


  onNewIdeaStored(idea) {
    let self = this;
    self.setNewIdea(null);
    self.fetchData({showIdeaSelected: idea.id});
  }

  onIdeaLiked(data) {
    let idea = this.state.ideas.find( idea => idea.id == data.ideaId );
    idea.yes += data.change;
  }

  onReactionStored(data) {
    let idea = this.state.ideas.find( idea => idea.id == data.ideaId );
    idea.argCount++;
    setTimeout(e => { window.location.hash = `#osc-reaction-${data.id}` }, 1000);
  }

  onReactionDeleted(data) {
    let idea = this.state.ideas.find( idea => idea.id == data.ideaId );
    idea.argCount--;
  }
  
  onChangeTypeFilter(value) {
    let self = this;
    self.setSelectedIdea(null);
    self.setNewIdea(null);
    self.setSelectedLocation(null);
	  self.map.setFilter(function(marker) {
		  if (value && value !== '0') {
			  return marker.data && eval(`marker.data.${self.config.typeField}`) && eval(`marker.data.${self.config.typeField}`) == value;
		  } else {
			  return true;
		  }
	  })
    self.setState({ status: 'default' })
    self.map.setBoundsAndCenter();
    self.onChangeMapBoundaries(); // todo: rename
  }

  // dit is opgezet maar wordt niet genbruikt en is daarom niet afgemaakt; latere wijzigingen maken dat dit niet meer werkt
  // onChangeAreaFilter(area) {
  //   let self = this;
  //   self.setSelectedIdea(null);
  //   self.setNewIdea(null);
  //   self.removeCurrentPolygon();
  //   self.setCurrentPolygon( area && area.polygon );
  //   self.setState({ status: 'default' })
  //   self.map.setBoundsAndCenter(area && area.polygon || self.config.map.polygon || self.map.markers);
  // }

  onMouseOverListItem(idea) {
    this.setState({ currentMouseOverIdea: idea });
    this.map.fadeMarkers({ exception: idea })
    this.map.updateFading();
  }

  onMouseOutListItem(idea) {
    this.setState({ currentMouseOverIdea: null });
    this.map.unfadeAllMarkers()
    if (this.selectedIdea) {
      this.map.fadeMarkers({exception: this.selectedIdea});
    }
    if (this.map.selectedLocation) {
      this.map.fadeMarkers({});
    }
    this.map.updateFading();
  }
  
  onClickMobileSwitcher() {
    let self = this;
    self.infoblock.setState({ mobileState: self.state.mobileState == 'closed' ? 'opened' : 'closed' })
    self.setState({ mobileState: self.state.mobileState == 'closed' ? 'opened' : 'closed' }, function() {
      self.map.map.invalidateSize();
      if (this.state.status == 'location-selected' || this.state.status == 'idea-selected') {
        let selectedIdea = self.state.currentIdea || self.selectedIdea || self.state.editIdea;
        self.map.setBoundsAndCenter();
      }
    })
  }
  
	render() {

    let infoHTML = null; // todo: ik denk dat dit naar infoblock moet
    let filterHTML = null;
    let mobilePopupHTML = null;

    switch(this.state.status) {

      case 'idea-details':
        let config = { // TODO: niet bij elke render
          titleField: this.config.titleField,
          summaryField: this.config.summaryField,
          typeField: this.config.typeField,
          // areaField: this.config.areaField,
          siteId: this.config.siteId,
          user: this.config.user,
          api: this.config.api,
          argument: { ...this.config.argument },
          labels: {
            Kans: { text: 'Dit gaat goed', color: 'black', backgroundColor: '#bed200' },
            Knelpunt: { text: 'Dit kan beter', color: 'black', backgroundColor: '#ff9100' },
          },
          showVoteButtons: this.config.idea.showVoteButtons,
        };
        config.argument.isActive = this.config.argument.isActive && !this.config.content.ignoreReactionsForIdeaIds && this.config.content.ignoreReactionsForIdeaIds.match(new RegExp(`(?:^|\\D)${this.state.currentIdea.id}(?:\\D|$)`));
        infoHTML = (
			    <OpenStadComponentIdeaDetails id={this.divId + '-infoblock'} config={config} idea={this.state.currentIdea} label={this.state.currentIdea.extraData.type} id="osc-ideas-on-map-info" className="osc-ideas-on-map-info" mobileState={this.state.mobileState} ref={el => (this.ideadetails = el)}/>
        );
        filterHTML = (
				  <div className="osc-ideas-on-map-filterbar"><div className="osc-backbutton" onClick={() => this.hideIdeaDetails()}>Terug naar overzicht</div></div>
        );
        break;

      case 'idea-form':
        infoHTML = (
			    <IdeaForm id={this.divId + '-infoblock'} config={{ siteId: this.config.siteId, user: this.config.user, api: this.config.api, ...this.config.idea }} idea={{ ...this.state.editIdea, user: this.state.editIdea && this.state.editIdea.user || this.config.user }} id="osc-ideas-on-map-info" className="osc-ideas-on-map-info" mobileState={this.state.mobileState} ref={el => (this.ideaform = el)}/>
        );
        filterHTML = (
				  <div className="osc-ideas-on-map-filterbar"><div className="osc-backbutton" onClick={() => this.hideIdeaForm()}>Terug naar {this.state.editIdea && typeof this.state.editIdea.id == 'number' ? 'idee' : 'overzicht'}</div></div>
        );
        break;

      case 'location-selected':
      case 'idea-selected':
        if (this.state.status == 'location-selected') {
          if (this.state.editIdea && this.state.editIdea.isPointInPolygon) {

            let contentHTML = this.config.api.isUserLoggedIn ? this.config.content.mobilePreviewLoggedInHTML : this.config.content.mobilePreviewNotLoggedInHTML;

            let addButton = null; let loginButton = null; let loginLink = null;
            if (this.config.api.isUserLoggedIn) {
              if (this.config.idea.canAddNewIdeas) {
                addButton = (
                  <button className="osc-button osc-button-blue" onClick={(event) => { this.onClickMobileSwitcher(event); this.onNewIdeaClick(event)} } ref={el => (self.newIdeaButton = el)}>Nieuw punt toevoegen</button>
                );
              }
            } else {
              if (this.config.idea.canAddNewIdeas) {
                loginButton = (
                  <button onClick={() => { document.location.href = '/oauth/login?returnTo=' + encodeURIComponent(document.location.href) }} className="osc-button-blue osc-not-logged-in-button">Inloggen</button>
                );
                loginLink = "javascript: document.location.href = '/oauth/login?returnTo=' + encodeURIComponent(document.location.href)";
              }
            }
            
            contentHTML = contentHTML.replace(/\{address\}/g, this.state.editIdea.address || '');
            contentHTML = contentHTML.replace(/\{loginLink\}/g, loginLink);
            
            contentHTML = OpenStadComponentLibs.reactTemplate({ html: contentHTML, addButton, loginButton })

            mobilePopupHTML = (
							<div className="ocs-mobile-popup">
								{contentHTML}
							</div>
						);
          }
        } else {
          mobilePopupHTML = (
            <div className="ocs-mobile-popup ocs-clickable" onClick={ () =>  { this.setState({ mobileState: 'opened' }); this.infoblock.setState({ mobileState: 'opened' }); this.showIdeaDetails(this.state.currentIdea) } }>
              <div className="osc-image" style={{ backgroundImage: `url(${this.state.currentIdea && this.state.currentIdea.image})` }}></div>
              { eval(this.state.currentIdea && `this.state.currentIdea.${this.config.titleField}`) }
            </div>
          );
        }
        infoHTML = (
			    <InfoBlock id={this.divId + '-infoblock'} config={{ api: this.config.api, title: this.config.title, titleField: this.config.titleField, summaryField: this.config.summaryField, types: this.config.types, content: this.config.content, argument: this.config.argument, idea: this.config.idea  }} id="osc-ideas-on-map-info" className="osc-ideas-on-map-info" mobileState={this.state.mobileState} ref={el => (this.infoblock = el)}/>
        );
        filterHTML = (
				  <Filterbar id={this.divId + '-filterbar'} config={{ types: this.config.types, areas: this.config.areas, doSearchFunction: this.config.doSearchFunction, title: this.config.title }} className="osc-ideas-on-map-filterbar" ref={el => (this.filterbar = el)}/>
        );
        break;

      default:
        infoHTML = (
			    <InfoBlock id={this.divId + '-infoblock'} config={{ api: this.config.api, title: this.config.title, titleField: this.config.titleField, summaryField: this.config.summaryField, types: this.config.types, content: this.config.content, argument: this.config.argument, idea: this.config.idea  }} id="osc-ideas-on-map-info" className="osc-ideas-on-map-info" mobileState={this.state.mobileState} ref={el => (this.infoblock = el)}/>
        );
        filterHTML = (
				  <Filterbar id={this.divId + '-filterbar'} config={{ types: this.config.types, areas: this.config.areas, doSearchFunction: this.config.doSearchFunction, title: this.config.title }} className="osc-ideas-on-map-filterbar" ref={el => (this.filterbar = el)}/>
        );
        mobilePopupHTML = null;
        break;
            
    }

    return (
			<div id={this.divId} className={`osc-ideas-on-map osc-ideas-on-map-${this.state.status} osc-mobile-${this.state.mobileState}`} ref={el => (this.instance = el)}>
        {filterHTML}
        {infoHTML}
        <div className="osc-ideas-on-map-map">
				  <Map id={this.divId + '-map'} className="" config={{ ...this.config.map, types: this.config.types, typeField: this.config.typeField }} ref={el => (this.map = el)}/>
        </div>
        {mobilePopupHTML}
			</div>
    );

  }

}
