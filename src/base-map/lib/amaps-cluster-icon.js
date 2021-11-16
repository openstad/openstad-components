export default function amapsCreateClusterIcon(cluster, markers) {

  let self = this;
  
  let clusterMarkers = cluster.getAllChildMarkers();
  // het probleem lig hier: deze data is niet geupdate, en dus kun je niet zien of isfaded is gezet

  let colors = {}
  let total = clusterMarkers.length;
  let isFaded = true;
  clusterMarkers.forEach((clusterMarker) => {
    // find this marker in the actual markers list because the clusterMarker is not updated
    let marker = markers.find(marker => marker.lat == clusterMarker.options.lat && marker.lng == clusterMarker.options.lng);
    if (!marker) return console.log('Marker not found:', clusterMarker)
    let category = marker && marker.data && eval(`marker.data.${self.config.categorize.categorizeByField}`);
    let color = ( self.config.categorize.categories[ category ] && self.config.categorize.categories[ category ].color ) || '#164995';
    if ( !colors[color] ) colors[color] = 0;
    colors[color]++;
    if ( !(marker && marker.isFaded) ) isFaded = false;
  });

  let html = '<svg viewBox="0 0 36 36"><circle cx="18" cy="18" r="14" fill="white"/>'

  let soFar = 0;
  Object.keys(colors).forEach((key) => {
    let myColor = key;
    let perc = 100 * colors[key] / total;
    let angle = (soFar / 100) * 360;
    
    html += `    <path
      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
      fill="none"
      transform="rotate(${angle}, 18, 18)"
      stroke="${myColor}"
      stroke-width="4"
      stroke-dasharray="${perc}, 100"
    />`;
    soFar = soFar + perc;
  });

  let count = cluster.getChildCount();
  html += '<text x="18" y="21" text-anchor="middle" class="openstad-component-ideas-on-map-icon openstad-component-ideas-on-map-icon-text">' + count + '</text>';

  html += '</svg>';

  let className = 'osc-map-marker-cluster';
  className += ' openstad-component-ideas-on-map-icon-cluster'; // backwards compatibility; should be added by ideas-on-map
  if (isFaded) className += ' osc-map-marker-cluster-faded'

  return L.divIcon({ html: html, className, iconSize: L.point(36, 36), iconAnchor: [18, 18] });

}
