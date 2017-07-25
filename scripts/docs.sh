#!/bin/bash
set -e

SOURCE_BRANCH="master"
TARGET_BRANCH="gh-pages"
CURRENT_VERSION=$(cat package.json | grep version | head -1 | awk -F= "{ print $2 }" | sed 's/[version:,\",]//g' | tr -d '[[:space:]]')

function formatDocs {
    # Copy the contents of the generated docs into
    # the root of gh-pages and a versioned directory.
    cd jsdocs/
    mkdir jsdocs/
    mkdir -p jsdocs/${CURRENT_VERSION}/
    cd \@okta/okta-sdk-nodejs/${CURRENT_VERSION}/
    cp -r . ../../../../jsdoc/jsdocs/
    cp -r . ../../../../jsdoc/jsdocs/${CURRENT_VERSION}
    cd ../../../
    rm -rf \@okta
    cd ..
}

function buildDocs {
    echo "==== Building Docs ===="
    npm run docs
}

function createGhPages {
    # If the branch gh-pages doesn't exist, create it.
    git checkout --orphan $TARGET_BRANCH
    git rm --cached -r .
    git clean -df
    touch README.md
    git add README.md
    git commit -m "Initial Commit"
    git push $SSH_REPO $TARGET_BRANCH
}

# Save useful information
REPO=`git config remote.origin.url`
echo ${REPO}
SSH_REPO=${REPO/https:\/\/github.com\//git@github.com:}
echo "Stored: REPO=${REPO}"

# Clone the existing gh-pages for this repo into jsdoc/
rm -rf jsdoc
git clone $REPO jsdoc
cd jsdoc
git checkout $TARGET_BRANCH || createGhPages
cd ..

mkdir -p jsdoc/jsdocs/${CURRENT_VERSION}/

# Run compile script
buildDocs

# Format docs
formatDocs

# Change into docs output folder
cd jsdoc/ 

git add -A ./jsdocs/

git commit -m ":arrow_up: Release jsdocs for version: ${CURRENT_VERSION}"

# Now that we're all set up, we can push.
git push $SSH_REPO $TARGET_BRANCH
