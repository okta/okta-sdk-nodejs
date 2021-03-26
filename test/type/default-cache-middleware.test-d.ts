import { expectType } from 'tsd';
import { Response } from 'node-fetch';
import { MemoryStore } from '../../src/types/memory-store';
import { RequestOptions } from '../../src/types/request-options';
import { defaultCacheMiddleware } from '../../src/types/default-cache-middleware';


const cacheMiddleware = defaultCacheMiddleware;
expectType<Promise<Response>>(
  cacheMiddleware({
    req: {} as RequestOptions,
    cacheStore: new MemoryStore()
  },
  () => Promise.resolve({} as Response))
);
