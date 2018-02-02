const expect = require('chai').expect;

const okta = require('../../');
const models = require('../../src/models');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/client-get-application`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN
});

describe('client.getLogs()', () => {

  it('should allow me to poll the collection but stop when needed', async () => {
    const collection = await client.getLogs({ since: '2018-01-26T00:00:00Z'});
    let iteratorCalled = false;
    let shouldStop = false;
    const poller = collection.poll((logEvent) => {
      if (shouldStop) {
        return false;
      }
      expect(logEvent).to.be.instanceof(models.LogEvent);
      iteratorCalled = true;
    }, {interval: 1})
    .then(() => {
      expect(iteratorCalled).to.be.true;
    });

    setTimeout(() => {
      shouldStop = true;
    }, 1000);

    return poller;
  });

});
