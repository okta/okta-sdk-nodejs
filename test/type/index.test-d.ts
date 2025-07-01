import { expectType } from 'tsd';
import * as sdk from '../../src/types/index';
import { ApiClient, RequestExecutor, DefaultRequestExecutor} from '../../src/types/index';

expectType<ApiClient>(new ApiClient());
expectType<RequestExecutor>(new RequestExecutor());
expectType<DefaultRequestExecutor>(new DefaultRequestExecutor());

expectType<ApiClient>(new sdk.ApiClient());
expectType<RequestExecutor>(new sdk.RequestExecutor());
expectType<DefaultRequestExecutor>(new sdk.DefaultRequestExecutor());
