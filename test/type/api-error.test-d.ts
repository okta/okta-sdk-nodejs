import { expectType } from 'tsd';
import OktaApiError from '../../src/types/api-error';
import { Headers } from 'node-fetch';


const apiError = new OktaApiError('https://foo', 403, {errorSummary: 'notok'}, {} as Headers);
expectType<string>(apiError.errorSummary);
expectType<string>(apiError.errorCauses);
