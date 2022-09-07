import { expect } from 'chai';

import { Subscription } from '@okta/okta-sdk-nodejs';
import type { GeneratedApiClient as V2Client } from '../../src/types/generated-client';
import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;
const orgUser = process.env.ORG_USER;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/subsctiption-user`;
}

const client: V2Client = utils.getV2Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
});

// User Subscription API endpoints can only be queried by API Token owner
describe('Subscription API', () => {
  let user;

  before(async () => {
    for await (const usr of await client.listUsers({search: `profile.login eq "${orgUser}"`})) {
      if (usr.profile.login === orgUser) {
        user = usr;
      }
    }
  });

  it('provides method for listing user\'s notification subscriptions', async () => {
    const subscriptions: Subscription[] = [];
    for await (const subscription of (await client.listUserSubscriptions(user.id))) {
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
    expect(subscription.status).to.equal('unsubscribed');
    response = await client.subscribeUserSubscriptionByNotificationType(user.id, 'OKTA_ISSUE');
    expect(response).to.be.undefined;
    subscription = await client.getUserSubscriptionByNotificationType(user.id, 'OKTA_ISSUE');
    expect(subscription.status).to.equal('subscribed');
  });
});
