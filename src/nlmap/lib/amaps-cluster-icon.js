export default function amapsCreateClusterIcon(cluster) {

  let self = this;
  let count = cluster.getChildCount();

  if (self.config.typeField && self.config.types && self.config.types.length) {
    
    // todo: configurable
    let count = cluster.getChildCount();
    let markers = cluster.getAllChildMarkers();

    let colors = {}
    let total = markers.length;
    let isFaded = false;
    markers.forEach((entry) => {
      let type = entry.data && eval(`entry.data.${self.config.typeField}`);
      let tmp = self.config.types.find(entry => entry.name == type);
      let color = tmp && tmp.color || 'black';
      if ( type == undefined ) type = 'undef'
      if ( !colors[color] ) colors[color] = 0;
      colors[color]++;
      if (entry.data && entry.data.isFaded) isFaded = true;
    });

    let html = '<svg viewBox="0 0 36 36"><circle cx="18" cy="18" r="14" fill="white"/>'

    let soFar = 0;
    Object.keys(colors).forEach((key) => {
      let myColor = key;
      let perc = 100 * colors[key] / total;
      let angle = (soFar / 100) * 360;
      
      html += `  <path
             d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
             fill="none"
             transform="rotate(${angle}, 18, 18)"
             stroke="${myColor}"
             stroke-width="4"
             stroke-dasharray="${perc}, 100"
             />`;
      soFar = soFar + perc;
    });

    html += '<text x="18" y="21" text-anchor="middle" class="openstad-component-ideas-on-map-icon openstad-component-ideas-on-map-icon-text">' + count + '</text></svg>';

    return L.divIcon({ html: html, className: 'openstad-component-ideas-on-map-icon-cluster', iconSize: L.point(36, 36), iconAnchor: [18, 18], isFaded });

  } else {

		return L.divIcon({ html: count, className: 'openstad-component-ideas-on-map-icon-cluster', iconSize: L.point(20, 20), iconAnchor: [20, 10] });

	}

}
