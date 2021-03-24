import { expectType } from 'tsd';
import sdk = require('../../src/types/index');
import Client from '../../src/types/client';
import RequestExecutor from '../../src/types/request-executor';
import DefaultRequestExecutor from '../../src/types/default-request-executor';

expectType<Client>(new sdk.Client());
expectType<RequestExecutor>(new sdk.RequestExecutor());
expectType<DefaultRequestExecutor>(new sdk.DefaultRequestExecutor());
