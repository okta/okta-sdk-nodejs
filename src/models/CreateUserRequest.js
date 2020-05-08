/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const UserCredentials = require('./UserCredentials');
const UserProfile = require('./UserProfile');
const UserType = require('./UserType');

/**
 * @class CreateUserRequest
 * @extends Resource
 * @property { UserCredentials } credentials
 * @property { array } groupIds
 * @property { UserProfile } profile
 * @property { UserType } type
 */
class CreateUserRequest extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.credentials) {
      this.credentials = new UserCredentials(this.credentials);
    }
    if (resourceJson && resourceJson.profile) {
      this.profile = new UserProfile(this.profile);
    }
    if (resourceJson && resourceJson.type) {
      this.type = new UserType(this.type);
    }
  }

}

module.exports = CreateUserRequest;
