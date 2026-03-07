# Merev testek

## A merev test fogalma

Eddig főként olyan testek mozgásával foglalkoztunk, melyek pontszerűeknek voltak tekinthetők mozgásuk során, mivel az elmozdulások méretei jóval nagyobbak voltak, mint a test méretei. Az ilyen tömegpontok forgásával sem foglalkoztunk, a belső szerkezetüket teljesen figyelmen kívül hagytuk. 

Foglalkoztunk még tömegpontok rendszerével is, amikor két vagy több tömegpont együttes mozgását figyeltük meg. Ilyen volt például a kéttest-probléma, vagy a pontrendszerekre vonatkozó tömegközéppont fogalma és a rá vonatkozó tétel. 

> **A merev testek tulajdonképpen speciális pontrendszerek, melyeknél bármely két kiválasztott tömegpont távolsága állandó.**

Ideális merev testek a valóságban nincsenek, hisz bármely szilárd test elegendően nagy erőhatás hatására alakját szemmel láthatóan megváltoztatja. Ilyen változás például autóbaleset esetén a kocsi deformációja, vagy egy rugó elszakadása, ha túlterhelik stb. Sokszor a deformációk kicsik, és a test képes visszanyerni az alakját az erőhatás megszűntével. Ilyen esetre példa a nem túl nagy erővel megfeszített rugó, mely alakját visszanyeri, ha az erőhatás megszűnik. Az ilyen deformációkat rugalmasnak nevezzük, és ezekkel a rugalmasságtan foglalkozik. A merev testeket úgy tekintjük, hogy a fellépő erőhatások olyan kicsinyek, hogy a test deformációi teljesen elhanyagolhatók. 

## A merev mozgasa

A merev test alakját tehát a mozgás során nem változtatja meg, így elmozdulása minden esetben összetevődik egy eltolás és egy elforgatás egymásutánjaként. Tehát a merev test haladó mozgáson kívül forgómozgást is képes végezni. 

## A merev test síkmozgása

Minket leginkább a merev test egy speciális mozgása fog érdekelni. Ilyenkor a merev test pontjai egy síkkal párhuzamosan mozdulnak el, tehát minden pont sebessége párhuzamos ugyanazon megadott síkkal. Az ilyen mozgást a merev test síkmozgásának nevezzük. 

>**Merev test síkmozgásakor a test pontjai egy adott síkkal párhuzamos sebességvektorokkal mozognak.**

Gondoljunk például egy kerék gördülésére, amikor a kerék egyenes vonalon gurul. Ilyenkor a kerék pontjai általában függőleges síkban mozognak, mely párhuzamos a gördülés egyenes irányával. Az ilyen mozgás esetén mi csak a mozgás síkbeli vetületével fogunk foglalkozni, tehát a test térbeli kiterjedése a síkra merőlegesen nem lesz túl fontos. 

Síkmozgás esetén a test helyzetét két pontjának koordinátái meghatározzák. Itt a két pont távolsága nem változik, tehát csak 3 független adat kell. Lehet ez mondjuk a tömegközéppont 2 koordinátája a síkban és a test elfordulási szöge a síkban. Kerék esetében például a középpont általában a tömegközéppont is egyben, és a kerék még az ezen a ponton áthaladó, a mozgás síkjára merőleges képzeletbeli tengely körül el is fordul gördülése során. Az elfordulási szög, mint látni fogjuk, előjeles szám. Ha a test az óramutató járásával ellenkező irányban fordult el a síkban, akkor az elfordulási szög pozitív, ellenkező esetben negatív.

## A forgatonyomatek
Mi az ero megfeleloje forgomozgas eseten, ami felelos a forgas gyorsitasaert vagy epp lassitasaert? Ez a mennyiseg a forgatonyomatek.

Itt nehany fogalmat kell megbeszeljunk: 

>**Az ero tamadaspontja az a pont, ahol az ero a testre hatasat kifejti.**

>**Az ero hatasvonala az az egyenes, mely a tamadasponton halad at es az ero vektor iranyaval parhuzamos.**

>**Az erokar az ero hatasvonalanak a forgastengelytol mert tavolsaga.**

Ezekutan konnyen megfogalmazhatjuk a forgatonyomatek definiciojat is.

>**Az ero forgatonyomateka az ero es az erokar szorzata.**

$$
M = Fk = Frsin \alpha
$$

Itt $\alpha$ az a $180\degree$-nal nem nagyobb szog, melyet az ero vektor bezar az tamadaspont helyvektoraval, ha az origo a forgastengely. A szog elojeles forgasszog. Amenniben az ero pozitiv iranyba forgat, tehat az oramutato jarasaval ellentetes ertelemben, akkor a szoget pozitivnak, ellenkezo esetben negativnak tekintjuk. Igy a forgatonyomatek is elojeles szam, hiszen az ilyen szogekre a szinusz fuggveny ugyanolyan elojelu, mint a szog.

### Kiserlet

