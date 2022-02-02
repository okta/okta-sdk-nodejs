import { expect } from 'chai';

import { Client, NotificationType, RoleType, SubscriptionStatus } from '@okta/okta-sdk-nodejs';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/role-subsctiption`;
}

const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
});

describe('Subscription API', () => {
  it('provides method for listing notification subscriptions for given user role', async () => {
    const subscriptions = [];
    for await (let subscription of client.listRoleSubscriptions(RoleType.ORG_ADMIN)) {
      subscriptions.push(subscription);
    }
    expect(subscriptions).to.be.an('array').that.is.not.empty;
  });

  it('provides method for fetching notification subscription for given user role and notification type', async () => {
    const subscription = await client.getRoleSubscriptionByNotificationType(RoleType.ORG_ADMIN, NotificationType.OKTA_UPDATE);
    expect(subscription.notificationType).to.equal(NotificationType.OKTA_UPDATE);
  });

  it('provides methods for subscribing/unsubscribing to/from notification subscribtion for given user role and notfication type', async () => {
    let response = await client.unsubscribeRoleSubscriptionByNotificationType(RoleType.ORG_ADMIN, NotificationType.OKTA_UPDATE);
    expect(response.status).to.equal(200);
    let subscription = await client.getRoleSubscriptionByNotificationType(RoleType.ORG_ADMIN, NotificationType.OKTA_UPDATE);
    expect(subscription.status).to.equal(SubscriptionStatus.UNSUBSCRIBED);
    response = await client.subscribeRoleSubscriptionByNotificationType(RoleType.ORG_ADMIN, NotificationType.OKTA_UPDATE);
    expect(response.status).to.equal(200);
    subscription = await client.getRoleSubscriptionByNotificationType(RoleType.ORG_ADMIN, NotificationType.OKTA_UPDATE);
    expect(subscription.status).to.equal(SubscriptionStatus.SUBSCRIBED);
  })
});
