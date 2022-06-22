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
/**
 * no description
 */
export declare class DomainApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Creates the Certificate for the Domain.
     * Replace the Certificate
     * @param domainId
     * @param certificate
     */
  createCertificate(domainId: string, certificate: DomainCertificate, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates your domain.
     * Create a Domain
     * @param domain
     */
  createDomain(domain: Domain, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a Domain by `id`.
     * Delete a Domain
     * @param domainId
     */
  deleteDomain(domainId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Fetches a Domain by `id`.
     * Retrieve a Domain
     * @param domainId
     */
  getDomain(domainId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * List all verified custom Domains for the org.
     * List all Domains
     */
  listDomains(_options?: Configuration): Promise<RequestContext>;
  /**
     * Verifies the Domain by `id`.
     * Verify a Domain
     * @param domainId
     */
  verifyDomain(domainId: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class DomainApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createCertificate
     * @throws ApiException if the response code was not in [200, 299]
     */
  createCertificate(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createDomain
     * @throws ApiException if the response code was not in [200, 299]
     */
  createDomain(response: ResponseContext): Promise<DomainResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteDomain
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteDomain(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDomain
     * @throws ApiException if the response code was not in [200, 299]
     */
  getDomain(response: ResponseContext): Promise<DomainResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listDomains
     * @throws ApiException if the response code was not in [200, 299]
     */
  listDomains(response: ResponseContext): Promise<DomainListResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to verifyDomain
     * @throws ApiException if the response code was not in [200, 299]
     */
  verifyDomain(response: ResponseContext): Promise<DomainResponse>;
}
