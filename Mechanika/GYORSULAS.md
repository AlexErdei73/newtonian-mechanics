# A gyorsulás

## Az egyenletesen gyorsuló mozgás

Ha egy test sebességének nagysága vagy mozgásának iránya változik, akkor gyorsuló mozgásról beszélünk. Most a legegyszerűbb esettel fogunk foglalkozni, amikor a mozgás egyenes vonalú, így a sebesség iránya nem változik meg, csupán a nagysága növekszik vagy csökken.

> **Egyenletesen gyorsuló mozgásról beszélünk, amikor a test sebessége egyenlő időközök alatt egyenlő mértékben változik.**

### Kísérlet
[Egyenletes és egyenletesen változó mozgás demonstrációja air track segítségével](https://www.youtube.com/watch?v=PCLjIjAUBnw&t)

### Szimuláció
[Súrlódásmentes mozgás lejtőn szimulátor](https://alexerdei73.github.io/physics-engine/project/#94f47c36-ead0-4d85-a1ff-ac1827797ce9)

Mind a kísérlet, mind a szimuláció mutatja, hogy a test a lejtőn gyorsulva mozog súrlódásmentes esetben. Gyakorlásképp a szimulátorral ábrázoljuk a test sebesség-idő grafikonját! Ez látható a következő ábrán:

![Egyenletesen gyorsuló test sebesség-idő grafikonja](Kepek/egyenletesengyorsulomozgassebidograf.png)

A test sebessége másodpercenként $0{,}5\text{ }\frac{\text{m}}{\text{s}}$-mal nő a grafikon alapján. A mozgás tehát egyenletesen gyorsuló mozgás. A kezdeti sebesség 0, a test álló helyzetből indul.

## A gyorsulás fogalma és képlete

> **A gyorsulás az időegységre eső sebességváltozással egyenlő. Kiszámítható a sebességváltozás és az idő hányadosaként. Jele: $a$, egysége: $\frac{\text{m}}{\text{s}^2}$**

$$
a = \frac {\Delta v} {t} = \frac {v - v_0} {t}
$$

A gyorsulás valójában vektormennyiség, amely mindig a sebességváltozás-vektor irányába mutat. A sebességváltozás-vektor az elért sebességvektor és a kezdősebesség-vektor különbsége. Bár a fizikai összefüggés általánosan csak a vektorokra igaz, mi egyelőre olyan esetekkel foglalkozunk, ahol a vektorok egyetlen egyenesbe esnek és a mozgás iránya sem változik meg, így a számolásokat egyszerűbb, skaláris formában végezhetjük.

### Példák

1. A lejtőn lefelé mozgó test a szimuláció során $0{,}5\text{ }\frac{\text{m}}{\text{s}}$-ról $2\text{ }\frac{\text{m}}{\text{s}}$-ra gyorsult fel $3\text{ s}$ alatt. Mekkora a gyorsulás?

$$
a = \frac {v - v_0} {t} = \frac {2\text{ }\frac{\text{m}}{\text{s}} - 0{,}5\text{ }\frac{\text{m}}{\text{s}}} {3\text{ s}} = 0{,}5\text{ }\frac{\text{m}}{\text{s}^2}
$$

Tehát a test gyorsulása $0{,}5\text{ }\frac{\text{m}}{\text{s}^2}$.

2. Egy autó $20\text{ }\frac{\text{m}}{\text{s}}$ sebességről $6\text{ s}$ alatt lefékez $5\text{ }\frac{\text{m}}{\text{s}}$ sebességre. Mekkora az autó gyorsulása?

$$
a = \frac {v - v_0} {t} = \frac {5\text{ }\frac{\text{m}}{\text{s}} - 20\text{ }\frac{\text{m}}{\text{s}}} {6\text{ s}} = -2{,}5\text{ }\frac{\text{m}}{\text{s}^2}
$$

Az autó gyorsulására a formulánk fékezés esetén negatív értéket ad. Az $a$ jelölés a gyorsulásvektor tiszta nagyságát szokta jelenteni, amely definíció szerint nem lehetne negatív. Fékezéskor a fenti formula valójában a gyorsulásvektor mozgásirányú összetevőjét adja meg ($a_x$, ha a mozgás az x-tengely irányába történik). A gyorsulás x-komponense már felvehet negatív értéket, amennyiben a gyorsulásvektor a választott tengellyel ellentétes irányba mutat – fékezésnél pedig pontosan ez történik. A formula alkalmazása az $a_x$ jelölés helyett a sima $a$ betűvel matematikailag kissé pontatlan, de a középiskolai gyakorlatban a rövidség kedvéért így szoktuk használni.

> **Fékezés (lassulás) esetén a gyorsulás számszerű értéke negatív, ami azt jelenti, hogy a gyorsulásvektor iránya a mozgás pillanatnyi irányával ellentétes.**

## Feladatok

1. Egy versenyző 0 sebességről indul, és $8\text{ másodperc}$ alatt eléri a $10\text{ }\frac{\text{m}}{\text{s}}$ sebességet. Mekkora az átlagos gyorsulása?

2. Egy vonat $15\text{ }\frac{\text{m}}{\text{s}}$ sebességről $20\text{ másodperc}$ alatt lassít, és a sebessége $5\text{ }\frac{\text{m}}{\text{s}}$-ra csökken. Mekkora a gyorsulása?

3. Egy labdát függőlegesen felfelé dobunk. Az első másodpercben $25\text{ }\frac{\text{m}}{\text{s}}$-ről $15\text{ }\frac{\text{m}}{\text{s}}$-ra csökken a sebessége. Mekkora a gravitációs gyorsulás értéke ebből a mérésből?

4. Egy motorkerékpár $0\text{ }\frac{\text{m}}{\text{s}}$-ról $5\text{ másodperc}$ alatt $30\text{ }\frac{\text{m}}{\text{s}}$ sebességre gyorsul fel. Mekkora a gyorsulása?

5. Egy repülőgép landoláskor $60\text{ }\frac{\text{m}}{\text{s}}$ sebességről $15\text{ másodperc}$ alatt teljesen állóra fékez. Mekkora a fékezés során a gyorsulása?

