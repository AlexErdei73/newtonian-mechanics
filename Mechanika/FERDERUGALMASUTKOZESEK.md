# Tökéletesen rugalmas, ferde ütközések

Most néhány fontosabb, tökéletesen rugalmasnak tekinthető ütközést vizsgálunk meg, melyek nem tekinthetők centrális ütközésnek.

## Tökéletesen rugalmas ütközés hatalmas tömegű testtel

Láttuk, hogy a centrális esetben a tökéletesen rugalmas ütközés ugyanakkora sebességű visszapattanáshoz vezet, mint amekkora a becsapódás sebessége. Most arra vagyunk kíváncsiak, mekkora a visszaverődés szöge a beesési szöghöz képest a ferde ütközés esetében.

Tegyük fel, hogy a nagy tömegű céltárgy felülete egy sík felület, és ennek ütközik neki a kisebb tömegű test. A találati pontban merőleges egyenest állítunk a nagy tömegű test síkjára, ez a **beesési merőleges**. Ennek a szöge a kezdeti sebességvektorral a **beesési szög** ($\alpha$). A **visszaverődési szög** ($\beta$) a beesési merőleges és az ütközés utáni sebességvektor szöge.

### Szimuláció

[Tökéletesen rugalmas, ferde ütközés nagy tömegű céltárggyal](https://alexerdei73.github.io/physics-engine/project/#84fdb621-068e-4ead-9814-cc2862fb8e85)

Amint a szimulációból is látszik, a beesési szög és a visszaverődési szög egyenlő. Miért van ez így? Két dolgot tudunk:
1.  A mechanikai energia megmarad az ütközésben, hisz tökéletesen rugalmas ütközésről van szó.
2.  A nagy tömegű test a felületére merőleges irányú erőt fejt ki a nekiütköző testre (a súrlódástól eltekintünk).

Legyen a koordináta-rendszer $x$ tengelye merőleges a falra, az $y$ tengely pedig párhuzamos vele. Ekkor az energiamegmaradás:


$$
\frac {mv_0^2} {2} = \frac {mv^2} {2}
$$



$$
v_0 = v
$$


Vagyis az energiamegmaradás alapján az ütközés előtti sebesség nagysága egyenlő az ütközés utáni sebesség nagyságával. Mivel a falra párhuzamos erő ($F_y$) nem hat (nincs súrlódás), a lendület $y$ komponense megmarad:


$$
F_{e,y} = 0 \quad \rightarrow \quad \Delta I_y = 0
$$



$$
mv_{0,y} = mv_y
$$


Tehát a falra párhuzamos lendületkomponens megmarad az ütközés során. Ha a beesési szög $\alpha$ és a visszaverődési szög $\beta$ (a merőlegestől mérve):


$$
v_{0,y} = v_0 \sin \alpha
$$



$$
v_y = v \sin \beta
$$


Mivel $v_0 = v$ és $v_{0,y} = v_y$:


$$
mv_0 \sin \alpha = mv \sin \beta
$$



$$
\sin \alpha = \sin \beta
$$



$$
\alpha = \beta
$$


Itt kihasználtuk, hogy a sebesség nagysága nem változik meg, tehát az egyenlet mindkét oldala osztható vele.

### Példa

Egy $0,100kg$ tömegű labda $3,00 \frac{m}{s}$ nagyságú sebességgel tökéletesen rugalmasan ütközik a falba és visszapattan. A beesési szög $30^\circ$, az ütközés ideje $1,00ms$. Mekkora a falra ható átlagos erő az ütközés alatt?

A sebesség falra merőleges ($x$ irányú) komponense:

$$
I_{0,x} = mv_{0,x} = mv_0 \cos \alpha = 0,100 \cdot 3,00 \cdot \cos(30^\circ) = 0,2598 \frac{kgm}{s}
$$


Mivel rugalmas az ütközés, a visszapattanás $x$ irányú sebessége ellentétes irányú:

$$
v_x = -v_{0,x}
$$



$$
mv_x = -mv_{0,x}
$$


A lendületváltozás $x$ irányban:

$$
\Delta I_x = I_x - I_{0,x} = -I_{0,x} - I_{0,x} = -2 \cdot 0,2598 = -0,5196 \frac{kgm}{s}
$$


Az átlagos erő (a labdára ható):

$$
F_{e,x} = \frac {\Delta I_x} {t} = \frac {-0,5196} {0,001} = -519,6N
$$


A falra ható erő ennek ellenereje (Newton III. törvénye):

$$
K = -F_e = 519,6N
$$


## Egyenlő tömegű testek tökéletesen rugalmas ütközése, amikor a céltárgy nyugalomban van

### Szimuláció

[Egyenlő tömegű testek tökéletesen rugalmas ütközése, amikor a céltárgy nyugvó](https://alexerdei73.github.io/physics-engine/project/#2b3c424c-4e99-483b-a26e-c34d7ffa8834)

A sebességek merőlegesek az ütközés után, amint a szimulációból látható! Miért is van ez így?

Két dolgot tudunk:
1.  Az összlendület megmarad az ütközésben.
2.  A mechanikai energia megmarad az ütközés során.

Lendületmegmaradás vektorosan:

$$
m \vec{v_0} = m \vec{v_1} + m \vec{v_2}
$$


Egyszerűsítve tömeggel:

$$
\vec{v_0} = \vec{v_1} + \vec{v_2}
$$


A kezdősebesség tehát a két végső sebesség vektori összege. Ez annyit jelent, hogy $\vec{v_1}$, $\vec{v_2}$ és $\vec{v_0}$ egy háromszög oldalai, amelynek leghosszabb oldala $\vec{v_0}$.

Az energia megmaradása miatt:


$$
\frac {mv_0^2} {2} = \frac {mv_1^2} {2} + \frac {mv_2^2} {2}
$$



$$
v_0^2 = v_1^2 + v_2^2
$$


A legutolsó egyenlet nem más, mint a **Pitagorasz-tétel** erre a háromszögre. Ez azt jelenti, hogy a háromszög derékszögű, tehát $\vec{v_1}$ és $\vec{v_2}$ egymásra merőleges (amennyiben az ütközés nem centrális).

### Példa
Egy $0,100kg$ tömegű golyó $5,00 \frac{m}{s}$ sebességgel ferdén ütközik tökéletesen rugalmasan egy ugyanolyan tömegű, álló golyóval, és lepattan $4,00 \frac{m}{s}$ sebességgel. Mekkora lesz a kezdetben nyugvó golyó sebessége az ütközés után? A golyók forgása elhanyagolható, tehát pontszerűnek tekinthetők. Mekkora az átlagos erő a golyók közt, ha az ütközés ideje $1,00 ms$?

Alkalmazzuk a Pitagorasz-tételt a sebességekre:

$$
v_0^2 = v_1^2 + v_2^2
$$



$$
5^2 = 4^2 + v_2^2
$$



$$
v_2 = \sqrt {5^2 - 4^2} = \sqrt {25 - 16} = \sqrt {9} = 3 \frac{m}{s}
$$


Az erő számítása (a második golyó lendületváltozásából):

$$
F_e = \frac {\Delta I_2} {t} = \frac {mv_2 - 0} {t}
$$



$$
F_e = \frac {0,1 \cdot 3} {0,001} = \frac{0,3}{0,001} = 300N
$$


Tehát **$300,0N$** erő lép fel a golyók közt átlagosan az $1 ms$ ütközési idő alatt. Ez a kezdetben nyugvó golyót $3,00 \frac{m}{s}$ sebességre gyorsítja fel.

---

## Feladatok

1. Egy teniszlabda $10,0 \frac {m} {s}$ sebességgel csapódik egy függőleges falnak. A beesési szög (a fal normálisához képest) $45^\circ$. A labda tökéletesen rugalmasan pattan vissza.
a) Mekkora a labda sebességváltozásának nagysága ($\Delta v$)?
b) Ha a labda tömege $58,0g$ és az érintkezés $5,00ms$-ig tart, mekkora átlagos erőt fejt ki a fal a labdára?

2. Egy jégkorong ($m$) $v_0$ sebességgel súrlódásmentesen csúszik a jégen, és nekiütközik egy másik, azonos tömegű, álló jégkorongnak. Az ütközés után az első korong az eredeti irányához képest $30^\circ$-os szögben csúszik tovább $v_1$ sebességgel.
a) Milyen szögben mozog a második korong az eredeti irányhoz képest?
b) Fejezze ki a két korong ütközés utáni sebességét ($v_1, v_2$) a $v_0$ segítségével!

3. Egy részecskegyorsítóban protonokat ütköztetnek álló protonokkal. Egy konkrét mérés során a detektorok azt mutatták, hogy a szétrepülő protonok sebessége $v_1 = 0,01c$ és $v_2 = 0,0173c$.
a) Mekkora volt a bejövő proton $v_0$ sebessége, ha feltételezzük, hogy az ütközés során a mozgási energia megmaradt (azaz a sugárzási veszteségektől eltekintünk)?
b) Igazolja számítással, hogy amennyiben az energiamegmaradás teljesült, úgy a két proton pályája pontosan derékszöget zárt be egymással!
