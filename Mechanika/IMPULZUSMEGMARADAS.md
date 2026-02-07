# Az impulzus megmaradása

Vegyünk két tömegpontot, melyek egymással és környezetükkel is kölcsönhatásban vannak. Hasson az 1-es testre a környezet $\overrightarrow {F_1}$ külső erővel, a 2-es testre ez a környezet által kifejtett külső erő $\overrightarrow {F_2}$! Az 1-es testre a 2-es által kifejtett belső erőt jelöljük $\overrightarrow {F_{1,2}}$-vel, és fordítva, a 2-es testre az 1-es által kifejtett erőt pedig $\overrightarrow {F_{2,1}}$-gyel!

Írjuk fel mindkét testre a második törvényt!


$$
\overrightarrow {F_1} + \overrightarrow {F_{1,2}} = \frac {\Delta \overrightarrow{I_1}} {t}
$$



$$
\overrightarrow {F_2} + \overrightarrow {F_{2,1}} = \frac {\Delta \overrightarrow{I_2}} {t}
$$


Össze fogjuk adni a két egyenletet, hisz ha a bal oldal egyenlő a jobb oldallal mindkét egyenletben, akkor összeadva a jobb oldalakat az összeg is egyenlő lesz a bal oldalak összegével.


$$
\overrightarrow {F_1} + \overrightarrow {F_2} = \frac {\Delta \overrightarrow{I_1}} {t} + \frac {\Delta \overrightarrow{I_2}} {t}
$$


Mi történt itt a belső erőkkel a bal oldalon? Azok összege bizony $\overrightarrow {0}$! Ez a harmadik törvényből következik!


$$
\overrightarrow {F_{1,2}} = -\overrightarrow {F_{2,1}}
$$


Vagyis valóban:


$$
\overrightarrow {F_{1,2}} + \overrightarrow {F_{2,1}} = \overrightarrow {0}
$$


Tegyük fel, hogy a külső erők eredője is $\overrightarrow {0}$! Ekkor szorozhatunk $t$-vel és kapjuk:


$$
\overrightarrow {0} = \Delta \overrightarrow {I_1} + \Delta \overrightarrow {I_2}
$$


Ezt még kicsit átrendezhetjük:


$$
\overrightarrow {0} = \overrightarrow {I_1} - \overrightarrow {I_{1,0}} + \overrightarrow {I_2} - \overrightarrow {I_{2,0}}
$$



$$
\overrightarrow {I_{1,0}} + \overrightarrow {I_{2,0}} = \overrightarrow {I_1} + \overrightarrow {I_2}
$$


Utolsó egyenletünk azt jelenti, hogy a rendszer összlendülete állandó! Mi csak két test esetére mutattuk meg a levezetést, de ez általánosítható akárhány test esetére is. A második törvényt felírva az összes testre és az egyenleteket összeadva, a belső erők összege nulla lesz. Amennyiben a külső erők eredője nulla, a jobb oldalon álló impulzusváltozások összege is nulla lesz. Ez viszont azt jelenti, hogy az összimpulzus nem változik. Kimondhatjuk tehát pontrendszerek esetére az impulzusmegmaradás tételét!

>**Amennyiben a külső erők eredője 0, a pontrendszer összimpulzusa állandó. Ez az impulzusmegmaradás tétele.**

## Példák
1. Két korcsolyázó egymással szemben áll a jégen. A bal oldali tömege 40,0 kg, a jobb oldali 60,0 kg. Az első, 40,0 kg-os korcsolyázó meglöki a másodikat, és ezáltal $3,00 \frac {m} {s}$ nagyságú sebességre tesz szert. Mekkora lesz az ellenkező irányú sebessége a másik, 60 kg-os korcsolyázónak? A súrlódás elhanyagolható és a korcsolyázók csak állnak a jégen a lökéstől eltekintve, tehát nem hajtják magukat!

A kezdeti lendület nulla. A lökés utáni összlendület is nulla kell legyen. Az $\overrightarrow {I_1}$ és $\overrightarrow {I_2}$ vektorok vízszintesek, de ellentétes irányúak, hisz a sebességekre is ez igaz. Így a vektorok vektori összegének hossza a két vektor hosszának különbsége.


$$
I_2 - I_1 = 0
$$



$$
m_2v_2 - m_1v_1 = 0
$$



$$
60 \times v_2 - 40 \times 3 = 0
$$



$$
60v_2 -120 = 0
$$



$$
60v_2 = 120
$$



$$
v_2 = 2,00 \frac {m} {s}
$$


2. Egy ballisztikus inga tömege 2,00 kg. Az inga kezdetben függőlegesen nyugalomban lóg, mikor eltalálja a 20 g tömegű puskagolyó $600 \frac {m} {s}$ sebességgel. Az ütközés ideje igen rövid, ezután a golyó az ingában ragad, együtt mozognak. Mekkora az inga sebessége, miután a puskagolyó lefékeződött? Milyen magasra lendül az ingatest?

