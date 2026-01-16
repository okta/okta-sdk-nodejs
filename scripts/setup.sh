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

cd ${OKTA_HOME}/${REPO}

if ! yarn install --frozen-lockfile; then
  echo "yarn install failed! Exiting..."
  exit ${FAILED_SETUP}
fi
