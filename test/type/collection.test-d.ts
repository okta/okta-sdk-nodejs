import { expectType } from 'tsd';
import Resource from '../../src/types/resource';
import Client from '../../src/types/client';
import ModelFactory from '../../src/types/model-factory';
import Collection from '../../src/types/collection';


const collection = new Collection<Resource>(
  new Client(),
  'https://foo',
  new ModelFactory(Resource)
);
expectType<Promise<unknown>>(collection.each(
  (item) => Promise.resolve(item)
));
expectType<Promise<Record<string, unknown>>>(collection.getNextPage());
expectType<Promise<{done: boolean, value: Resource | null}>>(collection.next());
expectType<{unsubscribe:() => void}>(collection.subscribe({
  interval: 100,
  next: (_item: Resource) => void(0),
  error: (_e: Error) => void(0),
  complete: () => void(0)
}));
