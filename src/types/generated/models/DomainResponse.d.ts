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
import { DNSRecord } from './DNSRecord';
import { DomainCertificateMetadata } from './DomainCertificateMetadata';
import { DomainCertificateSourceType } from './DomainCertificateSourceType';
import { DomainLinks } from './DomainLinks';
import { DomainValidationStatus } from './DomainValidationStatus';
export declare class DomainResponse {
  'certificateSourceType'?: DomainCertificateSourceType;
  'dnsRecords'?: Array<DNSRecord>;
  'domain'?: string;
  'id'?: string;
  '_links'?: DomainLinks;
  'publicCertificate'?: DomainCertificateMetadata;
  'validationStatus'?: DomainValidationStatus;
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
