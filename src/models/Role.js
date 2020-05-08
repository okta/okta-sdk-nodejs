/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');


/**
 * @class Role
 * @extends Resource
 * @property { hash } _embedded
 * @property { hash } _links
 * @property { RoleAssignmentType } assignmentType
 * @property { dateTime } created
 * @property { string } description
 * @property { string } id
 * @property { string } label
 * @property { dateTime } lastUpdated
 * @property { RoleStatus } status
 * @property { RoleType } type
 */
class Role extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);

  }

}

module.exports = Role;
