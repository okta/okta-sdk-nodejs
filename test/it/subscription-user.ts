import { expect } from 'chai';

import { Subscription, ApiClient, User } from '@okta/okta-sdk-nodejs';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;
const orgUser = process.env.ORG_USER;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/subsctiption-user`;
}

const client = new ApiClient({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
});

// User Subscription API endpoints can only be queried by API Token owner
describe('Subscription API', () => {
  let user: User;

  before(async () => {
    for await (const usr of await client.userApi.listUsers({search: `profile.login eq "${orgUser}"`})) {
      if (usr.profile.login === orgUser) {
        user = usr;
      }
    }
    expect(user?.id).to.not.be.undefined;
  });

  it('provides method for listing user\'s notification subscriptions', async () => {
    const subscriptions: Subscription[] = [];
    const list = await client.subscriptionApi.listSubscriptionsUser({ userId: user.id });
    for await (const subscription of list) {
      subscriptions.push(subscription);
    }
    expect(subscriptions).to.be.an('array').which.is.not.empty;
  });

  it('provides method for fetching notification subscription for given user and notification type', async () => {
    await client.subscriptionApi.subscribeByNotificationTypeUser({
      userId: user.id,
      notificationType: 'OKTA_UPDATE',
    });
    const subscriptions = await client.subscriptionApi.listSubscriptionsUser({
      userId: user.id,
    });
    let subscription: Subscription;
    await subscriptions.each(s => {
      if (s.notificationType === 'OKTA_UPDATE') {
        subscription = s;
      }
    });
    expect(subscription.notificationType).to.equal('OKTA_UPDATE');
  });

  it('provides methods for subscribing/unsubscribing to/from notification subscribtion for given user role and notfication type', async () => {
    let subscription: Subscription;
    await client.subscriptionApi.unsubscribeByNotificationTypeUser({
      userId: user.id,
      notificationType: 'OKTA_UPDATE'
    });
    let subscriptions = await client.subscriptionApi.listSubscriptionsUser({ userId: user.id });
    await subscriptions.each(s => {
      if (s.notificationType === 'OKTA_UPDATE') {
        subscription = s;
      }
    });
    expect(subscription.status).to.equal('unsubscribed');

    await client.subscriptionApi.subscribeByNotificationTypeUser({
      userId: user.id,
      notificationType: 'OKTA_UPDATE'
    });
    subscriptions = await client.subscriptionApi.listSubscriptionsUser({ userId: user.id });
    await subscriptions.each(s => {
      if (s.notificationType === 'OKTA_UPDATE') {
        subscription = s;
      }
    });
    expect(subscription.status).to.equal('subscribed');
  });
});
