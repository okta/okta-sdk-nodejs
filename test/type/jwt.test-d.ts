import { Jwt } from 'njwt';
import { Jwk } from 'rasha';
import { expectType } from 'tsd';
import { ApiClient } from '../../src/types';
import { getPemAndJwk, makeJwt } from '../../src/types/jwt';

expectType<Jwt>(makeJwt(new ApiClient(), 'https://foo'));
expectType<Promise<{pem: string, jwk: Jwk | Record<string, unknown>}>>(getPemAndJwk('privateKey'));
