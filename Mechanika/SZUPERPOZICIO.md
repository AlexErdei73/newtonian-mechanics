# A szuperpozíció elve

## Hullámok szuperpozíciója

### Kísérletek

[Transzverzális hullámok szuperpozíciója](https://www.youtube.com/watch?v=JUCLoczzwPo)

[Longitudinális hullámok szuperpozíciója](https://www.youtube.com/watch?v=N5MltLd05MI)

[Szuperpozíciót szemléltető eszköz](https://www.youtube.com/watch?v=hnZ1FKVWN4k)

> **A szuperpozíció elve:** Ha két vagy több hullám terjed ugyanabban a térrészben, akkor ezek terjedése egymástól független. A hullámtér bármely tetszőleges pontjában az eredő kitérés bármely tetszőleges pillanatban az egyes hullámok kitéréseinek összege.

A kísérletek szépen szemléltetik a szuperpozíció elvét, amely mechanikai hullámok esetében matematikai úton is levezethető a Newton-törvényekből. Ezt a levezetést meghagyjuk későbbre. Itt csak felírjuk az eredményt matematikai alakban is két, egydimenziós, transzverzális hullám esetére.


$$
y_1 = f(x, t)
$$



$$
y_2 = g(x, t)
$$



$$
y = y_1 + y_2 = f(x, t) + g(x, t)
$$


## Young-féle interferenciakísérlet

### Kísérletek

[Interferencia hullámkádban](https://www.youtube.com/watch?v=5raMmc7BeEY)

[Interferencia hanghullámokkal](https://www.youtube.com/watch?v=b87QZtYKmqo)

> **Koherens hullámforrások:** Egyenlő frekvenciájú harmonikus hullámokat kibocsátó hullámforrások, amelyek között a fáziskülönbség állandó.

> **Interferencia:** Koherens hullámforrásokból származó hullámok találkozásakor fellépő jelenség. A hullámtér bizonyos pontjaiban, ahol a hullámok azonos fázisban találkoznak, a hullámok erősítik egymást. Ahol a hullámok ellentétes fázisban találkoznak, ott gyengítik egymást.

A matematikai leírás megmutatja, hogy az, hogy erősítés vagy gyengítés tapasztalható-e a hullámtér egy adott pontjában, a hullámforrásoktól a megfigyelési pontig megtett utak különbségétől függ. 

Írjuk fel a két hullámfüggvényt! Legyen $A$ az amplitúdó, $\omega$ a körfrekvencia, és $c$ a hullám terjedési sebessége.


$$
y_1 = A\cos\left(\omega\left(t - \frac {x_1} c\right)\right)
$$



$$
y_2 = A\cos\left(\omega\left(t - \frac {x_2} c\right)\right)
$$



$$
y = y_1 + y_2 = A(\cos(\omega t - k x_1) + \cos(\omega t - k x_2))
$$


Ahol bevezettük a $k = \frac \omega c$ hullámszámot.

Most felhasználjuk a trigonometrikus azonosságot, amelyet már korábban is használtunk:


$$
\cos (\alpha + \beta) + \cos (\alpha - \beta) = 2\cos\alpha\cos\beta
$$


Legyen most:


$$
\alpha + \beta = \omega t - k x_1
$$



$$
\alpha - \beta = \omega t - k x_2
$$


Ekkor ugye:


$$
\alpha = \frac {\omega t - k x_1 + \omega t - k x_2} 2 = \frac {2\omega t - k(x_1 + x_2)} 2 = \omega t - k\frac {x_1 + x_2} 2
$$



$$
\beta = \frac {\omega t - k x_1 - (\omega t - k  x_2)} 2 = \frac{k(x_2 - x_1)}{2} = k\frac{\Delta x}{2}
$$


Így végül a kitérés a hullámtér azon pontjában, ahol az útkülönbség a forrásoktól $\Delta x$:


$$
y = \left[ 2A\cos\left(k\frac{\Delta x}{2}\right) \right] \cos\left(\omega t - k\frac {x_1 + x_2} 2\right)
$$


**Figyeljük meg a kapott eredményt!** A képlet csodálatos módon két jól elkülöníthető részre szakadt:
1. Az első, szögletes zárójelben lévő részben csak a hely ($\Delta x$) szerepel, az idő nem. Ez az időtől független rész adja meg a térben "álló" interferenciaképet, azaz az eredő amplitúdót az adott pontban.
2. A második rész (a jobb oldali koszinusz) tartalmazza az időt ($t$), ami azt mutatja, hogy az adott térbeli pontban a közeg részecskéi továbbra is $\omega$ körfrekvenciájú harmonikus rezgőmozgást végeznek.

Az eredő rezgés amplitúdója tehát a térben pontról pontra változik:


$$
A_{\text{eredő}} = \left| 2A\cos\left(k \frac{\Delta x}{2}\right) \right| = \left| 2A\cos\left(\frac{2\pi}{\lambda}\frac {\Delta x}{2}\right) \right| = \left| 2A\cos\left(\pi\frac {\Delta x} \lambda\right) \right|
$$


A kioltás feltétele, hogy az amplitúdó, tehát a $\cos$ függvény értéke 0 legyen.


$$
\pi \frac {\Delta x} \lambda = \left(n + \frac 1 2\right)\pi, \quad n = 0, 1, 2, 3, ...
$$



$$
\Delta x = \left(n + \frac 1 2\right) \lambda
$$


*(Fizikai szemlélettel ez teljesen logikus: ha az útkülönbség egy fél hullámhossz, vagy annak páratlan többszöröse, akkor az egyik hullám hullámhegye pont a másik hullámvölgyével találkozik, teljesen lerontva egymást.)*

Az erősítés feltétele, hogy az amplitúdó a maximális $2A$ legyen, tehát a $\cos$ függvény értéke $\pm 1$ legyen.


$$
\pi \frac {\Delta x} \lambda = n\pi, \quad n = 0, 1, 2, 3, ...
$$



$$
\Delta x = n \lambda
$$


*(Ekkor a hullámhegy hullámheggyel találkozik, a fáziskülönbség nulla, vagy teljes hullámhossznyi.)*

### Példa
Két pontszerűnek tekinthető hangszóró távolsága egymástól $2\text{ m}$. A generátor egyenlő amplitúdójú, $2\text{ kHz}$ frekvenciájú jelet ad rájuk. A hang sebessége $340\text{ m/s}$. Egy megfigyelő a két hangszórót összekötő szakasz felezőmerőlegesén áll úgy, hogy mindkét hangszórótól pontosan $4\text{ m}$ távolságra van. Mennyit mozduljon el a megfigyelő a hangszórók síkjával párhuzamosan jobbra az első kioltási helyig?

**Megoldás:**

Számoljuk ki a hullámhosszt!

$$
\lambda = \frac c f = \frac {340} {2000} = 0,17\text{ m}
$$


Az első kioltás ($n=0$) útkülönbsége:

$$
\Delta x = \left(0 + \frac 1 2\right) \lambda = \frac \lambda 2 = 0,085\text{ m} = 8,5\text{ cm}
$$


A megfigyelő eredetileg 4 m-re van a hangszóróktól, és a fél távolság a hangszórók között 1 m. Pithagorasz-tétellel a megfigyelő egyenese és a hangszórók síkja közötti merőleges távolság: $\sqrt{4^2 - 1^2} = \sqrt{15}\text{ m}$.

Tegyük fel, hogy elmozdulunk jobbra $d$ távolsággal. Ekkor a két hangszórótól vett új távolságok Pithagorasz-tétellel felírva az alábbi útkülönbséget adják:


$$
\Delta x = \sqrt{(1 + d)^2 + 15} - \sqrt{(1 - d)^2 + 15} = 0,085
$$


Ezt az egyenletet (megfelelő matematikai közelítéssel, vagy algebrai úton) megoldva $d \approx 0,17\text{ m}$-t kapunk, vagyis **17 cm**-t kell elmozdulnia. Ezt visszahelyettesítéssel ellenőrizhetjük.

## Feladatok

1. Két koherens, azonos amplitúdójú és frekvenciájú hullám interferál egy közegben. A hullámhossz $40\text{ cm}$. Milyen lesz az eredő hullám amplitúdója ahhoz a maximális amplitúdóhoz képest (százalékosan), amelyet konstruktív interferencia esetén mérnénk egy olyan pontban, amelynek a két hullámforrástól mért távolságainak különbsége $10\text{ cm}$?

2. Két hangszóró egymástól $3\text{ m}$-re helyezkedik el, és azonos fázisban sugároznak $f$ frekvenciájú hangot. Egy megfigyelő az egyik hangszórótól $4\text{ m}$-re, a másiktól $5\text{ m}$-re áll (a három pont derékszögű háromszöget alkot). Határozza meg azt a legkisebb frekvenciát, amelynél a megfigyelő maximális erősítést (konstruktív interferenciát) tapasztal! A hang terjedési sebessége a levegőben $340\text{ m/s}$.

3. Egy Young-féle kétréses kísérletben a két rés távolsága $0,2\text{ mm}$. A résekre merőlegesen $600\text{ nm}$ hullámhosszúságú monokromatikus lézerfény esik. A megfigyelőernyő a résektől $2\text{ m}$ távolságra található. Határozza meg az interferenciakép nulladrendű (középső) maximuma és az első interferenciaminimum (első sötét sáv) közötti lineáris távolságot az ernyőn!