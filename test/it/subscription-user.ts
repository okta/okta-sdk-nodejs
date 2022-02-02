import { expect } from 'chai';

import { Client, NotificationType, Subscription, SubscriptionStatus } from '@okta/okta-sdk-nodejs';
import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/role-subsctiption`;
}

const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
});

describe('Subscription API', () => {
  let user, userOptions = {
    profile: utils.getMockProfile('subscription-user'),
    credentials: {
      password: { value: 'Abcd1234' }
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
    const subscriptions: Subscription[] = [];
    for await (let subscription of client.listUserSubscriptions('jd.kuckan+test127@gmail.com')) {
      subscriptions.push(subscription);
    }
    expect(subscriptions).to.be.an('array').which.is.not.empty;
  });

  it('provides method for fetching notification subscription for given user and notification type', async () => {
    const subscription = await client.getUserSubscriptionByNotificationType(user.id, NotificationType.OKTA_ISSUE);
    expect(subscription.notificationType).to.equal(NotificationType.OKTA_ISSUE);
  });

  it('provides methods for subscribing/unsubscribing to/from notification subscribtion for given user role and notfication type', async () => {
    let response = await client.unsubscribeUserSubscriptionByNotificationType(user.id, NotificationType.OKTA_ISSUE);
    expect(response.status).to.equal(200);
    let subscription = await client.getUserSubscriptionByNotificationType(user.id, NotificationType.OKTA_ISSUE);
    expect(subscription.status).to.equal(SubscriptionStatus.UNSUBSCRIBED);
    response = await client.subscribeUserSubscriptionByNotificationType(user.id, NotificationType.OKTA_ISSUE);
    expect(response.status).to.equal(200);
    subscription = await client.getUserSubscriptionByNotificationType(user.id, NotificationType.OKTA_ISSUE);
    expect(subscription.status).to.equal(SubscriptionStatus.SUBSCRIBED);
  })
});
