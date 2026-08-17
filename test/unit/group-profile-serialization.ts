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

import { expect } from 'chai';
import { ObjectSerializer } from '../../src/generated/models/ObjectSerializer';

// Regression test for: custom GroupProfile attributes stripped by the serializer.
// Root cause: GroupProfile was not marked x-okta-extensible, so ObjectSerializer
// discarded schema-extension attributes (those added via the Schemas API) on
// both serialize and deserialize, matching the behavior of UserProfile and
// OktaUserGroupProfile which remain extensible.

describe('GroupProfile serialization', () => {
  it('preserves custom (schema-extension) attributes during serialization', () => {
    const input = {
      name: 'West Coast Users',
      description: 'All West Coast users',
      customAttribute: 'custom-value',
    };

    const serialized = ObjectSerializer.serialize(input, 'GroupProfile', '');

    expect(serialized).to.have.property('name', 'West Coast Users');
    expect(serialized).to.have.property('customAttribute', 'custom-value');
  });

  it('preserves custom (schema-extension) attributes during deserialization', () => {
    const raw = {
      name: 'West Coast Users',
      customAttribute: 'custom-value',
    };

    const deserialized = ObjectSerializer.deserialize(raw, 'GroupProfile', '');

    expect(deserialized).to.have.property('customAttribute', 'custom-value');
  });
});
