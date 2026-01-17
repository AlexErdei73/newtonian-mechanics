# Feladatok gyorsuló mozgásra

## Példák nulla kezdősebességű gyorsuló mozgásra
1. Egy gépkocsi álló helyzetből felgyorsít $100 \frac {km} {h}$-ra $8.00s$ alatt. Mekkora az elért sebesség $\frac {m} {s}$-ban? Mekkora a gyorsulás? Mekkora a megtett út a gyorsítás alatt? A gyorsulás egyenletesnek tekinthető a gyorsítás során.

$$
v = \frac {s} {t} = \frac {100km} {1h} = \frac {100 000m} {3600s} = 27.8 \frac {m} {s}
$$

Itt az elért sebességre az egyenletes mozgás formuláját használtuk, hisz gondolhatjuk, hogy az autó egyenletesen halad tovább a gyorsítási folyamat után az elért sebességgel. Ez azt jelenti, hogy 100km-t tesz meg 1h alatt. 1h az 60min tehát 3600s, hisz minden perc 60s.

$$
a = \frac {\Delta v} {t} = \frac {v - v_0} {t} = \frac {27.8 \frac {m} {s} - 0} {8s} = 3.48 \frac {m} {s^2}
$$

$$
s = \frac {a} {2} \times {t^2} = \frac {3.48 \frac {m} {s^2}} {2} \times (8s)^2 = 111m 
$$

Itt az eredményeket 3 értékes jegyre kerekítettük, hisz az adatok is ezzel a pontossággal adottak, tehát az eredmény sem lehet pontosabb.

2. Egy test 30 fokos lejtőn csúszik le súrlódásmentesen álló helyzetből indulva, miközben gyorsulása $5.00 \frac {m} {s^2}$. Ha a lejtő hossza $10.0m$, hány másodperc kell, hogy leérjen a lejtő aljára? Mekkora sebességgel ér a lejtő aljára?

$$
s = \frac {a} {2} \times t^2
$$

Behelyettesítjük az adatokat, az ismeretlen idő legyen x. Az egységeket elhagyjuk az egyszerűség végett. Az eredmény másodpercben értendő.

$$
10.0 = \frac {5.00} {2} \times x^2
$$

$$
10.0 = 2.50x^2
$$

$$
4.00 = x^2
$$

$$
x = \pm {2.00}
$$

Az eltelt idő nyilván pozitív, tehát $t=2.00s$. A pontosság itt is 3 értékes jegy.

$$
a = \frac {v - v_0} {t}
$$

$$
5.00 = \frac {x - 0} {2.00}
$$

$$
x = 10.0
$$

Tehát a test $10.0 \frac {m} {s}$-ot ér el.

### Feladatok

1. Egy autó álló helyzetből felgyorsít $60.0 \frac{km}{h}$-ra $5.00 s$ alatt. Mekkora a gyorsulása? Mekkora a megtett út?

2. Egy labda lefelé gurul egy dombon súrlódásmentesen, gyorsulása $3.00 \frac{m}{s^2}$. A domb hossza $15.0 m$. Mennyi idő alatt ér le? Mekkora sebességgel?


3. Egy lift álló helyzetből felfelé gyorsít $2.00 \frac{m}{s^2}$ gyorsulással $10.0 s$ ideig. Mekkora a végsebessége? Mekkora a megtett út?

## Példák nem nulla kezdősebességű gyorsuló mozgásokra

1. Egy feldobott labda lassulása $9.81 \frac {m} {s^2}$. Milyen magasra repül fel, ha $5.00 \frac {m} {s}$ sebességgel dobjuk fel? Mennyi idő alatt éri el ezt a magasságot?

Ha a szokásos formulát használjuk, akkor a gyorsulást negatívnak kell vennünk, hisz a labda lassul.

$$
a = \frac {v - v_0} {t}
$$

$$
-9.81 = \frac {0 - 5.00} {x}
$$

$$
-9.81x = -5.00
$$

$$
x = \frac {-5.00} {-9.81} = 0.510
$$

