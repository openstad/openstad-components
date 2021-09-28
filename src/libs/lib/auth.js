let oscAuth = {};

oscAuth.getLoginUrl = function(config) {
  let returnTo = 'returnTo=' + encodeURIComponent(document.location.toString());
  let loginUrl = config.loginUrl || '/oauth/login?{returnTo}';
  loginUrl = loginUrl.replace(/{returnTo}/, returnTo);
  console.log(loginUrl);
  return loginUrl;
}

export default oscAuth;
