tsc src/v3/**/*.ts --declaration
rsync -r --include='*.d.ts' --exclude="*.js" --exclude="*.ts" src/v3/ src/types/v3
find src/v3/ -type f ! -name "*.js" -delete
