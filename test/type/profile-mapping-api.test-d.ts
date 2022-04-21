import { expectType } from 'tsd';
import { Client } from '../../src/types/client';
import type { ProfileMappingProperty } from '../../src/types/v3/models/profile-mapping-property';
import type { ProfileMapping } from '../../src/types/v3/models/profile-mapping';


const client = new Client();
(async function () {
  const collection = await client.listProfileMappings();
  const { value: mapping } = await collection.next();
  if (mapping && mapping.properties) {
    expectType<ProfileMappingProperty[]>(Object.values(mapping.properties));

  }

  let profileMapping: ProfileMapping = await client.getProfileMapping('mappingId');
  profileMapping = await client.updateProfileMapping('mappingId', profileMapping);
  if (profileMapping && profileMapping.properties) {
    expectType<ProfileMappingProperty[]>(Object.values(profileMapping.properties));
  }
}());
