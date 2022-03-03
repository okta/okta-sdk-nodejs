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
import { Response } from 'node-fetch';
import { Collection } from '../collection';
import { EmailTemplateCustomization } from './EmailTemplateCustomization';
import { EmailTemplateCustomizationRequestOptions } from './EmailTemplateCustomizationRequest';
import { EmailTemplateContent } from './EmailTemplateContent';
import { EmailTemplateTestRequestOptions } from './EmailTemplateTestRequest';

declare class EmailTemplate extends Resource {
  constructor(resourceJson: Record<string, unknown>, client: Client);

  readonly _links: {[name: string]: unknown};
  readonly name: string;

  getEmailTemplate(brandId: string, templateName: string): Promise<EmailTemplate>;
  deleteEmailTemplateCustomizations(brandId: string, templateName: string): Promise<Response>;
  listEmailTemplateCustomizations(brandId: string, templateName: string): Collection<EmailTemplateCustomization>;
  createEmailTemplateCustomization(brandId: string, templateName: string, emailTemplateCustomizationRequest: EmailTemplateCustomizationRequestOptions): Promise<EmailTemplateCustomization>;
  deleteEmailTemplateCustomization(brandId: string, templateName: string, customizationId: string): Promise<Response>;
  getEmailTemplateCustomization(brandId: string, templateName: string, customizationId: string): Promise<EmailTemplateCustomization>;
  updateEmailTemplateCustomization(brandId: string, templateName: string, customizationId: string, emailTemplateCustomizationRequest: EmailTemplateCustomizationRequestOptions): Promise<EmailTemplateCustomization>;
  getEmailTemplateCustomizationPreview(brandId: string, templateName: string, customizationId: string): Promise<EmailTemplateContent>;
  getEmailTemplateDefaultContent(brandId: string, templateName: string): Promise<EmailTemplateContent>;
  getEmailTemplateDefaultContentPreview(brandId: string, templateName: string): Promise<EmailTemplateContent>;
  sendTestEmail(brandId: string, templateName: string, emailTemplateTestRequest: EmailTemplateTestRequestOptions): Promise<Response>;
}

type EmailTemplateOptions = OptionalKnownProperties<EmailTemplate>;

export {
  EmailTemplate,
  EmailTemplateOptions
};
