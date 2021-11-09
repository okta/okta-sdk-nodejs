import { expect } from 'chai';
import utils = require('../utils');

import {
  Client, OrgContactType, OrgOktaSupportSetting
} from '@okta/okta-sdk-nodejs';

const client = new Client({
  orgUrl: process.env.OKTA_CLIENT_ORGURL,
  token: process.env.OKTA_CLIENT_TOKEN,
});

describe('Org API', () => {

  it('allows fetching and updating Org settings', async () => {
    let orgSettings = await client.getOrgSettings();
    const companyNameSuffix = '- updated by IT';
    const originalCompanyName = orgSettings.companyName;
    expect(originalCompanyName).to.not.contain(companyNameSuffix);
    await client.updateOrgSetting({
      companyName: `${originalCompanyName} ${companyNameSuffix}`
    });
    orgSettings = await client.getOrgSettings();
    expect(orgSettings.companyName).to.contain(companyNameSuffix);
    await client.updateOrgSetting({
      companyName: originalCompanyName
    });
  });

  it('allows fetching and updating Org contact user', async () => {
    const contactTypes = [];
    await client.getOrgContactTypes().each(contactTypeObj => contactTypes.push(contactTypeObj.contactType));
    expect(contactTypes).to.contain(OrgContactType.BILLING, OrgContactType.TECHNICAL);
    for (const contactType of contactTypes) {
      const newUser = {
        profile: utils.getMockProfile('org-api-update-contact-user'),
        credentials: {
          password: { value: 'Abcd1234' }
        }
      };

      // Cleanup the user if user exists
      await utils.cleanup(client, newUser);

      const createdUser = await client.createUser({
        profile: utils.getMockProfile('org-api-update-contact-user'),
        credentials: {
          password: { value: 'Abcd1234' }
        }
      }, {activate: true});

      const defaultOrgContactUser = await client.getOrgContactUser(contactType);

      const updatedOrgContactUser = await client.updateOrgContactUser(contactType, {userId: createdUser.id});
      expect(updatedOrgContactUser.userId).to.equal(createdUser.id);
      await client.updateOrgContactUser(contactType, {userId: defaultOrgContactUser.userId});

      await utils.cleanup(client, createdUser);
    }
  });

  it('gets Org preferences and allows toggling footer visibility', async () => {
    await client.hideOktaUIFooter();
    let orgPreferences = await client.getOrgPreferences();
    expect(orgPreferences._showEndUserFooter).to.equal(false);
    orgPreferences = await orgPreferences.showEndUserFooter();
    expect(orgPreferences._showEndUserFooter).to.equal(true);
    orgPreferences = await client.hideOktaUIFooter();
    expect(orgPreferences._showEndUserFooter).to.equal(false);
  });

  it('allows listing and configuring Org communication settings', async () => {
    await client.optInUsersToOktaCommunicationEmails();
    let communicationSettings = await client.getOktaCommunicationSettings();
    expect(communicationSettings.optOutEmailUsers).to.equal(false);
    communicationSettings = await client.optOutUsersFromOktaCommunicationEmails();
    expect(communicationSettings.optOutEmailUsers).to.equal(true);
    communicationSettings = await communicationSettings.optInUsersToOktaCommunicationEmails();
    expect(communicationSettings.optOutEmailUsers).to.equal(false);
  });

  it('allows listing and configuring Org support settings', async () => {
    await client.revokeOktaSupport();
    let supportSettings = await client.getOrgOktaSupportSettings();
    expect(supportSettings.support).to.equal(OrgOktaSupportSetting.DISABLED);
    supportSettings = await client.grantOktaSupport();
    expect(supportSettings.support).to.equal(OrgOktaSupportSetting.ENABLED);

    const currentExpirationDate = new Date(supportSettings.expiration);
    supportSettings = await supportSettings.extendOktaSupport();
    expect(new Date(supportSettings.expiration)).to.be.greaterThanOrEqual(currentExpirationDate);
    supportSettings = await client.revokeOktaSupport();
    expect(supportSettings.support).to.equal(OrgOktaSupportSetting.DISABLED);
  });

  it('updates Org logo', async () => {
    const file = utils.getMockImage('logo.png');
    const response = await client.updateOrgLogo(file);
    expect(response.status).to.equal(201);
  });
});
