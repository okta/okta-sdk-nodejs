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


import { Collection } from '../../collection';
import { HttpFile } from '../http/http';
import { Configuration } from '../configuration';
import { Authenticator } from '../models/Authenticator';

import { AuthenticatorApiRequestFactory, AuthenticatorApiResponseProcessor } from '../apis/AuthenticatorApi';
export declare class PromiseAuthenticatorApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: AuthenticatorApiRequestFactory, responseProcessor?: AuthenticatorApiResponseProcessor);
  /**
      * Activates an authenticator by `authenticatorId`.
      * Activate Authenticator
      * @param authenticatorId
      */
  activateAuthenticator(authenticatorId: string, _options?: Configuration): Promise<Authenticator>;
  /**
      * Deactivates an authenticator by `authenticatorId`.
      * Deactivate Authenticator
      * @param authenticatorId
      */
  deactivateAuthenticator(authenticatorId: string, _options?: Configuration): Promise<Authenticator>;
  /**
      * Fetches an authenticator from your Okta organization by `authenticatorId`.
      * Get Authenticator
      * @param authenticatorId
      */
  getAuthenticator(authenticatorId: string, _options?: Configuration): Promise<Authenticator>;
  /**
      * Enumerates authenticators in your organization.
      * List Authenticators
      */
  listAuthenticators(_options?: Configuration): Promise<Collection<Authenticator>>;
  /**
      * Updates an authenticator
      * Update Authenticator
      * @param authenticatorId
      * @param authenticator
      */
  updateAuthenticator(authenticatorId: string, authenticator: Authenticator, _options?: Configuration): Promise<Authenticator>;
}
