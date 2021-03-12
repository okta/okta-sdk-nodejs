import { expectType } from 'tsd';
import OktaResponseHeaders, { OktaResponseHeadersReturnType} from '../../src/types/okta-response-headers';

expectType<OktaResponseHeadersReturnType>(OktaResponseHeaders({'set-language': 'en'}));
