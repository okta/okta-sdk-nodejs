#!/bin/bash -x
set -eo pipefail

source ${OKTA_HOME}/${REPO}/scripts/setup.sh


export OKTA_CLIENT_ORGURL=https://node-sdk.okta.com
export OKTA_CLIENT_CLIENTID=0oa1jnkiuz6FCTchz4x7
get_vault_secret_key repo_gh-okta-okta-sdk-nodejs/default api_key OKTA_CLIENT_TOKEN
get_vault_secret_key repo_gh-okta-okta-sdk-nodejs/default private_key OKTA_CLIENT_PRIVATEKEY

export TEST_SUITE_TYPE="junit"
export TEST_RESULT_FILE_DIR="${REPO}/test-reports"

if ! yarn test:types; then
  echo "tsd tests failed! Exiting..."
  exit $PUBLISH_TYPE_AND_RESULT_DIR_BUT_ALWAYS_FAIL
fi

if ! yarn test:unit; then
  echo "Unit tests failed! Exiting..."
  echo ${TEST_SUITE_TYPE} > ${TEST_SUITE_TYPE_FILE}
  echo ${TEST_RESULT_FILE_DIR} > ${TEST_RESULT_FILE_DIR_FILE}
  exit $PUBLISH_TYPE_AND_RESULT_DIR_BUT_ALWAYS_FAIL
fi

if ! yarn jest; then
  echo "jest tests failed! Exiting..."
  echo ${TEST_SUITE_TYPE} > ${TEST_SUITE_TYPE_FILE}
  echo ${TEST_RESULT_FILE_DIR} > ${TEST_RESULT_FILE_DIR_FILE}
  exit $PUBLISH_TYPE_AND_RESULT_DIR_BUT_ALWAYS_FAIL
fi

echo ${TEST_SUITE_TYPE} > ${TEST_SUITE_TYPE_FILE}
echo ${TEST_RESULT_FILE_DIR} > ${TEST_RESULT_FILE_DIR_FILE}
exit ${PUBLISH_TYPE_AND_RESULT_DIR}
