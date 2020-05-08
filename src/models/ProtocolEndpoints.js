/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const ProtocolEndpoint = require('./ProtocolEndpoint');

/**
 * @class ProtocolEndpoints
 * @extends Resource
 * @property { ProtocolEndpoint } acs
 * @property { ProtocolEndpoint } authorization
 * @property { ProtocolEndpoint } jwks
 * @property { ProtocolEndpoint } metadata
 * @property { ProtocolEndpoint } slo
 * @property { ProtocolEndpoint } sso
 * @property { ProtocolEndpoint } token
 * @property { ProtocolEndpoint } userInfo
 */
class ProtocolEndpoints extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.acs) {
      this.acs = new ProtocolEndpoint(this.acs);
    }
    if (resourceJson && resourceJson.authorization) {
      this.authorization = new ProtocolEndpoint(this.authorization);
    }
    if (resourceJson && resourceJson.jwks) {
      this.jwks = new ProtocolEndpoint(this.jwks);
    }
    if (resourceJson && resourceJson.metadata) {
      this.metadata = new ProtocolEndpoint(this.metadata);
    }
    if (resourceJson && resourceJson.slo) {
      this.slo = new ProtocolEndpoint(this.slo);
    }
    if (resourceJson && resourceJson.sso) {
      this.sso = new ProtocolEndpoint(this.sso);
    }
    if (resourceJson && resourceJson.token) {
      this.token = new ProtocolEndpoint(this.token);
    }
    if (resourceJson && resourceJson.userInfo) {
      this.userInfo = new ProtocolEndpoint(this.userInfo);
    }
  }

}

module.exports = ProtocolEndpoints;
