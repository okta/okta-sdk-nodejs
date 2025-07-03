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
    if (user) {
      expect(user?.id).to.not.be.undefined;
    } else {
      console.warn('Please check the value of ORG_USER env var, it should match login of existing user');
    }
  });

  it('provides method for listing user\'s notification subscriptions', async function () {
    if (!user) {
      // ORG_USER is not correct
      this.skip();
    }
    try {
      const subscriptions: Subscription[] = [];
      const list = await client.subscriptionApi.listUserSubscriptions({ userId: user.id });
      for await (const subscription of list) {
        subscriptions.push(subscription);
      }
      expect(subscriptions).to.be.an('array').which.is.not.empty;
    } catch (e) {
      expect(e.status).to.equal(403);
      expect(e.errorSummary).to.contain('You do not have permission');
      console.warn('Please check the value of ORG_USER env var, it should match API Token owner');
      this.skip();
    }
  });

  it('provides method for fetching notification subscription for given user and notification type', async function () {
    if (!user) {
      // ORG_USER is not correct
      this.skip();
    }
    try {
      await client.subscriptionApi.subscribeUserSubscriptionByNotificationType({
        userId: user.id,
        notificationType: 'OKTA_UPDATE',
      });
      const subscriptions = await client.subscriptionApi.listUserSubscriptions({
        userId: user.id,
      });
      let subscription: Subscription;
      await subscriptions.each(s => {
        if (s.notificationType === 'OKTA_UPDATE') {
          subscription = s;
        }
      });
      expect(subscription.notificationType).to.equal('OKTA_UPDATE');
    } catch (e) {
      expect(e.status).to.equal(403);
      expect(e.errorSummary).to.contain('You do not have permission');
      console.warn('Please check the value of ORG_USER env var, it should match API Token owner');
      this.skip();
    }
  });

  it('provides methods for subscribing/unsubscribing to/from notification subscribtion for given user role and notfication type', async function () {
    if (!user) {
      // ORG_USER is not correct
      this.skip();
    }
    try {
      let subscription: Subscription;
      await client.subscriptionApi.unsubscribeUserSubscriptionByNotificationType({
        userId: user.id,
        notificationType: 'OKTA_UPDATE'
      });
      let subscriptions = await client.subscriptionApi.listUserSubscriptions({ userId: user.id });
      await subscriptions.each(s => {
        if (s.notificationType === 'OKTA_UPDATE') {
          subscription = s;
        }
      });
      expect(subscription.status).to.equal('unsubscribed');

      await client.subscriptionApi.subscribeUserSubscriptionByNotificationType({
        userId: user.id,
        notificationType: 'OKTA_UPDATE'
      });
      subscriptions = await client.subscriptionApi.listUserSubscriptions({ userId: user.id });
      await subscriptions.each(s => {
        if (s.notificationType === 'OKTA_UPDATE') {
          subscription = s;
        }
      });
      expect(subscription.status).to.equal('subscribed');
    } catch (e) {
      expect(e.status).to.equal(403);
      expect(e.errorSummary).to.contain('You do not have permission');
      console.warn('Please check the value of ORG_USER env var, it should match API Token owner');
      this.skip();
    }
  });
});
