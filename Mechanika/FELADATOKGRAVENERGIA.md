# Feladatok a gravitacios energiarol

## Peldak a gravitacios energiara
1. A nemzetkozi urallomas $420km$ magassagban kering. Mekkora a gravitacios energiaja, ha a tomege $435000kg$? Mennyi ez az energia a gravitacios energia kepletevel szamolva? Mennyi ugyanez a szokasos modon szamolva a helyzeti energiat? (A vonatkoztatasi szint 6370km.) Hany szazalek hibat kovetunk el, ha a hagyomanyos modon szamolunk? ($G = 6,674 \times 10^{-11} \frac {m^3} {kgs^2}$ es $M = 5,972 \times 10^{24}kg$)

$$
E_h = mg(h - h_0) = 435000 \times 9,81 \times (420 - 6370) \times 10^3m = -2,539 \times 10^{13}J
$$

Most nezzuk mit kapunk a gravitacios energia pontos kepletevel szamolva!

$$
E_g = -G \frac {Mm} {R + h} = -6.674 \times 10^{-11} \frac {5,972 \times 10^{24} \times 435000} {(6370 + 420) \times 10^3} = -2,553 \times 10^{13}J
$$

Az elkovetett hiba:

$$
\Delta E = E_h - E_g = (-2,539 - (-2,553)) \times 10^{13}J = 1,4 \times 10^{11}J
$$

A relative hiba:

$$
\frac {\Delta E} {|E_g|} = \frac {1,4 \times 10^{11}} {2,553 \times 10^{13}} = 0,00548
$$

Tehat az elkovetett relativ hiba az kb. 0,55%.

2. Mekkora az urallomas teljes energiaja? A keringest tekintsuk korpalyanak! Mekkora a mozgasi energia? Mekkora a palya sebesseg es a keringesi ido? Teljesul-e Kepler harmadik torvenye az urallomast osszehasonlitva egy testtel, mely az elso kozmikus sebesseggel kering korpalyan?

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
T = \frac {2 \pi (R + h)} {v} = \frac {2 \times 3,1415 \times (6370 + 420) \times 10^3} {7662} = 5568s = 92min48s
$$

Nezzuk meg Kepler harmadik torvenyet!

$$
\frac {T^2} {a^3} = \frac {5568^2} {(6370 + 420)^3} = 9,904 \times 10^{-5} \frac {s^2} {km^3}
$$

A keringesi ido $R$ tavolsagban:

$$
T_R = \frac {2 \pi R} {\sqrt {GM/R}} = 5060s
$$

$$
\frac {T_R^2} {R^3} = \frac {5060^2} {6370^3} = 9,906 \times 10^{-5} \frac {s^2} {km^3}
$$

A ket ertek szamitasi pontossagunkon belul egyezik, tehat a Kepler torveny ervenyes a mozgasra.

3. Emlitettuk, hogy a teljes energia nem fugg a palya alakjatol sem, csak az $a$ atlagos vonzocentrumtol mert tavolsag fuggvenye. Vezessuk ezt le ellipszis palya esetere!

Negy egyenletbol indulhatunk ki:

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

Ebben a 4 egyenletben 6 mennyiseg szerepel, mi csak $E$-t es $a$-t akarjuk megtartani. Az elso es masodik egyenletbol kifejezzuk a sebessegek negyzeteit, majd a harmadik egyenlet negyzetebe behelyettestijuk ezeket!

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
\frac {2E} {m} r_{max}^2 + 2GMr_{max} = \frac {2E} {m} r_{min}^2 + 2GMr_{min}
$$

Ezt kicsit atrendezve megkapjuk, amit keresunk.

$$
\frac {2E} {m} (r_{max}^2 - r_{min}^2) = - 2GM(r_{max} - r_{min})
$$

$$
\frac {2E} {m} (r_{max} + r_{min})(r_{max} - r_{min}) = - 2GM(r_{max} - r_{min})
$$

Ha nem korpalyarol van szo, amire mar levezettuk az osszefuggest, akkor mindket oldalt eloszthatjuk $(r_{max} - r_{min})$-nel.

$$
\frac {2E} {m} 2a = - 2GM
$$

$$
\frac {2E} {m} = - \frac {GM} {a}
$$

Ez pontosan az az egyenlet, melyet a korpalya specialis esetere mas modon mar levezettunk es fel is hasznaltunk. Most elvegeztuk a levezetest az ellipszis palya altalanos esetere is.

4. Vezessuk le Kepler harmadik torvenyet altalanosan az ellipszis palya esetere! Hasznaljuk fel az ellipszis teruletkepletet, a teruleti sebeseg kiszamitasat a perihelium pontban, illetve a sebesseg altalanos kiszamitasi kepletet! Szuksegunk lesz meg az ellipszis altalanos geometriai osszefuggeseire is!

$$
T = \frac {\pi ab} {\frac {v_{max}r_{min}} {2}} = \frac {2\pi ab} {v_{max}r_{min}}
$$

$$
T^2 = \frac {4 \pi^2 a^2b^2} {v_{max}^2r_{min}^2}
$$

A sebesseget kifejezzuk a sebesseg kiszamitasara szolgalo egyenletbol!

$$
v_{max}^2 = GM(\frac {2} {r_{min}} - \frac {1} {a}) = GM \frac {2a - r_{min}} {ar_{min}}
$$

Ezt beirjuk az elozo osszefuggesbe.

$$
T^2 = \frac {4 \pi^2 a^2 b^2} {GM \frac {2a - r_{min}} {ar_{min}} r_{min}^2} = \frac {4 \pi^2 a^3 b^2} {GM(2a - r_{min})r_{min}}
$$

Most kimutatjuk, hogy $b^2$ kiesik!

$$
(2a - r_{min})r_{min} = (2a - (a - c))(a - c) = (a + c)(a - c) = a^2 - c^2 = b^2
$$

Igy megkapjuk a harmadik Kepler torvenyt!

$$
T^2 = \frac {4\pi^2 a^3 b^2} {GM b^2} = \frac {4\pi^2 a^3} {GM}
$$

$$
\frac {T^2} {a^3} = \frac {4\pi^2} {GM}
$$

5. A 2024-es ev nagy ustokose a C/2023 A3 ustokos. Ez jelenleg tavolodik mar a Naptol. A mai napon (2026, Marcius 4.) az ustokos tavolsaga
a Naptol $6,758CSE$, sebessege $18,44 \frac {km} {s}$. Az ustokos becsult tomege $4,4 \times 10^14kg$. Mekkora az ustokos energiaja a palyajan? Visszater-e valaha ez az ustokos a Nap kozelebe?

[Video a C/2023 A3 ustokosrol a nemzetkozi uralomasrol](https://www.youtube.com/watch?v=FPMMFIB9sjY)

$$
r = 6,758CSE = 6,758 \times 149,6 \times 10^6km = 1,011 \times 10^9km 
$$

$$
E = \frac {mv^2} {2} - \frac {GmM} {r} = \frac {4,4 \times 10^{14} \times 18440^2} {2} - \frac {6,674 \times 10^{-11} \times 4,4 \times 10^{14} \times 1,9891 \times 10^30} {1,011 \times 10^12} = 1,703 \times 10^{22}J
$$

A palya energia pozitiv, tehat az ustokos hiperbola palyan mozog es soha nem ter vissza.

## Feladatok
