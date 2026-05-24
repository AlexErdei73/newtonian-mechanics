# A szabadesés

## Kísérletek

[A szabadesés kísérlet a legnagyobb vákuumkamrában](https://www.youtube.com/watch?v=E43-CfukEgs)

[Szabadesés kísérletek vákuumkamra nélkül](https://www.youtube.com/watch?v=gZbsgk5KgpU)

[Szabadesés kísérlet a Holdon](https://www.youtube.com/watch?v=KDp1tiUsZw8)

## Szimuláció

[Szabadesés interaktív szimulátor](https://alexerdei73.github.io/physics-engine/project/#0dc5f5ff-96d5-4814-a91d-ee64042e037b)

Vizsgáljuk meg a szabadon eső test sebesség-idő és út-idő grafikonjait a szimuláció futtatása alapján!

## A szabadesés és feltételei

Galileo Galilei megfigyelései szerint a különböző tömegű testek – anyagi minőségüktől függetlenül –, ha azonos magasságból engedjük el őket, azonos idő alatt érnek földet. Ez a törvényszerűség azonban csak akkor érvényesül maradéktalanul, ha a mozgás során a légellenállás elhanyagolható, vagyis a testek minden más külső hatástól mentesen, tisztán szabadon esnek.

Galilei azt is megállapította, hogy a szabadesés egyenletesen változó (gyorsuló) mozgás, melynek állandó gyorsulását **nehézségi gyorsulásnak** nevezzük. Ennek átlagos értéke a Föld felszínén körülbelül $9{,}81\text{ }\frac{\text{m}}{\text{s}^2}$. A nehézségi gyorsulás értéke a Föld alakja és tömegeloszlása miatt kismértékben változik a földrajzi hely függvényében.

> **A szabadon eső testek a Föld felszíne közelében egyenletesen gyorsuló mozgást végeznek, melynek gyorsulása a nehézségi gyorsulás. A nehézségi gyorsulás jele: $g$, átlagos értéke $9{,}81\text{ }\frac{\text{m}}{\text{s}^2}$, amely kismértékben függ a földrajzi helytől. Egy adott helyen a nehézségi gyorsulás minden testre nézve pontosan ugyanakkora.**

A nulla kezdősebességű esésre teljes mértékben érvényes a négyzetes úttörvény:

$$
h = \frac {g} {2} \cdot t^2
$$

Itt $h$ az elengedés magassága (a megtett függőleges út), $t$ az esés időtartama, $g$ pedig a nehézségi gyorsulás.

### Példák

1. Egy $5{,}00\text{ m}$ magasságból kiejtett test mennyi idő alatt ér talajt, ha szabadon esik? Mekkora sebességgel csapódik be?

Írjuk fel a négyzetes úttörvényt, és jelöljük az ismeretlen időt $x$-szel:

$$
h = \frac {g} {2} \cdot t^2
$$

$$
5{,}00 = \frac {9{,}81} {2} \cdot x^2
$$

$$
5{,}00 = 4{,}905 \cdot x^2
$$

$$
x^2 \approx 1{,}019
$$

$$
x = \pm 1{,}010
$$

A negatív időértéket mint fizikailag értelmezhetetlen megoldást elvetjük, így a test $1{,}01\text{ s}$ alatt zuhan le.

A becsapódási sebesség kiszámítása a gyorsulás alapdefiníciójából történik:

$$
a = g = \frac {v - v_0} {t}
$$

$$
9{,}81 = \frac {v - 0} {1{,}0096}
$$

$$
v \approx 9{,}90
$$

A talajba csapódás pillanatnyi sebessége tehát $9{,}90\text{ }\frac {\text{m}} {\text{s}}$.

2. Egy szabadon eső test $30{,}0\text{ }\frac {\text{m}} {\text{s}}$ sebességgel csapódik a talajba. Mennyi ideig zuhant a test, és mekkora magasságból engedték el?

Határozzuk meg először a zuhanás időtartamát, ahol az ismeretlent $x$ jelöli:

$$
a = g = \frac {v - v_0} {t}
$$

$$
9{,}81 = \frac {30{,}0 - 0} {x}
$$

$$
9{,}81 \cdot x = 30{,}0
$$

$$
x \approx 3{,}058
$$

A zuhanás időtartama három értékes jegyre kerekítve $3{,}06\text{ s}$.

Ezt felhasználva a kezdőmagasság már közvetlenül számítható:

$$
h = \frac {g} {2} \cdot t^2 = \frac {9{,}81} {2} \cdot 3{,}058^2 \approx 45{,}9\text{ m}
$$

A testet tehát $45{,}9\text{ m}$ magasságból engedték el.

## Feladatok

1. Egy $80{,}0\text{ m}$ magasságból szabadon ejtett test mennyi idő alatt ér talajt, és mekkora sebességgel csapódik be a földbe?
2. Egy szabadon eső tárgy $20{,}0\text{ }\frac {\text{m}} {\text{s}}$ sebességgel érkezik meg a talajra. Mennyi ideig zuhant, és milyen magasról ejtették le?
3. Egy $150{,}0\text{ m}$ magas torony tetejéről leejtenek egy kavicsot. Mennyi idő alatt érkezik meg a földre, és mekkora lesz a végsebessége közvetlenül a becsapódás előtt?
4. Egy szabadon eső test becsapódási sebessége $60{,}0\text{ }\frac {\text{m}} {\text{s}}$. Mennyi ideig tartott a zuhanása, és mekkora magasságból indult el?
5. Egy kiejtett test az esésének pontosan a 3. másodperce végén éri el a talajt. Mekkora utat tett meg a földet érésig, és mekkora volt a pillanatnyi sebessége az 1. másodperc végén?


