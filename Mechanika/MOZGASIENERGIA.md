# A mozgási energia

## A gyorsítási munka

Vizsgáljuk meg, mekkora a gyorsítási munka, ha egy $m$ tömegű testet $v_0$ kezdősebességről $v$ sebességre gyorsítunk fel. Legyen a gyorsítás időtartama $t$, a gyorsulás állandó, és jelöljük $a$-val.

A testre ható gyorsító eredő erő:

$$
F_e = m \cdot a = m \cdot \frac {v - v_0} {t}
$$

A gyorsítási szakasz hossza a négyzetes úttörvényből kifejezve ($a$ helyére a sebességváltozást behelyettesítve):

$$
s = v_0 \cdot t + \frac {a} {2} \cdot t^2 = \left(v_0 + \frac {v - v_0} {2}\right) \cdot t = \frac {2v_0 + (v - v_0)} {2} \cdot t
$$

$$
s = \frac {v_0 + v} {2} \cdot t
$$

A végzett gyorsítási munka az erő és az elmozdulás szorzataként:

$$
W = F_e \cdot s = m \cdot \frac {v - v_0} {t} \cdot \frac {v_0 + v} {2} \cdot t = \frac {m} {2} \cdot (v - v_0) \cdot (v + v_0) = \frac {m} {2} \cdot (v^2 - v_0^2)  
$$

$$
W = \frac {m \cdot v^2} {2} - \frac {m \cdot v_0^2} {2}
$$

Eredményünk egyértelműen megmutatja, hogy a $\frac {m \cdot v^2} {2}$ szerkezetű mennyiség kulcsfontosságú a gyorsítási munka kiszámításánál, hiszen ennek a fizikai állapotjelzőnek a megváltozása (különbsége) határozza meg a végzett munkát. Ezt a mennyiséget **mozgási energiának** (kinetikus energiának) nevezzük. A gyorsítási munka a test mozgási energiájának növelésére fordítódik. Mint minden energiafajta, ennek az egysége is a **joule** (J).

## Mozgási energia

> **A mozgási energia a test tömegének és a pillanatnyi sebessége négyzetének szorzatának a fele. Jele: $E_m$ vagy $E_k$.**

$$
E_m = \frac{1}{2} \cdot m \cdot v^2
$$

## A munkatétel

> **A testen végzett gyorsítási (vagy lassítási) munka egyenlő a test mozgási energiájának megváltozásával.**

$$
W = \Delta E_m = E_m - E_{m,0}
$$

A munkatételt mi a fenti levezetésben csak az egyenes vonalú, egyenletesen változó mozgás speciális esetére igazoltuk, de a tétel tetszőleges pályán történő, tetszőlegesen változó mozgásokra is általánosan érvényes.

## Példák

1. Egy $1300\text{ kg}$ tömegű gépkocsi felgyorsít $10{,}0\text{ }\frac{\text{m}}{\text{s}}$ sebességről $20{,}0\text{ }\frac{\text{m}}{\text{s}}$ sebességre. Mekkora a mozgási energiája kezdetben, és mekkorára nő a gyorsítás végére? Mekkora a motor által végzett gyorsítási munka, ha a belső veszteségektől eltekintünk? Számítsuk ki a munkát hagyományosan is, a gyorsulás, a gyorsítóerő és a megtett út meghatározásával! Egyeznek az eredmények?

A test kezdeti mozgási energiája:

$$
E_{m,0} = \frac {m \cdot v_0^2} {2} = \frac {1300 \cdot 10^2} {2} = 65\ 000\text{ J}
$$

A test végső mozgási energiája:

$$
E_m = \frac {m \cdot v^2} {2} = \frac {1300 \cdot 20^2} {2} = 260\ 000\text{ J}
$$

A munkatétel alapján a motor gyorsítási munkája a két energiaérték különbsége:

$$
W = \Delta {E_m} = E_m - E_{m,0} = 260\ 000 - 65\ 000 = 195\ 000\text{ J} = 195{,}0\text{ kJ}
$$

A gyorsítási munka tehát $195\text{ kJ}$. Számítsuk ki ezt a kinematika és dinamika felől is! Tételezzük fel önkényesen, hogy a gyorsítás időtartama pontosan $10\text{ s}$ volt:

$$
a = \frac {v - v_0} {t} = \frac {20 - 10} {10} = 1\text{ }\frac {\text{m}} {\text{s}^2}
$$

$$
F_e = m \cdot a = 1300 \cdot 1 = 1300\text{ N}
$$

A gyorsítási szakasz hossza a négyzetes úttörvény alapján:

$$
s = v_0 \cdot t + \frac {a} {2} \cdot t^2 = 10 \cdot 10 + \frac {1} {2} \cdot 10^2 = 100 + 50 = 150\text{ m}
$$

