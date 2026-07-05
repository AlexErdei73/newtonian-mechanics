# A kifejlett turbulencia és az energiakaszkád

## A turbulencia tulajdonságai

Láttuk a korábbiakból, hogy a csőbeli áramlás csak kis Reynolds-szám esetén lesz lamináris, stacionárius, örvénymentes áramlás. Ez ugyanúgy érvényes a gömb körüli áramlásra is, amelyből Stokes kapta a törvényét a közegellenállási erőre igen kis Reynolds-szám esetére. Láttuk már azt is, hogy egy végtelen hosszú henger körüli síkbeli áramlás hogyan válik örvényessé, majd hogyan alakul ki a Kármán-féle örvénysor magasabb Reynolds-számok esetén. 

Ez a folyamat elvezet magas Reynolds-számok esetén egy erősen kaotikus áramláshoz, amelyet turbulens áramlásként emlegetünk. Ez persze tiszta síkbeli áramlásoknál már nem alakulhat ki, mert a turbulencia kialakulása csak három dimenzióban lehetséges. Most meg fogjuk vizsgálni, hogy miért is van ez így. A mindennapi életben – mint látni fogjuk – szinte minden esetben a turbulens áramlásokkal találkozhatunk, amennyiben kilépünk a laboratóriumból, vagy eltekintünk az eddig vizsgált egyszerűbb esetektől.

### Kísérletek

