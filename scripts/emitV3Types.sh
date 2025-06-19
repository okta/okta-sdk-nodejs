# copy static typings into location next to generated TS modules so tsc can resolve them
rsync -r --include='*.d.ts' --exclude="generated" --exclude=".eslintrc" src/types/ src

# remove erroneous imports
# sed -i '' '/^import { Set }/d' ./src/generated/models/*.ts
# sed -i '' '/^import { URI }/d' ./src/generated/**/*.ts

# remove *AllOf imports
# sed -i '' "/AllOf'/d" ./src/generated/**/*.ts
# sed -i '' '/AllOf,/d' ./src/generated/**/*.ts
find . -name '*AllOfLinks.ts' -exec bash -c ' mv $0 ${0//AllOfLinks/Links}' {} \;
sed -i '' 's/AllOfLinks/Links/g' ./src/generated/**/*.ts

# ignoredFiles=()

tsc --project ./src/generated/tsconfig.json
 
# undo changes in files from ingorelist
# for i in ${!ignoredFiles[@]}; do
#   echo `git checkout ./src/generated/models/${ignoredFiles[$i]}.js`
# done

# copy generated typings to src/types
rsync -r --include='*.d.ts' --exclude="*.js" --exclude="*.ts" --exclude="*.md" --exclude="*.json" --exclude ".openapi-generator*" -- src/generated/ src/types/generated

# move generated .md files into docs directory
mkdir -p api-docs
mv ./src/generated/*.md api-docs

# remove non-js files from src
find src/generated/ -type f ! -name "*.js" ! -name ".openapi-generator-ignore" ! -name "tsconfig.json" -delete

# remove copied typings used for TS compilation
rm `find ./src -name "*.d.ts" -not -path "./src/types/*"`

# add copyright banner and fix formatting
node ./utils/maintain-banners.js
node ./node_modules/eslint/bin/eslint.js . --fix

