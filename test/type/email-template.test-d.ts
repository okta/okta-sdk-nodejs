import { expectType } from 'tsd';
import { Response } from 'node-fetch';
import { Client } from '../../src/types/client';
import { Collection } from '../../src/types/collection';
import { EmailTemplate } from '../../src/types/models/EmailTemplate';
import { EmailTemplateCustomization } from '../../src/types/models/EmailTemplateCustomization';
import { EmailTemplateContent } from '../../src/types/models/EmailTemplateContent';

const client = new Client();
(async function () {
  // listEmailTemplates
  expectType<Collection<EmailTemplate>>(await client.listEmailTemplates('brand-id'));

  // getEmailTemplate
  expectType<EmailTemplate>(await client.getEmailTemplate('brand-id', 'name'));

  // deleteEmailTemplateCustomization
  expectType<Response>(await client.deleteEmailTemplateCustomization('brand-id', 'name', 'customization-id'));

  // getEmailTemplateCustomization
  expectType<EmailTemplateCustomization>(await client.getEmailTemplateCustomization('fake-id', 'name', 'customization-id'));

  // updateEmailTemplateCustomization
  expectType<EmailTemplateCustomization>(await client.updateEmailTemplateCustomization('fake-id', 'name', 'customization-id', {}));

  // getEmailTemplateCustomizationPreview
  expectType<EmailTemplateContent>(await client.getEmailTemplateCustomizationPreview('fake-id', 'name', 'customization-id'));

  // getEmailTemplateDefaultContent
  expectType<EmailTemplateContent>(await client.getEmailTemplateDefaultContent('fake-id', 'name'));

  // getEmailTemplateDefaultContent
  expectType<EmailTemplateContent>(await client.getEmailTemplateDefaultContentPreview('fake-id', 'name'));

  // sendTestEmail
  expectType<EmailTemplateContent>(await client.sendTestEmail('fake-id', 'name', {}));
}());
