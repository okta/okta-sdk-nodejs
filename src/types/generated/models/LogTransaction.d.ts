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
/**
* A `transaction` object comprises contextual information associated with its respective event.  This information is useful for understanding sequences of correlated events. For example, a `transaction` object such as the following: ``` {   \"id\": \"Wn4f-0RQ8D8lTSLkAmkKdQAADqo\",   \"type\": \"WEB\",   \"detail\": null } ``` indicates that a `WEB` request with `id` `Wn4f-0RQ8D8lTSLkAmkKdQAADqo` has created this event.  A `transaction` object with a `requestApiTokenId` in the `detail` object, for example : ``` {   \"id\": \"YjSlblAAqnKY7CdyCkXNBgAAAIU\",   \"type\": \"WEB\",   \"detail\": {     \"requestApiTokenId\": \"00T94e3cn9kSEO3c51s5\"   } } ``` indicates that this event was the result of an action performed through an API using the token identified by 00T94e3cn9kSEO3c51s5. The token ID is visible in the Admin Console, **Security** > **API**. See [API token management](https://help.okta.com/okta_help.htm?id=Security_API). For more information on API tokens, see [Create an API token](https://developer.okta.com/docs/guides/create-an-api-token/).
*/
export declare class LogTransaction {
  /**
    * Details for this transaction.
    */
  'detail'?: {
        [key: string]: any;
    };
    /**
    * Unique identifier for this transaction.
    */
  'id'?: string;
  /**
    * Describes the kind of transaction. `WEB` indicates a web request. `JOB` indicates an asynchronous task.
    */
  'type'?: string;
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
