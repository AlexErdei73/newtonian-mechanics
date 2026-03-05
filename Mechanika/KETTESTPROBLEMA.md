# A kéttest-probléma

## A probléma felvetése
Newton számára a gravitációs erő elméletének publikációja problémás volt, mivel az adatai pontatlanok voltak. Leginkább a Föld sugarának ismert adata volt pontatlan, ezért várt is a publikációval, mígnem pontosabb mérési adatok kerültek napvilágra.

A Hold–Föld-távolság kb. 60 földsugár. Ez két tizedesjegy pontossággal igaz csak. Mi a helyzet, ha mai adatokat használunk, és mondjuk 4 értékes jegy pontossággal számolunk? Mai adataink szerint a Föld sugara $6371\,km$, a Hold–Föld-távolság pedig $384\,400\,km$. Ezek aránya tehát:


$$
\frac {r} {R} = \frac {384\,400\,km} {6371\,km} = 60,34
$$


Tehát az arány 60-tól kissé nagyobb, ami eltérést fog okozni Newton jóslatához képest a harmadik tizedesjegyben. Valóban:


$$
60,34^2 = 3640
$$


Hogy lehet, hogy Newton gravitációs elmélete mégis helyes, és mai adatokkal is tökéletesen megállja a helyét? Hogy lehet, hogy az arány négyzete a dinamika alapján ma is szinte pontosan 3600? Ezzel a problémával foglalkozunk röviden.

## A kéttest-probléma

Hogyan mozog egy két testből álló rendszer, ha közöttük fellép egy erő, de más hatások nincsenek? Ez a probléma az úgynevezett kéttest-probléma.
Jelöljük $m$-mel a kisebb tömegű testet, $M$-mel pedig a nagyobb tömegű testet! A Hold tömege ugyan lényegesen kisebb a Föld tömegénél, de nem teljesen elhanyagolható a Földhöz képest.


$$
m \vec {a_m} = \vec {F_{m,M}}
$$



$$
M \vec {a_M} = \vec {F_{M,m}}
$$


Vezessük most be a két test tömegközéppontját mint a koordinátarendszer origóját! A testek helyét ehhez a ponthoz képest fogjuk mérni tehát. Ez, mint kimutattuk, nem gyorsul, tehát a hozzá rögzített rendszer inerciarendszer, feltéve, hogy a térben nem is forog.


$$
\vec {r} = \vec {r_m} - \vec {r_M}
$$


Itt az $\vec {r}$ a kisebbik test helye a nagyobb tömegühöz kepest. Ha a testek mozgását igen rövid $t$ ideig vizsgáljuk csak, tehát $t \ll T$, akkor fennállnak a következő összefüggések:


$$
\frac {\vec {r} - \vec {r_0}} {t} = \frac {(\vec {r_m} - \vec {r_M}) - (\vec{r_{m,0}} - \vec {r_{M,0}})} {t} = \frac {\vec {r_m} - \vec {r_{m,0}}} {t} - \frac {\vec {r_M} - \vec {r_{M,0}}} {t}
$$


Ezek szerint:


$$
\vec {v} = \vec {v_m} - \vec {v_M}
$$


Tehát a kisebbik test sebessége a nagyobbikhoz képest a megfelelő tömegközépponti rendszerben mért sebességek különbsége. Teljesen hasonlóan mutathatjuk meg, hogy


$$
\vec {a} = \vec {a_m} - \vec {a_M}
$$


Tehát a gyorsulásokra is igaz, amit a sebességekre mondtunk. Ezek szerint:


$$
\vec {a} = \frac {\vec {F_{m,M}}} {m} - \frac {\vec{F_{M,m}}} {M} = \frac {\vec {F_{m,M}}} {m} + \frac {\vec{F_{m,M}}} {M} = \left(\frac {1} {m} + \frac {1} {M}\right)\vec {F_{m,M}}
$$


Tehát:


$$
\mu \vec {a} = \vec {F_{m,M}}
$$


Itt:


$$
\mu = \frac {1} {\frac {1} {m} + \frac {1} {M}} = \frac {mM} {M + m}
$$


$\mu$ tömegdimenziójú mennyiség, általában kissé kisebb, mint a kisebbik tömeg ($m$). Ezért nevezik *redukált tömegnek*. A kis test mozgása tehát annyiban módosul, ha a nagyobbik testhez képest nézzük, hogy olyan, mintha a tömege kisebb lenne. A kis test mozgása ettől eltekintve ugyanúgy tárgyalható, mintha a nagyobbik test egyáltalán nem mozogna.


Ha megnézzük a gravitáció törvényét:


$$
F_g = G \frac {mM} {r^2} = G \frac {\frac {mM} {M + m} (M + m)} {r^2} = G \frac {\mu (M + m)} {r^2}
$$


A test pontosan úgy mozog, mintha tömege $\mu$ lenne, és a vonzócentrum tömege pedig a rendszer össztömege volna. Így érvényesek lesznek Kepler törvényei is, de a harmadik törvényben, mely tartalmazza a vonzócentrum tömegét is, $M$ helyett az össztömeg ($M + m$) fog fellépni.


