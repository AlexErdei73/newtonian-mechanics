# Hajítások

## Vektor komponensek

Láttuk, hogy mennyiségek, mint a sebesség vagy a gyorsulás vektormennyiségek, melyeknek nagyságukon kívül irányuk is van. A vektorok úgy adódnak össze, mint az elmozdulások. 

Ha adott egy koordináta rendszer is, akkor a pontok helyzete a koordináta rendszer síkjában 2 koordinátával adható meg. A térben három koordináta tengely szükséges és a pontok helyzetét is három koordináta adja meg.

Ha adott egy vektor is a koordináta rendszerben, akkor ez önmagával párhuzamosan bárhova eltolható, az ilyen párhuzamos eltolás nem változtatja meg a vektort. Ha eltoljuk a vektor kezdőpontját a koordináta rendszer kezdőpontjába, akkor a vektor végpontja szintén két vagy három koordinátával egyértelműen megadható, attól függően, hogy a koordináta rendszer síkbeli vagy térbeli koordinátarendszer. Mi az egyszerűség kedvéért csak síkbeli vektorokkal foglalkozunk egyenlőre.

[vektor koordináták](https://www.geogebra.org/calculator/unkrfvjp) 

Az alábbiak jelölése: $\overrightarrow{a} = (a_x,a_y)$   . Itt $a_x$ és $a_y$ az $\overrightarrow{a}$ vektor koordinátái. Ezek csak a koordináta rendszerrel együtt adják meg a vektort. Ha elforgatjuk a koordinátarendszert a vektor koordinátái is megváltoznak. A továbbiakban a koordinátarendszert sem mozgatjuk.
Az $\overrightarrow{a}$ vektor előállítható két vektor összegként, melyek a koordináta tengelyekkel párhuzamosak. Ezek a vektor komponensek. Az x-tengellyel párhuzamos komponens, az x-komponens, hossza $\left|a_x\right|$. Az y-komponens hossza $\left|a_y\right|$.

## A megtett út és az elmozdulás vektor

Vizsgáljunk tetszőleges mozgást, amelynek során egy pontszerűnek tekinthető test elmozdul a kezdőpontból a végpontba. A kezdőpontból a végpontba mutató vektort elmozdulásnak nevezzük, ez vektor mennyiség. A kezdőpontot a végponttal összekötő pályaszakasz hosszát nevezzük megtett útnak. Mikor egyezik meg az elmozdulás vektor hossza a megtett úttal? Ez egyenesvonalú mozgásoknál fordulhat elő, amikor a mozgó test nem vált mozgásirányt miközben a kezdo pontból a végpontba jut. Ez pontosan az az eset, amivel eddig foglalkoztunk. 

A továbbiakban lesznek olyan esetek, amikor a mozgás nem egyenes vonalú, illetve egyenesvonalú, de a mozgás iránya megváltozik a mozgás során. Ilyenkor is igaz, hogy a megtett út a sebesség-idő grafikon görbéje alatti terület. Itt a sebesség nagyságát ábrázoljuk a grafikonon, ami mindig pozitív. Ábrázolhatjuk azonban a sebesség vektor valamely koordinátáját is az idő függvényében. Ilyenkor a sebesség koordináta lehet negatív is, ha a sebesség megfelelő komponense a megfelelő koordináta tengellyel ellentétes irányú. Ha a sebesség koordináta negatív, akkor ábrázolva ezt az idő függvényében a területet is negatívnak kell venni, a sebesség koordináta-idő függvény görbéje alatt. A grafikon alatti teljes terület, melyet előjelesen kell kiszámítsunk, nem a megtett utat fogja jelenteni, hanem az elmozdulás megfelelő koordinátáját. Látjuk majd, hogy az összefüggéseink érvényben maradnak, csak az út helyébe elmozdulás koordináták kerülnek. A többi vektor helyébe is a megfelelő koordináták lépnek, a vektor nagysága helyett. Ily módon tetszőleges egyenletesen változó mozgás kiszámíthatóvá válik, például a hajítások különböző esetei.

## Függőleges hajítás

Dobjunk fel egy labdát egy bizonyos $v_0$ kezdősebességgel. A labda induljon a koordináta rendszer kezdőpontjából. Az x-tengely vízszintes és balról jobbra mutat. Az y-tengely felfelé mutat függőlegesen.
A labda függőlegesen emelkedik, majd egy pillanatra sebessége 0 lesz, de azonnal megindul lefelé és gyorsulva esik vissza, függőleges egyenes pálya mentén. A labda az y-tengelyen mozog, tehát x-koordinátája végig 0 a mozgás során. Írjuk fel az y koordináta változását, úgy hogy az út helyébe az elmozdulás y-koordinátáját tesszük és a gyorsulás és a sebesség helyett is az y-koordinátaik szerepelnek. Így a helyes összefüggéshez jutunk.

A gyorsulás állandó és függőlegesen lefelé mutat, nagysága g, ahogy eddig is láttuk a szabad esés esetében.

$$
\overrightarrow{a} = (a_x, a_y) = (0, -g)
$$

A kezdősebesség nem nulla, függőlegesen felfelé mutat.

$$
\overrightarrow{v_0} = (v_{0,x}, v_{0,y}) = (0, v_0)
$$

$$
\Delta y = y - y_0 = y - 0 = y
$$

A négyzetes úttörvény egyenletesen gyorsuló mozgásra:

$$
s = v_0 \times t + \frac {a} {2} \times t^2
$$

Most a vektorok helyébe az y koordinátákat írjuk és az s helyébe az y elmozdulást. Így megkapjuk a keresett összefüggést:

$$
\Delta y = v_{0,y} \times t + \frac {a_y} {2} \times t^2 
$$

$$
y = v_0 \times t - \frac {g} {2} \times t^2
$$

### Példák

1. Egy labdát feldobunk $20.0 \frac {m} {s}$ sebességgel. A légellenállás elhanyagolható, a nehézségi gyorsulás $9.81 \frac {m} {s^2}$. Milyen magasra emelkedik a labda? Mennyi idő alatt ér vissza a kezembe?

$$
-g = \frac {0 - v_0} {t}
$$

$$
-9.81 = \frac {-20.0} {x}
$$

$$
-9.81x = -20.0
$$

$$
x = \frac {-20.0} {-9.81} = 2.039s
$$

Tehát az emelkedési idő $2.04s$. A visszaérkezés ideje gyanítjuk, hogy ennek a duplája, hisz az esés és az emelkedés ugyanannyi ideig kellene tartson. Számítsuk ezt azért ki!

$$
y = v_0 \times t - \frac {g} {2} \times t^2
$$

$$
0 = 20.0x - \frac {9.81} {2} x^2 
$$

$$
0 = x(20.0 - 4.905x)
$$

Itt kiemeltük az x-et. A szorzat két esetben lehet nulla. Az x=0 eset az eldobás pillanata, nem érdekes.

$$
20.0 - 4.905x = 0
$$

$$
20.0 = 4.905x
$$

$$
x = 4.077
$$

Tehát a teljes visszaérkezési idő valóban $4.08s$, ami az emelkedési idő duplája. Így tehát az emelkedés és a lefelé zuhanás egyforma ideig tartanak, ahogy gondolhatjuk

2. Egy gödör $10.0m$ mély. A gödör szélén feldobunk egy labdát $10.0 \frac {m} {s}$ sebességgel függőlegesen felfelé. Mennyi idő múlva csapódik a gödör aljába? Mekkora a becsapódás sebessége? A légellenállás elhanyagolható, a nehézségi gyorsulás $9.81 \frac {m} {s^2}$

$$
y = v_0 \times t - \frac {g} {2} \times t^2
$$

$$
-10.0 = 10.0x - \frac {9.81} {2} x^2
$$

$$
-10.0 = 10.0x - 4.905x^2
$$

$$
4.905x^2 - 10.0x - 10.0 = 0
$$

A megoldóképletet alkalmazzuk:

$$
x_{12} = \frac {-b \pm \sqrt {b^2 - 4ac}} {2a} = \frac {10.0 \pm \sqrt {100 - 4 \times 4.905 \times (-10.0) }} {9.81} = 2.774 , -0.7350
$$

Nyilván az idő pozitív, tehát $t=2.77s$-kor ér a labda a gödör aljára. Számítsuk ki a sebességet!

$$
-g = \frac {v_y - v_0} {t}
$$

$$
-9.81 = \frac {x - 10.0} {2.774}
$$

$$
x - 10.0 = -27.21
$$

$$
x = -17.21
$$

Tehát a becsapódás sebessége $17.2 \frac {m} {s}$. A negatív előjel azt jelzi, hogy $v_y$ negatív, vagyis a test a felfelé mutató y-tengellyel ellentétes irányban, tehát lefelé mozog a becsapódáskor, ahogy annak lennie is kell.

### Feladatok

1. Egy labdát függőlegesen felfelé dobunk $15.0 \frac{m}{s}$ kezdősebességgel. Milyen magasra emelkedik a labda? Mennyi idő alatt éri el a maximális magasságot? A légellenállás elhanyagolható, a nehézségi gyorsulás $9.81 \frac{m}{s^2}$.

2. Egy labdát függőlegesen felfelé dobunk, és 5.0 másodperc múlva visszaérkezik a kezünkbe. Mekkora volt a kezdősebesség? A nehézségi gyorsulás $9.81 \frac{m}{s^2}$.

3. Egy labdát függőlegesen felfelé dobunk $12.0 \frac{m}{s}$ sebességgel. Mennyi idő alatt éri el a 10.0 m magasságot az emelkedés során? A nehézségi gyorsulás $9.81 \frac{m}{s^2}$.

4. Egy labdát függőlegesen felfelé dobunk, és 3.0 másodperc után sebessége $5.0 \frac{m}{s}$ felfelé. Mekkora volt a kezdősebesség? A nehézségi gyorsulás $9.81 \frac{m}{s^2}$.

5. Egy labdát függőlegesen felfelé dobunk $18.0 \frac{m}{s}$ sebességgel. Mennyi idő alatt éri el a 15.0 m magasságot? A nehézségi gyorsulás $9.81 \frac{m}{s^2}$.