/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

const ModelResolutionFactory = require('../resolution-factory');
/*eslint-disable no-unused-vars*/
const factories = require('./');
const models = require('../models');

class ApplicationFactory extends ModelResolutionFactory {
  getMapping() {
    return {
      'AUTO_LOGIN': models.AutoLoginApplication,
      'BASIC_AUTH': models.BasicAuthApplication,
      'BOOKMARK': models.BookmarkApplication,
      'BROWSER_PLUGIN': new factories.BrowserPluginApplication(),
      'OPENID_CONNECT': models.OpenIdConnectApplication,
      'SAML_2_0': models.SamlApplication,
      'SECURE_PASSWORD_STORE': models.SecurePasswordStoreApplication,
      'WS_FEDERATION': models.WsFederationApplication,
    };
  }

  getResolutionProperty() {
    return 'signOnMode';
  }
}

module.exports = ApplicationFactory;