[Az eredeti balisztikus inga](https://www.youtube.com/watch?v=DUf7Kv9FeSM)

[A ballisztikus inga példa szimulációja](https://alexerdei73.github.io/physics-engine/project/#cdde6490-8528-4ed7-b8a0-77f7cc959b41)

A golyó lefékeződése igen rövid idő alatt történik, tehát a folyamatot két részre bonthatjuk. Először a golyó lefékeződik, és az ingatest a golyóval közös sebességet vesz fel. Legyen a golyó kezdeti sebessége $v_0$, a közös sebesség $v$. A golyó tömege $m$, a zsák és a golyó össztömege $M$! Először csak az ütközést vizsgáljuk, melyben a mechanikai energia nem marad meg, de az impulzus igen, hisz a külső erők eredője nulla, a golyót a súrlódás fékezi le, amely belső erő a golyó és az ingatest között.

Az ütközés előtti lendület:


$$
I_0 = mv_0 = 0,020 \times 600 = 12 \frac {kgm} {s}
$$


Az ütközés utáni lendület:


$$
I = Mv = 2,020v
$$


A lendület megmarad az ütközés során:


$$
I_0 = I
$$



$$
12 = 2,020v
$$



$$
v = \frac {12} {2,020} = 5,941 \frac {m} {s}
$$


Az ütközés után a mechanikai energia már megmarad, hisz az ingára csak a nehézségi erő és a kényszererő hat, amikor a súrlódás megszűnt, hisz a golyó lefékeződött. A fékeződés olyan rövid ideig tart, hogy az inga elmozdulása ezalatt elhanyagolható.

A kezdeti mechanikai energia:


$$
E_{m,0} + E_{h,0} = \frac {M} {2} v^2 + 0 = \frac {2,020} {2} 5,941^2 = 35,65J
$$


A mechanikai energia a lengés legmagasabb pontján:


$$
E_m + E_h = 0 + Mgh = 2,02 \times 9,81 \times h
$$


A mechanikai energia állandó:


$$
E_{m,0} + E_{h,0} = E_m + E_h
$$



$$
35,65 = 2,020 \times 9,81 \times h
$$



$$
35,65 = 19,82 \times h
$$



$$
h = \frac {35,65} {19,82} = 1,799m
$$


Tehát az inga $1,80 m$ magasba lendül, mely jól mérhető. Becsüljük meg az ingatest elmozdulását, ha a golyó $d = 20 cm$ úton áll meg az ingatest belsejében!
Az idő is ismeretlen, jelöljük $t$-vel.

A golyót érő erő:


$$
|F_e| = m|a_1| = m \frac {|v - v_0|} {t} = 0,02 \times \frac {600 - v} {t} = \frac {12 - 0,02v} {t}
$$


A zsákot érő ugyanekkora ellenerő:


$$
F_e = (M - m)a_2 = (M - m) \frac {v} {t} = 2,00 \frac {v} {t} = \frac {2v} {t}
$$



$$
\frac {12 - 0,02v} {t} = \frac {2v} {t}
$$



$$
12 - 0,02v = 2v
$$



$$
12 = 2,02v
$$



$$
v = \frac {12} {2,02} = 5,941 \frac {m} {s}
$$


Tehát újra megkaptuk a közös sebességet, némivel bonyolultabban! A gyorsulások:


$$
a_1 = \frac {v - v_0} {t} = \frac {5,941 - 600} {t} = \frac {-594,1} {t}
$$



$$
a_2 = \frac {v} {t} = \frac {5,941} {t}
$$


Az utak:


$$
s_1 = v_0t + \frac {a_1} {2} t^2 = 600t - 297,05t = 302,95t
$$



$$
s_2 = \frac {a_2} {2}t^2 = 2,9705t
$$


Tudjuk, hogy:


$$
s_1 = s_2 + d
$$



$$
302,95t = 2,9705t + 0,20
$$



$$
299,98t = 0,20
$$



$$
t = \frac {0,20} {299,98} = 6,667 \times 10^{-4}s
$$


Ez tényleg igen rövid időtartam a folyamat teljes idejéhez képest! A zsák elmozdulása az ütközés alatt:


$$
s_2 = 2,9705t = 2,9705 \times 6,667 \times 10^{-4} = 1,980 \times 10^{-3}m = 1,98mm
$$


Az elhanyagolt elmozdulás nem egészen $2 mm$. Ezen a távolságon az ingatest emelkedése elhanyagolható, tehát az elmozdulás vízszintesnek tekinthető. (Az emelkedés kb. $1\mu m$, mely teljesen lényegtelen a kb. $1 cm$-es számítási pontosságunkhoz képest).

---

## Feladatok

1. Egy 800 kg tömegű ágyúcsőből vízszintes irányban kilőnek egy 10 kg tömegű lövedéket 400 m/s sebességgel. Mekkora sebességgel lökődik vissza az ágyúcső közvetlenül a lövés után, ha a fékberendezés még nem lépett működésbe?
2. Egy 40 tonnás vasúti kocsi 4 m/s sebességgel haladva nekiütközik egy álló, 60 tonnás vasúti kocsinak. Az ütközés után a két kocsi összekapcsolódva halad tovább. Mekkora lesz a közös sebességük?
3. Egy 70 kg tömegű űrhajós szerelés közben elhajít egy 2 kg tömegű csavarkulcsot 5 m/s sebességgel. Mekkora sebességgel sodródik hátrafelé az űrhajós a dobás következtében (az űrhajóhoz képest)?
4. Egy 50 kg tömegű fiú áll egy 100 kg tömegű, álló csónakban a tó közepén. A fiú hirtelen kiugrik a csónakból a vízbe 3 m/s vízszintes sebességgel. Mekkora sebességgel indul el a csónak az ellenkező irányba?
5. Egy 2 kg tömegű golyó 6 m/s sebességgel halad jobbra, és centrálisan, rugalmatlanul ütközik egy vele szemben, balra haladó 4 kg tömegű, 3 m/s sebességű golyóval. Mekkora és milyen irányú lesz a golyók sebessége az ütközés után, ha együtt mozognak tovább?