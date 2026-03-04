# Feladatok a gravitációs energiára

## Példák a gravitációs energiára
1. A Nemzetközi Űrállomás $420km$ magasságban kering. Mekkora a gravitációs energiája, ha a tömege $435000kg$? Mennyi ez az energia a gravitációs energia képletével számolva? Mennyi ugyanez a szokásos módon számolva a helyzeti energiát? (A vonatkoztatási szint $6370km$.) Hány százalék hibát követünk el, ha a hagyományos módon számolunk? ($G = 6,674 \times 10^{-11} \frac {m^3} {kg\cdot s^2}$ és $M = 5,972 \times 10^{24}kg$)


$$
E_h = mg(h - h_0) = 435000 \times 9,81 \times (420 - 6370) \times 10^3m = -2,539 \times 10^{13}J
$$


Most nézzük, mit kapunk a gravitációs energia pontos képletével számolva!


$$
E_g = -G \frac {Mm} {R + h} = -6,674 \times 10^{-11} \frac {5,972 \times 10^{24} \times 435000} {(6370 + 420) \times 10^3} = -2,553 \times 10^{13}J
$$


Az elkövetett hiba:


$$
\Delta E = E_h - E_g = (-2,539 - (-2,553)) \times 10^{13}J = 1,4 \times 10^{11}J
$$


A relatív hiba:


$$
\frac {\Delta E} {|E_g|} = \frac {1,4 \times 10^{11}} {2,553 \times 10^{13}} = 0,00548
$$


Tehát az elkövetett relatív hiba az kb. 0,55%.

2. Mekkora az űrállomás teljes energiája? A keringést tekintsük körpályának! Mekkora a mozgási energia? Mekkora a pályasebesség és a keringési idő? Teljesül-e Kepler harmadik törvénye az űrállomást összehasonlítva egy testtel, mely az első kozmikus sebességgel kering körpályán?


$$
E = -E_m = \frac {E_g} {2} = -1,277 \times 10^{13}J
$$



$$
\frac {mv^2} {2} = E_m
$$



$$
v = \sqrt {\frac {2E_m} {m}} = \sqrt {2 \times 1,277 \times 10^{13} / 435000} = 7662 \frac {m} {s}
$$



$$
T = \frac {2 \pi (R + h)} {v} = \frac {2 \times 3,1415 \times (6370 + 420) \times 10^3} {7662} = 5568s = 92min 48s
$$


Nézzük meg Kepler harmadik törvényét!


$$
\frac {T^2} {a^3} = \frac {5568^2} {(6370 + 420)^3} = 9,904 \times 10^{-5} \frac {s^2} {km^3}
$$


A keringési idő $R$ távolságban:


$$
T_R = \frac {2 \pi R} {\sqrt {GM/R}} = 5060s
$$



$$
\frac {T_R^2} {R^3} = \frac {5060^2} {6370^3} = 9,906 \times 10^{-5} \frac {s^2} {km^3}
$$


A két érték számítási pontosságunkon belül egyezik, tehát a Kepler-törvény érvényes a mozgásra.

3. Említettük, hogy a teljes energia nem függ a pálya alakjától sem, csak az $a$ átlagos vonzócentrumtól mért távolság függvénye. Vezessük ezt le ellipszispálya esetére!

Négy egyenletből indulhatunk ki:


$$
E = \frac {mv_{min}^2} {2} - G\frac {mM} {r_{max}}
$$



$$
E = \frac {mv_{max}^2} {2} - G\frac {mM} {r_{min}}
$$



$$
v_{min}r_{max} = v_{max}r_{min}
$$



$$
2a = r_{min} + r_{max}
$$


Ebben a 4 egyenletben 6 mennyiség szerepel, mi csak $E$-t és $a$-t akarjuk megtartani. Az első és második egyenletből kifejezzük a sebességek négyzeteit, majd a harmadik egyenlet négyzetébe behelyettesítjük ezeket!


$$
v_{min}^2 = \frac {2E} {m} + \frac {2GM} {r_{max}}
$$



$$
v_{max}^2 = \frac {2E} {m} + \frac {2GM} {r_{min}}
$$



$$
v_{min}^2r_{max}^2 = v_{max}^2r_{min}^2
$$



$$
\left(\frac {2E} {m} + \frac {2GM} {r_{max}}\right) r_{max}^2 = \left(\frac {2E} {m} + \frac {2GM} {r_{min}}\right) r_{min}^2
$$



$$
\frac {2E} {m} r_{max}^2 + 2GMr_{max} = \frac {2E} {m} r_{min}^2 + 2GMr_{min}
$$


Ezt kicsit átrendezve megkapjuk, amit keresünk.


$$
\frac {2E} {m} (r_{max}^2 - r_{min}^2) = - 2GM(r_{max} - r_{min})
$$



