import { FeatureStageValue } from './../../src/models/featureStageValue';
import { expect } from 'chai';
import {
  Client,
  Collection,
  DefaultRequestExecutor,
  Feature } from '@okta/okta-sdk-nodejs';
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/feature-crud`;
}

const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

const getFirstNonBetaFeature = async () => {
  let firstFeatureInList;
  (await client.listFeatures()).forEach((feature) => {
    if (feature.stage.value !== FeatureStageValue.Beta) {
      firstFeatureInList = feature;
      return false;
    }
  });
  return firstFeatureInList;
};

// Features are self-services provided from OKTA
// Here we use exsiting features per org for testing
describe('Feature Crud API', () => {
  describe('List Features', () => {
    it('should return a collection of Features', async () => {
      const collection = await client.listFeatures();
      // expect(collection).not.to.equal(null);
      await collection.forEach(feature => {
        expect(feature).to.be.instanceOf(Feature);
      });
    });
  });

  describe('Get Feature', () => {
    let firstFeatureInList;
    beforeEach(async () => {
      firstFeatureInList = (await client.listFeatures())[0];
    });

    it('should get Feature by id', async () => {
      if (firstFeatureInList) {
        const feature = await client.getFeature(firstFeatureInList.id);
        expect(feature).to.be.instanceOf(Feature);
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
      firstFeatureInList = await getFirstNonBetaFeature();
      if (firstFeatureInList) {
        initialStatus = firstFeatureInList.status;
      }
    });
    afterEach(async () => {
      if (firstFeatureInList) {
        try {
          await firstFeatureInList.updateLifecycle(initialStatus === 'ENABLED' ? 'enable' : 'disable');
        } catch (err) {
          if (err.status === 405 && err.status === 400) {
            console.log(err);
          } else {
            throw err;
          }
        }
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
      if (firstFeatureInList) {
        const feature = await firstFeatureInList.updateLifecycle('disable');
        expect(feature.id).to.equal(firstFeatureInList.id);
        expect(feature.status).to.equal('DISABLED');
      }
    });
  });

  describe('List feature dependencies', () => {
    let firstFeatureInList;
    beforeEach(async () => {
      firstFeatureInList = await getFirstNonBetaFeature();
    });

    it('should return a collection of Features', async () => {
      if (firstFeatureInList) {
        const collection = await firstFeatureInList.getDependencies();
        // expect(collection).not.to.equal(null);
        await collection.forEach(dependency => {
          expect(dependency).to.be.instanceOf(Feature);
        });
      }
    });
  });

  describe('List feature dependencies', () => {
    let firstFeatureInList;
    beforeEach(async () => {
      firstFeatureInList = (await client.listFeatures())[0];
    });

    it('should return a collection of Features', async () => {
      if (firstFeatureInList) {
        const collection = await firstFeatureInList.getDependents();
        // expect(collection).not.to.equal(null);
        collection.forEach(dependent => {
          expect(dependent).to.be.instanceOf(Feature);
        });
      }
    });
  });
});
