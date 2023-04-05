/*!
 * Copyright (c) 2017-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */


import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { ActivateFactorRequest } from '../models/ActivateFactorRequest';
import { SecurityQuestion } from '../models/SecurityQuestion';
import { UserFactor } from '../models/UserFactor';
import { VerifyFactorRequest } from '../models/VerifyFactorRequest';
import { VerifyUserFactorResponse } from '../models/VerifyUserFactorResponse';
/**
 * no description
 */
export declare class UserFactorApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Activates a factor. The `sms` and `token:software:totp` factor types require activation to complete the enrollment process.
     * Activate a Factor
     * @param userId
     * @param factorId
     * @param body
     */
  activateFactor(userId: string, factorId: string, body?: ActivateFactorRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Enrolls a user with a supported factor
     * Enroll a Factor
     * @param userId
     * @param body Factor
     * @param updatePhone
     * @param templateId id of SMS template (only for SMS factor)
     * @param tokenLifetimeSeconds
     * @param activate
     */
  enrollFactor(userId: string, body: UserFactor, updatePhone?: boolean, templateId?: string, tokenLifetimeSeconds?: number, activate?: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a factor for the specified user
     * Retrieve a Factor
     * @param userId
     * @param factorId
     */
  getFactor(userId: string, factorId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the factors verification transaction status
     * Retrieve a Factor Transaction Status
     * @param userId
     * @param factorId
     * @param transactionId
     */
  getFactorTransactionStatus(userId: string, factorId: string, transactionId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all the enrolled factors for the specified user
     * List all Factors
     * @param userId
     */
  listFactors(userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all the supported factors that can be enrolled for the specified user
     * List all Supported Factors
     * @param userId
     */
  listSupportedFactors(userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all available security questions for a user's `question` factor
     * List all Supported Security Questions
     * @param userId
     */
  listSupportedSecurityQuestions(userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Unenrolls an existing factor for the specified user, allowing the user to enroll a new factor
     * Unenroll a Factor
     * @param userId
     * @param factorId
     * @param removeEnrollmentRecovery
     */
  unenrollFactor(userId: string, factorId: string, removeEnrollmentRecovery?: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * Verifies an OTP for a `token` or `token:hardware` factor
     * Verify an MFA Factor
     * @param userId
     * @param factorId
     * @param templateId
     * @param tokenLifetimeSeconds
     * @param X_Forwarded_For
     * @param User_Agent
     * @param Accept_Language
     * @param body
     */
  verifyFactor(userId: string, factorId: string, templateId?: string, tokenLifetimeSeconds?: number, X_Forwarded_For?: string, User_Agent?: string, Accept_Language?: string, body?: VerifyFactorRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class UserFactorApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to activateFactor
     * @throws ApiException if the response code was not in [200, 299]
     */
  activateFactor(response: ResponseContext): Promise<UserFactor>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to enrollFactor
     * @throws ApiException if the response code was not in [200, 299]
     */
  enrollFactor(response: ResponseContext): Promise<UserFactor>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFactor
     * @throws ApiException if the response code was not in [200, 299]
     */
  getFactor(response: ResponseContext): Promise<UserFactor>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFactorTransactionStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
  getFactorTransactionStatus(response: ResponseContext): Promise<VerifyUserFactorResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listFactors
     * @throws ApiException if the response code was not in [200, 299]
     */
  listFactors(response: ResponseContext): Promise<Array<UserFactor>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listSupportedFactors
     * @throws ApiException if the response code was not in [200, 299]
     */
  listSupportedFactors(response: ResponseContext): Promise<Array<UserFactor>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listSupportedSecurityQuestions
     * @throws ApiException if the response code was not in [200, 299]
     */
  listSupportedSecurityQuestions(response: ResponseContext): Promise<Array<SecurityQuestion>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to unenrollFactor
     * @throws ApiException if the response code was not in [200, 299]
     */
  unenrollFactor(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to verifyFactor
     * @throws ApiException if the response code was not in [200, 299]
     */
  verifyFactor(response: ResponseContext): Promise<VerifyUserFactorResponse>;
}
