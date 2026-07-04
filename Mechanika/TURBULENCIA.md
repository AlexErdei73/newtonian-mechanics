# A kifejlett turbulencia és az energiakaszkád

## A turbulencia tulajdonságai

Láttuk a korábbiakból, hogy a csőbeli áramlás csak kis Reynolds-szám esetén lesz lamináris, stacionárius, örvénymentes áramlás. Ez ugyanúgy érvényes a gömb körüli áramlásra is, amelyből Stokes kapta a törvényét a közegellenállási erőre igen kis Reynolds-szám esetére. Láttuk már azt is, hogy egy végtelen hosszú henger körüli síkbeli áramlás hogyan válik örvényessé, majd hogyan alakul ki a Kármán-féle örvénysor magasabb Reynolds-számok esetén. 

Ez a folyamat elvezet magas Reynolds-számok esetén egy erősen kaotikus áramláshoz, amelyet turbulens áramlásként emlegetünk. Ez persze tiszta síkbeli áramlásoknál már nem alakulhat ki, mert a turbulencia kialakulása csak három dimenzióban lehetséges. Most meg fogjuk vizsgálni, hogy miért is van ez így. A mindennapi életben – mint látni fogjuk – szinte minden esetben a turbulens áramlásokkal találkozhatunk, amennyiben kilépünk a laboratóriumból, vagy eltekintünk az eddig vizsgált egyszerűbb esetektől.

### Kísérletek

