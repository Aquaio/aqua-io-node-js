/**
 * Retrieve access token using API credentials.
 */
var AccessToken = function(client) {
  this.client = client;

  return this;
};

/**
 * Returns an access token (required for making all other API calls).
 *
 * 'oauth/token?grant_type=client_credentials' POST
 */
AccessToken.prototype.retrieve = function (options, callback) {
  if (typeof options == 'function') {
    callback = options;
    options = {};
  }

  var body = (options['body'] ? options['body'] : {});

  this.client.post('oauth/token?grant_type=client_credentials', body, options, function(err, response) {
    if (err) {
      return callback(err);
    }

    callback(null, response);
  });
};

// Export module
module.exports = AccessToken
