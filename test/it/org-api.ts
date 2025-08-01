import { expect } from 'chai';
import utils = require('../utils');
import {
  Client,
  OrgContactType
} from '@okta/okta-sdk-nodejs';

const client = new Client({
  orgUrl: process.env.OKTA_CLIENT_ORGURL,
  token: process.env.OKTA_CLIENT_TOKEN,
});

describe('Org API', () => {

  it('allows fetching and updating Org settings', async () => {
    let orgSettings = await client.orgSettingApi.getOrgSettings();
    const companyNameSuffix = '- updated by IT';
    const originalCompanyName = orgSettings.companyName;
    expect(originalCompanyName).to.not.contain(companyNameSuffix);
    await client.orgSettingApi.updateOrgSettings({
      OrgSetting: {
        companyName: `${originalCompanyName} ${companyNameSuffix}`
      }
    });
    orgSettings = await client.orgSettingApi.getOrgSettings();
    expect(orgSettings.companyName).to.contain(companyNameSuffix);
    await client.orgSettingApi.updateOrgSettings({
      OrgSetting: {
        companyName: originalCompanyName
      }
    });
  });

  it('allows fetching and updating Org contact user', async () => {
    const contactTypes: OrgContactType[] = [];
    const list = await client.orgSettingApi.getOrgContactTypes();
    await list.each(async contactTypeObj =>
      contactTypes.push(contactTypeObj.contactType)
    );
    expect(contactTypes).to.contain('BILLING', 'TECHNICAL');
    for (const contactType of contactTypes) {
      const newUser = {
        profile: utils.getMockProfile('org-api-update-contact-user'),
        credentials: {
          password: { value: 'Abcd1234#@' }
        }
      };

      // Cleanup the user if user exists
      await utils.cleanup(client, newUser);

      const createdUser = await client.userApi.createUser({
        body: {
          profile: utils.getMockProfile('org-api-update-contact-user'),
          credentials: {
            password: { value: 'Abcd1234#@' }
          }
        },
        activate: true
      });

      const defaultOrgContactUser = await client.orgSettingApi.getOrgContactUser({
        contactType
      });

      const updatedOrgContactUser = await client.orgSettingApi.replaceOrgContactUser({
        contactType,
        orgContactUser: {
          userId: createdUser.id
        }
      });
      expect(updatedOrgContactUser.userId).to.equal(createdUser.id);
      await client.orgSettingApi.replaceOrgContactUser({
        contactType,
        orgContactUser: {
          userId: defaultOrgContactUser.userId
        }
      });

      await utils.cleanup(client, createdUser);
    }
  });

  it('gets Org preferences and allows toggling footer visibility', async () => {
    await client.orgSettingApi.updateOrgHideOktaUIFooter();
    let orgPreferences = await client.orgSettingApi.getOrgPreferences();
    expect(orgPreferences.showEndUserFooter).to.equal(false);
    orgPreferences = await client.orgSettingApi.updateOrgShowOktaUIFooter();
    expect(orgPreferences.showEndUserFooter).to.equal(true);
    orgPreferences = await client.orgSettingApi.updateOrgHideOktaUIFooter();
    expect(orgPreferences.showEndUserFooter).to.equal(false);
  });

  it('allows listing and configuring Org communication settings', async () => {
    await client.orgSettingApi.optInUsersToOktaCommunicationEmails();
    let communicationSettings = await client.orgSettingApi.getOktaCommunicationSettings();
    expect(communicationSettings.optOutEmailUsers).to.equal(false);
    communicationSettings = await client.orgSettingApi.optOutUsersFromOktaCommunicationEmails();
    expect(communicationSettings.optOutEmailUsers).to.equal(true);
    communicationSettings = await client.orgSettingApi.optInUsersToOktaCommunicationEmails();
    expect(communicationSettings.optOutEmailUsers).to.equal(false);
  });

  it('updates Org logo', async () => {
    const file = utils.getMockImage('logo.png');
    const response = await client.orgSettingApi.uploadOrgLogo({
      file: {
        data: file,
        name: 'logo.png'
      }
    });
    expect(response).to.equal(undefined);
  });
});
