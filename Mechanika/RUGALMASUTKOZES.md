# A tökéletesen rugalmas ütközés

## Ütközések fogalma

Amikor két test hétköznapi értelemben összeütközik, akkor a fizikában is ütközésről beszélünk. Hétköznapi értelemben általában az a fontos, milyen változás következik be a test belső szerkezetében az ütközés következtében. Például autók összeütközésekor: mennyire sérül meg az autó, milyen drága a javítás, történik-e sérülés az autóban ülőkkel, stb.

Mi most csak **pontszerű testek ütközésével** fogunk foglalkozni, tehát a testek belső szerkezete nem fontos számunkra egyáltalán. Számunkra az lesz a fontos, hogy a testek sebessége hogyan változik meg. Láttunk már ilyen jellegű ütközésre példát a ballisztikus inga esetében. Ott az ingatest és a golyó összimpulzusa állandó volt az ütközés rövid ideje alatt. Ez két okból is így van:

1.  Egyrészt a külső erők eredője ez esetben majdnem nulla (eltekintve a golyóra ható nehézségi erőtől, melyet ütközés előtt nem egyensúlyoz ki semmi). Ha a külső erők eredője nulla, akkor az összimpulzus állandó.
2.  Akkor is állandónak tekinthető azonban az impulzus, ha a külső erők eredője nem nulla, de az ütközés idejétől nem függ ez az erő. Az ütközés ideje általában nagyon rövid összehasonlítva a mozgások jellemző idejével, tehát a lendület változása a második törvény miatt elhanyagolható.

Ez a múltkori levezetésünkben onnan látszik, hogy amikor az idővel szorzunk mindkét oldalon, akkor a bal oldalon nullát kapunk, de csak közelítőleg, hiszen a külső erők eredője nem nulla, de az idő, amivel szorzunk, az elhanyagolhatóan kicsiny. Így az egyenlet bal oldalát most is nullának tekinthetjük, vagyis az impulzus megmaradó mennyiségnek tekinthető ebben az esetben is.

> **Tömegpontok ütközése esetében a lendület általánosan megmaradó mennyiség. Ennek oka, hogy az ütközés idejét elhanyagolhatjuk.**

Tehát a lendület megmaradása minden esetben alkalmazható a tömegpontok ütközése esetén.

## Centrális és ferde ütközések

Amikor az ütközés egy egyenes vonalon zajlik le, akkor **centrális ütközésről** beszélünk. Ez tömegpontok ütközése esetén azt jelenti, hogy a pontokat összekötő egyenes a sebességek és ezáltal az impulzusok iránya is egyben. Tehát a pontszerű testek centrális ütközés esetén egy egyenes mentén mozognak az ütközés alatt. A ballisztikus inga példája is ilyen ütközés volt. Mi főleg centrális ütközésekkel fogunk foglalkozni. A nem centrális ütközések elnevezése: **ferde ütközés**.

## Tökéletesen rugalmas ütközések

> **Ha az impulzus mellett a mechanikai energia is megmarad az ütközés során, akkor tökéletesen rugalmas ütközésről beszélünk.**

Az ilyen ütközések a valóságban csak megközelíthetők, de sosem valósulnak meg teljesen. Mindig van némi mechanikai energiaveszteség, akárhogy is próbáljuk ezt csökkenteni. Kicsiny, atomi vagy szubatomi részecskék ütközése esetén gyakoriak a tökéletesen rugalmas ütközések, hiszen ott nincs súrlódás vagy közegellenállás.

