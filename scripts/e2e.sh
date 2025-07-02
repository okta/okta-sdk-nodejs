#!/bin/bash -x
set -eo pipefail

source ${OKTA_HOME}/${REPO}/scripts/setup.sh

export OKTA_CLIENT_ORGURL=https://node-sdk-oie.oktapreview.com
export OKTA_CLIENT_CLIENTID=0oa1q34stxthm0zbJ1d7
get_terminus_secret "/" api_key OKTA_CLIENT_TOKEN
get_terminus_secret "/" private_key E2E_PK
get_terminus_secret "/" username ORG_USER

HEADER="-----BEGIN PRIVATE KEY-----"
FOOTER="-----END PRIVATE KEY-----"

# NOTE: storing pem as secret results in newline characters becoming spaces, which
# causes the pem to be malformed when used by tests. Below solves this issue
pem=$(echo ${E2E_PK:31})                            # remove -----BEGIN prefix
pem=$(echo "${pem% ${FOOTER}}")                     # remove -----END suffix
# BEGIN / END need to be removed so all remaining spaces can be converted to newlines
echo $HEADER > /tmp/e2e.pem                         # appends BEGIN header to tmp file
echo "$pem" | tr " " "\n" >> /tmp/e2e.pem           # appends pem with spaces converted to newlines
echo "$FOOTER" >> /tmp/e2e.pem                      # appends END footer to tmp file
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
