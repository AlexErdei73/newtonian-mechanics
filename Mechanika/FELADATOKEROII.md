# Feladatok az erő témakörében II

## Példák

1. Egy fegyver csöve $70{,}0\text{ cm}$ hosszú, a golyó tömege $20{,}0\text{ g}$, a torkolati sebesség pedig $600\text{ }\frac{\text{m}}{\text{s}}$. Mekkora a golyó gyorsulása a csőben? Mekkora erő gyorsítja a golyót? Mennyi idő alatt gyorsul fel a golyó a csőben? A gyorsulást tekintsük egyenletesnek!

Ez a feladat elsőre nehéznek tűnhet, hiszen sem a gyorsulás, sem az idő nem ismert közvetlenül. Két egyenletünk van azonban: az egyik a gyorsulás, a másik a megtett út kiszámítására szolgál ($v_0 = 0$):

$$
a = \frac {v} {t}
$$

$$
s = \frac {a} {2} \cdot t^2
$$

Váltsuk át az adatokat alapvető SI-mértékegységekbe ($s = 0{,}7\text{ m}$ és $m = 0{,}02\text{ kg}$), majd helyettesítsük be őket a képletekbe:

$$
a = \frac {600} {t}
$$

$$
0{,}7 = \frac {a} {2} \cdot t^2
$$

Az egyenletrendszer algebrailag egyszerűen átrendezhető:

$$
a \cdot t = 600
$$

$$
1{,}4 = (a \cdot t) \cdot t
$$

Behelyettesítve az első egyenletből kapott $a \cdot t = 600$ értéket a második összefüggésbe:

$$
1{,}4 = 600 \cdot t
$$

$$
t = \frac {1{,}4} {600} \approx 0{,}002333\text{ s} = 2{,}333\text{ ms}
$$

Most a kapott időértékkel kiszámíthatjuk a golyó hatalmas gyorsulását:

$$
a = \frac {600} {0{,}002333} \approx 257\ 143\text{ }\frac {\text{m}} {\text{s}^2}
$$

Végül a dinamika alaptörvénye alapján a gyorsítóerő:

$$
F_e = m \cdot a = 0{,}020 \cdot 257\ 143 \approx 5143\text{ N} \approx 5{,}14\text{ kN}
$$

A fegyver csövében a golyót tehát $5{,}14\text{ kN}$ átlagos erő gyorsítja fel mindössze $2{,}33\text{ ms}$ idő alatt.

2. A golyó egy fahasábra érkezve $600\text{ }\frac{\text{m}}{\text{s}}$ sebességgel fúródik be, és $30{,}0\text{ cm}$ távolságon teljesen lefékeződik. A golyó tömege továbbra is $20\text{ g}$. Mekkora a lassulás, a fékeződés időtartama és a fahasáb által kifejtett fékezőerő?

A mozgásegyenletek ($v = 0$ és $s = 0{,}3\text{ m}$ behelyettesítésével):

$$
a = \frac {v - v_0} {t} \implies a = \frac {-600} {t}
$$

$$
s = v_0 \cdot t + \frac {a} {2} \cdot t^2 \implies 0{,}3 = 600 \cdot t + \frac {a} {2} \cdot t^2
$$

Rendezzük az egyenletrendszert:

$$
a \cdot t = -600
$$

$$
0{,}6 = 1200 \cdot t + (a \cdot t) \cdot t
$$

Helyettesítsük be az $a \cdot t = -600$ értéket a második egyenletbe:

$$
0{,}6 = 1200 \cdot t - 600 \cdot t
$$

$$
0{,}6 = 600 \cdot t
$$

$$
t = \frac{0{,}6}{600} = 0{,}001\text{ s} = 1{,}00\text{ ms}
$$

A golyó pontosan $1\text{ ms}$ alatt fékeződik le a fában. Számítsuk ki a lassulást:

$$
a = \frac {-600} {0{,}001} = -600\ 000\text{ }\frac {\text{m}} {\text{s}^2}
$$

A negatív előjel jelzi, hogy a gyorsulásvektor a mozgással ellentétes irányú (lassulás). A fékezőerő nagysága:

$$
|F_e| = m \cdot |a| = 0{,}02 \cdot 600\ 000 = 12\ 000\text{ N} = 12{,}0\text{ kN}
$$

