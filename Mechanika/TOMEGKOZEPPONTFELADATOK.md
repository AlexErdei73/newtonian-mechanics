# Feladatok a tömegközéppontra

## 1. Példa
Mutassuk meg, hogy a tömegközéppont sebessége nem változik tökéletesen rugalmas ütközéskor sem! Használjuk a következő képleteket a centrális, tökéletesen rugalmas ütközésre:


$$
v_1 = \frac {(m_1 - m_2)v_{1,0} + 2m_2v_{2,0}} {m_1 + m_2}
$$



$$
v_2 = \frac {(m_2 - m_1)v_{2,0} + 2m_1v_{1,0}} {m_1 + m_2}
$$


Természetesen ezeket a képleteket úgy kaptuk, hogy felhasználtuk az impulzus megmaradását. Tehát az összimpulzus nyilván nem változhat rugalmas ütközés során sem. Ezt vissza kell kapjuk a fenti formulákból is.

A tömegközéppont sebessége:

$$
v_{TKP} = \frac {m_1v_1 + m_2v_2} {m_1 + m_2}
$$


Nézzük csak a számlálót! Helyettesítsük be a fenti $v_1$ és $v_2$ kifejezéseket:


$$
m_1v_1 + m_2v_2 = m_1 \frac {(m_1 - m_2)v_{1,0} + 2m_2v_{2,0}} {m_1 + m_2} + m_2 \frac {(m_2 - m_1)v_{2,0} + 2m_1v_{1,0}} {m_1 + m_2}
$$


Szorozzuk meg az egyenlet mindkét oldalát $(m_1 + m_2)$-vel, hogy eltűnjön a tört:


$$
(m_1v_1 + m_2v_2)(m_1 + m_2) = m_1^2v_{1,0} - m_1m_2v_{1,0} + 2m_1m_2v_{2,0} + m_2^2v_{2,0} - m_1m_2v_{2,0} + 2m_1m_2v_{1,0}
$$


Vonjunk össze a jobb oldalon:


$$
(m_1v_1 + m_2v_2)(m_1 + m_2) = (m_1^2 + m_1m_2)v_{1,0} + (m_2^2 + m_1m_2)v_{2,0}
$$


Emeljük ki a tömegeket:


$$
(m_1v_1 + m_2v_2)(m_1 + m_2) = m_1(m_1 + m_2)v_{1,0} + m_2(m_1 + m_2)v_{2,0}
$$


Osszunk le $(m_1 + m_2)$-vel:


$$
m_1v_1 + m_2v_2 = m_1v_{1,0} + m_2v_{2,0}
$$


Az összlendület tehát csakugyan állandó, ahogyan annak lennie is kell. Ebből következik:


$$
v_{TKP} = \frac {m_1v_{1,0} + m_2v_{2,0}} {m_1 + m_2} = v_{TKP,0}
$$


Számításunk tehát világosan mutatja, hogy a tömegközéppont sebessége nem változott meg a rugalmas, centrális ütközés alatt sem, persze most nem mozog együtt a tömegekkel, mint tökéletesen rugalmatlan ütközés után.

### Feladat a példához
Ferde, tökéletesen rugalmas ütközés során $0,1kg$ tömegű testek ütköznek úgy, hogy az $5 \frac {m} {s}$ sebességű test az álló testnek ütközik, és $4 \frac {m} {s}$ sebességgel pattan róla le. Mekkora lesz a kezdetben nyugvó test sebessége az ütközés után? Mekkora szöget zárnak be az ütközés utáni sebességek az $5 \frac {m} {s}$ nagyságú sebességvektorral? Válasszuk ez utóbbi sebességet az x tengely irányának. Mutassuk meg, hogy $v_{TKP,x}$ és $v_{TKP,y}$ sem változik meg az ütközés során!

## 2. Példa
Egy $0,1kg$ tömegű pont koordinátái méterben $(1; 2)$, sebességvektora $\frac {m} {s}$-ban $(-1; 3)$. Egy másik, $0,3kg$ tömegű pont koordinátái $(4; 6)$.
Számítsuk ki a tömegközéppont koordinátáit!
Mutassuk meg, hogy a tömegközéppont a tömegpontokat összekötő egyenesen van rajta, és a tömegpontok által meghatározott szakaszt a tömegekkel fordított arányban osztja, tehát a nagyobb tömegű testhez van közelebb!
Számítsuk ki a második test sebességvektorának koordinátáit is, ha a tömegközéppont nyugalomban van!

