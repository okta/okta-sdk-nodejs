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

  }

}

module.exports = UserSchemaBaseProperties;
