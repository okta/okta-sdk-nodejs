import { expectType } from 'tsd';

import { Client } from '../../src/types/client';
import { CustomAttributeValue } from '../../src/types/custom-attributes';
import { UserProfile } from './../../src/types/generated/models/UserProfile';

const client = new Client();
const userProfile = new UserProfile();
expectType<CustomAttributeValue | CustomAttributeValue[] | undefined>(userProfile.customAttribute);
expectType<string | undefined>(userProfile.costCenter);
