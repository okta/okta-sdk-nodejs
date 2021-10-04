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
 * @class JsonWebKey
 * @extends Resource
 * @property { hash } _links
 * @property { string } alg
 * @property { dateTime } created
 * @property { string } e
 * @property { dateTime } expiresAt
 * @property { array } key_ops
 * @property { string } kid
 * @property { string } kty
 * @property { dateTime } lastUpdated
 * @property { string } n
 * @property { string } status
 * @property { string } use
 * @property { array } x5c
 * @property { string } x5t
 * @property { string } x5t#S256
 * @property { string } x5u
 */
class JsonWebKey extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson['_links']) {
      this['_links'] = resourceJson['_links'];
    }
    if (resourceJson && resourceJson['alg']) {
      this['alg'] = resourceJson['alg'];
    }
    if (resourceJson && resourceJson['created']) {
      this['created'] = resourceJson['created'];
    }
    if (resourceJson && resourceJson['e']) {
      this['e'] = resourceJson['e'];
    }
    if (resourceJson && resourceJson['expiresAt']) {
      this['expiresAt'] = resourceJson['expiresAt'];
    }
    if (resourceJson && resourceJson['key_ops']) {
      this['key_ops'] = resourceJson['key_ops'];
    }
    if (resourceJson && resourceJson['kid']) {
      this['kid'] = resourceJson['kid'];
    }
    if (resourceJson && resourceJson['kty']) {
      this['kty'] = resourceJson['kty'];
    }
    if (resourceJson && resourceJson['lastUpdated']) {
      this['lastUpdated'] = resourceJson['lastUpdated'];
    }
    if (resourceJson && resourceJson['n']) {
      this['n'] = resourceJson['n'];
    }
    if (resourceJson && resourceJson['status']) {
      this['status'] = resourceJson['status'];
    }
    if (resourceJson && resourceJson['use']) {
      this['use'] = resourceJson['use'];
    }
    if (resourceJson && resourceJson['x5c']) {
      this['x5c'] = resourceJson['x5c'];
    }
    if (resourceJson && resourceJson['x5t']) {
      this['x5t'] = resourceJson['x5t'];
    }
    if (resourceJson && resourceJson['x5t#S256']) {
      this['x5t#S256'] = resourceJson['x5t#S256'];
    }
    if (resourceJson && resourceJson['x5u']) {
      this['x5u'] = resourceJson['x5u'];
    }
  }

}

module.exports = JsonWebKey;
