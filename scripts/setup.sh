#!/bin/bash

# Install required node version
export NVM_DIR="/root/.nvm"
setup_service node v18.19.0

if ! npm install -g yarn@1.22.22; then
  echo "Failed to install yarn"
  exit ${FAILED_SETUP}
fi

# Add yarn to the $PATH so npm cli commands do not fail
export PATH="${PATH}:$(yarn global bin)"

# Revert the cache-min setting, since the internal cache does not apply to
# these repos (and causes problems in lookups)
#npm config set cache-min 10

cd ${OKTA_HOME}/${REPO}

# Yarn does not utilize the npmrc/yarnrc registry configuration
# if a lockfile is present. This results in `yarn install` problems
# for private registries. Until yarn@2.0.0 is released, this is our current
# workaround.
#
# Related issues:
#  - https://github.com/yarnpkg/yarn/issues/5892
#  - https://github.com/yarnpkg/yarn/issues/3330

YARN_REGISTRY=https://registry.yarnpkg.com
OKTA_REGISTRY=${ARTIFACTORY_URL}/api/npm/npm-okta-all

# Replace yarn artifactory with Okta's
#sed -i "s#${YARN_REGISTRY}#${OKTA_REGISTRY}#g" yarn.lock

# Override registry configs to point to the public registry since this repository is public
# npm config set registry ${YARN_REGISTRY}
# npm config set @okta:registry ${YARN_REGISTRY}

if ! yarn install --frozen-lockfile; then
  echo "yarn install failed! Exiting..."
  exit ${FAILED_SETUP}
fi

# Revert the original change
#sed -i "s#${OKTA_REGISTRY}#${YARN_REGISTRY}#" yarn.lock
