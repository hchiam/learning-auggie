#!/bin/bash

# Script to clean invisible Unicode characters from Markdown files
# This removes zero-width spaces, non-breaking spaces, and other problematic characters

perl -i -C -pe 's/[\x{200B}-\x{200D}\x{FEFF}\x{00A0}\x{2028}\x{2029}\x{E0020}-\x{E007E}\x{FFFD}]//g' *.md

echo "Cleaned invisible Unicode characters from all .md files in the current directory"
