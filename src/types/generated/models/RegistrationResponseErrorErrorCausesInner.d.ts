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
export declare class RegistrationResponseErrorErrorCausesInner {
  /**
    * Human-readable summary of the error.
    */
  'errorSummary'?: string;
  /**
    * A brief, enum-like string that indicates the nature of the error. For example, `UNIQUE_CONSTRAINT` for a property uniqueness violation.
    */
  'reason'?: string;
  /**
    * Where in the request the error was found (`body`, `header`, `url`, or `query`).
    */
  'locationType'?: string;
  /**
    * The valid JSON path to the location of the error. For example, if there was an error in the user\'s `login` field, the `location` might be `data.userProfile.login`.
    */
  'location'?: string;
  /**
    * Indicates the source of the error. If the error was in the user\'s profile, for example, you might use `end-user`. If the error occurred in the external service, you might use `external-service`.
    */
  'domain'?: string;
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