[A turbulens áramlás tulajdonságai (YouTube videó)](https://www.youtube.com/watch?v=5zI9sG3pjVU)

Ez a videó sok minden érdekességet mutat a turbulens áramlásokkal kapcsolatban: beszél a határrétegről, a tapadási feltételről, olyan példákról, ahol a turbulencia a gyakorlatban is hasznos, és persze magáról a jelenségről és a kialakulásáról is. Nézzük meg a turbulencia fő jellemzőit:

*   Térbeli jelenség
*   Magas Reynolds-számoknál lép fel
*   Örvényes áramlásról van szó
*   Kiszámíthatatlan, kaotikus az áramlás: a sebesség egy pontban egy adott érték körül vadul ingadozik, fluktuál
*   Keveredéssel jár: az áramvonalak összekuszálódnak, összekeverednek, nyilvánvalóan nem megfordítható módon
*   Fenntartásához energia betáplálása szükséges: az energia a folyadék belső energiájává (hővé) alakul, általában erőteljesebben, mint a lamináris áramlás esetén

Láttuk továbbá, hogy bár a turbulencia általában növeli a közegellenállást és a csövekben a hidrodinamikai ellenállást, néhány esetben kifejezetten kedvező is lehet. Például a golflabda rücskös felülete miatt a kialakuló határréteg turbulens, és bár ez kissé megnöveli a felületi súrlódást, nagy mértékben csökkenti azt a felületet, amit a levegő tulajdonképpen „lát” a labdából, mert jobban körül tudja áramolni a labdát. Ennek következménye, hogy a közegellenállás jelentősen csökken ugyanolyan körülmények között a sima labdához képest.

## Az energiakaszkád

Már a videó arról is beszélt, hogy először nagy örvények alakulnak ki a magas Reynolds-szám esetén, majd ezek az örvények kisebb örvényekre esnek szét, ahogy összehúzódnak és gyorsabban kezdenek pörögni. Majd ezek a kisebb örvények még inkább összehúzódnak és még kisebb örvényekre esnek szét, majd ez a folyamat egészen addig tart, amíg el nem érünk egy olyan magas sebességhez és kis mérethez, hogy a súrlódás képes lesz felemészteni és a folyadék belső energiájává alakítani az örvények energiáját. 

Ez a folyamat az úgynevezett **energiakaszkád** (energia-vízesés). A nagy örvényekbe betápláljuk a mechanikai energiát, de aztán ez az energia átadódik a kisebb örvényeknek. Ezen a szinten az energia megmarad, mert a súrlódás nem jut szerephez. A folyamat csak három dimenzióban tud végbemenni, mivel lényeges az örvényszálak megnyúlása és felpörgése (*vortex stretching*). Ez a folyamat tehát a betáplált energiát egyre kisebb és kisebb örvényekbe viszi át, amíg a végén a súrlódás felemészti a betáplált mechanikai energiát. Nézzünk is meg erről egy videót.

### Kísérletek

[Az energiakaszkád, avagy törvényszerűség a káoszban (YouTube videó)](https://www.youtube.com/watch?v=_UoTTq651dE)

Ez a videó is elmagyarázza a turbulencia tulajdonságait, de sokkal részletesebben beszél az energiakaszkádról is. Ezután megemlít egy fontos matematikai törvényt is.

>**A különböző méretű örvényekben tárolt energia, egységnyi tömegű folyadékra vonatkoztatva arányos az örvények $D$ átmérőjének $5/3$-os hatványával a turbulens áramlás esetén.**

Ez egy igen érdekes összefüggés, amelyet a kísérletek az energiakaszkád közepes mérettartományára nagy pontossággal igazoltak eredeti formájában. A videó azt is említi, hogy ez a megállapítás Kolmogorov orosz matematikustól származik, aki felismerte az energiakaszkád működését, és néhány egyszerű feltételezésből jutott el a törvényszerűség felismeréséig. Ő ugye a valószínűségszámításban és a statisztikában elért eredményeiről ismert a legjobban. 

Rájött, hogy az alapegyenletek megoldása egy ilyen összetett esetben reménytelen, hiszen matematikailag még az sem bizonyított, hogy jól viselkedő megoldások – amelyek nem válnak végtelenné egyes pontokban – egyáltalán léteznek-e. Tehát statisztikus feltételezéseket és egyszerű dimenzióanalízist végzett, úgy jutott a megállapításokhoz. Gondolatmenete igen érdekes, most megpróbáljuk elmagyarázni!

### Kolmogorov K41 modellje az energiakaszkádra

Képzeljük el megint a csőben az áramlást, de most víz áramlik ott, nem glicerin, és az áramlás jó gyors, a cső is vastag, tehát a Reynolds-szám magas. A folyadék a nagy nyomású helyről áramlik a kis nyomású hely felé, tehát a nyomáskülönbség erőt jelent, mely munkát végez a folyadékon, hogy fenntartsa a folyadékban folyamatosan belső energiává alakuló mechanikai energiát. A kialakuló turbulens áramlás egy pontjában mérjük valamilyen módon a folyadék sebességét, és turbulencia esetén azt tapasztaljuk, hogy ez a sebesség egy átlag körül igen gyors ingadozásokat végez.

$$
u(t) = \overline{u} + u'(t)
$$

Itt $\overline{u}$ az áramlás átlagos sebessége, mely mindenhol azonos a csőben. Az $u'$ sebesség igen gyorsan ingadozik, de átlagban nulla. Ezek az ingadozások abból adódnak, hogy az adott ponton sok-sok kisebb-nagyobb örvény halad át rövid idő alatt, és ezek belsejében a víz sebessége eltér kisebb-nagyobb mértékben az átlagtól. Az $u'(t)$ függvényt megmérve meghatározhatjuk matematikai módon a különböző méretű örvényekben az energia eloszlását az örvények mérete szerint, egységnyi tömegű folyadékra vonatkoztatva. Ez az $E$ mennyiség, amit a videóban láttunk. 

Tulajdonképpen azt kell csinálni, amit egy grafikus ekvalézer is csinál a hanggal, amikor egy hangimpulzust szétválaszt a mély, kisebb frekvenciájú komponensekre, majd a közepes frekvenciájú és végül a magas frekvenciájú összetevőre. Ez a számítás számítógéppel ma már rutinmunka. Kolmogorov nem a $D$ távolsággal jellemezte az örvények méretét, hanem a $k$ hullámszámmal:

$$
k = \frac{2\pi}{r}
$$

Tehát $k$ a hullámszám, mely az örvények $r$ sugarának reciproka:

$$
E = E(k)
$$

$E$ tehát az a mozgási energia, amit $1\text{ kg}$ folyadék tárol azokban az örvényekben, melyek hullámszáma $k$ és $k + \Delta k$ közé esik, egységnyi hullámszám-hosszra vonatkoztatva. Tehát:

$$
E = \frac{\text{Energia } 1\text{ kg folyadékban } k \text{ és } k + \Delta k \text{ közötti hullámszámú örvényekben}}{\Delta k}
$$

Az $E$ spektrumsűrűség mértékegysége:

$$
[E] = \frac{\text{J}/\text{kg}}{1/\text{m}} = \frac{\text{N}\cdot\text{m}/\text{kg}}{1/\text{m}} = \frac{\text{kg}\cdot\text{m}/\text{s}^2 \cdot \text{m} / \text{kg}}{1/\text{m}} = \frac{\text{m}^3}{\text{s}^2}
$$

Most először nézzük meg, mivel jellemzi Kolmogorov a viszkozitást. Ő a *kinematikai viszkozitást* használja, mely a viszkozitás és a sűrűség hányadosa:

$$
\nu = \frac{\eta_{\text{din}}}{\rho}
$$

Ennek egysége:

$$
[\nu] = \frac{\text{Pa}\cdot\text{s}}{\text{kg}/\text{m}^3} = \frac{\frac{\text{kg}\cdot\text{m}}{\text{s}^2\cdot\text{m}^2}\cdot\text{s}}{\text{kg}/\text{m}^3} = \frac{\text{kg}}{\text{m}\cdot\text{s}} \cdot \frac{\text{m}^3}{\text{kg}} = \frac{\text{m}^2}{\text{s}}
$$

Kolmogorov az $\eta$ jelölést fogja használni a legkisebb örvények sugarára. Amikor az energia az energiakaszkádon lecsorogva eléri az $\eta$ örvénysugarat, akkor fog a viszkozitás jelentőssé válni és hővé alakítani az energiát. Ezen örvényekben a folyadék forgásából adódó sebessége $v_{\eta}$.

Most már meg tudjuk határozni a legkisebb örvényfonalak méretét. Kolmogorov szerint ez csak két dologtól függhet: függ attól, hogy mennyi energia érkezik egységnyi tömegű folyadékban a kaszkádban időegység alatt ($\varepsilon$), és a $\nu$ kinematikai viszkozitástól. A feltételezett összefüggés:

$$
\eta = C \cdot \varepsilon^a \cdot \nu^b
$$

Elvégezzük a dimenzióanalízist, tehát a mértékegységek azonosak kell legyenek a jobb és bal oldalon:

$$
\text{m}^1 = \left(\frac{\text{m}^2}{\text{s}^3}\right)^a \cdot \left(\frac{\text{m}^2}{\text{s}}\right)^b = \text{m}^{2a+2b} \cdot \text{s}^{-3a-b}
$$

A hatványozást elvégezve a kitevők a bal és jobb oldalon egyenlők:

$$
1 = 2a + 2b
$$

$$
0 = -3a - b
$$

Összeadva a második egyenlet kétszeresét és az első egyenletet, a következőt kapjuk:

$$
1 = -4a \implies a = -\frac{1}{4}
$$

Ezt behelyettesítve a második egyenletbe:

$$
0 = \frac{3}{4} - b \implies b = \frac{3}{4}
$$

Ezek alapján a legkisebb örvényméretre kapott negyedik gyökös képlet:

$$
\eta \sim \left(\frac{\nu^3}{\varepsilon}\right)^{1/4}
$$

Hasonlóan levezethető a sebességre vonatkozó összefüggés is:

$$
v_{\eta} = K \cdot \varepsilon^c \cdot \nu^d
$$

$$
\frac{\text{m}}{\text{s}} = \left(\frac{\text{m}^2}{\text{s}^3}\right)^c \cdot \left(\frac{\text{m}^2}{\text{s}}\right)^d
$$

$$
1 = 2c + 2d
$$

$$
-1 = -3c - d
$$

Az egyenletrendszert megoldva a kitevők:

$$
c = \frac{1}{4}, \quad d = \frac{1}{4}
$$

Innen a mikroszkopikus sebességképlet:

$$
v_{\eta} \sim (\varepsilon \cdot \nu)^{1/4}
$$

Nézzük meg a két levezetett mikroszkopikus paraméter szorzatát:

$$
v_{\eta} \cdot \eta \sim (\varepsilon \cdot \nu)^{1/4} \cdot \left(\frac{\nu^3}{\varepsilon}\right)^{1/4} = \nu
$$

Tehát a legkisebb skálára felírt helyi Reynolds-szám:

$$
Re_{\eta} = \frac{v_{\eta} \cdot \eta}{\nu} \sim 1 
$$

Ez azt jelenti Kolmogorov elméletének nyelvén, hogy hajszálpontosan azok az örvények disszipálják el (alakítják hővé) a mozgási energiát, melyek egyedi örvényszintű Reynolds-száma $1$ nagyságrendű, azaz elég kicsi ahhoz, hogy a belső súrlódás legyen a domináns tényező a mozgásukra nézve.

---

### Kolmogorov eredménye az $E(k)$ függvényre 

Kolmogorov feltételezte, hogy a súrlódás az energiakaszkád középső részén (az inerciális tartományban) már nem számít, tehát az $E(k)$ függvény itt már csak az $\varepsilon$ energiaáramlási sebességtől és a $k$ hullámszámtól függhet. Nem függ tehát a $\nu$ kinematikai viszkozitástól:

$$
E(k) = D \cdot \varepsilon^x \cdot k^y
$$

Áttérve a mértékegységekre:

$$
\frac{\text{m}^3}{\text{s}^2} = \left(\frac{\text{m}^2}{\text{s}^3}\right)^x \cdot \left(\frac{1}{\text{m}}\right)^y
$$

A kitevők egyeztetése:

$$
3 = 2x - y
$$

$$
-2 = -3x \implies x = \frac{2}{3}
$$

$$
y = 2x - 3 = \frac{4}{3} - \frac{9}{3} = -\frac{5}{3}
$$

Eredményünk tehát a híres **Kolmogorov-féle $-5/3$-os spektrumtörvény**:

$$
E(k) \sim \varepsilon^{2/3} \cdot k^{-5/3}
$$

---

### Kísérleti ellenőrzés

Az $E(k)$ függvény az $u'(t)$ sebességjel mért értékeiből meghatározható számítógépes kiértékeléssel (Fourier-transzformációval). Ezután már csak ábrázolni kell logaritmikus skálán a függvényt. Ahol az elméleti összefüggés fennáll, azoknál a $k$ értékeknél a görbének egy egyenest kell alkotnia, melynek meredeksége $-\frac{5}{3}$:

$$
\log E(k) = \log\left(D \cdot \varepsilon^{2/3} \cdot k^{-5/3}\right) = \log\left(D \cdot \varepsilon^{2/3}\right) - \frac{5}{3} \log k
$$

Bevezetve, hogy $Y = \log E(k)$ és $X = \log k$, egy klasszikus lineáris egyenes egyenletét kapjuk:

$$
Y = -\frac{5}{3} X + B
$$

---

### Gyakorlati felhasználás

Mivel az $\varepsilon$ könnyen meghatározható a folyadékon végzett globális munka (például a szivattyú teljesítménye) mérésével, és a $\nu$ kinematikai viszkozitás is jól ismert táblázati adat, pontosan kiszámítható a legkisebb örvények mérettartományának nagysága ($\eta$) és ezen örvények sebessége ($v_{\eta}$). Ezek a paraméterek határozzák meg szigorúan, hogy milyen méretű cellákra (rácsokra) kell az áramlási teret felosztani, amikor a Navier–Stokes-egyenleteket közvetlen számítógépes szimulációval (DNS) oldjuk meg. 

Ha ennél nagyobb méretű felosztást alkalmazunk, akkor a számítógép nem tud számolni a leggyorsabb, legkisebb örvényekkel, az energia felhalmozódik, és a szimuláció hibás lesz vagy numerikusan felrobban. Sajnos ez az $\eta$ méret rendkívül pici, így a közvetlen megoldás általában gigantikus szuperszámítógépeket igényel. 

Ez a számítási idő azonban jócskán lecsökkenthető, ha csak az $\overline{u}$ átlagos sebességet akarjuk kiszámítani (RANS modellek). Ilyenkor sokkal durvább felosztás is elegendő, csak az a fontos, hogy a folyadék valós fizikai viszkozitásához a szimuláció során hozzá kell adni egy úgynevezett **turbulens viszkozitást** ($\nu_t$), ami a kis skálájú örvények fékező hatását helyettesíti. Ezt a hozzáadandó értéket a számítógép cellánként a Kolmogorov-modell elvei alapján számítja ki, és így a kísérletekkel jól egyező, gyors közelítő eredmények kaphatók, melyeket a mérnökök kiválóan tudnak használni a mindennapi tervezés során.

---

### Példák

1. Egy egyenes csőben $20\text{ }^{\circ}\text{C}$-os tiszta víz áramlik durva turbulenciával. Az áramlás globális Reynolds-száma $Re = 100\\ 000$, az átlagsebesség $\overline{u} = 10\text{ m/s}$. A mérések szerint a súrlódás miatti nyomásesés a csőben méterenként $\Delta p/L = 400\text{ Pa/m}$. Mekkora a cső belső átmérője? Mekkora a folyadékban másodpercenként hővé alakuló $\varepsilon$ fajlagos energia-disszipáció, és mekkora a kialakuló legkisebb örvények $\eta$ mérete, valamint a bennük ébredő $v_{\eta}$ sebesség?  
(Adatok a vízre: sűrűség $\rho = 1000\text{ kg/m}^3$, dinamikus viszkozitás $\eta_{\text{din}} = 10^{-3}\text{ Pa}\cdot\text{s}$)

Határozzuk meg a víz $\nu$ kinematikai viszkozitását:

$$
\nu = \frac{\eta_{\text{din}}}{\rho} = \frac{10^{-3}}{1000} = 10^{-6}\text{ m}^2/\text{s}
$$

A globális Reynolds-számból ($Re = \frac{\overline{u}\cdot d}{\nu}$) számítsuk ki a cső $d$ átmérőjét:

$$
100\\ 000 = \frac{10 \cdot d}{10^{-6}} \implies d = \frac{100\\ 000 \cdot 10^{-6}}{10} = 0{,}01\text{ m} = 1\text{ cm}
$$

Számítsuk ki az $\varepsilon$ fajlagos energia-disszipációt! A pumpa által méterenként végzett hidraulikai teljesítmény $P = Q \cdot \frac{\Delta p}{L}$. A térfogatáram $Q = A \cdot \overline{u} = \frac{d^2\pi}{4} \cdot \overline{u}$. Az 1 méteres csőszakaszban lévő víztömeg $m = \frac{d^2\pi}{4} \cdot 1 \cdot \rho$. 
A tömegegységre vetített energiaáramlás ($\varepsilon = P/m$) kifejezéséből a geometriai tagok kiesnek:

$$
\varepsilon = \frac{\overline{u} \cdot \frac{\Delta p}{L}}{\rho} = \frac{10\text{ m/s} \cdot 400\text{ Pa/m}}{1000\text{ kg/m}^3} = 4\text{ m}^2/\text{s}^3
$$

Alkalmazzuk Kolmogorov negyedik gyökös képleteit a mikroszkopikus örvények sugarára és forgási sebességére:

$$
\eta = \left( \frac{\nu^3}{\varepsilon} \right)^{1/4} = \left( \frac{(10^{-6})^3}{4} \right)^{1/4} = \left( \frac{10^{-18}}{4} \right)^{1/4} = (2{,}5 \cdot 10^{-19})^{1/4} \approx 22{,}4 \cdot 10^{-6}\text{ m} = 22{,}4\text{ }\mu\text{m}
$$

$$
v_{\eta} = (\varepsilon \cdot \nu)^{1/4} = (4 \cdot 10^{-6})^{1/4} \approx 0{,}0447\text{ m/s} = 4{,}47\text{ cm/s}
$$

A cső átmérője $1\text{ cm}$. A csőben a legkisebb, hőt termelő örvényszálak sugara mindössze $22{,}4\text{ }\mu\text{m}$ (átmérőjük kb. $45\text{ }\mu\text{m}$), és bennük a víz $4{,}47\text{ cm/s}$-os sebességgel örvénylik a viszkózus zónában.

2. Egy népszerű online ismeretterjesztő videóban a következő állítás hangzik el: *„A különböző méretű örvényekben tárolt kinetikus energia – egységnyi tömegű folyadékra vonatkoztatva – arányos az örvények* $D$ *átmérőjének* $5/3$ *-os hatványával (*$E_D \sim D^{5/3}$*).”* Mutassuk meg pusztán dimenzióanalízissel (mértékegység-egyeztetéssel), hogy ez az állítás ebben a formában hibás! Vezessük le a térbeli örvényméret szerinti valódi energiasűrűség helyes hatványkitevőjét!


**A videó állításának ellenőrzése:**
A videó szerint a valós térbeli örvényméret szerinti energiaeloszlás ($E_D$) a $D$ átmérőtől és az $\varepsilon$ fajlagos energia-disszipációtól függ ($E_D \sim \varepsilon^{2/3} \cdot D^{5/3}$). Ellenőrizzük le a jobb oldal mértékegységét a Kolmogorov-elmélet gyári SI egységeivel:
*   Az $\varepsilon$ egysége: $\text{m}^2/\text{s}^3$, így az $\varepsilon^{2/3}$ egysége: $\text{m}^{4/3}/\text{s}^2$
*   A $D$ átmérő egysége: $\text{m}$, így a $D^{5/3}$ egysége: $\text{m}^{5/3}$

Szorozzuk össze a két mértékegységet a videó képlete szerint:

$$
[E_{\text{videó}}] = \left(\frac{\text{m}^{4/3}}{\text{s}^2}\right) \cdot \text{m}^{5/3} = \frac{\text{m}^{(4/3 + 5/3)}}{\text{s}^2} = \frac{\text{m}^{9/3}}{\text{s}^2} = \frac{\text{m}^3}{\text{s}^2}
$$

A kapott mértékegység $\text{m}^3/\text{s}^2$. Ez azonban – ahogy a lecke korábbi részében láttuk – a $k$ hullámszám szerinti $E(k)$ spektrumsűrűség egysége, ahol a sávszélességet a hullámszám reciproka ($1/\text{m}$) határozza meg!

**A helyes térbeli dimenzió meghatározása:**
Ha a sűrűségfüggvényt nem hullámszámonként, hanem a valóságos térbeli méret ($D$, méterben mérve) szerint értelmezzük, akkor a térbeli spektrumsűrűség ($E_D$) azt adja meg, hogy egységnyi *métertartományra* mekkora fajlagos mozgási energia ($\text{J}/\text{kg} = \text{m}^2/\text{s}^2$) jut. Ennek a helyes SI mértékegysége:

$$
[E_D] = \frac{\text{m}^2/\text{s}^2}{\text{m}} = \frac{\text{m}}{\text{s}^2}
$$

**A helyes összefüggés levezetése dimenzióanalízissel:**
Tegyük fel, hogy a helyes térbeli energiaeloszlás az inerciális tartományban szintén csak az $\varepsilon$ ($[\varepsilon] = \text{m}^2/\text{s}^3$) és a $D$ ($[d] = \text{m}$) változóktól függ:

$$
E_D = C \cdot \varepsilon^a \cdot D^b
$$

Írjuk fel a helyes mértékegység-egyeztetést a két oldalra:

$$
\frac{\text{m}^1}{\text{s}^2} = \left(\frac{\text{m}^2}{\text{s}^3}\right)^a \cdot (\text{m})^b = \text{m}^{2a+b} \cdot \text{s}^{-3a}
$$

A hatványok egyenlősége alapján az alábbi rendszert kapjuk:
*   Az időre ($\text{s}$): $-3a = -2 \implies a = \frac{2}{3}$
*   A hosszúságra ($\text{m}$): $2a + b = 1$

Helyettesítsük be az $a = 2/3$ értéket a hosszúság egyenletébe:

$$
2 \cdot \left(\frac{2}{3}\right) + b = 1 \implies \frac{4}{3} + b = \frac{3}{3} \implies b = -\frac{1}{3}
$$

A helyes fizikai és dimenziós eredményünk tehát:

$$
E_D \sim \varepsilon^{2/3} \cdot D^{-1/3}
$$

A videó készítői elkövették azt a súlyos matematikai hibát, hogy a $k = 4\pi/D$ helyettesítést közvetlenül, a sűrűségfüggvények koordináta-transzformációs szabályai (a differenciálok átváltása) nélkül végezték el. A dimenzióanalízis mint csalhatatlan „hazugságvizsgáló” azonnal megmutatja, hogy a valós térben az örvények energiasűrűsége nem a pozitív $5/3$-os, hanem a **negatív $1/3$-os hatvány szerint változik** ($D^{-1/3}$).

---

## Feladatok

1. Egy szélcsatorna turbulens magáramában a mért fajlagos energia-disszipáció értéke $\varepsilon = 12\text{ m}^2/\text{s}^3$. A levegő kinematikai viszkozitása a kísérlet során $\nu = 1{,}5 \cdot 10^{-5}\text{ m}^2/\text{s}$. Számítsd ki Kolmogorov képletei alapján a legkisebb kialakuló örvények $\eta$ sugarát és a bennük mérhető $v_{\eta}$ sebességét!

2. Egy kémiai reaktorban sűrű folyadékot kevernek nagy fordulatszámon, a betáplált fajlagos energia $\varepsilon = 5\text{ m}^2/\text{s}^3$. A folyadék kinematikai viszkozitása a vízének pontosan a kétszázszorosa: $\nu = 2 \cdot 10^{-4}\text{ m}^2/\text{s}$. Határozd meg a reaktorban kialakuló legkisebb örvények $\eta$ sugarát! Hányszorosára nőtt meg ez a mikroszkopikus határ a tiszta vízben mérhető értékhez ($\nu_{\text{víz}} = 10^{-6}\text{ m}^2/\text{s}$) képest ugyanezen az energiaszinten?

3. Egy aerodinamikai kutatócsoport egy gépkocsi mögött kialakuló turbulens csóva $E(k)$ energia-spektrumát elemzi az inerciális tartományban log-log grafikonon. Egy nagyobb örvényméretnek megfelelő $k_1 = 2\text{ m}^{-1}$ hullámszámon a mért spektrális energiasűrűség $E(k_1) = 0{,}30\text{ m}^3/\text{s}^2$. Számítsd ki a Kolmogorov-féle $-5/3$-os törvény alapján a várható spektrális energiaértéket egy jóval kisebb örvényméretnél, ahol a hullámszám pontosan a négyszerese az elsőnek ($k_2 = 8\text{ m}^{-1}$)!