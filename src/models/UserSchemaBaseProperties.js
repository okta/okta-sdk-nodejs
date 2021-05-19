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
const UserSchemaAttribute = require('./UserSchemaAttribute');

/**
 * @class UserSchemaBaseProperties
 * @extends Resource
 * @property { UserSchemaAttribute } city
 * @property { UserSchemaAttribute } costCenter
 * @property { UserSchemaAttribute } countryCode
 * @property { UserSchemaAttribute } department
 * @property { UserSchemaAttribute } displayName
 * @property { UserSchemaAttribute } division
 * @property { UserSchemaAttribute } email
 * @property { UserSchemaAttribute } employeeNumber
 * @property { UserSchemaAttribute } firstName
 * @property { UserSchemaAttribute } honorificPrefix
 * @property { UserSchemaAttribute } honorificSuffix
 * @property { UserSchemaAttribute } lastName
 * @property { UserSchemaAttribute } locale
 * @property { UserSchemaAttribute } login
 * @property { UserSchemaAttribute } manager
 * @property { UserSchemaAttribute } managerId
 * @property { UserSchemaAttribute } middleName
 * @property { UserSchemaAttribute } mobilePhone
 * @property { UserSchemaAttribute } nickName
 * @property { UserSchemaAttribute } organization
 * @property { UserSchemaAttribute } postalAddress
 * @property { UserSchemaAttribute } preferredLanguage
 * @property { UserSchemaAttribute } primaryPhone
 * @property { UserSchemaAttribute } profileUrl
 * @property { UserSchemaAttribute } secondEmail
 * @property { UserSchemaAttribute } state
 * @property { UserSchemaAttribute } streetAddress
 * @property { UserSchemaAttribute } timezone
 * @property { UserSchemaAttribute } title
 * @property { UserSchemaAttribute } userType
 * @property { UserSchemaAttribute } zipCode
 */
class UserSchemaBaseProperties extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.city) {
      this.city = new UserSchemaAttribute(resourceJson.city);
    }
    if (resourceJson && resourceJson.costCenter) {
      this.costCenter = new UserSchemaAttribute(resourceJson.costCenter);
    }
    if (resourceJson && resourceJson.countryCode) {
      this.countryCode = new UserSchemaAttribute(resourceJson.countryCode);
    }
    if (resourceJson && resourceJson.department) {
      this.department = new UserSchemaAttribute(resourceJson.department);
    }
    if (resourceJson && resourceJson.displayName) {
      this.displayName = new UserSchemaAttribute(resourceJson.displayName);
    }
    if (resourceJson && resourceJson.division) {
      this.division = new UserSchemaAttribute(resourceJson.division);
    }
    if (resourceJson && resourceJson.email) {
      this.email = new UserSchemaAttribute(resourceJson.email);
    }
    if (resourceJson && resourceJson.employeeNumber) {
      this.employeeNumber = new UserSchemaAttribute(resourceJson.employeeNumber);
    }
    if (resourceJson && resourceJson.firstName) {
      this.firstName = new UserSchemaAttribute(resourceJson.firstName);
    }
    if (resourceJson && resourceJson.honorificPrefix) {
      this.honorificPrefix = new UserSchemaAttribute(resourceJson.honorificPrefix);
    }
    if (resourceJson && resourceJson.honorificSuffix) {
      this.honorificSuffix = new UserSchemaAttribute(resourceJson.honorificSuffix);
    }
    if (resourceJson && resourceJson.lastName) {
      this.lastName = new UserSchemaAttribute(resourceJson.lastName);
    }
    if (resourceJson && resourceJson.locale) {
      this.locale = new UserSchemaAttribute(resourceJson.locale);
    }
    if (resourceJson && resourceJson.login) {
      this.login = new UserSchemaAttribute(resourceJson.login);
    }
    if (resourceJson && resourceJson.manager) {
      this.manager = new UserSchemaAttribute(resourceJson.manager);
    }
    if (resourceJson && resourceJson.managerId) {
      this.managerId = new UserSchemaAttribute(resourceJson.managerId);
    }
    if (resourceJson && resourceJson.middleName) {
      this.middleName = new UserSchemaAttribute(resourceJson.middleName);
    }
    if (resourceJson && resourceJson.mobilePhone) {
      this.mobilePhone = new UserSchemaAttribute(resourceJson.mobilePhone);
    }
    if (resourceJson && resourceJson.nickName) {
      this.nickName = new UserSchemaAttribute(resourceJson.nickName);
    }
    if (resourceJson && resourceJson.organization) {
      this.organization = new UserSchemaAttribute(resourceJson.organization);
    }
    if (resourceJson && resourceJson.postalAddress) {
      this.postalAddress = new UserSchemaAttribute(resourceJson.postalAddress);
    }
    if (resourceJson && resourceJson.preferredLanguage) {
      this.preferredLanguage = new UserSchemaAttribute(resourceJson.preferredLanguage);
    }
    if (resourceJson && resourceJson.primaryPhone) {
      this.primaryPhone = new UserSchemaAttribute(resourceJson.primaryPhone);
    }
    if (resourceJson && resourceJson.profileUrl) {
      this.profileUrl = new UserSchemaAttribute(resourceJson.profileUrl);
    }
    if (resourceJson && resourceJson.secondEmail) {
      this.secondEmail = new UserSchemaAttribute(resourceJson.secondEmail);
    }
    if (resourceJson && resourceJson.state) {
      this.state = new UserSchemaAttribute(resourceJson.state);
    }
    if (resourceJson && resourceJson.streetAddress) {
      this.streetAddress = new UserSchemaAttribute(resourceJson.streetAddress);
    }
    if (resourceJson && resourceJson.timezone) {
      this.timezone = new UserSchemaAttribute(resourceJson.timezone);
    }
    if (resourceJson && resourceJson.title) {
      this.title = new UserSchemaAttribute(resourceJson.title);
    }
    if (resourceJson && resourceJson.userType) {
      this.userType = new UserSchemaAttribute(resourceJson.userType);
    }
    if (resourceJson && resourceJson.zipCode) {
      this.zipCode = new UserSchemaAttribute(resourceJson.zipCode);
    }
  }

}

module.exports = UserSchemaBaseProperties;
