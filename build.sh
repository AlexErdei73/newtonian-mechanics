#!/bin/bash

PROJECT_TITLE_HU="Newton Mechanikája"
PROJECT_TITLE_EN="Newtonian Mechanics"

# GOLYÓÁLLÓ EGYEDI SABLON: Eleve beépítve tartalmazza a <main class="markdown-body"> burkolót!
# Így a gyári GitHub CSS azonnal életre kel, és a felesleges dupla <h1> header is örökre eltűnik.
cat << 'EOF' > pandoc_clean_template.html
<!DOCTYPE html>
<html xmlns="http://w3.org" lang="$lang$" xml:lang="$lang$">
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

# ==========================================================================
# STEP 1: COMPILING HUNGARIAN ENVIRONMENT VIA PANDOC
# ==========================================================================
echo "=== STEP 1: Compiling Hungarian Environment via Pandoc ==="

if [ -f "README.md" ]; then
    pandoc -f markdown -t html5 --standalone --mathml --syntax-highlighting=none \
           --id-prefix="" --template=pandoc_clean_template.html \
           -c github-markdown.css -H <(echo "$ROOT_HEADER") -M title="$PROJECT_TITLE_HU - Előszó" -M lang="hu" README.md -o index.html
fi

if [ -f "NEWTON_MECHANIKAJA.md" ]; then
    pandoc -f markdown -t html5 --standalone --mathml --syntax-highlighting=none \
           --id-prefix="" --template=pandoc_clean_template.html \
           -c github-markdown.css -H <(echo "$ROOT_HEADER") -M title="$PROJECT_TITLE_HU - Tartalomjegyzék" -M lang="hu" NEWTON_MECHANIKAJA.md -o NEWTON_MECHANIKAJA.html
fi

if [ -f "VEGEREDMENYEK.md" ]; then
    pandoc -f markdown -t html5 --standalone --mathml --syntax-highlighting=none \
           --id-prefix="" --template=pandoc_clean_template.html \
           -c github-markdown.css -H <(echo "$ROOT_HEADER") -M title="$PROJECT_TITLE_HU - Végeredmények" -M lang="hu" VEGEREDMENYEK.md -o VEGEREDMENYEK.html
fi

if [ -f "IRODALOMJEGYZEK.md" ]; then
    echo "Processing: IRODALOMJEGYZEK.md -> IRODALOMJEGYZEK.html"
    pandoc -f markdown -t html5 --standalone --mathml --syntax-highlighting=none \
           --id-prefix="" --template=pandoc_clean_template.html \
           -c github-markdown.css -H <(echo "$ROOT_HEADER") -M title="$PROJECT_TITLE_HU - Ajánlott Irodalom" -M lang="hu" IRODALOMJEGYZEK.md -o IRODALOMJEGYZEK.html
fi

if [ -d "Mechanika" ]; then
    cp pandoc_clean_template.html Mechanika/
    cd Mechanika
    find . -maxdepth 1 -type f \( -iname "*.md" \) | while read -r lecke; do
        lecke_clean=$(basename "$lecke")
        basename="${lecke_clean%.*}"
        output_html="${basename}.html"
        
        pandoc "$lecke_clean" -f markdown -t html5 --standalone --mathml --syntax-highlighting=none \
               --id-prefix="" --template=pandoc_clean_template.html \
               -c ../github-markdown.css -H <(echo "$SUB_HEADER") -M lang="hu" \
               -o "$output_html" --wrap=none
    done
    rm pandoc_clean_template.html
    cd ..
fi

# ==========================================================================
# STEP 1B: COMPILING ENGLISH MIRROR ENVIRONMENT VIA PANDOC
# ==========================================================================
if [ -d "en" ]; then
    echo ""
    echo "=== STEP 1B: Compiling English Mirror Environment via Pandoc ==="
    
    cp pandoc_clean_template.html en/
    cd en

    if [ -f "README.md" ]; then
        pandoc -f markdown -t html5 --standalone --mathml --syntax-highlighting=none \
               --id-prefix="" --template=pandoc_clean_template.html \
               -c github-markdown.css -H <(echo "$ROOT_HEADER") -M title="$PROJECT_TITLE_EN - Preface" -M lang="en" README.md -o index.html
    fi

    if [ -f "NEWTON_MECHANIKAJA.md" ]; then
        pandoc -f markdown -t html5 --standalone --mathml --syntax-highlighting=none \
               --id-prefix="" --template=pandoc_clean_template.html \
               -c github-markdown.css -H <(echo "$ROOT_HEADER") -M title="$PROJECT_TITLE_EN - Table of Contents" -M lang="en" NEWTON_MECHANIKAJA.md -o NEWTON_MECHANIKAJA.html
    fi

    if [ -f "VEGEREDMENYEK.md" ]; then
        pandoc -f markdown -t html5 --standalone --mathml --syntax-highlighting=none \
               --id-prefix="" --template=pandoc_clean_template.html \
               -c github-markdown.css -H <(echo "$ROOT_HEADER") -M title="$PROJECT_TITLE_EN - Solutions" -M lang="en" VEGEREDMENYEK.md -o 'VEGEREDMENYEK.html'
    fi

    if [ -f "IRODALOMJEGYZEK.md" ]; then
        echo "Processing: en/IRODALOMJEGYZEK.md -> en/IRODALOMJEGYZEK.html"
        pandoc -f markdown -t html5 --standalone --mathml --syntax-highlighting=none \
               --id-prefix="" --template=pandoc_clean_template.html \
               -c github-markdown.css -H <(echo "$ROOT_HEADER") -M title="$PROJECT_TITLE_EN - Bibliography" -M lang="en" IRODALOMJEGYZEK.md -o IRODALOMJEGYZEK.html
    fi

    if [ -d "Mechanika" ]; then
        cp pandoc_clean_template.html Mechanika/
        cd Mechanika
        find . -maxdepth 1 -type f \( -iname "*.md" \) | while read -r lecke; do
            lecke_clean=$(basename "$lecke")
            basename="${lecke_clean%.*}"
            output_html="${basename}.html"
            
            pandoc "$lecke_clean" -f markdown -t html5 --standalone --mathml --syntax-highlighting=none \
                   --id-prefix="" --template=pandoc_clean_template.html \
                   -c ../github-markdown.css -H <(echo "$SUB_HEADER") -M lang="en" \
                   -o "$output_html" --wrap=none
        done
        rm pandoc_clean_template.html
        cd ..
    fi

    rm pandoc_clean_template.html
    cd ..
fi

rm pandoc_clean_template.html

# ==========================================================================
# STEP 2: RUNNING NODE.JS POST-PROCESSOR PIPELINES
# ==========================================================================
echo ""
echo "=== STEP 2: Running Node.js Post-Processor Engine ==="
echo "Processing Hungarian assets track..."
node process.js --lang=hu

if [ -d "en" ]; then
    echo "Processing English mirror track..."
    node process.js --lang=en
fi

echo "=== SUCCESS! Dual-language ecosystem built and safely isolated! ==="