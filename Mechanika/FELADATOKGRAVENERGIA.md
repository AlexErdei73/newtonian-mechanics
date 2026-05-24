# Feladatok a gravitációs energiára

## Példák a gravitációs energiára

1. A Nemzetközi Űrállomás $420\text{ km}$ magasságban kering. Mekkora a gravitációs energiája, ha a tömege $435\ 000\text{ kg}$? Mennyi ez az energia a gravitációs energia képletével számolva? Mennyi ugyanez a szokásos módon számolva a helyzeti energiát? (A vonatkoztatási szint $6\ 370\text{ km}$.) Hány százalék hibát követünk el, ha a hagyományos módon számolunk? ($G = 6,674 \cdot 10^{-11}\text{ m}^3\text{/(kg} \cdot \text{s}^2\text{)}$ és $M = 5,972 \cdot 10^{24}\text{ kg}$)

$$
E_{\text{h}} = mg(h - h_0) = 435\ 000 \cdot 9,81 \cdot (420 - 6\ 370) \cdot 10^3 \approx -2,539 \cdot 10^{13}\text{ J}
$$

Most nézzük, mit kapunk a gravitációs energia pontos képletével számolva!

$$
E_{\text{g}} = -G \frac{Mm}{R + h} = -6,674 \cdot 10^{-11} \cdot \frac{5,972 \cdot 10^{24} \cdot 435\ 000}{(6\ 370 + 420) \cdot 10^3} \approx -2,553 \cdot 10^{13}\text{ J}
$$

Az elkövetett hiba:

$$
\Delta E = E_{\text{h}} - E_{\text{g}} = (-2,539 - (-2,553)) \cdot 10^{13}\text{ J} = 1,4 \cdot 10^{11}\text{ J}
$$

A relatív hiba:

$$
\frac{\Delta E}{|E_{\text{g}}|} = \frac{1,4 \cdot 10^{11}}{2,553 \cdot 10^{13}} \approx 0,00548
$$

Tehát az elkövetett relatív hiba körülbelül $0,55$ %.

2. Mekkora az űrállomás teljes energiája? A keringést tekintsük körpályának! Mekkora a mozgási energia? Mekkora a pályasebesség és a keringési idő? Teljesül-e Kepler harmadik törvénye az űrállomást összehasonlítva egy testtel, mely az első kozmikus sebességgel kering körpályán?

$$
E = -E_{\text{m}} = \frac{E_{\text{g}}}{2} \approx -1,277 \cdot 10^{13}\text{ J}
$$

$$
\frac{mv^2}{2} = E_{\text{m}}
$$

$$
v = \sqrt{\frac{2E_{\text{m}}}{m}} = \sqrt{\frac{2 \cdot 1,277 \cdot 10^{13}}{435\ 000}} \approx 7\ 662\text{ m/s}
$$

$$
T = \frac{2\pi(R + h)}{v} = \frac{2 \cdot 3,1416 \cdot (6\ 370 + 420) \cdot 10^3}{7\ 662} \approx 5\ 568\text{ s} \approx 92\text{ min } 48\text{ s}
$$

Nézzük meg Kepler harmadik törvényét!

$$
\frac{T^2}{a^3} = \frac{5\ 568^2}{(6\ 370 + 420)^3} \approx 9,904 \cdot 10^{-5}\text{ s}^2\text{/km}^3
$$

A keringési idő $R$ távolságban:

$$
T_R = \frac{2\pi R}{\sqrt{GM/R}} \approx 5\ 060\text{ s}
$$

$$
\frac{T_{\text{R}}^2}{R^3} = \frac{5\ 060^2}{6\ 370^3} \approx 9,906 \cdot 10^{-5}\text{ s}^2\text{/km}^3
$$

A két érték számítási pontosságunkon belül egyezik, tehát a Kepler-törvény érvényes a mozgásra.

3. Említettük, hogy a teljes energia nem függ a pálya alakjától sem, csak az $a$ átlagos vonzócentrumtól mért távolság függvénye. Vezessük ezt le ellipszispálya esetére!

Négy egyenletből indulhatunk ki:

$$
E = \frac{mv_{\text{min}}^2}{2} - G\frac{mM}{r_{\text{max}}}
$$

$$
E = \frac{mv_{\text{max}}^2}{2} - G\frac{mM}{r_{\text{min}}}
$$

$$
v_{\text{min}} r_{\text{max}} = v_{\text{max}} r_{\text{min}}
$$

$$
2a = r_{\text{min}} + r_{\text{max}}
$$

Ebben a 4 egyenletben 6 mennyiség szerepel, mi csak $E$-t és $a$-t akarjuk megtartani. Az első és második egyenletből kifejezzük a sebességek négyzeteit, majd a harmadik egyenlet négyzetébe behelyettesítjük ezeket!

$$
v_{\text{min}}^2 = \frac{2E}{m} + \frac{2GM}{r_{\text{max}}}
$$

$$
v_{\text{max}}^2 = \frac{2E}{m} + \frac{2GM}{r_{\text{min}}}
$$

$$
v_{\text{min}}^2 r_{\text{max}}^2 = v_{\text{max}}^2 r_{\text{min}}^2
$$

$$
\left(\frac{2E}{m} + \frac{2GM}{r_{\text{max}}}\right) r_{\text{max}}^2 = \left(\frac{2E}{m} + \frac{2GM}{r_{\text{min}}}\right) r_{\text{min}}^2
$$

$$
\frac{2E}{m} r_{\text{max}}^2 + 2GMr_{\text{max}} = \frac{2E}{m} r_{\text{min}}^2 + 2GMr_{\text{min}}
$$