A mechanikai munka definíciója szerint:

$$
W = F_e \cdot s = 1300 \cdot 150 = 195\ 000\text{ J} = 195{,}0\text{ kJ}
$$

Látható, hogy a két különböző megközelítés pontosan ugyanazt a végeredményt adja, ami igazolja, hogy a munkatétel használatával rengeteg felesleges köztes számítást takaríthatunk meg.

2. Egy $0{,}10\text{ kg}$ tömegű követ függőlegesen feldobunk $5\text{ }\frac{\text{m}}{\text{s}}$ kezdősebességgel. Mekkora a nehézségi erő munkája, amíg a kő sebessége $2\text{ }\frac{\text{m}}{\text{s}}$-ra fékeződik le? Határozzuk meg az eredményt a munkatétel nélkül, a nehézségi erő és az elmozdulás közvetlen szorzatából is!

A kezdő és végső kinetikus energiák:

$$
E_{m,0} = \frac {m \cdot v_0^2} {2} = \frac {0{,}10 \cdot 5^2} {2} = 1{,}25\text{ J}
$$

$$
E_m = \frac {m \cdot v^2} {2} = \frac {0{,}10 \cdot 2^2} {2} = 0{,}20\text{ J}
$$

A munkatétel alapján a gravitáció által végzett munka:

$$
W = \Delta E_m = 0{,}20 - 1{,}25 = -1{,}05\text{ J}
$$

A nehézségi erő munkája negatív, mivel akadályozza a mozgást (lassítja a követ). Ellenőrizzük ezt dinamikai úton! A testre ható nehézségi erő nagysága ($g = 9{,}81\text{ }\frac{\text{m}}{\text{s}^2}$):

$$
F_e = G = m \cdot g = 0{,}1 \cdot 9{,}81 = 0{,}981\text{ N}
$$

A függőleges tengely menti lassulás értéke $a = -9{,}81\text{ }\frac{\text{m}}{\text{s}^2}$, a sebességváltozás pedig $\Delta v = v - v_0 = 2 - 5 = -3\text{ }\frac{\text{m}}{\text{s}}$. Az emelkedés időtartama:

$$
a = \frac {\Delta v} {t} \implies -9{,}81 = \frac {-3} {t} \implies t = \frac {-3} {-9{,}81} \approx 0{,}3058\text{ s}
$$

Az ezalatt megtett függőleges elmozdulás (emelkedési magasság):

$$
s = h = v_0 \cdot t + \frac {a} {2} \cdot t^2 = 5 \cdot 0{,}3058 + \frac {-9{,}81} {2} \cdot 0{,}3058^2 \approx 1{,}529 - 0{,}458 = 1{,}071\text{ m}
$$

Mivel a felfelé mutató elmozdulás és a lefelé ható nehézségi erő ellentétes irányúak ($\alpha = 180^\circ$):

$$
W = -F_e \cdot s = -0{,}981 \cdot 1{,}071 \approx -1{,}050\text{ J}
$$

A számítási pontosság határain belül az eredmények tökéletesen megegyeznek.

---

## Feladatok

**1. Haladó autó energiája**
Mekkora a mozgási energiája egy $1200\text{ kg}$ tömegű személygépkocsinak, amikor kerekítve $72\text{ km/h}$ állandó sebességgel halad az autópályán? (A számítás előtt ne felejtsd el átváltani a sebességet SI-egységbe!)

**2. Test felgyorsítása nyugalomból**
Egy $2\text{ kg}$ tömegű, kezdetben álló testet pontosan $40\text{ J}$ gyorsítási munka árán hozunk mozgásba egy súrlódásmentes vízszintes felületen. Mekkora lesz a test végsebessége a gyorsítási folyamat lezárulásakor?

**3. Labda megállítása**
Egy $0{,}4\text{ kg}$ tömegű labda $15\text{ }\frac{\text{m}}{\text{s}}$ sebességgel érkezik a kapura, majd a kapus magabiztosan megfogja azt (a labda megáll). Mekkora munkát végzett a labda megállítása során a kapus keze által kifejtett fékezőerő? Miért negatív vagy pozitív ez a munka?

**4. Sebességváltozás hatása az energiára**
Hányszorosára változik meg egy tetszőleges mozgó test mozgási energiája, ha a sebességét a pontosan kétszeresére növeljük, miközben a tömege szigorúan változatlan marad?

**5. Autó sebességének növelése**
Egy $1500\text{ kg}$ tömegű gépkocsi sebességét egyenletesen $20\text{ }\frac{\text{m}}{\text{s}}$-ról $30\text{ }\frac{\text{m}}{\text{s}}$-ra növeljük. Mennyi hasznos gyorsítási munkát kell végeznie a motornak a folyamat alatt, ha a gördülési ellenállástól és a súrlódástól eltekintünk?
