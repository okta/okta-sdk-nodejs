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
import { Domain } from '../models/Domain';
import { DomainCertificate } from '../models/DomainCertificate';
import { DomainListResponse } from '../models/DomainListResponse';
import { DomainResponse } from '../models/DomainResponse';
import { UpdateDomain } from '../models/UpdateDomain';
/**
 * no description
 */
export declare class CustomDomainApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Creates your Custom Domain
     * Create a Custom Domain
     * @param domain
     */
  createCustomDomain(domain: Domain, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a Custom Domain by `id`
     * Delete a Custom Domain
     * @param domainId
     */
  deleteCustomDomain(domainId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a Custom Domain by `id`
     * Retrieve a Custom Domain
     * @param domainId
     */
  getCustomDomain(domainId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all verified Custom Domains for the org
     * List all Custom Domains
     */
  listCustomDomains(_options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces a Custom Domain by `id`
     * Replace a Custom Domain's brandId
     * @param domainId
     * @param UpdateDomain
     */
  replaceCustomDomain(domainId: string, UpdateDomain: UpdateDomain, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates or replaces the certificate for the custom domain
     * Upsert the Certificate
     * @param domainId
     * @param certificate
     */
  upsertCertificate(domainId: string, certificate: DomainCertificate, _options?: Configuration): Promise<RequestContext>;
  /**
     * Verifies the Custom Domain by `id`
     * Verify a Custom Domain
     * @param domainId
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
