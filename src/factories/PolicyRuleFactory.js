/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

const ModelResolutionFactory = require('../resolution-factory');
/*eslint-disable no-unused-vars*/
const factories = require('./');
const models = require('../models');

class PolicyRuleFactory extends ModelResolutionFactory {
  getMapping() {
    return {
      'PASSWORD': models.PasswordPolicyRule,
      'SIGN_ON': models.OktaSignOnPolicyRule,
    };
  }

  getResolutionProperty() {
    return 'type';
  }
}

module.exports = PolicyRuleFactory;
