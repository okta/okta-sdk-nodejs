import { expectType } from 'tsd';
import { Resource } from '../../src/types/resource';
import { Client } from '../../src/types/client';
import { ModelResolutionFactory } from '../../src/types/resolution-factory';


const modelResolutionFactory = new ModelResolutionFactory();
expectType<Resource>(modelResolutionFactory.createInstance({}, new Client()));
expectType<Record<string, typeof Resource>>(modelResolutionFactory.getMapping());
expectType<string>(modelResolutionFactory.getResolutionProperty());
