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


import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { DomainCertificate } from '../models/DomainCertificate';
import { DomainListResponse } from '../models/DomainListResponse';
import { DomainRequest } from '../models/DomainRequest';
import { DomainResponse } from '../models/DomainResponse';
import { UpdateDomain } from '../models/UpdateDomain';
/**
 * no description
 */
export declare class CustomDomainApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Creates your custom domain
     * Create a Custom Domain
     * @param domain
     */
  createCustomDomain(domain: DomainRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a custom domain by `domainId`
     * Delete a custom domain
     * @param domainId &#x60;id&#x60; of the Domain
     */
  deleteCustomDomain(domainId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a custom domain by `domainId`
     * Retrieve a custom domain
     * @param domainId &#x60;id&#x60; of the Domain
     */
  getCustomDomain(domainId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all verified custom domains for the org
     * List all Custom Domains
     */
  listCustomDomains(_options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces a custom domain\'s brand
     * Replace a custom domain\'s brand
     * @param domainId &#x60;id&#x60; of the Domain
     * @param updateDomain
     */
  replaceCustomDomain(domainId: string, updateDomain: UpdateDomain, _options?: Configuration): Promise<RequestContext>;
  /**
     * Upserts (creates or renews) the `MANUAL` certificate for the custom domain  > **Notes:** > * If the existing `certificateSourceType` is `OKTA_MANAGED`, this operation changes the source type to `MANUAL`. Okta no longer manages and renews certificates for this domain after you provide a user-managed certificate. > * Okta supports TLS certificates and private keys that are PEM-encoded and 2048, 3072, or 4096 bits. See the [Custom domain guide](https://developer.okta.com/docs/guides/custom-url-domain/main/) for more details.
     * Upsert the custom domain\'s certificate
     * @param domainId &#x60;id&#x60; of the Domain
     * @param certificate
     */
  upsertCertificate(domainId: string, certificate: DomainCertificate, _options?: Configuration): Promise<RequestContext>;
  /**
     * Verifies the custom domain and validity of DNS records by `domainId`. Furthermore, if the `certificateSourceType` in the domain is `OKTA_MANAGED`, then an attempt is made to obtain and install a certificate. After a certificate is obtained and installed by Okta, Okta manages the certificate including certificate renewal.
     * Verify a custom domain
     * @param domainId &#x60;id&#x60; of the Domain
     */
  verifyDomain(domainId: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class CustomDomainApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createCustomDomain
     * @throws ApiException if the response code was not in [200, 299]
     */
  createCustomDomain(response: ResponseContext): Promise<DomainResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCustomDomain
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteCustomDomain(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCustomDomain
     * @throws ApiException if the response code was not in [200, 299]
     */
  getCustomDomain(response: ResponseContext): Promise<DomainResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listCustomDomains
     * @throws ApiException if the response code was not in [200, 299]
     */
  listCustomDomains(response: ResponseContext): Promise<DomainListResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceCustomDomain
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceCustomDomain(response: ResponseContext): Promise<DomainResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to upsertCertificate
     * @throws ApiException if the response code was not in [200, 299]
     */
  upsertCertificate(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to verifyDomain
     * @throws ApiException if the response code was not in [200, 299]
     */
  verifyDomain(response: ResponseContext): Promise<DomainResponse>;
}