[A turbulens áramlás tulajdonságai (YouTube videó)](https://www.youtube.com/watch?v=5zI9sG3pjVU)

Ez a videó sok minden érdekességet mutat a turbulens áramlásokkal kapcsolatban: beszél a határrétegről, a tapadási feltételről, olyan példákról, ahol a turbulencia a gyakorlatban is hasznos, és persze magáról a jelenségről és a kialakulásáról is. Nézzük meg a turbulencia fő jellemzőit:

*   **Térbeli jelenség:** Csak 3D-ben képes működni.
*   **Magas Reynolds-számoknál lép fel:** Amikor a tehetetlenségi erők dominálnak a viszkózus erők felett.
*   **Örvényes áramlásról van szó:** Az áramlási tér tele van forgó struktúrákkal.
*   **Kiszámíthatatlan, kaotikus:** A sebesség egy pontban egy adott érték körül vadul ingadozik, fluktuál.
*   **Keveredéssel jár:** Az áramvonalak összekuszálódnak, összekeverednek, nyilvánvalóan nem megfordítható módon.
*   **Fenntartásához energia szükséges:** Az energia a folyadék belső energiájává (hővé) alakul, általában erőteljesebben, mint a lamináris áramlás esetén.

Láttuk továbbá, hogy bár a turbulencia általában növeli a közegellenállást és a csövekben a hidrodinamikai ellenállást, néhány esetben kifejezetten kedvező is lehet. 

#### Miért rücskös a golflabda?
A golflabda rücskös felülete szándékosan alakít ki egy vékony, turbulens határréteget a labda körül. Ez két ellentétes fizikai hatással jár:
1. **Negatív hatás:** Kissé megnöveli a közvetlen felületi súrlódást.
2. **Pozitív hatás:** A turbulens áramlás jobban rátapad a felületre, így a levegő messzebb tudja körüláramolni a gömböt.

Ennek következménye, hogy a labda mögött kialakuló vákuum (nyomási ellenállás) drasztikusan lecsökken, a teljes közegellenállás pedig jelentősen kisebb lesz ugyanolyan körülmények között a sima labdához képest.

---

## Az energiakaszkád

Már a videó arról is beszélt, hogy először nagy örvények alakulnak ki a magas Reynolds-szám esetén, majd ezek az örvények kisebb örvényekre esnek szét, ahogy összehúzódnak és gyorsabban kezdenek pörögni. Majd ezek a kisebb örvények még inkább összehúzódnak és még kisebb örvényekre esnek szét, majd ez a folyamat egészen addig tart, amíg el nem érünk egy olyan magas sebességhez és kis mérethez, hogy a súrlódás képes lesz felemészteni és a folyadék belső energiájává alakítani az örvények energiáját. 

Ez a folyamat az úgynevezett **energiakaszkád** (energia-vízesés). A nagy örvényekbe betápláljuk a mechanikai energiát, de aztán ez az energia átadódik a kisebb örvényeknek. Ezen a szinten az energia megmarad, mert a súrlódás nem jut szerephez. 

A folyamat csak három dimenzióban tud végbemenni, mivel lényeges az örvényszálak megnyúlása és felpörgése (*vortex stretching*). 

> **A jégkorcsolyázó-analógia:** Képzeljünk el egy pörgő műkorcsolyázót. Amikor a karjait behúzza a forgástengelye felé (vagyis a forgástengely mentén megnyúlik), a perdületmegmaradás miatt hirtelen felgyorsul a pörgése. A turbulens áramlásban a nagy örvények pontosan így, a harmadik dimenzió irányában nyújtják meg a kisebb örvényeket, amik ettől gyorsabban kezdenek forogni, miközben a méretük lecsökken. Ez a folyamat síkbeli (2D) áramlásoknál a tömegmegmaradás miatt fizikai képtelenség.

Ez a lépcsőzetes folyamat tehát a betáplált energiát egyre kisebb és kisebb örvényekbe viszi át, amíg a végén a súrlódás felemészti a betáplált mechanikai energiát. Nézzünk is meg erről egy videót.

### Kísérletek

[Az energiakaszkád, avagy törvényszerűség a káoszban (YouTube videó)](https://www.youtube.com/watch?v=_UoTTq651dE)

Ez a videó is elmagyarázza a turbulencia tulajdonságait, de sokkal részletesebben beszél az energiakaszkádról is. Ezután megemlít egy fontos matematikai törvényt is.

>**A különböző méretű örvényekben tárolt energia, egységnyi tömegű folyadékra vonatkoztatva arányos az örvények $D$ átmérőjének $5/3$-os hatványával a turbulens áramlás esetén.**

Ez egy igen érdekes összefüggés, amelyet a kísérletek az energiakaszkád közepes mérettartományára nagy pontossággal igazoltak eredeti formájában. A videó azt is említi, hogy ez a megállapítás Kolmogorov orosz matematikustól származik, aki felismerte az energiakaszkád működését, és néhány egyszerű feltételezésből jutott el a törvényszerűség felismeréséig. Ő ugye a valószínűségszámításban és a statisztikában elért eredményeiről ismert a legjobban. 

Rájött, hogy az alapegyenletek megoldása egy ilyen összetett esetben reménytelen, hiszen matematikailag még az sem bizonyított, hogy jól viselkedő megoldások – amelyek nem válnak végtelenné egyes pontokban – egyáltalán léteznek-e. Tehát statisztikus feltételezéseket és egyszerű dimenzióanalízist végzett, úgy jutott a megállapításokhoz. Gondolatmenete igen érdekes, ezért megpróbáljuk elmagyarázni a következő leckében az érdeklődőknek!

> **Figyelmeztetés!** A videó készítői nem teljesen követték Kolmogorov eredeti gondolatmenetét. Az egyszerűsítés során egy matematikai hiba folytán a videó kiemelt állítása pontatlan lett. A hiba a hatványkitevőt érinti: mind az előjele, mind a nagysága rossz a megadott geometriai méretre. A videóban szereplő $E(D)$ mennyiségre a valóságos térbeli méret szerint a helyes kitevő valójában -1/3, tehát a videó állítása helyesen:
>
> $$E(D) \propto D^{-\frac{1}{3}}$$

Erről, a számítógépes áramlástani szimulációkról és a dimenzióanalízis varázslatos erejéről a következő, haladó szintű leckében beszélünk részletesen.
