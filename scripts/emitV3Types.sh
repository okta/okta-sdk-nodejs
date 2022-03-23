# copy typings into location next to JS modules so tsc can resolve them
cp src/types/*.d.ts src/
rm src/client.d.ts src/generated-client.d.ts
tsc src/v3/**/*.ts --declaration
rm src/*.d.ts
rsync -r --include='*.d.ts' --exclude="*.js" --exclude="*.ts" src/v3/ src/types/v3
find src/v3/ -type f ! -name "*.js" -delete
