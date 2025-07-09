import { expectType } from 'tsd';
import { Client } from '../../src/types/client';
import { Subscription } from '../../src/types/generated/models/Subscription';

const client = new Client();
(async function () {
  const { value: subscription } = await (await client.subscriptionApi.listUserSubscriptions({userId: 'testAppId'})).next();
  expectType<Subscription | null>(subscription);
  expectType<Subscription>(await client.subscriptionApi.listUserSubscriptionsByNotificationType({userId: 'userId', notificationType: 'OKTA_UPDATE'}));
  expectType<void>(await client.subscriptionApi.unsubscribeUserSubscriptionByNotificationType({userId: 'userId', notificationType: 'OKTA_UPDATE'}));
  expectType<void>(await client.subscriptionApi.subscribeUserSubscriptionByNotificationType({userId: 'userId', notificationType: 'OKTA_UPDATE'}));
}());
