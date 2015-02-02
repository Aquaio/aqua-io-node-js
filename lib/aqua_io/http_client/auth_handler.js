/**
 * This module takes care of devising the auth type and using it
 */
var Auth = function(auth) {
  this.auth = auth;

  this.URL_SECRET = 2;
  this.URL_TOKEN = 3;

  return this;
};

/**
 * Calculating the type of authentication
 */
Auth.prototype.getAuthType = function () {

  if (this.auth['client_id'] && this.auth['client_secret']) {
    return this.URL_SECRET;
  }

  if (this.auth['access_token']) {
    return this.URL_TOKEN;
  }

  return -1;
};

/**
 * Set authentication for the request
 *
 * This should throw error because this should be caught while in development
 */
Auth.prototype.set = function (request, callback) {
  if (Object.keys(this.auth).length == 0) {
    return callback(null, request);
  }

  var auth = this.getAuthType(), flag = false;

  if (auth == this.URL_SECRET) {
    request = this.urlSecret(request);
    flag = true;
  }

  if (auth == this.URL_TOKEN) {
    request = this.urlToken(request);
    flag = true;
  }

  if (!flag) {
      return callback(new Error('Unable to calculate authorization method. Please check.'));
  }

  callback(null, request);
};

/**
 * OAUTH2 Authorization with client secret
 */
Auth.prototype.urlSecret = function(request) {
  request['qs']['client_id'] = this.auth['client_id'];
  request['qs']['client_secret'] = this.auth['client_secret'];

  return request;
};

/**
 * OAUTH2 Authorization with access token
 */
Auth.prototype.urlToken = function(request) {
  request['qs']['access_token'] = this.auth['access_token'];

  return request;
};

// Export module
module.exports = Auth;
