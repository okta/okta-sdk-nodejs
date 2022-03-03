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


import { GeneratedApiClient } from './generated-client';
import { Application } from './models/Application';
import { BasicAuthApplicationOptions } from './request-options/BasicAuthApplicationOptions';
import { BookmarkApplicationOptions } from './request-options/BookmarkApplicationOptions';
import { OpenIdConnectApplicationOptions } from './request-options/OpenIdConnectApplicationOptions';
import { SamlCustomApplicationOptions } from './request-options/SamlCustomApplicationOptions';
import { SwaThreeFieldApplicationOptions } from './request-options/SwaThreeFieldApplicationOptions';
import { SwaApplicationOptions } from './request-options/SwaApplicationOptions';
import { AutoLoginApplicationOptions } from './request-options/AutoLoginApplicationOptions';
import { SecurePasswordStoreApplicationOptions } from './request-options/SecurePasswordStoreApplicationOptions';
import { WsFederationApplicationOptions } from './request-options/WsFederationApplicationOptions';

type ApplicationOptions =
  BasicAuthApplicationOptions | BookmarkApplicationOptions | OpenIdConnectApplicationOptions |
  SamlCustomApplicationOptions | SwaThreeFieldApplicationOptions | SwaApplicationOptions |
  AutoLoginApplicationOptions | SecurePasswordStoreApplicationOptions | WsFederationApplicationOptions;

declare class ParameterizedOperationsClient extends GeneratedApiClient {
  createApplication<T extends Application = Application>(applicationOptions: ApplicationOptions, queryParameters?: {
    activate?: boolean,
  }): Promise<T>;
  getApplication<T extends Application>(appId: string): Promise<T>;
}

export {
  ApplicationOptions,
  ParameterizedOperationsClient
};
