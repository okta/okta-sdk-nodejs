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
const LogActor = require('./LogActor');
const LogAuthenticationContext = require('./LogAuthenticationContext');
const LogClient = require('./LogClient');
const LogDebugContext = require('./LogDebugContext');
const LogOutcome = require('./LogOutcome');
const LogRequest = require('./LogRequest');
const LogSecurityContext = require('./LogSecurityContext');
const LogTarget = require('./LogTarget');
const LogTransaction = require('./LogTransaction');

/**
 * @class LogEvent
 * @extends Resource
 * @property { LogActor } actor
 * @property { LogAuthenticationContext } authenticationContext
 * @property { LogClient } client
 * @property { LogDebugContext } debugContext
 * @property { string } displayMessage
 * @property { string } eventType
 * @property { string } legacyEventType
 * @property { LogOutcome } outcome
 * @property { dateTime } published
 * @property { LogRequest } request
 * @property { LogSecurityContext } securityContext
 * @property { LogSeverity } severity
 * @property { array } target
 * @property { LogTransaction } transaction
 * @property { string } uuid
 * @property { string } version
 */
class LogEvent extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);

  }

}

module.exports = LogEvent;
