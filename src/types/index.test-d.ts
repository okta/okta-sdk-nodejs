import { expectType } from 'tsd';
import Resource from './resource';
import OktaResponseHeaders, { OktaResponseHeadersReturnType} from './okta-response-headers';
import Client from './client';


expectType<Resource>(new Resource({key: 'value'}, new Client({})));

expectType<OktaResponseHeadersReturnType>(OktaResponseHeaders({'set-language': 'en'}));