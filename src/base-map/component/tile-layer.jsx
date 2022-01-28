'use strict';

import OpenStadComponent from '../../component/index.jsx';
import { TileLayer } from 'react-leaflet'

export default class OpenStadComponentMapTileLayer extends OpenStadComponent {

  render() {

    switch(this.props.variant) {
			case "n9r":
        return (
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
	          minZoom={ typeof this.props.minZoom != 'undefined' ? this.props.minZoom : 0 }
	          maxZoom={ typeof this.props.maxZoom != 'undefined' ? this.props.maxZoom : 19 }
            subdomains="abcd"
          />)
        break;
			case "amaps":
        return (
				  <TileLayer
            url="https://t{s}.data.amsterdam.nl/topo_wm/{z}/{x}/{y}.png"
	          subdomains="1234"
	          minZoom={ typeof this.props.minZoom != 'undefined' ? this.props.minZoom : 11 }
	          maxZoom={ typeof this.props.maxZoom != 'undefined' ? this.props.maxZoom : 21 }
          />)
				break;
			case "openstreetmaps":
        return (
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
	          minZoom={ typeof this.props.minZoom != 'undefined' ? this.props.minZoom : 0 }
	          maxZoom={ typeof this.props.maxZoom != 'undefined' ? this.props.maxZoom : 19 }
            subdomains="abc"
            attribution="<a href='https://www.openstreetmap.org/copyright'>© OpenStreetMap contributors</a>"

          />)
        break;
			case "custom":
        return (
          <TileLayer
            url={this.props.mapTiles && this.props.mapTiles.url || 'https://service.pdok.nl/brt/achtergrondkaart/wmts/v2_0/standaard/EPSG:3857/{z}/{x}/{y}.png'}
	          minZoom={ typeof this.props.minZoom != 'undefined' ? this.props.minZoom : 0 }
	          maxZoom={ typeof this.props.maxZoom != 'undefined' ? this.props.maxZoom : 19 }
            subdomains={this.props.mapTiles && this.props.mapTiles.subdomains || ''}
            attribution={this.props.mapTiles && this.props.mapTiles.attribution}
          />)
        break;
			default:
			case "nlmaps":
        return (
          <TileLayer
            url="https://service.pdok.nl/brt/achtergrondkaart/wmts/v2_0/standaard/EPSG:3857/{z}/{x}/{y}.png"
	          minZoom={ typeof this.props.minZoom != 'undefined' ? this.props.minZoom : 6 }
	          maxZoom={ typeof this.props.maxZoom != 'undefined' ? this.props.maxZoom : 19 }
	          bounds={[[50.5, 3.25], [54, 7.6]]}
	          attribution="Kaartgegevens &copy; <a href='kadaster.nl'>Kadaster</a"
          />)
		}

  }

}
