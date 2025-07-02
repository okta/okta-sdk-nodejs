import { expectType } from 'tsd';
import { ApiClient } from '../../src/types/client';
import type { ProfileMappingProperty } from '../../src/types/generated/models/ProfileMappingProperty';
import type { ProfileMapping } from '../../src/types/generated/models/ProfileMapping';
import type { ListProfileMappings } from '../../src/types/generated/models/ListProfileMappings';
import type { ProfileMappingRequest } from '../../src/types/generated/models/ProfileMappingRequest';


const client = new ApiClient();
(async function () {
  const collection = await client.profileMappingApi.listProfileMappings();
  const { value: mapping } = await collection.next();
  if (mapping) {
    expectType<ListProfileMappings>(mapping);
  }

  let profileMapping: ProfileMapping = await client.profileMappingApi.getProfileMapping({mappingId: 'mappingId'});
  const profileMappingRequest = profileMapping as ProfileMappingRequest;
  profileMapping = await client.profileMappingApi.updateProfileMapping({mappingId: 'mappingId', profileMapping: profileMappingRequest});
  if (profileMapping && profileMapping.properties) {
    expectType<ProfileMappingProperty>(profileMapping.properties);
  }
}());
