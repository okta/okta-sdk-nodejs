import { expect } from 'chai';

import { Client } from '@okta/okta-sdk-nodejs';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/subsctiption-role`;
}

const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
});

describe('Subscription API', () => {
  it('provides method for listing notification subscriptions for given user role', async () => {
    const subscriptions = [];
    for await (const subscription of (await client.listRoleSubscriptions('ORG_ADMIN'))) {
      subscriptions.push(subscription);
    }
    expect(subscriptions).to.be.an('array').that.is.not.empty;
  });

  it('provides method for fetching notification subscription for given user role and notification type', async () => {
    const subscription = await client.getRoleSubscriptionByNotificationType('ORG_ADMIN', 'OKTA_UPDATE');
    expect(subscription.notificationType).to.equal('OKTA_UPDATE');
  });

  it('provides methods for subscribing/unsubscribing to/from notification subscribtion for given user role and notfication type', async () => {
    let response = await client.unsubscribeRoleSubscriptionByNotificationType('ORG_ADMIN', 'OKTA_UPDATE');
    expect(response).to.be.undefined;
    let subscription = await client.getRoleSubscriptionByNotificationType('ORG_ADMIN', 'OKTA_UPDATE');
    expect(subscription.status).to.equal('UNSUBSCRIBED');
    response = await client.subscribeRoleSubscriptionByNotificationType('ORG_ADMIN', 'OKTA_UPDATE');
    expect(response).to.be.undefined;
    subscription = await client.getRoleSubscriptionByNotificationType('ORG_ADMIN', 'OKTA_UPDATE');
    expect(subscription.status).to.equal('SUBSCRIBED');
  });
});
