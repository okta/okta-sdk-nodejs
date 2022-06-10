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
 * OpenAPI spec version: 3.0.0
 * Contact: devex-public@okta.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { LifecycleStatus } from './LifecycleStatus';
import { OAuth2ClaimConditions } from './OAuth2ClaimConditions';
import { OAuth2ClaimGroupFilterType } from './OAuth2ClaimGroupFilterType';
import { OAuth2ClaimType } from './OAuth2ClaimType';
import { OAuth2ClaimValueType } from './OAuth2ClaimValueType';
export declare class OAuth2Claim {
  'alwaysIncludeInToken'?: boolean;
  'claimType'?: OAuth2ClaimType;
  'conditions'?: OAuth2ClaimConditions;
  'group_filter_type'?: OAuth2ClaimGroupFilterType;
  'id'?: string;
  'name'?: string;
  'status'?: LifecycleStatus;
  'system'?: boolean;
  'value'?: string;
  'valueType'?: OAuth2ClaimValueType;
  '_links'?: {
        [key: string]: any;
    };
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
