import { expect } from 'chai';
import { spy } from 'sinon';
import {
  Client,
  DefaultRequestExecutor,
  LogEvent,
} from '@okta/okta-sdk-nodejs';
import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/client-get-application`;
}

const client = new Client({
  scopes: ['okta.clients.manage', 'okta.logs.read'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('client.systemLogApi.listLogEvents()', () => {

  it('should search with q and paginate results', async () => {
    const max = 10, limit = 5;
    const collection = await client.systemLogApi.listLogEvents({
      since: new Date('2018-01-26T00:00:00Z'),
      until: new Date('2038-01-26T00:00:00Z'),
      q: 'user',
      sortOrder: 'DESCENDING',
      limit
    });
    const pageSpy = spy(collection, 'getNextPage');
    let cnt = 0;
    await collection.each(log => {
      expect(log).to.be.instanceof(LogEvent);
      cnt++;
      if (cnt >= max) {
        return false;
      }
    });
    expect(cnt).to.be.lessThanOrEqual(max);
    expect(pageSpy.getCalls().length).to.be.greaterThanOrEqual(Math.ceil(cnt / limit));
  });

  it('should filter with filter and paginate results', async () => {
    const max = 10, limit = 5;
    const collection = await client.systemLogApi.listLogEvents({
      since: new Date('2018-01-26T00:00:00Z'),
      until: new Date('2038-01-26T00:00:00Z'),
      filter: 'severity eq "INFO"',
      sortOrder: 'DESCENDING',
      limit
    });
    const pageSpy = spy(collection, 'getNextPage');
    let cnt = 0;
    await collection.each(log => {
      expect(log).to.be.instanceof(LogEvent);
      cnt++;
      if (cnt >= max) {
        return false;
      }
    });
    expect(cnt).to.be.lessThanOrEqual(max);
    expect(pageSpy.getCalls().length).to.be.greaterThanOrEqual(Math.ceil(cnt / limit));
  });

  it('should allow me to poll the collection but stop when needed', async () => {
    const collection = await client.systemLogApi.listLogEvents({ since: new Date('2018-01-26T00:00:00Z')});
    let iteratorCalledTimes = 0;
    await new Promise<void>((resolve, reject) => {
      const subscription = collection.subscribe({
        next(logEvent) {
          iteratorCalledTimes++;
          expect(logEvent).to.be.instanceof(LogEvent);
          subscription.unsubscribe();
        },
        error(e) {
          reject(e);
        },
        complete() {
          resolve();
        }
      });
    });
    expect(iteratorCalledTimes).to.equal(1);
  });

  it('should allow the iterator to return a Promise', async () => {
    const collection = await client.systemLogApi.listLogEvents({ since: new Date('2018-01-26T00:00:00Z')});
    let iteratorCalledTimes = 0;
    await new Promise<void>((resolve, reject) => {
      const subscription = collection.subscribe({
        interval: 1000,
        next(logEvent) {
          iteratorCalledTimes++;
          expect(logEvent).to.be.instanceof(LogEvent);
          return new Promise<void>(resolve => setTimeout(() => {
            subscription.unsubscribe();
            resolve();
          }, 100));
        },
        error(e) {
          reject(e);
        },
        complete() {
          resolve();
        }
      });
    });
    expect(iteratorCalledTimes).to.equal(1);
  });

});
