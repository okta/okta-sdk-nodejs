import { expectType } from 'tsd';
import { ApiClient } from '../../src/types/client';
import { Subscription } from '../../src/types/generated/models/Subscription';

const client = new ApiClient();
(async function () {
  const { value: subscription } = await (await client.subscriptionApi.listSubscriptionsRole({roleRef: 'testAppId'})).next();
  expectType<Subscription | null>(subscription);
  expectType<Subscription>(await client.subscriptionApi.getSubscriptionsNotificationTypeUser({userId: 'userId', notificationType: 'OKTA_UPDATE'}));
  expectType<void>(await client.subscriptionApi.subscribeByNotificationTypeUser({userId: 'userId', notificationType: 'OKTA_UPDATE'}));
  expectType<void>(await client.subscriptionApi.unsubscribeByNotificationTypeUser({userId: 'userId', notificationType: 'OKTA_UPDATE'}));
}());
