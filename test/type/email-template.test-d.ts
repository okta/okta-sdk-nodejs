import { expectType, expectAssignable } from 'tsd';
import { Response } from 'node-fetch';
import { Client } from '../../src/types/client';
import { Collection } from '../../src/types/collection';
import { EmailTemplate, EmailTemplateOptions } from '../../src/types/models/EmailTemplate';
import { EmailTestInfo } from '../../src/types/models/EmailTestInfo';

const client = new Client();
(async function () {
  // deleteEmailTemplate
  expectType<Response>(await client.deleteEmailTemplate('fake-id'));

  // getEmailTemplate
  expectType<EmailTemplate>(await client.getEmailTemplate('fake-id'));

  // updateEmailTemplate
  const updateOptions = {
    name: 'fake-name',
    template: 'fake-template'
  };
  expectAssignable<EmailTemplateOptions>(updateOptions);
  expectType<EmailTemplate>(await client.updateEmailTemplate('fake-id', updateOptions));

  // getTestEmailInfo
  expectType<EmailTestInfo>(await client.getTestEmailInfo('fake-id'));

  // listEmailTemplates
  expectType<Collection<EmailTemplate>>(await client.listEmailTemplates());
  expectType<Collection<EmailTemplate>>(await client.listEmailTemplates({ template: 'fake-template' }));

  // createEmailTemplates
  const createOptions = {
    name: 'fake-name',
    template: 'fake-template'
  };
  expectAssignable<EmailTemplateOptions>(createOptions);
  expectType<EmailTemplate>(await client.createEmailTemplate(createOptions));
}());
