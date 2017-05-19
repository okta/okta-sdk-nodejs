var util = require('util');

/**
 * Coerce a generic HTTP error into an Error object that is easy to grok.
 *
 * @param {String} url The API url that was requested when the error occurred
 * @param {Number|String} status The HTTP status code of the response
 * @param {String} responseBody The text of the response body
 */
function HttpError(url, status, responseBody) {
  Error.captureStackTrace(this, this.constructor);

  this.name = this.constructor.name;
  this.status = status;
  this.url = url;
  this.stack = '';
  this.message = 'HTTP ' + this.status + ' ' + responseBody;
}

util.inherits(HttpError, Error);

module.exports = HttpError;