$$
\frac {2E} {m} (r_{max} + r_{min})(r_{max} - r_{min}) = - 2GM(r_{max} - r_{min})
$$


Ha nem körpályáról van szó, amire már levezettük az összefüggést, akkor mindkét oldalt eloszthatjuk $(r_{max} - r_{min})$-nel.


$$
\frac {2E} {m} 2a = - 2GM
$$



$$
\frac {2E} {m} = - \frac {GM} {a}
$$


Ez pontosan az az egyenlet, melyet a körpálya speciális esetére más módon már levezettünk és fel is használtunk. Most elvégeztük a levezetést az ellipszispálya általános esetére is.

4. Vezessük le Kepler harmadik törvényét általánosan az ellipszispálya esetére! Használjuk fel az ellipszis területképletét, a területi sebesség kiszámítását a perihélium pontban, illetve a sebesség általános kiszámítási képletét! Szükségünk lesz még az ellipszis általános geometriai összefüggéseire is!


$$
T = \frac {\pi ab} {\frac {v_{max}r_{min}} {2}} = \frac {2\pi ab} {v_{max}r_{min}}
$$



$$
T^2 = \frac {4 \pi^2 a^2b^2} {v_{max}^2r_{min}^2}
$$


A sebességet kifejezzük a sebesség kiszámítására szolgáló egyenletből!


$$
v_{max}^2 = GM\left(\frac {2} {r_{min}} - \frac {1} {a}\right) = GM \frac {2a - r_{min}} {ar_{min}}
$$


Ezt beírjuk az előző összefüggésbe.


$$
T^2 = \frac {4 \pi^2 a^2 b^2} {GM \frac {2a - r_{min}} {ar_{min}} r_{min}^2} = \frac {4 \pi^2 a^3 b^2} {GM(2a - r_{min})r_{min}}
$$


Most kimutatjuk, hogy $b^2$ kiesik!


$$
(2a - r_{min})r_{min} = (2a - (a - c))(a - c) = (a + c)(a - c) = a^2 - c^2 = b^2
$$


Így megkapjuk a harmadik Kepler-törvényt!


$$
T^2 = \frac {4\pi^2 a^3 b^2} {GM b^2} = \frac {4\pi^2 a^3} {GM}
$$



$$
\frac {T^2} {a^3} = \frac {4\pi^2} {GM}
$$


5. A 2024-es év nagy üstököse a C/2023 A3 üstökös. Ez jelenleg távolodik már a Naptól. A mai napon (2026. március 4.) az üstökös távolsága a Naptól $6,758\,CSE$, sebessége $18,44 \frac {km} {s}$. Az üstökös becsült tömege $4,4 \times 10^{14}\,kg$. Mekkora az üstökös energiája a pályáján? Visszatér-e valaha ez az üstökös a Nap közelébe?

[Videó a C/2023 A3 üstökösről a Nemzetközi Űrállomásról](https://www.youtube.com/watch?v=FPMMFIB9sjY)


$$
r = 6,758\,CSE = 6,758 \times 149,6 \times 10^6km = 1,011 \times 10^9km
$$



$$
E = \frac {mv^2} {2} - \frac {GmM} {r} = \frac {4,4 \times 10^{14} \times 18440^2} {2} - \frac {6,674 \times 10^{-11} \times 4,4 \times 10^{14} \times 1,9891 \times 10^{30}} {1,011 \times 10^{12}} = 1,703 \times 10^{22}J
$$


A pályaenergia pozitív, tehát az üstökös hiperbolapályán mozog és soha nem tér vissza.

## Feladatok

1. A Mars tömege körülbelül $6,417 \times 10^{23}kg$, sugara pedig $3396km$. Mekkora az a minimális sebesség (második kozmikus sebesség), amellyel egy űrszondát indítani kell a Mars felszínéről ahhoz, hogy végleg elhagyja a bolygó gravitációs mezejét? A légellenállástól tekintsünk el.

2. Egy $m=1200kg$ tömegű műhold $R_1 = 7000km$ sugarú körpályán kering a Föld körül. A földi irányítás úgy dönt, hogy a műholdat egy magasabb, $R_2 = 8500km$ sugarú körpályára állítja át. Mennyi munkát kell végeznie a hajtóműveknek a pályamódosítás során?

3. Egy meteorit a Föld középpontjától nagy távolságból (a végtelenből), $v_0 \approx 0$ kezdősebességgel zuhan a Föld felé. Mekkora sebességgel csapódik be a Föld felszínébe, ha a légkör fékező hatásától eltekintünk? Használjuk az energiamegmaradás törvényét! ($M_{Föld} = 5,972 \times 10^{24}kg$, $R_{Föld} = 6370km$, $G = 6,674 \times 10^{-11} \frac {m^3} {kg\cdot s^2}$)