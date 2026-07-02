# Lamináris áramlások II.

## A Hagen–Poiseuille-törvény

### Kísérlet

[16 cső egyenértékű egyetlen kétszer olyan vastag csővel](https://www.youtube.com/watch?v=wn6eRMIOJ1k)

A kísérletben látható, hogy a csőben az áramlás fenntartásához nyomáskülönbség szükséges. A kísérlet elején feltöltik a tartályokat, így a hidrosztatikai nyomás fogja a folyadékot a csövön átpréselni a folyadéksúrlódás ellenében. Az is látható továbbá, hogy a tartályokból a folyadék pontosan ugyanannyi idő alatt folyik ki. Az egyik tartály 16 vékony csövön át ürül ki, a másik tartály viszont csak egyetlen csövön keresztül. 

Az egycsöves tartály esetében a cső belső átmérője pontosan kétszer olyan vastag, mint a másik tartály egyedi csöveinek vastagsága. Ebből arra következtethetünk, hogy az időegység alatt átfolyó folyadéktérfogat a cső sugarának vagy átmérőjének a 4. hatványával arányos, hiszen egy kétszer olyan vastag cső, ugyanolyan körülmények között, 16-szor annyi folyadékot szállít ($2^4 = 16$), mint egyetlen, egységnyi vastagságú cső.

Jelöljük $Q$-val az időegység alatt átfolyó folyadék térfogatát, amelyet a továbbiakban **térfogatáram** néven fogunk emlegetni. Ekkor az alábbi összefüggés írható fel a nyomáskülönbség és a térfogatáram között:

$$
Q = \frac{\pi r^4}{8\eta l} \Delta p
$$

Ez az összefüggés olyan hengeres alakú, egyenes csövekre érvényes, amelyek hossza jóval nagyobb, mint a belső átmérőjük. Az áramlásnak szigorúan laminárisnak kell lennie, ami a gyakorlatban azt jelenti, hogy a Reynolds-szám jóval kisebb, mint 2300. A képletben $r$ a cső belső sugara, $\eta$ a folyadék dinamikus viszkozitása, $l$ pedig a vizsgált csőszakasz hossza, amelynek két vége között $\Delta p$ nyomáskülönbség lép fel, hogy a stacionárius, lamináris áramlás kialakulhasson.

Az összefüggést eredetileg kísérleti úton határozták meg, de később elméletileg is levezették az áramlások Navier–Stokes-alapegyenletéből. A levezetés során feltételezik, hogy a cső falánál a folyadék sebessége pontosan nulla, vagyis a folyadék legalsó rétege gyakorlatilag „hozzátapad” a cső falához. Ez a feltétel teljesen általánosan érvényes a súrlódásos áramlások esetén, a neve **tapadási feltétel (no-slip condition)**. 

Az áramlási sebesség a cső legközepén (a tengelyében) a legnagyobb. A matematikai levezetésből az is kiderül, hogy a kialakuló sebességprofil parabolikus, vagyis egy másodfokú függvény írja le a sebesség változását a cső tengelyétől mért sugár függvényében. Ezt az alábbi látványos kísérletben is megfigyelhetjük:

### Kísérlet

[A parabolikus sebességprofil demonstrációja](https://www.youtube.com/watch?v=vhDaCZZ0Sc4&t=117s)

### Példa

Egy vízszintes, $5\text{ mm}$ belső átmérőjű üvegcső hossza $2\text{ m}$. A cső egyik vége egy tartályba torkollik, amelyben a glicerin $30\text{ cm}$ magasan áll. A cső másik vége szabadon nyílik a levegőre. Számítsuk ki a csővégek közötti nyomáskülönbséget! Mekkora a térfogatáram és az átlagos áramlási sebesség? Mekkora a Reynolds-szám? Alkalmazhatjuk-e a Hagen–Poiseuille-törvényt?  
*(Adatok: A glicerin sűrűsége $\rho = 1261\text{ kg/m}^3$, dinamikus viszkozitása $\eta = 1{,}412\text{ Pa}\cdot\text{s}$, a nehézségi gyorsulás $g = 9{,}81\text{ m/s}^2$)*

A cső bemeneténél uralkodó hajtónyomást a tartályban lévő glicerin hidrosztatikai nyomása biztosítja, míg a szabad végen a nyomás nulla. A hajtó nyomáskülönbség tehát:

$$
\Delta p = \rho g h = 1261 \cdot 9{,}81 \cdot 0{,}3 = 3711\text{ Pa}
$$

A cső belső sugara az átmérő fele: $r = \frac{d}{2} = 2{,}5\text{ mm} = 2{,}5 \cdot 10^{-3}\text{ m}$. Helyettesítsük be az adatokat a Hagen–Poiseuille-törvénybe a $Q$ térfogatáram kiszámításához:

$$
Q = \frac{\pi r^4}{8\eta l} \Delta p = \frac{3{,}1416 \cdot (2{,}5 \cdot 10^{-3})^4}{8 \cdot 1{,}412 \cdot 2} \cdot 3711 = 2{,}016 \cdot 10^{-8}\text{ m}^3/\text{s}
$$

Az átlagos áramlási sebességet ($u$) úgy kapjuk meg, ha a térfogatáramot elosztjuk a cső keresztmetszeti területével ($A = \pi r^2$):

$$
u = \frac{Q}{\pi r^2} = \frac{2{,}016 \cdot 10^{-8}}{3{,}1416 \cdot (2{,}5 \cdot 10^{-3})^2} = 1{,}027 \cdot 10^{-3}\text{ m/s}
$$

Ellenőrizzük az áramlás jellegét a Reynolds-szám kiszámításával (ahol a karakterisztikus méret a $d$ belső átmérő):

$$
Re = \frac{\rho d u}{\eta} = \frac{1261 \cdot 5 \cdot 10^{-3} \cdot 1{,}027 \cdot 10^{-3}}{1{,}412} = 0{,}00459
$$

Mivel a kapott Reynolds-szám nagyságrendekkel kisebb a kritikus értéknél ($Re = 0{,}00459 \ll 2300$), az áramlás tökéletesen stacionárius és lamináris. A törvény alkalmazása teljes mértékben jogos és pontos.

## Analógia az elektromosságtan Ohm-törvényével

### Kísérlet

[Ohm-törvény](https://www.youtube.com/shorts/ewW0j5dC3J4)

Az elektromosságtanban tanulhattuk, hogy a vezetékek ellenállással rendelkeznek, és ez a fogyasztókra is igaz. Ha egy $U$ feszültségű, ideális telepre egy $R$ ellenállású fogyasztót kötünk, akkor az áramkörben állandó erősségű áram fog folyni, amely a következőképpen számítható ki:

$$
I = \frac{U}{R}
$$

Ez az összefüggés az Ohm-törvény. Ez teljesen analóg a mi hidrodinamikai összefüggésünkkel. A Hagen–Poiseuille-törvény ugyanis felírható a következő alakban is:

$$
Q = \frac{\Delta p}{R_{\text{hidr}}}
$$

Itt $R_{\text{hidr}}$ a hidrodinamikai (vagy hidraulikai) ellenállás. A $Q$ térfogatáram az $I$ elektromos áramerősséggel analóg, míg a $\Delta p$ nyomáskülönbség a telep $U$ feszültségének felel meg. 

Ez az analógia más összefüggésekre is érvényes. Például a telep által időegység alatt végzett munka (az úgynevezett elektromos teljesítmény) az elektromosságtanban a következő:

$$
P = \frac{\Delta W}{\Delta t} = U \cdot I
$$

A csőben lévő folyadékon a gravitáció (vagy egy pumpa) által időegység alatt végzett munka (a hidraulikai teljesítmény) hajszálpontosan ugyanilyen szerkezetű:

$$
P = \frac{\Delta W}{\Delta t} = \frac{F \cdot \Delta x}{\Delta t} = \frac{\Delta p \cdot R^2\pi \cdot \Delta x}{\Delta t} = \Delta p \frac{R^2\pi \cdot \Delta x}{\Delta t} = \Delta p \frac{\Delta V}{\Delta t} = \Delta p \cdot Q 
$$

Az összefüggések tehát tökéletesen megfelelnek egymásnak. A hidrodinamikai ellenállás kiszámítása a cső sugara alapján a következő:

$$
R_{\text{hidr}} = \frac{8\eta l}{\pi r^4}
$$

Az analógia azonban itt egy ponton izgalmasan kettéválik. Az elektromos ellenállás függ az anyagi minőségtől, egyenesen arányos a vezeték $l$ hosszával, valamint fordítottan arányos a vezeték keresztmetszetével, azaz a sugár négyzetével ($r^2$). A hidrodinamikai ellenállásra ez majdnem ugyanígy érvényes, de ott a nevezőben $r^2$ helyett a sugár negyedik hatványa ($r^4$) szerepel. Ennek oka, hogy míg a vezetékben az összes töltés átlagosan egyenletes sebességgel sodródik (mint egy tömb), addig a csőben folyó folyadékban a tapadási feltétel miatt parabolikus sebességeloszlás alakul ki.

---

## Az analógia fizikai magyarázata

A vezetőkben mozgó töltött részecskék (elektronok) elektromos térerő hatására sodródnak. Ezek a részecskék sem akadálytalanul mozognak a fémben. Az elektromos erő gyorsítja őket, hasonlóan a viszkózus folyadékba ejtett golyóhoz, amelyet a gravitáció gyorsít. 

Az elektronokra is egy olyan átlagos, a sodródási sebességükkel arányos fékezőerő hat, mint amilyen a viszkózus folyadékban süllyedő golyóra ható, a sebességgel arányos Stokes-féle közegellenállási erő. Amikor az elektronok elérik az egyenletes sodródási sebességet, az elektromos hajtóerő és a belső fékezőerő egyensúlyba kerül egymással:

$$
\frac{U \cdot e}{l} = \beta \cdot v_{\text{sodródás}}
$$

*   $e$: az elektron töltése ($\text{C}$)
*   $U/l$: az elektromos térerő a vezetékben ($\text{V/m}$)
*   $\beta$: az anyagszerkezetre jellemző mikroszkopikus súrlódási tényező

Ha a vezetékben térfogategységenként $n$ darab szabad elektron található, akkor az áramkörben folyó $I$ áramerősség könnyedén kiszámítható:

$$
I = \frac{\Delta Q}{\Delta t} = \frac{n \cdot r^2\pi \cdot v_{\text{sodródás}}\Delta t \cdot e}{\Delta t} = n \cdot e \cdot r^2\pi \cdot v_{\text{sodródás}}
$$

Helyettesítsük be ide a sodródási sebességre az erők egyenlőségéből kapott kifejezést:

$$
I = n \cdot e \cdot r^2\pi \cdot \frac{U \cdot e}{\beta \cdot l} = \frac{U}{\frac{\beta \cdot l}{n \cdot e^2 \cdot r^2\pi}} = \frac{U}{R}
$$

Ebből a levezetésből az $R$ elektromos ellenállásra a következő zárt formulát kapjuk:

$$
R = \frac{\beta}{n \cdot e^2} \cdot \frac{l}{r^2\pi}
$$

Hajszálpontosan megkaptuk tehát az Ohm-törvényt! A levezetésből tisztán látszik, hogy a vezeték ellenállása az $l$ hosszal egyenesen, és az $r^2\pi$ keresztmetszettel fordítottan arányos. Az arányossági tényező ($\frac{\beta}{n \cdot e^2}$) nem más, mint a fém **fajlagos ellenállása**, amely kizárólag az anyagi minőségtől függő konstansokat tartalmazza.

---

## Feladatok

1. Egy orvosi laboratóriumban $l = 50\text{ cm}$ hosszú, $d = 2\text{ mm}$ belső átmérőjű egyenes kapilláriscsövön tiszta vizet préselnek át. A víz dinamikus viszkozitása a mérés hőmérsékletén $\eta = 0{,}001\text{ Pa}\cdot\text{s}$. A cső két vége között fenntartott hajtó nyomáskülönbség $\Delta p = 2000\text{ Pa}$. Mekkora a vízáramlás $Q$ térfogatárama a csőben a Hagen–Poiseuille-törvény alapján?

2. Egy egészséges emberi verőérben az áramló vér térfogatáramát a szervezet állandó szinten tartja. Feltételezzük, hogy egy betegség (meszesedés) miatt az ér belső sugara ($r$) egy adott szakaszon az eredeti értékének pontosan a felére ($1/2$-ére) csökken, miközben a szakasz hossza és a vér viszkozitása változatlan marad. Hányszorosára növekszik a szakasz hidraulikai ellenállása a szűkülés hatására? Hányszorosára kell növekednie a két végpont közötti $\Delta p$ nyomáskülönbségnek ahhoz, hogy a szállított $Q$ térfogatáram ne csökkenjen?

3. Egy hidraulikus gépcsoport vízszinteskenőcsövének hossza $l = 4\text{ m}$, belső átmérője $d = 10\text{ mm}$. A csőben $20\text{ }^{\circ}\text{C}$-os 5W-30-as motorolaj áramlik, melynek sűrűsége $\rho = 850\text{ kg/m}^3$, dinamikus viszkozitása pedig $\eta = 0{,}175\text{ Pa}\cdot\text{s}$. A rendszerben uralkodó hajtó nyomáskülönbség $\Delta p = 2 \cdot 10^5\text{ Pa}$. Számítsd ki a csőben kialakuló $Q$ térfogatáramot és az $u$ átlagsebességet! A kapott sebesség alapján határozd meg a Reynolds-számot, és döntsd el, hogy valóban érvényes-e a Hagen–Poiseuille-törvény (azaz $Re < 2300$)?


