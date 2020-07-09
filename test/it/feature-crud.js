const expect = require('chai').expect;
const okta = require('../../src');
const models = require('../../src/models');
const Collection = require('../../src/collection');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/feature-crud`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

// Features are self-services provided from OKTA
// Here we use exsiting features per org for testing
describe('Feature Crud API', () => {
  describe('List Features', () => {
    it('should return a collection of Features', async () => {
      const collection = await client.listFeatures();
      expect(collection).to.be.instanceOf(Collection);
      await collection.each(feature => {
        expect(feature).to.be.instanceOf(models.Feature);
      });
    });
  });

  describe('Get Feature', () => {
    let firstFeatureInList;
    beforeEach(async () => {
      firstFeatureInList = (await client.listFeatures().next()).value;
    });

    it('should get Feature by id', async () => {
      if (firstFeatureInList) {
        const feature = await client.getFeature(firstFeatureInList.id);
        expect(feature).to.be.instanceOf(models.Feature);
        expect(feature.id).to.equal(firstFeatureInList.id);
      }
    });
  });

  describe('Update Feature lifecycle', () => {
    let firstFeatureInList;
    let initialStatus;
    beforeEach(async () => {
      // Disabling a BETA feature in a dev org throws 405 error
      // Hence we need a non-BETA feature for testing
      await client.listFeatures().each((feature) => {
        if (feature.stage.value !== 'BETA') {
          firstFeatureInList = feature;
          return false;
        }
      });

      if (firstFeatureInList) {
        initialStatus = firstFeatureInList.status;
      }
    });
    afterEach(async () => {
      if (firstFeatureInList) {
        await firstFeatureInList.updateLifecycle(initialStatus === 'ENABLED' ? 'enable' : 'disable');
      }
    });

    it('should enable feature', async () => {
      if (firstFeatureInList) {
        const feature = await firstFeatureInList.updateLifecycle('enable');
        expect(feature.id).to.equal(firstFeatureInList.id);
        expect(feature.status).to.equal('ENABLED');
      }
    });

    it('should disable feature', async () => {
      const feature = await firstFeatureInList.updateLifecycle('disable');
      expect(feature.id).to.equal(firstFeatureInList.id);
      expect(feature.status).to.equal('DISABLED');
    });
  });

  describe('List feature dependencies', () => {
    let firstFeatureInList;
    beforeEach(async () => {
      await client.listFeatures().each((feature) => {
        if (feature.stage.value !== 'BETA') {
          firstFeatureInList = feature;
          return false;
        }
      });
    });

    it('should return a collection of Features', async () => {
      const collection = await firstFeatureInList.getDependencies();
      expect(collection).to.be.instanceOf(Collection);
      await collection.each(dependency => {
        expect(dependency).to.be.instanceOf(models.Feature);
      });
    });
  });

  describe('List feature dependencies', () => {
    let firstFeatureInList;
    beforeEach(async () => {
      firstFeatureInList = (await client.listFeatures().next()).value;
    });

    it('should return a collection of Features', async () => {
      const collection = await firstFeatureInList.getDependents();
      expect(collection).to.be.instanceOf(Collection);
      await collection.each(dependent => {
        expect(dependent).to.be.instanceOf(models.Feature);
      });
    });
  });
});
