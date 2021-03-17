

export default function getPointInfo(latlng, marker, next) {

  if (0 && this.config.bagApiKey) { // de bag API zoekt niet op lat/lng; zooek verder naar een andere oplossing
    return getPointInfoBagApi(this.config.bagApiKey, latlng, marker, next);
  } else {
    return getPointInfoFree(latlng, marker, next);
  }
}

function getPointInfoBagApi(bagApiKey, latlng, marker, next) {

  // de bag API zoekt niet op lat/lng; zooek verder naar een andere oplossing

  let bagApiUrl1 = 'https://api.bag.kadaster.nl/lvbag/individuelebevragingen/v2/nummeraanduidingen/?format=json&locatie=[[lat]],[[lng]],50';
	let bagApiUrl2 = 'https://api.bag.kadaster.nl/lvbag/individuelebevragingen/v2/nummeraanduidingen/[[id]]/?format=json';

//  let bagApiUrl1 = 'https://api.data.amsterdam.nl/bag/nummeraanduiding/?format=json&locatie=[[lat]],[[lng]],50';
//  let bagApiUrl2 = 'https://api.data.amsterdam.nl/bag/nummeraanduiding/[[id]]/?format=json';

	let self = this;
	
  console.log(latlng);
	latlng = latlng || {};
  console.log(latlng, latlng.lat);
	
	let url = bagApiUrl1
			.replace(/\[\[lat\]\]/, latlng.lat)
			.replace(/\[\[lng\]\]/, latlng.lng);
	
	
	fetch(url, {
	  headers: { "X-Api-Key": bagApiKey },
  })
		.then((response) => {
			return response.json();
		})
		.then( json => {
			let id = json && json.results && json.results[0] && json.results[0].landelijk_id;
			let url = bagApiUrl2
					.replace(/\[\[id\]\]/, id)
			fetch(url)
				.then((response) => {
					return response.json();
				})
				.then( json => {
					json.lat = latlng.lat;
					json.lng = latlng.lng;
					if (next) next(json, marker);
				})
		})
		.catch((err) => {
			console.log('Zoek adres: niet goed');
			console.log(err);
			if (next) next({}, marker);
		});

}

function getPointInfoFree(latlng, marker, next) {
  
	  let self = this;
    let locatieApiUrl = 'https://geodata.nationaalgeoregister.nl/locatieserver/v3/free?lat=[[lat]]5&lon=[[lng]]&fq=type:adres&rows=1';

	  latlng = latlng || {};

	  let url = locatieApiUrl
			  .replace(/\[\[lat\]\]/, latlng.lat)
			  .replace(/\[\[lng\]\]/, latlng.lng);

	  fetch(url)
      .then((response) => {
        if (!response.ok) throw Error(response);
        return response.json();
      })
      .then( json => {

        let doc = json.response && json.response.docs && json.response.docs[0];
        
        if (!doc) throw new Error ('Niets gevonden');

        let result = {
          address: `${doc.straatnaam} ${doc.huisnummer}`
        }

				result.lat = latlng.lat;
				result.lng = latlng.lng;
				if (next) return next(result, marker);
        return result;

      })
      .catch((err) => {
        console.log('Zoek adres: niet goed');
        console.log(err);
			  if (next) next({}, marker);
      });

}
