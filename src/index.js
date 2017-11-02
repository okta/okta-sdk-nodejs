/*!
 * Copyright (c) 2017, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

"use strict";

let client;

/*
strict-mode ensures all files included from this point forward
have strict mode enabled.
This is particularly useful while using this library in applications where passing
a --use_strict flag is not possible.
  OR
An alternative to this is include the "use strict" declaration on top of each file using ES6 features
*/
require('strict-mode')(function () {
  client = require('./client');
});

module.exports = {
  Client: client
};
