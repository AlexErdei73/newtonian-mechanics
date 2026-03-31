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