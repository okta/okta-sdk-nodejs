import { expect } from 'chai';

import { Subscription, Client, User } from '@okta/okta-sdk-nodejs';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;
const orgUser = process.env.ORG_USER;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/subsctiption-user`;
}

const client = new Client({
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
    const list = await client.subscriptionApi.listUserSubscriptions({ userId: user.id });
    for await (const subscription of list) {
      subscriptions.push(subscription);
    }
    expect(subscriptions).to.be.an('array').which.is.not.empty;
  });

  it('provides method for fetching notification subscription for given user and notification type', async () => {
    const subscription = await client.subscriptionApi.listUserSubscriptionsByNotificationType({
      userId: user.id,
      notificationType: 'OKTA_ISSUE',
    });
    expect(subscription.notificationType).to.equal('OKTA_ISSUE');
  });

  it('provides methods for subscribing/unsubscribing to/from notification subscribtion for given user role and notfication type', async () => {
    let response = await client.subscriptionApi.unsubscribeUserSubscriptionByNotificationType({
      userId: user.id,
      notificationType: 'OKTA_ISSUE'
    });
    expect(response).to.be.undefined;
    let subscription = await client.subscriptionApi.listUserSubscriptionsByNotificationType({
      userId: user.id,
      notificationType: 'OKTA_ISSUE'
    });
    expect(subscription.status).to.equal('unsubscribed');

    response = await client.subscriptionApi.subscribeUserSubscriptionByNotificationType({
      userId: user.id,
      notificationType: 'OKTA_ISSUE'
    });
    expect(response).to.be.undefined;
    subscription = await client.subscriptionApi.listUserSubscriptionsByNotificationType({
      userId: user.id,
      notificationType: 'OKTA_ISSUE'
    });
    expect(subscription.status).to.equal('subscribed');
  });
});
