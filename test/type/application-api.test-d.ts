import { expectType } from 'tsd';
import { Client } from '../../src/types/client';
import { ApplicationFeature } from '../../src/types/generated/models/ApplicationFeature';

const client = new Client();
(async function () {
  const { value: feature } = await (await client.listFeaturesForApplication('testAppId')).next();
  expectType<ApplicationFeature | null>(feature);

  expectType<ApplicationFeature>(await client.getFeatureForApplication('appId', 'FEATURE_NAME'));

  expectType<ApplicationFeature>(await client.updateFeatureForApplication('appId', 'FEATURE_NAME', {
    update: {
      lifecycleDeactivate: {
        status: 'ENABLED'
      }
    }
  }));
}());
