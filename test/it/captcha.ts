import { expect } from 'chai';
import {
  Client,
  DefaultRequestExecutor,
  CAPTCHAInstance,
} from '@okta/okta-sdk-nodejs';
import faker = require('@faker-js/faker');

const orgUrl = process.env.OKTA_CLIENT_ORGURL;
const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor(),
  scopes: [
    'okta.captchas.read',
    'okta.captchas.manage'
  ]
});

describe('CAPTCHA API', () => {
  let captchaInstance: CAPTCHAInstance;

  before(async () => {
    // unset org captcha instance
    const settings = await client.captchaApi.getOrgCaptchaSettings();
    if (settings.captchaId) {
      const newSettings = await client.captchaApi.replacesOrgCaptchaSettings({
        orgCAPTCHASettings: {
          captchaId: null
        }
      });
      expect(newSettings.captchaId).to.equal(null);
    }

    // delete captcha instances
    const instancesCollection = await client.captchaApi.listCaptchaInstances();
    const instances: CAPTCHAInstance[] = [];
    await instancesCollection.each(i => instances.push(i));
    for (const instance of instances) {
      if (instance.name.startsWith('node-sdk:')) {
        await client.captchaApi.deleteCaptchaInstance({
          captchaId: instance.id
        });
      }
    }
  });

  after(async () => {
    if (captchaInstance) {
      // unset org captcha instance
      const newSettings = await client.captchaApi.replacesOrgCaptchaSettings({
        orgCAPTCHASettings: {
          captchaId: null
        }
      });
      expect(newSettings.captchaId).to.equal(null);

      // delete captcha instance
      await client.captchaApi.deleteCaptchaInstance({
        captchaId: captchaInstance.id
      });
    }
  });

  it('Create instance', async () => {
    captchaInstance = await client.captchaApi.createCaptchaInstance({
      instance: {
        name: `node-sdk: Fake captcha ${faker.random.word()}`.substring(0, 49),
        siteKey: 'fake',
        secretKey: 'fake',
        type: 'HCAPTCHA'
      }
    });
    expect(captchaInstance).to.be.instanceOf(CAPTCHAInstance);
    expect(captchaInstance.type).to.equal('HCAPTCHA');
  });

  it('Use created instance', async () => {
    const newSettings = await client.captchaApi.replacesOrgCaptchaSettings({
      orgCAPTCHASettings: {
        captchaId: captchaInstance.id
      }
    });
    expect(newSettings.captchaId).to.equal(captchaInstance.id);
  });

  it('Get org settings', async () => {
    const settings = await client.captchaApi.getOrgCaptchaSettings();
    expect(settings.enabledPages).to.be.exist;
    expect(settings.captchaId).to.equal(captchaInstance.id);
  });

  it('Delete instance', async () => {
    // unset org captcha instance
    const newSettings = await client.captchaApi.replacesOrgCaptchaSettings({
      orgCAPTCHASettings: {
        captchaId: null
      }
    });
    expect(newSettings.captchaId).to.equal(null);

    // delete captcha instance
    await client.captchaApi.deleteCaptchaInstance({
      captchaId: captchaInstance.id
    });
    captchaInstance = undefined;
  });

  it('Delete org settings', async () => {
    await client.captchaApi.deleteOrgCaptchaSettings();
    const settings = await client.captchaApi.getOrgCaptchaSettings();
    expect(settings.enabledPages).to.be.exist;
    expect(settings.captchaId).to.equal(null);
  });
});
