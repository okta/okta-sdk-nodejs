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
import { RequestContext, ResponseContext, HttpFile } from '../http/http';
import { BouncesRemoveListObj } from '../models/BouncesRemoveListObj';
import { BouncesRemoveListResult } from '../models/BouncesRemoveListResult';
import { OrgContactTypeObj } from '../models/OrgContactTypeObj';
import { OrgContactUser } from '../models/OrgContactUser';
import { OrgOktaCommunicationSetting } from '../models/OrgOktaCommunicationSetting';
import { OrgOktaSupportSettingsObj } from '../models/OrgOktaSupportSettingsObj';
import { OrgPreferences } from '../models/OrgPreferences';
import { OrgSetting } from '../models/OrgSetting';
import { WellKnownOrgMetadata } from '../models/WellKnownOrgMetadata';
/**
 * no description
 */
export declare class OrgSettingApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Removes a list of email addresses to be removed from the set of email addresses that are bounced
     * Remove Emails from Email Provider Bounce List
     * @param BouncesRemoveListObj
     */
  bulkRemoveEmailAddressBounces(BouncesRemoveListObj?: BouncesRemoveListObj, _options?: Configuration): Promise<RequestContext>;
  /**
     * Extends the length of time that Okta Support can access your org by 24 hours. This means that 24 hours are added to the remaining access time.
     * Extend Okta Support Access
     */
  extendOktaSupport(_options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves Okta Communication Settings of your organization
     * Retrieve the Okta Communication Settings
     */
  getOktaCommunicationSettings(_options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves Contact Types of your organization
     * Retrieve the Org Contact Types
     */
  getOrgContactTypes(_options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the URL of the User associated with the specified Contact Type
     * Retrieve the User of the Contact Type
     * @param contactType
     */
  getOrgContactUser(contactType: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves Okta Support Settings of your organization
     * Retrieve the Okta Support Settings
     */
  getOrgOktaSupportSettings(_options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves preferences of your organization
     * Retrieve the Org Preferences
     */
  getOrgPreferences(_options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the org settings
     * Retrieve the Org Settings
     */
  getOrgSettings(_options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the well-known org metadata, which includes the id, configured custom domains, authentication pipeline, and various other org settings
     * Retrieve the Well-Known Org Metadata
     */
  getWellknownOrgMetadata(_options?: Configuration): Promise<RequestContext>;
  /**
     * Grants Okta Support temporary access your org as an administrator for eight hours
     * Grant Okta Support Access to your Org
     */
  grantOktaSupport(_options?: Configuration): Promise<RequestContext>;
  /**
     * Opts in all users of this org to Okta Communication emails
     * Opt in all Users to Okta Communication emails
     */
  optInUsersToOktaCommunicationEmails(_options?: Configuration): Promise<RequestContext>;
  /**
     * Opts out all users of this org from Okta Communication emails
     * Opt out all Users from Okta Communication emails
     */
  optOutUsersFromOktaCommunicationEmails(_options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces the User associated with the specified Contact Type
     * Replace the User of the Contact Type
     * @param contactType
     * @param orgContactUser
     */
  replaceOrgContactUser(contactType: string, orgContactUser: OrgContactUser, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces the settings of your organization
     * Replace the Org Settings
     * @param orgSetting
     */
  replaceOrgSettings(orgSetting: OrgSetting, _options?: Configuration): Promise<RequestContext>;
  /**
     * Revokes Okta Support access to your organization
     * Revoke Okta Support Access
     */
  revokeOktaSupport(_options?: Configuration): Promise<RequestContext>;
  /**
     * Updates the preference hide the Okta UI footer for all end users of your organization
     * Update the Preference to Hide the Okta Dashboard Footer
     */
  updateOrgHideOktaUIFooter(_options?: Configuration): Promise<RequestContext>;
  /**
     * Partially updates the org settings depending on provided fields
     * Update the Org Settings
     * @param OrgSetting
     */
  updateOrgSettings(OrgSetting?: OrgSetting, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates the preference to show the Okta UI footer for all end users of your organization
     * Update the Preference to Show the Okta Dashboard Footer
     */
  updateOrgShowOktaUIFooter(_options?: Configuration): Promise<RequestContext>;
  /**
     * Uploads and replaces the logo for your organization. The file must be in PNG, JPG, or GIF format and less than 100kB in size. For best results use landscape orientation, a transparent background, and a minimum size of 300px by 50px to prevent upscaling.
     * Upload the Org Logo
     * @param file
     */
  uploadOrgLogo(file: HttpFile, _options?: Configuration): Promise<RequestContext>;
}
export declare class OrgSettingApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to bulkRemoveEmailAddressBounces
     * @throws ApiException if the response code was not in [200, 299]
     */
  bulkRemoveEmailAddressBounces(response: ResponseContext): Promise<BouncesRemoveListResult>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to extendOktaSupport
     * @throws ApiException if the response code was not in [200, 299]
     */
  extendOktaSupport(response: ResponseContext): Promise<OrgOktaSupportSettingsObj>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOktaCommunicationSettings
     * @throws ApiException if the response code was not in [200, 299]
     */
  getOktaCommunicationSettings(response: ResponseContext): Promise<OrgOktaCommunicationSetting>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOrgContactTypes
     * @throws ApiException if the response code was not in [200, 299]
     */
  getOrgContactTypes(response: ResponseContext): Promise<Array<OrgContactTypeObj>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOrgContactUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  getOrgContactUser(response: ResponseContext): Promise<OrgContactUser>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOrgOktaSupportSettings
     * @throws ApiException if the response code was not in [200, 299]
     */
  getOrgOktaSupportSettings(response: ResponseContext): Promise<OrgOktaSupportSettingsObj>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOrgPreferences
     * @throws ApiException if the response code was not in [200, 299]
     */
  getOrgPreferences(response: ResponseContext): Promise<OrgPreferences>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOrgSettings
     * @throws ApiException if the response code was not in [200, 299]
     */
  getOrgSettings(response: ResponseContext): Promise<OrgSetting>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getWellknownOrgMetadata
     * @throws ApiException if the response code was not in [200, 299]
     */
  getWellknownOrgMetadata(response: ResponseContext): Promise<WellKnownOrgMetadata>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to grantOktaSupport
     * @throws ApiException if the response code was not in [200, 299]
     */
  grantOktaSupport(response: ResponseContext): Promise<OrgOktaSupportSettingsObj>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to optInUsersToOktaCommunicationEmails
     * @throws ApiException if the response code was not in [200, 299]
     */
  optInUsersToOktaCommunicationEmails(response: ResponseContext): Promise<OrgOktaCommunicationSetting>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to optOutUsersFromOktaCommunicationEmails
     * @throws ApiException if the response code was not in [200, 299]
     */
  optOutUsersFromOktaCommunicationEmails(response: ResponseContext): Promise<OrgOktaCommunicationSetting>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceOrgContactUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceOrgContactUser(response: ResponseContext): Promise<OrgContactUser>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceOrgSettings
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceOrgSettings(response: ResponseContext): Promise<OrgSetting>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to revokeOktaSupport
     * @throws ApiException if the response code was not in [200, 299]
     */
  revokeOktaSupport(response: ResponseContext): Promise<OrgOktaSupportSettingsObj>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateOrgHideOktaUIFooter
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateOrgHideOktaUIFooter(response: ResponseContext): Promise<OrgPreferences>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateOrgSettings
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateOrgSettings(response: ResponseContext): Promise<OrgSetting>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateOrgShowOktaUIFooter
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateOrgShowOktaUIFooter(response: ResponseContext): Promise<OrgPreferences>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to uploadOrgLogo
     * @throws ApiException if the response code was not in [200, 299]
     */
  uploadOrgLogo(response: ResponseContext): Promise<void>;
}
