import { expectType } from 'tsd';
import { Client } from '../../src/types/client';
import { ApplicationFeature } from '../../src/types/generated/models/ApplicationFeature';

const client = new Client();
(async function () {
  const { value: feature } = await (await client.applicationApi.listFeaturesForApplication({appId: 'testAppId'})).next();
  expectType<ApplicationFeature | null>(feature);

  expectType<ApplicationFeature>(await client.applicationApi.getFeatureForApplication({appId: 'appId', name: 'USER_PROVISIONING'}));

  expectType<ApplicationFeature>(await client.applicationApi.updateFeatureForApplication({appId: 'appId', name: 'USER_PROVISIONING', CapabilitiesObject: {
    update: {
      lifecycleDeactivate: {
        status: 'ENABLED'
      }
    }
  }}));
}());
