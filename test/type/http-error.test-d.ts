import { expectType } from 'tsd';
import { Headers } from 'node-fetch';
import HttpError from '../../src/types/http-error';


const httpError = new HttpError('https://foo', 'notok', 'error: notok', {} as Headers);
expectType<Headers>(httpError.headers);
expectType<string|number>(httpError.status);