$$
\frac {T^2} {a^3} = \frac {4 \pi^2} {G(M + m)}
$$


Ez azt jelenti, hogy a keringési idő kismértékben csökken az elhanyagolható tömeg esetéhez képest, a sebesség pedig nő. Ez megmagyarázza az eltérés nagyrészét.

## Példa
Vizsgáljuk meg, mekkora eltérést okoz a Hold tömege a Hold gyorsulásának és a Föld felszínén mérhető nehézségi gyorsulásnak az arányában! A Föld tömege kb. 81-szerese a Hold tömegének!


$$
\frac {g} {a_{cp}} = \frac {gr} {v^2} = \frac {grT^2} {4 \pi^2 r^2}
$$



$$
\frac {g} {a_{cp}} = \frac {gr^2} {4 \pi^2} \times \frac {T^2} {r^3} = \frac {gr^2 4 \pi^2} {4 \pi^2 GM(1 + m/M)} = \frac {gr^2} {gR^2(1 + m/M)}
$$



$$
\frac {g} {a_{cp}} = \frac {r^2} {R^2(1 + m/M)}
$$


Eredményünk azt jelzi, hogy a távolságok négyzeteinek arányát osztanunk kell még $(1 + m/M)$-mel is, hogy helyes értéket kapjunk. Számításaink még mindig körpályával dolgoznak.


$$
\frac {r^2} {R^2(1 + m/M)} = \frac {3640} {1 + 1/81,0} = 3596
$$


A gyorsulásokból kapott mai érték az egy kicsit több, egész pontosan 3602 (négy értékes jegy pontossággal). A két érték legalább három értékes jegyre kerekítve megegyezik most már, tehát a legnagyobb korrekciót valóban a Hold tömegének figyelembevétele jelenti.

## Egyéb, finomabb korrekciók
Létezik még 3 másik, jóval kisebb korrekció is, melyek szükségesek, hogy pontos értéket kapjunk. Ezek a következők fontossági sorrendben:
1. A Nap hatása – A Nap–Föld rendszer nem a Naptól függetlenül létezik, hanem a Nap gravitációs hatását is figyelembe kellene venni. Ez lehetséges, de Newtonnak is „fejfájást” okozott saját bevallása szerint. Ezt jóval később oldották csak meg közelítő módszerekkel (perturbációszámítás). Pontosan ez a probléma (az úgynevezett háromtest-probléma) nem oldható meg.
2. A Hold pályája nem kör, hanem a körtől kissé eltérő ellipszis. Ez is okoz némi korrekciót.
3. A Föld lapultsága (gömbtől kissé eltérő alakja) szintén befolyásolja a rendszert.

Ezen korrekciók hatása csak a 4. és 5. jegyben mutatkozik meg, különösen azért, mert nem ugyanolyan értelműek. Ilyen pontosságnál az is lényeges, milyen földrajzi helyen vett $g$-vel számolunk. Newtonnak ez is komoly fejtörést okozott. Ma az $R$ (Föld sugara) elég pontosan ismert, és a $GM$-szorzat is ismert 9 értékes jegy pontossággal! Így $g$ nagy pontossággal számított értékét kell használni, mely a Föld forgásából származó hatásokat nem, csak a gravitáció miatti nehézségi gyorsulást veszi figyelembe.

## Feladatok

4. **Plútó és Charon rendszere:** A Plútó tömege $1,3 \times 10^{22}kg$, legnagyobb holdjáé, a Charoné pedig $1,6 \times 10^{21}kg$. A két égitest távolsága $19\,600\,km$. Milyen távol van a rendszer közös tömegközéppontja a Plútó középpontjától? A Plútó sugara kb. $1190\,km$. A tömegközéppont a Plútó felszínén belülre vagy kívülre esik? (Ez magyarázza, miért szokás a rendszert inkább ikerbolygónak nevezni.)

5. **Kettőscsillag keringési ideje:** Két azonos, egyenként a Nap tömegével megegyező ($M = 2 \times 10^{30}kg$) csillag kering egymás körül a közös tömegközéppontjuk körül, körpályán. A csillagok közötti távolság megegyezik a Föld–Nap-távolsággal ($1,5 \times 10^{11}m$). Mennyi a rendszer keringési ideje? Hasonlítsuk ezt össze a Föld keringési idejével (1 év)!

6. **Redukált tömeg hidrogénatomban:** A hidrogénatom egy protonból és egy elektronból áll. A proton tömege $m_p = 1,67 \times 10^{-27}kg$, az elektron tömege $m_e = 9,11 \times 10^{-31}kg$. Számítsuk ki a rendszer redukált tömegét ($\mu$)! Hány százalékkal tér el ez az érték az elektron tömegétől? (Ez a kis eltérés a kvantummechanikai számításokban is megjelenik az energiaszintek korrekciójaként.)