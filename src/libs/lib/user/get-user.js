import sessionStorage from '../session-storage.js';
import getJWT from './get-jwt.js';

export default function(config, next) {

  next = next || function(user) {
    console.log('getUser: next not defined.');
    console.log(user);
  };

  let user = config.user || sessionStorage.get('osc-user');

  if (user) {
    // return user
    return next(null, user);
  }

  // jwt
  let jwt = getJWT(config);

  if (!jwt) {
    // return no user
    return next(null, {});
  }

  // fetch user
  let url = `${config.api.url  }/oauth/site/${  config.siteId  }/me`;
  let headers = { 'X-Authorization': `Bearer ${  jwt}`, 'Content-Type': 'application/json' };
  fetch(url, { headers } )
    .then((response) => {
      if (!response.ok) throw new Error('Error on fetch');
      return response.json();
    })
    .then( (json) => {
      sessionStorage.set('osc-user', json);
      next(null, json);
    })
    .catch((err) => {
      next(err);
    });

}
