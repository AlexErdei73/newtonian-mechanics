const fs = require("fs");
const path = require("path");

// ==========================================================================
// ENVIRONMENT DECODER & STATE MANAGEMENT
// Resolves runtime execution arguments directly from the build pipeline flags
// ==========================================================================
const args = process.argv.slice(2);
let currentLang = "hu"; // Fallback operational language track

args.forEach(arg => {
    if (arg.startsWith("--lang=")) {
        currentLang = arg.split("=")[1];
    }
});

// ==========================================================================
// 1. DATA-DRIVEN INTERACTIVE COURSE TOPICS MATRIX
// Language-mapped object keys handle automatic menu compilation on both tracks
// ==========================================================================
const COURSE_TOPICS = [
    { startLesson: 1,  hu: "Kinematika",               en: "Kinematics" },
    { startLesson: 13, hu: "Dinamika",                 en: "Dynamics" },
    { startLesson: 22, hu: "Energia",                  en: "Energy" },
    { startLesson: 26, hu: "Impulzus, Ütközések",      en: "Momentum & Collisions" },
    { startLesson: 31, hu: "Pontrendszerek",           en: "Systems of Particles" },
    { startLesson: 36, hu: "Körmozgás",                en: "Circular Motion" },
    { startLesson: 40, hu: "Gravitáció",               en: "Gravitation" },
    { startLesson: 47, hu: "Impulzus momentum",        en: "Rotational Dynamics" },
    { startLesson: 54, hu: "Rezgések, hullámok",       en: "Oscillations & Waves" },
    { startLesson: 69, hu: "Folyadék mechanika",       en: "Fluid Mechanics" }
];

// DUAL-LANGUAGE LOCALIZATION ATLASFOR NAVBAR GRAPHICS
const UI_MAP = {
    hu: {
        brand: "Newton Mechanikája",
        prev: " Előző",
        content: " Tartalom",
        next: "Következő ",
        about: "Névjegy",
        solutions: "Megoldások",
        literature: "Irodalom",
        topicsTrigger: "Témakörök ▼",
        ariaPrev: "Előző lecke",
        ariaToc: "Tartalomjegyzék",
        ariaNext: "Következő lecke"
    },
    en: {
        brand: "Newtonian Mechanics",
        prev: " Prev",
        content: " Contents",
        next: "Next ",
        about: "About",
        solutions: "Solutions",
        literature: "Bibliography",
        topicsTrigger: "Topics ▼",
        ariaPrev: "Previous lesson",
        ariaToc: "Table of Contents",
        ariaNext: "Next lesson"
    }
};

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
        let minutes = parseInt(parts[0], 10) || 0;
        let seconds = parseInt(parts[1], 10) || 0;
        return (minutes * 60 + seconds).toString();
    }
    if (cleanSec && !isNaN(cleanSec)) return cleanSec;
    return "";
}

