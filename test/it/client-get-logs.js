const expect = require('chai').expect;

const okta = require('../../');
const models = require('../../src/models');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/client-get-application`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('client.getLogs()', () => {

  it('should allow me to poll the collection but stop when needed', async () => {
    const collection = await client.getLogs({ since: '2018-01-26T00:00:00Z'});
    let iteratorCalledTimes = 0;
    await new Promise((resolve, reject) => {
      const subscription = collection.subscribe({
        next(logEvent) {
          iteratorCalledTimes++;
          expect(logEvent).to.be.instanceof(models.LogEvent);
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
    await new Promise((resolve, reject) => {
      const subscription = collection.subscribe({
        interval: 1000,
        next(logEvent) {
          iteratorCalledTimes++;
          expect(logEvent).to.be.instanceof(models.LogEvent);
          return new Promise(resolve => setTimeout(() => {
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
