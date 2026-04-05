# A torziós inga (Forgási rezgések)

## Kísérletek

[Torziós inga I](https://www.youtube.com/watch?v=6iucHadtnX4)

[Torziós inga II](https://www.youtube.com/watch?v=GGO2I_sN8hI)

## A mozgásegyenlet

A forgási rezgések legtipikusabb példája a torziós inga. Egy függőleges, rugalmas szálra (vagy spirálrugóra) rögzített testet a nyugalmi helyzetéből vízszintes síkban elfordítunk, majd elengedünk. A mozgásegyenlet felírásához ismét a forgómozgás alapegyenletéből indulunk ki:


$$
\Theta \beta = M_{z,e}^k
$$


Itt $\Theta$ a felfüggesztés tengelyére vonatkozó tehetetlenségi nyomaték, $\beta$ pedig a szöggyorsulás.

Amikor a szálat megcsavarjuk, abban rugalmas feszültség ébred, amely a kitéréssel ellentétes irányú forgatónyomatékot fejt ki a testre. A Hooke-törvény forgó mozgásra vonatkozó alakja szerint ez a visszatérítő nyomaték egyenesen arányos a megcsavarodás $\phi$ szögével:


$$
M_{z,e}^k = -D^* \phi
$$


Itt $D^*$ a szálra jellemző direkciós nyomaték vagy torziós állandó, mértékegysége $\text{Nm/rad}$. Megmutatja, mekkora nyomaték szükséges a szál 1 radiánnal történő megcsavarásához.

Ezt behelyettesítve a mozgásegyenletbe kapjuk:


$$
\Theta \beta = -D^* \phi
$$



$$
\beta = -\frac {D^*} {\Theta} \phi
$$


**Fontos különbség a fizikai ingához képest:** Itt nem volt szükség kis szögű ($\sin\phi \approx \phi$) közelítésre! Amíg a megcsavarás nem haladja meg a szál rugalmassági határát, ez az egyenlet nagyobb kitérések (akár több teljes fordulat) esetén is pontosan érvényes. 

Mivel a szöggyorsulás egyenesen arányos a kitéréssel és ellentétes irányú azzal, a megoldás itt is harmonikus rezgés.

## A periódusidő

Az egyenlet alakjából leolvashatjuk a körfrekvencia négyzetét:


$$
\omega^2 = \frac {D^*} {\Theta}
$$


A periódusidő ($T = \frac{2\pi}{\omega}$) pedig a következőképpen alakul:


$$
\frac {4\pi^2} {T^2} = \frac {D^*} {\Theta}
$$



$$
\frac {T^2} {4\pi^2} = \frac {\Theta} {D^*}
$$



$$
T = 2\pi \sqrt {\frac {\Theta} {D^*}}
$$


Látható, hogy a lengésidő független a nehézségi gyorsulástól ($g$), kizárólag a test tehetetlenségétől és a szál rugalmas tulajdonságaitól függ.

### Példák
1. Egy $R = 0,1\text{ m}$ sugarú, $m = 2\text{ kg}$ tömegű, homogén tömör fémkorongot a középpontjánál fogva egy acélszálra függesztünk. A szál direkciós nyomatéka $D^* = 0,05\text{ Nm/rad}$. Mekkora a torziós inga lengésideje?

Először határozzuk meg a korong saját tengelyére vonatkozó tehetetlenségi nyomatékát:


$$
\Theta = \frac 1 2 mR^2 = \frac 1 2 \cdot 2 \cdot (0,1)^2 = 0,01\text{ kg m}^2
$$


Behelyettesítve a lengésidő képletébe:


$$
T = 2\pi \sqrt {\frac {\Theta} {D^*}} = 2\pi \sqrt {\frac {0,01} {0,05}} = 2\pi \sqrt {0,2} \approx 2,81\text{ s}
$$


2. **Ismeretlen test tehetetlenségi nyomatékának mérése (Laboratóriumi módszer).** 
Adott egy torziós inga, amelynek sem a direkciós nyomatékát ($D^*$), sem az eredeti rögzített testének tehetetlenségi nyomatékát ($\Theta_0$) nem ismerjük. Megmérjük a rendszer lengésidejét, ami $T_1 = 1,50\text{ s}$.
Ezután a tengelyre szimmetrikusan ráhelyezünk egy ismert $\Theta_{plusz} = 0,02\text{ kg m}^2$ tehetetlenségi nyomatékú etalon testet (pl. egy gyűrűt). Az új lengésidő $T_2 = 2,10\text{ s}$ lesz. Mekkora az eredeti rendszer $\Theta_0$ tehetetlenségi nyomatéka?

Írjuk fel a lengésidő négyzetét mindkét esetre:
1. eset: $T_1^2 = 4\pi^2 \frac {\Theta_0} {D^*}$
2. eset: $T_2^2 = 4\pi^2 \frac {\Theta_0 + \Theta_{plusz}} {D^*}$

Osszuk el a második egyenletet az elsővel (így a $4\pi^2$ és az ismeretlen $D^*$ is kiesik):


$$
\frac {T_2^2} {T_1^2} = \frac {\Theta_0 + \Theta_{plusz}} {\Theta_0}
$$



$$
\frac {T_2^2} {T_1^2} = 1 + \frac {\Theta_{plusz}} {\Theta_0}
$$


Helyettesítsük be a számadatokat:


$$
\frac {2,10^2} {1,50^2} = 1 + \frac {0,02} {\Theta_0}
$$



$$
1,96 = 1 + \frac {0,02} {\Theta_0}
$$



$$
0,96 = \frac {0,02} {\Theta_0}
$$



$$
\Theta_0 = \frac {0,02} {0,96} \approx 0,0208\text{ kg m}^2
$$


Ez egy rendkívül elegáns és gyakran használt kísérleti módszer, mert csupán időméréssel meghatározható egy tetszőlegesen bonyolult alakú test tehetetlenségi nyomatéka!

## A Cavendish-kísérlet

[Cavendish-kísérlet Steven Moulddal](https://www.youtube.com/watch?v=70-_GBymrck)

[Régi felvétel a Cavendish-kísérletről](https://www.youtube.com/watch?v=VYf-Glwtr68)

### Egyenlet G meghatározására

Jelöljük az eltérülés szögét $\phi$-vel, hisz $\Theta$ a tehetetlenségi nyomaték jelölése a mi tárgyalásunk során.

A gravitációs erő:


$$
F_g = G\frac{mM} {r^2}
$$


A fellépő forgatónyomaték a következő:


$$
|M_z| = 2F_g\frac L 2 = F_gL
$$


Tudjuk, hogy a nyomatékkal arányos szögelfordulás lép fel a torziós szálon. Ez Hooke törvénye a torziós szálra:


$$
|M_z| = D^*\phi
$$


Itt a nyomaték nagyságát jelöltük $|M_z|$-mel, tehát $|M_z|$ nem negatív. A forgási rezgésre felírhatjuk, hogy:


$$
\omega^2 = \frac {D^*} {\Theta}
$$


A tehetetlenségi nyomaték a következő:


$$
\Theta = 2m\left(\frac L 2\right)^2 = \frac 1 2 mL^2
$$


Rakjuk össze az egyenleteket egyetlen egyenletbe, melyből $G$-t fogjuk kifejezni. Ehhez kifejezzük $D^*$-ot!


$$
D^* = \omega^2 \Theta = \frac {4\pi^2} {T^2} \frac 1 2 mL^2 = \frac {2\pi^2mL^2} {T^2}
$$


A nyomatékokat is egyenlővé tesszük, és behelyettesítjük $F_g$-t:


$$
D^* \phi = G\frac{mM} {r^2}L
$$


Végül beírjuk $D^*$-ot, és kifejezzük $G$-t:


$$
\frac {2\pi^2mL^2\phi} {T^2} = G\frac {mM} {r^2}L
$$



$$
G = \frac {2\pi^2Lr^2\phi} {MT^2}
$$


## Feladatok

**1. Feladat: A rúd és a mozgatható gömbök**
Egy vízszintes, elhanyagolható tömegű $L$ hosszúságú rúd közepét egy torziós szálra függesztjük. A rúdra két darab pontszerűnek tekinthető, $m$ tömegű testet rögzítünk, a forgástengelytől mindkettőt $x$ távolságra. 
*   Írd fel a lengésidőt az $x$ távolság függvényében!
*   Ha a testeket a rúd végéről ($x = L/2$) a rúd feléig ($x = L/4$) toljuk, hányszorosára változik a torziós inga lengésideje?

**2. Feladat: Különböző fémhengerek azonos szálon**
Két azonos anyagból készült, azonos magasságú, de különböző sugarú tömör fémhengert felváltva ugyanarra a torziós szálra függesztünk a geometriai tengelyüknél fogva. Az "A" henger sugara $R$, a "B" henger sugara $2R$.
*   Határozd meg, hogy mekkora a "B" henger lengésideje, ha az "A" henger lengésideje $T_A = 2\text{ másodperc}$!
*Segítség:* Ne feledd, hogy a nagyobb hengernek nem csak a sugara, de a tömege is nagyobb, hiszen azonos anyagból készültek! Fejezd ki a tömeget a sűrűség, a magasság és a sugár segítségével!

**3. Feladat: A mechanikus karóra billegője**
A klasszikus mechanikus órákban a pontos időmérést egy billegő (torziós inga) végzi, melyet egy spirálrugó tart mozgásban. A billegő egy $\Theta = 1,5 \cdot 10^{-7}\text{ kg m}^2$ tehetetlenségi nyomatékú kerék. Ahhoz, hogy az óra pontosan járjon, a billegőnek másodpercenként pontosan 4 teljes lengést (oda-vissza mozgást) kell végeznie.
*   Mekkora a billegő lengésideje ($T$)?
*   Mekkora direkciós nyomatékkal ($D^*$) kell rendelkeznie a beépített spirálrugónak, hogy az óra pontos legyen?