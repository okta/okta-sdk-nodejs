import { expectType } from 'tsd';
import { Client } from '../../src/types/client';
import { Collection } from '../../src/types/collection';
import { EmailTemplate } from '../../src/types/generated/models/EmailTemplate';

const client = new Client();
(async function () {
  // listEmailTemplates
  expectType<Collection<EmailTemplate>>(await client.customizationApi.listEmailTemplates({brandId: 'brand-id'}));

  // getEmailTemplate
  expectType<EmailTemplate>(await client.customizationApi.getEmailTemplate({brandId: 'brand-id', templateName: 'name'}));

  // deleteEmailTemplateCustomization
  expectType<void>(await client.customizationApi.deleteEmailCustomization({brandId: 'brand-id', templateName: 'name', customizationId: 'customization-id'}));

  // sendTestEmail
  expectType<void>(await client.customizationApi.sendTestEmail({brandId: 'fake-id', templateName: 'name', language: 'eng'}));
}());
