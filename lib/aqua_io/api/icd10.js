/**
 * Returns an ICD-10 code.
 */
var Icd10 = function(client) {
  this.client = client;

  return this;
};

/**
 * Returns all top-level ICD-10 codes. Useful for helping a user navigate down the ICD-10 hierarchy to find a code.
 *
 * 'codes/v1/icd10' GET
 */
Icd10.prototype.topLevelCodes = function (options, callback) {
  if (typeof options == 'function') {
    callback = options;
    options = {};
  }

  var body = (options['query'] ? options['query'] : {});

  this.client.get('codes/v1/icd10', body, options, function(err, response) {
    if (err) {
      return callback(err);
    }

    callback(null, response);
  });
};

/**
 * Returns a single code matching the name, if any exists. Replace periods with hypens (e.g. 'R50-9' for 'R50.9')
 *
 * 'codes/v1/icd10/:code_name' GET
 *
 * @param "code_name" name of code
 */
Icd10.prototype.singleCode = function (code_name, options, callback) {
  if (typeof options == 'function') {
    callback = options;
    options = {};
  }

  var body = (options['query'] ? options['query'] : {});
  body['code_name'] = code_name;

  this.client.get('codes/v1/icd10/' + code_name + '', body, options, function(err, response) {
    if (err) {
      return callback(err);
    }

    callback(null, response);
  });
};

/**
 * Returns all codes whose name contains the search string.
 *
 * 'codes/v1/icd10?q[name_cont]=:query' GET
 *
 * @param "query" the search query string
 */
Icd10.prototype.searchByName = function (query, options, callback) {
  if (typeof options == 'function') {
    callback = options;
    options = {};
  }

  var body = (options['query'] ? options['query'] : {});
  body['query'] = query;

  this.client.get('codes/v1/icd10?q[name_cont]=' + query + '', body, options, function(err, response) {
    if (err) {
      return callback(err);
    }

    callback(null, response);
  });
};

/**
 * Returns all codes whose description contains the search string.
 *
 * 'codes/v1/icd10?q[description_cont]=:query' GET
 *
 * @param "query" the search query string
 */
Icd10.prototype.searchByDescription = function (query, options, callback) {
  if (typeof options == 'function') {
    callback = options;
    options = {};
  }

  var body = (options['query'] ? options['query'] : {});
  body['query'] = query;

  this.client.get('codes/v1/icd10?q[description_cont]=' + query + '', body, options, function(err, response) {
    if (err) {
      return callback(err);
    }

    callback(null, response);
  });
};

/**
 * Returns all codes whose name or description contains the search string.
 *
 * 'codes/v1/icd10?q[name_or_description_cont]=:query' GET
 *
 * @param "query" the search query string
 */
Icd10.prototype.searchByNameOrDescription = function (query, options, callback) {
  if (typeof options == 'function') {
    callback = options;
    options = {};
  }

  var body = (options['query'] ? options['query'] : {});
  body['query'] = query;

  this.client.get('codes/v1/icd10?q[name_or_description_cont]=' + query + '', body, options, function(err, response) {
    if (err) {
      return callback(err);
    }

    callback(null, response);
  });
};

// Export module
module.exports = Icd10
