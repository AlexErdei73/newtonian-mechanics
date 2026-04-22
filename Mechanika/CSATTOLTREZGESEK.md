# Csatolt rezgések

## Kísérlet

[Csatolt rezgések légpárnás sínen](https://www.youtube.com/shorts/71qpMFz4QPU)

## Szimuláció

[Csatolt rezgések](https://alexerdei73.github.io/physics-engine/project/#b1063662-b2d3-414e-92b8-83432592bea3)

A szimuláció esetében nagyon tisztán látható a kísérletben is bemutatott jelenség. A különbség az, hogy míg a kísérletben három egyforma rugó van, itt a középső rugó igen gyenge. Tehát két szimmetrikus rugóra kötött, rezgésre képes test össze van kötve egy igen gyenge rugóval, ezáltal egy igen gyenge csatolást létesítünk a két tömegpont között. 

A szimuláció párhuzamosan mutatja be a rezgő rendszer normálrezgéseit. Ezekből most kettő van, mivel a rendszernek két szabadsági foka (koordinátája) van. Az első test kitérése és a második test kitérése a rendszer koordinátái, melyek időben változhatnak. Az első normálrezgés esetén a testek azonos fázisban rezegnek, mindkettő ugyanazzal a frekvenciával. A második normálrezgés esetén a két test ellentétes fázisban rezeg, szintén ugyanolyan frekvenciával. A második normálmódus frekvenciája nagyobb, mint az első normálrezgésé. Ez lényeges lesz. Ezek a frekvenciák most is a rendszer rezonanciafrekvenciái.

Ha bármely pillanatban megállítjuk a szimulációt, megállapíthatjuk, hogy az első normálrezgés esetén az első test előjeles kitérését összeadva a második normálrezgés esetében az első test kitérésével, megkapjuk az első test kitérését a harmadik esetben, ami nem normálrezgést mutat. Ezt ellenőrizzük is!

### Példa
A szimulációt megállítottuk a $t = 10,7688$ s-kor. A szimulációban a 9-es test x-koordinátáját kell leolvasnunk, majd kivonjuk az egyensúlyi $2$ m-t, így kapjuk az 1-es test kitérését az I. normálmódusban.


$$
x_{I, 1} = 1,8754 - 2 = -0,1246\text{ m}
$$


A második normálmódusban hasonlóan kapjuk az 1-es test kitérését, csak most a szimulációban az 5-ös test x-koordinátáját olvassuk le.


$$
x_{II, 1} = 2,4903 - 2 = 0,4903\text{ m}
$$


Végül az 1-es test kitérése a kombinált rezgésben a szimulációban is az 1-es test x-koordinátájából kapható meg.


$$
x_1 = 2,3657 - 2 = 0,3657\text{ m}
$$


Most már valóban láthatjuk, hogy az alábbi összefüggés érvényes a kiválasztott pillanatban. 


$$
x_1 = x_{I,1} + x_{II,1} = -0,1246 + 0,4903 = 0,3657\text{ m}
$$


Ez az összefüggés az adott kezdeti feltételek esetén kialakuló rezgésre bármely pillanatban érvényes. Hasonló összefüggés érvényes a 2-es testre is.


$$
x_2 = x_{I,2} + x_{II,2}
$$


Ezeknek az összefüggéseknek a bizonyítását most nem fogjuk elvégezni. Ennek oka, hogy ehhez a mozgásegyenletet kellene megoldani, de ez egy olyan számítás, amit meghagyunk a felsőbb matematikai ismeretek elsajátítása utánra.

## A lebegés

### Kísérletek

[Lebegés hangvillákkal](https://www.youtube.com/shorts/_bV_mEakQ7o)

[Azonos irányú rezgések összetétele](https://www.youtube.com/watch?v=e2YRtEMvFiQ)

### Azonos irányú rezgések összetétele

Legyen az $x$ kitérés két harmonikus rezgés, $x_I$ és $x_{II}$ összege. Ezek frekvenciája eltérő lehet.


$$
x_I = A\cos(\omega_I t)
$$



$$
x_{II} = A\cos(\omega_{II} t)
$$


Az eredő rezgés a következő:


$$
x = x_I + x_{II}
$$


Ahhoz, hogy ezt átalakíthassuk, szükségünk lesz néhány trigonometriai azonosságra.


$$
\cos(\alpha + \beta) = \cos\alpha \cos\beta - \sin\alpha \sin\beta
$$



$$
\cos(\alpha - \beta) = \cos\alpha \cos\beta + \sin\alpha \sin\beta
$$


Ha most ezt a két azonosságot összeadjuk, akkor megkapjuk, amire szükségünk lesz.

$$
\cos(\alpha + \beta) + \cos(\alpha - \beta) = 2\cos\alpha \cos\beta
$$

Először meghatározzuk $\alpha$ és $\beta$ értékeit úgy, hogy alkalmazhassuk az azonosságot.


$$
\alpha + \beta = \omega_{II}t
$$



$$
\alpha - \beta = \omega_I t
$$


Ezeket összeadva és kivonva könnyen megkaphatjuk $\alpha$ és $\beta$ értékeit.


$$
\alpha = \frac {\omega_{II} + \omega_I} 2 t
$$



$$
\beta = \frac {\omega_{II} - \omega_I} 2 t
$$


Ezeket felhasználva a következő eredményekre jutunk:


$$
x = x_I + x_{II} = A\cos(\omega_I t) + A\cos(\omega_{II}t) = A(\cos(\omega_I t) + \cos(\omega_{II} t))
$$

$$
x = 2A\cos\alpha \cos\beta
$$


A végeredmény pedig a következő, ha beírjuk $\alpha$ és $\beta$ értékeit:


$$
x = 2A\cos\left(\frac {\omega_{II} + \omega_I} 2 t\right)\cos\left(\frac {\omega_{II} - \omega_I} 2 t\right)
$$


Ez a rezgés $\alpha$ (átlag) frekvenciájú, de amplitúdója a kisebb, $\beta$ frekvenciával oszcillál, pont úgy, ahogy a kísérletekben is láttuk.

### Lebegés a rezonanciakísérletnél

Ezt a jelenséget már megfigyelhettük, amikor a rezonanciát vizsgáltuk. Ott is fellépett, amikor a kényszerrezgés frekvenciája közel megegyezett a rendszer sajátfrekvenciájával, de nem volt pontosan egyenlő. Ennek oka, hogy a szabadrezgés frekvenciája (a sajátfrekvenciájú rezgés is) felléphet a kezdeti feltételektől függően, és ez adódik össze a kényszerrezgéssel, mely kissé eltérő frekvenciájú. A lebegés ott idővel elhal, mivel a szabadrezgés időben csillapodó, tehát elegendően hosszú idő után csak a kényszerrezgés marad meg. Úgy mondjuk az ilyen elhaló jelenséget, hogy *tranziens*. Tehát a lebegés a rezonanciakísérletnél egy tranziens jelenség.

## A szimuláció magyarázata

A szimulációban $A = 0,5$ m. Az $\omega_{II}$ és $\omega_I$ körfrekvenciák is meghatározhatók az adatokból. A szélső rugókra $D_1 = 0,5$ N/m, a középső rugóra $D_2 = 0,05$ N/m. A testek tömege $m = 0,2$ kg. Nézzük az 1-es test mozgását!

A normálmódusok:


$$
x_{I,1} = x_{I,2} = A\cos(\omega_I t)
$$



$$
x_{II,1} = -x_{II,2} = A\cos(\omega_{II}t)
$$


Így az


$$
x = x_{I,1} + x_{II,1}
$$


összefüggés pontosan azt jelenti, hogy a lebegéskor kapott képlet lesz érvényes az 1-es test kitérésére. 

### Példa
Mikor válik az 1-es test amplitúdója nullává? 

Ennek a kérdésnek a megválaszolásához meg kell határoznunk a körfrekvenciákat!

Az első (azonos fázisú) módusban a középső rugó hossza nem változik, így csak a külső rugók hatnak a testekre:


$$
\omega_I^2 = \frac {D_1} m = \frac {0,5} {0,2} = 2,5
$$



$$
\omega_I = \sqrt {2,5} = 1,5811\text{ rad/s}
$$


A másik körfrekvencia meghatározása kissé nehezebb. Vegyük észre, hogy a középső rugó közepe a $II$-es normálmódusban mozdulatlan! Ha az 1-es test kitérése $x$, akkor a második rugó megnyúlása (vagy összenyomódása) $2x$ a szimmetria miatt. Ennek a belső rugónak az ereje a nyugalmi helyzet felé mutat, tehát **hozzáadódik** a külső rugó visszatérítő erejéhez. A mozgásegyenlet a következő lesz:


$$
ma = F_{e,x} = -D_1x - 2D_2x = -(D_1 + 2D_2)x
$$



$$
a = - \frac {D_1 + 2D_2} m x
$$


Ez alapján tehát:


$$
\omega_{II}^2 = \frac {D_1 + 2D_2} m = \frac {0,5 + 2 \cdot 0,05} {0,2} = \frac {0,6} {0,2} = 3
$$



$$
\omega_{II} = \sqrt {3} = 1,7321\text{ rad/s}
$$


A lebegés körfrekvenciája (az amplitúdó modulációjának frekvenciája):


$$
\beta = \frac {\omega_{II} - \omega_I} 2 = \frac {1,7321 - 1,5811} 2 = 0,0755\text{ rad/s}
$$


A periódusidő:


$$
T = \frac {2\pi} {\beta} = \frac {2 \cdot 3,1415} {0,0755} = 83,22\text{ s}
$$


Az első minimum a negyed periódusnál van, azután pedig félperiódusonként csökken az amplitúdó nullára.

## Érdekesség: Energiaáramlás más formákban (Kitekintés)

A csatolt rezgéseknél megfigyelt jelenség – miszerint az energia periodikusan vándorol a rendszer különböző részei vagy mozgásformái között – nem csak a lineáris rugóknál figyelhető meg. 

[Steve Mould: Paraméteres rezonancia és módusváltás (Videó)](https://www.youtube.com/watch?v=MUJmKl7QfDU)

[Rugós inga módusváltása (Szimuláció)](https://alexerdei73.github.io/physics-engine/project/#a3802550-a697-495b-a39e-de8a9bf5bab8)

A videóban és a szimulációban egy rugóra kötött ingát láthatunk. Ha a rendszert csak függőlegesen megrezegtetjük, egy idő után a fel-le mozgás teljesen leáll, és a test elkezd oldalirányban lengeni, majd a lengés csillapodásával újra elindul a függőleges rezgés. 

Bár ennek a rendszernek a matematikája sokkal bonyolultabb (ún. paraméteres rezonanciáról és nemlineáris csatolásról beszélünk), a fizikai lényeg ugyanaz, mint amit a kiskocsiknál kiszámoltunk: a rendszernek két, egymáshoz közeli frekvenciájú normálmódusa van (a függőleges rezgés és az oldalirányú lengés), és a köztük lévő apró csatolás miatt a mechanikai energia lassan, "lebegésszerűen" áramlik oda-vissza a kétféle mozgásforma között.

---

## Feladatok

**1. Feladat: Csatolás erősségének hatása**
Tegyük fel, hogy a középső rugót egy erősebbre cseréljük, amelynek rugóállandója megegyezik a szélső rugókéval ($D_2 = 0,5$ N/m), a többi adat változatlan marad ($m = 0,2$ kg, $D_1 = 0,5$ N/m). Határozd meg az I. és II. normálmódus körfrekvenciáját, valamint számítsd ki, hogy mennyi lesz a lebegés periódusideje ebben az esetben! Fogalmazd meg, hogyan hat a csatolás erőssége a lebegés periódusidejére!

**2. Feladat: Kezdeti feltételek és energia**
A leírt csatolt rezgő rendszerben az $t=0$ pillanatban az 1-es testet $x_0 = 10$ cm kitérésből, kezdősebesség nélkül elengedjük, miközben a 2-es test a nyugalmi helyzetében van ($x_2 = 0$ cm), szintén kezdősebesség nélkül. Fejezd ki a két test kitérését az idő függvényében a normálmódusok szuperpozíciójaként, majd magyarázd el röviden, hogyan áramlik a mechanikai energia a két test között a mozgás során!

**3. Feladat: Tranziens lebegés kényszerrezgésnél**
Egy rugó-tömeg rendszer sajátfrekvenciája $f_0 = 5$ Hz. A rendszert egy harmonikusan változó külső erővel gerjesztjük, amelynek frekvenciája $f_g = 5,2$ Hz. A rendszerben gyenge csillapítás is jelen van. Számítsd ki, hogy másodpercenként hány "lebegést" (amplitúdó-maximumot) figyelhetünk meg a bekapcsolást követő első néhány másodpercben, mielőtt a tranziens jelenség elhalna!