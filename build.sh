#!/bin/bash

PROJECT_TITLE="Newton Mechanikája"

# GOLYÓÁLLÓ EGYEDI SABLON: Eleve beépítve tartalmazza a <main class="markdown-body"> burkolót!
# Így a gyári GitHub CSS azonnal életre kel, és a felesleges dupla <h1> header is örökre eltűnik.
cat << 'EOF' > pandoc_clean_template.html
<!DOCTYPE html>
<html xmlns="http://w3.org" lang="hu" xml:lang="hu">
<head>
  <meta charset="utf-8" />
  <meta name="generator" content="pandoc" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
  <title>$title$</title>
  $for(css)$
  <link rel="stylesheet" href="$css$" />
  $endfor$
  $for(header-includes)$
  $header-includes$
  $endfor$
</head>
<body>
<main class="markdown-body">
$body$
</main>
</body>
</html>
EOF

ROOT_HEADER='<link rel="icon" type="image/x-icon" href="favicon.ico"><script type="module" src="https://cdn.jsdelivr.net/npm/@justinribeiro/lite-youtube@1/lite-youtube.min.js" defer></script>'
SUB_HEADER='<link rel="icon" type="image/x-icon" href="../favicon.ico"><script type="module" src="https://cdn.jsdelivr.net/npm/@justinribeiro/lite-youtube@1/lite-youtube.min.js" defer></script>'

echo "=== STEP 1: Compiling Markdown to Pure HTML via Pandoc ==="

if [ -f "README.md" ]; then
    pandoc -f markdown -t html5 --standalone --mathml --syntax-highlighting=none \
           --mathml \
           --template=pandoc_clean_template.html \
           -c github-markdown.css -H <(echo "$ROOT_HEADER") -M title="$PROJECT_TITLE - Előszó" README.md -o index.html
fi

if [ -f "NEWTON_MECHANIKAJA.md" ]; then
    pandoc -f markdown -t html5 --standalone --mathml --syntax-highlighting=none \
           --mathml \
           --template=pandoc_clean_template.html \
           -c github-markdown.css -H <(echo "$ROOT_HEADER") -M title="$PROJECT_TITLE - Tartalomjegyzék" NEWTON_MECHANIKAJA.md -o NEWTON_MECHANIKAJA.html
fi

if [ -f "VEGEREDMENYEK.md" ]; then
    pandoc -f markdown -t html5 --standalone --mathml --syntax-highlighting=none \
           --mathml \
           --template=pandoc_clean_template.html \
           -c github-markdown.css -H <(echo "$ROOT_HEADER") -M title="$PROJECT_TITLE - Végeredmények" VEGEREDMENYEK.md -o VEGEREDMENYEK.html
fi

if [ -d "Mechanika" ]; then
    cp pandoc_clean_template.html Mechanika/
    cd Mechanika
    find . -maxdepth 1 -type f \( -iname "*.md" \) | while read -r lecke; do
        lecke_clean=$(basename "$lecke")
        basename="${lecke_clean%.*}"
        output_html="${basename}.html"
        
        pandoc "$lecke_clean" -f markdown -t html5 --standalone --mathml --syntax-highlighting=none \
               --mathml \
               --template=pandoc_clean_template.html \
               -c ../github-markdown.css \
               -H <(echo "$SUB_HEADER") \
               -o "$output_html" --wrap=none
    done
    rm pandoc_clean_template.html
    cd ..
fi

rm pandoc_clean_template.html

echo ""
echo "=== STEP 2: Running Node.js Post-Processor Engine ==="
node process.js

echo "=== SUCCESS! Site built with unique H1 and pure main.markdown-body isolation! ==="
