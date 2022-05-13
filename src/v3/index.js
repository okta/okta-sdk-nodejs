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


const { PromiseUserTypeApi } = require('./types/PromiseAPI');
const { PromiseAuthenticatorApi } = require('./types/PromiseAPI');
const { PromiseSchemaApi } = require('./types/PromiseAPI');
const { PromiseInlineHookApi } = require('./types/PromiseAPI');
const { PromiseProfileMappingApi } = require('./types/PromiseAPI');


module.exports = Object.assign(
  {},
  {
    UserTypeApi: PromiseUserTypeApi,
    AuthenticatorApi: PromiseAuthenticatorApi,
    SchemaApi: PromiseSchemaApi,
    InlineHookApi: PromiseInlineHookApi,
    ProfileMappingApi: PromiseProfileMappingApi
  },
  require('./models/all'),
);
