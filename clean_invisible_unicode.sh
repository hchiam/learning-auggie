#!/bin/bash

# Script to clean invisible Unicode characters from code text files
# This removes zero-width spaces, non-breaking spaces, and other problematic characters

# Find all code and documentation files by extension
find . -type f \
  ! -path "./.git/*" \
  ! -path "./node_modules/*" \
  ! -path "./.augment/*" \
  \( -name "*.md" -o -name "*.sh" -o -name "*.html" -o -name "*.js" -o -name "*.css" \
  -o -name "*.json" -o -name "*.py" -o -name "*.java" -o -name "*.cpp" -o -name "*.c" \
  -o -name "*.h" -o -name "*.hpp" -o -name "*.ts" -o -name "*.tsx" -o -name "*.jsx" \
  -o -name "*.php" -o -name "*.rb" -o -name "*.go" -o -name "*.rs" -o -name "*.swift" \
  -o -name "*.kt" -o -name "*.scala" -o -name "*.xml" -o -name "*.yaml" -o -name "*.yml" \
  -o -name "*.toml" -o -name "*.ini" -o -name "*.cfg" -o -name "*.conf" -o -name "*.txt" \
  -o -name "*.sql" -o -name "*.r" -o -name "*.R" -o -name "*.m" -o -name "*.pl" \
  -o -name "*.lua" -o -name "*.vim" -o -name "*.dockerfile" -o -name "Dockerfile" \
  -o -name "*.gitignore" -o -name "*.env" -o -name "README*" -o -name "LICENSE*" \) \
  -exec perl -i -C -pe 's/[\x{200B}-\x{200D}\x{FEFF}\x{00A0}\x{2028}\x{2029}\x{E0020}-\x{E007E}\x{FFFD}]//g' {} \;

echo "Cleaned invisible Unicode characters from all code and documentation files in the current directory"
