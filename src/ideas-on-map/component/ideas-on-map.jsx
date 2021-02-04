'use strict';

import Filterbar from './filterbar.jsx';
import InfoBar from './infobar.jsx';
import Preview from './preview.jsx';
import Map from './map.jsx';

import OpenStadComponent from '../../component/index.jsx';
import OpenStadComponentLibs from '../../libs/index.jsx';

// TODO: clean up; ik gebruikte eerst setNewIdea en setSelected, maar nu onNewIdeaClick en onSelectedIdeaClick; trek dat gelijk
// TODO: editIdea vs newIdea opschonen
// TODO: vervang handle functies door events, bijvoorbeeld bij opzoeken adres
// TODO: events renamen naar osc-xxx
// TODO: remove event listener is nog niet overal consequent doorgevoerd

'use strict';

export default class OpenStadComponentIdeasOnMap extends OpenStadComponent {

  constructor(props) {

    super(props, {
      display: {
        type: 'complete',
        width: null,
        height: null,
      },
      canSelectLocation: true,
      types: [],
      typeField: null,
      titleField: 'title',
      summaryField: 'summary',
      user: {},
      api: {
        url: null,
        headers: null,
        isUserLoggedIn: false,
      },
      idea: {
        canAddNewIdeas: true,
      },
      content: {
      },
		});

		var self = this;

		// config
    self.config.ideaName = self.config.ideaName || 'Inzendingen';

    // defaults
    self.config.doSearchFunction = self.config.doSearchFunction || self.doSearch.bind(self);
    self.config.typeField = self.config.typeField || 'extraData.theme'

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
        if (entry.buttonicon && typeof entry.buttonicon == 'string') {
          try {
            entry.buttonicon = JSON.parse(entry.buttonicon)
          } catch (err) { console.log(entry); console.log(err) }
        }
      });
    }

    self.state = {
      ideas: [],
      visibleIdeas: [],
      listedIdeas: [],
      status: 'default', // default, idea-selected, location-selected, idea-details, idea-form
      mobileState: 'closed',
      // oud
      editIdea: null,
      // new, maar nog niet overal gebruikt
      selectedIdea: null,
      selectedLocation: null,
    }

  }

	componentDidMount() {

    let self = this;

    window.addEventListener( 'hashchange', e => {
      self.hideIdeaDetails();
      let match = window.location.hash.match(/(\w)(\d+)/);
      if (match) {
        let ideaId = match[2];
        let idea = self.state.ideas && self.state.ideas.find(idea => idea.id == ideaId);
        if (match[1] == 'D') {
          self.showIdeaDetails(idea)
        } else {
          // xxx
					// self.setSelectedIdea(idea);
        }
      }
    }, false );

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
	  document.addEventListener('osc-ideas-filter-onchange', function(event) {
      self.onChangeFilter(event.detail);
    });

    // infobar events
		document.addEventListener('osc-set-selected-idea', function(event) {
      self.onUpdateSelectedIdea(event.detail);
    });
		document.addEventListener('osc-set-selected-location', function(event) {
      self.setSelectedLocation(event.detail);
    });
		document.addEventListener('osc-new-idea-click', function(event) {
      self.onNewIdeaClick({ idea: event.detail.idea });
    });
		document.addEventListener('osc-selected-idea-click', function(event) {
      self.onSelectedIdeaClick({ idea: event.detail.idea });
    });
		document.addEventListener('osc-click-mobile-switcher', function(event) {
      self.onClickMobileSwitcher();
    });

    // ideas list events
		document.addEventListener('osc-idea-tile-click', function(event) {
      self.onIdeaClick(event.detail.idea);
    });
		document.addEventListener('osc-idea-tile-mouse-over', function(event) {
      self.onTileMouseOver(event.detail.idea);
    });
		document.addEventListener('osc-idea-tile-mouse-out', function(event) {
      self.onTileMouseOut(event.detail.idea);
    });

    // details changes
		document.addEventListener('osc-idea-liked', function(event) {
      self.onIdeaLiked(event.detail);
    });
		document.addEventListener('osc-new-reaction-stored', function(event) {
      self.onReactionStored(event.detail, true);
    });
		document.addEventListener('osc-reaction-edited', function(event) {
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
		document.addEventListener('osc-idea-stored', function(event) {
      document.location.href = "#";
      self.onIdeaStored(event.detail.idea);
    });
		document.addEventListener('osc-update-edit-idea', function(event) {
      self.onUpdateEditIdea(event.detail.idea);
    });
    
	}

  fetchData({ showIdeaDetails, showIdeaSelected }) {

    let self = this;
    let url = `${ self.config.api.url }/api/site/${  self.config.siteId  }/idea?includeVoteCount=1&includeArgsCount=1&includeUser=1`;
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
        // showIdeaDetails = showIdeaDetails || ( window.location.hash.match(/(\w)(\d+)/) && window.location.hash.match(/(\w)(\d+)/)[2] ) || OpenStadComponentLibs.localStorage.get('osc-ideas-on-map-details'); //  document.location.hash.replace(/.*details=(\d+).*/, "$1");
        // showIdeaSelected = showIdeaSelected || OpenStadComponentLibs.localStorage.get('osc-ideas-on-map-selected'); // document.location.hash.replace(/.*selected=(\d+).*/, "$1");
        showIdeaDetails = showIdeaDetails || ( window.location.hash.match(/^#D(\d+)/) && window.location.hash.match(/^#D(\d+)/)[1] );
        showIdeaSelected = showIdeaSelected || ( window.location.hash.match(/^#S(\d+)/) && window.location.hash.match(/^#S(\d+)/)[1] );
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
          // self.setState({ mobileState: self.config.startWithListOpenOnMobile ? 'opened' : 'closed' })
          // self.setSelectedLocation({ lat: 52.37104644463586, lng: 4.900402911007405 })
          // return setTimeout(function(){ self.showIdeaForm() }, 500)
          if (typeof showIdeaSelected == 'object' && showIdeaSelected != null) {
						self.setNewIdea(null);
						self.setSelectedIdea(showIdeaSelected, function() {
              // todo: dit zou hij zelf via state moeten doen
              self.setState({ status: 'idea-selected' });
              self.map.map.invalidateSize();
              self.map.showMarkers({})
            });
          }
          if (typeof showIdeaDetails == 'object' && showIdeaDetails != null) {
						self.setNewIdea(null);
					  self.showIdeaDetails(showIdeaDetails);
          }
          if (window.location.hash.match(/^#newidea/)) {
            // TODO: dit moet ook bestaande ideeen gaan werken
            let hash = window.location.hash;
            let match = hash.match(/&([^&]+)=([^&]+)/g);
            let newIdea = {  };
            if (match) {
              match.forEach((entry) => {
                let [key, val] = entry.split('=');
                key = key.substring(1, key.length);
                newIdea[key] = decodeURIComponent(val);
              });
            }
					  self.setNewIdea(newIdea);
				    self.showIdeaForm(newIdea);
          }
          self.onChangeMapBoundaries();
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
    // if (self.infobar) self.infobar.setState({ mobileState: 'opened' })
    self.setState({ status: 'idea-details' }, function() {
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
    });
  }

  showIdeaForm(idea, next) {
    let self = this;

    if (self.config.idea.formUrl) {
      let url = self.config.idea.formUrl;
      url = url.replace(/:ideaId/, typeof idea.id == 'number' ? idea.id : '');
      url = url.replace(/:location/, idea.location ? JSON.stringify({ lat: idea.location.coordinates[0], lng: idea.location.coordinates[1] }) : '');
      url = url.replace(/:typeId/, idea.typeId);
      url = url.replace(/:address/, idea.address);
      document.location.href = url;
    } else {
      self.setState({ status: 'idea-form', editIdea: idea }, function() {
        self.map.map.invalidateSize();
        self.map.hideMarkers({ exception: { location: idea && idea.location && { lat: idea.location.coordinates[0], lng: idea.location.coordinates[1] } || self.map.selectedLocation } })
        if (next) next();
      });
    }

  }

  hideIdeaForm() {
    let self = this;
    if (this.state.editIdea && typeof this.state.editIdea.id == 'number') {
      let idea = self.state.ideas.find(idea => idea.id == self.state.editIdea.id)
      self.showIdeaDetails(idea)
      document.location.href = "#D" + idea.id
    } else {
      document.location.href='#';
      if (self.state.editIdea && self.state.editIdea.location) {
        self.setState({ status: 'location-selected' }, function() {
          // todo: dit zou hij zelf via state moeten doen
          self.map.map.invalidateSize();
          self.map.showMarkers({})
          self.setNewIdea(self.state.editIdea)
        });
      } else {
        self.setState({ status: 'default' }, function() {
          self.map.map.invalidateSize();
          self.map.showMarkers({})
          self.setNewIdea(null)
        });
      }
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

  getVisibleIdeas() {
		if ( this.state.mobileState == 'opened' ) { // werkt omdat hij alleen op mobiel opend kan zijn
      console.log(1);
      return this.state.visibleIdeas;
    } else {
      console.log(2);
      let visibleIdeas = this.map.getVisibleIdeas()
      this.setState({ visibleIdeas });
      return visibleIdeas;
    }
  }

  setSelectedLocation(location) {

    let self = this;

    self.map && self.map.setSelectedLocation(location)

    if (location)  {
      if (self.infobar.ideaform) {
        self.infobar.ideaform.handleLocationChange({ location, address: 'Bezig met adresgegevens ophalen...' });
			  self.map.getPointInfo(location, null, function(json, marker) {
				  let address = json && json._display || 'Geen adres gevonden';
				  self.state.editIdea.address = address;
				  self.infobar.ideaform.handleLocationChange({ location, address: address });
			  })
      }
    } else {
      self.map && self.map.unfadeAllMarkers();
      self.setSelectedIdea(null);
      this.setState({ status: 'default', newIdea: null, editIdea: null }, function() {
      });
    }

  }

  setNewIdea(idea) {
    let self = this;
    if (idea) idea.isPointInPolygon = idea.location && self.map.isPointInPolygon( { lat: idea.location.coordinates[0], lng: idea.location.coordinates[1] }, self.config.map.polygon )
    self.setState({ editIdea: idea }, function() {
      if (idea) {
        self.map.fadeMarkers({exception: [idea.location]});
        if (idea.location) self.setSelectedLocation({ lat: idea.location.coordinates[0], lng: idea.location.coordinates[1] });  
        if (self.infobar) {
          self.setState({ editIdea: self.state.editIdea });
          if (idea.location) {
            self.infobar.setNewIdea({ ...self.state.editIdea, address: 'Bezig met adresgegevens ophalen...' });
            self.map.getPointInfo({ lat: idea.location.coordinates[0], lng: idea.location.coordinates[1] }, null, function(json, marker) {
              let address = json && json._display || 'Geen adres gevonden';
              let editIdea = self.state.editIdea;
              editIdea.address = address;
              self.setState({ editIdea });
              self.infobar.setNewIdea({ ...self.state.editIdea, address });
            })
          } else {
            self.infobar.setNewIdea({ ...self.state.editIdea, address: 'Geen locatie geselecteerd...' });
          }
          self.infobar.updateIdeas({ ideas: self.state.ideas.filter( x => x.id != idea.id ), sortOrder: 'distance', hideSortButton: true, center: { lat: idea.location.coordinates[0], lng: idea.location.coordinates[1] }, maxLength: 5 });
        }
      } else {
        self.map.unfadeAllMarkers();
        if (self.infobar) {
          self.infobar.setNewIdea(null);
          self.infobar.updateIdeas({ ideas: self.getVisibleIdeas(), hideSortButton: false });
        }
      }
    });
  }

  setSelectedIdea(idea, next) {

    let self= this;

    self.setState({ selectedIdea:idea }, () => {
      if (idea) {
        self.map.fadeMarkers({exception: idea});
        if (self.infobar) {
          self.infobar.setSelectedIdea(idea);
          self.infobar.updateIdeas({ ideas: self.state.ideas.filter( x => x.id != idea.id ), sortOrder: 'distance', hideSortButton: true, center: { lat: idea.location.coordinates[0], lng: idea.location.coordinates[1] }, maxLength: 5 });
        }
      } else {
        self.map && self.map.unfadeAllMarkers();
        if (self.infobar) {
          self.infobar.setSelectedIdea(null);
          self.infobar.updateIdeas({ ideas: self.getVisibleIdeas(), hideSortButton: false });
        }
      }
      if (typeof next == 'function') return next();
    })

  }
  
	onMapClick(event, forceSelectLocation) {

		if ( this.state.mobileState == 'opened' ) { // werkt omdat hij alleen op mobiel opend kan zijn
			this.infobar.setState({ mobileState: 'closed' })
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
        this.setSelectedIdea(null);
        if (( this.state.selectedIdea || this.map.selectedLocation ) && !forceSelectLocation) {
          this.setState({ ...this.state, status: 'default' });
          document.location.href='#';
          this.setSelectedLocation(null);
          this.setNewIdea(null);
          this.infobar.updateIdeas({ ideas: this.getVisibleIdeas(), hideSortButton: false });
        } else {
          if (!this.config.canSelectLocation) break;
          this.setState({ ...this.state, status: 'location-selected' });
          let newIdea = { id: 'New Idea', location: { coordinates: [ event.latlng.lat, event.latlng.lng ] } };
          this.setNewIdea(newIdea);
        }
        this.map.updateFading();
        document.querySelector('#osc-ideas-on-map-info').scrollTo(0,0)
    }
  }

	onMarkerClick(event) {

		if ( this.state.mobileState == 'opened' ) { // werkt omdat hij alleen op mobiel opend kan zijn
			this.infobar.setState({ mobileState: 'closed' })
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
          this.setSelectedIdea(null);
          this.setState({ status: 'default' });
          this.setNewIdea(null);
          this.onUpdateSelectedIdea(null);
        } else {
          this.setSelectedIdea(event.target.data, () => {
            this.setState({ status: 'idea-selected' });
            this.setNewIdea(null);
            this.onUpdateSelectedIdea(event.target.data);
          });

        }
        document.querySelector('#osc-ideas-on-map-info').scrollTo(0,0)

    }
  }

	onClusterClick(event) {

		if ( this.state.mobileState == 'opened' ) { // werkt omdat hij alleen op mobiel opend kan zijn
			this.infobar.setState({ mobileState: 'closed' })
			this.setState({ mobileState: 'closed' }, function() {
				this.map.map.invalidateSize();
			})
			return;
		}

    this.setState({ status: 'default' });
    this.setNewIdea(null);
    this.setSelectedIdea(null);
  }

  onChangeMapBoundaries() {
    let self = this;
    console.log('change', self.state.status, self.map);
    if (!self.map) return;
    self.map.updateFading();
    switch (self.state.status) {

      case 'idea-details':
        break;

      case 'idea-form':
        break;

      case 'idea-selected':
      case 'location-selected':
        if (self.infobar) {
          let selectedIdea = self.state.selectedIdea || self.state.editIdea;
          if (selectedIdea) {
            self.infobar.updateIdeas({ ideas: self.state.ideas.filter( x => x.id != selectedIdea.id ), sortOrder: 'distance', hideSortButton: true, center: { lat: selectedIdea.location.coordinates[0], lng: selectedIdea.location.coordinates[1] }, maxLength: 5 });
          }
        }
        break;

      default:
        if (self.infobar) {
          self.infobar.updateIdeas({ ideas: self.getVisibleIdeas(), hideSortButton: false });
        }

    }
  }

	onUpdateEditIdea(idea) {
    this.setSelectedIdea(idea);
    this.setState({ editIdea: { ...idea } });
  }

	onUpdateSelectedIdea(idea) {
    if (this.state.editIdea) this.setNewIdea(null);
    let status = idea ? 'idea-selected' : 'default';
    if (idea) {
      document.location.href='#S'+idea.id;
    } else {
      document.location.href = "#";
    }
    this.setState({ status }, function() {
      this.setSelectedIdea(idea);
    });
  }

  onIdeaClick(idea) {
    // let showDetails = this.state.status == 'location-selected' || this.state.status == 'idea-selected';
    if (this.state.editIdea) this.setNewIdea(null);

    this.setSelectedIdea(idea, () => {
      this.setState({ status: 'idea-selected' }, function() {
        document.location.href = "#D" + idea.id;
      })
    });

  };

  onEditIdeaClick(idea) {
    let self = this;
    let location = { lat: idea.location.coordinates[0], lng: idea.location.coordinates[1] };
    self.showIdeaForm(idea, () => {
      // todo: dit werkt niet meer nu self.infobar.ideaform in de infobar zit
      self.infobar.ideaform.handleLocationChange({ location, address: 'Bezig met adresgegevens ophalen...' });
		  self.map.getPointInfo(location, null, function(json, marker) {
			  let address = json && json._display || 'Geen adres gevonden';
			  self.state.editIdea.address = address;
			  self.infobar.ideaform.handleLocationChange({ location, address: address });
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

  onSelectedIdeaClick({ idea }) {
    document.location.href = "#D" + idea.id
  };
  
  onNewIdeaClick({ idea }) {
    let self = this;
    let editIdea = this.state.editIdea || {};
    editIdea.typeId = idea.typeId;
    self.showIdeaForm(editIdea, () => {
      if (this.state.editIdea && this.state.editIdea.location) {
        let location = { lat: this.state.editIdea.location.coordinates[0], lng: this.state.editIdea.location.coordinates[1] };
      // todo: dit werkt niet meer nu self.infobar.ideaform in de infobar zit
        self.infobar.ideaform.handleLocationChange({ location, address: 'Bezig met adresgegevens ophalen...' });
		    self.map.getPointInfo(location, null, function(json, marker) {
			    let address = json && json._display || 'Geen adres gevonden';
			    self.state.editIdea.address = address;
			    self.infobar.ideaform.handleLocationChange({ location, address: address });
		    })
      }
    });
  };

  onIdeaStored(idea) {
    let self = this;
    self.setNewIdea(null);
    self.fetchData({showIdeaDetails: idea.id});
  }

  onIdeaLiked(data) {
    let idea = this.state.ideas.find( idea => idea.id == data.ideaId );
    idea.yes += data.change;
  }

  onReactionStored(data, isNew) {
    if (isNew) {
    let idea = this.state.ideas.find( idea => idea.id == data.ideaId );
      idea.argCount++;
    }
  }

  onReactionDeleted(data) {
    let idea = this.state.ideas.find( idea => idea.id == data.ideaId );
    idea.argCount--;
  }
  
  onChangeFilter(filter) {
    console.log(filter);
    
    this.setSelectedIdea(null);
		this.setNewIdea(null);
		this.setSelectedLocation(null);
		this.setState({ status: 'default' })
		this.onChangeMapBoundaries(); // todo: rename
  }
  
  onTileMouseOver(idea) {
    this.map.fadeMarkers({ exception: idea })
    this.map.updateFading();
  }

  onTileMouseOut(idea) {
    this.map.unfadeAllMarkers()
    if (this.state.selectedIdea) {
      this.map.fadeMarkers({exception: this.state.selectedIdea});
    }
    if (this.map.selectedLocation) {
      this.map.fadeMarkers({});
    }
    this.map.updateFading();
  }

  onClickBackToOverview(idea) {
    document.location.href='#S'+this.state.selectedIdea.id;
  }
  
  onClickMobileSwitcher() {
    let self = this;
    if (self.infobar) self.infobar.setState({ mobileState: self.state.mobileState == 'closed' ? 'opened' : 'closed' })
    self.setState({ mobileState: self.state.mobileState == 'closed' ? 'opened' : 'closed' }, function() {
      self.map.map.invalidateSize();
      if (this.state.status == 'location-selected' || this.state.status == 'idea-selected') {
        let selectedIdea = self.state.selectedIdea || self.state.editIdea;
        self.map.setBoundsAndCenter();
      }
    })
  }

	render() {

    let infoHTML = null; // todo: ik denk dat dit naar infobar moet
    let filterHTML = null;
    let mobilePopupHTML = null;

    switch(this.state.status) {

      case 'idea-details':
        infoHTML = (
			    <InfoBar config={this.config} displayType="details" idea={this.state.selectedIdea} className="osc-ideas-on-map-info" ref={el => (this.infobar = el)}/>
        );
        filterHTML = (
				  <div className="osc-ideas-filterbar"><div className="osc-backbutton" onClick={() => this.onClickBackToOverview() }>Terug naar overzicht</div></div>
        );
        break;

      case 'idea-form':
        infoHTML = (
			    <InfoBar config={this.config} displayType="form" idea={{ ...this.state.editIdea, user: this.state.editIdea && this.state.editIdea.user || this.config.user }} className="osc-ideas-on-map-info" ref={el => (this.infobar = el)}/>
        );
        filterHTML = (
				  <div className="osc-ideas-filterbar"><div className="osc-backbutton" onClick={() => this.hideIdeaForm()}>Terug naar {this.state.editIdea && typeof this.state.editIdea.id == 'number' ? 'idee' : 'overzicht'}</div></div>
        );
        break;

      case 'location-selected':
      case 'idea-selected':
        if (this.state.status == 'location-selected') {
          if (this.state.editIdea && this.state.editIdea.isPointInPolygon) {
            mobilePopupHTML = (
              <Preview config={{ ...this.config, display: { type: 'mobilePreview' } }} selectedLocation={this.state.editIdea} />
						);
          }
        } else {
          mobilePopupHTML = (
            <div className="osc-mobile-popup osc-clickable" onClick={ () =>  { this.setState({ mobileState: 'opened' }); this.infobar.setState({ mobileState: 'opened' }); document.location.href = "#D" + this.state.selectedIdea.id; } }>
              <div className="osc-image" style={{ backgroundImage: `url(${this.state.selectedIdea && this.state.selectedIdea.image})` }}></div>
              { eval(this.state.selectedIdea && `this.state.selectedIdea.${this.config.titleField}`) }
            </div>
          );
        }
        infoHTML = (
			    <InfoBar config={this.config} id="osc-ideas-on-map-info" className="osc-ideas-on-map-info" mobileState={this.state.mobileState} ref={el => (this.infobar = el)}/>
        );
        filterHTML = (
          <Filterbar config={this.config} className="osc-ideas-filterbar"/>
        );
        break;

      default:
        infoHTML = (
			    <InfoBar config={this.config} id="osc-ideas-on-map-info" className="osc-ideas-on-map-info" mobileState={this.state.mobileState} ref={el => (this.infobar = el)}/>
        );
        filterHTML = (
          <Filterbar config={this.config} className="osc-ideas-filterbar"/>
        );
        mobilePopupHTML = null;
        break;
            
    }

    let divStyle = {};
    let simpleHTML = null;
    if ( this.config.display.type == 'simple' ) {
      filterHTML = null;
      infoHTML = null;
      mobilePopupHTML = null;
      let buttonHTML = null;
      if (this.config.linkToCompleteUrl) buttonHTML = <button onClick={() => { document.location.href = this.config.linkToCompleteUrl }} className="osc-button-blue" style={{position: 'absolute', top: 20, right: 20}}>Bekijk de volledige kaart</button>
      simpleHTML = (
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1000 }}>
          {buttonHTML}
        </div>)
      if (this.config.display.width) divStyle.width = this.config.display.width;
      if (this.config.display.height) divStyle.height = this.config.display.height;
    }

    return (
			<div id={this.divId} className={`osc-ideas-on-map osc-ideas-on-map-${this.state.status} osc-mobile-${this.state.mobileState}`} style={divStyle} ref={el => (this.instance = el)}>
        {filterHTML}
        {infoHTML}
        <div className={`osc-ideas-on-map-map osc-ideas-on-map-map-${this.config.display.type}`}>
			    <Map id={this.divId + '-map'} config={{ ...this.config.map, types: this.config.types, typeField: this.config.typeField, zoomControl: this.config.display.type == 'simple' ? false : true }} ref={el => (this.map = el)}/>
        </div>
        {simpleHTML}
        {mobilePopupHTML}
			</div>
    );

  }

}
