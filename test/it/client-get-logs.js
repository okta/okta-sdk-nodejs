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
    const subscription = collection.getSubscription();
    let iteratorCalled = false;
    const poller = subscription.poll(1, (logEvent) => {
      expect(logEvent).to.be.instanceof(models.LogEvent);
      iteratorCalled = true;
    })
    .then(() => {
      expect(iteratorCalled).to.be.true;
    });

    setTimeout(() => {
      subscription.stop();
    }, 1000);

    return poller;
  });

});
