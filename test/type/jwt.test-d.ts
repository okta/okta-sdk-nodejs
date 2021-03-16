import { expectType } from 'tsd';
import { Client } from '../../src/types';
import { getPemAndJwk, Jwt, makeJwt } from '../../src/types/jwt';

expectType<Jwt>(makeJwt(new Client(), 'https://foo'));
expectType<{pem: string, jwk: Record<string, string>}>(getPemAndJwk('privateKey'));
