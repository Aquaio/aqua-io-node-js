var Client = require('./aqua_io/client');

// Export module
var aquaIo = module.exports;

/**
 * This file contains the global namespace for the module
 */
aquaIo.client = function(auth, options) {
  return new Client(auth, options);
};
