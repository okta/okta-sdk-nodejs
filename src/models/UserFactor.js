/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const VerifyFactorRequest = require('./VerifyFactorRequest');

/**
 * @class UserFactor
 * @extends Resource
 * @property { hash } _embedded
 * @property { hash } _links
 * @property { dateTime } created
 * @property { FactorType } factorType
 * @property { string } id
 * @property { dateTime } lastUpdated
 * @property { FactorProvider } provider
 * @property { FactorStatus } status
 * @property { VerifyFactorRequest } verify
 */
class UserFactor extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.verify) {
      this.verify = new VerifyFactorRequest(this.verify);
    }
  }

  /**
   * @param {string} userId
   */
  delete(userId) {
    return this.client.deleteFactor(userId, this.id);
  }

  /**
   * @param {string} userId
   * @param {ActivateFactorRequest} activateFactorRequest
   * @returns {Promise<UserFactor>}
   */
  activate(userId, activateFactorRequest) {
    return this.client.activateFactor(userId, this.id, activateFactorRequest);
  }

  /**
   * @param {string} userId
   * @param {VerifyFactorRequest} verifyFactorRequest
   * @param {object} queryParameters
   * @returns {Promise<VerifyUserFactorResponse>}
   */
  verify(userId, verifyFactorRequest, queryParameters) {
    return this.client.verifyFactor(userId, this.id, verifyFactorRequest, queryParameters);
  }
}

module.exports = UserFactor;
