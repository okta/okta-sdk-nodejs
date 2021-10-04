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


/**
 * @class OrgSetting
 * @extends Resource
 * @property { object } _links
 * @property { string } address1
 * @property { string } address2
 * @property { string } city
 * @property { string } companyName
 * @property { string } country
 * @property { dateTime } created
 * @property { string } endUserSupportHelpURL
 * @property { dateTime } expiresAt
 * @property { string } id
 * @property { dateTime } lastUpdated
 * @property { string } phoneNumber
 * @property { string } postalCode
 * @property { string } state
 * @property { string } status
 * @property { string } subdomain
 * @property { string } supportPhoneNumber
 * @property { string } website
 */
class OrgSetting extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson['_links']) {
      this['_links'] = resourceJson['_links'];
    }
    if (resourceJson && resourceJson['address1']) {
      this['address1'] = resourceJson['address1'];
    }
    if (resourceJson && resourceJson['address2']) {
      this['address2'] = resourceJson['address2'];
    }
    if (resourceJson && resourceJson['city']) {
      this['city'] = resourceJson['city'];
    }
    if (resourceJson && resourceJson['companyName']) {
      this['companyName'] = resourceJson['companyName'];
    }
    if (resourceJson && resourceJson['country']) {
      this['country'] = resourceJson['country'];
    }
    if (resourceJson && resourceJson['created']) {
      this['created'] = resourceJson['created'];
    }
    if (resourceJson && resourceJson['endUserSupportHelpURL']) {
      this['endUserSupportHelpURL'] = resourceJson['endUserSupportHelpURL'];
    }
    if (resourceJson && resourceJson['expiresAt']) {
      this['expiresAt'] = resourceJson['expiresAt'];
    }
    if (resourceJson && resourceJson['id']) {
      this['id'] = resourceJson['id'];
    }
    if (resourceJson && resourceJson['lastUpdated']) {
      this['lastUpdated'] = resourceJson['lastUpdated'];
    }
    if (resourceJson && resourceJson['phoneNumber']) {
      this['phoneNumber'] = resourceJson['phoneNumber'];
    }
    if (resourceJson && resourceJson['postalCode']) {
      this['postalCode'] = resourceJson['postalCode'];
    }
    if (resourceJson && resourceJson['state']) {
      this['state'] = resourceJson['state'];
    }
    if (resourceJson && resourceJson['status']) {
      this['status'] = resourceJson['status'];
    }
    if (resourceJson && resourceJson['subdomain']) {
      this['subdomain'] = resourceJson['subdomain'];
    }
    if (resourceJson && resourceJson['supportPhoneNumber']) {
      this['supportPhoneNumber'] = resourceJson['supportPhoneNumber'];
    }
    if (resourceJson && resourceJson['website']) {
      this['website'] = resourceJson['website'];
    }
  }

  /**
   * @returns {Promise<OrgSetting>}
   */
  update() {
    return this.httpClient.updateOrgSetting(this);
  }
}

module.exports = OrgSetting;
