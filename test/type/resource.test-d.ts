import { expectType } from 'tsd';
import { Resource } from '../../src/types/resource';
import { ApiClient } from '../../src/types/client';


expectType<Resource>(new Resource({resourceId: 'value'}, new ApiClient()));
