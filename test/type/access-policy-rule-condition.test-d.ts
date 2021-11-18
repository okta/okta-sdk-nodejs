import { expectType } from 'tsd';

import { Client } from '../../src/types/client';
import { AccessPolicyRuleConditions } from '../../src/types/models/AccessPolicyRuleConditions';
import { DeviceAccessPolicyRuleCondition } from '../../src/types/models/DeviceAccessPolicyRuleCondition';


const client = new Client();
const ruleConditions = new AccessPolicyRuleConditions({}, client);
expectType<DeviceAccessPolicyRuleCondition>(ruleConditions.device);
