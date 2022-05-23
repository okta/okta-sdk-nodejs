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


/**
 * Returns if a specific http code is in a given code range
 * where the code range is defined as a combination of digits
 * and 'X' (the letter X) with a length of 3
 *
 * @param codeRange string with length 3 consisting of digits and 'X' (the letter X)
 * @param code the http status code to be checked against the code range
 */
export declare function isCodeInRange(codeRange: string, code: number): boolean;
/**
* Returns if it can consume form
*
* @param consumes array
*/
export declare function canConsumeForm(contentTypes: string[]): boolean;
