#!/bin/bash -x
set -eo pipefail

source ${OKTA_HOME}/${REPO}/scripts/setup.sh

export OKTA_CLIENT_ORGURL=https://node-sdk-oie.oktapreview.com
export OKTA_CLIENT_CLIENTID=0oa1q34stxthm0zbJ1d7
get_vault_secret_key repo_gh-okta-okta-sdk-nodejs/default api_key OKTA_CLIENT_TOKEN
get_vault_secret_key repo_gh-okta-okta-sdk-nodejs/default private_key E2E_PK
get_vault_secret_key repo_gh-okta-okta-sdk-nodejs/default username ORG_USER

echo "$E2E_PK" > /tmp/e2e.pem
export OKTA_CLIENT_PRIVATEKEY=$(cat /tmp/e2e.pem)

export TEST_SUITE_TYPE="junit"
export TEST_RESULT_FILE_DIR="${REPO}/test-reports"

exit_code=${PUBLISH_TYPE_AND_RESULT_DIR}

if ! yarn test:integration; then
  exit_code=${PUBLISH_TYPE_AND_RESULT_DIR_BUT_ALWAYS_FAIL}
fi

yarn aftertest

ls -al ${OKTA_HOME}/${REPO}/test-reports

echo ${TEST_SUITE_TYPE} > ${TEST_SUITE_TYPE_FILE}
echo ${TEST_RESULT_FILE_DIR} > ${TEST_RESULT_FILE_DIR_FILE}

exit ${exit_code}
