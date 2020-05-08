/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const ProtocolAlgorithmTypeSignature = require('./ProtocolAlgorithmTypeSignature');

/**
 * @class ProtocolAlgorithmType
 * @extends Resource
 * @property { ProtocolAlgorithmTypeSignature } signature
 */
class ProtocolAlgorithmType extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.signature) {
      this.signature = new ProtocolAlgorithmTypeSignature(this.signature);
    }
  }

}

module.exports = ProtocolAlgorithmType;
