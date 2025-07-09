import { expectType } from 'tsd';
import { Client } from '../../src/types/client';
import { OAuth, TokenEndpointResponse } from '../../src/types/oauth';

const oauthClient = new OAuth(new Client());
expectType<Promise<TokenEndpointResponse>>(oauthClient.getAccessToken());
expectType<Promise<string>>(oauthClient.getJwt('https://foo/token'));
expectType<void>(oauthClient.clearCachedAccessToken());
