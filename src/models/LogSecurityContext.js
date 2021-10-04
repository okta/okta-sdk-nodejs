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
 * @class LogSecurityContext
 * @extends Resource
 * @property { integer } asNumber
 * @property { string } asOrg
 * @property { string } domain
 * @property { boolean } isProxy
 * @property { string } isp
 */
class LogSecurityContext extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson['asNumber']) {
      this['asNumber'] = resourceJson['asNumber'];
    }
    if (resourceJson && resourceJson['asOrg']) {
      this['asOrg'] = resourceJson['asOrg'];
    }
    if (resourceJson && resourceJson['domain']) {
      this['domain'] = resourceJson['domain'];
    }
    if (resourceJson && resourceJson['isProxy']) {
      this['isProxy'] = resourceJson['isProxy'];
    }
    if (resourceJson && resourceJson['isp']) {
      this['isp'] = resourceJson['isp'];
    }
  }

}

module.exports = LogSecurityContext;
