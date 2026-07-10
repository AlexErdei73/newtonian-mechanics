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

# TISZTA, IZOLÁLT NAVIGÁCIÓS STÍLUSOK (A gyári github-markdown.css 100% érintetlen marad!)
GLOBAL_STYLE='<style>
  .global-header { position: fixed; top: 0; left: 0; width: 100%; z-index: 99999; }
  .global-navbar { background-color: #0969da; padding: 12px 24px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 4px 12px rgba(0,0,0,0.15); font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif; }
  .global-navbar a { color: #ffffff !important; font-size: 14px; font-weight: 500; text-decoration: none !important; }
  .navbar-brand { font-weight: 700 !important; font-size: 16px !important; }
  .nav-group, .nav-group-center { display: flex; align-items: center; gap: 20px; }
  .nav-btn { background-color: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.2); border-radius: 6px; padding: 6px 16px; font-weight: 600; }
  .nav-btn:hover { background-color: rgba(255,255,255,0.25); border-color: rgba(255,255,255,0.4); }
  .topic-label { font-size: 13px; color: rgba(255,255,255,0.75); font-weight: 500; }
  /* ... (A GLOBAL_STYLE változó többi része teljesen változatlan marad, csak a legalját írjuk át:) */
  main.markdown-body { 
      padding-top: 95px !important; /* Emelt felső távolság a menütől */
      padding-bottom: 45px !important; /* Alsó tiszta távolság */
      padding-left: 30px !important; /* Oldalsó belső margók mobilra */
      padding-right: 30px !important;
      max-width: 980px !important; /* A hivatalos GitHub maximális szövegszélesség */
      margin: 0 auto !important; /* EZ ZÁRJA KÖZÉPRE A TELJES TARTALMAT a képernyőn */
      box-sizing: border-box !important;
  }
</style>'

ROOT_HEADER="$GLOBAL_STYLE"'<link rel="icon" type="image/x-icon" href="favicon.ico"><script type="module" src="https://cdn.jsdelivr.net/npm/@justinribeiro/lite-youtube@1/lite-youtube.min.js" defer></script>'
SUB_HEADER="$GLOBAL_STYLE"'<link rel="icon" type="image/x-icon" href="../favicon.ico"><script type="module" src="https://cdn.jsdelivr.net/npm/@justinribeiro/lite-youtube@1/lite-youtube.min.js" defer></script>'

echo "=== STEP 1: Compiling Markdown to Pure HTML via Pandoc ==="

if [ -f "README.md" ]; then
    pandoc -f markdown -t html5 --standalone --mathml --no-highlight \
           --template=pandoc_clean_template.html \
           -c github-markdown.css -H <(echo "$ROOT_HEADER") -M title="$PROJECT_TITLE - Előszó" README.md -o index.html
fi

if [ -f "NEWTON_MECHANIKAJA.md" ]; then
    pandoc -f markdown -t html5 --standalone --mathml --no-highlight \
           --template=pandoc_clean_template.html \
           -c github-markdown.css -H <(echo "$ROOT_HEADER") -M title="$PROJECT_TITLE - Tartalomjegyzék" NEWTON_MECHANIKAJA.md -o NEWTON_MECHANIKAJA.html
fi

if [ -d "Mechanika" ]; then
    cp pandoc_clean_template.html Mechanika/
    cd Mechanika
    find . -maxdepth 1 -type f \( -iname "*.md" \) | while read -r lecke; do
        lecke_clean=$(basename "$lecke")
        basename="${lecke_clean%.*}"
        output_html="${basename}.html"
        
        pandoc "$lecke_clean" -f markdown -t html5 --standalone --mathml --no-highlight \
               --template=pandoc_clean_template.html \
               --shift-heading-level-by=-1 \
               -c ../github-markdown.css \
               -H <(echo "$SUB_HEADER") \
               -o "$output_html"
    done
    rm pandoc_clean_template.html
    cd ..
fi

rm pandoc_clean_template.html

echo ""
echo "=== STEP 2: Running Node.js Post-Processor Engine ==="
node process.js

echo "=== SUCCESS! Site built with unique H1 and pure main.markdown-body isolation! ==="
