# A gyorsulás

## Az egyenletesen gyorsuló mozgás

Ha egy test sebességének nagysága, vagy mozgásának iránya változik, akkor gyorsuló mozgásról beszélünk. Most csak azzal az esettel fogunk foglalkozni, amikor a sebesseg nagysága változik és a mozgás egyenesvonalú az egyszerűség kedvéért. A sebesseg iránya se változik meg, csupán a nagysága.

> **Egyenletesen gyorsuló mozgásról beszélünk, amikor a test sebessége egyenlő időközök alatt egyenlő mértékben változik.**

### Kísérlet

[Egyenletes és egyenletesen változó mozgás](https://www.youtube.com/watch?v=PCLjIjAUBnw&t)

### Szimuláció

[Súrlódás mentes mozgás lejtőn](https://alexerdei73.github.io/physics-engine/project/#94f47c36-ead0-4d85-a1ff-ac1827797ce9)

Mind a kísérlet, mind a szimuláció mutatja, hogy a test a lejtőn gyorsulva mozog súrlódás mentes esetben. Gyakorlásképp a szimulátorral ábrázoljuk a sebesseg-idő grafikonját a testnek! Ez látható a következő ábrán:

![egyenletesen gyorsuló test sebesség-idő grafikonja](Kepek/egyenletesengyorsulomozgassebidograf.png)

A test sebessége másodpercenként $0.5 \frac {m} {s}$-mal nő a grafikon alapján. A mozgás egyenletesen gyorsuló mozgás. A kezdeti sebesseg 0, a test álló helyzetből indul. 

## A gyorsulás

> **A gyorsulás az időegységre eső sebességváltozással egyenlő. Kiszámítható a sebesseg változás és az idő hányadosaként. Jele: a, egysége: $\frac {m} {s^2}$**

$$
a = \frac {\Delta v} {t} = \frac {v - v_0} {t}
$$

A gyorsulás vektormennyiség, a sebesseg változás vektor irányába mutat. A sebesseg változás vektor az elért sebesseg vektor és a kezdősebesseg vektor különbsége. Mi egyelőre csak olyan esettel foglalkozunk, ahol a vektorok azonos irányúak és a mozgás iránya nem változik, de az összefüggés általánosan igaz a vektorokra. 

### Példák
1. A lejtőn lefele mozgó test a szimuláció során $0.5 \frac {m} {s}$-ról $2 \frac {m} {s}$-ra gyorsult fel $3s$ alatt. Mekkora a gyorsulás?

$$
a = \frac {v - v_0} {t} = \frac {2 \frac {m} {s} - 0.5 \frac {m} {s}} {3s} = 0.5 \frac {m} {s^2} 
$$

Tehát a test gyorsulása $0.5 \frac {m} {s^2}$.

2. Egy autó $20 \frac {m} {s}$ sebességről 6s alatt lefékez $5 \frac {m} {s}$ sebességre. Mekkora az autó gyorsulása?

$$
a = \frac {v - v_0} {t} = \frac {5 \frac {m} {s} - 20 \frac {m} {s}} {6s} = - 2.5 \frac {m} {s^2} 
$$

Az autó gyorsulására formulánk fékezés esetén negatív értéket ad. Az a jelölés a gyorsulás vektor nagyságát szokta jelenteni, mely nem lehet negatív. Fékezés esetén a formula a gyorsulás vektor mozgás irányú összetevőjét adja meg ($a_x$ ha a mozgás x tengely irányú). A gyorsulás x komponense már lehet negatív, amennyiben az x tengellyel ellentétes irányú a gyorsulás vektor. Fékezésnél ez a helyzet, ha a mozgás x tengely irányú. A formula alkalmazása az $a_x$ jelölés helyett $a$ jelöléssel matematikailag pontatlan, de a rövidség kedvéért így fogjuk a továbbiakban alkalmazni. 

> **Fékezés esetén a gyorsulás negatív, mely azt jelenti, hogy a gyorsulás vektor iránya a mozgás irányával ellentétes.**

### Feladatok

3. Egy versenyző 0 sebességről indul és 8 másodperc alatt eléri a $10 \frac {m} {s}$ sebességet. Mekkora az átlagos gyorsulása?

4. Egy vonat $15 \frac {m} {s}$ sebességről 20 másodperc alatt lassít és $5 \frac {m} {s}$ sebességre csökkent. Mekkora a lassulása?

5. Egy labdát függőlegesen felfelé dobunk. Az első másodpercben $25 \frac {m} {s}$-ről $15 \frac {m} {s}$-re csökken a sebessége. Mekkora a gravitációs gyorsulás (lassulás)?

6. Egy motorkerékpár $0 \frac {m} {s}$-ról 5 másodperc alatt $30 \frac {m} {s}$ sebességre gyorsul fel. Mekkora a gyorsulása?

7. Egy repülőgép landoláskor $60 \frac {m} {s}$ sebességről 15 másodperc alatt teljes állóra fékez. Mekkora a fékezés gyorsulása?