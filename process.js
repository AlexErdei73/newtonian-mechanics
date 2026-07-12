const fs = require("fs");
const path = require("path");

function extractStartTime(url) {
    let tIdx = url.indexOf("t=");
    if (tIdx === -1) return "";
    let rawTime = url.substring(tIdx + 2);
    let endIdx = rawTime.indexOf("&");
    if (endIdx !== -1) rawTime = rawTime.substring(0, endIdx);
    endIdx = rawTime.indexOf('"');
    if (endIdx !== -1) rawTime = rawTime.substring(0, endIdx);
    endIdx = rawTime.indexOf("'");
    if (endIdx !== -1) rawTime = rawTime.substring(0, endIdx);
    
    let cleanSec = rawTime.replace("amp;", "").replace("s", "").trim();
    if (cleanSec.includes("m")) {
        let parts = cleanSec.split("m");
        let minutes = parseInt(parts, 10) || 0;
        let seconds = parseInt(parts, 10) || 0;
        return (minutes * 60 + seconds).toString();
    }
    if (cleanSec && !isNaN(cleanSec)) return cleanSec;
    return "";
}

// ==========================================================================
// FIX: GOLYÓÁLLÓ TARTALOMJEGYZÉK BEOLVASÓ MOTOR (ABSZOLÚT ÚTVONALLAL)
// ==========================================================================
function buildLectureOrder() {
    const order = [];
    
    // A __dirname segítségével kényszerítjük, hogy mindig a process.js melletti gyökérmappában keresse a fájlt!
    const tocPath = path.join(__dirname, "NEWTON_MECHANIKAJA.md");
    
    if (!fs.existsSync(tocPath)) {
        console.log("⚠️ Figyelem: NEWTON_MECHANIKAJA.md nem található az abszolút útvonalon: " + tocPath);
        return order;
    }
    
    let tocContent = fs.readFileSync(tocPath, "utf8");
    let i = 0;
    
    while (i < tocContent.length) {
        let idx = tocContent.toLowerCase().indexOf("mechanika/", i);
        if (idx === -1) break;
        
        let remainder = tocContent.substring(idx + 10);
        let endIdx = remainder.search(/[\.\)\"\s\']/);
        
        if (endIdx !== -1) {
            let cleanName = remainder.substring(0, endIdx).trim();
            
            if (cleanName && !order.includes(cleanName) && cleanName !== "html" && cleanName !== "md") {
                order.push(cleanName);
            }
            i = idx + 10 + endIdx;
        } else {
            i = idx + 10;
        }
    }
    return order;
}


// Legeneráljuk a globális dinamikus tömböt a futás elején
const LECTURE_ORDER = buildLectureOrder();
console.log(`🚀 Sikeresen beolvasva ${LECTURE_ORDER.length} lecke a tartalomjegyzékből!`);

// TÖMB-ALAPÚ DINAMIKUS ÚTVONALKERESŐ MOTOR
function generateNavbar(filename, isSubfolder) {
    const pfx = isSubfolder ? "../" : "";
    const curFolder = isSubfolder ? "" : "Mechanika/";
    
    let prevLink = pfx + "NEWTON_MECHANIKAJA.html";
    let nextLink = pfx + "NEWTON_MECHANIKAJA.html";
    
    // Ha van beolvasott leckénk, a Tartalomjegyzékből a Következő gomb az 1. leckére visz
    if (LECTURE_ORDER.length > 0) {
        nextLink = pfx + "Mechanika/" + LECTURE_ORDER[0] + ".html";
    }

    let currentBasename = filename.replace(".html", "");
    let currentIndex = LECTURE_ORDER.indexOf(currentBasename);

    if (currentIndex !== -1) {
        // ELŐZŐ LECKE
        if (currentIndex > 0) {
            prevLink = LECTURE_ORDER[currentIndex - 1] + ".html";
        } else {
            prevLink = "../NEWTON_MECHANIKAJA.html";
        }

        // KÖVETKEZŐ LECKE
        if (currentIndex < LECTURE_ORDER.length - 1) {
            nextLink = LECTURE_ORDER[currentIndex + 1] + ".html";
        } else {
            nextLink = "../NEWTON_MECHANIKAJA.html";
        }
    }

        // 1. FIXED ÚTVONALAK: Kivettük a pfx-et, így a leckékből helyben (Mechanika/ mappán belül) vált, 
    // a főoldalról pedig gyönyörűen belép a mappába a curFolder segítségével!
    const kinLink = LECTURE_ORDER.length > 0 ? curFolder + LECTURE_ORDER[0] + ".html" : "NEWTON_MECHANIKAJA.html";
    const dinLink = LECTURE_ORDER.length > 19 ? curFolder + LECTURE_ORDER[19] + ".html" : "NEWTON_MECHANIKAJA.html";
    const megLink = LECTURE_ORDER.length > 49 ? curFolder + LECTURE_ORDER[49] + ".html" : "NEWTON_MECHANIKAJA.html";

    return "<header class=\"global-header\">" +
        "<nav class=\"global-navbar\">" +
            // ASZTALI LOGO: Marad a helyén, de kap egy "desktop" osztályt, hogy mobilon elrejthessük
            "<a href=\"" + pfx + "index.html\" class=\"navbar-brand navbar-brand-desktop\">Newton Mechanikája</a>" +
            
            // KÖZÉPSŐ LÉPTETŐ GOMBOK: Fixen és tisztán középen maradnak
            "<div class=\"nav-group-center\">" +
                "<a href=\"" + prevLink + "\" class=\"nav-btn\" aria-label=\"Előző lecke\">" +
                    "◀<span class=\"btn-text\"> Előző</span>" +
                "</a>" +
                "<a href=\"" + pfx + "NEWTON_MECHANIKAJA.html\" class=\"nav-btn\" aria-label=\"Tartalomjegyzék\">" +
                    "☰<span class=\"btn-text\"> Tartalom</span>" +
                "</a>" +
                "<a href=\"" + nextLink + "\" class=\"nav-btn\" aria-label=\"Következő lecke\">" +
                    "<span class=\"btn-text\">Következő </span>▶" +
                "</a>" +
            "</div>" +
            
            // CSS HAMBURGER KAPCSOLÓK
            "<input type=\"checkbox\" id=\"menu-toggle\" class=\"menu-checkbox\" />" +
            "<label for=\"menu-toggle\" class=\"hamburger-icon\">" +
                "<span></span><span></span><span></span>" +
            "</label>" +
            
            // A KÖZÖS NAVIGÁCIÓS PANEL
            "<div class=\"nav-links\">" +
                // ÚJ MOBIL LOGO: Csak a leúszó panel tetején fog megjelenni mobilon!
                "<a href=\"" + pfx + "index.html\" class=\"navbar-brand navbar-brand-mobile\">Newton Mechanikája</a>" +
                
                // Bal oldali menüpontok
                "<div class=\"nav-group-left\">" +
                    "<a href=\"" + pfx + "index.html\">Névjegy</a>" +
                    "<a href=\"" + pfx + "VEGEREDMENYEK.html\" style=\"font-weight: 600;\">Megoldások</a>" +
                "</div>" +
                // Jobb oldali menüpontok
                "<div class=\"nav-group-right\">" +
                    "<div class=\"dropdown\">" +
                        "<a href=\"#\" class=\"dropdown-trigger\" onclick=\"return false;\">" +
                            "Témakörök <span style=\"font-size: 10px;\">▼</span>" +
                        "</a>" +
                        "<ul class=\"dropdown-menu\">" +
                            "<li><a href=\"" + kinLink + "\">Kinematika</a></li>" +
                            "<li><a href=\"" + dinLink + "\">Dinamika</a></li>" +
                            "<li><a href=\"" + megLink + "\">Megmaradási Törvények</a></li>" +
                        "</ul>" +
                    "</div>" +
                "</div>" +
            "</div>" +
        "</nav>" +
    "</header>";
}

function getTitle(content) {
    const h1Start = content.indexOf("<h1");
    let h1End = content.indexOf("</h1>");
    let title = "";
    if (h1End !== -1 && h1Start !== -1) {
        const titleStart = content.indexOf(">", h1Start) + 1;
        const titleEnd = h1End;
        if (titleStart !== 0 && titleStart < titleEnd) {
            title = content.substring(titleStart, titleEnd);
        }
    }
    return title;
}

function processFile(filePath, isSubfolder = false) {
    if (!fs.existsSync(filePath)) return;
    let filename = path.basename(filePath);
    let content = fs.readFileSync(filePath, "utf8");
    let modified = false;

    if (content.includes("<body>") && !content.includes("class=\"global-header\"")) {
        const navbarMarkup = generateNavbar(filename, isSubfolder);
        content = content.split("<body>").join("<body>" + navbarMarkup);
        modified = true;
    }

    let title = getTitle(content);
    if (title && content.includes("<title></title>")) {
        content = content.split("<title>").join(`<title>${title}`);
        modified = true;
    } 

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
                    
                    if (tagLower.includes("class=\"global-header\"") || tagLower.includes("class=\"global-navbar\"") || tagLower.includes("class=\"nav-btn\"") || tagLower.includes("class=\"navbar-brand\"")) {
                        // Nem bántjuk a menüt
                    } else {
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
                                        let startAttr = startSeconds ? ` videoStartAt="${startSeconds}"` : "";
                                        let isShorts = hrefStringValue.toLowerCase().includes("shorts");
                                        let shortAttr = isShorts ? " short" : "";
                                        
                                        result += `<lite-youtube videoid="${videoId}"${startAttr}${shortAttr}></lite-youtube>`;
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
        }
        result += content[i];
        i++;
    }

    if (modified) {
        fs.writeFileSync(filePath, result, "utf8");
    }
}

processFile("index.html", false);
processFile("NEWTON_MECHANIKAJA.html", false);

const subDir = "Mechanika";
if (fs.existsSync(subDir)) {
    fs.readdirSync(subDir).forEach(file => {
        if (file.endsWith(".html")) processFile(path.join(subDir, file), true);
    });
}
console.log("=== Szuper-automatizált HTML utófeldolgozás kész! ===");
