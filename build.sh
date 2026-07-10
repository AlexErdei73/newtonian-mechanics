#!/bin/bash

PROJECT_TITLE="Newton Mechanikája"

# A fejléc stringeket a memóriában kezeljük
ROOT_HEADER='<link rel="icon" type="image/x-icon" href="favicon.ico"><script type="module" src="https://cdn.jsdelivr.net/npm/@justinribeiro/lite-youtube@1/lite-youtube.min.js" defer></script>'
SUB_HEADER='<link rel="icon" type="image/x-icon" href="../favicon.ico"><script type="module" src="https://cdn.jsdelivr.net/npm/@justinribeiro/lite-youtube@1/lite-youtube.min.js" defer></script>'


echo "=== STEP 1: Compiling Markdown to Pure HTML via Pandoc ==="

if [ -f "README.md" ]; then
    pandoc -f markdown -t html5 --standalone --mathml --no-highlight -c github-markdown.css -H <(echo "$ROOT_HEADER") -M title="$PROJECT_TITLE - Előszó" README.md -o index.html
fi

if [ -f "NEWTON_MECHANIKAJA.md" ]; then
    pandoc -f markdown -t html5 --standalone --mathml --no-highlight -c github-markdown.css -H <(echo "$ROOT_HEADER") -M title="$PROJECT_TITLE - Tartalomjegyzék" NEWTON_MECHANIKAJA.md -o NEWTON_MECHANIKAJA.html
fi

if [ -d "Mechanika" ]; then
    cd Mechanika
    find . -maxdepth 1 -type f \( -iname "*.md" \) | while read -r lecke; do
        lecke_clean=$(basename "$lecke")
        basename="${lecke_clean%.*}"
        output_html="${basename}.html"
        
        pandoc "$lecke_clean" -f markdown -t html5 --standalone --mathml --no-highlight \
               --shift-heading-level-by=-1 \
               -c ../github-markdown.css \
               -H <(echo "$SUB_HEADER") \
               -o "$output_html"
    done
    cd ..
fi

echo ""
echo "=== STEP 2: Running Node.js Post-Processor (Fixing Layout & Injecting Facades) ==="

node -e '
const fs = require("fs");
const path = require("path");

function processFile(filePath) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, "utf8");
    let modified = false;

    if (content.includes("<body>")) { content = content.split("<body>").join("<body class=\"markdown-body\">"); modified = true; }
    if (content.includes(".md\"")) { content = content.split(".md\"").join(".html\""); modified = true; }
    if (content.includes(".MD\"")) { content = content.split(".MD\"").join(".html\""); modified = true; }

    let result = "";
    let i = 0;
    
    while (i < content.length) {
        // TŰPONTOS UKÁZ: Csak akkor kezeljük linkként, ha a <a után szóköz, kacsacsőr vagy újsor van!
        // Ez garantálja, hogy a MathML <annotation> tagjei 100%-ig érintetlenek maradnak.
        if (content.substring(i, i + 2).toLowerCase() === "<a") {
            let nextChar = content[i + 2];
            if (nextChar === " " || nextChar === ">" || nextChar === "\n" || nextChar === "\r" || nextChar === "\t") {
                
                let closeTagIndex = content.toLowerCase().indexOf("</a>", i);
                if (closeTagIndex !== -1) {
                    let fullAnchorTag = content.substring(i, closeTagIndex + 4);
                    let tagLower = fullAnchorTag.toLowerCase();
                    let hrefIndex = tagLower.indexOf("href=");
                    
                    if (hrefIndex !== -1) {
                        let startQuoteChar = fullAnchorTag[hrefIndex + 5];
                        let hrefValueEndIndex = fullAnchorTag.indexOf(startQuoteChar, hrefIndex + 6);
                        
                        if (hrefValueEndIndex !== -1) {
                            let hrefValue = fullAnchorTag.substring(hrefIndex + 6, hrefValueEndIndex);
                            
                            if (tagLower.includes("youtube") || tagLower.includes("youtu.be")) {
                                let videoId = "";
                                
                                if (hrefValue.includes("v=")) {
                                    let idx = hrefValue.indexOf("v=");
                                    videoId = hrefValue.substring(idx + 2, idx + 13);
                                } else if (hrefValue.includes("shorts/")) {
                                    let idx = hrefValue.indexOf("shorts/");
                                    videoId = hrefValue.substring(idx + 7, idx + 18);
                                } else if (hrefValue.includes("youtu.be/")) {
                                    let idx = hrefValue.indexOf("youtu.be/");
                                    videoId = hrefValue.substring(idx + 9, idx + 20);
                                }

                                if (videoId && videoId.length === 11) {
                                    result += `<lite-youtube videoid="${videoId}"></lite-youtube>`;
                                    i = closeTagIndex + 4;
                                    modified = true;
                                    continue;
                                }
                            }
                        }
                    }
                }
            }
        }
        result += content[i];
        i++;
    }

    if (modified) {
        fs.writeFileSync(filePath, result, "utf8");
    }
}

processFile("index.html");
processFile("NEWTON_MECHANIKAJA.html");

const subDir = "Mechanika";
if (fs.existsSync(subDir)) {
    fs.readdirSync(subDir).forEach(file => {
        if (file.endsWith(".html")) processFile(path.join(subDir, file));
    });
}
'

echo "=== SUCCESS! Standalone build complete with memory-piped header strings. ==="
