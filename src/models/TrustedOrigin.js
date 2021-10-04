/*!
 * Copyright (c) 2017-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */


/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const Scope = require('./Scope');

/**
 * @class TrustedOrigin
 * @extends Resource
 * @property { hash } _links
 * @property { dateTime } created
 * @property { string } createdBy
 * @property { string } id
 * @property { dateTime } lastUpdated
 * @property { string } lastUpdatedBy
 * @property { string } name
 * @property { string } origin
 * @property { array } scopes
 * @property { string } status
 */
class TrustedOrigin extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson['_links']) {
      this['_links'] = resourceJson['_links'];
    }
    if (resourceJson && resourceJson['created']) {
      this['created'] = resourceJson['created'];
    }
    if (resourceJson && resourceJson['createdBy']) {
      this['createdBy'] = resourceJson['createdBy'];
    }
    if (resourceJson && resourceJson['id']) {
      this['id'] = resourceJson['id'];
    }
    if (resourceJson && resourceJson['lastUpdated']) {
      this['lastUpdated'] = resourceJson['lastUpdated'];
    }
    if (resourceJson && resourceJson['lastUpdatedBy']) {
      this['lastUpdatedBy'] = resourceJson['lastUpdatedBy'];
    }
    if (resourceJson && resourceJson['name']) {
      this['name'] = resourceJson['name'];
    }
    if (resourceJson && resourceJson['origin']) {
      this['origin'] = resourceJson['origin'];
    }
    if (resourceJson && resourceJson['scopes']) {
      this['scopes'] = resourceJson['scopes'].map(resourceItem => new Scope(resourceItem));
    }
    if (resourceJson && resourceJson['status']) {
      this['status'] = resourceJson['status'];
    }
  }

  /**
   * @returns {Promise<TrustedOrigin>}
   */
  update() {
    return this.httpClient.updateOrigin(this.id, this);
  }
  delete() {
    return this.httpClient.deleteOrigin(this.id);
  }
}

module.exports = TrustedOrigin;
