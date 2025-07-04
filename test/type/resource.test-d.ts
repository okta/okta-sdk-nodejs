import { expectType } from 'tsd';
import { Resource } from '../../src/types/resource';
import { Client } from '../../src/types/client';


expectType<Resource>(new Resource({resourceId: 'value'}, new Client()));
