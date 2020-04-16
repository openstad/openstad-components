import sessionStorage from '../session-storage.js'

export default function(config) {

  let jwt;

  // jwt in url
  let match = window.location.search.match(/(?:\?|&)jwt=([A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*)(?:&|$)/);
  if (match) {
    jwt = match[1];
    sessionStorage.set('osc-jwt', jwt);
    let search = document.location.search.replace('jwt=' + jwt, '');
    if (search == '?') search = '';
    document.location.search = search;
  }

  jwt = sessionStorage.get('osc-jwt');

  if (config && config.jwt) {
    jwt = config.jwt;
    sessionStorage.set('osc-jwt', jwt)
  }

  return jwt;
  
}
