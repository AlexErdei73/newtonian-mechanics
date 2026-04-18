# Mechanikai hullámok

## A mechanikai hullám fogalma

### Kísérlet

[Hullámgép készítése](https://www.youtube.com/watch?v=VE520z_ugcU)

### Szimuláció

[Hullám terjedése rugókkal csatolt tömegpontokon](https://alexerdei73.github.io/physics-engine/project/#e22e5592-48ce-4e65-a3ea-5f37449761c4)

Mind a kísérletben, mind a szimuláció esetében a mechanikai deformáció terjed tova egy dimenzióban a rugalmas testben. A kísérlet esetében az egyes pálcák forgási rezgéseket képesek végezni, és közöttük van egy gyenge csatolás is. Így a hullámgép igen szépen szemlélteti a zavar tovaterjedését. Hasonlót láthatunk a szimuláció esetében is. Itt egyenlő tömegű tömegpontok sorozata van rugókkal összekötve. Egy ilyen rendszerben is megfigyelhető a deformáció tovaterjedése, melyet mechanikai hullámnak nevezünk.

> **Mechanikai hullám:** A deformáció térbeli terjedését rugalmas testben mechanikai hullámnak nevezzük.

Láthatjuk, hogy a hullám terjedésének van egyfajta terjedési sebessége, és szükség van valamilyen rugalmas testre, amelyben a deformáció terjed. Nyilván a terjedési sebesség függ az anyagi minőségtől, hisz vannak anyagok, melyek sűrűsége kicsi, és jó közelítéssel merevnek tekinthetők, de olyanok is vannak, melyek sűrűsége nagyobb, de kevésbé merevek a deformáció szempontjából. A tökéletes merev testekben deformációk nem alakulnak ki. Ezek egy pontját elmozdítva a többi pontjuk is azonnal elmozdul. Merev testekben mechanikai hullámok nem alakulhatnak ki, a mechanikai hullámok terjedési sebessége ezekben végtelen. Gyakorlatban ilyenek nincsenek, de nyilván minél merevebb a test, annál nagyobb a terjedési sebesség. A terjedési sebesség nyilván annál kisebb, minél nagyobb a test sűrűsége.

## Longitudinális és transzverzális hullámok

A mechanikai hullámoknak két fajtája ismeretes aszerint, hogy a közegben a részecskék rezgésének iránya a terjedési iránnyal párhuzamos vagy arra merőleges.

### Kísérletek

[Transzverzális hullám](https://www.youtube.com/watch?v=g8GcMn7K0u4)

[Longitudinális hullám](https://www.youtube.com/watch?v=fMJrtheQfZw)

> **Transzverzális hullám:** A közeg részecskéinek rezgési iránya a hullám terjedési irányára merőleges.

> **Longitudinális hullám:** A közeg részecskéinek rezgési iránya párhuzamos a hullám terjedési irányával.

Mindkét esetben elmondhatjuk, hogy a közeg részecskéi egyensúlyi helyzetük körül rezegnek, de onnan el nem mozdulnak a hullám terjedésekor. Csak a deformáció és persze az energia terjed tova a mechanikai hullámban. Longitudinális hullámok esetében sűrűsödési és ritkulási helyek vannak az anyagban, míg transzverzális hullámokban hullámhegyek és hullámvölgyek vannak.

Általában a transzverzális hullámok sebessége ugyanabban a testben kisebb, mint a longitudinális hullámok sebessége. A folyadékokban és gázokban csak longitudinális hullámok jöhetnek létre. Ennek oka, hogy ezek rugalmasak térfogatváltozással járó deformációkra, tehát összenyomásra, de nem fejtenek ki erőt a folyadékrétegeket egymáshoz képest a rétegek irányában elmozdító erő ellenében (a súrlódástól eltekintve). A folyadékok felületén kialakulhatnak transzverzális hullámok is, de ilyenek nem terjedhetnek a folyadék belsejében.

## Periodikus hullámok

Rugalmas testekben kialakulhatnak periodikus hullámok is, sőt ezek a legfontosabbak. Ez esetben a rezgés periodikus. Mi csak a harmonikus rezgések esetével foglalkozunk. Ha például a hullámgép végpontját harmonikus rezgésbe hozzuk periodikus gerjesztő erő hatására, akkor ez a rezgés a hullámgépen tovaterjed. Amíg a hullámgép másik végéhez nem ér a hullám, a matematikai leírás egyszerű. Legyen pl. a rezgés y-tengely irányú, míg a hullám x-irányban terjed. Ekkor a kitérés függ az x távolságtól is az időn kívül.


$$
y = A\cos\left(\omega\left(t - \frac x c\right)\right)
$$


Ez a függvény az $x = 0$ helyen pontosan olyan, mint az $x > 0$ tetszőleges helyen, ahová viszont csak késéssel ér oda. Ez a késés könnyen meghatározható. Legyen az $x = 0$ origóban az idő jele $t_0$, ekkor az x-helyen a hullám azonos rezgésállapotú a későbbi $t$ időben, mint volt az origóban.


$$
t_0 = t - \frac x c
$$



$$
t = t_0 + \frac x c
$$


Tehát az időkésés értéke a megtett távolság és a terjedési sebesség hányadosa.


$$
\Delta t = \frac x c
$$


## A hullámhossz fogalma

> **Hullámhossz:** Két szomszédos hullámhegy távolsága a periodikus transzverzális hullám esetén. Jele: $\lambda$ (lambda)

Amennyiben a hullám pontosan egy periódusnyit rezeg, mondjuk az $x = 0$ pontban, akkor pontosan egy rezgés zajlik le, tehát amennyiben $y = A$ volt, akkor újra $y = A$ lesz érvényben. Ekkor viszont már a hullámhegy eljut az $x = \lambda$ távolságba is. Érvényes tehát az előbbiek alapján, hogy


$$
T = \frac \lambda c
$$


Ez az összefüggés más alakba is írható a frekvencia, illetve a körfrekvencia segítségével.


$$
\lambda = cT = \frac c f
$$


A hullámszám, melyet $k$-val jelölünk, a $2\pi$ távolságon lévő teljes periódusok száma.


$$
k = \frac {2\pi} \lambda = \frac {2\pi f} c = \frac \omega c
$$


### Példa
Normál hőmérsékleten levegőben a hang terjedési sebessége $340\text{ m/s}$. Mekkora a hangvilla hullámhossza, ha frekvenciája $440\text{ Hz}$? Hány teljes hullám van egy teljes méteren?


$$
\lambda = \frac c f = \frac {340} {440} = 0,77272\text{ m}
$$



$$
n = \frac 1 \lambda = \frac 1 {0,77272} = 1,2941
$$


## Feladatok
1. Egy denevér $50\text{ kHz}$ ($50\ 000\text{ Hz}$) frekvenciájú ultrahangot bocsát ki tájékozódás céljából. A hang terjedési sebessége a levegőben $340\text{ m/s}$. Mekkora ennek az ultrahangnak a hullámhossza, és hány teljes hullám fér el egy méteren?

2. Egy hullámgépen a transzverzális hullám terjedési sebessége $2,4\text{ m/s}$. A gerjesztő frekvencia $3\text{ Hz}$. Mekkora a kialakuló hullám hullámhossza? Hány teljes hullám található a hullámgép $1\text{ méteres}$ szakaszán?

3. Egy kőzetben a longitudinális (P) hullámok terjedési sebessége $5000\text{ m/s}$. A földrengés során keletkező hullám frekvenciája $20\text{ Hz}$. Mekkora a szeizmikus hullám hullámhossza, és hány teljes hullám fér el egy méteren?
