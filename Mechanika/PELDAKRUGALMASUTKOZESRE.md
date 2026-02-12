# Példák rugalmas ütközésre

## Két egymásra helyezett labda visszapattanása

### Kísérlet

[Egymásra helyezett labdák visszapattanása](https://www.youtube.com/watch?v=2UHS883_P60)

### Szimuláció

[Két egymásra helyezett labda visszapattanása](https://alexerdei73.github.io/physics-engine/project/#5f77abb4-1a91-425d-b756-096b5e3c4107)

Legyen az alsó labda 10-szer nagyobb tömegű, mint a felső labda. Számítsuk ki mekkora sebességgel pattan vissza a felső labda és a magasságot is! Legyen a kezdeti magasság $h_0$!


$$
11mgh_0 = \frac {11mv_0^2} {2}
$$



$$
2gh_0 = v_0^2
$$


Mindkét labda ezzel a $v_0$ sebességgel érkezik a talajhoz. Először az első labda pattan vissza $v_0$ nagyságú sebességgel. Ekkor ütközik a második labdával, amely érkezik ugyanekkora, de még ellentétes irányú sebességgel. Tegyük fel, hogy az ütközés centrális és tökéletesen rugalmas! 


$$
9mv_0 = 10mv_1 + mv_2
$$



$$
\frac {10mv_0^2} {2} + \frac {mv_0^2} {2} = \frac {10mv_1^2} {2} + \frac {mv_2^2} {2}
$$


Az első egyenletből:


$$
v_2 = 9v_0 - 10v_1
$$


A második egyenlet rövidebb alakja:


$$
11v_0^2 = 10v_1^2 + v_2^2
$$


Ide behelyettesítjük $v_2$-t:


$$
11v_0^2 = 10v_1^2 + (9v_0 - 10v_1)^2
$$



$$
11v_0^2 = 10v_1^2 + 81v_0^2 - 180v_0v_1 + 100v_1^2
$$


A következő paraméteres másodfokú egyenletet kapjuk $v_1$-re:


$$
0 = 110v_1^2 - 180v_0v_1 + 70v_0^2
$$



$$
0 = 11v_1^2 - 18v_0v_1 + 7v_0^2
$$



$$
v_1 = \frac {18v_0 \pm \sqrt{324v_0^2 - 4 \times 11 \times 7v_0^2}} {2 \times 11} = \frac {18v_0 \pm 4v_0} {22} = v_0, \frac {7v_0} {11}
$$


Minket a második megoldás érdekel, amit behelyettesítünk a $v_2$ kiszámítására szolgáló egyenletbe:


$$
v_2 = 9v_0 - 10 \frac {7v_0} {11} = 2,636v_0
$$


Most hogy megkaptuk $v_2$-t, tehát a második labda visszapattanási sebességét, könnyű kiszámítani a labda végső magasságát!


$$
mgh = \frac {m(2,636v_0)^2} {2}
$$



$$
h = \frac {6,950v_0^2} {2g} = 6,950h_0
$$


Tehát a második labda az elengedési magasság majd 6,95-szörösére pattan fel!

## Newton bölcső

### Kísérlet

[Newton bölcső](https://www.youtube.com/watch?v=ofgeRSCLyXc)

### Szimuláció

[Newton bölcső szimuláció](https://alexerdei73.github.io/physics-engine/project/#4d1b6707-6e5e-42fc-a4eb-bcdca0d2dad4)

A játék működése a legegyszerűbben tökéletesen rugalmas ütközések feltételezésével érthető meg. Ilyenkor az impulzus is és a mechanikai energia is megmarad. Tegyük fel hogy két golyót emelünk fel és ejtünk le az egyik végén. Ekkor az energia:


$$
E_{m,0} = \frac {2mv_0^2} {2} = mv_0^2
$$


Az impulzus:


$$
I_0 = 2mv_0
$$


Nos a másik végén is pontosan ekkora energia és impulzus kell megjelenjen, hogy mindkét mennyiség megmaradjon. Lehetséges, hogy csak egy golyó emelkedik fel? 

Az impulzus megmaradása miatt:


$$
I_0 = I
$$



$$
2mv_0 = mv
$$



$$
v = 2v_0
$$


Az egyetlen emelkedő golyó sebessége kétszer akkora, amekkora sebességgel a két golyó ütközött. Az energia ekkor:


$$
E_m = \frac {mv^2} {2} = \frac {4mv_0^2} {2} = 2mv_0^2
$$


Ez nem lehetséges, mert az energia megduplázódna:


$$
E_m = 2E_{m,0}
$$


Lehetséges-e az hogy három golyó emelkedjen fel? Ez esetben a sebesség:


$$
2mv_0 = 3mv
$$



$$
v = 0,6667v_0
$$


Az energia ekkor:


$$
E_m = \frac {3m(0,6667v_0)^2} {2} = 0,6667mv_0^2 = 0,6667E_{m,0}
$$


Ha három golyó pattanna fel, akkor az energia harmad része elveszne, tehát ez sem lehetséges. Pontosan ugyanannyi golyó pattan fel, ahányat eredetileg belengettünk.