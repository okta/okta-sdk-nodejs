import { expectType } from 'tsd';
import { Response } from 'node-fetch';
import { Client } from '../../src/types/client';
import { NotificationType } from '../../src/types/models/NotificationType';
import { Subscription } from '../../src/types/models/Subscription';

const client = new Client();
(async function () {
  let { value: subscription } = await client.listUserSubscriptions('testAppId').next();
  expectType<Subscription>(subscription!);
  expectType<Subscription>(await client.getUserSubscriptionByNotificationType('userId', NotificationType.OKTA_ISSUE));
  expectType<Response>(await client.unsubscribeUserSubscriptionByNotificationType('userId', NotificationType.OKTA_ISSUE));
  expectType<Response>(await client.subscribeUserSubscriptionByNotificationType('userId', NotificationType.OKTA_ISSUE));
}());
