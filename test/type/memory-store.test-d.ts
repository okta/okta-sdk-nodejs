import { expectType } from 'tsd';
import { MemoryStore } from '../../src/types/memory-store';


const memoryStore = new MemoryStore({});
expectType<Promise<void>>(memoryStore.delete('key'));
expectType<Promise<string|undefined>>(memoryStore.get('key'));
expectType<Promise<string>>(memoryStore.set('key', 'value'));
