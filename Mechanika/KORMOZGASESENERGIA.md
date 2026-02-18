# Körmozgás és energiamegmaradás

## Kísérlet

[Walter Lewin bemutatja az energiamegmaradást körmozgásnál](https://www.youtube.com/shorts/L7xp97uoe6E)

### Példa
Milyen magasról kell indítani a testet egy hullámvasút esetében, melynek pályája $R$ sugarú kör alakú hurokban folytatódik, ha a hurok sugara $R$ és azt akarjuk, hogy a test ne essen le a hurok tetején se? A súrlódás és közegellenállás elhanyagolható.

Legyen $h_0$ a kérdéses magasság, a vonatkoztatási szint a talaj szintje. Itt nincs a testnek mozgási energiája. Amikor a test $2R$ magasságban van, akkor a mozgási energia legalább annyi kell legyen, hogy a hurok felső pontján is nyomja a körpályát.

Az energia megmaradása:


$$
E_{h,0} + E_{m,0} = E_h + E_m
$$



$$
mgh_0 + 0 = mg2R + \frac {mv^2} {2}
$$


A felső pontban Newton második törvénye:


$$
K + mg = ma
$$



$$
a = \frac {v^2} {R}
$$


Fejezzük ki az energiatételből $v^2$-et és helyettesítsük be a második törvénybe!


$$
2gh_0 = g4R + v^2
$$



$$
v^2 = 2g(h_0 - 2R)
$$



$$
K + mg = m \frac {2g(h_0 - 2R)} {R}
$$


Kifejezzük $K$-t:


$$
K = m \frac {2g(h_0 - 2R)} {R} - mg
$$



$$
K = m \frac {2gh_0 - 4gR - gR} {R}
$$



$$
K = m \frac {2g(h_0 - \frac {5} {2} R)} {R}
$$


Felhasználjuk, hogy $K$ nem lehet negatív (a test nyomja a sínt).


$$
K \geqslant 0
$$



$$
m \frac {2g(h_0 - \frac {5} {2} R)} {R} \geqslant 0
$$



$$
h_0 - \frac {5} {2} R \geqslant 0
$$



$$
h_0 \geqslant \frac {5} {2} R
$$


Azt kapjuk, hogy $h_0$ legalább $\frac {5} {2} = 2,5$-szerese $R$-nek, hogy a test körbe tudjon menni a hurokban. Ezt demonstrálta a videón Walter Lewin is.

## Szimuláció

[Félgömbön lecsúszó test](https://alexerdei73.github.io/physics-engine/project/#bf65a2c0-d5cf-43c1-81a4-e9affbf63df1)

### Példa

Egy félgömb felületén a felső csúcspontból egy test kezdősebesség nélkül lecsúszik. Mekkora szöget zár be a gömb középpontját a testtel összekötő egyenes abban a pillanatban, amikor a test elválik a gömb felületétől? A súrlódás és közegellenállás elhanyagolható.

Legyen a kérdéses szög $\phi$, mely az időben változik, miközben a test lecsúszik a gömbfelületen. Ekkor a testre ható nehézségi erő felbontható egy sugárirányú és érintőirányú komponensre. Írjuk fel Newton második törvényét a sugárirányú komponensekre!


$$
mg\cos \phi - K = ma_{cp}
$$


A sugárirányú (centripetális) gyorsulás:


$$
a_{cp} = \frac {v^2} {R}
$$


Írjuk még fel a mechanikai energia megmaradását is! A vonatkoztatási szint legyen a gömb középpontjának magassága!


$$
E_{h,0} + E_{m,0} = E_h + E_m
$$


A legfelső pontban a helyzeti energia $mgR$, a mozgási energia 0. Egy tetszőleges $\phi$ szögnél a magasság $R\cos\phi$.


$$
mgR + 0 = mgR\cos \phi + \frac {mv^2} {2}
$$


Az elválás pillanatában a kényszererő megszűnik:


$$
K = 0
$$


Ezt behelyettesítve a mozgásegyenletbe:


$$
mg\cos \phi = \frac {mv^2} {R} \Rightarrow v^2 = Rg\cos \phi
$$


Ezt a sebességnégyzetet írjuk be az energiaegyenletbe:


$$
mgR = mgR\cos \phi + \frac {m(Rg\cos \phi)} {2}
$$


Osszuk el az egyenletet $mgR$-rel:


$$
1 = \cos \phi + \frac {\cos \phi} {2}
$$



$$
1 = \frac {3} {2} \cos \phi
$$



$$
\frac {2} {3} = \cos \phi
$$



$$
\phi \approx 48,19^\circ
$$


## Feladatok

1. Egy $L=1,5 \text{ m}$ hosszú fonálon függő $m=2 \text{ kg}$ tömegű golyót vízszintes helyzetig kitérítünk, majd elengedünk.
    *   Mekkora a golyó sebessége a pálya legalsó pontján? (Energiamegmaradás)
    *   Mekkora erő feszíti a fonalat a legalsó pontban? (Dinamika: ne feledd, a nehézségi erő és a kötélerő eredője hozza létre a centripetális gyorsulást!)

2. Egy $60 \text{ kg}$-os síelő egy $H=20 \text{ m}$ magas dombról indul kezdősebesség nélkül. A lejtő alján egy $R=15 \text{ m}$ sugarú körív alakú "völgy" következik.
    *   Mekkora sebességgel érkezik a völgy aljára?
    *   Mekkora nyomóerővel hat a sílécre a talaj a völgy legalján?

3. A példában szereplő hullámvasút kocsija ($m=500 \text{ kg}$) a $h_0 = 2,5 R$ magasságból indul. A hurok sugara $R=10 \text{ m}$.
    *   Mekkora a sebessége a hurok legalsó pontján (mielőtt még felmenne a hurokba, de már a köríven halad)?
    *   Mekkora "G" terhelés éri az utasokat ebben a pontban? (Hányszorosa a nyomóerő a gravitációs erőnek?)

4. Ugyanez a hullámvasút kocsi ($m=500 \text{ kg}$, $h_0 = 2,5 R$, $R=10 \text{ m}$) felér a hurok tetejére.
    *   Számítsd ki a sebességét a tetőponton az energiamegmaradás segítségével!
    *   Igazold számítással, hogy a sín által kifejtett nyomóerő ezen a ponton éppen nulla!
    
5. Tarzan ($m=80 \text{ kg}$) egy $12 \text{ m}$ hosszú indán leng. A lengés legfelső pontjában az inda $60^\circ$-os szöget zár be a függőlegessel.
    *   Mekkora a sebessége, amikor az inda függőleges?
    *   Kibírja-e az inda a terhelést, ha a szakítószilárdsága $1500 \text{ N}$?