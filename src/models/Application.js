/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const ApplicationAccessibility = require('./ApplicationAccessibility');
const ApplicationCredentials = require('./ApplicationCredentials');
const ApplicationLicensing = require('./ApplicationLicensing');
const ApplicationSettings = require('./ApplicationSettings');
const ApplicationVisibility = require('./ApplicationVisibility');

/**
 * @class Application
 * @extends Resource
 * @property { hash } _embedded
 * @property { hash } _links
 * @property { ApplicationAccessibility } accessibility
 * @property { dateTime } created
 * @property { ApplicationCredentials } credentials
 * @property { array } features
 * @property { string } id
 * @property { string } label
 * @property { dateTime } lastUpdated
 * @property { ApplicationLicensing } licensing
 * @property { string } name
 * @property { hash } profile
 * @property { ApplicationSettings } settings
 * @property { ApplicationSignOnMode } signOnMode
 * @property { string } status
 * @property { ApplicationVisibility } visibility
 */
class Application extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.accessibility) {
      this.accessibility = new ApplicationAccessibility(this.accessibility);
    }
    if (resourceJson && resourceJson.credentials) {
      this.credentials = new ApplicationCredentials(this.credentials);
    }
    if (resourceJson && resourceJson.licensing) {
      this.licensing = new ApplicationLicensing(this.licensing);
    }
    if (resourceJson && resourceJson.settings) {
      this.settings = new ApplicationSettings(this.settings);
    }
    if (resourceJson && resourceJson.visibility) {
      this.visibility = new ApplicationVisibility(this.visibility);
    }
  }

  /**
   * @returns {Promise<Application>}
   */
  update() {
    return this.client.updateApplication(this.id, this);
  }
  delete() {
    return this.client.deleteApplication(this.id);
  }

  activate() {
    return this.client.activateApplication(this.id);
  }

  deactivate() {
    return this.client.deactivateApplication(this.id);
  }

  /**
   * @param {object} queryParameters
   * @returns {Promise<Collection>} A collection that will yield {@link AppUser} instances.
   */
  listApplicationUsers(queryParameters) {
    return this.client.listApplicationUsers(this.id, queryParameters);
  }

  /**
   * @param {AppUser} appUser
   * @returns {Promise<AppUser>}
   */
  assignUserToApplication(appUser) {
    return this.client.assignUserToApplication(this.id, appUser);
  }

  /**
   * @param {string} userId
   * @param {object} queryParameters
   * @returns {Promise<AppUser>}
   */
  getApplicationUser(userId, queryParameters) {
    return this.client.getApplicationUser(this.id, userId, queryParameters);
  }

  /**
   * @param {string} groupId
   * @param {ApplicationGroupAssignment} applicationGroupAssignment
   * @returns {Promise<ApplicationGroupAssignment>}
   */
  createApplicationGroupAssignment(groupId, applicationGroupAssignment) {
    return this.client.createApplicationGroupAssignment(this.id, groupId, applicationGroupAssignment);
  }

  /**
   * @param {string} groupId
   * @param {object} queryParameters
   * @returns {Promise<ApplicationGroupAssignment>}
   */
  getApplicationGroupAssignment(groupId, queryParameters) {
    return this.client.getApplicationGroupAssignment(this.id, groupId, queryParameters);
  }

  /**
   * @param {string} keyId
   * @param {object} queryParameters
   * @returns {Promise<JsonWebKey>}
   */
  cloneApplicationKey(keyId, queryParameters) {
    return this.client.cloneApplicationKey(this.id, keyId, queryParameters);
  }

  /**
   * @param {string} keyId
   * @returns {Promise<JsonWebKey>}
   */
  getApplicationKey(keyId) {
    return this.client.getApplicationKey(this.id, keyId);
  }

  /**
   * @param {object} queryParameters
   * @returns {Promise<Collection>} A collection that will yield {@link ApplicationGroupAssignment} instances.
   */
  listGroupAssignments(queryParameters) {
    return this.client.listApplicationGroupAssignments(this.id, queryParameters);
  }

  /**
   * @returns {Promise<Collection>} A collection that will yield {@link JsonWebKey} instances.
   */
  listKeys() {
    return this.client.listApplicationKeys(this.id);
  }

  /**
   * @param {object} queryParameters
   * @returns {Promise<Collection>} A collection that will yield {@link OAuth2Token} instances.
   */
  listOAuth2Tokens(queryParameters) {
    return this.client.listOAuth2TokensForApplication(this.id, queryParameters);
  }

  /**
   * @param {string} tokenId
   */
  revokeOAuth2TokenForApplication(tokenId) {
    return this.client.revokeOAuth2TokenForApplication(this.id, tokenId);
  }

  /**
   * @param {string} tokenId
   * @param {object} queryParameters
   * @returns {Promise<OAuth2Token>}
   */
  getOAuth2Token(tokenId, queryParameters) {
    return this.client.getOAuth2TokenForApplication(this.id, tokenId, queryParameters);
  }

  revokeOAuth2Tokens() {
    return this.client.revokeOAuth2TokensForApplication(this.id);
  }

  /**
   * @param {object} queryParameters
   * @returns {Promise<Collection>} A collection that will yield {@link OAuth2ScopeConsentGrant} instances.
   */
  listScopeConsentGrants(queryParameters) {
    return this.client.listScopeConsentGrants(this.id, queryParameters);
  }

  /**
   * @param {OAuth2ScopeConsentGrant} oAuth2ScopeConsentGrant
   * @returns {Promise<OAuth2ScopeConsentGrant>}
   */
  grantConsentToScope(oAuth2ScopeConsentGrant) {
    return this.client.grantConsentToScope(this.id, oAuth2ScopeConsentGrant);
  }

  /**
   * @param {string} grantId
   */
  revokeScopeConsentGrant(grantId) {
    return this.client.revokeScopeConsentGrant(this.id, grantId);
  }

  /**
   * @param {string} grantId
   * @param {object} queryParameters
   * @returns {Promise<OAuth2ScopeConsentGrant>}
   */
  getScopeConsentGrant(grantId, queryParameters) {
    return this.client.getScopeConsentGrant(this.id, grantId, queryParameters);
  }
}

module.exports = Application;
