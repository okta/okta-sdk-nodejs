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


/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

import { Resource } from '../resource';
import { Client } from '../client';
import { OptionalKnownProperties } from '../optional-known-properties-type';
import { EmailTemplateTranslation } from './EmailTemplateTranslation';

declare class EmailTemplateTranslations extends Resource {
  constructor(resourceJson: Record<string, unknown>, client: Client);

  cs: EmailTemplateTranslation;
  da: EmailTemplateTranslation;
  de: EmailTemplateTranslation;
  el: EmailTemplateTranslation;
  en: EmailTemplateTranslation;
  es: EmailTemplateTranslation;
  fi: EmailTemplateTranslation;
  fr: EmailTemplateTranslation;
  hu: EmailTemplateTranslation;
  readonly id: EmailTemplateTranslation;
  it: EmailTemplateTranslation;
  ja: EmailTemplateTranslation;
  ko: EmailTemplateTranslation;
  ms: EmailTemplateTranslation;
  nb: EmailTemplateTranslation;
  nl_NL: EmailTemplateTranslation;
  pl: EmailTemplateTranslation;
  pt_BR: EmailTemplateTranslation;
  ro: EmailTemplateTranslation;
  ru: EmailTemplateTranslation;
  sv: EmailTemplateTranslation;
  th: EmailTemplateTranslation;
  tr: EmailTemplateTranslation;
  uk: EmailTemplateTranslation;
  vi: EmailTemplateTranslation;
  zh_CN: EmailTemplateTranslation;
  zh_TW: EmailTemplateTranslation;

}

type EmailTemplateTranslationsOptions = OptionalKnownProperties<EmailTemplateTranslations>;

export {
  EmailTemplateTranslations,
  EmailTemplateTranslationsOptions
};
