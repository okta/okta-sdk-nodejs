const expect = require('chai').expect;
const deepCopy = require('deep-copy');
const okta = require('../../src');
const models = require('../../src/models');
const Collection = require('../../src/collection');
const generalFakeTemplateObj = require('./mocks/template-sms.json')
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/template-sms`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('SmsTemplate API', () => {
  describe('List templates', () => {
    let template;
    let fakeTemplateObj;
    beforeEach(async () => {
      fakeTemplateObj = deepCopy(generalFakeTemplateObj);
      template = await client.createSmsTemplate(fakeTemplateObj);
    });

    afterEach(async () => {
      await template.delete();
    });

    it('should return a Collection', async () => {
      const templates = await client.listSmsTemplates();
      expect(templates).to.be.instanceOf(Collection);
    });

    it('should resolve SmsTemplate in collection', async () => {
      await client.listSmsTemplates().each(template => {
        expect(template).to.be.instanceOf(models.SmsTemplate);
      });
    });

    it('should return a collection of templates by templateType', async () => {
      fakeTemplateObj.type = 'fake_type';
      const fakeTemplateInstance = await client.createSmsTemplate(fakeTemplateObj);
      await client.listSmsTemplates({ templateType: 'fake_type' }).each(template => {
        expect(template.type).to.equal('fake_type');
      });
      await fakeTemplateInstance.delete();
    });
  });

  describe('Create template', () => {
    let template;
    afterEach(async () => {
      await template.delete();
    });

    it('should return correct model', async () => {
      template = await client.createSmsTemplate(generalFakeTemplateObj);
      expect(template).to.be.instanceOf(models.SmsTemplate);
    });

    it('should return correct data with id assigned', async () => {
      template = await client.createSmsTemplate(generalFakeTemplateObj);
      expect(template).to.have.property('id');
      expect(template.name).to.equal(generalFakeTemplateObj.name);
    });
  });

  describe('Delete template', () => {
    let template;
    beforeEach(async () => {
      template = await client.createSmsTemplate(generalFakeTemplateObj);
    });

    afterEach(async () => {
      await template.delete();
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
      template = await client.createSmsTemplate(generalFakeTemplateObj);
    });

    afterEach(async () => {
      await template.delete();
    });

    it('should get SmsTemplate by id', async () => {
      const templateFromGet = await client.getSmsTemplate(template.id);
      expect(templateFromGet).to.be.instanceOf(models.SmsTemplate);
      expect(templateFromGet.name).to.equal(generalFakeTemplateObj.name);
    });
  });

  describe('Partial Update template', () => {
    let template;
    beforeEach(async () => {
      template = await client.createSmsTemplate(generalFakeTemplateObj);
    });

    afterEach(async () => {
      await template.delete();
    });

    it('should update template name property', async () => {
      const updatedTemplate = await client.partialUpdateSmsTemplate(template.id, { name: 'fake updated name' });
      expect(updatedTemplate).to.be.instanceOf(models.SmsTemplate);
      expect(updatedTemplate.id).to.equal(template.id);
      expect(updatedTemplate.name).to.equal('fake updated name');
      expect(updatedTemplate.template).to.equal(generalFakeTemplateObj.template);
    });
  });

  describe('Update template', () => {
    let template;
    let updatedTemplate;
    beforeEach(async () => {
      template = await client.createSmsTemplate(generalFakeTemplateObj);
    });

    afterEach(async () => {
      await template.delete();
      // Clean up updated resource here
      // Since new resource might be created if template type is changed during update.
      await updatedTemplate.delete();
    });

    it('should update all properties in template', async () => {
      updatedTemplate = await client.updateSmsTemplate(template.id, {
        name: 'fake updated name',
        type: 'fake updated type',
        template: 'Your fake updated verification code is ${code}.'
      });
      expect(updatedTemplate.name).to.equal('fake updated name');
      expect(updatedTemplate.translations).to.be.undefined;
    });
  });
});
