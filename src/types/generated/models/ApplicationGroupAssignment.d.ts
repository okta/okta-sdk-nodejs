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
import { ApplicationGroupAssignmentLinks } from './../models/ApplicationGroupAssignmentLinks';
import { GroupAssignmentProfile } from './../models/GroupAssignmentProfile';
/**
* The Application Group object that defines a group of users\' app-specific profile and credentials for an app
*/
export declare class ApplicationGroupAssignment {
  /**
    * ID of the [group](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Group/)
    */
  'id'?: string;
  /**
    * Timestamp when the object was last updated
    */
  'lastUpdated'?: Date;
  /**
    * Priority assigned to the group. If an app has more than one group assigned to the same user, then the group with the higher priority has its profile applied to the [application user](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/ApplicationUsers/). If a priority value isn\'t specified, then the next highest priority is assigned by default. See [Assign attribute group priority](https://help.okta.com/okta_help.htm?type=oie&id=ext-usgp-app-group-priority) and the [sample priority use case](https://help.okta.com/okta_help.htm?type=oie&id=ext-usgp-combine-values-use).
    */
  'priority'?: number;
  'profile'?: GroupAssignmentProfile;
  /**
    * Embedded resource related to the Application Group using the [JSON Hypertext Application Language](https://datatracker.ietf.org/doc/html/draft-kelly-json-hal-06) specification. If the `expand=group` query parameter is specified, then the [group](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Group/) object is embedded.  If the `expand=metadata` query parameter is specified, then the group assignment metadata is embedded.
    */
  '_embedded'?: {
        [key: string]: any;
    };
  '_links'?: ApplicationGroupAssignmentLinks;
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
