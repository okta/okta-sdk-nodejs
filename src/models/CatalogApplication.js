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
 * @class CatalogApplication
 * @extends Resource
 * @property { hash } _links
 * @property { string } category
 * @property { string } description
 * @property { string } displayName
 * @property { array } features
 * @property { string } id
 * @property { dateTime } lastUpdated
 * @property { string } name
 * @property { array } signOnModes
 * @property { CatalogApplicationStatus } status
 * @property { string } verificationStatus
 * @property { string } website
 */
class CatalogApplication extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson['_links']) {
      this['_links'] = resourceJson['_links'];
    }
    if (resourceJson && resourceJson['category']) {
      this['category'] = resourceJson['category'];
    }
    if (resourceJson && resourceJson['description']) {
      this['description'] = resourceJson['description'];
    }
    if (resourceJson && resourceJson['displayName']) {
      this['displayName'] = resourceJson['displayName'];
    }
    if (resourceJson && resourceJson['features']) {
      this['features'] = resourceJson['features'];
    }
    if (resourceJson && resourceJson['id']) {
      this['id'] = resourceJson['id'];
    }
    if (resourceJson && resourceJson['lastUpdated']) {
      this['lastUpdated'] = resourceJson['lastUpdated'];
    }
    if (resourceJson && resourceJson['name']) {
      this['name'] = resourceJson['name'];
    }
    if (resourceJson && resourceJson['signOnModes']) {
      this['signOnModes'] = resourceJson['signOnModes'];
    }
    if (resourceJson && resourceJson['status']) {
      this['status'] = resourceJson['status'];
    }
    if (resourceJson && resourceJson['verificationStatus']) {
      this['verificationStatus'] = resourceJson['verificationStatus'];
    }
    if (resourceJson && resourceJson['website']) {
      this['website'] = resourceJson['website'];
    }
  }

}

module.exports = CatalogApplication;
