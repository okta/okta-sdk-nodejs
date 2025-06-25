import { expectType } from 'tsd';
import { Resource } from '../../src/types/resource';
import { ApiClient } from '../../src/types/client';
import { ModelResolutionFactory } from '../../src/types/resolution-factory';


const modelResolutionFactory = new ModelResolutionFactory();
expectType<Resource>(modelResolutionFactory.createInstance({}, new ApiClient()));
expectType<Record<string, typeof Resource>>(modelResolutionFactory.getMapping());
expectType<string>(modelResolutionFactory.getResolutionProperty());
