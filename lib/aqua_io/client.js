/**
 * Main client for the module
 */
var Client = function(auth, options) {
  this.httpClient = new (require('./http_client').HttpClient)(auth, options);

  return this;
};

/**
 * Retrieve access token using API credentials.
 */
Client.prototype.accessToken = function () {
    return new (require('./api/access_token'))(this.httpClient);
};

/**
 * Returns an ICD-9 code.
 */
Client.prototype.icd9 = function () {
    return new (require('./api/icd9'))(this.httpClient);
};

/**
 * Returns an ICD-10 code.
 */
Client.prototype.icd10 = function () {
    return new (require('./api/icd10'))(this.httpClient);
};

// Export module
module.exports = Client;
