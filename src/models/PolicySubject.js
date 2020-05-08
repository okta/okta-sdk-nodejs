/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const PolicyUserNameTemplate = require('./PolicyUserNameTemplate');

/**
 * @class PolicySubject
 * @extends Resource
 * @property { string } filter
 * @property { string } matchAttribute
 * @property { PolicySubjectMatchType } matchType
 * @property { PolicyUserNameTemplate } userNameTemplate
 */
class PolicySubject extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.userNameTemplate) {
      this.userNameTemplate = new PolicyUserNameTemplate(this.userNameTemplate);
    }
  }

}

module.exports = PolicySubject;
