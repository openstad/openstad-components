'use strict';

import merge from 'merge';
import { isMobile } from 'react-device-detect';

import Filterbar from './filterbar.jsx';
import InfoBar from './infobar.jsx';
import Preview from './preview.jsx';
import Map from './map.jsx';

import OpenStadComponent from '../../component/index.jsx';
import OpenStadComponentLibs from '../../libs/index.jsx';

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
      onMarkerClickAction: 'selectIdea',
      types: [],
      typeField: null,
      titleField: 'title',
      summaryField: 'summary',
      user: {},
      sort: {},
      map: {},
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
      search: {
        addresssesMunicipality: 'amsterdam',
      }
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

      status: 'default', // default, idea-selected, location-selected, idea-details, idea-form
      infobarOnMobileIsOpen: false,

      ideas: [],
      visibleIdeas: [], // todo: dit wordt niet gebruikt; het gaat steeds via getVisibleIdeas maar deze state zou dus beter zijn
      listedIdeas: [],

      selectedIdea: null,
      selectedLocation: null,
      currentEditIdea: null,
      
    }

  }

	componentDidMount() {

    let self = this;

    window.addEventListener( 'hashchange', e => {
      let match = window.location.hash.match(/(\w)(\d+)$/);
      if (match) {
        let ideaId = match[2];
        let idea = self.state.ideas && self.state.ideas.find(idea => idea.id == ideaId);
        if (match[1] == 'D') {
          self.showIdeaDetails(idea)
        }
        if (match[1] == 'S') {
          self.hideIdeaDetails()
        }
      } else {
        if (self.state.status == 'idea-details') self.hideIdeaDetails()
        if (self.state.status == 'idea-selected') self.setSelectedIdea(null)
      }
    }, false );

    // when the map is ready
		document.addEventListener('osc-map-is-ready', function(e) {

      // fetch the data
      self.fetchData({});

      // handle map changes
      self.map.map.on('zoomend', () => {
        self.onChangeMapBoundaries();
      });
      self.map.map.on('moveend', () => {
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
      // wordt gebruikt door close preview
      self.setSelectedLocation(null);
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
		document.addEventListener('osc-idea-tile-mouse-enter', function(event) {
      self.onTileMouseEnter(event.detail.idea);
    });
		document.addEventListener('osc-idea-tile-mouse-leave', function(event) {
      self.onTileMouseLeave(event.detail.idea);
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
		document.addEventListener('osc-edit-idea-button-click', function(event) {
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
        if(!showIdeaDetails && OpenStadComponentLibs.localStorage.get('osc-login-pending-show-details')) {
          showIdeaDetails = OpenStadComponentLibs.localStorage.get('osc-login-pending-show-details');
          OpenStadComponentLibs.localStorage.remove('osc-login-pending-show-details');
        }
        showIdeaSelected = showIdeaSelected || ( window.location.hash.match(/^#S(\d+)/) && window.location.hash.match(/^#S(\d+)/)[1] );
        let ideas = json.filter( idea => idea.location )
        self.updateListedIdeas({ ideas, sortOrder: self.config.sort.defaultValue });

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
          self.setInfobarOnMobileIsOpen(self.config.startWithListOpenOnMobile)
          if (typeof showIdeaSelected == 'object' && showIdeaSelected != null) {
						self.setCurrentEditIdea(null);
						self.setSelectedIdea(showIdeaSelected, () => {
              // ??
              // self.map.showMarkers({})
            });
          }

          if (typeof showIdeaDetails == 'object' && showIdeaDetails != null) {
					  self.showIdeaDetails(showIdeaDetails);
          }
          if (window.location.hash.match(/^#newidea/)) {
            // TODO: dit moet ook bestaande ideeen gaan werken
            let hash = window.location.hash;
            let match = hash.match(/&([^&]+)=([^&]+)/g);
            let idea = {};
            if (match) {
              match.forEach((entry) => {
                let [key, val] = entry.split('=');
                key = key.substring(1, key.length);
                idea[key] = decodeURIComponent(val);
                try {
                  idea[key] = JSON.parse(idea[key])
                } catch (err) {}
              });
            }
            self.setCurrentEditIdea(idea, currentEditIdea => {
              if (currentEditIdea.location) self.setSelectedLocation(currentEditIdea.location)
				      self.showIdeaForm();
            })
          }
          self.onChangeMapBoundaries();
				});

      })
      .catch((err) => {
        console.log('Niet goed');
        console.log(err);
      });

  }

  updateListedIdeas({ ideas = this.getVisibleIdeas(), sortOrder = this.state.currentSortOrder, center = { lat: 52.37104644463586, lng: 4.900402911007405 }, maxLength }) {
    if (sortOrder) {
      ideas = OpenStadComponentLibs.ideasSort({ ideas, sortOrder, center })
    }
    if (maxLength) {
      ideas = ideas.splice(0, maxLength)
    }
    this.setState({ listedIdeas : ideas });
  }

  setSelectedIdea(idea, next) {
    let self= this;
    self.setCurrentEditIdea(null);
    self.setSelectedLocation(null);
    let status = idea ? ( self.state.status ==  'idea-details' ? 'idea-details' : 'idea-selected' ) : self.state.status; // TODO: en nu leesbaar
    self.setState({ selectedIdea: idea, status }, () => {
      if (idea) {
        self.map.fadeMarkers({exception: idea});
        self.updateListedIdeas({ ideas: self.state.ideas.filter( i => i.id != idea.id ), sortOrder: 'distance',  center: { lat: idea.location.coordinates[0], lng: idea.location.coordinates[1] }, maxLength: 5 });
      } else {
        self.map && self.map.unfadeAllMarkers();
        self.updateListedIdeas({ ideas: self.getVisibleIdeas() });
      }
      if (next) return next(idea);
    })

  }

  setSelectedLocation(location, next) {

    let self = this;

    if (location && location.coordinates) {
      location.lat = location.coordinates[0];
      location.lng = location.coordinates[1];
    }

    self.map && self.map.setSelectedLocation(location)

    if (location) {
      location.isPointInPolygon = self.map.isPointInPolygon(location, self.config.map.polygon )

      self.map.fadeMarkers({});
      let id = self.state.selectedIdea && self.state.selectedIdea.id;
      self.updateListedIdeas({ ideas: self.state.ideas.filter( idea => idea.id != id ), sortOrder: 'distance',  center: location, maxLength: 5 });

      self.setState({ selectedLocation: location }, () => {
        if (self.state.currentEditIdea) {
          self.updateCurrentEditIdea({ location }, idea => {
            self.updateLocationAddress(location)
          });
        }
        if (next) next(self.state.selectedLocation)
      })

	    var event = new window.CustomEvent('osc-update-location', { detail: { location } });
	    document.dispatchEvent(event);

    } else {
      self.setState({ selectedLocation: null }, () => {
        self.map.unfadeAllMarkers();
        self.updateListedIdeas({ ideas: self.getVisibleIdeas() });
	      var event = new window.CustomEvent('osc-update-location', { detail: { location } });
	      document.dispatchEvent(event);
        if (next) next(self.state.selectedLocation)
      });
    }

  }
  

  updateLocationAddress(location) {

    let self = this;
    if (!location) return;

    if (location.coordinates) {
      location.lat = location.coordinates[0];
      location.lng = location.coordinates[1];
    }

  	self.map.searchAddressByLatLng({
      latlng: location,
      addresssesMunicipality: self.config.search.addresssesMunicipality,
      next: function(json) {
        location.address = json && json.address || 'Geen adres gevonden';
	      var event = new window.CustomEvent('osc-update-location', { detail: { location } });
	      document.dispatchEvent(event);
      }
    });
        
  }
  
  showIdeaDetails(idea) {
    let self = this;
    self.setSelectedIdea(idea);
    self.openInfobarOnMobile();
    self.setState({ status: 'idea-details' }, () => {
      // self.map.map.invalidateSize();
      // self.map.hideMarkers({ exception: { location: { lat: idea.location.coordinates[0], lng: idea.location.coordinates[1] } } })
      this.map.fadeMarkers({ exception: idea })
      self.map.map.invalidateSize();
      self.map.map.panTo({ lat: idea.location.coordinates[0], lng: idea.location.coordinates[1] });
    });
  }

  hideIdeaDetails() {
    let self = this;
    self.setState({ status: 'idea-selected' }, () => {
      // todo: dit zou hij zelf via state moeten doen
      // self.map.map.invalidateSize();
      let selectedIdea = self.state.selectedIdea;
      if (selectedIdea) {
        self.updateListedIdeas({ ideas: self.state.ideas.filter( idea => idea.id != selectedIdea.id ), sortOrder: 'distance',  center: { lat: selectedIdea.location.coordinates[0], lng: selectedIdea.location.coordinates[1] }, maxLength: 5 });
      }
      self.map.showMarkers({})
      self.map.map.invalidateSize();
    });
  }

  setCurrentEditIdea(idea, next) {
    let self = this;
    let currentEditIdea = idea;
    return self.setState({ currentEditIdea }, () => {
      let location = currentEditIdea && location || null;
      // if (idea == null) self.setSelectedLocation(location)
      if (next) return next(currentEditIdea);
    })
  }

  updateCurrentEditIdea(data, next) {
    let currentEditIdea = this.state.currentEditIdea;
    currentEditIdea = merge.recursive(currentEditIdea, data);
    return this.setCurrentEditIdea(currentEditIdea, next);
  }

  showIdeaForm() {

    let self = this;
    let idea = self.state.currentEditIdea;

    if (self.config.idea.formUrl) {

      // external form: add data and ignore the rest
      let url = self.config.idea.formUrl;
      url = url.replace(/:ideaId/, typeof idea.id == 'number' ? idea.id : '');
      url = url.replace(/:location/, idea.location ? JSON.stringify({ lat: idea.location.coordinates[0], lng: idea.location.coordinates[1] }) : '');
      url = url.replace(/:typeId/, idea.typeId);
      url = url.replace(/:address/, idea.address);
      document.location.href = url;

    } else {

      // internal form
      self.setState({ status: 'idea-form' }, () => {
        self.map.map.invalidateSize();
        self.map.hideMarkers({ exception: { location: idea && idea.location && { lat: idea.location.coordinates[0], lng: idea.location.coordinates[1] } || self.map.selectedLocation } })
        let location = idea.location || self.state.selectedLocation;
        // todo: deze doet het nu dus niet
        self.updateLocationAddress(location);
      });
    }

    
  }

  hideIdeaForm() {
    let self = this;
    if (this.state.currentEditIdea && typeof this.state.currentEditIdea.id == 'number') {
      let idea = self.state.ideas.find(idea => idea.id == self.state.currentEditIdea.id)
      self.showIdeaDetails(idea)
      document.location.href = "#D" + idea.id
    } else {
      let location = self.state.currentEditIdea && self.state.currentEditIdea.location || self.state.selectedLocation;
      if (location) {
        location.isPointInPolygon = this.map.isPointInPolygon(location, this.config.map.polygon )
        self.setState({ status: 'location-selected' }, () => {
          self.map.showMarkers({})
        });
      } else {
        self.setState({ status: 'default' }, () => {
          self.map.showMarkers({})
          self.setCurrentEditIdea(null)
        });
      }
    }
  }

  setInfobarOnMobileIsOpen(what, callback) {
    this.setState({ infobarOnMobileIsOpen: what })
    if (callback) callback()
  }

  openInfobarOnMobile(callback) {
    this.setState({ infobarOnMobileIsOpen: true })
    if (callback) callback()
  }

  closeInfobarOnMobile(callback) {
    this.setState({ infobarOnMobileIsOpen: false })
    if (callback) callback()
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
					onClick: () => {
            self.onUpdateSelectedIdea(idea)
          },
				})
			}
		});

    // search for addresses
  	self.map.suggestAddresses({
      searchValue: searchValueLc,
      addresssesMunicipality: self.config.search.addresssesMunicipality,
      next: function(json) {
        searchResult.locations = json && json.map(result => {
				  result.onClick = () => onClickAddress(result.id);
          return result;
        });
        callback(searchValue, searchResult)
      }
    });

    function onClickAddress(id) {
  	  self.map.LookupLatLngByAddressId({
        id,
        addresssesMunicipality: self.config.search.addresssesMunicipality,
        next: function(json) {
          let centroide_ll = json.centroide_ll;
          let match = centroide_ll.match(/POINT\((\d+\.\d+) (\d+\.\d+)\)/);
          self.map.map.panTo(new L.LatLng(match[2], match[1]));
          self.onMapClick({ latlng: { lat: match[2], lng: match[1] } }, true)
        }
      });
    }

	}

  getVisibleIdeas() {
    let visibleIdeas = this.map.getVisibleIdeas()
    this.setState({ visibleIdeas });
    return visibleIdeas;
  }
  
	onMapClick(event, forceSelectLocation) {

		if ( this.state.infobarOnMobileIsOpen == true && isMobile) {
      this.closeInfobarOnMobile()
			return;
		}

    switch (this.state.status) {

      case 'idea-details':
        this.hideIdeaDetails();
        document.location.href='#S'+this.state.selectedIdea.id;
        break;

      case 'idea-form':
        let isPointInPolygon = this.map.isPointInPolygon( event.latlng, this.config.map.polygon );
        if (isPointInPolygon) this.setSelectedLocation(event.latlng)
        break;

      default:
        if (( this.state.selectedIdea || this.state.selectedLocation ) && !forceSelectLocation) {
          this.setState({ status: 'default' });
          document.location.href='#';
          this.setSelectedIdea(null);
          this.updateListedIdeas({ ideas: this.getVisibleIdeas(),  });
        } else {
          if (!this.config.canSelectLocation) break;
          this.setSelectedLocation(event.latlng, location => {
            this.setState({ status: 'location-selected' });
            this.updateLocationAddress(location)
          });
        }
        this.map.updateFading();
        document.querySelector('#osc-ideas-on-map-info').scrollTo(0,0)
    }

  }

	onMarkerClick(event) {

		if ( this.state.infobarOnMobileIsOpen == true && isMobile ) {
      this.closeInfobarOnMobile()
			return;
		}

		switch (this.state.status) {

      case 'idea-details':
        this.onUpdateSelectedIdea(event.target.data);
        document.location.href = "#D" + event.target.data.id;
        document.querySelector('#osc-ideas-on-map-info') && document.querySelector('#osc-ideas-on-map-info').scrollTo(0,0)
        break;

      case 'idea-form':
        break;

      default:
        if (this.state.currentEditIdea || this.state.selectedLocation) {
          this.setSelectedIdea(null);
          this.setState({ status: 'default' });
          this.setCurrentEditIdea(null);
          this.onUpdateSelectedIdea(null);
        } else {
          this.onUpdateSelectedIdea(event.target.data);
          if ( this.config.onMarkerClickAction == 'showIdeaDetails' ) {
            document.location.href = "#D" + event.target.data.id;
          }
        }
        document.querySelector('#osc-ideas-on-map-info') && document.querySelector('#osc-ideas-on-map-info').scrollTo(0,0)

    }
  }

	onClusterClick(event) {

		if ( this.state.infobarOnMobileIsOpen == true && isMobile ) {
      this.closeInfobarOnMobile()
			return;
		}

    this.setState({ status: 'default' });
    this.setCurrentEditIdea(null);
    this.setSelectedIdea(null);
  }

  onChangeMapBoundaries() {
    let self = this;
    if (!self.map) return;
    self.map.updateFading();
    switch (self.state.status) {

      // case 'idea-details':
      //   break;

      case 'idea-form':
        break;

      case 'idea-selected':
      case 'location-selected':
        if (self.infobar) {
          let selectedIdea = self.state.selectedIdea || self.state.currentEditIdea;
          if (selectedIdea) {
            self.updateListedIdeas({ ideas: self.state.ideas.filter( idea => idea.id != selectedIdea.id ), sortOrder: 'distance',  center: { lat: selectedIdea.location.coordinates[0], lng: selectedIdea.location.coordinates[1] }, maxLength: 5 });
          }
        }
        break;

      default:
        if (self.infobar) {
          self.updateListedIdeas({ ideas: self.getVisibleIdeas() });
        }

    }
  }

	onUpdateSelectedIdea(idea) {
    let status = 'default';
    if (idea) {
      if (this.state.status == 'idea-details') {
        document.location.href='#D'+idea.id;
        status = 'idea-details';
      } else {
        document.location.href='#S'+idea.id;
        status = 'idea-selected';
      }
    } else {
      document.location.href = "#";
    }
    this.setState({ status }, () => {
      this.setSelectedIdea(idea);
    });
  }

  onIdeaClick(idea) {
    document.location.href = "#D" + idea.id;
  };

  onEditIdeaClick(idea) {
    let self = this;
    self.setCurrentEditIdea(idea, currentEditIdea => {
      self.showIdeaForm()
    });
  };

  onIdeaDeleted(ideaId) {
    let self = this;
    self.setCurrentEditIdea(null);
    self.setSelectedIdea(null);
    self.setSelectedLocation(null);
    self.setState({ status: 'default' }, () => {
      // self.map.map.invalidateSize();
      self.map.setBoundsAndCenter();
      self.fetchData({});
    });
  };

  onDeleteIdeaClick(idea) {
    console.log('Delete idea', idea.id);
  }

  onSelectedIdeaClick({ idea }) {
    document.location.href = "#D" + idea.id
  }
  
  onNewIdeaClick({ idea }) {
    let self = this;
    let editIdea = merge.recursive(this.state.currentEditIdea || {}, this.state.selectedLocation);
    editIdea.typeId = idea && idea.typeId;
    self.setCurrentEditIdea(editIdea, currentEditIdea => {
      self.showIdeaForm()
    });
  }

  onIdeaStored(idea) {
    this.setCurrentEditIdea(null);
    this.fetchData({showIdeaDetails: idea.id});
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
    this.setSelectedIdea(null);
    this.setCurrentEditIdea(null);
		this.setSelectedLocation(null);
		this.setState({ status: 'default' })
		this.onChangeMapBoundaries(); // todo: rename
  }
  
  onTileMouseEnter(idea) {
    this.map.fadeMarkers({ exception: idea })
    this.map.updateFading();
  }

  onTileMouseLeave(idea) {
    
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
    this.hideIdeaDetails();
    document.location.href='#S'+this.state.selectedIdea.id;
  }
  
  onClickMobileSwitcher() {
    let self = this;
    self.setInfobarOnMobileIsOpen( !this.state.infobarOnMobileIsOpen, result => {
      if (self.state.status == 'location-selected' || this.state.status == 'idea-selected') {
        let selectedIdea = self.state.selectedIdea || self.state.currentEditIdea;
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
			    <InfoBar config={this.config} displayType="details" selectedIdea={this.state.selectedIdea} idea={this.state.selectedIdea} className="osc-ideas-on-map-info" ref={el => (this.infobar = el)}/>
        );
        filterHTML = (
				  <div className="osc-ideas-filterbar"><div className="osc-backbutton" onClick={() => this.onClickBackToOverview() }>Terug naar overzicht</div></div>
        );
        break;

      case 'idea-form':
        infoHTML = (
			    <InfoBar config={this.config} displayType="form" selectedIdea={this.state.selectedIdea} idea={{ ...this.state.currentEditIdea, user: this.state.currentEditIdea && this.state.currentEditIdea.user || this.config.user }} className="osc-ideas-on-map-info" ref={el => (this.infobar = el)}/>
        );
        filterHTML = (
				  <div className="osc-ideas-filterbar"><div className="osc-backbutton" onClick={() => this.hideIdeaForm()}>Terug naar {this.state.currentEditIdea && typeof this.state.currentEditIdea.id == 'number' ? 'idee' : 'overzicht'}</div></div>
        );
        break;

      case 'location-selected':
      case 'idea-selected':
        if (this.state.status == 'location-selected') {
          let location = this.state.selectedLocation || this.state.currentEditIdea && this.state.currentEditIdea.location || {};
          location.isPointInPolygon = this.map.isPointInPolygon(location, this.config.map.polygon )
          if (location.isPointInPolygon) {
            mobilePopupHTML = (
              <Preview config={{ ...this.config, display: { type: 'mobilePreview' } }} selectedLocation={location} />
						);
          }
        } else {
          mobilePopupHTML = (
            <div className="osc-mobile-popup osc-clickable" onClick={ () =>  { this.openInfobarOnMobile(); document.location.href = "#D" + this.state.selectedIdea.id; } }>
              <div className="osc-image" style={{ backgroundImage: `url(${this.state.selectedIdea && this.state.selectedIdea.image})` }}></div>
              { eval(this.state.selectedIdea && `this.state.selectedIdea.${this.config.titleField}`) }
            </div>
          );
        }
        infoHTML = (
			    <InfoBar config={this.config} selectedIdea={this.state.selectedIdea} selectedLocation={this.state.selectedLocation} currentEditIdea={this.state.currentEditIdea} ideas={this.state.listedIdeas} id="osc-ideas-on-map-info" className="osc-ideas-on-map-info" infobarOnMobileIsOpen={this.state.infobarOnMobileIsOpen} ref={el => (this.infobar = el)}/>
        );
        filterHTML = (
          <Filterbar config={this.config} className="osc-ideas-filterbar"/>
        );
        break;

      default:
        infoHTML = (
			    <InfoBar config={this.config} selectedIdea={this.state.selectedIdea} ideas={this.state.listedIdeas} id="osc-ideas-on-map-info" className="osc-ideas-on-map-info" infobarOnMobileIsOpen={this.state.infobarOnMobileIsOpen} ref={el => (this.infobar = el)}/>
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
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 400 }}>
          {buttonHTML}
        </div>)
      if (this.config.display.width) divStyle.width = this.config.display.width;
      if (this.config.display.height) divStyle.height = this.config.display.height;
    }

    return (
			<div id={this.divId} className={`osc-ideas-on-map osc-ideas-on-map-${this.state.status} osc-mobile-${this.state.infobarOnMobileIsOpen ? 'opened' : 'closed'}`} style={divStyle} ref={el => (this.instance = el)}>
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
