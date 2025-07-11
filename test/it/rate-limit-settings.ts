import { expect } from 'chai';
import {
  Client,
  DefaultRequestExecutor,
  PerClientRateLimitSettings,
  RateLimitAdminNotifications,
  RateLimitWarningThresholdResponse,
} from '@okta/okta-sdk-nodejs';

const orgUrl = process.env.OKTA_CLIENT_ORGURL;
const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Rate Limit Settings API', () => {
  it('Get per-client rate limit settings', async () => {
    const rateLimitSettings = await client.rateLimitSettingsApi.getRateLimitSettingsPerClient({});
    expect(rateLimitSettings).to.be.instanceOf(PerClientRateLimitSettings);
  });

  it('Set per-client rate limit settings', async () => {
    const rateLimitSettings = await client.rateLimitSettingsApi.getRateLimitSettingsPerClient({});
    const newRateLimitSettings = await client.rateLimitSettingsApi.replaceRateLimitSettingsPerClient({
      perClientRateLimitSettings: rateLimitSettings
    });
    expect(newRateLimitSettings).to.be.instanceOf(PerClientRateLimitSettings);
    expect(newRateLimitSettings.defaultMode).to.equal(rateLimitSettings.defaultMode);
    expect(newRateLimitSettings.useCaseModeOverrides).to.equal(rateLimitSettings.useCaseModeOverrides);
  });

  it('Get rate limit admin notification settings', async () => {
    const rateLimitSettings = await client.rateLimitSettingsApi.getRateLimitSettingsAdminNotifications();
    expect(rateLimitSettings).to.be.instanceOf(RateLimitAdminNotifications);
  });

  it('Set rate limit admin notification settings', async () => {
    const rateLimitSettings = await client.rateLimitSettingsApi.getRateLimitSettingsAdminNotifications();
    rateLimitSettings.notificationsEnabled = true;
    const newRateLimitSettings = await client.rateLimitSettingsApi.replaceRateLimitSettingsAdminNotifications({
      RateLimitAdminNotifications: rateLimitSettings
    });
    expect(newRateLimitSettings).to.be.instanceOf(RateLimitAdminNotifications);
    expect(newRateLimitSettings.notificationsEnabled).to.equal(rateLimitSettings.notificationsEnabled);
  });

  it('Get threshold for warning notifications', async () => {
    const rateLimitSettings = await client.rateLimitSettingsApi.getRateLimitSettingsWarningThreshold();
    expect(rateLimitSettings).to.be.instanceOf(RateLimitWarningThresholdResponse);
  });

  it('Set threshold for warning notifications', async () => {
    const newRateLimitSettings = await client.rateLimitSettingsApi.replaceRateLimitSettingsWarningThreshold({
      rateLimitWarningThreshold: {
        warningThreshold: 70
      }
    });
    expect(newRateLimitSettings).to.be.instanceOf(RateLimitWarningThresholdResponse);
    expect(newRateLimitSettings.warningThreshold).to.equal(70);
  });
});
