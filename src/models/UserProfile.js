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
 * @class UserProfile
 * @extends Resource
 * @property { string } city
 * @property { string } costCenter
 * @property { string } countryCode
 * @property { string } department
 * @property { string } displayName
 * @property { string } division
 * @property { string } email
 * @property { string } employeeNumber
 * @property { string } firstName
 * @property { string } honorificPrefix
 * @property { string } honorificSuffix
 * @property { string } lastName
 * @property { string } locale
 * @property { string } login
 * @property { string } manager
 * @property { string } managerId
 * @property { string } middleName
 * @property { string } mobilePhone
 * @property { string } nickName
 * @property { string } organization
 * @property { string } postalAddress
 * @property { string } preferredLanguage
 * @property { string } primaryPhone
 * @property { string } profileUrl
 * @property { string } secondEmail
 * @property { string } state
 * @property { string } streetAddress
 * @property { string } timezone
 * @property { string } title
 * @property { string } userType
 * @property { string } zipCode
 */
class UserProfile extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson['city']) {
      this['city'] = resourceJson['city'];
    }
    if (resourceJson && resourceJson['costCenter']) {
      this['costCenter'] = resourceJson['costCenter'];
    }
    if (resourceJson && resourceJson['countryCode']) {
      this['countryCode'] = resourceJson['countryCode'];
    }
    if (resourceJson && resourceJson['department']) {
      this['department'] = resourceJson['department'];
    }
    if (resourceJson && resourceJson['displayName']) {
      this['displayName'] = resourceJson['displayName'];
    }
    if (resourceJson && resourceJson['division']) {
      this['division'] = resourceJson['division'];
    }
    if (resourceJson && resourceJson['email']) {
      this['email'] = resourceJson['email'];
    }
    if (resourceJson && resourceJson['employeeNumber']) {
      this['employeeNumber'] = resourceJson['employeeNumber'];
    }
    if (resourceJson && resourceJson['firstName']) {
      this['firstName'] = resourceJson['firstName'];
    }
    if (resourceJson && resourceJson['honorificPrefix']) {
      this['honorificPrefix'] = resourceJson['honorificPrefix'];
    }
    if (resourceJson && resourceJson['honorificSuffix']) {
      this['honorificSuffix'] = resourceJson['honorificSuffix'];
    }
    if (resourceJson && resourceJson['lastName']) {
      this['lastName'] = resourceJson['lastName'];
    }
    if (resourceJson && resourceJson['locale']) {
      this['locale'] = resourceJson['locale'];
    }
    if (resourceJson && resourceJson['login']) {
      this['login'] = resourceJson['login'];
    }
    if (resourceJson && resourceJson['manager']) {
      this['manager'] = resourceJson['manager'];
    }
    if (resourceJson && resourceJson['managerId']) {
      this['managerId'] = resourceJson['managerId'];
    }
    if (resourceJson && resourceJson['middleName']) {
      this['middleName'] = resourceJson['middleName'];
    }
    if (resourceJson && resourceJson['mobilePhone']) {
      this['mobilePhone'] = resourceJson['mobilePhone'];
    }
    if (resourceJson && resourceJson['nickName']) {
      this['nickName'] = resourceJson['nickName'];
    }
    if (resourceJson && resourceJson['organization']) {
      this['organization'] = resourceJson['organization'];
    }
    if (resourceJson && resourceJson['postalAddress']) {
      this['postalAddress'] = resourceJson['postalAddress'];
    }
    if (resourceJson && resourceJson['preferredLanguage']) {
      this['preferredLanguage'] = resourceJson['preferredLanguage'];
    }
    if (resourceJson && resourceJson['primaryPhone']) {
      this['primaryPhone'] = resourceJson['primaryPhone'];
    }
    if (resourceJson && resourceJson['profileUrl']) {
      this['profileUrl'] = resourceJson['profileUrl'];
    }
    if (resourceJson && resourceJson['secondEmail']) {
      this['secondEmail'] = resourceJson['secondEmail'];
    }
    if (resourceJson && resourceJson['state']) {
      this['state'] = resourceJson['state'];
    }
    if (resourceJson && resourceJson['streetAddress']) {
      this['streetAddress'] = resourceJson['streetAddress'];
    }
    if (resourceJson && resourceJson['timezone']) {
      this['timezone'] = resourceJson['timezone'];
    }
    if (resourceJson && resourceJson['title']) {
      this['title'] = resourceJson['title'];
    }
    if (resourceJson && resourceJson['userType']) {
      this['userType'] = resourceJson['userType'];
    }
    if (resourceJson && resourceJson['zipCode']) {
      this['zipCode'] = resourceJson['zipCode'];
    }
  }

}

module.exports = UserProfile;
