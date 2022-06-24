# copy static typings into location next to generated TS modules so tsc can resolve them
rsync -r --include='*.d.ts' --exclude="generated" --exclude=".eslintrc" src/types/ src

# remove lines that are breaking TS compilation (incorrectly generated discriminator properties)
echo "\033[33mWarning: Application, Factor, Policy model hierarchies updates are ignored as they are not generated correctly\033[0m"
sed -i '' '/this.factorType =/d' ./src/generated/models/*.ts
sed -i '' '/this.signOnMode =/d' ./src/generated/models/*.ts
sed -i '' '/this.type =/d' ./src/generated/models/*.ts
sed -i '' '/^import { Set }/d' ./src/generated/models/*.ts
ignoredFiles=()

tsc --project ./src/generated/tsconfig.json
 
# undo changes in files from ingorelist
for i in ${!ignoredFiles[@]}; do
  echo `git checkout ./src/generated/models/${ignoredFiles[$i]}.js`
done

# copy generated typings to src/types
rsync -r --include='*.d.ts' --exclude="*.js" --exclude="*.ts" --exclude="*.md" --exclude="*.json" --exclude ".openapi-generator*" -- src/generated/ src/types/generated

# remove non-js files from src
find src/generated/ -type f ! -name "*.js" ! -name ".openapi-generator-ignore" ! -name "tsconfig.json" -delete

# remove copied typings used for TS compilation
rm `find ./src -name "*.d.ts" -not -path "./src/types/*"`

# add copyright banner and fix formatting
node ./utils/maintain-banners.js
node ./node_modules/eslint/bin/eslint.js . --fix
