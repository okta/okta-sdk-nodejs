import { expect } from 'chai';

import { Client, v3 } from '@okta/okta-sdk-nodejs';
import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/subsctiption-user`;
}

const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
});

// User Subscription API endpoints can only be queried by API Token owner
xdescribe('Subscription API', () => {
  let user;
  const userOptions = {
    profile: utils.getMockProfile('subscription-user'),
    credentials: {
      password: { value: 'Abcd1234#@' }
    }
  };

  beforeEach(async () => {
    await utils.cleanup(client, userOptions);
    user = await client.createUser(userOptions);
  });

  afterEach(async () => {
    await utils.cleanup(client, userOptions);
  });

  it('provides method for listing user\'s notification subscriptions', async () => {
    const subscriptions: v3.Subscription[] = [];
    for await (const subscription of (await client.listUserSubscriptions(userOptions.profile.email))) {
      subscriptions.push(subscription);
    }
    expect(subscriptions).to.be.an('array').which.is.not.empty;
  });

  it('provides method for fetching notification subscription for given user and notification type', async () => {
    const subscription = await client.getUserSubscriptionByNotificationType(user.id, 'OKTA_ISSUE');
    expect(subscription.notificationType).to.equal('OKTA_ISSUE');
  });

  it('provides methods for subscribing/unsubscribing to/from notification subscribtion for given user role and notfication type', async () => {
    let response = await client.unsubscribeUserSubscriptionByNotificationType(user.id, 'OKTA_ISSUE');
    expect(response).to.be.undefined;
    let subscription = await client.getUserSubscriptionByNotificationType(user.id, 'OKTA_ISSUE');
    expect(subscription.status).to.equal('UNSUBSCRIBED');
    response = await client.subscribeUserSubscriptionByNotificationType(user.id, 'OKTA_ISSUE');
    expect(response).to.be.undefined;
    subscription = await client.getUserSubscriptionByNotificationType(user.id, 'OKTA_ISSUE');
    expect(subscription.status).to.equal('SUBSCRIBED');
  });
});
