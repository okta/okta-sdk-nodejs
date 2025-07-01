import { expectType } from 'tsd';
import { ApiClient } from '../../src/types/client';
import { ApplicationFeature } from '../../src/types/generated/models/ApplicationFeature';

const client = new ApiClient();
(async function () {
  const { value: feature } = await (await client.applicationApi.listFeaturesForApplication({appId: 'testAppId'})).next();
  expectType<ApplicationFeature | null>(feature);

  expectType<ApplicationFeature>(await client.applicationApi.getFeatureForApplication({appId: 'appId', featureName: 'USER_PROVISIONING'}));

  expectType<ApplicationFeature>(await client.applicationApi.updateFeatureForApplication({appId: 'appId', featureName: 'USER_PROVISIONING', updateFeatureForApplicationRequest: {
    update: {
      lifecycleDeactivate: {
        status: 'ENABLED'
      }
    }
  }}));
}());
