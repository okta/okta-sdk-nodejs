import { expectType } from 'tsd';
import * as sdk from '../../src/types/index';
import { Client, RequestExecutor, DefaultRequestExecutor} from '../../src/types/index';

expectType<Client>(new Client());
expectType<RequestExecutor>(new RequestExecutor());
expectType<DefaultRequestExecutor>(new DefaultRequestExecutor());

expectType<Client>(new sdk.Client());
expectType<RequestExecutor>(new sdk.RequestExecutor());
expectType<DefaultRequestExecutor>(new sdk.DefaultRequestExecutor());
