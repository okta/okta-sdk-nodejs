# copy static typings into location next to generated TS modules so tsc can resolve them
rsync -r --include='*.d.ts' --exclude="generated" --exclude=".eslintrc" src/types/ src

# build types
tsc --project ./src/generated/tsconfig.json
 
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