### Kísérlet
[Ütközések demonstrációja légpárnás sínen](https://www.youtube.com/watch?v=FFinP5xL6Wk)

### Szimuláció
[Rugalmas centrális ütközés egyenlő tömegekkel](https://alexerdei73.github.io/physics-engine/project/#2fd33c53-2acf-46ec-8661-98e8116ead0e)

Ebben a szimulációban kipróbálhatjuk a kísérletben látható eseteket és más ütközéseket is.

### Példa
Egy $0,100\,kg$ tömegű test $1,00\,\frac{m}{s}$ sebességgel csapódik a nyugalomban lévő $0,200\,kg$ tömegű testbe, mellyel tökéletesen rugalmasan, centrálisan ütköznek. Mekkora a testek sebessége az ütközés utáni pillanatban?

Felírjuk a megmaradási tételeket az ütközési folyamatra. A mechanikai energia az ütközés előtt és után is csak mozgási energia:


$$
\frac {m_1v_{1,0}^2} {2} + \frac {m_2v_{2,0}^2} {2} = \frac {m_1v_1^2} {2} + \frac {m_2v_2^2} {2}
$$


A lendület megmaradása:


$$
m_1v_{1,0} + m_2v_{2,0} = m_1v_1 + m_2v_2
$$


Helyettesítsük be az adatokat!


$$
\frac {0,1 \cdot 1^2} {2} + 0 = \frac {0,1 v_1^2} {2} + \frac {0,2 v_2^2} {2}
$$



$$
0,1 \cdot 1 + 0 = 0,1 v_1 + 0,2 v_2
$$


Szorozzuk meg az első egyenletet 20-szal és másodikat pedig 10-zel!

1.  
$$
1 = v_1^2 + 2v_2^2
$$

2.  
$$
1 = v_1 + 2v_2
$$


Fejezzük ki $v_1$-et a másodikból:

$$
v_1 = 1 - 2v_2
$$


Helyettesítsük vissza az elsőbe:

$$
1 = (1 - 2v_2)^2 + 2v_2^2
$$



$$
1 = 1 - 4v_2 + 4v_2^2 + 2v_2^2
$$



$$
0 = 6v_2^2 - 4v_2
$$



$$
0 = (3v_2 - 2)v_2
$$


A megoldások:

$$
v_2 = 0 \quad \text{vagy} \quad v_2 = \frac {2} {3} = 0,6667 \frac {m} {s}
$$


A két megoldás közül az első a kezdeti, ütközés előtti állapot. A számunkra ismeretlen megoldás tehát:
**$v_1 = -0,3334\,\frac{m}{s}$** és **$v_2 = 0,6667\,\frac{m}{s}$**.

Ellenőrizhető a szimulációval is.

### Az általános formulák levezetése

Az általános képletek is levezethetők egy kis algebrával $v_1$-re és $v_2$-re. Itt a sebességek tulajdonképpen sebességkomponensek az ütközés egyenesének irányában, tehát előjelesek. Általában a pozitív tengely iránya balról jobbra mutat. A teljesség kedvéért levezetjük a formulákat!


$$
\frac {m_1v_{1,0}^2} {2} + \frac {m_2v_{2,0}^2} {2} = \frac {m_1v_1^2} {2} + \frac {m_2v_2^2} {2}
$$



$$
m_1v_{1,0} + m_2v_{2,0} = m_1v_1 + m_2v_2
$$


A trükk az energiaegyenlet átrendezése 2-vel való szorzás után.


$$
m_1v_{1,0}^2 - m_1v_1^2 = m_2v_2^2 - m_2v_{2,0}^2
$$


Szorzattá alakítjuk az oldalakat:


$$
m_1(v_{1,0} + v_1)(v_{1,0} - v_1) = m_2(v_2 + v_{2,0})(v_2 - v_{2,0})
$$


Átrendezzük az impulzusmegmaradást is:


$$
m_1v_{1,0} - m_1v_1 = m_2v_2 - m_2v_{2,0}
$$



$$
m_1(v_{1,0} - v_1) = m_2(v_2 - v_{2,0})
$$


Ezzel az egyenlettel elosztjuk az átrendezett energiaegyenletet:


$$
v_{1,0} + v_1 = v_2 + v_{2,0}
$$


$v_1$-et megkapjuk, ha kifejezzük $v_2$-t az impulzusegyenletből, majd $v_2$ helyére beírjuk az impulzusegyenletbe. Ezután kifejezzük $v_1$-et.


$$
v_2 = v_{1,0} + v_1 - v_{2,0}
$$



$$
m_1v_{1,0} + m_2v_{2,0} = m_1v_1 + m_2(v_{1,0} + v_1 - v_{2,0})
$$



$$
m_1v_{1,0} - m_2v_{1,0} + 2m_2v_{2,0} = m_1v_1 + m_2v_1
$$



$$
(m_1 - m_2)v_{1,0} + 2m_2v_{2,0} = (m_1 + m_2)v_1
$$


A végső formula:

$$
v_1 = \frac {(m_1 - m_2)v_{1,0} + 2m_2v_{2,0}} {m_1 + m_2}
$$


Kipróbálhatjuk az általános formulánkat a példánk adataival:


$$
v_1 = \frac {(0,1 - 0,2)1 + 2 \cdot 0,2 \cdot 0} {0,1 + 0,2} = \frac {-0,1} {0,3} = -0,3334 \frac {m} {s}
$$


Látszik, hogy helyes eredményt kapunk. $v_2$-t teljesen hasonlóan kapjuk meg. Itt csak az eredményt közöljük:


$$
v_2 = \frac {(m_2 - m_1)v_{2,0} + 2m_1v_{1,0}} {m_1 + m_2}
$$


Ennek az ellenőrzése a példánk alapján:


$$
v_2 = \frac {(0,2 - 0,1) \cdot 0 + 2 \cdot 0,1 \cdot 1} {0,1 + 0,2} = \frac {0,2} {0,3} = 0,6667 \frac {m} {s}
$$


> **Megjegyzés:** A képleteket nem érdemes bemagolni, inkább számoljunk úgy, ahogy a példamegoldásnál tettük!

### Speciális esetek

1.  **Egyenlő tömegek, egyik áll:** $m_1 = m_2 = m$ és $v_{1,0} = v_0$, $v_{2,0} = 0$
    *   $v_1 = 0$
    *   $v_2 = v_0$
    *(A testek sebességet cserélnek)*

2.  **Egyenlő tömegek, szembe jönnek:** $m_1 = m_2 = m$ és $v_{1,0} = -v_{2,0} = v_0$
    *   $v_1 = -v_0$
    *   $v_2 = v_0$
    *(Visszapattannak ugyanolyan sebességgel)*

3.  **A célpont sokkal nehezebb:** $m_2 \gg m_1$ és $v_{1,0} = v_0$, $v_{2,0} = 0$ (Pl. pingponglabda a falnak)
    *   $v_1 \approx -v_0$
    *   $v_2 \approx 0$
    *(A kicsi visszapattan, a nagy meg sem mozdul)*

---

### Feladatok

1. Egy $0,50 \text{ kg}$ tömegű kiskocsi $4,0 \text{ m/s}$ sebességgel halad egy légpárnás sínen, amikor centrálisan és tökéletesen rugalmasan ütközik egy előtte, azonos irányban, de lassabban, $1,0 \text{ m/s}$ sebességgel haladó $0,30 \text{ kg}$ tömegű kiskocsival. Számítsa ki mindkét kiskocsi sebességét az ütközés után!

2. Két jégkorong súrlódásmentesen csúszik egymással szemben egy vízszintes jégpályán. Az „A” korong tömege $0,20 \text{ kg}$, sebessége $3,0 \text{ m/s}$. A „B” korong tömege $0,40 \text{ kg}$, sebessége $2,0 \text{ m/s}$ (az „A” koronggal ellentétes irányban). Mekkora lesz a korongok sebessége és haladási iránya a tökéletesen rugalmas, centrális ütközés után?

3. Egy proton ($m$) $v_0$ sebességgel frontálisan, rugalmasan ütközik egy nyugalomban lévő héliumatommaggal (alfa-részecske, tömege $4m$).
a) Mekkora sebességgel halad tovább a proton és a héliummag az ütközés után $v_0$ függvényében?
b) A proton eredeti mozgási energiájának hányad részét adta át a héliummagnak?