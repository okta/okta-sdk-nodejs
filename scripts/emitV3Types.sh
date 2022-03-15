tsc src/v3/**/*.ts --declaration
rsync -r src/v3/**/*.d.ts src/types/v3
find  src/v3/ -type f ! -name "*.js" -delete
