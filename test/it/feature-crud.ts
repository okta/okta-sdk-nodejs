import { expect } from 'chai';
import {
  Client,
  Collection,
  DefaultRequestExecutor,
  Feature,
} from '@okta/okta-sdk-nodejs';

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
  await (await client.featureApi.listFeatures()).each((feature) => {
    // Note: Trying to enable feature 'Enforce MFA For Admin Console' will fail with error:
    // Api validation failed: ENFORCE_MFA_FOR_ADMIN_APPS. Cannot enable the feature: To satisfy 2FA assurance, the current admin must have enough enrolled authenticators, and the enrolled authenticators cannot be disabled in authenticator enrollment policy.
    if (feature.stage.value !== 'BETA' && !feature.name.includes('Enforce MFA')) {
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
      const collection = await client.featureApi.listFeatures();
      expect(collection).to.be.instanceOf(Collection);
      await collection.each(feature => {
        expect(feature).to.be.instanceOf(Feature);
      });
    });
  });

  describe('Get Feature', () => {
    let firstFeatureInList;
    beforeEach(async () => {
      firstFeatureInList = (await (await client.featureApi.listFeatures()).next()).value;
    });

    it('should get Feature by id', async () => {
      if (firstFeatureInList) {
        const feature = await client.featureApi.getFeature({featureId: firstFeatureInList.id});
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
          await client.featureApi.updateFeatureLifecycle({featureId: firstFeatureInList.id, lifecycle: initialStatus === 'ENABLED' ? 'enable' : 'disable'});
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
        const feature = await client.featureApi.updateFeatureLifecycle({featureId: firstFeatureInList.id, lifecycle: 'enable'});
        //const feature = await firstFeatureInList.updateLifecycle('enable');
        expect(feature.id).to.equal(firstFeatureInList.id);
        expect(feature.status).to.equal('ENABLED');
      }
    });

    it('should disable feature', async () => {
      if (firstFeatureInList) {
        const feature = await client.featureApi.updateFeatureLifecycle({featureId: firstFeatureInList.id, lifecycle: 'disable'});
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
        const collection = await client.featureApi.listFeatureDependencies({featureId:firstFeatureInList.id});
        expect(collection).to.be.instanceOf(Collection);
        await collection.each(dependency => {
          expect(dependency).to.be.instanceOf(Feature);
        });
      }
    });
  });

  describe('List feature dependencies', () => {
    let firstFeatureInList;
    beforeEach(async () => {
      firstFeatureInList = (await (await client.featureApi.listFeatures()).next()).value;
    });

    it('should return a collection of Features', async () => {
      if (firstFeatureInList) {
        const collection = await client.featureApi.listFeatureDependents({featureId: firstFeatureInList.id});
        expect(collection).to.be.instanceOf(Collection);
        await collection.each(dependent => {
          expect(dependent).to.be.instanceOf(Feature);
        });
      }
    });
  });
});
