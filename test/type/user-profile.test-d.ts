import { expectType } from 'tsd';

import { Client } from '../../src/types/client';
import { CustomAttributeValue } from '../../src/types/custom-attributes';
import { UserProfile } from './../../src/types/models/UserProfile.d';

const client = new Client();
const userProfile = new UserProfile({}, client);
expectType<CustomAttributeValue | CustomAttributeValue[]>(userProfile.customAttribute);
expectType<string>(userProfile.costCenter);
