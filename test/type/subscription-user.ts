import { expectType } from 'tsd';
import { Client } from '../../src/types/client';
import { Subscription } from '../../src/types/generated/models/Subscription';

const client = new Client();
(async function () {
  const { value: subscription } = await (await client.listUserSubscriptions('testAppId')).next();
  expectType<Subscription | null>(subscription);
  expectType<Subscription>(await client.getUserSubscriptionByNotificationType('userId', 'OKTA_ISSUE'));
  expectType<void>(await client.unsubscribeUserSubscriptionByNotificationType('userId', 'OKTA_ISSUE'));
  expectType<void>(await client.subscribeUserSubscriptionByNotificationType('userId', 'OKTA_ISSUE'));
}());
