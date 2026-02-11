# A tökéletesen rugalmatlan ütközés

## A tökéletesen rugalmatlan ütközés fogalma

Tökéletesen rugalmatlan az ütközés, ha a testek az ütközés után együtt mozognak. Ezen ütközéseknél a mechanikai energia nem marad meg, sőt a mechanikaienergia-veszteség a lehető legnagyobb. Az összimpulzus (lendület) természetesen ebben az esetben is megmarad.

### Szimuláció

[Tökéletesen rugalmatlan, centrális ütközés](https://alexerdei73.github.io/physics-engine/project/#8fb6472a-0612-4261-a3c6-468de892e9b9)

Az ütközés utáni sebesség könnyen megkapható a lendület megmaradásából:


$$
m_1v_{1,0} + m_2v_{2,0} = (m_1 + m_2)v
$$



$$
v = \frac {m_1v_{1,0} + m_2v_{2,0}} {m_1 + m_2}
$$


Ezzel a formulával már találkoztunk a ballisztikus inga esetében. Az az ütközés pontosan az itt tárgyalt esetnek felel meg.

### Példa

Egy $v_0$ sebességű, $m$ tömegű test centrálisan, de tökéletesen rugalmatlanul ütközik egy másik $m$ tömegű, de kezdetben nyugvó testtel. Mekkora a közös sebességük az ütközés után? Számítsuk ki a mechanikaienergia-veszteséget!

A lendületmegmaradás:

$$
mv_0 = 2mv
$$



$$
v = \frac {v_0} {2}
$$


Tehát a közös sebesség a kezdősebesség fele.

Az energiaváltozás:

$$
\Delta E_m = E_{m, \text{vég}} - E_{m, \text{kezdet}}
$$



$$
\Delta E_m = \frac {2mv^2} {2} - \frac {mv_0^2} {2} = \frac {2m (\frac {v_0} {2})^2 - mv_0^2} {2}
$$



$$
\Delta E_m = \frac {2m \frac{v_0^2}{4} - mv_0^2} {2} = \frac {\frac{1}{2}mv_0^2 - mv_0^2} {2} = - \frac {mv_0^2} {4} = - \frac {E_{m,0}} {2}
$$


A teljes kiindulási energia fele a belső energiát növeli (disszipálódik, hővé alakul).

## A szumma (összegzési) jel

A továbbiakban szükségünk lesz $N$ tagú összegek rövid jelölésére. Például összeadhatjuk a természetes számokat 1-től $N$-ig:


$$
1 + 2 + 3 + ... + N = \sum_{i = 1}^{N} i
$$


A jobb oldali kifejezés pontosan azt jelenti, ami a bal oldalon van leírva, csak lényegesen rövidebb. Úgy kell értelmezni, hogy $i$ felveszi az $1, 2, 3, \dots, N$ értékeket, amit minden egyes értékre be kell helyettesíteni a szumma jel után álló kifejezésbe (ami esetünkben csak $i$). Szóval $i = 1$-re 1, aztán $i = 2$-re 2, és így tovább. Az így kapott kifejezéseket össze kell adni. Ezáltal megkapjuk a bal oldalon álló összeget. Ez nagyon hosszú is lehet, ha pl. $N = 1000$. Ekkor 1000 tagú az összeg, ezt rövidítettük a „...” jelöléssel a bal oldalon. A szumma jel ennek még rövidebb alakja. A jobb oldalt így olvassuk: *"Szumma i egytől N-ig i"*.

## A tömegközéppont

A közös sebesség, melyet a tökéletesen rugalmatlan ütközés esetén kapunk, a tömegközéppont sebessége. Két pontra tehát a tömegközéppont sebessége nem más, mint a két pont sebességeinek tömegeikkel súlyozott átlaga.


$$
\vec {v}_{TKP} = \frac {m_1\vec v_1 + m_2\vec v_2} {m_1 + m_2}
$$


A tömegközéppont sebessége akárhány tömegpontra is értelmezhető:


$$
\vec {v}_{TKP} = \frac {\sum_{i = 1}^{N} m_i\vec{v_i}} {M}
$$


Ahol $M$ a rendszer össztömege:

$$
M = \sum_{i = 1}^{N} m_i
$$


Az összefüggés szumma jel nélkül is felírható, csak kissé hosszabb:


$$
\vec {v}_{TKP} = \frac {m_1\vec v_1 + m_2\vec v_2 + ... + m_N\vec v_N} {m_1 + m_2 + ... + m_N}
$$


Hol helyezkedik el maga a tömegközéppont? Először nézzük meg a 2 tömegpontból álló rendszert, majd általánosítsunk!


$$
x_{TKP} = \frac {m_1x_1 + m_2x_2} {m_1 + m_2}
$$



$$
y_{TKP} = \frac {m_1y_1 + m_2y_2} {m_1 + m_2}
$$


> **A tömegközéppont koordinátái a tömegpontok koordinátáinak a tömegeikkel súlyozott átlagai.**

Nézzük meg a sebesség x komponenset a koordináták változásából ($v_x = \Delta x / t$):


$$
v_{TKP,x} = \frac {x_{TKP} - x_{TKP,0}} {t} = \frac {\frac {m_1x_1 + m_2x_2} {m_1 + m_2} - \frac {m_1x_{1,0} + m_2x_{2,0}} {m_1 + m_2}} {t}
$$



$$
v_{TKP,x} = \frac {m_1x_1 + m_2x_2 - m_1x_{1,0} - m_2x_{2,0}} {(m_1 + m_2)t} = \frac {m_1 \frac {x_1 - x_{1,0}} {t} + m_2 \frac {x_2 - x_{2,0}} {t}} {m_1 + m_2}
$$



$$
v_{TKP,x} = \frac {m_1v_{1,x} + m_2v_{2,x}} {m_1 + m_2}
$$


$v_{TKP,y}$-ra teljesen hasonlóan kapjuk a megfelelő összefüggést. Ezzel igazoltuk is a $\vec v_{TKP}$-ra vonatkozó képletet két tömegpontból álló rendszerre. Az általánosítás teljesen hasonló, csak a képleteket szumma jellel írjuk fel $N$ tömegpontra, és úgy végezzük az algebrai műveleteket.


$$
x_{TKP} = \frac {\sum_{i = 1}^{N} m_ix_i} {M}
$$



$$
v_{TKP,x} = \frac {x_{TKP} - x_{TKP,0}} {t} = \frac {\frac {\sum_{i = 1}^{N} m_ix_i} {M} - \frac {\sum_{i = 1}^{N} m_ix_{i,0}} {M}} {t}
$$



$$
v_{TKP,x} = \frac {\sum_{i = 1}^{N} (m_ix_i - m_ix_{i,0})} {Mt} = \frac {\sum_{i = 1}^{N} m_i \frac {x_i - x_{i,0}} {t}} {M}
$$



$$
v_{TKP,x} = \frac {\sum_{i = 1}^{N} m_iv_{i,x}} {M}
$$


A szumma jel alatti tagokban kiemeltük az $m_i$ tömeget, majd minden tagot beszoroztunk $\frac {1} {t}$-vel. Ezt megtehetjük, mivel a szumma jel összegzést jelent, és az összeg tagjait beszorozhatjuk a közös tényezővel, ahogy ezt megszoktuk. Így el is jutottunk az általános eredményhez, mely tetszőleges $N$ tömegpontból álló pontrendszerre érvényes.

>**A tömegközéppont sebessege a tömegpontok sebessegeinek a tömegeikkel súlyozott átlaga.**

### Példa
Legyen az első tömegpont tömege $0,1\,kg$ és a másodiké is ugyanennyi. Mindkét pont az $x$ tengelyen helyezkedik el, kezdetben $x_{1,0} = 0$ és $x_{2,0} = 3\,m$. Hol helyezkedik el a tömegközéppont? Mekkora a tömegközéppont sebessége ekkor, ha az első test sebessége $1\,\frac {m} {s}$ és a második test nyugalomban van? Mekkora a tömegközéppont sebessége ütközés után? Mekkora a testek közös sebessége, ha az ütközés tökéletesen rugalmatlan?


$$
x_{TKP,0} = \frac {m_1x_{1,0} + m_2x_{2,0}} {M} = \frac {0,1 \cdot 0 + 0,1 \cdot 3} {0,2} = 1,5\,m
$$


A tömegközéppont a két egyenlő tömegű pont által meghatározott szakasz felezőpontja az $x$ tengelyen.


$$
v_{TKP,x} = \frac {m_1v_{1,x} + m_2v_{2,x}} {M} = \frac {0,1 \cdot 1 + 0} {0,2} = 0,5\,\frac {m} {s}
$$


Ütközés után a tömegközéppont sebességét veszi fel mindkét test. A tömegközéppont sebessége nem változik az ütközés alatt (mivel a külső erők eredője nulla).

---

## Feladatok

1. Egy $10\,000 \text{ kg}$ tömegű vasúti kocsi $2 \text{ m/s}$ sebességgel gurul a síneken, és nekiütközik egy álló, $15\,000 \text{ kg}$ tömegű kocsinak. Az ütközés során a kocsik összekapcsolódnak.
a) Mekkora lesz a szerelvény közös sebessége?
b) Mennyi mechanikai energia veszett el (alakult hővé és deformációvá) az ütközés során?

2. Három test mozog egy súrlódásmentes asztalon.
- 1. test: $m_1 = 2 kg$, $v_1 = 4 \frac {m} {s}$ (jobbra)
- 2. test: $m_2 = 3 kg$, $v_2 = -2 \frac {m} {s}$ (balra)
- 3. test: $m_3 = 5 kg$, $v_3 = 0$ (áll)
Számítsa ki a rendszer tömegközéppontjának sebességét! Ha ezek a testek mind összeütköznének és összetapadnának egy pontban, mekkora lenne a keletkező "óriástest" sebessége?

3. Egy $1000 kg$ tömegű műhold kering a Föld körül, amikor egy $50 kg$ tömegű meteorit csapódik bele. A becsapódás előtt a műhold sebessége $7000 \frac {m} {s}$ volt, a meteorit pedig szemből érkezett $15000 \frac {m}{s}$ sebességgel. A meteorit belefúródik a műholdba (tökéletesen rugalmatlan ütközés). Mekkora lesz a roncs sebessége közvetlenül az ütközés után?