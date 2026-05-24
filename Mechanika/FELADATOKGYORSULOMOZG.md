# Feladatok gyorsuló mozgásra

## Példák nulla kezdősebességű gyorsuló mozgásra

1. Egy gépkocsi álló helyzetből felgyorsít $100\text{ km/h}$-ra $8{,}00\text{ s}$ alatt. Mekkora az elért sebesség $\text{m/s}$-ban? Mekkora a gyorsulás? Mekkora a megtett út a gyorsítás alatt? A gyorsulás egyenletesnek tekinthető a gyorsítás során.

$$
v = \frac {s} {t} = \frac {100\text{ km}} {1\text{ h}} = \frac {100\ 000\text{ m}} {3600\text{ s}} \approx 27{,}8\text{ }\frac {\text{m}} {\text{s}}
$$

Itt az elért sebesség átváltásához az egyenletes mozgás alapgondolatát használtuk, hiszen feltételezhetjük, hogy az autó a gyorsítási szakasz után ezzel az állandó sebességgel haladna tovább. Ez azt jelenti, hogy $100\text{ km}$ utat tenne meg $1\text{ h}$ alatt. Tudjuk, hogy $1\text{ óra} = 60\text{ perc} = 3600\text{ másodperc}$, mivel minden perc $60\text{ s}$.

$$
a = \frac {\Delta v} {t} = \frac {v - v_0} {t} = \frac {27{,}8\text{ }\frac {\text{m}} {\text{s}} - 0} {8\text{ s}} \approx 3{,}48\text{ }\frac {\text{m}} {\text{s}^2}
$$

$$
s = \frac {a} {2} \cdot t^2 = \frac {3{,}48\text{ }\frac {\text{m}} {\text{s}^2}} {2} \cdot (8\text{ s})^2 = 111\text{ m}
$$

Az eredményeket három értékes jegyre kerekítettük, mivel a kiinduló adatok pontossága is ezt követeli meg, így a végeredmény sem sugallhat nagyobb precizitást.

2. Egy test egy $30^\circ$-os hajlásszögű lejtőn csúszik le súrlódásmentesen, álló helyzetből indulva, miközben a gyorsulása $5{,}00\text{ }\frac{\text{m}}{\text{s}^2}$. Ha a lejtő hossza $10{,}0\text{ m}$, hány másodpercre van szükség ahhoz, hogy leérjen a lejtő aljára? Mekkora sebességgel érkezik meg?

$$
s = \frac {a} {2} \cdot t^2
$$

Behelyettesítve az ismert adatokat, ahol az ismeretlen időt $x$ jelöli (a számítás során a mértékegységeket elhagyjuk, az eredmény másodpercben értendő):

$$
10{,}0 = \frac {5{,}00} {2} \cdot x^2
$$

$$
10{,}0 = 2{,}50 \cdot x^2
$$

$$
4{,}00 = x^2
$$

$$
x = \pm 2{,}00
$$

Mivel az eltelt idő fizikailag csak pozitív érték lehet, a helyes megoldás $t = 2{,}00\text{ s}$. A pontosságot itt is három értékes jegyre kerekítve adjuk meg.

A végsebesség kiszámítása a gyorsulás képletéből:

$$
a = \frac {v - v_0} {t}
$$

$$
5{,}00 = \frac {x - 0} {2{,}00}
$$

$$
x = 10{,}0
$$

A test tehát pontosan $10{,}0\text{ }\frac{\text{m}}{\text{s}}$ sebességet ér el a lejtő alján.

### Gyakorló feladatok

1. Egy autó álló helyzetből egyenletesen felgyorsít $60{,}0\text{ km/h}$-ra $5{,}00\text{ s}$ alatt. Mekkora a gyorsulása, és mekkora utat tesz meg a gyorsítás ideje alatt?
2. A labda legurul egy domboldalon. A mozgás súrlódásmentesnek tekinthető, a gyorsulása $3{,}00\text{ }\frac{\text{m}}{\text{s}^2}$. A domb hossza $15{,}0\text{ m}$. Mennyi idő alatt ér le a labda, és mekkora lesz a sebessége az alján?
3. Egy lift álló helyzetből indulva felfelé gyorsít $2{,}00\text{ }\frac{\text{m}}{\text{s}^2}$ egyenletes gyorsulással, pontosan $10{,}0\text{ s}$ hosszan. Mekkora lesz a lift végsebessége, és mekkora utat tesz meg ezalatt?

---

## Példák nem nulla kezdősebességű gyorsuló mozgásokra

1. Egy függőlegesen felfelé feldobott labda lassulása a nehézségi erő miatt $9{,}81\text{ }\frac{\text{m}}{\text{s}^2}$. Milyen magasra repül fel, ha $5{,}00\text{ }\frac{\text{m}}{\text{s}}$ kezdősebességgel indítjuk, és mennyi idő alatt éri el a pálya legfelső pontját?

Ha a megszokott formulát alkalmazzuk, a gyorsulás értékét negatív előjellel kell számításba vennünk, hiszen a labda sebessége folyamatosan csökken (lassul). A legfelső ponton a pillanatnyi sebessége nullává válik ($v = 0$).

$$
a = \frac {v - v_0} {t}
$$

$$
-9{,}81 = \frac {0 - 5{,}00} {x}
$$

$$
-9{,}81 \cdot x = -5{,}00
$$

$$
x = \frac {-5{,}00} {-9{,}81} \approx 0{,}510
$$

Az emelkedés időtartama tehát $t = 0{,}510\text{ s}$.

A maximális magasságot a négyzetes úttörvény segítségével határozzuk meg:

