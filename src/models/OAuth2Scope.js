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
 * @class OAuth2Scope
 * @extends Resource
 * @property { string } consent
 * @property { boolean } default
 * @property { string } description
 * @property { string } displayName
 * @property { string } id
 * @property { string } metadataPublish
 * @property { string } name
 * @property { boolean } system
 */
class OAuth2Scope extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson['consent']) {
      this['consent'] = resourceJson['consent'];
    }
    if (resourceJson && resourceJson['default']) {
      this['default'] = resourceJson['default'];
    }
    if (resourceJson && resourceJson['description']) {
      this['description'] = resourceJson['description'];
    }
    if (resourceJson && resourceJson['displayName']) {
      this['displayName'] = resourceJson['displayName'];
    }
    if (resourceJson && resourceJson['id']) {
      this['id'] = resourceJson['id'];
    }
    if (resourceJson && resourceJson['metadataPublish']) {
      this['metadataPublish'] = resourceJson['metadataPublish'];
    }
    if (resourceJson && resourceJson['name']) {
      this['name'] = resourceJson['name'];
    }
    if (resourceJson && resourceJson['system']) {
      this['system'] = resourceJson['system'];
    }
  }

}

module.exports = OAuth2Scope;
