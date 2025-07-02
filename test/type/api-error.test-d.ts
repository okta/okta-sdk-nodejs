import { expectType } from 'tsd';
import { OktaApiErrorCause, OktaApiError } from '../../src/types/api-error';
import { Headers } from 'node-fetch';


const apiError = new OktaApiError('https://foo', 403, {errorSummary: 'notok'}, {} as Headers);
expectType<string>(apiError.errorSummary);
expectType<OktaApiErrorCause[] | undefined>(apiError.errorCauses);