$$
s = v_0 \cdot t + \frac {a} {2} \cdot t^2 = 5{,}00 \cdot 0{,}510 + \frac {-9{,}81} {2} \cdot 0{,}510^2 \approx 1{,}27\text{ m}
$$

A labda legfeljebb $1{,}27\text{ m}$ magasra repül fel.

2. Egy autó $30{,}0\text{ }\frac{\text{m}}{\text{s}}$ kezdősebességről fékez $3{,}00\text{ }\frac{\text{m}}{\text{s}^2}$ állandó lassulással, miközben $113\text{ m}$ utat tesz meg a fékút során. Mennyi ideig tartott a fékezési folyamat, és mekkora sebességre lassult le a jármű?

Ez a feladat elsőre összetettnek tűnhet, de vegyük észre, hogy a négyzetes úttörvényben az idő kivételével minden paraméter adott. Az időtartam így egy másodfokú egyenlet megoldásával egyértelműen meghatározható.

$$
s = v_0 \cdot t + \frac {a} {2} \cdot t^2
$$

$$
113 = 30{,}0 \cdot x + \frac {-3{,}00} {2} \cdot x^2
$$

Rendezve az egyenletet a nullára:

$$
1{,}50 \cdot x^2 - 30{,}0 \cdot x + 113 = 0
$$

Az $x$ idő meghatározásához alkalmazzuk a jól ismert másodfokú egyenlet megoldóképletét:

$$
x_{1,2} = \frac {-b \pm \sqrt {b^2 - 4ac}} {2a} = \frac {30{,}0 \pm \sqrt {30{,}0^2 - 4 \cdot 1{,}50 \cdot 113}} {2 \cdot 1{,}50} = \frac {30{,}0 \pm \sqrt {900 - 678}} {3{,}00} = \frac {30{,}0 \pm 14{,}9} {3{,}00}
$$

A számítás végén két matematikai megoldást kapunk: $x_1 = 15{,}0$ és $x_2 = 5{,}03$. 

Fizikailag a két érték a következő jelentéssel bír: az első esetben ($5{,}03\text{ s}$) az autó egyenesen haladva, irányváltás nélkül éri el a megadott távolságot. A nagyobb időérték ($15{,}0\text{ s}$) akkor valósulna meg, ha a fékező gyorsulás a jármű teljes megállása után is folyamatosan hatna tovább: az autó lelassulna nullára, megfordulna, majd hátrafelé felgyorsítva jutna el újra az indítóponttól mért $113\text{ m}$-es távolságba. Mivel a valóságban a fékezés a megállásnál vagy a kívánt sebesség elérésekor véget ér, számunkra kizárólag a rövidebb, a mozgásirány megfordulása előtti időpont a releváns. A lassítás ideje tehát $t = 5{,}03\text{ s}$.

Az elért sebesség ezután már egyszerűen kiszámítható a gyorsulás alapképletéből:

$$
a = \frac {v - v_0} {t}
$$

$$
-3{,}00 = \frac {x - 30{,}0} {5{,}03}
$$

$$
-15{,}1 = x - 30{,}0
$$

$$
x = 14{,}9
$$

Az autó sebessége a szakasz végén $14{,}9\text{ }\frac{\text{m}}{\text{s}}$.

### Gyakorló feladatok

1. Egy gépkocsi $20{,}0\text{ }\frac{\text{m}}{\text{s}}$ kezdősebességről indulva $2{,}00\text{ }\frac{\text{m}}{\text{s}^2}$ állandó lassulással fékez. Mennyi idő alatt tesz meg pontosan $60{,}0\text{ métert}$ a fékezés kezdetétől számítva?
2. Egy labdát a talajról függőlegesen felhajítunk $15{,}0\text{ }\frac{\text{m}}{\text{s}}$ kezdősebességgel. A nehézségi erő okozta lassulás értéke $9{,}81\text{ }\frac{\text{m}}{\text{s}^2}$. Mennyi idő elteltével éri el a labda a $10{,}0\text{ méteres}$ magasságot az emelkedési szakasz során?
3. Egy vonat gőzmozdonya $25{,}0\text{ }\frac{\text{m}}{\text{s}}$ sebességgel halad, majd egyenletes $5{,}00\text{ }\frac{\text{m}}{\text{s}^2}$ gyorsulással $10{,}0\text{ másodpercig}$ növeli a sebességét. Mekkora végsebességet ér el a szerelvény, és mekkora utat tesz meg a gyorsítási szakasz alatt?
4. Egy segédmotoros kerékpár $12{,}0\text{ }\frac{\text{m}}{\text{s}}$ sebességgel halad, amikor hirtelen $1{,}50\text{ }\frac{\text{m}}{\text{s}^2}$ lassulással fékezni kezd. Mennyi időre van szüksége ahhoz, hogy a fékút alatt $50{,}0\text{ métert}$ tegyen meg?
5. Egy sportautó $40{,}0\text{ }\frac{\text{m}}{\text{s}}$ sebességgel robog, majd $5{,}00\text{ }\frac{\text{m}}{\text{s}^2}$ gyorsulással pontosan $8{,}00\text{ másodpercig}$ intenzíven gyorsít. Mekkora sebességre emelkedik a jármű sebessége, és mekkora távolságot hagy maga mögött a folyamat végére?
6. Egy síelő $30{,}0\text{ }\frac{\text{m}}{\text{s}}$ sebességgel siklik le a pályán, majd a vízszintes kifutóhoz érve egyenletes $4{,}00\text{ }\frac{\text{m}}{\text{s}^2}$ lassulással fékezni kezd. Mennyi idő alatt mérséklődik a sebessége $10{,}0\text{ }\frac{\text{m}}{\text{s}}$-ra, és mekkora távolságot tesz meg ezen lassulási folyamat közben?
