# Csatolt rezgések

## Kísérlet

[Csatolt rezgések légpárnás sínen](https://www.youtube.com/shorts/71qpMFz4QPU)

## Szimuláció

[Csatolt rezgések](https://alexerdei73.github.io/physics-engine/project/#b1063662-b2d3-414e-92b8-83432592bea3)

A szimuláció esetében nagyon tisztán látható a kísérletben is bemutatott jelenség. A különbség az, hogy miközben a kísérletben három egyforma rugó szerepel, itt a középső rugó kifejezetten gyenge. Tehát két szimmetrikus, egyenként külső rugóra kötött, rezgésre képes test össze van kötve egy harmadik, igen gyenge rugóval, ami által egy laza csatolást létesítünk a két tömegpont között.

A szimuláció párhuzamosan mutatja be a rezgő rendszer úgynevezett normálrezgéseit (sajátrezgési módusait). Ezekből most kettő van, mivel a rendszernek két szabadsági foka (koordinátája) van. Az első test kitérése és a második test kitérése a rendszer koordinátái, amelyek időben változhatnak. Az első normálrezgés esetén a testek azonos fázisban rezegnek, mindkettő ugyanazzal a frekvenciával. A második normálrezgés esetén a két test ellentétes fázisban rezeg, szintén megegyező frekvenciával. A második normálmódus frekvenciája nagyobb, mint az első normálrezgésé, ami a későbbiekben lényeges lesz. Ezek a frekvenciák a rendszer rezonanciafrekvenciái.

Ha bármely pillanatban megállítjuk a szimulációt, megállapíthatjuk, hogy az első normálrezgés esetén az első test előjeles kitérését összeadva a második normálrezgésnél kapott első test-kitéréssel, pontosan megkapjuk az első test kitérését a harmadik, kombinált esetben (amely önmagában nem normálrezgés). Ezt ellenőrizzük is!

### Példa

A szimulációt megállítottuk a $t = 10,7688\ \text{s}$ időpillanatban. A szimulációban a 9-es test $x$ koordinátáját kell leolvasnunk, majd abból kivonva az egyensúlyi $2\ \text{m}$-t, megkapjuk az 1-es test kitérését az I. normálmódusban:

$$
x_{\text{I},1} = 1,8754 - 2 = -0,1246\text{ m}
$$

A második normálmódusban hasonlóan kapjuk meg az 1-es test kitérését, csak most a szimulációban az 5-ös test $x$ koordinátáját olvassuk le:

$$
x_{\text{II},1} = 2,4903 - 2 = 0,4903\text{ m}
$$

Végül az 1-es test kitérése a kombinált rezgésben a szimulációban közvetlenül az 1-es test $x$ koordinátájából határozható meg:

$$
x_1 = 2,3657 - 2 = 0,3657\text{ m}
$$

Now már valóban láthatjuk, hogy az alábbi szuperpozíciós összefüggés érvényes a kiválasztott pillanatban:

$$
x_1 = x_{\text{I},1} + x_{\text{II},1} = -0,1246 + 0,4903 = 0,3657\text{ m}
$$

Ez az összefüggés az adott kezdeti feltételek esetén kialakuló rezgésre bármely pillanatban érvényes. Hasonló összefüggés igaz a 2-es testre is:

$$
x_2 = x_{\text{I},2} + x_{\text{II},2}
$$

Ezeknek az összefüggéseknek a bizonyítását most nem végezzük el. Ennek oka, hogy ehhez a csatolt differenciálegyenlet-rendszert kellene megoldanunk, amely számítást meghagyjuk a felsőbb matematikai ismeretek elsajátítása utánra.

## A lebegés

### Kísérletek

[Lebegés hangvillákkal](https://www.youtube.com/shorts/_bV_mEakQ7o)

[Azonos irányú rezgések összetétele](https://www.youtube.com/watch?v=e2YRtEMvFiQ)

### Azonos irányú rezgések összetétele

Legyen az $x$ kitérés két harmonikus rezgés, $x_{\text{I}}$ és $x_{\text{II}}$ összege. Ezek frekvenciája kismértékben eltérhet egymástól.

$$
x_{\text{I}} = A \cos(\omega_{\text{I}} t)
$$

$$
x_{\text{II}} = A \cos(\omega_{\text{II}} t)
$$

Az eredő rezgés a következő szuperpozíció:

$$
x = x_{\text{I}} + x_{\text{II}}
$$

Ahhoz, hogy ezt szorzat alakká alakíthassuk, szükségünk lesz a jól ismert trigonometriai addíciós tételekre:

$$
\cos(\alpha + \beta) = \cos \alpha \cos \beta - \sin \alpha \sin \beta
$$

$$
\cos(\alpha - \beta) = \cos \alpha \cos \beta + \sin \alpha \sin \beta
$$

Ha most ezt a két azonosságot összeadjuk, megkapjuk a szükséges összefüggést:

$$
\cos(\alpha + \beta) + \cos(\alpha - \beta) = 2 \cos \alpha \cos \beta
$$

Határozzuk meg a zárójelben szereplő $\alpha$ és $\beta$ **fázisszögeket** úgy, hogy segítségükkel felírhassuk a két rezgésünk időfüggő argumentumát:

$$
\alpha + \beta = \omega_{\text{II}} t
$$

$$
\alpha - \beta = \omega_{\text{I}} t
$$

Ezeket az egyenleteket összeadva, illetve egymásból kivonva megkapjuk az $\alpha$ és $\beta$ fázisszögek tiszta időfüggő alakját:

$$
\alpha = \frac{\omega_{\text{II}} + \omega_{\text{I}}}{2} t
$$

$$
\beta = \frac{\omega_{\text{II}} - \omega_{\text{I}}}{2} t
$$

Látható, hogy az $\alpha$ és $\beta$ kifejezések szögek, amelyek egy-egy körfrekvencia-jellegű tag és az idő szorzataként állnak elő. Ezeket visszahelyettesítve a szuperpozíció egyenletébe:

$$
x = x_{\text{I}} + x_{\text{II}} = A \cos(\omega_{\text{I}} t) + A \cos(\omega_{\text{II}} t) = A(\cos(\omega_{\text{I}} t) + \cos(\omega_{\text{II}} t))
$$

$$
x = 2A \cos \alpha \cos \beta
$$

A végeredmény pedig a következő alakot ölti:

$$
x = 2A \cos\left(\frac{\omega_{\text{II}} + \omega_{\text{I}}}{2} t\right) \cos\left(\frac{\omega_{\text{II}} - \omega_{\text{I}}}{2} t\right)
$$

Ez az eredő rezgés egy gyors, a két körfrekvencia átlagával ($\frac{\omega_{\text{II}} + \omega_{\text{I}}}{2}$) jellemezhető oszcilláció, amelynek az amplitúdója egy jóval lassabb frekvenciával, a különbségi körfrekvencia felével ($\frac{\omega_{\text{II}} - \omega_{\text{I}}}{2}$) lüktet (modulálódik), pontosan úgy, ahogy a kísérletekben észleltük.

### Lebegés a rezonanciakísérletnél

Ezt a jelenséget már megfigyelhettük, amikor a kényszerrezgéseket és a rezonanciát vizsgáltuk. Ott is fellépett a lebegés, amikor a kényszererő frekvenciája közel megegyezett a rendszer sajátfrekvenciájával, de nem volt teljesen egyenlő vele. Ennek oka, hogy a kezdeti feltételektől függően mindig gerjesztődik a rendszer saját, csillapodó szabadrezgése is, és ez adódik össze a külső kényszerrezgessel. A lebegés a valóságban ott idővel elhal, mivel a szabadrezgés a súrlódás miatt időben csillapodó, így elegendően hosszú idő után már csak a tiszta kényszerrezgés marad meg. Az ilyen átmeneti, elhaló jelenségeket a fizikában *tranziensnek* nevezzük. Tehát a rezonanciakísérletnél tapasztalható lebegés egy tranziens folyamat.

## A szimuláció magyarázata

A szimulációban az amplitúdó $A = 0,5\text{ m}$. Az $\omega_{\text{II}}$ and $\omega_{\text{I}}$ körfrekvenciák szintén meghatározhatók a mechanikai adatokból. A két szélső rugó direkciós ereje $D_1 = 0,5\text{ N/m}$, a középső csatoló rugóé $D_2 = 0,05\text{ N/m}$. A rezgő testek tömege egyenként $m = 0,2\text{ kg}$. Nézzük az 1-es test mozgását!

A tiszta normálmódusok egyenletei:

$$
x_{\text{I},1} = x_{\text{I},2} = A \cos(\omega_{\text{I}} t)
$$

$$
x_{\text{II},1} = -x_{\text{II},2} = A \cos(\omega_{\text{II}} t)
$$

Így az

$$
x = x_{\text{I},1} + x_{\text{II},1}
$$

szuperpozíciós összefüggés pontosan azt jelenti, hogy a trigonometrikusan levezetett lebegési képlet lesz érvényes az 1-es test pillanatnyi kitérésére.

### Példa

Mikor válik az 1-es test amplitúdója először nullává? 

Ennek a kérdésnek a megválaszolásához meg kell határoznunk a rendszer saját körfrekvenciáit!

Az első (szimmetrikus, azonos fázisú) módusban a két test együtt, azonos kitéréssel mozog, így a középső csatoló rugó hossza egyáltalán nem változik (nem fejt ki erőt). Ekkor csak a két külső rugó hat a testekre:

$$
\omega_{\text{I}}^2 = \frac{D_1}{m} = \frac{0,5}{0,2} = 2,5
$$

$$
\omega_{\text{I}} = \sqrt{2,5} \approx 1,5811\text{ rad/s}
$$

A másik (antiszimmetrikus, ellentétes fázisú) körfrekvencia meghatározása kissé összetettebb. Vegyük észre, hogy a középső rugó felezőpontja a II-es normálmódusban a szimmetria miatt teljesen mozdulatlan! Ha az 1-es test kitérése $x$, akkor a középső rugó megnyúlása (vagy összenyomódása) az ellentétes mozgás miatt pontosan $2x$ lesz. Ennek a belső rugónak az ereje a nyugalmi helyzet felé mutat, vagyis **hozzáadódik** a külső rugó visszatérítő erejéhez. A mozgásegyenlet az 1-es testre felírva:

$$
ma = F_{\text{e},x} = -D_1 x - 2D_2 x = -(D_1 + 2D_2)x
$$

$$
a = - \frac{D_1 + 2D_2}{m} x
$$

Ez alapján a második módus körfrekvenciája:

$$
\omega_{\text{II}}^2 = \frac{D_1 + 2D_2}{m} = \frac{0,5 + 2 \cdot 0,05}{0,2} = \frac{0,6}{0,2} = 3
$$

$$
\omega_{\text{II}} = \sqrt{3} \approx 1,7321\text{ rad/s}
$$

Definiáljuk az amplitúdó modulációját végző **lebegési körfrekvenciát** ($\omega_{\text{leb}}$):

$$
\omega_{\text{leb}} = \frac{\omega_{\text{II}} - \omega_{\text{I}}}{2} = \frac{1,7321 - 1,5811}{2} = 0,0755\text{ rad/s}
$$

A moduláció periódusideje:

$$
T = \frac{2\pi}{\omega_{\text{leb}}} = \frac{2 \cdot 3,1416}{0,0755} \approx 83,22\text{ s}
$$

An első teljes amplitúdó-minimum (amikor az 1-es test teljesen megáll, mert az összes energiáját átadta a 2-es testnek) a modulációs periódus negyedénél következik be, azaz:

$$
t_{\text{min}} = \frac{T}{4} = \frac{83,22}{4} \approx 20,81\text{ s}
$$


## Érdekesség: Energiaáramlás más formákban (Kitekintés)

A csatolt rezgéseknél megfigyelt jelenség – miszerint az energia periodikusan vándorol a rendszer különböző részei vagy mozgásformái között – nemcsak a lineáris rugóknál érhető tetten.

[Steve Mould: Paraméteres rezonancia és módusváltás (Videó)](https://www.youtube.com/watch?v=MUJmKl7QfDU)

[Rugós inga módusváltása (Szimuláció)](https://alexerdei73.github.io/physics-engine/project/#a3802550-a697-495b-a39e-de8a9bf5bab8)

A videóban és a szimulációban egy rugóra kötött ingát láthatunk, amely egy rendkívül látványos fizikai jelenséget, az úgynevezett **autoparaméteres rezonanciát** szemlélteti [0:00:27]. Ha a rendszert kezdetben tisztán csak függőlegesen megrezegtetjük (fel-le irányú harmonikus oszcilláció), egy idő után ez a függőleges mozgás teljesen leáll, és a test magától átvált oldalirányú lengő mozgásba (mint egy klasszikus inga) [0:01:21]. Ezután a folyamat megfordul: az ingalengés amplitúdója csökkenni kezd, és az energia visszatér a függőleges rugóoszcillációba [0:01:22]. A mechanikai energia így periodikusan oda-vissza vándorol a két teljesen eltérő mozgásforma között [0:09:02].

Steve Mould bemutat egy másik klasszikus példát is, a **Wilberforce-féle ingát** [0:10:02]. Ez a rendszer egy helikális rugóra függesztett nehéz fémtárcsából áll, amelynek szintén két fő mozgásmódusa van: egy függőleges haladó (transzlációs) és egy tengely körüli csavarodó (rotációs) módus [0:10:01]. Amikor a rugót függőlegesen megnyújtjuk, a spirális geometria miatt a rugó megnyúlás közben enyhén kiteeredik, ami forgatónyomatékot fejt ki a tárcsára [0:10:14]. Ha a csavarodási frekvenciát a csavarok állításával pontosan hozzáhangoljuk a függőleges rezgés frekvenciájához, az energia teljes egészében átáramlik a függőleges oszcillációból a tiszta csavaró mozgásba, majd vissza [0:10:32].

Bár ezen rendszerek matematikai leírása jóval összetettebb – a mozgásegyenleteik az úgynevezett Mathieu-típusú differenciálegyenletekhez vezetnek [0:12:25] –, a fizikai lényeg ugyanaz, mint amit a kiskocsiknál kiszámoltunk. A rendszernek két, egymáshoz rendkívül közeli frekvenciájú normálmódusa van, amelyek között az apró geometriai vagy csatoló rugalmassági kapcsolat miatt a mechanikai energia lassan, lebegésszerűen áramlik oda-vissza [0:09:02].

---

## Feladatok

**1. Feladat: Csatolás erősségének hatása**

Tegyük fel, hogy a középső csatoló rugót egy lényegesen erősebbre cseréljük, amelynek rugóállandója megegyezik a szélső rugókéval ($D_2 = 0,5\text{ N/m}$), miközben a többi adat változatlan marad ($m = 0,2\text{ kg}$, $D_1 = 0,5\text{ N/m}$). 
- Határozd meg az I. és II. normálmódus körfrekvenciáját!
- Számítsd ki, hogy mennyi lesz a lebegési burkológörbe periódusideje ebben az esetben!
- Fogalmazd meg a kapott eredmények alapján, hogyan hat a csatolás erősségének növelése a lebegés periódusidejére!

**2. Feladat: Kezdeti feltételek és energia**

A leírt csatolt rezgő rendszerben az $t = 0$ időpillanatban az 1-es testet $x_0 = 10\text{ cm}$ kitérésből, kezdősebesség nélkül elengedjük, miközben a 2-es test pontosan a nyugalmi helyzetében van ($x_2 = 0\text{ cm}$), szintén kezdősebesség nélkül. 
- Fejezd ki a két test kitérését az idő függvényében a normálmódusok szuperpozíciójaként! 
- Magyarázd el röviden, a levezetett egyenletek alapján hogyan áramlik a mechanikai energia a két test között a mozgás során!

**3. Feladat: Tranziens lebegés kényszerrezgésnél**

Egy csillapított rugó-tömeg rendszer sajátfrekvenciája $f_0 = 5\text{ Hz}$. A rendszert egy harmonikusan változó külső kényszererővel gerjesztjük, amelynek frekvenciája $f_{\text{g}} = 5,2\text{ Hz}$. A rendszerben gyenge csillapítás van jelen.
- Számítsd ki, hogy másodpercenként hány lebegést (amplitúdó-maximumot) figyelhetünk meg a gerjesztés bekapcsolását követő első néhány másodpercben, mielőtt a tranziens jelenség teljesen elhalna!
