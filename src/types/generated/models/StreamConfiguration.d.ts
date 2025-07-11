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
import { StreamConfigurationAud } from './../models/StreamConfigurationAud';
import { StreamConfigurationDelivery } from './../models/StreamConfigurationDelivery';
export declare class StreamConfiguration {
  'aud'?: StreamConfigurationAud;
  'delivery': StreamConfigurationDelivery;
  /**
    * The events (mapped by the array of event type URIs) that the transmitter actually delivers to the SSF Stream.  A read-only parameter that is set by the transmitter. If this parameter is included in the request, the value must match the expected value from the transmitter.
    */
  'events_delivered'?: Array<string>;
  /**
    * The events (mapped by the array of event type URIs) that the receiver wants to receive
    */
  'events_requested': Array<string>;
  /**
    * An array of event type URIs that the transmitter supports.  A read-only parameter that is set by the transmitter. If this parameter is included in the request, the value must match the expected value from the transmitter.
    */
  'events_supported'?: Array<string>;
  /**
    * The Subject Identifier format expected for any SET transmitted.
    */
  'format'?: StreamConfigurationFormatEnum;
  /**
    * The issuer used in Security Event Tokens (SETs). This value is set as `iss` in the claim.  A read-only parameter that is set by the transmitter. If this parameter is included in the request, the value must match the expected value from the transmitter.
    */
  'iss'?: string;
  /**
    * The minimum amount of time, in seconds, between two verification requests.  A read-only parameter that is set by the transmitter. If this parameter is included in the request, the value must match the expected value from the transmitter.
    */
  'min_verification_interval'?: number | null;
  /**
    * The ID of the SSF Stream configuration
    */
  'stream_id'?: string;
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
export declare type StreamConfigurationFormatEnum = 'iss_sub';
