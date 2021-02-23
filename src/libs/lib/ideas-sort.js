'use strict';

export default function ideasSort({ ideas, sortOrder, center }) {

  sortOrder = sortOrder || 'random';

	switch(sortOrder){
		case 'title':
			ideas = ideas.sort( function(a,b) { if (a.title.toLowerCase() < b.title.toLowerCase()) { return -1; } if (b.title.toLowerCase() < a.title.toLowerCase()) { return 1; } return 0; });
			break;
		case 'ranking,asc':
			ideas = ideas.sort( function(a,b) { return a.ranking - b.ranking });
			break;
		case 'likes,asc':
			ideas = ideas.sort( function(a,b) { return a.yes - b.yes });
			break;
		case 'likes,desc':
			ideas = ideas.sort( function(a,b) { return b.yes - a.yes });
			break;
		case 'createdtime,desc':
			ideas = ideas.sort( function(a,b) { return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime() });
			break;
		case 'createdtime,asc':
			ideas = ideas.sort( function(a,b) { return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime() });
			break;
		case 'distance':
      center = center || {lat: 52.37104644463586, lng:900402911007405};
      if (center.coordinates) {
        center.lat = center.coordinates[0];
        center.lng = center.coordinates[1];
      }
			ideas = ideas
        .map( idea => { idea._distance = Math.sqrt( Math.pow( idea.location.coordinates[0] - center.lat, 2 ) + Math.pow( idea.location.coordinates[1] - center.lng, 2 ) ); return idea; } )
        .sort( function(a,b) { return a._distance - b._distance })
			break;
		case 'args,desc':
			ideas = ideas.sort( function(a,b) { return b.argCount - a.argCount })
			break;
		case 'args,asc':
			ideas = ideas.sort( function(a,b) { return a.argCount - b.argCount })
			break;
		case 'random':
		default:
			ideas = ideas.sort( function(a,b) { return Math.random() - 0.5 });
			break;
	}

  return ideas;
  
}
