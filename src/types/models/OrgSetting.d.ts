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

import { Resource } from '../resource';
import { Client } from '../client';
import { OptionalKnownProperties } from '../optional-known-properties-type';
import { Collection } from '../collection';
import { OrgContactTypeObj } from './OrgContactTypeObj';
import { OrgContactUser } from './OrgContactUser';
import { OrgOktaSupportSettingsObj } from './OrgOktaSupportSettingsObj';
import { OrgOktaCommunicationSetting } from './OrgOktaCommunicationSetting';
import { OrgPreferences } from './OrgPreferences';
import { ReadStream } from 'fs';
import { Response } from 'node-fetch';

declare class OrgSetting extends Resource {
  constructor(resourceJson: Record<string, unknown>, client: Client);

  _links: Record<string, unknown>;
  address1: string;
  address2: string;
  city: string;
  companyName: string;
  country: string;
  readonly created: string;
  endUserSupportHelpURL: string;
  readonly expiresAt: string;
  readonly id: string;
  readonly lastUpdated: string;
  phoneNumber: string;
  postalCode: string;
  state: string;
  readonly status: string;
  readonly subdomain: string;
  supportPhoneNumber: string;
  website: string;

  update(): Promise<OrgSetting>;
  partialUpdate(): Promise<OrgSetting>;
  getContactTypes(): Collection<OrgContactTypeObj>;
  getOrgContactUser(contactType: string): Promise<OrgContactUser>;
  getSupportSettings(): Promise<OrgOktaSupportSettingsObj>;
  communicationSettings(): Promise<OrgOktaCommunicationSetting>;
  orgPreferences(): Promise<OrgPreferences>;
  showFooter(): Promise<OrgPreferences>;
  hideFooter(): Promise<OrgPreferences>;
  updateOrgLogo(file: ReadStream): Promise<Response>;
}

type OrgSettingOptions = OptionalKnownProperties<OrgSetting>;

export {
  OrgSetting,
  OrgSettingOptions
};
