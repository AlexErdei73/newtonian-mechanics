#!/bin/bash

# Define your fallback global project branding string
PROJECT_TITLE="Newton Mechanikája"

# Build the header file for the main root path
echo '<link rel="icon" type="image/x-icon" href="favicon.ico">' > favicons.html

echo "=== STEP 1: Building Main Root Files ==="

if [ -f "README.md" ]; then
    echo "Processing Preface: README.md ➔ index.html"
    pandoc README.md -f markdown -t html5 --standalone --mathml --no-highlight \
           -c github-markdown.css \
           -H favicons.html \
           -M title="$PROJECT_TITLE - Előszó" \
           -o index.html
fi

if [ -f "NEWTON_MECHANIKAJA.md" ]; then
    echo "Processing Table of Contents: NEWTON_MECHANIKAJA.md ➔ NEWTON_MECHANIKAJA.html"
    pandoc NEWTON_MECHANIKAJA.md -f markdown -t html5 --standalone --mathml --no-highlight \
           -c github-markdown.css \
           -H favicons.html \
           -M title="$PROJECT_TITLE - Tartalomjegyzék" \
           -o NEWTON_MECHANIKAJA.html
fi

# Clean up root temp asset
rm favicons.html

echo ""
echo "=== STEP 2: Building Subfolder Lectures ==="

# Build the header file for the subfolder path
echo '<link rel="icon" type="image/x-icon" href="../favicon.ico">' > Mechanika/sub_favicons.html

if [ -d "Mechanika" ]; then
    cd Mechanika
    
    find . -maxdepth 1 -type f \( -iname "*.md" \) | while read -r lecke; do
        lecke_clean=$(basename "$lecke")
        basename="${lecke_clean%.*}"
        output_html="${basename}.html"
        
        echo "Processing Lecture: Mechanika/$lecke_clean ➔ Mechanika/$output_html"
        
        # FIXED PASS: Shifting headers up by -1 turns your top `# Header` 
        # directly into the browser tab title automatically.
        pandoc "$lecke_clean" -f markdown -t html5 --standalone --mathml --no-highlight \
               --shift-heading-level-by=-1 \
               -c ../github-markdown.css \
               -H sub_favicons.html \
               -o "$output_html"
    done
    
    rm sub_favicons.html
    cd ..
fi

echo ""
echo "=== STEP 3: Applying Core CSS Classes Directly to Output File Objects ==="

# Safely inject your .markdown-body layout framework so your styles return instantly
for html_file in index.html NEWTON_MECHANIKAJA.html; do
    if [ -f "$html_file" ]; then
        sed -i 's/<body>/<body class="markdown-body">/g' "$html_file"
        sed -i 's/\.md"/\.html"/g' "$html_file"
        sed -i 's/\.MD"/\.html"/g' "$html_file"
    fi
done

if [ -d "Mechanika" ]; then
    cd Mechanika
    for html_lecke in *.html; do
        if [ -f "$html_lecke" ]; then
            sed -i 's/<body>/<body class="markdown-body">/g' "$html_lecke"
            sed -i 's/\.md"/\.html"/g' "$html_lecke"
            sed -i 's/\.MD"/\.html"/g' "$html_lecke"
        fi
    done
    cd ..
fi

echo "=== SUCCESS! Styles restored and native layout build complete. ==="
