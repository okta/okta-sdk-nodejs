import { expectType } from 'tsd';
import { Response } from 'node-fetch';
import { Client } from '../../src/types/client';
import { RequestExecutor } from '../../src/types/request-executor';
import { OAuth } from '../../src/types/oauth';
import { RequestOptions } from '../../src/types/request-options';
import { Http } from '../../src/types/http';


const httpClient = new Http({
  requestExecutor: new RequestExecutor(),
  oauth: new OAuth(new Client())
});
expectType<Promise<Response>>(httpClient.delete('https://foo'));
expectType<Promise<Record<string, unknown>>>(httpClient.getJson('https://foo'));
expectType<Promise<Response>>(httpClient.http('https://foo'));
expectType<Promise<Record<string, unknown>>>(httpClient.json('https://foo'));
expectType<Promise<Response>>(httpClient.post('https://foo'));
expectType<Promise<Response>>(httpClient.postJson('https://foo'));
expectType<Promise<RequestOptions>>(httpClient.prepareRequest({} as RequestOptions));
expectType<Promise<Response>>(httpClient.put('https://foo'));
expectType<Promise<Response>>(httpClient.putJson('https://foo'));
