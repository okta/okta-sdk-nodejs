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


/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const DNSRecord = require('./DNSRecord');
const DomainCertificateMetadata = require('./DomainCertificateMetadata');

/**
 * @class Domain
 * @extends Resource
 * @property { DomainCertificateSourceType } certificateSourceType
 * @property { array } dnsRecords
 * @property { string } domain
 * @property { string } id
 * @property { DomainCertificateMetadata } publicCertificate
 * @property { DomainValidationStatus } validationStatus
 */
class Domain extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.dnsRecords) {
      this.dnsRecords = resourceJson.dnsRecords.map(resourceItem => new DNSRecord(resourceItem));
    }
    if (resourceJson && resourceJson.publicCertificate) {
      this.publicCertificate = new DomainCertificateMetadata(resourceJson.publicCertificate);
    }
  }

}

module.exports = Domain;
