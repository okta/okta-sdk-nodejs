import { expectType } from 'tsd';
import {Response } from 'node-fetch';
import RequestExecutor from '../../src/types/request-executor';

const requestExecutor = new RequestExecutor();
expectType<Promise<Response>>(requestExecutor.fetch({method: 'GET'}));
