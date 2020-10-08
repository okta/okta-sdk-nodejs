#!/bin/bash

source ${OKTA_HOME}/${REPO}/scripts/setup.sh

yarn test:unit
yarn test:integration