A fahasáb által kifejtett átlagos fékezőerő nagysága $12{,}0\text{ kN}$.

3. Egy vadászrepülőgép egy $600\text{ m}$ hosszú kifutópályán gyorsítva száll fel, az elemelkedési sebessége $280\text{ }\frac{\text{km}}{\text{h}}$. Ha a gép tömege $17\ 000\text{ kg}$, mekkora tolóerő szükséges a felszálláshoz? A mozgást tekintsük állandó gyorsulásúnak!

A feladatmegoldás legelején ne felejtsük el átváltani a sebességet SI-egységbe: $v = \frac{280}{3{,}6} \approx 77{,}78\text{ }\frac{\text{m}}{\text{s}}$.

$$
a = \frac {77{,}78} {t}
$$

$$
600 = \frac {a} {2} \cdot t^2
$$

Átrendezve:

$$
a \cdot t = 77{,}78
$$

$$
1200 = (a \cdot t) \cdot t \implies 1200 = 77{,}78 \cdot t
$$

$$
t = \frac {1200} {77{,}78} \approx 15{,}43\text{ s}
$$

A felszálláshoz szükséges egyenletes gyorsulás értéke:

$$
a = \frac {77{,}78} {15{,}43} \approx 5{,}041\text{ }\frac {\text{m}} {\text{s}^2}
$$

A dinamika alaptörvénye szerint a gyorsító eredő tolóerő:

$$
F_e = m \cdot a = 17\ 000 \cdot 5{,}041 \approx 85\ 697\text{ N} \approx 85{,}70\text{ kN}
$$

A hajtóművek által kifejtett hasznos tolóerő nagysága tehát $85{,}70\text{ kN}$.

---

### Gyakorló feladatok

**1. Vonat vészfékezése**
Egy $400\text{ tonna}$ tömegű szerelvény $108\text{ }\frac{\text{km}}{\text{h}}$ sebességgel halad a pályán. Vészfékezés során a fékek $200\text{ kN}$ állandó fékezőerőt fejtenek ki. Számítsd ki a vonat lassulását! Mennyi idő telik el a teljes megállásig, és mekkora a fékút hossza?

**2. Focilabda elrúgása**
Egy eredetileg álló, $450\text{ g}$ tömegű focilabdát a játékos úgy rúg el, hogy a lábfeje pontosan $0{,}05\text{ s}$ ideig érintkezik a labdával. A labda a rúgás után $30\text{ }\frac{\text{m}}{\text{s}}$ sebességgel repül el. Mekkora egyenletes gyorsulást szerzett a labda az érintkezés alatt, és mekkora volt a rúgás átlagos ereje?

**3. Nyílvessző kilövése íjból**
Egy íjász $70\text{ cm}$ hosszan feszíti meg az íj idegét. A kilőtt nyílvessző tömege $50\text{ g}$, és a kilövés pillanatában a torkolati sebessége $70\text{ }\frac{\text{m}}{\text{s}}$. Tételezzük fel, hogy a gyorsító erő állandó az íj teljes megfeszített hosszán! Mekkora gyorsulással indul el a nyílvessző, és mekkora átlagos erőt fejtett ki rá az íj?

**4. Repülőgép indítása katapulttal**
Egy repülőgép-hordozó anyahajón a gőzkatapult egy $90\text{ méter}$ hosszú pályán gyorsítja fel a repülőgépet álló helyzetből $270\text{ }\frac{\text{km}}{\text{h}}$ sebességre. A vadászgép tömege $25\,000\text{ kg}$. Mennyi ideig tart a katapultálás, és mekkora a katapult által kifejtett átlagos tolóerő (a repülőgép saját hajtóművének tolóerejét most hanyagoljuk el)?

**5. Autó töréstesztje**
Egy $1200\text{ kg}$ tömegű tesztautót $54\text{ }\frac{\text{km}}{\text{h}}$ sebességgel vezetnek neki egy merev betonfalnak. Az autó eleje az ütközés során pontosan $0{,}6\text{ m}$-t gyűrődik össze, amíg az utastér teljesen meg nem áll. Tekintsük a lassulást egyenletesnek a deformáció alatt! Mekkora lassulás éri az autót az ütközés közben, és mekkora átlagos erő hat rá a gyűrődési zónában?
