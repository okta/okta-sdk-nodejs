/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

const ModelResolutionFactory = require('../resolution-factory');
/*eslint-disable no-unused-vars*/
const factories = require('./');
const models = require('../models');

class PolicyFactory extends ModelResolutionFactory {
  getMapping() {
    return {
      'IDP_DISCOVERY': models.IdentityProviderPolicy,
      'OAUTH_AUTHORIZATION_POLICY': models.OAuthAuthorizationPolicy,
      'OKTA_SIGN_ON': models.OktaSignOnPolicy,
      'PASSWORD': models.PasswordPolicy,
    };
  }

  getResolutionProperty() {
    return 'type';
  }
}

module.exports = PolicyFactory;
