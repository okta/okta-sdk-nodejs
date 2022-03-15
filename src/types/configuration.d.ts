import { defaultCacheMiddleware } from './default-cache-middleware';
import { RequestExecutor } from './request-executor';

export declare interface V2Configuration {
  orgUrl?: string,
  token?: string,
  clientId?: string,
  scopes?: string[],
  requestExecutor?: RequestExecutor,
  authorizationMode?: string,
  privateKey?: string | Record<string, unknown>
  cacheStore?: CacheStorage,
  cacheMiddleware?: typeof defaultCacheMiddleware | unknown
  defaultCacheMiddlewareResponseBufferSize?: number,
}
