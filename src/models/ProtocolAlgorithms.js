/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const ProtocolAlgorithmType = require('./ProtocolAlgorithmType');

/**
 * @class ProtocolAlgorithms
 * @extends Resource
 * @property { ProtocolAlgorithmType } request
 * @property { ProtocolAlgorithmType } response
 */
class ProtocolAlgorithms extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.request) {
      this.request = new ProtocolAlgorithmType(this.request);
    }
    if (resourceJson && resourceJson.response) {
      this.response = new ProtocolAlgorithmType(this.response);
    }
  }

}

module.exports = ProtocolAlgorithms;
