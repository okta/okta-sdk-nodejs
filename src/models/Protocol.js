/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const ProtocolAlgorithms = require('./ProtocolAlgorithms');
const IdentityProviderCredentials = require('./IdentityProviderCredentials');
const ProtocolEndpoints = require('./ProtocolEndpoints');
const ProtocolEndpoint = require('./ProtocolEndpoint');
const ProtocolRelayState = require('./ProtocolRelayState');
const ProtocolSettings = require('./ProtocolSettings');

/**
 * @class Protocol
 * @extends Resource
 * @property { ProtocolAlgorithms } algorithms
 * @property { IdentityProviderCredentials } credentials
 * @property { ProtocolEndpoints } endpoints
 * @property { ProtocolEndpoint } issuer
 * @property { ProtocolRelayState } relayState
 * @property { array } scopes
 * @property { ProtocolSettings } settings
 * @property { string } type
 */
class Protocol extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.algorithms) {
      this.algorithms = new ProtocolAlgorithms(this.algorithms);
    }
    if (resourceJson && resourceJson.credentials) {
      this.credentials = new IdentityProviderCredentials(this.credentials);
    }
    if (resourceJson && resourceJson.endpoints) {
      this.endpoints = new ProtocolEndpoints(this.endpoints);
    }
    if (resourceJson && resourceJson.issuer) {
      this.issuer = new ProtocolEndpoint(this.issuer);
    }
    if (resourceJson && resourceJson.relayState) {
      this.relayState = new ProtocolRelayState(this.relayState);
    }
    if (resourceJson && resourceJson.settings) {
      this.settings = new ProtocolSettings(this.settings);
    }
  }

}

module.exports = Protocol;
