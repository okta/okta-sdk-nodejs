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
 * @class AppLink
 * @extends Resource
 * @property { string } appAssignmentId
 * @property { string } appInstanceId
 * @property { string } appName
 * @property { boolean } credentialsSetup
 * @property { boolean } hidden
 * @property { string } id
 * @property { string } label
 * @property { string } linkUrl
 * @property { string } logoUrl
 * @property { integer } sortOrder
 */
class AppLink extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.appAssignmentId) {
      this.appAssignmentId = resourceJson.appAssignmentId;
    }
    if (resourceJson && resourceJson.appInstanceId) {
      this.appInstanceId = resourceJson.appInstanceId;
    }
    if (resourceJson && resourceJson.appName) {
      this.appName = resourceJson.appName;
    }
    if (resourceJson && resourceJson.credentialsSetup) {
      this.credentialsSetup = resourceJson.credentialsSetup;
    }
    if (resourceJson && resourceJson.hidden) {
      this.hidden = resourceJson.hidden;
    }
    if (resourceJson && resourceJson.id) {
      this.id = resourceJson.id;
    }
    if (resourceJson && resourceJson.label) {
      this.label = resourceJson.label;
    }
    if (resourceJson && resourceJson.linkUrl) {
      this.linkUrl = resourceJson.linkUrl;
    }
    if (resourceJson && resourceJson.logoUrl) {
      this.logoUrl = resourceJson.logoUrl;
    }
    if (resourceJson && resourceJson.sortOrder) {
      this.sortOrder = resourceJson.sortOrder;
    }
  }

}

module.exports = AppLink;
