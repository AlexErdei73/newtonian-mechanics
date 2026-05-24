# Példák rugalmas ütközésre

## Két egymásra helyezett labda visszapattanása

### Kísérlet

[Egymásra helyezett labdák visszapattanása](https://www.youtube.com/watch?v=2UHS883_P60)

### Szimuláció

[Két egymásra helyezett labda visszapattanása](https://alexerdei73.github.io/physics-engine/project/#5f77abb4-1a91-425d-b756-096b5e3c4107)

Legyen az alsó labda 10-szer nagyobb tömegű, mint a felső labda. Számítsuk ki, mekkora sebességgel pattan vissza a felső labda, és határozzuk meg a maximális magasságát is! Legyen a kezdeti magasság $h_0$!

$$
11mgh_0 = \frac{11mv_0^2}{2}
$$

$$
2gh_0 = v_0^2
$$

Mindkét labda ezzel a $v_0$ sebességgel érkezik meg a talajhoz. Először az alsó labda pattan vissza $v_0$ nagyságú sebességgel. Ekkor ütközik a második (felső) labdával, amely ugyanekkora, de ellentétes irányú sebességgel érkezik. Tegyük fel, hogy az ütközés centrális és tökéletesen rugalmas!

$$
9mv_0 = 10mv_1 + mv_2
$$

$$
\frac{10mv_0^2}{2} + \frac{mv_0^2}{2} = \frac{10mv_1^2}{2} + \frac{mv_2^2}{2}
$$

Az első egyenletből:

$$
v_2 = 9v_0 - 10v_1
$$

A második egyenlet rövidebb alakja:

$$
11v_0^2 = 10v_1^2 + v_2^2
$$

Ide behelyettesítjük $v_2$ kifejezését:

$$
11v_0^2 = 10v_1^2 + (9v_0 - 10v_1)^2
$$

$$
11v_0^2 = 10v_1^2 + 81v_0^2 - 180v_0 v_1 + 100v_1^2
$$

A következő paraméteres másodfokú egyenletet kapjuk $v_1$-re:

$$
0 = 110v_1^2 - 180v_0 v_1 + 70v_0^2
$$

$$
0 = 11v_1^2 - 18v_0 v_1 + 7v_0^2
$$

$$
v_1 = \frac{18v_0 \pm \sqrt{324v_0^2 - 4 \cdot 11 \cdot 7v_0^2}}{2 \cdot 11} = \frac{18v_0 \pm 4v_0}{22} = v_0 \quad \text{vagy} \quad \frac{7}{11}v_0
$$

Minket a második megoldás érdekel, amit behelyettesítünk a $v_2$ kiszámítására szolgáló egyenletbe:

$$
v_2 = 9v_0 - 10 \cdot \frac{7v_0}{11} = \frac{29}{11}v_0 \approx 2,636 v_0
$$

Most, hogy megkaptuk $v_2$-t, azaz a felső labda visszapattanási sebességét, könnyen kiszámíthatjuk a labda végső magasságát:

$$
mgh = \frac{m(2,636 v_0)^2}{2}
$$

$$
h = \frac{6,950 v_0^2}{2g} \approx 6,950 h_0
$$

Tehát a felső labda az elengedési magasság csaknem 6,95-szörösére pattan fel!

## Newton-bölcső

### Kísérlet

[Newton-bölcső](https://www.youtube.com/watch?v=ofgeRSCLyXc)

### Szimuláció

[Newton-bölcső szimuláció](https://alexerdei73.github.io/physics-engine/project/#4d1b6707-6e5e-42fc-a4eb-bcdca0d2dad4)

A játék működése a legegyszerűbben tökéletesen rugalmas ütközések feltételezésével érthető meg. Ilyenkor a lendület (impulzus) és a mechanikai energia is megmarad. Tegyük fel, hogy két golyót emelünk fel, majd ejtünk le az egyik oldalon. Ekkor a kezdeti energia:

$$
E_{\text{m},0} = \frac{2mv_0^2}{2} = mv_0^2
$$

A kezdeti lendület:

$$
I_0 = 2mv_0
$$

A rendszer másik végén pontosan ugyanekkora energiának és lendületnek kell megjelennie, hogy mindkét megmaradási törvény teljesüljön. Lehetséges-e, hogy csak egy golyó emelkedik fel?

A lendületmegmaradás miatt:

$$
I_0 = I
$$

$$
2mv_0 = mv
$$

$$
v = 2v_0
$$

Az egyetlen felemelkedő golyó sebessége kétszer akkora lenne, mint amekkora sebességgel a két golyó becsapódott. Az energia ekkor így alakulna:

$$
E_{\text{m}} = \frac{mv^2}{2} = \frac{4mv_0^2}{2} = 2mv_0^2
$$

Ez nem lehetséges, mert az energia megduplázódna:

$$
E_{\text{m}} = 2E_{\text{m},0}
$$

Lehetséges-e az, hogy három golyó emelkedjen fel? Ez esetben a sebesség:

$$
2mv_0 = 3mv
$$

$$
v = \frac{2}{3}v_0 \approx 0,6667 v_0
$$

A mechanikai energia ekkor:

$$
E_{\text{m}} = \frac{3m(0,6667 v_0)^2}{2} \approx 0,6667 mv_0^2 = 0,6667 E_{\text{m},0}
$$

Ha három golyó pattanna fel, akkor az energia harmada elveszne, így ez sem lehetséges. Tehát pontosan ugyanannyi golyó pattan fel a túloldalon, ahányat eredetileg kilendítettünk.

Van még egy nagyon fontos tényező, amit ritkán említenek a játék működésének magyarázatakor: a golyóknak teljesen azonosaknak, elsősorban egyenlő tömegűeknek kell lenniük. Láttuk, hogy ez a feltétele annak, hogy a centrális, tökéletesen rugalmas ütközés során az álló golyó teljes egészében átvehesse a mozgó golyó energiáját és lendületét. Szimulációval könnyen kipróbálható, hogy a játék mozgása felborul, ha valamelyik golyó tömege eltér a többitől. Ilyenkor a rendszer elveszíti azt a szép, szabályos ritmusát, amit megszoktunk.

## Feladatok

1. Két egymásra helyezett labdát $h_0$ magasságból ejtünk le. Az alsó labda tömege $M$, a felső labdáé $m$. A talajjal és az egymással való ütközések tökéletesen rugalmasak és centrálisak.
    * Mutasd meg, hogy a felső labda visszapattanási sebessége:
    
    $v_{\text{felső}} = \frac{3M - m}{M + m} v_0$
    
    ahol
    
    $v_0 = \sqrt{2gh_0}$
    
    * Határozd meg, mekkora magasságra pattan vissza a felső labda!
    * Vizsgáld meg a határesetet, amikor $M \gg m$! Mit tapasztalsz?

2. Egy Newton-bölcsőben 5 azonos tömegű golyó van. Kettőt az egyik oldalon $h_0$ magasságba emelünk és elengedünk.
    * Mutasd meg a lendület- és energiamegmaradás törvényével, hogy pontosan két golyó fog kilendülni a másik oldalon!
    * Mekkora sebességgel indulnak el?
    * Mi történne, ha a középső golyó tömege kétszer akkora lenne, mint a többié? Működne-e ugyanígy a rendszer? Indokold a válaszodat!
