# Vízszintes hajítás

## Kísérlet

[Vízszintes hajítás kísérleti bemutatása (Shoot-n-Drop)](https://www.youtube.com/watch?v=zMF4CD7i3hg)

## Szimuláció

[Vízszintes hajítás interaktív szimulátor](https://alexerdei73.github.io/physics-engine/project/#047e40be-950c-44e1-a808-e07095d3539d)

Mind az interaktív szimuláció, mind pedig a kísérleti videó szépen szemlélteti, hogy az álló helyzetből elejtett (szabadon eső) test függőleges irányú mozgása tökéletesen szinkronban történik a vízszintesen elhajított test függőleges mozgásával. Amennyiben a két testet azonos magasságból, pontosan egy időben indítjuk el, a függőleges pozíciójuk (magasságuk) a mozgás teljes tartama alatt, minden egyes időpillanatban hajszálpontosan megegyezik.

## A vízszintes hajítás képletei

Hajítsunk el egy testet vízszintes irányú $v_0$ kezdősebességgel a koordináta-rendszer origójából ($x_0 = 0$, $y_0 = 0$)! Tételezzük fel, hogy a légellenállás elhanyagolható, és a nehézségi gyorsulás értéke $g = 9{,}81\text{ }\frac{\text{m}}{\text{s}^2}$. A vízszintes $x$-tengely mutasson a kezdősebesség irányába (balról jobbra), a függőleges $y$-tengely pedig ezúttal mutasson egyenesen lefelé.

A nehézségi gyorsulásvektor komponensei (mivel a gyorsulás függőlegesen lefelé mutat, és az $y$-tengelyünk is lefelé van irányítva):

$$
\vec{a} = (a_x,\ a_y) = (0,\ g)
$$

A kezdősebesség-vektor komponensei (mivel a kezdősebesség tiszta vízszintes):

$$
\vec{v}_0 = (v_{0x},\ v_{0y}) = (v_0,\ 0)
$$

Idézzük fel az egyenletesen változó mozgásra vonatkozó négyzetes úttörvényt általános alakban:

$$
s = v_0 \cdot t + \frac {a} {2} \cdot t^2
$$

Ahogy a korábbiakban megtanultuk, az összetett mozgások tárgyalásakor a megtett út ($s$) helyébe a megfelelő elmozdulás-koordináta, a $v_0$ és $a$ helyére pedig a keresett tengelyirányú előjeles koordináták (komponensek) kerülnek.

### A vízszintes mozgás

$$
x - x_0 = v_{0x} \cdot t + \frac {a_x} {2} \cdot t^2
$$

$$
x - 0 = v_0 \cdot t + \frac {0} {2} \cdot t^2
$$

$$
x = v_0 \cdot t
$$

A test vízszintes irányban tehát semmilyen gyorsulást nem szenved, így az $x$-tengely mentén egyenes vonalú, egyenletes mozgást végez.

### A függőleges mozgás

$$
y - y_0 = v_{0y} \cdot t + \frac {a_y} {2} \cdot t^2
$$

$$
y - 0 = 0 \cdot t + \frac {g} {2} \cdot t^2
$$

$$
y = \frac {g} {2} \cdot t^2
$$

Láthatjuk, hogy az $y$-koordináta időbeli változása hajszálpontosan megegyezik a kezdősebesség nélkül elejtett, szabadon eső test által megtett úttal. Ha a $t$ időtartam és a $g$ nehézségi gyorsulás értéke megegyezik, akkor a két test függőleges elmozdulása is azonos ($y = s$). Ezt a függetlenséget és szinkronitást figyeltük meg a kísérletben és a szimulációban is.

### Példák

1. Egy $20{,}0\text{ m}$ magas függőleges szakadék széléről vízszintesen elhajítunk egy követ $10{,}0\text{ }\frac{\text{m}}{\text{s}}$ kezdősebességgel. Mennyi idő múlva csapódik a kő a talajba? Milyen messzire jut vízszintesen a szakadék szélétől mérve? Számítsuk ki a kő pillanatnyi sebességének nagyságát a becsapódás pillanatában!

A becsapódásig megtett függőleges út $y = 20{,}0\text{ m}$. Határozzuk meg az esés idejét, az ismeretlent $x$-szel jelölve:

$$
y = \frac {g} {2} \cdot t^2
$$

$$
20{,}0 = \frac {9{,}81} {2} \cdot x^2
$$

$$
20{,}0 = 4{,}905 \cdot x^2
$$

$$
x = \pm 2{,}019
$$

A negatív időértéket mint fizikailag értelmezhetetlent elvetjük, így a becsapódás a kidobást követően $2{,}02\text{ s}$ múlva következik be.

Számítsuk ki a kő által megtett vízszintes távolságot (a hajítástávolságot):

$$
x = v_0 \cdot t = 10{,}0 \cdot 2{,}019 \approx 20{,}2\text{ m}
$$

A kő vízszintesen $20{,}2\text{ m}$ messzire repül a szakadék falától.

Mivel a vízszintes irányú gyorsuláskomponens nulla ($a_x = 0$), a sebesség vízszintes komponense a mozgás során végig állandó marad:

$$
v_x = v_0 = 10{,}0\text{ }\frac {\text{m}} {\text{s}}
$$

Határozzuk meg a sebesség függőleges komponensét ($v_y$) a becsapódás pillanatában, a gyorsulás definíciója alapján ($x$-szel jelölve az ismeretlent):

$$
a_y = \frac {v_y - v_{0y}} {t}
$$

$$
9{,}81 = \frac {x - 0} {2{,}019}
$$

$$
x = 9{,}81 \cdot 2{,}019 \approx 19{,}81
$$

Tehát $v_y \approx 19{,}81\text{ }\frac{\text{m}}{\text{s}}$.

A becsapódási sebességvektor tiszta nagyságát (hosszát) a derékszögű komponensekből a Pitagorasz-tétel segítségével kaphatjuk meg:

$$
v = \sqrt {v_x^2 + v_y^2} = \sqrt {10{,}0^2 + 19{,}81^2} = \sqrt{100 + 392{,}44} \approx 22{,}2\text{ }\frac {\text{m}} {\text{s}}
$$

2. Egy puska csövét elhagyó lövedék kezdősebessége $600\text{ }\frac{\text{m}}{\text{s}}$. Ha a fegyvert tökéletesen vízszintesen sütjük el, mennyit esik lefelé a golyó függőleges irányban, amíg eltalálja a tőle $150\text{ m}$ távolságra elhelyezett céltárgyat? A légellenállás elhanyagolható, a nehézségi gyorsulás értéke $9{,}81\text{ }\frac{\text{m}}{\text{s}^2}$.

Határozzuk meg először a lövedék repülési idejét a vízszintes, egyenletes mozgás szakaszából ($x$-szel jelölve az ismeretlent):

$$
x = v_0 \cdot t
$$

$$
150 = 600 \cdot x
$$

$$
x = \frac{150}{600} = 0{,}250
$$

A golyó repülési ideje pontosan $t = 0{,}250\text{ s}$.

Ezen idő alatt a függőleges szabadesésnek megfelelő esési magasság:

$$
y = \frac {g} {2} \cdot t^2 = \frac {9{,}81} {2} \cdot 0{,}250^2 = 4{,}905 \cdot 0{,}0625 \approx 0{,}307\text{ m}
$$

A lövedék a röppályája során kb. $30{,}7\text{ cm}$-t esik lefelé, vagyis a biztos találathoz pontosan ennyivel a céltárgy középpontja fölé kell irányítani a fegyver csövét.

## Feladatok

1. Egy teniszlabdát vízszintesen elhajítanak $15{,}0\text{ }\frac{\text{m}}{\text{s}}$ kezdősebességgel egy $10{,}0\text{ m}$ magas torony tetejéről. Mennyi idő alatt éri el a labda a talajt, és milyen vízszintes távolságra jut a torony lábától mérve?
2. Egy modern vadászpuska lövedéke vízszintesen hagyja el a csövet $500\text{ }\frac{\text{m}}{\text{s}}$ kezdősebességgel. Mennyi időre van szüksége a golyónak ahhoz, hogy függőleges irányban pontosan $1{,}0\text{ m}$-t essen lefelé?
3. Egy követ vízszintes irányban elhajítanak $20{,}0\text{ }\frac{\text{m}}{\text{s}}$ kezdősebességgel egy $15{,}0\text{ m}$ mély, függőleges falú szakadék pereméről. Mennyi idő alatt csapódik be a kő a szakadék aljára, és mekkora lesz a becsapódási sebességének nagysága?
4. Egy kislány vízszintesen eldob egy gumilabdát $12{,}0\text{ }\frac{\text{m}}{\text{s}}$ sebességgel egy $8{,}0\text{ m}$ magas iskolaépület ablakából. Milyen messzire jut a labda vízszintes irányban a becsapódás pillanatáig az épület falától mérve?
5. Egy tárgyat vízszintesen elhajítanak $25{,}0\text{ }\frac{\text{m}}{\text{s}}$ kezdősebességgel. Mennyi idő eltelte után éri el a test a pontosan $5{,}0\text{ m}$-es függőleges elmozdulást?

