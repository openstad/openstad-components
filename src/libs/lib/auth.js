let oscAuth = {};

oscAuth.getLoginUrl = function(config) {
  let returnTo = 'returnTo=' + encodeURIComponent(document.location.toString());
  let loginUrl = config.loginUrl || '/oauth/login?{returnTo}';
  loginUrl = loginUrl.replace(/{returnTo}/, returnTo);
  return loginUrl;
}

export default oscAuth;
