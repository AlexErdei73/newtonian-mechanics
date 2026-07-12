const fs = require("fs");
const path = require("path");

// ==========================================================================
// 1. ADAT-VEZÉRELT PROJEKT MÁTRIX: 10 TÉMAKÖR ÉS AZ INDULÓ LECKÉK SZÁMA
// Bármikor átírhatod a 'startLesson' számokat, a teljes portál magától igazodik!
// ==========================================================================
const COURSE_TOPICS = [
    { name: "Kinematika",               startLesson: 1  },
    { name: "Dinamika",                 startLesson: 13 },
    { name: "Energia",                  startLesson: 22 },
    { name: "Impulzus, Ütközések",      startLesson: 26 },
    { name: "Pontrendszerek",           startLesson: 31 },
    { name: "Körmozgás",                startLesson: 36 },
    { name: "Gravitáció",               startLesson: 40 },
    { name: "Impulzus momentum",        startLesson: 47 },
    { name: "Rezgések, hullámok",       startLesson: 54 },
    { name: "Folyadék mechanika",       startLesson: 69 }
];

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

function buildLectureOrder() {
    const order = [];
    const tocPath = path.join(__dirname, "NEWTON_MECHANIKAJA.md");
    
    if (!fs.existsSync(tocPath)) {
        console.log("⚠️ Figyelem: NEWTON_MECHANIKAJA.md nem található az abszolút útvonalon!");
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

// ==========================================================================
// CUSTOM LESSON TITLE EXTRACTOR ENGINE
// Dynamically parses the rendered H1 string token to populate browser meta headers
// ==========================================================================
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

const LECTURE_ORDER = buildLectureOrder();
console.log(`🚀 Rendszer-automatizálás: ${LECTURE_ORDER.length} lecke sikeresen beolvasva a tartalomjegyzékből.`);
// ==========================================================================
// 2. DINAMIKUS NAVBAR GENERÁLÁS (A MÁTRIX TÖMB ALAPJÁN)
// ==========================================================================
function generateNavbar(filename, isSubfolder) {
    const pfx = isSubfolder ? "../" : "";
    const curFolder = isSubfolder ? "" : "Mechanika/";
    
    let prevLink = pfx + "NEWTON_MECHANIKAJA.html";
    let nextLink = pfx + "NEWTON_MECHANIKAJA.html";
    
    if (LECTURE_ORDER.length > 0) {
        nextLink = pfx + "Mechanika/" + LECTURE_ORDER[0] + ".html";
    }

    let currentBasename = filename.replace(".html", "").replace(".md", "");
    let currentIndex = LECTURE_ORDER.indexOf(currentBasename);

    if (currentIndex !== -1) {
        if (currentIndex > 0) {
            prevLink = LECTURE_ORDER[currentIndex - 1] + ".html";
        } else {
            prevLink = "../NEWTON_MECHANIKAJA.html";
        }

        if (currentIndex < LECTURE_ORDER.length - 1) {
            nextLink = LECTURE_ORDER[currentIndex + 1] + ".html";
        } else {
            nextLink = "../NEWTON_MECHANIKAJA.html";
        }
    }

    // AUTOMATIKUS DROPDOWN MENÜ GENERÁLÁSA A KORÁBBI TÖMBBŐL
    let dropdownMenuItemsMarkup = "";
    COURSE_TOPICS.forEach((topic) => {
        const targetIndex = topic.startLesson - 1; 
        let finalRoute = "#";
        
        if (LECTURE_ORDER.length > targetIndex) {
            finalRoute = curFolder + LECTURE_ORDER[targetIndex] + ".html";
        } else {
            finalRoute = pfx + "NEWTON_MECHANIKAJA.html";
        }
        
        dropdownMenuItemsMarkup += "<li><a href=\"" + finalRoute + "\">" + topic.name + "</a></li>";
    });

    return "<header class=\"global-header\">" +
        "<nav class=\"global-navbar\">" +
            "<a href=\"" + pfx + "index.html\" class=\"navbar-brand navbar-brand-desktop\">Newton Mechanikája</a>" +
            // KÖZÉP: A nyilak és a menüjel kívülre kerültek a span elé/mögé!
            "<div class=\"nav-group-center\">" +
                "<a href=\"" + prevLink + "\" class=\"nav-btn\" aria-label=\"Előző lecke\">◀<span class=\"btn-text\"> Előző</span></a>" +
                "<a href=\"" + pfx + "NEWTON_MECHANIKAJA.html\" class=\"nav-btn\" aria-label=\"Tartalomjegyzék\">☰<span class=\"btn-text\"> Tartalom</span></a>" +
                "<a href=\"" + nextLink + "\" class=\"nav-btn\" aria-label=\"Következő lecke\"><span class=\"btn-text\">Következő </span>▶</a>" +
            "</div>" +
            
            // JOBB OLDAL: Hamburger és a listás menüpontok (1 SOROS AUTOMATIKUS LEÚSZTATÓVAL!)
            "<input type=\"checkbox\" id=\"menu-toggle\" class=\"menu-checkbox\" />" +
            "<label for=\"menu-toggle\" class=\"hamburger-icon\" onclick=\"setTimeout(() => { let nl = document.querySelector('.nav-links'); if(document.getElementById('menu-toggle').checked && nl) { nl.scrollTo({top: nl.scrollHeight, behavior: 'smooth'}); } }, 150);\">" +
                "<span></span><span></span><span></span>" +
            "</label>" +

            "<div class=\"nav-links\">" +
                "<a href=\"" + pfx + "index.html\" class=\"navbar-brand navbar-brand-mobile\">Newton Mechanikája</a>" +
                "<div class=\"nav-group-left\">" +
                    "<a href=\"" + pfx + "index.html\">Névjegy</a>" +
                    "<a href=\"" + pfx + "VEGEREDMENYEK.html\" style=\"font-weight: 600;\">Megoldások</a>" +
                "</div>" +
                "<div class=\"nav-group-right\">" +
                    "<div class=\"dropdown\">" +
                        "<a href=\"#\" class=\"dropdown-trigger\" onclick=\"return false;\">Témakörök ▼</a>" +
                        "<ul class=\"dropdown-menu\">" +
                            dropdownMenuItemsMarkup +
                        "</ul>" +
                    "</div>" +
                "</div>" +
            "</div>" +

        "</nav>" +
    "</header>";
}

// ==========================================================================
// 3. FÁJLOK BEJÁRÁSA ÉS HTML UTÓFELDOLGOZÓ FŐMOTOR
// ==========================================================================
function processFile(filePath, isSubfolder = false) {
    if (!fs.existsSync(filePath)) return;
    let filename = path.basename(filePath);
    let content = fs.readFileSync(filePath, "utf8");

    if (content.includes("<body>") && !content.includes("class=\"global-header\"")) {
        const navbarMarkup = generateNavbar(filename, isSubfolder);
        content = content.split("<body>").join("<body>" + navbarMarkup);
    }

    if (content.includes(".md\"")) { content = content.split(".md\"").join(".html\""); }
    if (content.includes(".MD\"")) { content = content.split(".MD\"").join(".html\""); }

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
                                        let startAttr = startSeconds ? ` videoStartAt=${startSeconds}` : "";
                                        let isShorts = hrefStringValue.toLowerCase().includes("shorts");
                                        let shortAttr = isShorts ? " short" : "";
                                        
                                        result += `<lite-youtube videoid="${videoId}"${startAttr}${shortAttr}></lite-youtube>`;
                                        i = closeTagIndex + 4;
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

    // DYNAMIC TITLE AUTOMATION
    // Safely reads the custom H1 header and stamps it into the blank browser tab title
    let title = getTitle(content);
    if (title && content.includes("<title></title>")) {
        content = content.split("<title>").join(`<title>${title}`);
    }

    // BULLETPROOF FIX: We bypass the modified flag, we have removed, completely!
    // The 'result' variable holds the fully transformed HTML (Navbar + Youtube elements).
    // Writing this unconditionally ensures Pandoc's raw links are ALWAYS overwritten.
    fs.writeFileSync(filePath, result, "utf8");
}

processFile("index.html", false);
processFile("NEWTON_MECHANIKAJA.html", false);

const subDir = "Mechanika";
if (fs.existsSync(subDir)) {
    fs.readdirSync(subDir).forEach(file => {
        if (file.endsWith(".html")) processFile(path.join(subDir, file), true);
    });
}
console.log("=== Dynamic Browser Title Integration Complete! ===");