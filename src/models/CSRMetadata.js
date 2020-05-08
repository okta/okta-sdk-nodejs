/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const CSRMetadataSubject = require('./CSRMetadataSubject');
const CSRMetadataSubjectAltNames = require('./CSRMetadataSubjectAltNames');

/**
 * @class CSRMetadata
 * @extends Resource
 * @property { CSRMetadataSubject } subject
 * @property { CSRMetadataSubjectAltNames } subjectAltNames
 */
class CSRMetadata extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.subject) {
      this.subject = new CSRMetadataSubject(this.subject);
    }
    if (resourceJson && resourceJson.subjectAltNames) {
      this.subjectAltNames = new CSRMetadataSubjectAltNames(this.subjectAltNames);
    }
  }

}

module.exports = CSRMetadata;
