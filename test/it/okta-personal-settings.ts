import {
  Client,
  DefaultRequestExecutor,
} from '@okta/okta-sdk-nodejs';
import { expect } from 'chai';

const orgUrl = process.env.OKTA_CLIENT_ORGURL;
const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor(),
  scopes: [
    'okta.personal.adminSettings.manage',
    'okta.personal.adminSettings.read'
  ]
});

describe('OktaPersonalSettingsApi', () => {
  it('Get and set blocked email domains', async () => {
    await client.oktaPersonalSettingsApi.replaceBlockedEmailDomains({
      personalAppsBlockList: {
        domains: [
          'evil.com'
        ]
      }
    });

    const personalAppsBlockList = await client.oktaPersonalSettingsApi.listPersonalAppsExportBlockList({});
    expect(personalAppsBlockList.domains).to.include('evil.com');
  });

  it('Replace Okta personal admin settings', async () => {
    await client.oktaPersonalSettingsApi.replaceOktaPersonalAdminSettings({
      oktaPersonalAdminFeatureSettings: {
        enableEnduserEntryPoints: true,
        enableExportApps: true
      }
    });
  });
});