[Sas Elemer bemutatja a cernaorso paradoxont](https://www.youtube.com/watch?v=Fodof4gSIA0&t=8m50s)

### Peldak
1. Egy csavarkulcs hossza $30,0cm$. A kulcs vegenel 60N erot fejtunk ki. Mikor nagyobb a forgatonyomatek? Az elso esetben az ero meroleges a csavarkulcsra. A masodik esetben az ero a csavaskulccsal $60\degree$ szoget zar be.

$$
M_1 = Frsin \alpha = 60 \times 0,3 \times sin (90\degree) = 18Nm
$$

$$
M_2 = Frsin \alpha = 60 \times 0,3 \times sin (60\degree) = 15,58Nm
$$

Tehat a masodik esetben kisebb a forgatonyomatek, vagyis az ero forgato hatasa.

2. Egy emelo rudja vizszintesen all. A forgastengelytol $2,00m$-re van rahelyezve $20kg$ suly. A forgastengely masik oldalan a rudat fuggolegesen lefele nyomjuk $3,00m$ tavolsagra a tengelytol $130N$ erovel. A nehezsegi gyorsulas $9,81 \frac {m} {s^2}$
Mekkorak a rudra hato forgatonyomatekok es merre billen a rud?

$$
|M_1| = F_1k_1 = mgr_1 = 20 \times 9,81 \times 2 = 392,4Nm
$$

$$
|M_2| = F_2k_2 = F_2r_2 = 130 \times 3 = 390,0Nm
$$

Mivel $|M_2|$ kisebb, mint $|M_1|$ ezert a teher fele billen a rud.

## A nehezsegi ero forgatonyomateka

Nagyon fontos kerdes, hogy hogyan veheto figyelembe a nehezsegi ero forgatonyomateka? Legyen most is a forgastengely az origoban, a z-tengely. A nehezsegi ero hasson az y-tengellyel ellentetesen, lefele. Ekkor az erokar a x-koordinata lesz.

$$
M_z = \sum_{i = 1}^{N} -m_igx_i = -Mg\frac {\sum_{i = 1}^{N} m_ix_i} {M} = -Mgx_{TKP}
$$

A nehezsegi ero tamadaspontja termeszetesen a fuggoleges hatasvonal menten tettszolegesen eltolhato a forgatonyomatek megvaltoztatasa nelkul. 

>**A nehezsegi ero hatasa egyesitheto egyetlen ero hatasaval, melynek nagysaga Mg es tamadaspopntja a test tomegkozeppontja, iranya pedig fuggolegesen lefele mutat.**

Igy peldak megoldasa soran a nehezsegi ero forgatonyomateka konnyen kiszamithato.

### Pelda
Egy gerenda hossza $6,00m$ tomege $60,0kg$. A vizszintes gerenda ala van tamasztva egyik vegpontjanal, illetve a masik vegponttol $2,00m$ tavolsagra, mely pont korul elfordulhat. Milyen messze setalhat a gerendan a $80kg$ tomegu munkas az elfordulasi ponttol a szabad veg fele, hogy a gerenda epp ne billenjen le? 

Legyen a szabad veg a jobb oldalon. Ekkor a gerenda tomegkozeppontja a forgastengelytol balra, $1,00m$ tavolsagra van. A nyomatek:

$$
M_{z,1} = -Mgx_{TKP} = -60 \times 9,81 \times 1 = -588,6Nm
$$

A munkas legyen $x$ tavolsagra a forgasponttol. A nyomatek:

$$
M_{z,2} = mgx = 80 \times 9,81 x = 784,8x
$$

A ket kulso nyomatek osszege epp nulla, amikor a gerenda meg nem billen at.

$$
M_{z,e}^k = M_{z,1} + M_{z,2} = 0
$$

$$
-588,6 + 784,8x = 0
$$

A megoldas:

$$
x = \frac {588,6} {784,8} = 0,75m
$$

Tehat a munkas nem mehet az alatamasztasi ponttol tavolabb, mint $0,75m$ a szabad veg fele, annelkul, hogy a gereda le ne billenjen.

### Kiserlet

[Tancolo baba](https://www.youtube.com/shorts/wuvrJnYLCV8)

## Merev test egyensúlyának feltételei

Korábbról tudjuk, hogy tetszőleges pontrendszer egyensúlyához szükséges, hogy a külső erők eredője nulla legyen. Ez, mint a példákból is láthatjuk, nem elég. Az is kell, hogy a külső erők eredő forgatónyomatéka is nulla legyen.


$$
\sum_{i = 1}^{N} \vec {F_i^k} = \vec 0
$$



$$
\sum _{i = 1}^{N} M_{z,i}^k = 0
$$


Az utóbbi feltétel síkmozgásra vonatkozik, amely az x-y síkban történne, ha nem volna egyensúly. A teljes egyensúlyhoz mindhárom tengelyre vonatkozó forgatónyomaték 0 kell legyen a háromdimenziós térben. Az egyensúlyhoz a tengely pozíciója nem lényeges, de iránya igen. Mondhatjuk, hogy háromdimenziós térben a pontrendszer egyensúlyának feltétele, hogy tetszőleges tengelyre vonatkozó forgatónyomaték nulla legyen. Merev testekre ez a két feltétel elegendő is, hisz ezek deformációkat nem szenvedhetnek, csak forgó és haladó mozgás lehetséges.