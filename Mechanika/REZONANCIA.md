# A rezonancia

## Kísérlet

[Kényszerrezgés, rezonancia demonstráció Sas Elemér által](https://www.youtube.com/watch?v=NeCHP4AjgGg&t=121s)

## Szimuláció

Ebben a szimulációban a kísérletben látottakat tudjuk megismételni. A testre hat egy periodikus gerjesztőerő, amit egy piros nyíl szimbolizál a szimulációban. Ez éppen úgy energiát ad a rendszernek, mint a kísérletben a rugó végének periodikus mozgatása. Az utóbbi a rendszer egyensúlyi helyzetét mozgatja periodikusan, amely egy periodikus gerjesztőerőt jelent, amely a testet éri. Amennyiben a sajátfrekvencia megegyezik a gerjesztőerő frekvenciájával, a rendszer energiája nőni kezd, mivel az erő megfelelő ütemben hat és a munkája sosem negatív, tehát növeli a rendszer mechanikai energiáját. Egészen addig tart ez, ameddig egy periódus alatt a csillapítás pontosan annyi energiát emészt fel, amennyit a rendszer a gerjesztéstől kap. Ilyenkor időben állandó amplitúdójú rezgés alakul ki, és ez az amplitúdó akkor lesz a legnagyobb, amikor a sajátfrekvencia megegyezik a gerjesztőerő frekvenciájával. Ez egészen pontosan a rezgés sebességének amplitúdójára igaz, hisz az energiaátadás a sebességtől függ. Egy csúszkán állítható a gerjesztő frekvencia, középen a rendszer sajátfrekvenciája van. 

[Kényszerrezgés, rezonancia szimuláció](https://alexerdei73.github.io/physics-engine/project/#05652dfe-092a-4fe2-a4bc-f7a29109e103)

## Fogalmak

>**Szabad rezgés:** A rezgő test nem kap energiát a környezetéből, de folyamatosan veszít a csillapítás által. A szabad rezgés a csillapítás miatt idővel elhal.

>**Sajátfrekvencia:** A csillapítatlan szabad rezgés frekvenciája. Ha a csillapítási tényező kicsiny a sajátfrekvenciához képest, akkor a csillapított szabad rezgés frekvenciája is megegyezik a sajátfrekvenciával.

>**Gerjesztőerő:** A rezgő testet vagy rendszert érő periodikus erő, amely energiát adhat át a testnek. 

>**Kényszerrezgés:** A rendszerre ható periodikus gerjesztőerő hatására kialakuló időben állandó mechanikai energiájú állapot. Ennek kialakulása időt vesz igénybe, a szabad rezgés elhal, a frekvencia megegyezik a gerjesztőerő frekvenciájával. Az amplitúdó időben állandó.

>**Rezonancia:** A kényszerrezgés amplitúdója igen naggyá válhat, amikor a sajátfrekvencia és a gerjesztőerő frekvenciája megegyezik. Ez a rezonancia. Az energiafelvétel a rezgő rendszer által maximális rezonancián. Az amplitúdó maximum értéke kissé alacsonyabb frekvencián lesz maximális, amikor a csillapítási veszteségek kisebbek.

## A mozgásegyenlet

Az erőkhöz a rugalmas erőn és a csillapításon kívül hozzájön a periodikus gerjesztőerő, amennyiben a kényszerrezgést akarjuk vizsgálni.


$$
F_{x,e} = -Dx - \beta v_x + F_0 \cos(\omega t)
$$


Az eredőerőt Newton második törvénye alapján egyenlővé tehetjük a tömeg és a gyorsulás szorzatával.


$$
F_{x,e} = ma_x
$$


Így felírhatjuk a mozgásegyenletet, amit át is rendezünk.


$$
ma_x = -Dx -\beta v_x + F_0\cos(\omega t)
$$



$$
ma_x + \beta v_x + Dx = F_0\cos(\omega t)
$$


A tömeggel oszthatjuk az egyenletet, és így kapjuk a következő alakot.


$$
a_x + 2\delta v_x + \omega_0^2 x = f_0\cos(\omega t)
$$


Itt a következő jelöléseket vezettük be.


$$
\delta = \frac \beta {2m}
$$



$$
\omega_0^2 = \frac D m
$$



$$
f_0 = \frac {F_0} m
$$


## A fázistolás

Most meg fogjuk keresni a gerjesztett rezgés amplitúdójának és kezdőfázisának frekvenciafüggését leíró képleteket! Annyit tudunk, a gerjesztett rezgés frekvenciája megegyezik a gerjesztőerő frekvenciájával és az amplitúdó időben állandó.


$$
x = A\cos(\omega t + \phi)
$$


Ismerjük a sebességet és a gyorsulást leíró formulákat is!


$$
v_x = -A\omega \sin(\omega t + \phi)
$$



$$
a_x = -A\omega^2 \cos(\omega t + \phi)
$$


Ezeket be fogjuk helyettesíteni a mozgásegyenletbe, majd felhasználunk két trigonometriából ismert azonosságot.

### A trigonometria addíciós tételei


$$
\sin (\alpha + \beta) = \sin \alpha \cos \beta + \cos \alpha \sin \beta
$$



$$
\cos (\alpha + \beta) = \cos \alpha \cos \beta - \sin \alpha \sin \beta
$$


Ezeket most felhasználjuk a behelyettesítéshez, hogy a fenti kifejezéseket felírhassuk $\sin (\omega t)$-t és $\cos (\omega t)$-t tartalmazó tagok összegeként.


$$
x = A(\cos (\omega t) \cos \phi - \sin (\omega t) \sin \phi) = A\cos \phi \cos(\omega t) - A \sin \phi \sin (\omega t)
$$



$$
v_x = -A\omega(\sin(\omega t) \cos \phi + \cos(\omega t) \sin \phi) = -A\omega \cos \phi \sin(\omega t) - A\omega \sin \phi \cos(\omega t)
$$



$$
a_x = -A\omega^2(\cos(\omega t) \cos \phi - \sin (\omega t) \sin \phi) = -A\omega^2\cos\phi \cos(\omega t) + A\omega^2\sin\phi \sin(\omega t)
$$


Nézzük meg először a $\sin(\omega t)$ együtthatóit, melyek 0-t kell adjanak, hisz az egyenlet jobb oldalán nem szerepel ilyen tag.


$$
A\omega^2\sin\phi + 2\delta(-A\omega\cos\phi) + \omega_0^2(-A\sin\phi) = 0
$$



$$
-2\delta\omega\cos\phi = (\omega_0^2 - \omega^2)\sin\phi
$$



$$
\tan \phi = - \frac {2\delta\omega} {\omega_0^2 - \omega^2}
$$


## Az amplitúdó

Most azt fogjuk vizsgálni, hogy függ az amplitúdó a gerjesztő frekvenciától. Ehhez a $\cos(\omega t)$-t tartalmazó tagokat gyűjtjük össze a mozgásegyenlet bal oldalán és $f_0$-t kell kapnunk, hisz a jobb oldalon $f_0\cos(\omega t)$ szerepel.


$$
-A\omega^2\cos\phi + 2\delta(-A\omega\sin\phi) + \omega_0^2A\cos\phi = f_0
$$



$$
A(-2\delta\omega\sin\phi + (\omega_0^2 - \omega^2)\cos\phi) = f_0
$$


A $\sin(\omega t)$ együtthatóiból képzett egyenlet felírható a következő alakban is.


$$
A(2\delta\omega\cos\phi + (\omega_0^2 - \omega^2)\sin\phi) = 0
$$


A trükk az, hogy mindkét egyenletet négyzetre emeljük és összeadjuk, ezáltal kiesik a fázistolás.


$$
A^2(4\delta^2\omega^2\sin^2\phi - 4\delta\omega(\omega_0^2 - \omega^2)\cos\phi\sin\phi + (\omega_0^2 - \omega^2)^2\cos^2\phi) + A^2(4\delta^2\omega^2\cos^2\phi + 4\delta\omega(\omega_0^2 - \omega^2)\cos\phi\sin\phi + (\omega_0^2 - \omega^2)^2\sin^2\phi) = f_0^2
$$


Az összevonásokat elvégezve, felhasználva a Pitagorasz-tétel trigonometrikus alakját, a következő egyenletet kapjuk.


$$
A^2((\omega_0^2 - \omega^2)^2 + 4\delta^2\omega^2) = f_0^2
$$


Innen $A$ kifejezhető.


$$
A = \frac {f_0} {\sqrt {(\omega_0^2 - \omega^2)^2 + 4\delta^2\omega^2}}
$$


### Példák
1. Először vizsgáljuk a csillapítás nélküli, ideális esetet. A kényszererő amplitúdóját válasszuk meg úgy, hogy $f_0 = 1$ teljesüljön.
Legyen $\omega_0 = 10$ rad/s, ahogy az a szimulációban is van! Ábrázoljuk a függvényt!


$$
A = \frac 1 {\sqrt {(100 - \omega^2)^2}}
$$


A görbe $\omega = \omega_0$ esetén a végtelenbe nyúlik, mivel az amplitúdó növekedését semmi nem korlátozza. Ez a gyakorlatban *rezonanciakatasztrófához* vezet.

2. Vizsgáljuk a szimulációban szereplő $\delta = 0,05$ csillapítás esetét!


$$
A = \frac 1 {\sqrt {(100 - \omega^2)^2 + 0,01\omega^2}}
$$


A következő GeoGebra projektből szépen látszik, hogy a maximum az $A = 1$-nél van. Ez $f_0 = 1$ esetén lenne így, a mi esetünkben azonban $f_0 = 2$, és valóban a rezonancián a kialakuló amplitúdó kb. 2 m.

[Amplitúdó-körfrekvencia grafikon](https://www.geogebra.org/calculator/hqz8kewk)

## Az amplitúdómaximum

Most azt fogjuk megmutatni, hogy az amplitúdó maximális a következő körfrekvenciánál.


$$
\omega_r = \sqrt {\omega_0^2 - 2\delta^2}
$$


Az amplitúdó ott maximális, ahol a gyök alatti kifejezés minimális. Vizsgáljuk ezt a kifejezést!


$$
(\omega_0^2 - \omega^2)^2 + 4\delta^2\omega^2 = \omega^4 - 2\omega_0^2\omega^2 + \omega_0^4 + 4\delta^2\omega^2 = (\omega^2)^2 - 2(\omega_0^2 - 2\delta^2)\omega^2 + \omega_0^4
$$


Itt egy másodfokú kifejezésről van szó az $\omega^2$-re nézve. Ennek a minimumát könnyen megtalálhatjuk teljes négyzetté alakítással! Először is vegyük észre, hogy a második tagban a zárójelben épp $\omega_r^2$ áll!


$$
(\omega^2)^2 - 2\omega_r^2\omega^2 + \omega_0^4 = (\omega^2 - \omega_r^2)^2 + \omega_0^4 - \omega_r^4
$$


Ennek a minimuma akkor van, amikor az első négyzetes tag épp 0, hisz a másik két tag állandó!


$$
\omega = \omega_r
$$


Ezzel beláttuk, hogy az amplitúdó maximális az $\omega_r$ körfrekvenciánál.

### Példa
Számítsuk ki a szimulációs példánk esetében az amplitúdómaximumnak megfelelő körfrekvenciát és a pontos amplitúdómaximumot is!


$$
\omega_0^2 = 100\text{ 1/s}^2
$$



$$
\delta = 0,05\text{ 1/s}
$$



$$
f_0 = 2\text{ N/kg}
$$


Ezekből az adatokból az amplitúdómaximum helye:


$$
\omega_r = \sqrt{\omega_0^2 - 2\delta^2} = \sqrt{100 - 2\cdot0,05^2} = 9,99975\text{ rad/s}
$$


A kis csillapítás miatt ez csak egy igen kis mértékben kevesebb, mint $\omega_0$. Az amplitúdómaximum:


$$
A_{max} = \frac {f_0} {\sqrt{(\omega_0^2 - \omega_r^2)^2 + 4\delta^2\omega_r^2}} = \frac 2 {\sqrt{(100 - 9,99975^2)^2 + 4\cdot0,05^2\cdot9,99975^2}} = 2,0000\text{ m}
$$


## Feladatok

1. Egy $m = 0,5 \text{ kg}$ tömegű testet egy $D = 50 \text{ N/m}$ direkciós erejű rugóra függesztünk. A rendszert egy periodikus erő gerjeszti. A csillapítási tényező $\beta = 0,2 \text{ kg/s}$. Határozza meg a rendszer csillapítatlan saját körfrekvenciáját ($\omega_0$), valamint azt a gerjesztő körfrekvenciát ($\omega_r$), amelynél a kényszerrezgés amplitúdója maximális lesz!

2. Egy lengéscsillapítóval felszerelt jármű tömege $1200 \text{ kg}$, a rugózat eredő direkciós ereje $D = 3 \cdot 10^5 \text{ N/m}$. A jármű egy olyan úton halad, ahol a keresztirányú úthibák (bukkenők) egymástól egyenlő $L = 6 \text{ m}$ távolságra követik egymást. Milyen sebességgel ($v$) kell haladnia az autónak ahhoz, hogy fellépjen a rezonancia jelensége, ha a lengéscsillapítás mértékét elhanyagolhatónak tekintjük?

3. Az elméleti összefoglalóban levezetett $\tan \phi$ kifejezés alapján mutassa meg, hogy mekkora a gerjesztőerő és a kitérés közötti $\phi$ fáziskülönbség abban a speciális esetben, amikor a gerjesztő frekvencia pontosan megegyezik a sajátfrekvenciával ($\omega = \omega_0$)! Fogalmazza meg szavakkal is, mit jelent ez a fáziskülönbség a sebesség és a gerjesztőerő irányára nézve!