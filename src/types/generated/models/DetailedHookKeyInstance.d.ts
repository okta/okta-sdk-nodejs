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
 * Okta Admin Management
 * Allows customers to easily access the Okta Management APIs
 *
 * OpenAPI spec version: 5.1.0
 * Contact: devex-public@okta.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Embedded } from './../models/Embedded';
/**
* A key object with public key details
*/
export declare class DetailedHookKeyInstance {
  /**
    * Timestamp when the key was created
    */
  'created'?: Date | null;
  /**
    * The unique Okta ID of this key record
    */
  'id'?: string;
  /**
    * Whether this key is currently in use by other applications
    */
  'isUsed'?: boolean;
  /**
    * The alias of the public key
    */
  'keyId'?: string;
  /**
    * Timestamp when the key was updated
    */
  'lastUpdated'?: Date | null;
  /**
    * Display name of the key
    */
  'name'?: string;
  '_embedded'?: Embedded;
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
