import { expect } from 'chai';
import {
  Client,
  Collection,
  DefaultRequestExecutor,
  SmsTemplate,
} from '@okta/okta-sdk-nodejs';
import getGeneralFakeTemplateObj = require('./mocks/template-sms');
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
    let template;
    let fakeTemplateObj;
    beforeEach(async () => {
      fakeTemplateObj = getGeneralFakeTemplateObj();
      template = await client.createSmsTemplate(fakeTemplateObj);
    });

    afterEach(async () => {
      await client.deleteSmsTemplate(template.id);
    });

    it('should return a Collection', async () => {
      const templates = await client.listSmsTemplates();
      expect(templates).to.be.instanceOf(Collection);
    });

    it('should resolve SmsTemplate in collection', async () => {
      await (await client.listSmsTemplates()).each(template => {
        expect(template).to.be.instanceOf(SmsTemplate);
      });
    });

    it('should return a collection of templates by templateType', async () => {
      fakeTemplateObj.type = 'fake_type';
      const fakeTemplateInstance = await client.createSmsTemplate(fakeTemplateObj);
      const collection = await client.listSmsTemplates({ templateType: 'fake_type' });
      await collection.each(template => {
        expect(template.type).to.equal('fake_type');
      });
      await client.deleteSmsTemplate(fakeTemplateInstance.id);
    });
  });

  describe('Create template', () => {
    let template;
    afterEach(async () => {
      await client.deleteSmsTemplate(template.id);
    });

    it('should return correct model', async () => {
      const mockTemplate = getGeneralFakeTemplateObj();
      template = await client.createSmsTemplate(mockTemplate);
      expect(template).to.be.instanceOf(SmsTemplate);
      expect(template).to.have.property('id');
      expect(template.name).to.equal(mockTemplate.name);
    });
  });

  describe('Delete template', () => {
    let template;
    beforeEach(async () => {
      template = await client.createSmsTemplate(getGeneralFakeTemplateObj());
    });

    afterEach(async () => {
      await client.deleteSmsTemplate(template.id);
    });

    it('should not get template after deletion', async () => {
      await client.deleteSmsTemplate(template.id);
      try {
        await client.getSmsTemplate(template.id);
      } catch (e) {
        expect(e.status).to.equal(404);
      }
    });
  });

  describe('Get template', () => {
    let template;
    beforeEach(async () => {
      template = await client.createSmsTemplate(getGeneralFakeTemplateObj());
    });

    afterEach(async () => {
      await client.deleteSmsTemplate(template.id);
    });

    it('should get SmsTemplate by id', async () => {
      const templateFromGet = await client.getSmsTemplate(template.id);
      expect(templateFromGet).to.be.instanceOf(SmsTemplate);
      expect(templateFromGet.name).to.equal(template.name);
    });
  });

  describe('Partial Update template', () => {
    let template;
    beforeEach(async () => {
      template = await client.createSmsTemplate(getGeneralFakeTemplateObj());
    });

    afterEach(async () => {
      await client.deleteSmsTemplate(template.id);
    });

    it('should update template name property', async () => {
      const updatedTemplate = await client.partialUpdateSmsTemplate(template.id, { name: 'fake updated name' });
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
      template = await client.createSmsTemplate(getGeneralFakeTemplateObj());
    });

    afterEach(async () => {
      await client.deleteSmsTemplate(template.id);
      // Clean up updated resource here
      // Since new resource might be created if template type is changed during update.
      await client.deleteSmsTemplate(updatedTemplate.id);
    });

    it('should update all properties in template', async () => {
      updatedTemplate = await client.updateSmsTemplate(template.id,  {
        name: 'fake updated name',
        type: 'SMS_VERIFY_CODE',
        template: 'Your fake updated verification code is ${code}.'
      });
      expect(updatedTemplate.name).to.equal('fake updated name');
      expect(updatedTemplate.translations).to.be.undefined;
    });
  });
});
