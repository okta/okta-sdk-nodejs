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

class ModelResolutionFactory {
  constructor(client) {
    this.client = client;
  }

  getMapping() {
    return {};
  }

  getResolutionProperty() {
    return '';
  }

  getParentModel() {
    return null;
  }

  createInstance(resource) {
    const resolutionProperty = this.getResolutionProperty();
    const mapping = this.getMapping();
    let Constructor = this.getParentModel();
    if (resolutionProperty && resource[resolutionProperty] && mapping[resource[resolutionProperty]]) {
      Constructor = mapping[resource[resolutionProperty]];
      if (Constructor instanceof ModelResolutionFactory) {
        return Constructor.createInstance.apply(Constructor, arguments);
      }
      return new Constructor(resource, this.client);
    }

    return new Constructor(resource, this.client);
  }
}

module.exports = ModelResolutionFactory;
