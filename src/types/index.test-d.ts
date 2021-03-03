import { expectType } from 'tsd';
import { Response, Headers } from 'node-fetch';
import Resource from './resource';
import OktaResponseHeaders, { OktaResponseHeadersReturnType} from './okta-response-headers';
import Client from './client';
import ModelResolutionFactory from './resolution-factory';
import RequestExecutor from './request-executor';
import OAuth, { JWTObject, TokenEndpointResponse } from './oauth';
import ModelFactory from './model-factory';
import MemoryStore from './memory-store';
import Http from './http';
import RequestOptions from './request-options';
import HttpError from './http-error';
import DefaultRequestExecutor from './default-request-executor';


expectType<Resource>(new Resource({resourceId: 'value'}, new Client({})));

expectType<OktaResponseHeadersReturnType>(OktaResponseHeaders({'set-language': 'en'}));

const modelResolutionFactory = new ModelResolutionFactory();
expectType<Resource>(modelResolutionFactory.createInstance({}, new Client({})));

const requestExecutor = new RequestExecutor();
expectType<Promise<Response>>(requestExecutor.fetch({method: 'GET'}));

const tokenClient = new OAuth(new Client({}));
expectType<Promise<TokenEndpointResponse>>(tokenClient.getAccessToken());
expectType<JWTObject>(tokenClient.getJwt('https://foo/token'));
expectType<void>(tokenClient.clearCachedAccessToken());

const modelFactory = new ModelFactory(Resource);
expectType<Resource>(modelFactory.createInstance({}, new Client({})));

const memoryStore = new MemoryStore({});
expectType<Promise<void>>(memoryStore.delete('key'));
expectType<Promise<string>>(memoryStore.get('key'));
expectType<Promise<string>>(memoryStore.set('key', 'value'));

const httpClient = new Http({
  requestExecutor: new RequestExecutor(),
  oauth: new OAuth(new Client({}))
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

const httpError = new HttpError('https://foo', 'notok', 'error: notok', {} as Headers);
expectType<Headers>(httpError.headers);
expectType<string|number>(httpError.status);