Az emelkedési idő $0.510s$.

$$
s = v_0 \times t + \frac {a} {2} \times t^2 = 5.00 \times 0.510 + \frac {-9.81} {2} \times 0.510^2 = 1.27m
$$

2. Egy autó $30.0 \frac {m} {s}$ sebességről fékez $3.00 \frac {m} {s^2}$ lassulással, miközben 113m utat tesz meg. Mennyi ideig tartott a fékezés és mekkora sebességre lassított le? 

Ez a feladat nehéznek tűnhet, de vegyük észre, hogy minden adat adott a négyzetes úttörvényben, kivéve az eltelt időt. Tehát az idő kiszámítható kell legyen egy egyenlet megoldásával.

$$
s = v_0 \times t + \frac {a} {2} \times t^2
$$

$$
113 = 30.0 \times x + \frac {-3.00} {2} \times x^2
$$

$$
1.50x^2 - 30.0x + 113 = 0
$$

Ez egy másodfokú egyenlet az idő meghatározására, melyet az x ismeretlen jelöl. Erre ismerjük a megoldóképletet.

$$
x_{12} = \frac {-b \pm \sqrt {b^2 - 4ac}} {2a} = \frac {30.0 \pm \sqrt {30.0^2 - 4 \times 1.50 \times 113}} {3.00} = \frac {30.0 \pm 14.9} {3.00} = 15.0 , 5.03
$$

Két megoldást kapunk. Az egyik esetben a test úgy tesz meg 113m-t, hogy nem fordul meg, a másik esetben nem a megtett út 113m, hanem a test távolsága az eredeti pozíciójától. A test 0-ra fékez és megfordul, majd elindul visszafele és gyorsulva jut 113m távolságra az eredeti helytől, ahol fékezni kezdett a kocsi. Ez persze akkor történne, ha a gyorsulás nem szűnne meg, amint a kocsi nullára fekezett, hanem változatlanul fennállna. Nyilván minket a rövidebb idő érdekel csak, amikor a test mozgás iránya nem fordul meg. Tehát a lassítás ideje 5.03s.

A sebesség könnyedén kiszámítható.

$$
a = \frac {v - v_0} {t}
$$

$$
-3.00 = \frac {x - 30.0} {5.03}
$$

$$
-15.1 = x - 30.0
$$

$$
x = 14.9
$$

A sebesség tehát $14.9 \frac {m} {s}$.

### Feladatok

1. Egy autó $20.0 \frac {m} {s}$ sebességről $2.00 \frac {m} {s^2}$ lassulással fékez. Mennyi idő alatt tesz meg 60.0 métert a fékezés során?

2. Egy labdát a talajról felhajítunk $15.0 \frac {m} {s}$ kezdősebességgel. A labda lassulása $9.81 \frac {m} {s^2}$. Mekkora idő alatt ér el 10.0 méteres magasságot az emelkedés során?

3. Egy vonat $25.0 \frac {m} {s}$ sebességgel halad, majd egyenletes $5.00 \frac {m} {s^2}$ gyorsulással $10.0$ másodpercig gyorsít. Mekkora végsebességet ér el? Mekkora utat tesz meg a gyorsítás alatt?

4. Egy segédmotor $12.0 \frac {m} {s}$ sebességgel halad, majd $1.50 \frac {m} {s^2}$ lassulással fékez. Mennyi idő alatt tesz meg 50.0 métert a fékezés során?

5. Egy sportautó $40.0 \frac {m} {s}$ sebességgel halad és $5.00 \frac {m} {s^2}$ gyorsulással $8.00$ másodpercig gyorsít. Mekkora sebességre gyorsul fel? Mekkora távolságot tesz meg a gyorsítás során?

6. Egy síelő lesiklik a pályán $30.0 \frac {m} {s}$ sebességgel, majd a lejtő vége felé egyenletes $4.00 \frac {m} {s^2}$ lassulással fékez. Mennyi idő alatt lassul le $10.0 \frac {m} {s}$ sebességre? Mekkora távolságot tesz meg ezalatt?
