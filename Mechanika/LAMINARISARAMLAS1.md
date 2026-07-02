# Lamináris áramlások I.

## Általános jellemzők

Ahogyan korábban is megbeszéltük, a lamináris áramlások esetében az áramvonalakkal az áramlás képe jól jellemezhető. Az áramlás gyakran stacionárius, vagyis az áramvonalkép időben állandó. Ezekre az áramlásokra a tiszta örvénymentesség jellemző. A belső súrlódás stabilizálja az áramlást a zavarokkal szemben, vagyis a folyadékban a viszkózus fékezőerők felülmúlják a tehetetlenségi hatásokat. Ez azt jelenti, hogy lamináris áramlások esetén a Reynolds-szám rendkívül kicsiny.

A folyadék rétegesen áramlik, ezek a rétegek nem keverednek egymással. Az áramlás a makroszkopikus keveredés hiánya miatt időben tökéletesen megfordítható. Erről szól az alábbi látványos és meghökkentő kísérlet is:

### Kísérlet

[A lamináris áramlás megfordíthatósága](https://www.youtube.com/watch?v=j2_dJY_mIys)  

---

## Stokes törvénye

### Kísérlet: Golyók süllyedése viszkózus közegben

[Walter Lewin kísérlete](https://www.youtube.com/watch?v=iV7LN_uD-oA&t=14m35s)  
*(Kattintásra megnyíló videó: Walter Lewin bemutatja, hogyan függ a gömb alakú csapágygolyók sebessége az átmérőtől sűrű kukoricaszirupban)*

A kísérlet azzal a feltételezéssel értelmezhető helyesen, hogy a golyóra lefelé ható erők egyensúlyba kerülnek a felfelé mutató közegellenállási erővel. Ez az az erő, amelyet a folyadék a belső súrlódása miatt fejt ki a mozgó testre, fékezve a golyó zuhanását. Ha az erők egyensúlyba kerültek, a test egyenletes mozgást végez.

George Gabriel Stokes 1851-ben vezette le a közegellenállási erő törvényét a kísérletben vizsgalt esetre, elméleti úton, a szintén nevét viselő Navier–Stokes-egyenletekből. Eredménye a **Stokes-törvény**:

$$
F_s = 6\pi\eta r u
$$

Itt $u$ az áramlás (vagy a test) sebessége, $r$ a gömb sugara, és $\eta$ a folyadék dinamikus viszkozitása.

Fontos megjegyezni, hogy a törvény kizárólag lamináris áramlásra érvényes, amikor a Reynolds-szám jóval kisebb 1-nél. A képlet csak tökéletes gömb mozgására vonatkozik, és a gömbnek távol kell lennie a folyadékot tartó edény falaitól, hogy a visszaáramlás ne zavarja meg a tiszta profilt.

### Szimuláció

[Stokes-törvény interaktív fizikai szimuláció](https://alexerdei73.github.io/physics-engine/project#b38f050f-a404-4d02-82ad-959009d1ce05)

A szimuláció megmutatja, hogy a sebesség hogyan éri el a végsebesség értékét az indítás pillanatától kezdve. Látható, hogy a kisebb gömb mindössze egy egységnyi távolságot fut be, mialatt a kétszer akkora átmérőjű, nagyobb gömb pontosan négy egységet tesz meg. Ez bizonyítja, hogy a nagyobb gömb négyszeres végsebességet ér el. 

A folyadék közegellenállását a szimulációban egy tisztán viszkózus szállal jelenítjük meg, amely vizuálisan is láthatóvá teszi a fékezőhatást. A futás végén az alábbi sebesség-idő grafikont jeleníthetjük meg:

![Sebesség-idő grafikon viszkózus folyadékba ejtett golyó esetén](Kepek/stokestorvenysebessegido.png)

A diagram pontosan igazolja, hogy a kétszer akkora átmérőjű golyó négyszeres végsebességre gyorsul fel ugyanolyan körülmények között.

### A végsebesség levezetése

Számítsuk ki a végsebességet a Stokes-törvény alapján! Egyenletes mozgás közben a folyadékban fellépő $F_s$ közegellenállási erő és az $F_f$ felhajtóerő összege tart hajszálpontosan egyensúlyt a test $G$ súlyával:

$$
m_{\text{test}}g = 6\pi\eta r u + \rho_f V g
$$

$$
m_{\text{test}}g - \rho_f V g = 6\pi\eta r u
$$

Fejezzük ki a test tömegét a sűrűséggel ($m_{\text{test}} = \rho_t V$), majd osszuk el mindkét oldalt a $V$ térfogattal:

$$
\rho_t g - \rho_f g = \frac{6\pi\eta r u}{V}
$$

Írjuk be a $V$ helyére a gömb geometriai térfogatképletét ($V = \frac{4}{3}\pi r^3$):

$$
(\rho_t - \rho_f)g = \frac{6\pi\eta r u}{\frac{4}{3}\pi r^3} = \frac{18\pi\eta r u}{4\pi r^3}
$$

Egyszerűsítés után megkapjuk az összefüggést:

$$
(A_t - \rho_f)g = \frac{9\eta u}{2r^2}
$$

Ebből a mérések során az $u$ végsebességet, vagy ismeretlen folyadékok esetén az $\eta$ viszkozitást szoktuk kiszámítani:

$$
u = \frac{2r^2(\rho_t - \rho_f)g}{9\eta}
$$

Eredményünk elméletileg is világosan mutatja, hogy az $u$ végsebesség a sugár (vagy az átmérő) **négyzetével** ($r^2$) arányos. Ez a magyarázata annak, hogy a kétszer akkora golyó miért pontosan négyszer akkora sebességgel süllyed a szirupban.

### Példák

1. Számítsuk ki Walter Lewin kísérleti adataiból a szirup viszkozitását és az áramlás Reynolds-számát!

Mérési adatok a legkisebb csapágygolyóra:

$$
\begin{aligned}
d &= 1/8\text{ inch} = 0{,}3175\text{ cm} = 3175 \cdot 10^{-3}\text{ m} \\
r &= \frac{d}{2} = 0{,}15875\text{ cm} = 1{,}5875 \cdot 10^{-3}\text{ m} \\
\rho_f &= 1380\text{ kg/m}^3 \quad \text{(szirup sűrűsége)} \\
\rho_t &= 7800\text{ kg/m}^3 \quad \text{(acélgolyó sűrűsége)} \\
h &= 4\text{ cm} = 0{,}04\text{ m} \quad \text{(a mért süllyedési útszakasz)} \\
t &= 5{,}8\text{ s} \quad \text{(a süllyedési idő)} \\
u &= \frac{h}{t} = \frac{0{,}04}{5{,}8} = 0{,}006897\text{ m/s}
\end{aligned}
$$

Helyettesítsük be az adatokat a végsebesség átrendezett egyenletébe:

$$
\eta = \frac{2r^2(\rho_t - \rho_f)g}{9u} = \frac{2 \cdot (1{,}5875 \cdot 10^{-3})^2 \cdot (7800 - 1380) \cdot 9{,}81}{9 \cdot 0{,}006897} = 5{,}11\text{ Pa}\cdot\text{s}
$$

Számítsuk ki az áramlásra jellemző Reynolds-számot:

$$
Re = \frac{\rho_f d u}{\eta} = \frac{1380 \cdot 3{,}175 \cdot 10^{-3} \cdot 0{,}006897}{5{,}11} = 0{,}00591
$$

Mivel a kapott Reynolds-szám nagyságrendekkel kisebb 1-nél ($Re \ll 1$), a Stokes-féle elmélet alkalmazása erre a kísérletre teljesen jogos és hajszálpontos.

2. Mutassuk meg, hogy a folyadékban mozgó gömb esetén a Reynolds-szám nem más, mint a gömb térfogatával egyező folyadéktömeg $u$ sebességre gyorsításához szükséges tehetetlenségi erő, és a viszkózus közegellenállási erő hányadosa (amennyiben a gyorsítás a gömb $d$ átmérőjének megfelelő hosszon történik, eltekintve egy tiszta geometriai állandótól)!

A gyorsításhoz szükséges tehetetlenségi erőt a munkatételből ($W = \Delta E_m$) számíthatjuk ki:

$$
F_t \cdot d = \frac{1}{2} m_f u^2 = \frac{1}{2} \left(\rho_f \cdot \frac{4r^3\pi}{3}\right) u^2
$$

Mivel $d = 2r$, helyettesítsük be, és fejezzük ki a tehetetlenségi erőt:

$$
F_t \cdot (2r) = \frac{2}{3} \pi \rho_f r^3 u^2 \implies F_t = \frac{\pi \rho_f r^2 u^2}{3}
$$

A közegellenállási erőt a Stokes-törvény adja meg ($F_s = 6\pi\eta r u$). Nézzük meg a két erő számszerű hányadosát:

$$
\frac{F_t}{F_s} = \frac{\frac{1}{3}\pi \rho_f r^2 u^2}{6\pi \eta r u} = \frac{1}{18} \frac{\rho_f r u}{\eta}
$$

Mivel a gyári Reynolds-számban a sugár helyett az átmérő szerepel ($d = 2r$, azaz $r = d/2$):

$$
\frac{F_t}{F_s} = \frac{1}{18} \frac{\rho_f \left(\frac{d}{2}\right) u}{\eta} = \frac{1}{36} \frac{\rho_f u d}{\eta} = \frac{1}{36} Re
$$

Ez az eredmény bizonyítja, hogy a Reynolds-szám (egy geometriai szorzótól eltekintve) valóban a tehetetlenségi hatások és a viszkózus erők fizikai arányát tükrözi.

---

## Feladatok

1. A tiszta őszi levegőben egy parányi, gömb alakú ködcsepp süllyed egyenletes sebességgel. A csepp sugara $r = 15\text{ }\mu\text{m}$ ($15 \cdot 10^{-6}\text{ m}$), a víz sűrűsége $\rho_{\text{víz}} = 1000\text{ kg/m}^3$. A levegő dinamikus viszkozitása a mérés napján $\eta = 1{,}8 \cdot 10^{-5}\text{ Pa}\cdot\text{s}$, a nehézségi gyorsulás pedig $g = 9{,}81\text{ m/s}^2$. Számítsd ki a ködcsepp egyenletes süllyedési végsebességét! (A levegő felhajtóereje a parányi sűrűsége miatt elhanyagolható).

2. Egy orvosi laboratóriumban vörösvértesteket ülepedését vizsgálják egy vizes alapú tesztfolyadékban ($\rho_f = 1000\text{ kg/m}^3$, $\eta = 0{,}001\text{ Pa}\cdot\text{s}$). A vörösvértesteket a számításhoz tekintsük tökéletes gömböknek, melyek sugara $r = 3\text{ }\mu\text{m}$, sűrűségük pedig $\rho_t = 1100\text{ kg/m}^3$. A kémcsövet egy centrifugába helyezik, ahol a mesterséges nehézségi gyorsulás a földi $g$ értékének pontosan az ötszázszorosa ($g_{\text{centrifuga}} = 500 \cdot 9{,}81\text{ m/s}^2$). Mekkora egyenletes kiülepedési sebességgel mozognak a sejtek a folyadékban a centrifuga működése közben, ha feltételezzük, hogy a mozgásra érvényes a Stokes-törvény?

3. Egy zárt gépészeti berendezésben $20\text{ }^{\circ}\text{C}$-os 5W-30-as motorolaj található, melynek sűrűsége $\rho_{\text{olaj}} = 850\text{ kg/m}^3$, dinamikus viszkozitása a leckében szereplő táblázat alapján $\eta = 0{,}175\text{ Pa}\cdot\text{s}$. Az olajban egy parányi, $d = 2\text{ mm}$ átmérőjű, gömb alakú légbuborék keletkezik, amely a felhajtóerő hatására elindul felfelé. A levegő sűrűsége a buborékban elhanyagolható ($0\text{ kg/m}^3$), a nehézségi gyorsulás $g = 9{,}81\text{ m/s}^2$. Számítsd ki a buborék egyenletes emelkedési sebességét az olajban, majd a kapott eredmény alapján ellenőrizd a Reynolds-szám kiszámításával, hogy valóban teljesül-e a Stokes-törvény érvényességi feltétele ($Re < 1$)!
