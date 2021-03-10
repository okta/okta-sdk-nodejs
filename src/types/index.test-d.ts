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
import defaultCacheMiddleware from './default-cache-middleware';
import Collection from './collection';
import OktaApiError from './api-error';


expectType<Resource>(new Resource({resourceId: 'value'}, new Client()));

expectType<OktaResponseHeadersReturnType>(OktaResponseHeaders({'set-language': 'en'}));

const modelResolutionFactory = new ModelResolutionFactory();
expectType<Resource>(modelResolutionFactory.createInstance({}, new Client()));

const requestExecutor = new RequestExecutor();
expectType<Promise<Response>>(requestExecutor.fetch({method: 'GET'}));

const tokenClient = new OAuth(new Client());
expectType<Promise<TokenEndpointResponse>>(tokenClient.getAccessToken());
expectType<JWTObject>(tokenClient.getJwt('https://foo/token'));
expectType<void>(tokenClient.clearCachedAccessToken());

const modelFactory = new ModelFactory(Resource);
expectType<Resource>(modelFactory.createInstance({}, new Client()));

const memoryStore = new MemoryStore({});
expectType<Promise<void>>(memoryStore.delete('key'));
expectType<Promise<string>>(memoryStore.get('key'));
expectType<Promise<string>>(memoryStore.set('key', 'value'));

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

const httpError = new HttpError('https://foo', 'notok', 'error: notok', {} as Headers);
expectType<Headers>(httpError.headers);
expectType<string|number>(httpError.status);

const defaultRequestExecutor = new DefaultRequestExecutor();
expectType<RequestOptions>(defaultRequestExecutor.buildRetryRequest({} as RequestOptions, 'requestId', 100));
expectType<string>(defaultRequestExecutor.getOktaRequestId({} as Response));
expectType<string>(defaultRequestExecutor.getRateLimitReset({} as Response));
expectType<string>(defaultRequestExecutor.getResponseDate({} as Response));
expectType<number>(defaultRequestExecutor.getRetryDelayMs({} as Response));
expectType<Response | Promise<Response | Error>>(defaultRequestExecutor.parseResponse({} as RequestOptions, {} as Response));
expectType<boolean>(defaultRequestExecutor.maxRetriesReached({} as RequestOptions));
expectType<Promise<Response>>(defaultRequestExecutor.retryRequest({} as RequestOptions, {} as Response, 100));

const cacheMiddleware = defaultCacheMiddleware;
expectType<Promise<Response>>(
  cacheMiddleware({
    req: {} as RequestOptions,
    cacheStore: {}
  },
  () => Promise.resolve({} as Response))
);

const collection = new Collection<Resource>(new Client(), 'https://foo', new ModelFactory(Resource));
expectType<Promise<unknown>>(collection.each(
  (item) => Promise.resolve(item)
));
expectType<Promise<Record<string, unknown>>>(collection.getNextPage());
expectType<Promise<{done: boolean, value: Resource | null}>>(collection.next());
collection.subscribe({
  interval: 100,
  next: () => void(0),
  error: e => Promise.resolve(),
  complete: () => void(0)
});

const apiError = new OktaApiError('https://foo', 403, {errorSummary: 'notok'}, {} as Headers);
expectType<string>(apiError.errorSummary);
expectType<string>(apiError.errorCauses);
