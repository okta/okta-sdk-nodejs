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

// Regression test for: ProfileMapping(Request).properties serialized as empty object
// Root cause: attributeTypeMap declared 'properties' as 'ProfileMappingProperty' (single object)
// instead of '{ [key: string]: ProfileMappingProperty; }' (map), causing all custom attribute
// keys to be discarded by the serializer.

describe('ProfileMapping serialization', () => {
  describe('ProfileMappingRequest', () => {
    it('preserves custom property keys during serialization', () => {
      const input = {
        properties: {
          logoutRedirectURL: {
            expression: '"https://example.com/logout"',
            pushStatus: 'PUSH'
          },
          login: {
            expression: 'appuser.userName',
            pushStatus: 'DONT_PUSH'
          }
        }
      };

      const serialized = ObjectSerializer.serialize(input, 'ProfileMappingRequest', '');

      expect(serialized).to.have.property('properties');
      expect(serialized.properties).to.have.all.keys('logoutRedirectURL', 'login');
      expect(serialized.properties.logoutRedirectURL).to.deep.equal({
        expression: '"https://example.com/logout"',
        pushStatus: 'PUSH'
      });
      expect(serialized.properties.login).to.deep.equal({
        expression: 'appuser.userName',
        pushStatus: 'DONT_PUSH'
      });
    });

    it('does not send an empty properties object when properties are provided', () => {
      const input = {
        properties: {
          myAttribute: {
            expression: '"https://example.com"',
            pushStatus: 'PUSH'
          }
        }
      };

      const serialized = ObjectSerializer.serialize(input, 'ProfileMappingRequest', '');

      expect(Object.keys(serialized.properties)).to.have.length(1);
      expect(serialized.properties).to.have.property('myAttribute');
    });

    it('serializes an empty properties map as empty object', () => {
      const input = { properties: {} };

      const serialized = ObjectSerializer.serialize(input, 'ProfileMappingRequest', '');

      expect(serialized).to.have.property('properties');
      expect(serialized.properties).to.deep.equal({});
    });
  });

  describe('ProfileMapping deserialization', () => {
    it('preserves custom property keys during deserialization', () => {
      const raw = {
        id: 'prm123',
        properties: {
          logoutRedirectURL: {
            expression: '"https://example.com/logout"',
            pushStatus: 'PUSH'
          }
        }
      };

      const deserialized = ObjectSerializer.deserialize(raw, 'ProfileMapping', '');

      expect(deserialized.properties).to.have.property('logoutRedirectURL');
      expect(deserialized.properties.logoutRedirectURL.expression).to.equal('"https://example.com/logout"');
      expect(deserialized.properties.logoutRedirectURL.pushStatus).to.equal('PUSH');
    });

    it('deserializes multiple custom properties correctly', () => {
      const raw = {
        id: 'prm456',
        properties: {
          firstName: { expression: 'appuser.firstName', pushStatus: 'PUSH' },
          lastName:  { expression: 'appuser.lastName',  pushStatus: 'PUSH' },
          email:     { expression: 'appuser.email',     pushStatus: 'DONT_PUSH' }
        }
      };

      const deserialized = ObjectSerializer.deserialize(raw, 'ProfileMapping', '');

      expect(deserialized.properties).to.have.all.keys('firstName', 'lastName', 'email');
      expect(deserialized.properties.email.pushStatus).to.equal('DONT_PUSH');
    });
  });
});
