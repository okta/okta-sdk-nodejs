import { expectType } from 'tsd';
import { Client } from '../../src/types/client';
import type { ProfileMappingProperty } from '../../src/types/generated/models/ProfileMappingProperty';
import type { ProfileMapping } from '../../src/types/generated/models/ProfileMapping';


const client = new Client();
(async function () {
  const collection = await client.profileMappingApi.listProfileMappings();
  const { value: mapping } = await collection.next();
  if (mapping && mapping.properties) {
    expectType<ProfileMappingProperty[]>(Object.values(mapping.properties));

  }

  let profileMapping: ProfileMapping = await client.profileMappingApi.getProfileMapping({mappingId: 'mappingId'});
  profileMapping = await client.profileMappingApi.updateProfileMapping({mappingId: 'mappingId', profileMapping});
  if (profileMapping && profileMapping.properties) {
    expectType<ProfileMappingProperty[]>(Object.values(profileMapping.properties));
  }
}());
