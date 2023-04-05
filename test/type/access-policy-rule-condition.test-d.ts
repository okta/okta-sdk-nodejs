import { expectType } from 'tsd';

import { AccessPolicyRuleConditions } from '../../src/types/generated/models/AccessPolicyRuleConditions';
import { DeviceAccessPolicyRuleCondition } from '../../src/types/generated/models/DeviceAccessPolicyRuleCondition';


const ruleConditions = new AccessPolicyRuleConditions();
expectType<DeviceAccessPolicyRuleCondition|undefined>(ruleConditions.device);
