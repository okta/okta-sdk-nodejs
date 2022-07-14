import { expect } from 'chai';

import {
  Client,
  DefaultRequestExecutor,
  v3 } from '@okta/okta-sdk-nodejs';

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

describe('client.getLogs()', () => {

  it('should search with q and paginate results', async () => {
    const max = 10, limit = 5;
    const collection = await client.getLogs({
      since: '2018-01-26T00:00:00Z',
      until: '2038-01-26T00:00:00Z',
      q: 'user',
      sortOrder: 'DESCENDING',
      limit
    });
    let cnt = 0;
    await collection.each(log => {
      expect(log).to.be.instanceof(v3.LogEvent);
      cnt++;
      if (cnt >= max) {
        return false;
      }
    });
    expect(cnt).to.be.lessThanOrEqual(max);
  });

  it('should filter with filter and paginate results', async () => {
    const max = 10, limit = 5;
    const collection = await client.getLogs({
      since: '2018-01-26T00:00:00Z',
      until: '2038-01-26T00:00:00Z',
      filter: 'severity eq "INFO"',
      sortOrder: 'DESCENDING',
      limit
    });
    let cnt = 0;
    await collection.each(log => {
      expect(log).to.be.instanceof(v3.LogEvent);
      cnt++;
      if (cnt >= max) {
        return false;
      }
    });
    expect(cnt).to.be.lessThanOrEqual(max);
  });

  it('should allow me to poll the collection but stop when needed', async () => {
    const collection = await client.getLogs({ since: '2018-01-26T00:00:00Z'});
    let iteratorCalledTimes = 0;
    await new Promise<void>((resolve, reject) => {
      const subscription = collection.subscribe({
        next(logEvent) {
          iteratorCalledTimes++;
          expect(logEvent).to.be.instanceof(v3.LogEvent);
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
    const collection = await client.getLogs({ since: '2018-01-26T00:00:00Z'});
    let iteratorCalledTimes = 0;
    await new Promise<void>((resolve, reject) => {
      const subscription = collection.subscribe({
        interval: 1000,
        next(logEvent) {
          iteratorCalledTimes++;
          expect(logEvent).to.be.instanceof(v3.LogEvent);
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
