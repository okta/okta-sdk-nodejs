var util = require('util');

/**
 * Coerce an API error into an Error object that is easy to grok.
 *
 * @param {String} url The API url that was requested when the error occurred
 * @param {Number|String} status The HTTP status code of the response
 * @param {Object} responseBody The JSON body that is the Okta error message that was returned by the API
 */
function OktaApiError(url, status, responseBody) {
  Error.captureStackTrace(this, this.constructor);

  this.name = this.constructor.name;
  this.status = status;
  this.errorCode = responseBody.errorCode;

  this.errorSummary = responseBody.errorSummary || '';
  this.errorCauses = responseBody.errorCauses;
  this.errorLink = responseBody.errorLink;
  this.errorId = responseBody.errorId;
  this.url = url;
  this.stack = '';
  this.message = 'Okta HTTP ' + this.status + ' ' + this.errorCode + ' ' + this.errorSummary + (this.errorCauses ? ('. ' + this.errorCauses.map(cause => cause.errorSummary).join('. ')) : '');
}

util.inherits(OktaApiError, Error);

module.exports = OktaApiError;
