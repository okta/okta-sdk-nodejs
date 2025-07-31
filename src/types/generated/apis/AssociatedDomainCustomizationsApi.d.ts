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
import { PublicAppleAppSiteWellKnownURI } from '../models/PublicAppleAppSiteWellKnownURI';
import { PublicAssetLinksWellKnownURI } from '../models/PublicAssetLinksWellKnownURI';
import { PublicWebauthnSiteWellKnownURI } from '../models/PublicWebauthnSiteWellKnownURI';
import { WellKnownURIObjectResponse } from '../models/WellKnownURIObjectResponse';
import { WellKnownURIRequest } from '../models/WellKnownURIRequest';
import { WellKnownURIsRoot } from '../models/WellKnownURIsRoot';
/**
 * no description
 */
export declare class AssociatedDomainCustomizationsApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Retrieves the content from each of the well-known URIs for a specified brand
     * Retrieve all the well-known URIs
     * @param brandId The ID of the brand
     * @param expand Specifies additional metadata to include in the response
     */
  getAllWellKnownURIs(brandId: string, expand?: Array<'all' | 'apple-app-site-association' | 'assetlinks.json' | 'webauthn'>, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the content of the `apple-app-site-assocation` well-known URI  > **Note:**  When serving this URI, Okta adds `authsrv` content to provide a seamless experience for Okta Verify. You can\'t modify the content in the `authsrv` object.
     * Retrieve the customized apple-app-site-association URI content
     */
  getAppleAppSiteAssociationWellKnownURI(_options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the content of the `assetlinks.json` well-known URI
     * Retrieve the customized assetlinks.json URI content
     */
  getAssetLinksWellKnownURI(_options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the customized content of a well-known URI for a specific brand and well-known URI path
     * Retrieve the customized content of the specified well-known URI
     * @param brandId The ID of the brand
     * @param uriPath The path of the well-known URI
     */
  getBrandWellKnownURI(brandId: string, uriPath: 'apple-app-site-association' | 'assetlinks.json' | 'webauthn', _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the well-known URI of a specific brand and well-known URI path
     * Retrieve the well-known URI of a specific brand
     * @param brandId The ID of the brand
     * @param uriPath The path of the well-known URI
     * @param expand Specifies additional metadata to include in the response
     */
  getRootBrandWellKnownURI(brandId: string, uriPath: 'apple-app-site-association' | 'assetlinks.json' | 'webauthn', expand?: Array<'customized'>, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the content of the `webauthn` well-known URI
     * Retrieve the customized webauthn URI content
     */
  getWebAuthnWellKnownURI(_options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces the content of a customized well-known URI that you specify.  There are endpoint-specific format requirements when you update the content of a customized well-known URI. See [Customize associated domains](https://developer.okta.com/docs/guides/custom-well-known-uri/main/).
     * Replace the customized well-known URI of the specific path
     * @param brandId The ID of the brand
     * @param uriPath The path of the well-known URI
     * @param wellKnownURIRequest
     */
  replaceBrandWellKnownURI(brandId: string, uriPath: 'apple-app-site-association' | 'assetlinks.json' | 'webauthn', wellKnownURIRequest?: WellKnownURIRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class AssociatedDomainCustomizationsApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAllWellKnownURIs
     * @throws ApiException if the response code was not in [200, 299]
     */
  getAllWellKnownURIs(response: ResponseContext): Promise<WellKnownURIsRoot>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAppleAppSiteAssociationWellKnownURI
     * @throws ApiException if the response code was not in [200, 299]
     */
  getAppleAppSiteAssociationWellKnownURI(response: ResponseContext): Promise<PublicAppleAppSiteWellKnownURI>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAssetLinksWellKnownURI
     * @throws ApiException if the response code was not in [200, 299]
     */
  getAssetLinksWellKnownURI(response: ResponseContext): Promise<PublicAssetLinksWellKnownURI>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBrandWellKnownURI
     * @throws ApiException if the response code was not in [200, 299]
     */
  getBrandWellKnownURI(response: ResponseContext): Promise<WellKnownURIObjectResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRootBrandWellKnownURI
     * @throws ApiException if the response code was not in [200, 299]
     */
  getRootBrandWellKnownURI(response: ResponseContext): Promise<WellKnownURIObjectResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getWebAuthnWellKnownURI
     * @throws ApiException if the response code was not in [200, 299]
     */
  getWebAuthnWellKnownURI(response: ResponseContext): Promise<PublicWebauthnSiteWellKnownURI>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceBrandWellKnownURI
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceBrandWellKnownURI(response: ResponseContext): Promise<WellKnownURIObjectResponse>;
}
