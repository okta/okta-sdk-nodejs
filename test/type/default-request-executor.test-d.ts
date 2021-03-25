import { expectType } from 'tsd';
import { Response } from 'node-fetch';
import { RequestOptions } from '../../src/types/request-options';
import { DefaultRequestExecutor } from '../../src/types/default-request-executor';


const defaultRequestExecutor = new DefaultRequestExecutor();
expectType<RequestOptions>(defaultRequestExecutor.buildRetryRequest({} as RequestOptions, 'requestId', 100));
expectType<string>(defaultRequestExecutor.getOktaRequestId({} as Response));
expectType<string>(defaultRequestExecutor.getRateLimitReset({} as Response));
expectType<string>(defaultRequestExecutor.getResponseDate({} as Response));
expectType<number>(defaultRequestExecutor.getRetryDelayMs({} as Response));
expectType<Response | Promise<Response | Error>>(defaultRequestExecutor.parseResponse({} as RequestOptions, {} as Response));
expectType<boolean>(defaultRequestExecutor.maxRetriesReached({} as RequestOptions));
expectType<Promise<Response>>(defaultRequestExecutor.retryRequest({} as RequestOptions, {} as Response, 100));
