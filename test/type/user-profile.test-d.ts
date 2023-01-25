import { expectType } from 'tsd';

import { CustomAttributeValue } from '../../src/types/custom-attributes';
import { UserProfile } from './../../src/types/generated/models/UserProfile';

const userProfile = new UserProfile();
expectType<CustomAttributeValue | CustomAttributeValue[] | undefined>(userProfile.customAttribute);
expectType<string | undefined>(userProfile.costCenter);
