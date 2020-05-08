/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const ApplicationVisibilityHide = require('./ApplicationVisibilityHide');

/**
 * @class ApplicationVisibility
 * @extends Resource
 * @property { hash } appLinks
 * @property { boolean } autoSubmitToolbar
 * @property { ApplicationVisibilityHide } hide
 */
class ApplicationVisibility extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.hide) {
      this.hide = new ApplicationVisibilityHide(this.hide);
    }
  }

}

module.exports = ApplicationVisibility;
