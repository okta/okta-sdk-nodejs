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
 * @class SamlAttributeStatement
 * @extends Resource
 * @property { string } filterType
 * @property { string } filterValue
 * @property { string } name
 * @property { string } namespace
 * @property { string } type
 * @property { array } values
 */
class SamlAttributeStatement extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.filterType) {
      this.filterType = resourceJson.filterType;
    }
    if (resourceJson && resourceJson.filterValue) {
      this.filterValue = resourceJson.filterValue;
    }
    if (resourceJson && resourceJson.name) {
      this.name = resourceJson.name;
    }
    if (resourceJson && resourceJson.namespace) {
      this.namespace = resourceJson.namespace;
    }
    if (resourceJson && resourceJson.type) {
      this.type = resourceJson.type;
    }
    if (resourceJson && resourceJson.values) {
      this.values = resourceJson.values;
    }
  }

}

module.exports = SamlAttributeStatement;