[Második tömegközéppont példa szemléltetése](https://www.geogebra.org/m/peygwq34)

A koordináták számítása:

$$
x_{TKP} = \frac {m_1x_1 + m_2x_2} {M} = \frac {0,1 \cdot 1 + 0,3 \cdot 4} {0,4} = \frac {1,3} {0,4} = 3,25m
$$



$$
y_{TKP} = \frac {m_1y_1 + m_2y_2} {M} = \frac {0,1 \cdot 2 + 0,3 \cdot 6} {0,4} = \frac {2} {0,4} = 5m
$$


Tehát a tömegközéppont koordinátái $(3,25; 5)$.

A pontokat összekötő egyenes egyenlete:

$$
y = mx + b
$$


Ide behelyettesítjük mindkét pont koordinátáit!

1. 
$$
2 = m + b
$$

2. 
$$
6 = 4m + b
$$


A második egyenletből az elsőt kivonva:

$$
4 = 3m \quad \rightarrow \quad m = \frac {4} {3} = 1,3333
$$



$$
b = 2 - m = 2 - 1,3333 = 0,6667
$$


Egyenesünk egyenlete:

$$
y = 1,3333x + 0,6667
$$


Behelyettesítve ide $x_{TKP}$-t:

$$
y = 1,3333 \cdot 3,25 + 0,6667 = 5,000 = y_{TKP}
$$


Tehát a tömegközéppont rajta van a két pontot összekötő egyenesen. Számítsuk ki a távolságokat is!


$$
d_1 = \sqrt {(3,25 - 1)^2 + (5 - 2)^2} = \sqrt{2,25^2 + 3^2} = 3,75
$$



$$
d_2 = \sqrt {(3,25 - 4)^2 + (5 - 6)^2} = \sqrt{(-0,75)^2 + (-1)^2} = 1,25
$$


Az arány:

$$
\frac {d_2} {d_1} = \frac {1,25} {3,75} = \frac {1} {3} = \frac {m_1} {m_2}
$$


A sebesség számítása (ha $v_{TKP} = 0$):


$$
v_{TKP,x} = \frac {m_1v_{1,x} + m_2v_{2,x}} {M}
$$



$$
0 = \frac {0,1 \cdot (-1) + 0,3 \cdot v_{2,x}} {0,4}
$$



$$
0 = -1 + 3v_{2,x} \quad \rightarrow \quad v_{2,x} = 0,3333\,\frac {m} {s}
$$



$$
v_{TKP,y} = \frac {m_1v_{1,y} + m_2v_{2,y}} {M}
$$



$$
0 = \frac {0,1 \cdot 3 + 0,3 \cdot v_{2,y}} {0,4}
$$



$$
0 = 3 + 3v_{2,y} \quad \rightarrow \quad v_{2,y} = -1 \frac {m} {s}
$$


A $0,3kg$ tömegű test sebességvektora tehát $(0,3333; -1) \frac {m} {s}$ egységben.

## 3. Példa
Egy $100kg$ tömegű csónak $10m$ hosszú, tömegközéppontja $5m$-nél, tehát a hosszúságának felénél van. A csónak állóvízen úszik, mely teljesen nyugodt. Egy $40kg$ tömegű fiú átsétál a csónak bal oldali végéből a jobb oldali végébe. Hol van a rendszer tömegközéppontja kezdetben, ha az origó a csónak bal szélénél van, és az x tengely a csónakkal párhuzamosan jobbra mutat? Hol van a tömegközéppont a séta végén? A közegellenállás elhanyagolható. Hol van a csónak tömegközéppontja a séta végén? Mi a fiú x koordinátája ekkor?


$$
x_{TKP,0} = \frac {m_1x_{1,0} + m_2x_{2,0}} {M} = \frac {100 \cdot 5 + 40 \cdot 0} {140} = 3,571m
$$


A tömegközéppont nyugalomban van, és a belső erők az összlendületet, mely nulla, nem változtatják meg. A tömegközéppont sebessége:


$$
\vec v_{TKP} = \frac {\sum_{i = 1}^{N} m_i\vec v_i} {M}
$$



$$
M \vec v_{TKP} = \vec I
$$


Ez alapján mondhatjuk, hogy a tömegközéppont sebessége nulla, hiszen az összlendület is nulla. A tömegközéppont tehát nyugalomban marad a folyamat során.


$$
x_{TKP} = x_{TKP,0}
$$


Tegyük fel, hogy a csónak balra mozdult, és $s$ utat tett meg. Ekkor a csónak új középpontja $5-s$, a fiú új helye (aki a csónak jobb szélén áll) $10-s$.


$$
x_{TKP} = \frac {m_1x_1 + m_2x_2} {M} = \frac {100(5 - s) + 40(10 - s)} {140}
$$



$$
\frac {100(5 - s) + 40(10 - s)} {140} = 3,571
$$



$$
500 - 100s + 400 - 40s = 500
$$



$$
-140s + 400 = 0
$$



$$
s = \frac {400} {140} = 2,857m
$$


A csónak tehát $2,86m$-t mozdul balra, míg a sétáló fiú $7,14m$-t jobbra (a vízhez képest). A csónak tömegközéppontja ekkor $2,14m$-nél van.

---

## Feladatok

1. Három pontszerű testet helyezünk el egy koordináta-rendszerben.
- $m_1 = 1 kg$, helye: $(0; 0)$
- $m_2 = 2 kg$, helye: $(3; 0)$
- $m_3 = 3 kg$, helye: $(0; 4)$
Számítsa ki a rendszer tömegközéppontjának koordinátáit! Milyen távol van a tömegközéppont az origótól?

2. Két jégkorong csúszik a jégen.
- Az „A” korong ($2 kg$) sebessége $v_A = (4; 2) \frac {m} {s}$.
- A „B” korong ($3 kg$) sebessége $v_B = (-1; 4) \frac {m} {s}$.
Határozza meg a rendszer tömegközéppontjának sebességvektorát! Mekkora a tömegközéppont sebességének nagysága?

3. Egy $200 kg$ tömegű, $6 m$ hosszú tutaj nyugszik a vízen. A tutaj két végén áll két ember: a bal végén Ali ($80 kg$), a jobb végén Béla ($60 kg$). Egyszerre indulnak el egymás felé, és a tutaj közepén találkoznak (a tutajhoz képest középen).
Mennyit mozdult el a tutaj a vízhez képest, és milyen irányba, amíg a két ember találkozott? (A víz ellenállását hanyagoljuk el.)

4. Egy $0,5 kg$ tömegű fadarab úszik a vízen. Rajta ül egy $0,1 kg$ tömegű béka. A béka hirtelen vízszintesen elugrik a fadarabról, a parthoz képest $2 \frac {m} {s}$ sebességgel jobbra.
Mekkora sebességgel és milyen irányba indul el a fadarab közvetlenül az ugrás után? (A rendszer kezdeti összlendülete nulla.)
