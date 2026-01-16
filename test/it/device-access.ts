import { expect } from 'chai';
import {
  Client,
  DefaultRequestExecutor,
} from '@okta/okta-sdk-nodejs';

const orgUrl = process.env.OKTA_CLIENT_ORGURL;
const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor(),
  scopes: [
    'okta.orgs.read',
    'okta.orgs.manage'
  ]
});

describe('Device Access API', () => {
  it('Get Desktop MFA Enforce Number Matching Challenge setting', async () => {
    const setting = await client.deviceAccessApi.getDesktopMFAEnforceNumberMatchingChallengeOrgSetting();
    expect(setting.desktopMFAEnforceNumberMatchingChallengeEnabled).to.be.exist;
  });

  it('Set Desktop MFA Enforce Number Matching Challenge setting', async () => {
    const newSetting = await client.deviceAccessApi.replaceDesktopMFAEnforceNumberMatchingChallengeOrgSetting({
      desktopMFAEnforceNumberMatchingChallengeOrgSetting: {
        desktopMFAEnforceNumberMatchingChallengeEnabled: true
      }
    });
    expect(newSetting.desktopMFAEnforceNumberMatchingChallengeEnabled).to.equal(true);
  });

  it('Get Desktop MFA Recovery PIN setting', async () => {
    const setting = await client.deviceAccessApi.getDesktopMFARecoveryPinOrgSetting();
    expect(setting.desktopMFARecoveryPinEnabled).to.be.exist;
  });

  it('Set Desktop MFA Recovery PIN setting', async () => {
    const newSetting = await client.deviceAccessApi.replaceDesktopMFARecoveryPinOrgSetting({
      desktopMFARecoveryPinOrgSetting: {
        desktopMFARecoveryPinEnabled: false
      }
    });
    expect(newSetting.desktopMFARecoveryPinEnabled).to.equal(false);
  });
});
