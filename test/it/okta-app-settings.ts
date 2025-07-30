import {
  Client,
  DefaultRequestExecutor,
} from '@okta/okta-sdk-nodejs';
import { expect } from 'chai';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-token`;
}

const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor(),
  scopes: [
    'okta.apps.read',
    'okta.apps.manage'
  ]
});

describe('OktaApplicationSettingsApi', () => {
  it('Get', async () => {
    const appSettings = await client.oktaApplicationSettingsApi.getFirstPartyAppSettings({
      appName: 'admin-console'
    });
    expect(appSettings.sessionIdleTimeoutMinutes).to.be.not.undefined;
    expect(appSettings.sessionMaxLifetimeMinutes).to.be.not.undefined;
  });

  it('Set', async () => {
    let appSettings = await client.oktaApplicationSettingsApi.getFirstPartyAppSettings({
      appName: 'admin-console'
    });
    appSettings = await client.oktaApplicationSettingsApi.replaceFirstPartyAppSettings({
      appName: 'admin-console',
      adminConsoleSettings: {
        ...appSettings
      }
    });
    expect(appSettings.sessionIdleTimeoutMinutes).to.be.not.undefined;
    expect(appSettings.sessionMaxLifetimeMinutes).to.be.not.undefined;
  });
});
