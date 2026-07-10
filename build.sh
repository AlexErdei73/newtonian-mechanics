#!/bin/bash

echo "=== STEP 1: Processing Root Files (Preface & Table of Contents) ==="

# 1. Convert README.md (Preface) directly into index.html
if [ -f "README.md" ]; then
    echo "Converting Preface: README.md ➔ index.html"
    # A pandoc kimenetét közvetlenül átadjuk a sed-nek, ami beilleszti a class-t a body-ba
    sed 's/\.md)/\.html)/g' README.md | \
    pandoc -f markdown -t html5 \
           --standalone \
           --mathml \
           --no-highlight \
           -c github-markdown.css | \
    sed 's/<body>/<body class="markdown-body">/g' > index.html
else
    echo "Warning: README.md not found!"
fi

# 2. Convert NEWTON_MECHANIKAJA.md (Table of Contents) into NEWTON_MECHANIKAJA.html
if [ -f "NEWTON_MECHANIKAJA.md" ]; then
    echo "Converting Table of Contents: NEWTON_MECHANIKAJA.md ➔ NEWTON_MECHANIKAJA.html"
    sed 's/\.md)/\.html)/g' NEWTON_MECHANIKAJA.md | \
    pandoc -f markdown -t html5 \
           --standalone \
           --mathml \
           --no-highlight \
           -c github-markdown.css | \
    sed 's/<body>/<body class="markdown-body">/g' > NEWTON_MECHANIKAJA.html
else
    echo "Warning: NEWTON_MECHANIKAJA.md not found!"
fi

echo ""
echo "=== STEP 2: Processing the 84 Lectures in 'Mechanika/' ==="

if [ -d "Mechanika" ]; then
    cd Mechanika

    find . -maxdepth 1 -type f \( -iname "*.md" \) | while read -r lecke; do
        lecke_clean=$(basename "$lecke")
        basename="${lecke_clean%.*}"
        output_html="${basename}.html"
        
        echo "Converting Lecture: Mechanika/$lecke_clean ➔ Mechanika/$output_html"
        
        # Átírjuk a belső .md linkeket, lefordítjuk, majd a kimenetben kicseréljük a body taget a class-os verzióra
        sed 's/\.md)/\.html)/g' "$lecke_clean" | \
        pandoc -f markdown -t html5 \
               --standalone \
               --mathml \
               --no-highlight \
               -c ../github-markdown.css | \
        sed 's/<body>/<body class="markdown-body">/g' > "$output_html"
    done

    cd ..
else
    echo "Error: 'Mechanika' directory not found!"
fi

echo ""
echo "=== SUCCESS! All pages injected with the correct body class. ==="
