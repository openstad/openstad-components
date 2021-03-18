export const searchAddressByLatLng = function({ latlng, addresssesMunicipality, next }) {
  
	let self = this;
  let locatieApiUrl = 'https://geodata.nationaalgeoregister.nl/locatieserver/v3/free?lat=[[lat]]5&lon=[[lng]]&fq=type:adres&rows=1';
  if (addresssesMunicipality) {
    locatieApiUrl += `&fq=gemeentenaam:${addresssesMunicipality}`;
  }

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
			if (next) return next(result);
      return result;

    })
    .catch((err) => {
      console.log('Zoek adres: niet goed');
      console.log(err);
			if (next) next({});
    });

}

export const suggestAddresses = function({ searchValue, addresssesMunicipality, next }) {

  fetch(`https://geodata.nationaalgeoregister.nl/locatieserver/v3/suggest?rows=5&fq=gemeentenaam:${addresssesMunicipality}&fq=*:*&q=${searchValue}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
		.then((response) => {
			return response.json();
		})
    .then( json => {
      let result = []
      if (json && json.response && json.response.docs && json.response.docs.length) {
        result = json.response.docs.map( found => { return {
          id: found.id,
					text: found.weergavenaam,
				}});
      }
			if (next) return next(result);
      return result;
    })
    .catch((err) => {
      console.log('Search failed:', err);
			if (next) next({});
    });

}

export const LookupLatLngByAddressId = function({ id, addresssesMunicipality, next }) {

  fetch(`https://geodata.nationaalgeoregister.nl/locatieserver/v3/lookup?fq=gemeentenaam:${addresssesMunicipality}&&id=${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
		.then((response) => {
			return response.json();
		})
    .then( json => {
      let result = {};
      if (json && json.response && json.response.docs && json.response.docs[0]) {
        result = json.response.docs[0];
      }
			if (next) return next(result);
      return result;
    })
    .catch((err) => {
      console.log('Search failed:', err);
      if (next) next({})
    });

}
