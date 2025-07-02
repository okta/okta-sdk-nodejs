import { expectType } from 'tsd';
import { ApiClient } from '../../src/types/client';
import { Collection } from '../../src/types/collection';
import { EmailTemplateResponse } from '../../src/types/generated/models/EmailTemplateResponse';

const client = new ApiClient();
(async function () {
  // listEmailTemplates
  expectType<Collection<EmailTemplateResponse>>(await client.customizationApi.listEmailTemplates({brandId: 'brand-id'}));

  // getEmailTemplate
  expectType<EmailTemplateResponse>(await client.customizationApi.getEmailTemplate({brandId: 'brand-id', templateName: 'name'}));

  // deleteEmailTemplateCustomization
  expectType<void>(await client.customizationApi.deleteEmailCustomization({brandId: 'brand-id', templateName: 'name', customizationId: 'customization-id'}));

  // sendTestEmail
  expectType<void>(await client.customizationApi.sendTestEmail({brandId: 'fake-id', templateName: 'name', language: 'eng'}));
}());
