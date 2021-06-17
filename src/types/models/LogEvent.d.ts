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

import { Resource } from '../resource';
import { Client } from '../client';
import { OptionalKnownProperties } from '../optional-known-properties-type';
import { LogActor } from './LogActor';
import { LogAuthenticationContext } from './LogAuthenticationContext';
import { LogClient } from './LogClient';
import { LogDebugContext } from './LogDebugContext';
import { LogOutcome } from './LogOutcome';
import { LogRequest } from './LogRequest';
import { LogSecurityContext } from './LogSecurityContext';
import { LogSeverity } from './LogSeverity';
import { LogTarget } from './LogTarget';
import { LogTransaction } from './LogTransaction';

declare class LogEvent extends Resource {
  constructor(resourceJson: Record<string, unknown>, client: Client);

  readonly actor: LogActor;
  readonly authenticationContext: LogAuthenticationContext;
  readonly client: LogClient;
  readonly debugContext: LogDebugContext;
  readonly displayMessage: string;
  readonly eventType: string;
  readonly legacyEventType: string;
  readonly outcome: LogOutcome;
  readonly published: string;
  readonly request: LogRequest;
  readonly securityContext: LogSecurityContext;
  readonly severity: LogSeverity;
  readonly target: LogTarget[];
  readonly transaction: LogTransaction;
  readonly uuid: string;
  readonly version: string;

}

type LogEventOptions = OptionalKnownProperties<LogEvent>;

export {
  LogEvent,
  LogEventOptions
};
