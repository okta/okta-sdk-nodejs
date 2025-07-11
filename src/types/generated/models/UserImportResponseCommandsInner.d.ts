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
export declare class UserImportResponseCommandsInner {
  /**
    * The command types supported for the import inline hook. When using the `com.okta.action.update` command to specify that the user should be treated as a match, you need to also provide a `com.okta.user.update` command that sets the ID of the Okta user.
    */
  'type'?: UserImportResponseCommandsInnerTypeEnum;
  /**
    * The `value` object is the parameter to pass to the command. In the case of the `com.okta.appUser.profile.update` and `com.okta.user.profile.update` commands,  the parameter should be a list of one or more profile attributes and the values you wish to set them to. In the case of the `com.okta.action.update` command, the parameter should be a `result` property set to either `CREATE_USER` or `LINK_USER`.
    */
  'value'?: {
        [key: string]: string;
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
export declare type UserImportResponseCommandsInnerTypeEnum = 'com.okta.appUser.profile.update' | 'com.okta.user.profile.update' | 'com.okta.action.update' | 'com.okta.user.update';
