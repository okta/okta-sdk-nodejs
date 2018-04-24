#!/bin/bash -vx

cd ${OKTA_HOME}/${REPO}

setup_service node v8.1.1

# Revert the cache-min setting, since the internal cache does not apply to
# these repos (and causes problems in lookups)
npm config set cache-min 10

# Use newer, faster npm
npm install -g npm@4.0.2

if ! npm install; then
  echo "npm install failed! Exiting..."
  exit ${FAILED_SETUP}
fi

echo "which node"

which node

ln -s $(which node) /usr/bin/node
