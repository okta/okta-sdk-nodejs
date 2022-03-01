import { expect } from 'chai';
import {
  Client,
  Collection,
  DefaultRequestExecutor,
  EmailTemplate,
} from '@okta/okta-sdk-nodejs';
import getGeneralFakeTemplateObj = require('./mocks/template-email');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/template-email`;
}

const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Email Template API', () => {
  describe('List templates', () => {
    let template;
    let fakeTemplateObj;
    beforeEach(async () => {
      fakeTemplateObj = getGeneralFakeTemplateObj();
      template = await client.createEmailTemplate(fakeTemplateObj);
    });

    afterEach(async () => {
      if (template) {
        await client.deleteEmailTemplate(template.id);
      }
    });

    it('should return a Collection', async () => {
      const templates = await client.listEmailTemplates();
      expect(templates).to.be.instanceOf(Collection);
    });

    it('should resolve Email Template in collection', async () => {
      await client.listEmailTemplates().each(template => {
        expect(template).to.be.instanceOf(EmailTemplate);
      });
    });

    it('should return a collection of templates by templateType', async () => {
      fakeTemplateObj.type = 'fake_type';
      const fakeTemplateInstance = await client.createEmailTemplate(fakeTemplateObj);
      await client.listEmailTemplates({ template: 'fake_type' }).each(template => {
        expect(template.type).to.equal('fake_type');
      });
      await client.deleteEmailTemplate(fakeTemplateInstance.id);
    });
  });

  describe('Create template', () => {
    let template;
    afterEach(async () => {
      await client.deleteEmailTemplate(template.id);
    });

    it('should return correct model', async () => {
      const mockTemplate = getGeneralFakeTemplateObj();
      template = await client.createEmailTemplate(mockTemplate);
      expect(template).to.be.instanceOf(EmailTemplate);
      expect(template).to.have.property('id');
      expect(template.name).to.equal(mockTemplate.name);
    });
  });

  describe('Delete template', () => {
    let template;
    beforeEach(async () => {
      template = await client.createEmailTemplate(getGeneralFakeTemplateObj());
    });

    afterEach(async () => {
      await client.deleteEmailTemplate(template.id);
    });

    it('should not get template after deletion', async () => {
      await client.deleteEmailTemplate(template.id);
      try {
        await client.getEmailTemplate(template.id);
      } catch (e) {
        expect(e.status).to.equal(404);
      }
    });
  });

  describe('Get template', () => {
    let template;
    beforeEach(async () => {
      template = await client.createEmailTemplate(getGeneralFakeTemplateObj());
    });

    afterEach(async () => {
      await client.deleteEmailTemplate(template.id);
    });

    it('should get Email Template by id', async () => {
      const templateFromGet = await client.getEmailTemplate(template.id);
      expect(templateFromGet).to.be.instanceOf(EmailTemplate);
      expect(templateFromGet.name).to.equal(template.name);
    });
  });

  describe('Update template', () => {
    let template;
    let updatedTemplate;
    beforeEach(async () => {
      template = await client.createEmailTemplate(getGeneralFakeTemplateObj());
    });

    afterEach(async () => {
      await client.deleteEmailTemplate(template.id);
      // Clean up updated resource here
      // Since new resource might be created if template type is changed during update.
      await client.deleteEmailTemplate(updatedTemplate.id);
    });

    it('should update all properties in template', async () => {
      updatedTemplate = await client.updateEmailTemplate(template.id, {
        name: 'fake updated name',
        type: 'fake updated type',
        template: 'Your fake updated verification code is ${code}.'
      });
      expect(updatedTemplate.name).to.equal('fake updated name');
      expect(updatedTemplate.translations).to.be.undefined;
    });
  });
});
