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
import { AuthenticatorMethodWithVerifiableProperties } from './../models/AuthenticatorMethodWithVerifiableProperties';
import { OtpProtocol } from './../models/OtpProtocol';
import { OtpTotpAlgorithm } from './../models/OtpTotpAlgorithm';
import { OtpTotpEncoding } from './../models/OtpTotpEncoding';
export declare class AuthenticatorMethodOtp extends AuthenticatorMethodWithVerifiableProperties {
  /**
    * The number of acceptable adjacent intervals, also known as the clock drift interval. This setting allows you to build in tolerance for any time difference between the token and the server. For example, with a `timeIntervalInSeconds` of 60 seconds and an `acceptableAdjacentIntervals` value of 5, Okta accepts passcodes within 300 seconds (60 * 5) before or after the end user enters their code.
    */
  'acceptableAdjacentIntervals'?: number;
  'algorithm'?: OtpTotpAlgorithm;
  'encoding'?: OtpTotpEncoding;
  /**
    * The `id` value of the factor profile
    */
  'factorProfileId'?: string;
  /**
    * Number of digits in an OTP value
    */
  'passCodeLength'?: number;
  'protocol'?: OtpProtocol;
  /**
    * Time interval for TOTP in seconds
    */
  'timeIntervalInSeconds'?: number;
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
