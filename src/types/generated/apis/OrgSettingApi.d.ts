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
import { AutoAssignAdminAppSetting } from '../models/AutoAssignAdminAppSetting';
import { ClientPrivilegesSetting } from '../models/ClientPrivilegesSetting';
import { OktaSupportCase } from '../models/OktaSupportCase';
import { OktaSupportCases } from '../models/OktaSupportCases';
import { OrgAerialConsent } from '../models/OrgAerialConsent';
import { OrgAerialConsentDetails } from '../models/OrgAerialConsentDetails';
import { OrgAerialConsentRevoked } from '../models/OrgAerialConsentRevoked';
import { OrgContactTypeObj } from '../models/OrgContactTypeObj';
import { OrgContactUser } from '../models/OrgContactUser';
import { OrgOktaCommunicationSetting } from '../models/OrgOktaCommunicationSetting';
import { OrgOktaSupportSettingsObj } from '../models/OrgOktaSupportSettingsObj';
import { OrgPreferences } from '../models/OrgPreferences';
import { OrgSetting } from '../models/OrgSetting';
import { ThirdPartyAdminSetting } from '../models/ThirdPartyAdminSetting';
import { WellKnownOrgMetadata } from '../models/WellKnownOrgMetadata';
/**
 * no description
 */
export declare class OrgSettingApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Assigns the [Super Admin role](https://help.okta.com/okta_help.htm?type=oie&id=ext_superadmin) as the default role for new public client apps
     * Assign the default public client app role setting
     * @param clientPrivilegesSetting
     */
  assignClientPrivilegesSetting(clientPrivilegesSetting?: ClientPrivilegesSetting, _options?: Configuration): Promise<RequestContext>;
  /**
     * Extends the length of time that Okta Support can access your org by 24 hours. This means that 24 hours are added to the remaining access time.  > **Note:** This resource is deprecated. Use the [Update an Okta Support case](/openapi/okta-management/management/tag/OrgSettingSupport/#tag/OrgSettingSupport/operation/updateOktaSupportCase) resource to extend Okta Support access for a support case. > For the corresponding Okta Admin Console feature, see [Give access to Okta Support](https://help.okta.com/okta_help.htm?type=oie&id=settings-support-access).
     * Extend Okta Support access
     */
  extendOktaSupport(_options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the Okta Aerial consent grant details for your Org. Returns a 404 Not Found error if no consent has been granted.
     * Retrieve Okta Aerial consent for your org
     */
  getAerialConsent(_options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the org setting to automatically assign the Okta Admin Console when an admin role is assigned
     * Retrieve the Okta Admin Console assignment setting
     */
  getAutoAssignAdminAppSetting(_options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the org setting to assign the [Super Admin role](https://help.okta.com/okta_help.htm?type=oie&id=ext_superadmin) to new public client apps
     * Retrieve the default public client app role setting
     */
  getClientPrivilegesSetting(_options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves Okta Communication Settings of your org
     * Retrieve the Okta communication settings
     */
  getOktaCommunicationSettings(_options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all org contact types for your Okta org
     * List all org contact types
     */
  getOrgContactTypes(_options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the ID and the user resource associated with the specified contact type
     * Retrieve the contact type user
     * @param contactType
     */
  getOrgContactUser(contactType: 'BILLING' | 'TECHNICAL', _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves Okta Support Settings for your org
     * Retrieve the Okta Support settings
     */
  getOrgOktaSupportSettings(_options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves preferences of your Okta org
     * Retrieve the org preferences
     */
  getOrgPreferences(_options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the Org General Settings
     * Retrieve the Org general settings
     */
  getOrgSettings(_options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the third-party admin setting. See [Configure third-party administrators](https://help.okta.com/okta_help.htm?type=oie&id=csh_admin-third) in the Okta product documentation.
     * Retrieve the org third-party admin setting
     */
  getThirdPartyAdminSetting(_options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the org metadata, which includes the org ID, configured custom domains, and authentication pipeline
     * Retrieve the Org metadata
     */
  getWellknownOrgMetadata(_options?: Configuration): Promise<RequestContext>;
  /**
     * Grants an Okta Aerial account consent to manage your org. If the org is a child org, consent is taken from the parent org. Grant calls directly to the child are not allowed.
     * Grant Okta Aerial access to your org
     * @param orgAerialConsent
     */
  grantAerialConsent(orgAerialConsent?: OrgAerialConsent, _options?: Configuration): Promise<RequestContext>;
  /**
     * Grants Okta Support temporary access to your org as an administrator for eight hours  > **Note:** This resource is deprecated. Use the [Update an Okta Support case](/openapi/okta-management/management/tag/OrgSettingSupport/#tag/OrgSettingSupport/operation/updateOktaSupportCase) resource to grant Okta Support access for a support case. > For the corresponding Okta Admin Console feature, see [Give access to Okta Support](https://help.okta.com/okta_help.htm?type=oie&id=settings-support-access).
     * Grant Okta Support access
     */
  grantOktaSupport(_options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all Okta Support cases that the requesting principal has permission to view
     * List all Okta Support cases
     */
  listOktaSupportCases(_options?: Configuration): Promise<RequestContext>;
  /**
     * Opts in all users of this org to Okta communication emails
     * Opt in to Okta user communication emails
     */
  optInUsersToOktaCommunicationEmails(_options?: Configuration): Promise<RequestContext>;
  /**
     * Opts out all users of this org from Okta communication emails
     * Opt out of Okta user communication emails
     */
  optOutUsersFromOktaCommunicationEmails(_options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces the user associated with the specified contact type
     * Replace the contact type user
     * @param contactType
     * @param orgContactUser
     */
  replaceOrgContactUser(contactType: 'BILLING' | 'TECHNICAL', orgContactUser: OrgContactUser, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces the Org General Settings for your Okta org
     * Replace the Org general settings
     * @param orgSetting
     */
  replaceOrgSettings(orgSetting: OrgSetting, _options?: Configuration): Promise<RequestContext>;
  /**
     * Revokes access of an Okta Aerial account to your Org. The revoke operation will fail if the org has already been added to an Aerial account.
     * Revoke Okta Aerial access to your org
     * @param orgAerialConsent
     */
  revokeAerialConsent(orgAerialConsent?: OrgAerialConsent, _options?: Configuration): Promise<RequestContext>;
  /**
     * Revokes Okta Support access to your org  > **Note:** This resource is deprecated. Use the [Update an Okta Support case](/openapi/okta-management/management/tag/OrgSettingSupport/#tag/OrgSettingSupport/operation/updateOktaSupportCase) resource to revoke Okta Support access for a support case. > For the corresponding Okta Admin Console feature, see [Give access to Okta Support](https://help.okta.com/okta_help.htm?type=oie&id=settings-support-access).
     * Revoke Okta Support access
     */
  revokeOktaSupport(_options?: Configuration): Promise<RequestContext>;
  /**
     * Updates the org setting to automatically assign the Okta Admin Console when an admin role is assigned  > **Note:** This setting doesn\'t apply to the `SUPER_ADMIN` role. > When you assign the `SUPER_ADMIN` role to a user, the Admin Console is always assigned to the user regardless of the `autoAssignAdminAppSetting` setting.
     * Update the Okta Admin Console assignment setting
     * @param autoAssignAdminAppSetting
     */
  updateAutoAssignAdminAppSetting(autoAssignAdminAppSetting?: AutoAssignAdminAppSetting, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates access to the org for an Okta Support case:  * You can enable, disable, or extend access to your org for an Okta Support case.  * You can approve Okta Support access to your org for self-assigned cases. A self-assigned case is created and assigned by the same Okta Support user.
     * Update an Okta Support case
     * @param caseNumber
     * @param oktaSupportCase
     */
  updateOktaSupportCase(caseNumber: string, oktaSupportCase?: OktaSupportCase, _options?: Configuration): Promise<RequestContext>;
  /**
     * Sets the preference to hide the Okta End-User Dashboard footer for all end users of your org
     * Set the hide dashboard footer preference
     */
  updateOrgHideOktaUIFooter(_options?: Configuration): Promise<RequestContext>;
  /**
     * Updates partial Org General Settings
     * Update the Org general settings
     * @param orgSetting
     */
  updateOrgSettings(orgSetting?: OrgSetting, _options?: Configuration): Promise<RequestContext>;
  /**
     * Sets the preference to show the Okta UI footer for all end users of your org
     * Set the show dashboard footer preference
     */
  updateOrgShowOktaUIFooter(_options?: Configuration): Promise<RequestContext>;
  /**
     * Updates the third-party admin setting. This setting allows third-party admins to perform administrative actions in the Admin Console, but they can\'t do any of the following:   * Receive Okta admin email notifications   * Contact Okta support   * Sign in to the Okta Help Center  See [Configure third-party administrators](https://help.okta.com/okta_help.htm?type=oie&id=csh_admin-third) in the Okta product documentation.
     * Update the org third-party admin setting
     * @param thirdPartyAdminSetting
     */
  updateThirdPartyAdminSetting(thirdPartyAdminSetting: ThirdPartyAdminSetting, _options?: Configuration): Promise<RequestContext>;
  /**
     * Uploads and replaces the logo for your organization
     * Upload the org logo
     * @param file The file must be in PNG, JPG, or GIF format and less than 1 MB in size. For best results use landscape orientation, a transparent background, and a minimum size of 420px by 120px to prevent upscaling.
     */
  uploadOrgLogo(file: HttpFile, _options?: Configuration): Promise<RequestContext>;
}
export declare class OrgSettingApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assignClientPrivilegesSetting
     * @throws ApiException if the response code was not in [200, 299]
     */
  assignClientPrivilegesSetting(response: ResponseContext): Promise<ClientPrivilegesSetting>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to extendOktaSupport
     * @throws ApiException if the response code was not in [200, 299]
     */
  extendOktaSupport(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAerialConsent
     * @throws ApiException if the response code was not in [200, 299]
     */
  getAerialConsent(response: ResponseContext): Promise<OrgAerialConsentDetails>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAutoAssignAdminAppSetting
     * @throws ApiException if the response code was not in [200, 299]
     */
  getAutoAssignAdminAppSetting(response: ResponseContext): Promise<AutoAssignAdminAppSetting>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getClientPrivilegesSetting
     * @throws ApiException if the response code was not in [200, 299]
     */
  getClientPrivilegesSetting(response: ResponseContext): Promise<ClientPrivilegesSetting>;
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
     * @params response Response returned by the server for a request to getThirdPartyAdminSetting
     * @throws ApiException if the response code was not in [200, 299]
     */
  getThirdPartyAdminSetting(response: ResponseContext): Promise<ThirdPartyAdminSetting>;
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
     * @params response Response returned by the server for a request to grantAerialConsent
     * @throws ApiException if the response code was not in [200, 299]
     */
  grantAerialConsent(response: ResponseContext): Promise<OrgAerialConsentDetails>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to grantOktaSupport
     * @throws ApiException if the response code was not in [200, 299]
     */
  grantOktaSupport(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listOktaSupportCases
     * @throws ApiException if the response code was not in [200, 299]
     */
  listOktaSupportCases(response: ResponseContext): Promise<OktaSupportCases>;
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
     * @params response Response returned by the server for a request to revokeAerialConsent
     * @throws ApiException if the response code was not in [200, 299]
     */
  revokeAerialConsent(response: ResponseContext): Promise<OrgAerialConsentRevoked>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to revokeOktaSupport
     * @throws ApiException if the response code was not in [200, 299]
     */
  revokeOktaSupport(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateAutoAssignAdminAppSetting
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateAutoAssignAdminAppSetting(response: ResponseContext): Promise<AutoAssignAdminAppSetting>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateOktaSupportCase
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateOktaSupportCase(response: ResponseContext): Promise<OktaSupportCase>;
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
     * @params response Response returned by the server for a request to updateThirdPartyAdminSetting
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateThirdPartyAdminSetting(response: ResponseContext): Promise<ThirdPartyAdminSetting>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to uploadOrgLogo
     * @throws ApiException if the response code was not in [200, 299]
     */
  uploadOrgLogo(response: ResponseContext): Promise<void>;
}
