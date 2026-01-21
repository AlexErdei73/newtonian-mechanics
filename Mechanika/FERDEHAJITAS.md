# Ferde Hajítás

## A derékszögű háromszög trigonometriája

Legyen ismert a derékszögű háromszög mindhárom oldala és legyen az egyik $90 \degree$-nél kisebb szöge $\alpha$, a vele szemközti befogó a, a mellette levő befogó b és a c pedig az átfogó. Ekkor az $\alpha$ szög trigonometrikus függvényeit három egyenlettel definiáljuk.

$$
sin \alpha = \frac {a} {c} 
$$

$$
cos \alpha = \frac {b} {c}
$$

$$
tan \alpha = \frac {a} {b}
$$

Ezen függvények megtalálhatók minden tudományos zsebszámológépen és így képesek vagyunk kiszámítani ezeket. A zsebszámológéppel kiszámítható még az ismert függvényérték ismeretében az ismeretlen szög is.

### Példák a szögfüggvényekre
1. Számítsuk ki a következő értékeket!
$sin 30\degree$, $sin 45\degree$, $sin 60\degree$, $sin 90\degree$,
$cos 30\degree$, $cos 45\degree$, $cos 60\degree$, $cos 90\degree$

>**Figyelem:** Nagyon fontos, hogy a zsebszámológép fok szög egységre legyen állítva! 

A zsebszámológéppel a következő értékek adódnak:
0.5, 0.7071, 0.8660, 1, 0.8660, 0.7071, 0.5, 0

2. A fenti értékekből számítsuk ki a szöget a zsebszámológéppel! Vissza kell kapjuk a szöget az 1. példában.

## A kezdősebesség koordinátai
Legyen adott a ferde hajítás kezdősebesség ének nagysága, amely $v_0$, és zárjon be a vektor $\alpha$ szöget az vízszintes x-tengellyel. A függőleges y-tengely felfelé mutat. A következő ábra mutatja a vektort:

![vektor komponensek](Kepek/vektorkomponensek.png)

[vektor komponensek](https://www.geogebra.org/m/hrhnmnmm)

A vektor koordinátái az ábran látható derékszögű háromszög alapján kiszámíthatók a szögfüggvények segítségével.

$$
cos \alpha = \frac {v_{0x}} {v_0} 
$$

$$
v_{0x} = v_0 cos \alpha
$$

Hasonlóan kapjuk, hogy

$$
v_{0y} = v_0 sin \alpha
$$

Összefoglalva:

$$
\overrightarrow{v_0} = (v_0 cos \alpha, v_0 sin \alpha)
$$

## A ferde hajítás

### Kísérlet

[Ferde hajítás](https://www.youtube.com/watch?v=KacTRPL1MtE)

### Szimuláció

[Ferde hajítás](https://alexerdei73.github.io/physics-engine/project/#b2325a19-cfb5-49fa-91e5-0d11b2955e2b)

Miután megtekintettük a szimulációt, készítsük el a $v_x$ és $v_y$ mennyiségek időfüggésé t mutató grafikonokat!

### A ferde hajítás képletei

A kísérlet és a szimuláció is igazolja, hogy a sebesség vízszintes komponense állandó, míg a függőleges komponens pontosan úgy változik, mint a függőleges hajítás esetében, tehát a nehézségi gyorsulás ütemében csökken, míg nem a test eléri maximális magasságát és ezután megfordul a mozgás iránya és gyorsulva zuhan.

Indítsuk a testet a koordináta rendszer kezdőpontjából $v_0$ nagyságú sebességgel, mely az x-tengely irányával $\alpha$ szöget zár be. A vízszintes x-tengely balról jobbra mutat, míg a függőleges y-tengely felfelé irányul. A gyorsulás vektor ekkor:

$$
\overrightarrow{a} = (a_x, a_y) = (0, -g)
$$

$$
\overrightarrow{v_0} = (v_{0x}, v_{0y}) = (v_0cos \alpha, v_0 sin \alpha)
$$

$$
(x_0, y_0) = (0, 0)
$$

$$
s = v_0 \times t + \frac {a} {2} \times t^2
$$

Ebbe a képletbe s helyére kell írjuk a megfelelő elmozdulás komponensét, míg a v_0 és a helyébe a kezdősebesség és a gyorsulás megfelelő komponensét. Így a következő képleteket kapjuk:

$$
x = v_0 cos (\alpha) t
$$

$$
y = v_0 sin (\alpha) t - \frac {g} {2} \times t^2
$$