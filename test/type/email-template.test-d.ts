import { expectType } from 'tsd';
import { Response } from 'node-fetch';
import { Client } from '../../src/types/client';
import { Collection } from '../../src/types/collection';
import { EmailTemplate } from '../../src/types/generated/models/EmailTemplate';

const client = new Client();
(async function () {
  // listEmailTemplates
  expectType<Collection<EmailTemplate>>(await client.listEmailTemplates('brand-id'));

  // getEmailTemplate
  expectType<EmailTemplate>(await client.getEmailTemplate('brand-id', 'name'));

  // deleteEmailTemplateCustomization
  expectType<void>(await client.deleteEmailTemplateCustomization('brand-id', 'name', 'customization-id'));

  // sendTestEmail
  expectType<void>(await client.sendTestEmail('fake-id', 'name', 'eng'));
}());
