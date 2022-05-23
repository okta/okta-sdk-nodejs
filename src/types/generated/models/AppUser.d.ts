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


/**
 * Okta API
 * Allows customers to easily access the Okta API
 *
 * OpenAPI spec version: 2.10.0
 * Contact: devex-public@okta.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { AppUserCredentials } from './AppUserCredentials';
export declare class AppUser {
  '_embedded'?: {
        [key: string]: any;
    };
  '_links'?: {
        [key: string]: any;
    };
  'created'?: Date;
  'credentials'?: AppUserCredentials;
  'externalId'?: string;
  'id'?: string;
  'lastSync'?: Date;
  'lastUpdated'?: Date;
  'passwordChanged'?: Date;
  'profile'?: {
        [key: string]: any;
    };
  'scope'?: string;
  'status'?: string;
  'statusChanged'?: Date;
  'syncState'?: string;
  static readonly discriminator: string | undefined;
  static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
  static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
  constructor();
}
