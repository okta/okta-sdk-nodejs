import { expect } from 'chai';
import {
  Collection,
  DefaultRequestExecutor,
  SmsTemplate,
  Client
} from '@okta/okta-sdk-nodejs';
import getGeneralFakeTemplateObj = require('./mocks/template-sms');
import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/template-sms`;
}

const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('SmsTemplate API', () => {
  describe('List templates', () => {
    let template: SmsTemplate;
    let fakeTemplateObj: SmsTemplate;
    beforeEach(async () => {
      fakeTemplateObj = getGeneralFakeTemplateObj();
      template = await client.templateApi.createSmsTemplate({
        smsTemplate: fakeTemplateObj
      });
    });

    afterEach(async () => {
      await client.templateApi.deleteSmsTemplate({
        templateId: template.id
      });
    });

    it('should return a Collection', async () => {
      const templates = await client.templateApi.listSmsTemplates();
      expect(templates).to.be.instanceOf(Collection);
    });

    it('should resolve SmsTemplate in collection', async () => {
      await (await client.templateApi.listSmsTemplates()).each(template => {
        expect(template).to.be.instanceOf(SmsTemplate);
      });
    });

    it('should return a collection of templates by templateType', async () => {
      (fakeTemplateObj as any).type = 'fake_type';
      const fakeTemplateInstance = await client.templateApi.createSmsTemplate({
        smsTemplate: fakeTemplateObj
      });
      const collection = await client.templateApi.listSmsTemplates({
        templateType: 'fake_type'
      } as any);
      await collection.each(template => {
        expect(template.type).to.equal('fake_type');
      });
      await client.templateApi.deleteSmsTemplate({
        templateId: fakeTemplateInstance.id
      });
    });
  });

  describe('Create template', () => {
    let template;
    afterEach(async () => {
      await client.templateApi.deleteSmsTemplate({
        templateId: template.id
      });
    });

    it('should return correct model', async () => {
      const mockTemplate = getGeneralFakeTemplateObj();
      template = await client.templateApi.createSmsTemplate({
        smsTemplate: mockTemplate
      });
      expect(template).to.be.instanceOf(SmsTemplate);
      expect(template).to.have.property('id');
      expect(template.name).to.equal(mockTemplate.name);
    });
  });

  describe('Delete template', () => {
    let template: SmsTemplate;
    beforeEach(async () => {
      template = await client.templateApi.createSmsTemplate({
        smsTemplate: getGeneralFakeTemplateObj()
      });
    });

    afterEach(async () => {
      await client.templateApi.deleteSmsTemplate({
        templateId: template.id
      });
    });

    it('should not get template after deletion', async () => {
      await client.templateApi.deleteSmsTemplate({
        templateId: template.id
      });
      try {
        await client.templateApi.getSmsTemplate({
          templateId: template.id
        });
      } catch (e) {
        expect(e.status).to.equal(404);
      }
    });
  });

  describe('Get template', () => {
    let template: SmsTemplate;
    beforeEach(async () => {
      template = await client.templateApi.createSmsTemplate({
        smsTemplate: getGeneralFakeTemplateObj()
      });
    });

    afterEach(async () => {
      await client.templateApi.deleteSmsTemplate({
        templateId: template.id
      });
    });

    it('should get SmsTemplate by id', async () => {
      const templateFromGet = await client.templateApi.getSmsTemplate({
        templateId: template.id
      });
      expect(templateFromGet).to.be.instanceOf(SmsTemplate);
      expect(templateFromGet.name).to.equal(template.name);
    });
  });

  describe('Partial Update template', () => {
    let template;
    beforeEach(async () => {
      template = await client.templateApi.createSmsTemplate({
        smsTemplate: getGeneralFakeTemplateObj()
      });
    });

    afterEach(async () => {
      await client.templateApi.deleteSmsTemplate({
        templateId: template.id
      });
    });

    it('should update template name property', async () => {
      const updatedTemplate = await client.templateApi.updateSmsTemplate({
        templateId: template.id, 
        smsTemplate: { name: 'fake updated name' }
      });
      expect(updatedTemplate).to.be.instanceOf(SmsTemplate);
      expect(updatedTemplate.id).to.equal(template.id);
      expect(updatedTemplate.name).to.equal('fake updated name');
      expect(updatedTemplate.template).to.equal(template.template);
    });
  });

  describe('Update template', () => {
    let template;
    let updatedTemplate;
    beforeEach(async () => {
      template = await client.templateApi.createSmsTemplate({
        smsTemplate: getGeneralFakeTemplateObj()
      });
    });

    afterEach(async () => {
      await client.templateApi.deleteSmsTemplate({
        templateId: template.id
      });
      // Clean up updated resource here
      // Since new resource might be created if template type is changed during update.
      await client.templateApi.deleteSmsTemplate({
        templateId: updatedTemplate.id
      });
    });

    it('should update all properties in template', async () => {
      updatedTemplate = await client.templateApi.replaceSmsTemplate({
        templateId: template.id,
        smsTemplate: {
          name: 'fake updated name',
          type: 'SMS_VERIFY_CODE',
          template: 'Your fake updated verification code is ${code}.'
        }
      });
      expect(updatedTemplate.name).to.equal('fake updated name');
      expect(updatedTemplate.translations).to.be.undefined;
    });
  });
});
