import { expectType } from 'tsd';
import Resource from '../../src/types/resource';
import Client from '../../src/types/client';
import ModelFactory from '../../src/types/model-factory';


const modelResolutionFactory = new ModelFactory(Resource);
expectType<Resource>(modelResolutionFactory.createInstance({}, new Client()));