function buildLectureOrder() {
    const order = [];
    // Dynamic context detection tracks target localized filesystem trees flawlessly
    const targetFile = currentLang === "en" ? path.join("en", "NEWTON_MECHANIKAJA.md") : "NEWTON_MECHANIKAJA.md";
    const tocPath = path.join(__dirname, targetFile);
    
    if (!fs.existsSync(tocPath)) {
        console.log(`⚠️ Figyelem: A(z) ${targetFile} nem található az abszolút útvonalon!`);
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

function getAnchor(title) {
    if (!title) return "";
    let anchor = title.toLowerCase();
    anchor = anchor
                .split("*").join("")
                .split(",").join("")
                .trim()
                .split(" ").join("-");
    anchor = `#${anchor}`;
    return anchor;
}

const LECTURE_ORDER = buildLectureOrder();
console.log(`🚀 Rendszer-automatizálás [${currentLang.toUpperCase()}]: ${LECTURE_ORDER.length} lecke sikeresen beolvasva.`);

// ==========================================================================
// 2. DINAMIKUS NAVBAR GENERÁLÁS (A MÁTRIX TÖMB ALAPJÁN)
// ==========================================================================
function generateNavbar(filename, isSubfolder, fileTitle) {
    const ui = UI_MAP[currentLang];
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

    // Dynamic solution anchor locks directly onto your localized scroll execution paths
    let solutionsAnchor = "";
    if (isSubfolder && fileTitle) {
        solutionsAnchor = getAnchor(fileTitle);
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
        
        const topicLabel = currentLang === "en" ? topic.en : topic.hu;
        dropdownMenuItemsMarkup += "<li><a href=\"" + finalRoute + "\">" + topicLabel + "</a></li>";
    });

    return "<header class=\"global-header\">" +
        "<nav class=\"global-navbar\">" +
            "<a href=\"" + pfx + "index.html\" class=\"navbar-brand navbar-brand-desktop\">" + ui.brand + "</a>" +
            "<div class=\"nav-group-center\">" +
                "<a href=\"" + prevLink + "\" class=\"nav-btn\" aria-label=\"" + ui.ariaPrev + "\">◀<span class=\"btn-text\">" + ui.prev + "</span></a>" +
                "<a href=\"" + pfx + "NEWTON_MECHANIKAJA.html\" class=\"nav-btn\" aria-label=\"" + ui.ariaToc + "\">☰<span class=\"btn-text\">" + ui.content + "</span></a>" +
                "<a href=\"" + nextLink + "\" class=\"nav-btn\" aria-label=\"" + ui.ariaNext + "\"><span class=\"btn-text\">" + ui.next + "</span>▶</a>" +
            "</div>" +
            
            "<input type=\"checkbox\" id=\"menu-toggle\" class=\"menu-checkbox\" />" +
            "<label for=\"menu-toggle\" class=\"hamburger-icon\" onclick=\"setTimeout(() => { let nl = document.querySelector('.nav-links'); if(document.getElementById('menu-toggle').checked && nl) { nl.scrollTo({top: nl.scrollHeight, behavior: 'smooth'}); } }, 150);\">" +
                "<span></span><span></span><span></span>" +
            "</label>" +

            "<div class=\"nav-links\">" +
                "<a href=\"" + pfx + "index.html\" class=\"navbar-brand navbar-brand-mobile\">" + ui.brand + "</a>" +
                "<div class=\"nav-group-left\">" +
                    "<a href=\"" + pfx + "index.html\">" + ui.about + "</a>" +
                    "<a href=\"" + pfx + "IRODALOMJEGYZEK.html\">" + ui.literature + "</a>" +
                "</div>" +
                "<div class=\"nav-group-right\">" +
                    "<a href=\"" + pfx + "VEGEREDMENYEK.html" + solutionsAnchor + "\" style=\"font-weight: 600;\">" + ui.solutions + "</a>" +
                    "<div class=\"dropdown\">" +
                        "<a href=\"#\" class=\"dropdown-trigger\" onclick=\"return false;\">" + ui.topicsTrigger + "</a>" +
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

    // Dynamic lesson title parser safely extracts the pristine text for nav mappings
    let fileTitle = getTitle(content);

    if (content.includes("<body>") && !content.includes("class=\"global-header\"")) {
        // We explicitly pass the extracted title token into the custom menu engine
        const navbarMarkup = generateNavbar(filename, isSubfolder, fileTitle);
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
    let title = getTitle(result);
    if (title && result.includes("<title></title>")) {
        result = result.split("<title>").join(`<title>${title}`);
    }

    /*let anchor = getAnchor(title);
    if (anchor && result.includes(`<a href="../VEGEREDMENYEK.html`)) {
        result = result.split(`<a href="../VEGEREDMENYEK.html`).join(`<a href="../VEGEREDMENYEK.html${anchor}`);
    }*/

    fs.writeFileSync(filePath, result, "utf8");
}

// ==========================================================================
// 4. ENVIRONMENT-DRIVEN RUNTIME INITIALIZATION
// Safely maps processing directory targets based on pipeline argument states
// ==========================================================================
if (currentLang === "en") {
    console.log("Processing and embedding English navigation frameworks...");
    processFile(path.join("en", "index.html"), false);
    processFile(path.join("en", "NEWTON_MECHANIKAJA.html"), false);
    processFile(path.join("en", "VEGEREDMENYEK.html"), false);
    processFile(path.join("en", "IRODALOMJEGYZEK.html"), false);

    const subDirEn = path.join("en", "Mechanika");
    if (fs.existsSync(subDirEn)) {
        fs.readdirSync(subDirEn).forEach(file => {
            if (file.endsWith(".html")) processFile(path.join(subDirEn, file), true);
        });
    }
} else {
    console.log("Processing and embedding Hungarian navigation frameworks...");
    processFile("index.html", false);
    processFile("NEWTON_MECHANIKAJA.html", false);
    processFile("VEGEREDMENYEK.html", false);
    processFile("IRODALOMJEGYZEK.html", false);

    const subDirHu = "Mechanika";
    if (fs.existsSync(subDirHu)) {
        fs.readdirSync(subDirHu).forEach(file => {
            if (file.endsWith(".html")) processFile(path.join(subDirHu, file), true);
        });
    }
}

console.log(`=== Dynamic Browser Title Integration Complete! [${currentLang.toUpperCase()}] ===`);
