# Csillapított rezgések

## Szimulációk

A szimulációban és elméletben is láttuk, hogy a rezgési energia és így az amplitúdó is állandó, amennyiben a rezgő testre csak a konzervatív rugalmas erő és esetleg a szintén konzervatív nehézségi erő hat. A valóságban azonban ilyesmit nem tapasztalunk, hiszen mindig vannak disszipatív erők. Nézzük meg, hogy egy harmonikus rezgést végző test esetében milyen erők okozzák a rezgés csillapodását, és ez hogyan csökkenti az amplitúdót, ahogy az idő múlik!

### Súrlódásos csillapítás
Először vizsgáljuk a súrlódási erő hatását, hisz ezt már jól ismerjük! A szimuláció annyiban lesz más, mint a példában láttuk a rezgési energia tárgyalásakor, hogy a rezgés a nehézségi erő hatása alatt történik egy vízszintes felületen, ahol súrlódás hat a testre. A rezgési energia most is $4$ J kezdetben, de ha a szimulációt elindítjuk, az összenergia csak $3,853$ J! Ennek oka az állandó $-0,147$ J magassági helyzeti energia. Ha a test elveszti rezgési energiáját, akkor csak ez a magassági helyzeti energia marad, tehát a test energiája egyensúlyban $-0,147$ J lesz. Vizsgáljuk meg a rezgés lefolyását, és rajzoltassuk ki a kitérés-idő grafikont (az 1-es test esetében), hogy láthassuk, az amplitúdó hogyan csillapodik!

