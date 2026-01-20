# Vízszintes Hajítás

## Kísérlet

[Vízszintes hajítás](https://www.youtube.com/watch?v=zMF4CD7i3hg)

## Szimuláció

[Vízszintes hajítás](https://alexerdei73.github.io/physics-engine/project/#047e40be-950c-44e1-a808-e07095d3539d)

Mind a szimuláció, mind pedig a kísérlet szépen mutatja, hogy a szabadon eső elejtett test szinkronban mozog a szabadon eső, vízszintesen elhajított testtel. Amennyiben egy magasságból, egyszerre lettek indítva a testek, a magasságuk a mozgás teljes tartama alatt minden pillanatban ugyanaz.

## Vízszintes hajítás képletei

Hajítsunk el egy labdát vízszintes irányú $v_0$ kezdősebességgel. A légellenállás elhanyagolható, a nehézségi gyorsulás $g = 9.81 \frac {m} {s^2}$ és a testet a koordináta rendszer kezdőpontjából indítjuk. A vízszintes x-tengely a kezdősebesség irányába mutat, balról jobbra. A függőleges y-tengely lefelé mutat.

$$
\overrightarrow{a} = (a_x, a_y) = (0, g)
$$

$$
\overrightarrow{v_0} = (v_{0,x}, v_{0,y}) = (v_0, 0)
$$

$$
(x_0, y_0) = (0, 0)
$$

A négyzetes úttörvény:

$$
s = v_0 \times t + \frac {a} {2} \times t^2
$$

Itt s helyébe a megfelelő elmozdulás koordináta kerül, míg v_0 helyébe a kezdősebesség megfelelő koordinátaja, illetve a helyébe a megfelelő gyorsulás koordináta kerül.

A vízszintes mozgás:

$$
x - x_0 = v_{0, x} \times t + \frac {a_x} {2} \times t^2
$$

$$
x - 0 = v_0 \times t + \frac {0} {2} \times t^2
$$

$$
x = v_0 \times t
$$

A függőleges mozgás:

$$
y - y_0 = v_{0, y} \times t + \frac {a_y} {2} \times t^2
$$

$$
y - 0 = 0 \times t + \frac {g} {2} \times t^2
$$

$$
y = \frac {g} {2} \times t^2
$$

Láthatjuk, hogy az y kiszámítása, mely ez esetben megegyezik az elejtett szabadon eső test által megtett úttal, pontosan úgy történik, mint a szabadesés esetén, tehát ha t és g ugyanaz az érték, akkor y = s, ahol s az elejtett test által megtett út. Ezt láttuk eddig is a kísérletben illetve a szimulációban is.

### Példák

1. Egy $20.0m$ magas szakadék széléről vízszintesen elhajítunk egy követ $10.0 \frac {m} {s}$ kezdősebességgel. Mennyi idő múlva csapódik a kő a talajba? Milyen messzire jut vízszintesen a szakadék szélétől a kő? Számítsuk ki a kő sebességét a becsapódáskor!

$$
y = \frac {g} {2} \times t^2
$$

$$
20.0 = \frac {9.81} {2} x^2
$$

$$
20.0 = 4.905x^2
$$

$$
x = \pm 2.019
$$

Tehát a becsapódás $2.02s$-al az elhajítás után következik be. 

$$
x = v_0 \times t = 10.0 \times 2.019 = 20.19
$$

A kő vízszintesen $20.2m$ távolságra jut.
A vízszintes gyorsulás komponens 0, hiszen a gyorsulás függőlegesen lefelé mutat.

$$
v_x = v_0 = 10.0 \frac {m} {s}
$$

A függőleges sebesség koordináta:

$$
a_y = \frac {v_y - v_{0, y}} {t}
$$

$$
9.81 = \frac {x - 0} {2.019}
$$

$$
x = 9.81 \times 2.019 = 19.81
$$

Tehát $v_y = 19.81 \frac {m} {s}$.

A Pitagorasz-tétel alapján a sebesség vektor hossza (nagysága):

$$
v = \sqrt {v_x^2 + v_y^2} = \sqrt {10.0^2 + 19.81^2} = 22.19 \frac {m} {s}
$$

2. Egy lövedék sebessége $600 \frac {m} {s}$. Ha a fegyvert elsütjük és a golyó vízszintesen repül ki, akkor mennyit esik lefelé, amíg eltalálja a $150m$-re lévő céltárgyat? A légellenállást elhanyagolhatjuk, a nehézségi gyorsulás $9.81 \frac {m} {s^2}$.

$$
x = v_0 \times t
$$

$$
150 = 600x
$$

$$
x = 0.250s
$$

Tehát $t = 0.250s$.

$$
y = \frac {g} {2} \times t^2 = \frac {9.81} {2} \times 0.250^2 = 0.307m
$$

Tehát kb. $30.7cm$-el a tárgy fölé kell célozni, ha el akarjuk találni.
