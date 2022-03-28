/**
 * Copyright (c) 2022-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 *
 * Okta API
 * Allows customers to easily access the Okta API
 *
 * OpenAPI spec version: 2.10.0
 * Contact: devex-public@okta.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { GroupSchemaBase } from './group-schema-base';
import { GroupSchemaCustom } from './group-schema-custom';
/**
 *
 * @export
 * @class GroupSchemaDefinitions
 */
export declare class GroupSchemaDefinitions {
  constructor(resourceJson: Record<string, unknown>);
  /**
      *
      * @type {GroupSchemaBase}
      * @memberof GroupSchemaDefinitions
      */
  base?: GroupSchemaBase;
  /**
      *
      * @type {GroupSchemaCustom}
      * @memberof GroupSchemaDefinitions
      */
  custom?: GroupSchemaCustom;
}
