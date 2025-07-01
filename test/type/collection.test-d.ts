import { expectType } from 'tsd';
import { Resource } from '../../src/types/resource';
import { ModelFactory } from '../../src/types/model-factory';
import { Collection } from '../../src/types/collection';
import { Http } from '../../src/types/http';
import { RequestExecutor } from '../../src/types/request-executor';
import { OAuth } from '../../src/types/oauth';
import { ApiClient } from '../../src/types/client';

const collection = new Collection<Resource>(
  new Http({
    requestExecutor: new RequestExecutor(),
    oauth: new OAuth(new ApiClient()),
  }),
  'https://foo',
  new ModelFactory(Resource)
);
expectType<Promise<unknown>>(collection.each((item) => Promise.resolve(item)));
expectType<Promise<Record<string, unknown>[]>>(collection.getNextPage());
expectType<Promise<{ done: boolean; value: Resource | null }>>(collection.next());
expectType<{ unsubscribe:() => void }>(
  collection.subscribe({
    interval: 100,
    next: (_item: Resource) => void 0,
    error: (_e: Error) => void 0,
    complete: () => void 0,
  })
);
