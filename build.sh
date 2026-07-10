#!/bin/bash

PROJECT_TITLE="Newton Mechanikája"

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

function extractStartTime(url) {
    // Megkeressük a t= kezdetét
    let tIdx = url.indexOf("t=");
    if (tIdx === -1) return "";
    
    let rawTime = url.substring(tIdx + 2);
    let endIdx = rawTime.indexOf("&");
    if (endIdx !== -1) rawTime = rawTime.substring(0, endIdx);
    endIdx = rawTime.indexOf("\"");
    if (endIdx !== -1) rawTime = rawTime.substring(0, endIdx);
    endIdx = rawTime.indexOf("\x27");
    if (endIdx !== -1) rawTime = rawTime.substring(0, endIdx);
    
    // KIPURCANTJUK A PANDOC ÁLTAL BEILLESZTETT HORDALÉKOKAT (pl. amp; vagy s betű)
    let cleanSec = rawTime.replace("amp;", "").replace("s", "").trim();
    
    // Kezeljük, ha percben van megadva (pl. 3m15s vagy 3m15)
    if (cleanSec.includes("m")) {
        let parts = cleanSec.split("m");
        let minutes = parseInt(parts[0], 10) || 0;
        let seconds = parseInt(parts[1], 10) || 0;
        return (minutes * 60 + seconds).toString();
    }
    
    if (cleanSec && !isNaN(cleanSec)) {
        return cleanSec;
    }
    return "";
}

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
                            let hrefStringValue = fullAnchorTag.substring(hrefIndex + 6, hrefValueEndIndex);
                            
                            if (tagLower.includes("youtube") || tagLower.includes("youtu.be")) {
                                let videoId = "";
                                
                                if (hrefStringValue.includes("v=")) {
                                    let idx = hrefStringValue.indexOf("v=");
                                    videoId = hrefStringValue.substring(idx + 2, idx + 13);
                                } else if (hrefStringValue.includes("shorts/")) {
                                    let idx = hrefStringValue.indexOf("shorts/");
                                    videoId = hrefStringValue.substring(idx + 7, idx + 18);
                                } else if (hrefStringValue.includes("youtu.be/")) {
                                    let idx = hrefStringValue.indexOf("youtu.be/");
                                    videoId = hrefStringValue.substring(idx + 9, idx + 20);
                                }

                                if (videoId && videoId.length === 11) {
                                    let startSeconds = extractStartTime(hrefStringValue);
                                    // A lite-youtube hivatalos, belső start paramétere: video-start="MASODPERC"
                                    let startAttr = startSeconds ? ` videoStartAt="${startSeconds}"` : "";
                                    
                                    result += `<lite-youtube videoid="${videoId}"${startAttr}></lite-youtube>`;
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

echo "=== SUCCESS! Standalone build complete with fixed native video-start parameters. ==="
