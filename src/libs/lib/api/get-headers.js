import merge from 'merge';
import getJWT from '../user/get-jwt.js';

export default function(config) {

  let headers = merge.recursive({ 'Content-type': 'application/json' }, config && config.api && config.api.headers);

  let jwt = getJWT();
  if (jwt) {
    headers = merge.recursive({ "X-Authorization": "Bearer " + jwt }, headers);
  }

  return headers;
  
}
