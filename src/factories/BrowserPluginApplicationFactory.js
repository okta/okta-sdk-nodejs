/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

const ModelResolutionFactory = require('../resolution-factory');
/*eslint-disable no-unused-vars*/
const factories = require('./');
const models = require('../models');

class BrowserPluginApplicationFactory extends ModelResolutionFactory {
  getMapping() {
    return {
      'template_swa': models.SwaApplication,
      'template_swa3field': models.SwaThreeFieldApplication,
    };
  }

  getResolutionProperty() {
    return 'name';
  }
}

module.exports = BrowserPluginApplicationFactory;
