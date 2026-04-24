# Állóhullámok

## Egydimenziós hullámok visszaverődése

### Kísérlet

[Egydimenziós hullám visszaverődése rögzített és szabad végről](https://www.youtube.com/watch?v=1PsGZq5sLrw)

### Szimuláció

[Egydimenziós hullám visszaverődése rögzített és szabad végről](https://alexerdei73.github.io/physics-engine/project/#e22e5592-48ce-4e65-a3ea-5f37449761c4)

> A szimulációt állítsuk be úgy, hogy mindkét vég látszódjon! A jobb oldali vég rögzített, a bal oldali pedig szabad vég, mely elhanyagolható tömegű kötéllel van kötve egy távoli ponthoz. 

A kísérletben és a szimulációban is megfigyelhetjük, hogy amikor a hullám a rögzített végről verődik vissza, akkor a visszavert hullám ellentétes fázisú összehasonlítva a beeső hullámmal. A helyzet pontosan az ellenkezője, amikor a hullám szabad végről verődik vissza. Ilyenkor a visszavert hullám azonos fázisban van a beeső hullámmal. 

> **Egydimenziós hullám visszaverődése:** Rögzített végről a hullám ellentétes fázisban verődik vissza a beeső hullámhoz képest, tehát hullámhegyből hullámvölgy lesz és fordítva. Szabad végről a hullám azonos fázisban verődik vissza, tehát hullámhegy hullámhegy marad és ez hullámvölgyre is igaz.

## Magyarázat a hullám visszaverődésére

Ezt a tapasztalatot a szuperpozíció elvével magyarázhatjuk meg. A rögzített végen a kitérés minden pillanatban nulla. A kitérés azonban a beeső és a visszavert hullám szuperpozíciója.


$$
y_{beeső} = A\cos(\omega t - kx)
$$


Tudjuk, hogy a terjedési sebesség iránya és így a hullámszám ellentétes előjelű a visszavert hullámra, mint a beeső hullámra. A visszavert hullám által megtett út visszaverődés után $l - x$, tehát az $x$ változása $x - l$. Ideális esetben, egy dimenzióban, nincs amplitúdóváltozás.


$$
y_{visszavert} = A\cos(\omega t - kl + k(x - l) - \phi) = A\cos(\omega t + kx - 2kl - \phi)
$$


Itt $\phi$ az ismeretlen fázistolás, melyre $\pi$-t várunk a kísérlet alapján. Nézzük meg, megkapjuk-e ezt!


$$
y = y_{beeső} +  y_{visszavert} = A(\cos(\omega t - kx) + \cos(\omega t + kx - 2kl - \phi))
$$


A $\cos$ függvények összegére a régi trükköt alkalmazhatjuk. Az azonosság a következő volt:


$$
\cos(\alpha + \beta) + \cos(\alpha - \beta) = 2\cos\alpha\cos\beta
$$


Legyen


$$
\alpha + \beta = \omega t - kx
$$



$$
\alpha - \beta = \omega t + kx - 2kl - \phi
$$


Meghatározzuk $\alpha$ és $\beta$ értékeit:


$$
\alpha = \omega t - kl - \frac{\phi}{2}
$$



$$
\beta = \frac{\phi}{2} + kl - kx
$$


Így a kitérés a következő:


$$
y = 2A\cos\left(\frac{\phi}{2} + k(l - x)\right)\cos\left(\omega t - kl - \frac{\phi}{2}\right)
$$


Ez az általános kifejezés az egydimenziós hullám kitérésére, ha a kitérés a haladó és a visszavert hullám találkozása. Ha $x = l$, tehát a rögzített végnél vagyunk, akkor:


$$
y = 2A\cos\left(\frac{\phi}{2}\right)\cos\left(\omega t - kl - \frac{\phi}{2}\right)
$$


Ez tehát harmonikus rezgés. Az amplitúdó nulla kell legyen a rögzített végen, tehát:


$$
\cos\left(\frac{\phi}{2}\right) = 0
$$



$$
\frac{\phi}{2} = \left(n + \frac{1}{2}\right)\pi, \quad n = 0, 1, 2, ...
$$


Innen $\phi$-t kifejezve kapjuk, hogy:


$$
\phi = (2n + 1)\pi
$$


Ezek a megoldások egyenértékűek a visszavert hullámok kitérésére, tehát választhatjuk az $n = 0$ esetet és így $\phi = \pi$.

## Állóhullámok

### Kísérlet

[Állóhullám hullámgépen egy szabad véggel](https://www.youtube.com/watch?v=MgTyN-KUrHM)

### Szimuláció

[Állóhullám egy szabad véggel](https://alexerdei73.github.io/physics-engine/project/#1f7d72de-d5c2-4f07-83be-26d914a79c2b)

A kísérletekben állóhullámokat láthatunk. Ezek a haladó hullámokkal ellentétben állni látszanak, ebből adódik az elnevezésük. Néhány gyakran használt fogalom az állóhullámokkal kapcsolatban a következő:

>**Duzzadóhely:** Olyan pont, amelyben a rezgés amplitúdója a legnagyobb.

>**Csomópont:** Olyan pont, amelyben a rezgés amplitúdója nulla.

>Szabad végen mindig duzzadóhely alakul ki, míg rögzített végen minden esetben csomópont alakul ki.

>**Sajátrezgés:** A húron kialakuló állóhullámot a húr sajátrezgésének is nevezzük.

>**Sajátfrekvencia:** Az állóhullámban a húr minden pontja azonos frekvenciával rezeg. Ez a frekvencia a sajátfrekvencia. A húrnak végtelen sok sajátrezgése és sajátfrekvenciája van.

>**Alapharmonikus vagy alaphang:** A húron kialakuló állóhullám, melynek nincs belső csomópontja a húron.

>**Alapfrekvencia:** Az alapharmonikus frekvenciája. Ez a legalacsonyabb sajátfrekvencia. 

>**Felharmonikus:** Olyan állóhullám, ahol a húron belső csomópontok vannak. Az $n$-edik harmonikus esetében $n$ belső csomó van a húron. A felharmonikus frekvenciája mindig az alapfrekvencia egész számú többszöröse.

A rezgő rendszerben két, ellentétes irányban terjedő hullám interferál és erre a helyzetre érvényes a fentebb levezetett formula a kitérésre. Tegyük fel, hogy a külső gerjesztő erő megszűnte után, ahogy a szimulációban láthatjuk, a szabad végen állandó amplitúdójú rezgés alakul ki. Jelöljük ezt az amplitúdót most $2A$-val! Ekkor az $x = 0$ szabad végen fenn kell álljon, hogy:


$$
2A = 2A\left|\cos\left(\frac{\pi}{2} + kl\right)\right|
$$


A koszinusz értéke tehát $\pm 1$.


$$
\frac{\pi}{2} + kl = m\pi, \quad m = 1, 2, 3, ...
$$


Ekkor a húr hossza és a hullámhossz közt érdekes összefüggés kell fennálljon:


$$
kl = \left(m - \frac{1}{2}\right)\pi = \left(n + \frac{1}{2}\right)\pi, \quad n = 0, 1, 2, ...
$$



$$
\frac{2\pi}{\lambda} l = \left(n + \frac{1}{2}\right)\pi
$$



$$
l = \left(n + \frac{1}{2}\right)\frac{\lambda}{2} = (2n + 1)\frac{\lambda}{4}
$$


A húr hossza a negyed hullámhossz páratlan számú többszöröse kell legyen. A szimuláció az $n = 2$ esetet mutatja be, amikor a húr hossza $5$-szöröse a negyed hullámhossznak. Természetesen nincs megszabva, hogy mekkora az $A$ amplitúdó, tehát ameddig a húr a rugalmassági tartományon belül mozog, akármekkora is lehet. A kitérésfüggvényt egységnyi $2A$ amplitúdóval adott $n$ esetén, a húr $n$-edik sajátfüggvényének, vagy $n$-edik sajátrezgésének nevezzük. Természetesen az amplitúdó bármekkora lehet és a szuperpozíció elve szerint több ilyen megoldás összege is megoldás. Tehát legáltalánosabb esetben a mozgásegyenlet megoldása a következő kell legyen:


$$
y = \sum_{n = 0}^{\infty} A_n f_n(x, t)
$$


Itt az $f_n$ sajátfüggvény:


$$
f_n = \cos\left(\frac{\pi}{2} + k(l - x)\right)\cos\left(\omega t - kl - \frac{\pi}{2}\right)
$$


A matematikusok be is bizonyítják, hogy a mozgásegyenlet megoldása a húr tetszőleges szabad rezgése esetében felírható a fenti alakban, persze az $f_n$ függvények konkrét alakja függ a húr fizikai paramétereitől, például a hullám terjedési sebességétől a húron, illetve attól, hogy a húr végei szabadon rezegnek vagy rögzítettek-e. A húr kitérései nyilván a rugalmassági határokon belül kell legyenek. 

>A húron kialakuló szabad rezgés mindig a sajátrezgések különböző amplitúdókkal vett szuperpozíciója. Ez az állítás tetszőleges rezgő rendszerre érvényes, nem csak húrokra. Csak annyi a feltétel, hogy a szuperpozíció elve érvényes legyen, tehát a kitérések kicsinyek kell legyenek és a rendszer a rugalmassági határain belül mozog, ahol a Hooke-törvénye érvényes.

### Példák

1. A szimulációban leolvasható a gerjesztő frekvencia, melyre a húr rezonál. Ez $0,59\text{ Hz}$. Ekkor két belső csomó alakul ki, tehát $n = 2$. A húr hossza $l = 15\text{ m}$. 
* Mekkora a kialakuló állóhullám hullámhossza?
* Mekkora a terjedési sebesség a húron?
* Mekkora az alapfrekvencia? Próbáljuk ki ezt a frekvenciát a szimulációban!


$$
l = (2n + 1)\frac{\lambda}{4}
$$



$$
15 = 5 \frac{\lambda}{4}
$$



$$
\lambda = 12\text{ m}
$$



$$
c = \frac{\lambda}{T} = \lambda f = 12 \cdot 0,59 = 7,08\text{ m/s}
$$



$$
l = \frac{\lambda_0}{4}
$$



$$
\lambda_0 = 4l = 4 \cdot 15 = 60\text{ m}
$$



$$
f_0 = \frac{c}{\lambda_0} = \frac{7,08}{60} = 0,118\text{ Hz}
$$


Itt is igaz az, hogy a frekvencia az alapfrekvencia egész számú többszöröse, ez esetben pont $5$-szöröse (mivel $2n+1 = 5$).


$$
\frac{f}{f_0} = \frac{0,59}{0,118} = 5
$$


2. Vizsgáljuk most a kialakuló állóhullámokat a szimulációban szereplő húron, ha mindkét vég rögzített!
* Mekkora az alaprezgés hullámhossza, ha a húr $15\text{ m}$ hosszú?
* Mekkora az alapfrekvencia, ha a terjedési sebesség továbbra is $c = 7,08\text{ m/s}$?
* Mekkora az első és második felharmonikus hullámhossza és frekvenciája?
* Mekkora az $n$-edik harmonikus hullámhossza és frekvenciája?
* Készítsünk szimulációt a második harmonikusra!

Ha mindkét vég rögzített, akkor ezeken csomópont van, de az alaphang esetében nincs belső csomó, tehát a húr hossza egy fél hullámhossz kell legyen.


$$
l = \frac{\lambda_0}{2}
$$



$$
\lambda_0 = 2l = 30\text{ m}
$$



$$
f_0 = \frac{c}{\lambda_0} = \frac{7,08}{30} = 0,236\text{ Hz}
$$



$$
f_1 = 2f_0 = 0,472\text{ Hz}
$$



$$
f_2 = 3f_0 = 0,708\text{ Hz}
$$


A hullámhosszak:


$$
\lambda_1 = \frac{c}{f_1} = \frac{7,08}{0,472} = 15\text{ m}
$$



$$
\lambda_2 = \frac{c}{f_2} = \frac{7,08}{0,708} = 10\text{ m}
$$


Az általános formula:


$$
l = (n + 1)\frac{\lambda}{2}
$$


Innen kifejezve $\lambda$-t kapjuk, hogy:


$$
\lambda = \frac{2l}{n + 1}
$$



$$
f = \frac{c}{\lambda} = \frac{c}{\frac{2l}{n + 1}} = \frac{n + 1}{2} \frac{c}{l}
$$


[Állóhullám húron két rögzített véggel](https://alexerdei73.github.io/physics-engine/project/#80f91da0-5f31-4cad-8590-1ec4a3824fa1)

## Feladatok

1. Egy $10 \text{ m}$ hosszú, homogén kötél egyik vége rögzített, a másik vége szabadon mozoghat. A hullámok terjedési sebessége a kötélen $5 \text{ m/s}$. 
* Határozd meg az alapharmonikus (alaphang) frekvenciáját és hullámhosszát!
* Mekkora frekvenciával kell rezegtetni a kötelet, hogy olyan állóhullám alakuljon ki, amelyen pontosan 3 belső csomópont található ($n=3$)?

2. Egy gitárhúr mindkét vége rögzített, a hossza $0,65 \text{ m}$. Tudjuk, hogy a húr alaphangjának frekvenciája $330 \text{ Hz}$ (ez felel meg az E hangnak).
* Milyen sebeséggel terjednek a mechanikai hullámok ezen a húron?
* Határozd meg a harmadik felharmonikus (amelynél három belső csomópont található) frekvenciáját és a hozzá tartozó hullámhosszat!

3. Két azonos anyagból készült, és azonos mechanikai feszültségű (tehát azonos hullámterjedési sebességű) húrt vizsgálunk laboratóriumi körülmények között. Az első, $L_1$ hosszúságú húr mindkét vége rögzített, míg a második, $L_2$ hosszúságú húr egyik vége rögzített, a másik pedig szabad.
* Fejezd ki az $L_2$ hosszúságot az $L_1$ függvényében, ha azt szeretnénk elérni, hogy a két húr alapfrekvenciája ($f_0$) pontosan megegyezzen egymással!