Ezt kicsit átrendezve megkapjuk, amit keresünk:

$$
\frac{2E}{m} (r_{\text{max}}^2 - r_{\text{min}}^2) = - 2GM(r_{\text{max}} - r_{\text{min}})
$$

$$
\frac{2E}{m} (r_{\text{max}} + r_{\text{min}})(r_{\text{max}} - r_{\text{min}}) = - 2GM(r_{\text{max}} - r_{\text{min}})
$$

Ha nem körpályáról van szó, amire már levezettük az összefüggést, akkor mindkét oldalt eloszthatjuk $(r_{\text{max}} - r_{\text{min}})$-nel.

$$
\frac{2E}{m} 2a = - 2GM
$$

$$
\frac{2E}{m} = - \frac{GM}{a}
$$

Ez pontosan az az egyenlet, amelyet a körpálya speciális esetére más módon már levezettünk és fel is használtunk. Most elvégeztük a levezetést az ellipszispálya általános esetére is.

4. Vezessük le Kepler harmadik törvényét általánosan az ellipszispálya esetére! Használjuk fel az ellipszis területképletét, a területi sebesség kiszámítását a perihéliumpontban, illetve a sebesség általános kiszámítási képletét! Szükségünk lesz még az ellipszis általános geometriai összefüggéseire is!

$$
T = \frac{\pi ab}{\frac{v_{\text{max}} r_{\text{min}}}{2}} = \frac{2\pi ab}{v_{\text{max}} r_{\text{min}}}
$$

$$
T^2 = \frac{4\pi^2 a^2 b^2}{v_{\text{max}}^2 r_{\text{min}}^2}
$$

A sebességet kifejezzük a sebesség kiszámítására szolgáló egyenletből!

$$
v_{\text{max}}^2 = GM\left(\frac{2}{r_{\text{min}}} - \frac{1}{a}\right) = GM \frac{2a - r_{\text{min}}}{a r_{\text{min}}}
$$

Ezt beírjuk az előző összefüggésbe:

$$
T^2 = \frac{4\pi^2 a^2 b^2}{GM \frac{2a - r_{\text{min}}}{a r_{\text{min}}} r_{\text{min}}^2} = \frac{4\pi^2 a^3 b^2}{GM(2a - r_{\text{min}})r_{\text{min}}}
$$

Most kimutatjuk, hogy $b^2$ kiesik!

$$
(2a - r_{\text{min}})r_{\text{min}} = (2a - (a - c))(a - c) = (a + c)(a - c) = a^2 - c^2 = b^2
$$

Így megkapjuk a harmadik Kepler-törvényt!

$$
T^2 = \frac{4\pi^2 a^3 b^2}{GM b^2} = \frac{4\pi^2 a^3}{GM}
$$

$$
\frac{T^2}{a^3} = \frac{4\pi^2}{GM}
$$

5. A 2024-es év nagy üstököse a C/2023 A3 (Tsuchinshan–ATLAS) üstökös. Ez jelenleg távolodik már a Naptól. Az üstökös távolsága a Naptól $6,758\text{ CSE}$, sebessége $18,44\text{ km/s}$. Az üstökös becsült tömege $4,4 \cdot 10^{14}\text{ kg}$. Mekkora az üstökös energiája a pályáján? Visszatér-e valaha ez az üstökös a Nap közelébe?

[Videó a C/2023 A3 üstökösről a Nemzetközi Űrállomásról](https://www.youtube.com/watch?v=FPMMFIB9sjY)

$$
r = 6,758\text{ CSE} = 6,758 \cdot 149,6 \cdot 10^6 \approx 1,011 \cdot 10^9\text{ km}
$$

$$
E = \frac{mv^2}{2} - \frac{GmM}{r} = \frac{4,4 \cdot 10^{14} \cdot 18\ 440^2}{2} - \frac{6,674 \cdot 10^{-11} \cdot 4,4 \cdot 10^{14} \cdot 1,9891 \cdot 10^{30}}{1,011 \cdot 10^{12}} \approx 1,703 \cdot 10^{22}\text{ J}
$$

A pályaenergia pozitív ($E > 0$), tehát az üstökös hiperbolapályán mozog, és soha nem tér vissza.

---

## Feladatok

1. A Mars tömege körülbelül $6,417 \cdot 10^{23}\text{ kg}$, sugara pedig $3\ 396\text{ km}$. Mekkora az a minimális sebesség (második kozmikus sebesség), amellyel egy űrszondát indítani kell a Mars felszínéről ahhoz, hogy végleg elhagyja a bolygó gravitációs mezejét? A légellenállástól tekintsünk el.

2. Egy $m = 1\ 200\text{ kg}$ tömegű műhold $R_1 = 7\ 000\text{ km}$ sugarú körpályán kering a Föld körül. A földi irányítás úgy dönt, hogy a műholdat egy magasabb, $R_2 = 8\ 500\text{ km}$ sugarú körpályára állítja át. Mennyi munkát kell végeznie a hajtóműveknek a pályamódosítás során?

3. Egy meteorit a Föld középpontjától nagy távolságból (a végtelenből), $v_0 \approx 0$ kezdősebességgel zuhan a Föld felé. Mekkora sebességgel csapódik be a Föld felszínébe, ha a légkör fékező hatásától eltekintünk? Használjuk az energiamegmaradás törvényét! ($M_{\text{Föld}} = 5,972 \cdot 10^{24}\text{ kg}$, $R_{\text{Föld}} = 6\ 370\text{ km}$, $G = 6,674 \cdot 10^{-11}\text{ m}^3\text{/(kg} \cdot \text{s}^2\text{)}$)