[Harmonikus rezgés súrlódásos csillapítással](https://alexerdei73.github.io/physics-engine/project/#763312f1-b675-4eea-9bbd-c6fb59026bb4)

* Hogyan csillapodik az amplitúdó?
* Számítsuk ki a súrlódási erő munkáját a szimulációs adatok alapján! A test által megtett teljes út a **path length**. Az erő iránya mindig ellentétes a mozgás irányával, de nagysága állandó. $\mu = 0,9$ és $mg$ könnyen kiolvasható az adatokból. Maga a súrlódási erő is kiolvasható, de ezt a test megállása előtt kell megtenni, különben csak a tapadási erőt láthatjuk. Az algoritmus esetében valamilyen kicsiny sebességnél a testet állónak kell tekinteni, ez ebben a programban $10^{-4}$ m/s, tehát ez a test maradék sebessége. 
* Eléri-e a test megálláskor az egyensúlyi helyzetet? Ez pontosan $x = 2$ m-nél lenne. 

### Légellenállás
Most nézzük meg azt az esetet, mikor súrlódás ugyan nincs, de van légellenállás. Itt a $10$ g-os test $20$ cm átmérőjű gömb, így a légellenállása irreálisan nagy lesz. Ez azt jelenti, hogy a hatást kb. 100-szorosára felnagyítva láthatjuk (a valóságban egy ilyen tömegű golyó kb. tízszer kisebb, de az erő a felülettel arányos, amely 100-szor kisebb). Egyébként a valóságban ez a meghatározó tényező az iskolai kísérleteknél is, annak ellenére, hogy a csillapítás nem túl nagy. A súrlódást általában kiküszöböljük, de a légellenállás általában jelen van. Itt is figyeljük meg a kitérés-idő grafikont! Itt kezdetben igen gyors csillapodást láthatunk, de amikor már az amplitúdó és a sebesség kicsi, akkor a csillapodás igen lassú. Ennek oka, hogy a légellenállás a sebesség négyzetével arányos erő, tehát kis sebességeknél szinte teljesen elhanyagolható. Ennek köszönhető, hogy mire 4 értékes jegy pontossággal elérjük, hogy a teljes rezgési energia belső energiává alakuljon át, kb. $26$ s telik el a szimulációban!

[Harmonikus rezgés csillapodása a légellenállás miatt](https://alexerdei73.github.io/physics-engine/project/#2d7bf5da-1455-4c4a-896d-a40baf1347a4)

### A sebességgel arányos csillapítás
A valódi rugók igen kismértékben ugyan, de csillapítják a rezgést, akkor is, ha nincs légellenállás. Ennek mértéke acél esetén igen kicsiny, az acél szinte tökéletesen rugalmas. Ez a fajta csillapítás egyébként nem írható le az eddigi kifejezésekkel. Ennek oka, hogy a belső anyagszerkezeti mechanizmus amplitúdótól függő, nem pedig sebességfüggő csillapító erőt eredményez.
Bár elméletileg helytelen, ezt sokszor szokták modellezni sebességfüggő, a sebességgel lineáris csillapítási erővel. Ennek oka, hogy a matematika viszonylag egyszerű, és a csillapítás általában igen kicsi. Ilyen csillapítási erő lép fel folyadékokban kis sebességű mozgás esetén, amikor az áramlás szabályos szerkezetű, tehát nem örvényes. A tipikus példa a lengéscsillapítókban fellépő csillapítási erők. A továbbiakban mi ezzel a csillapítással fogunk részletesebben foglalkozni.

[Harmonikus rezgés sebességgel arányos csillapítással](https://alexerdei73.github.io/physics-engine/project/#8b2676f8-91a6-4f77-b2cd-e8f0c9b87a51)

## Mozgásegyenlet sebességgel arányos csillapítás esetén


$$
F_{x,e} = -Dx - \beta v_x
$$


Ez az egyenlet azt mutatja, hogy a rugalmas erő mellett fellép egy a sebesség nagyságával arányos, de a sebességgel ellentétes irányú erő, mely a mozgást minden pillanatban lassítani igyekszik. Ezt behelyettesítve Newton második törvényébe, megkapjuk a mozgásegyenletet.


$$
F_{x,e} = ma_x
$$



$$
ma_x = -Dx - \beta v_x
$$


Nullára rendezve szokás az egyenletet felírni:


$$
ma_x + \beta v_x + Dx = 0
$$


Kérdés az, hogy milyen kitérés-idő függvény az egyenlet megoldása, ha a test álló helyzetből indul az $x(0) = +A$ helyzetből. Erre csak felsőbb matematikai ismeretek birtokában lehet válaszolni, tehát az egyenletet nem fogjuk megoldani, csak a megoldást magyarázzuk el.

## Az amplitúdó csökkenése

Először is vizsgáljuk meg, hogyan csökken az amplitúdó. Ha a szimulációnkban feljegyeznénk a kitérés értékét $nT$ időnként, ahol $n$ nem negatív egész szám, akkor észrevennénk, hogy a következő összefüggés áll fenn:


$$
x(nT) = A_0q^n, \quad 0 < q < 1
$$


Ezt a sorozatot a matematikában úgy ismerjük, mint a *mértani sorozat*. Tehát az amplitúdók mértani sorozat szerint csökkennek. Minél kisebb a $q$ tényező, annál gyorsabban csökken az amplitúdó, tehát annál gyorsabban hal el a rezgés.
Bevezethetjük a *csillapítási tényezőt*, melyet $\delta$-val fogunk jelölni. Ennek egysége 1/s, akárcsak a körfrekvenciának, tehát ezek összehasonlíthatók.


$$
\delta = \frac \beta {2m}
$$


A mozgásegyenlet megoldásával megmutatható, hogy:


$$
q = e^{-\delta T}
$$


Itt az $e$ szám a felsőbb matematikából jól ismert irracionális szám, nevét *Euler* matematikusról kapta. Értéke:


$$
e = 2,71828...
$$


Ez már majdnem elegendő $q$ kiszámításához, de a periódusidő egy kicsivel hosszabb, mint a csillapítatlan rezgés esetén. A mozgásegyenlet megoldásával megmutatható, hogy a körfrekvencia egy kicsit kisebb, mint a csillapítatlan esetben.


$$
\omega_0^2 = \frac D m
$$



$$
\omega = \sqrt {\omega_0^2 - \delta^2}
$$


Ezen összefüggések segítségével a $q$ tényező már kiszámítható.

### Példa

Számítsuk ki az eddigi példánkban a $q$ tényező értékét! Mennyi idő alatt csökken a rezgés energiája 4 tizedes pontossággal 0-ra? ($5 \times 10^{-5}$ J energia maradhat maximum a rendszerben.) A $\beta = 0,06$ kg/s a szimulációnkban.

A csillapítási tényező kiszámítása a következő:


$$
\delta = \frac {\beta} {2m} = \frac {0,06} {2 \times 0,01} = 3\text{ 1/s}
$$


A pontos körfrekvencia és periódusidő is kiszámítható:


$$
\omega_0^2 = \frac {D} {m} = \frac {200} {0,01} = 20000\text{ s}^{-2}
$$



$$
\omega = \sqrt {\omega_0^2 - \delta^2} = \sqrt {20000 - 9} = 141,39\text{ 1/s}
$$
 


$$
T = \frac {2 \pi} {\omega} = \frac {2 \pi} {141,39} = 0,044439\text{ s}
$$


Most már $q$ kiszámítható:


$$
q = e^{-\delta T} = e^{-3 \cdot 0,044439} = 0,87519
$$


A maradék energiából megkaphatjuk a maradék maximális kitérést!


$$
\frac {Dx_{max}^2} {2} = E_{max}
$$

$$
x_{max} = \sqrt \frac {2E_{max}} {D} = \sqrt \frac {2 \cdot 5 \cdot 10^{-5}} {200} = 7,0711 \cdot 10^{-4}\text{ m}
$$

A maradék $x_{max}$ kitérésből kiszámíthatjuk $n$ minimális értékét úgy, hogy a rezgés energiája négy tizedes pontossággal 0 legyen!  


$$
x_{max} = A_0 q^n
$$



$$
q^n = \frac{x_{max}}{A_0}
$$


A kitevő kiszámítása a logaritmusfüggvény segítségével lehetséges. A logaritmus alapja a hatványalap, a függvény pedig a hatvány értékéből adja vissza a kitevőt. Ez a függvény a legtöbb tudományos számológépen megtalálható. Néha csak a 10-es alapú $\log$ vagy az $e$ alapú $\ln$ függvények érhetők el. Ekkor a következő logaritmusazonosság segít visszavezetni a $q$ alapú logaritmust 10-es vagy $e$ alapú logaritmusra:


$$
\log_a(x) = \frac{\log_b(x)}{\log_b(a)}, \quad a > 0, b > 0, a \neq 1, b \neq 1
$$


Ez alapján az $e$ alapú logaritmus segítségével a számítás a következő:


$$
n = \log_q \left( \frac{x_{max}}{A_0} \right) = \frac{\ln \left( \frac{x_{max}}{A_0} \right)}{\ln q} = \frac{\ln \left( \frac{7,0711 \cdot 10^{-4}}{0,2} \right)}{\ln 0,87519} = 42,3427
$$


Az $n$ értékéből már az idő minimális értéke meghatározható:


$$
t_{min} = nT = 42,3427 \cdot 0,044439 = 1,8817 \text{ s}
$$


Valóban a szimulációból látszik, hogy az energia $1,882$ s alatt éri el a $-0,1470$ J-t!
Figyeljük meg, hogy itt a pontos érték megkapásához $n$-re a tört értéket kell használnunk, amit a zsebszámológéppel kaphatunk. 

## A kitérés-idő függvény
Matematikából tanultuk, hogy a hatványozás elvégezhető tetszőleges valós kitevővel is. Ha az alap az $e$ szám, ez az exponenciális függvényhez vezet. Ezt a függvényt találjuk a kitérés-idő függvényben, mint az amplitúdó szorzója. Így tehát az amplitúdó exponenciálisan csökken.


$$
x(t) = Ae^{-\delta t}\cos(\omega t + \phi)
$$


A $\phi$ fázistolás ahhoz kell, hogy a kezdeti időpillanatban a kezdősebesség nulla legyen. Ennek kiszámítása:


$$
\tan \phi = - \frac \delta \omega
$$
 

Itt az $A$ szorzó még nem az amplitúdó, mert a kezdeti amplitúdót $t = 0$ behelyettesítéssel kapjuk meg.


$$
A_0 = A\cos \phi
$$


### Példa
Számítsuk ki a kitérést az idő függvényében a szimulációs példánkban!


$$
\tan \phi = - \frac \delta \omega = - \frac {3} {141,39} = -0,021218
$$



$$
\phi = -0,021215
$$



$$
A = A_0 / \cos \phi = 0,2 / \cos(-0,021215) = 0,200045
$$


Ezeket behelyettesítve kapjuk, hogy:


$$
x = 0,200045e^{-3t}\cos(141,39t - 0,021215)
$$


## Kritikus csillapítás
Amikor a csillapítás akkora, hogy a körfrekvencia nullává válik, akkor a koszinusz függvény már állandóan 1, tehát a test egyszerűen exponenciálisan tart az egyensúlyi helyzethez. Ezt nevezzük kritikus csillapításnak.


$$
\delta_k = \omega_0
$$


A formula megkapható a korábbi képletből, de a levezetés felsőbb matematikát igényel, úgyhogy itt nem vezetjük le. A képletet a teljesség kedvéért közöljük:


$$
x = A_0(1 + \delta_k t)e^{-\delta_k t}
$$


A mérnöki gyakorlatban az autók lengéscsillapítójánál a kritikus csillapítás megvalósítására törekednek, mert ekkor kerül vissza az autó kerékfelfüggesztése a leggyorsabban az egyensúlyi helyzetébe, tehát a menetstabilitás a lehető legjobb lesz. A lengéscsillapítók azonban a rugó összenyomódása alatt kis csillapítást fejtenek ki, míg a visszatérés alatt a csillapítás nagyobb. Ez az aszimmetrikus csillapítás fontos, hogy ha a kereket nagy ütés érné felfelé, akkor ezt ne vigye át a felfüggesztés a karosszériára.

### A lengéscsillapító működése

[A lengéscsillapító](https://www.youtube.com/watch?v=O-n7IvzPtME)

### Példa
Írjuk fel a képletet a szimulációs példánk esetére!


$$
x = 0,2(1 + 141,42t)e^{-141,42t}
$$


### Szimuláció

[Kritikus csillapítás](https://alexerdei73.github.io/physics-engine/project/#1de4ac61-0df7-4a4c-b912-fbec97a261c1)

## A túlcsillapított eset

Ha a csillapítási együttható nagyobb, mint a csillapítatlan körfrekvencia, ami a kritikus csillapításra jellemző, a test nem végez rezgéseket, de annál lassabban jut vissza exponenciálisan az egyensúlyi helyzetbe, minél nagyobb a csillapítási együttható. Ez a képlet is levezethető felsőbb matematikai eszközökkel a gyenge csillapítás esetéből, de itt csak az eredményt közöljük.


$$
\gamma = \sqrt {\delta^2 - \omega_0^2}
$$



$$
x = \frac A {2\gamma} \left( (\delta + \gamma)e^{(-\delta+\gamma)t} - (\delta - \gamma)e^{(-\delta-\gamma)t} \right)
$$


Ilyen eset áll fenn ajtók csillapításánál, hogy ne csapódjanak be, hanem szép lassan csukódjanak be.

## Feladatok

1. **Alapvető paraméterek kiszámítása:** Egy rugóra függesztett $m = 0,2$ kg tömegű test sebességgel arányos csillapítású közegben mozog. A rugóállandó $D = 50$ N/m, a csillapítási együttható $\beta = 0,4$ kg/s. Számítsd ki a csillapítatlan körfrekvenciát ($\omega_0$), a csillapítási tényezőt ($\delta$), és a csillapított rezgés körfrekvenciáját ($\omega$)!

2. **Elméleti kérdés a kritikus csillapításról:** Magyarázd el saját szavaiddal a szöveg alapján, miért törekednek a mérnökök az autók lengéscsillapítóinak tervezésekor a kritikus csillapítás elérésére! Mi történne a jármű menetstabilitásával, ha a rendszer alulcsillapított, és mi történne, ha túlcsillapított lenne?

3. **Kitérés-idő függvény felírása:** Egy csillapított harmonikus rezgés esetén tudjuk, hogy az amplitúdó kezdeti értéke $A = 5$ cm, a csillapítási tényező $\delta = 0,5\text{ 1/s}$, a csillapított rezgés körfrekvenciája pedig $\omega = 10\text{ 1/s}$. A kezdeti fázist ($\phi$) tekintsd nullának. Írd fel a kitérés-idő függvényt $x(t)$ alakban, és határozd meg, mekkora lesz a kitérés $t = 2$ másodperc múlva!

4. **Gyenge csillapítás ellenőrzése:** Ellenőrizzük a kitérés kiszámítását a szimulációs adatok alapján, gyenge csillapítás esetén! Indítsuk el a szimulációt, majd rövid idő múlva állítsuk meg! Olvassuk le az 1-es test $x$-koordinátáját. Mivel a szimulációban az egyensúlyi helyzet az $x = 2$ m-nél van, ezt az értéket le kell vonnunk a leolvasott koordinátából (hiszen az elméleti képleteink az $x = 0$ egyensúlyi helyzetre vonatkoznak). Olvassuk le az eltelt időt is, és helyettesítsünk be a képletbe! A számított és a szimulációból leolvasott kitérés között 4 értékes jegy pontosságú egyezés várható.

5. **Kritikus csillapítás ellenőrzése:** Végezzük el az előző (4.) feladatban leírt ellenőrzést a kritikus csillapítás esetére is! Ehhez a vizsgálathoz a gyors lefolyás miatt érdemes a szimuláció sebességét a tizedére lassítani.