#!/bin/bash -x

source ${OKTA_HOME}/${REPO}/scripts/setup.sh

export OKTA_CLIENT_ORGURL=https://node-sdk-oie.oktapreview.com
get_vault_secret_key devex/okta-sdk-nodejs-vars api_key OKTA_CLIENT_TOKEN
export OKTA_CLIENT_CLIENTID=0oa1q34stxthm0zbJ1d7
get_vault_secret_key devex/okta-sdk-nodejs-vars private_key OKTA_CLIENT_PRIVATEKEY

export TEST_SUITE_TYPE="junit"
export TEST_RESULT_FILE_DIR="${REPO}/test-reports"

if ! yarn test:integration; then
  echo "Integration tests failed! Exiting..."
  yarn aftertest
  exit ${PUBLISH_TYPE_AND_RESULT_DIR_BUT_ALWAYS_FAIL}
fi

yarn aftertest

ls -al ${OKTA_HOME}/${REPO}/test-reports

echo ${TEST_SUITE_TYPE} > ${TEST_SUITE_TYPE_FILE}
echo ${TEST_RESULT_FILE_DIR} > ${TEST_RESULT_FILE_DIR_FILE}
exit ${PUBLISH_TYPE_AND_RESULT_DIR}
