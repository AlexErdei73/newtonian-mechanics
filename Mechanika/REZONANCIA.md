# A rezonancia

## Kiserlet

[Kenyszerrezges, rezonancia demonstracio Sas Elemer altal](https://www.youtube.com/watch?v=NeCHP4AjgGg&t=121s)

## Szimulacio

Ebben a szimulacioban a kiserletben latottakat tudjuk megismetelni. A testre hat egy periodikus gerjesztoero, amit egy piros nyil szimbolizal a szimulacioban. Ez eppen ugy energiat ad a rendszernek, mint a kiserletben a rugo vegenek periodikus mozgatasa. Az utobbi a rendszer egyensulyi helyzetet mozgatja periodikusan, amely egy periodikus gerjesztoerot jelent, amely a testet eri. Amennyiben a sajat frekvencia, megegyezik a gerjesztoero frekvenciajaval, a rendszer energiaja noni kezd, mivel az ero megfelelo utemben hat es a munkaja sosem negativ, tehat noveli a rendszer mechanikai energiajat. Egesz addig tart ez, ameddig egy periodus alatt a csillapitas pontosan annyi energiat emeszt fel, amennyit a rendszer a gerjesztestol kap. Ilyenkor idoben allando amplitudoju rezges alakul ki es ez az amplitudo akkor lesz a legnagyobb, amikor a sajat frekvencia megegyezik a gerjesztoero frekvenciajaval. Ez egesz pontosan a rezges sebessegenek amplitudojara igaz, hisz az energia atadas a sebessegtol fugg. Egy csuszkan allithato a gerjeszto frekvencia, kozeppen a rendszer sajat frekvenciaja van. 

[Kenyszerrezges, rezonancia szimulacio](https://alexerdei73.github.io/physics-engine/project/#05652dfe-092a-4fe2-a4bc-f7a29109e103)

## Fogalmak

>**Szabad rezges:** A rezgo test nem kap energiat a kornyezetebol, de folyamatosan veszit a csillapitas altal. A szabad rezges a csillapitas miatt idovel elhal.

>**Sajat frekvencia:** A csillapitatlan szabad rezges frekvenciaja. Ha a csillapitasi tenyezo kicsiny a sajat frekvenciahoz kepest, akkor a csillapitott szabad rezges frekvenciaja is egyezik a sajat frekvenciaval.

>**Gerjeszto ero:** A rezgo testet vagy rendszert ero periodikus ero, amely energiat adhat at a testnek. 

>**Kenyszerrezges:** A rendszerre hato periodikus gerjesztoero hatasara kialakulo idoben allando mechanikai energiaju allapot. Ennek kialakulasa idot vesz igenybe, a szabad rezges elhal, a frekvencia megegyezik a gerjeszto ero frekvenciajaval. Az amplitudo idoben allando.

>**Rezonancia:** A kenyszerrezges amplitudoja igen naggya valhat, amikor a sajat frekvencia es a gerjeszto ero frekvenciaja megegyezik. Ez a rezonancia. Az energia felvetel a rezgo rendszer altal maximalis rezonancian. Az amplitudo maximum erteke kisse alacsonyabb frekvencian lesz maximalis, amikor a csillapitasi vesztessegek kisebbek.

## A mozgasegyenlet

Az erokhoz a rugalmas eron es a csillapitason kivul hozzajon a periodikus gerjesztoero, amennyiben a kenyszerrezgest akarjuk vizsgalni.

$$
F_{x,e} = -Dx - \beta v_x + F_0 \cos(\omega t)
$$

Az eredoerot Newton masodik torvenye alapjan egyenlove tehetjuk a tomeg es a gyorsulas szorzataval.

$$
F_{x,e} = ma_x
$$

Igy felirhatjuk a mozgasegyenletet, amit at is rendezunk.

$$
ma_x = -Dx -\beta v_x + F_0\cos(\omega t)
$$

$$
ma_x + \beta v_x + Dx = F_0\cos(\omega t)
$$

A tomeggel oszthatjuk az egyenletet es igy kapjuk a kovetkezo alakot.

$$
a_x + 2\delta v_x + \omega_0^2 x = f_0\cos(\omega t)
$$

Itt a kovetkezo jeloleseket vezettuk be.

$$
\delta = \frac \beta {2m}
$$

$$
\omega_0^2 = \frac D m
$$

$$
f_0 = \frac {F_0} m
$$

## A fazistolas

Most meg fogjuk keresni a gerjesztett rezges amplitudojanak es kezdofazisanak frekvencia fuggeset leiro kepleteket! Annyit tudunk, a gerjesztett rezges frekvenciaja megegyezik a gerjesztoero frekvenciajaval es az amplitudo idoben allando.

$$
x = A\cos(\omega t + \phi)
$$

Ismerjuk a sebesseget es a gyorsulast leiro formulakat is!

$$
v_x = -A\omega \sin(\omega t + \phi)
$$

$$
a_x = -A\omega^2 \cos(\omega t + \phi)
$$

Ezeket be fogjuk helyettesiteni a mozgasegyenletbe, majd felhasznalunk ket trigonometriabol ismert azonossagot.

### A trigonometria addicios tetelei

$$
\sin (\alpha + \beta) = \sin \alpha \cos \beta + \cos \alpha \sin \beta 
$$

$$
\cos (\alpha + \beta) = \cos \alpha \cos \beta - \sin \alpha \sin \beta
$$

Ezeket most felhasznaljuk a behelyettesiteshez, hogy a fenti kefejezeseket felirhassuk $\sin \omega t$-t es $\cos \omega t$-t tartalmazo tagok osszegekent.

$$
x = A(\cos (\omega t) \cos \phi - \sin (\omega t) \sin \phi) = A\cos \phi \cos(\omega t) - A \sin \phi \sin (\omega t)
$$

$$
v_x = -A\omega(\sin(\omega t) \cos \phi + \cos(\omega t) \sin \phi) = -A\omega \cos \phi \sin(\omega t) - A\omega \sin \phi \cos(\omega t)
$$

$$
a_x = -A\omega^2(\cos(\omega t) \cos \phi - \sin (\omega t) \sin \phi) = -A\omega^2\cos\phi \cos(\omega t) + A\omega^2\sin\phi \sin(\omega t) 
$$

Nezzuk meg eloszor a $\sin(\omega t)$ egyutthatoit, melyek 0-t kell adjanak, hisz az egyenlet jobb oldalan nem szerepel ilyen tag.

$$
A\omega^2\sin\phi + 2\delta(-A\omega\cos\phi) + \omega_0^2(-A\sin\phi) = 0
$$

$$
-2\delta\omega\cos\phi = (\omega_0^2 - \omega^2)\sin\phi
$$

$$
\tan \phi = - \frac {2\delta\omega} {\omega_0^2 - \omega^2}
$$

## Az amplitudo

Most azt fogjuk vizsgalni, hogy fugg az amplitudo a gerjeszto frekvenciatol. Ehhez a $\cos(\omega t)$-t tartalmazo tagokat gyujtjuk ossze a mozgasegyenlet bal oldalan es $f_0$-et kell kapnunk, hisz a jobb oldalon $f_0\cos(\omega t)$ szerepel.

$$
-A\omega^2\cos\phi + 2\delta(-A\omega\sin\phi) + \omega_0^2A\cos\phi = f_0
$$

$$
A(-2\delta\omega\sin\phi + (\omega_0^2 - \omega^2)\cos\phi) = f 
$$

A $\sin(\omega t)$ egyutthatoibol kepzett egyenlet felirhato a kovetkezo alakban is.

$$
A(2\delta\omega\cos\phi + (\omega_0^2 - \omega^2)\sin\phi) = 0
$$

A trukk az hogy mindket egyenletet negyzetre emeljuk es osszeadjuk, ezaltal kiesik a fazistolas.

$$
A^2(4\delta^2\omega^2\sin^2\phi - 4\delta\omega(\omega_0^2 - \omega^2)\cos\phi\sin\phi + (\omega_0^2 - \omega^2)^2\cos^2\phi) + A^2(4\delta^2\omega^2\cos^2\phi + 4\delta\omega(\omega_0^2 - \omega^2)\cos\phi\sin\phi + (\omega_0^2 - \omega^2)^2\sin^2\phi) = f_0^2
$$

Az osszevonasokat elvegezve felhasznalva a Pitagorasz-tetel trigonometrikus alakjat a kovetkezot egyenletet kapjuk.

$$
A^2((\omega_0^2 - \omega^2)^2 + 4\delta^2\omega^2) = f_0^2
$$

Innen A kifejezheto.

$$
A = \frac {f_0} {\sqrt {(\omega_0^2 - \omega^2)^2 + 4\delta^2\omega^2}}
$$

### Peldak
1. Eloszor vizsgaljuk a csillapitas nelkuli, idealis esetet. A kenyszerero amplitudojat valasszuk meg ugy, hogy $f_0 = 1$ teljesuljon.
Legyen $\omega_0 = 10$ rad/s, ahogy az a szimulacioban is van! Abrazoljuk a fuggvenyt!

$$
A = \frac 1 {\sqrt {(100 - \omega^2)^2}}
$$

A gorbe $\omega = \omega_0$ eseten a vegtelenbe nyulik, mivel az amplitudo novekedeset semmi nem korlatozza. Ez gyakorlatban *rezonancia-katasztrofahoz* vezet.

2. Vizsgaljuk a szimulacioban szerplo $\delta = 0,05$ csillapitas esetet!

$$
A = \frac 1 {\sqrt {(100 - \omega^2)^2 + 0,01\omega^2}}
$$

A kovetkezo GeoGebra projectbol szepen latszik, hogy a maximum az $A = 1$-nel van. Ez $f_0 = 1$ eseten lenne igy, a mi esetunkben azonban $f_0 = 2$, es valoban a rezonancian a kialakulo amplitudo kb. 2 m.

[Amplitudo-korfrekvencia grafikon](https://www.geogebra.org/calculator/hqz8kewk)