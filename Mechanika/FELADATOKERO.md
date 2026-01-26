# Feladatok az erő témakörében

## Példák a második törvényre
1. Egy $1300kg$ tömegű autó $8.00s$ alatt gyorsul fel $100.0 \frac {km} {h}$ sebességre. Mekkora az elért sebesség $\frac {m} {s}$-ban? Mekkora a gyorsulás? Milyen hosszú úton gyorsít fel a kocsi? Mekkora a gyorsítóerő $N$-ban?

$$
v = \frac {s} {t} = \frac {100km} {1h} = \frac {100 000m} {3600s} = 27.7 \frac {m} {s}
$$

$$
a = \frac {\Delta v} {t} = \frac {v - v_0} {t} = \frac {27.7 - 0} {8.00} = 3.463 \frac {m} {s^2}
$$

$$
s = \frac {a} {2} \times t^2 = \frac {3.463} {2} \times 8.00^2 = 110.8m
$$

$$
F_e = ma = 1300 \times 3.463 = 4502N = 4.50kN
$$

2. Egy $1500kg$ tömegű gépkocsi egyenletesen halad $50 \frac {km} {h}$ sebességgel. A vezető elé hirtelen kilép egy gyalogos, aki hirtelen fékez. A vezető reakcióideje $0.300s$. A gépkocsit lassító erő $8.83kN$. Számítsd ki a lassulást $\frac {m} {s^2}$-ban! Mennyi a fékezési idő és mennyi idő telik el a gyalogos megpillantásától a teljes megállásig? Mennyi utat tesz meg az autó a reakcióidő alatt és a fékezés alatt? Mennyi a teljes út a megállásig? 

$$
v_0 = \frac {s} {t} = \frac {50km} {1h} = \frac {50 000m} {3600s} = 13.89 \frac {m} {s}
$$

Az elején az autó lassítás nélkül halad.

$$
v_0 = \frac {s_1} {t_1} 
$$

$$
13.89 = \frac {s_1} {0.3} 
$$

$$
s_1 = 13.89 \times 0.3 = 4.167m
$$

$$
F_e = ma
$$

$$
8830 = 1500 \times |a|
$$

$$
|a| = \frac {8830} {1500} =  5.887 \frac {m} {s^2}
$$

Tehát a gyorsulás $-5.887 \frac {m} {s^2}$, hisz fékezésről van szó.

$$
a = \frac {\Delta v} {t} = \frac {v - v_0} {t}
$$

$$
-5.887 = \frac {0 - 13.89} {t}
$$

$$
t = \frac {-13.89} {-5.887} = 2.359s
$$

$$
s_2 = v_0 \times t + \frac {a} {2} \times t^2 = 13.89 \times 2.359 + \frac {-5.887} {2} \times 2.359^2 = 16.39m
$$

A teljes idő a megállásig:

$$
t_1 + t = 0.3s + 2.359s = 2.66s
$$

A teljes út:

$$
s_1 + s_2 = 4.167m + 16.39m = 20.6m
$$

Tehát ha a gyalogos 20.6m-en belül van a megpillantás pillanatában, nincs esély a megállásra.

***

### Feladatok

**1. Gyorsulás és erő kiszámítása**
Egy $2000kg$ tömegű teherautó álló helyzetből indulva $12s$ alatt éri el az $54 \frac {km} {h}$ sebességet. Számítsd ki a jármű gyorsulását! Mekkora gyorsítóerő hat a teherautóra a gyorsítás közben (súrlódástól tekintsünk el)? Mekkora utat tesz meg ez alatt az idő alatt?

**2. Fékezés vészhelyzetben**
Egy $900kg$ tömegű sportautó versenypályán halad $144 \frac {km} {h}$ sebességgel. A pilóta hirtelen fékezni kényszerül, a fékek által kifejtett lassítóerő $4500N$. Mennyi idő alatt áll meg az autó? Mekkora a fékút hossza? (A reakcióidőt ebben az esetben hanyagoljuk el).

**3. Mozgás állandó erő hatására**
Egy $50kg$ tömegű ládát vízszintes padlón tolunk egyenletesen gyorsulva. A ládára ható vízszintes tolóerő $200N$, a padló és a láda között fellépő súrlódási erő $50N$. Mekkora a ládára ható erők eredője? Mekkora gyorsulással mozog a láda? Hány métert tesz meg 4 másodperc alatt, ha álló helyzetből indult?

## Példák a súlyerőre
1. Egy $60.0kg$ tömegű tornász a dobbantóra ráugorva $2.00 \frac {m} {s}$ függőleges lefelé irányú sebességgel ugrik rá és $0.300s$ múlva függőleges felfelé irányú $4.00 \frac {m} {s}$ sebességgel pattan fel. Mekkora a tornász függőleges gyorsulás komponense? Mekkora a tornászt érő gravitációs erő? Mekkora a tornász súlya nyugalomban? Mekkora a tornász súlya a dobbantás alatt? Mekkora a tornász súlya a levegőben? Számítsuk ki a tornász súlypontja milyen magasra emelkedik az ugrás során? A nehézségi gyorsulás $9.81 \frac {m} {s^2}$.

$$
G = mg = 60 \times 9.81 = 588.6N
$$

A tornász súlya nyugalomban tehát $588.6N$.

A dobbantás alatt a gyorsulás:

$$
a = \frac {v - v_0} {t} = \frac {4.00 - (-2.00)} {0.3} = 20.00 \frac {m} {s^2}
$$

A tornászt a dobbantó gyorsítja felfelé és a gravitáció lefelé húzza. Az eredő erő könnyen számítható:

$$
F_e = ma = 60.0 \times 20.0 = 1200N
$$

$$
F_e = F_k - G
$$

$$
1200 = F_k - 588.6
$$

$$
F_k = 1200 + 588.6 = 1789N
$$

Tehát a tornász súlya a dobbantón 1790N, hisz erőteljesen gyorsul felfelé rövid ideig. A levegőben a súlytalanság állapotában van, hisz csak a nehézségi erő hat rá. A súlypont emelkedési magassága a függőleges hajítás alapján számítható ki.

$$
a = \frac {v - v_0} {t}  
$$

$$
-9.81 = \frac {0 - 4.00} {x}
$$

$$
x = \frac {-4.00} {-9.81} = 0.4077s
$$

$$
h = s = v_0 \times t + \frac {a} {2} \times t^2 = 4.00 \times 0.4077 + \frac {-9.81} {2} \times 0.4077^2 = 0.8155m
$$

Itt nyilván a nehézségi gyorsulás fékezi a tornászt, tehát a gyorsulást negatívnak vettük. Az is nyilvánvaló, hogy addig tud emelkedni, amíg a függőleges sebesség komponens nem 0, tehát $v = 0$ az emelkedés végsebessége.

2. Egy 100g tömegű test függőlegesen lefelé gyorsul $2 \frac {m} {s^2}$ gyorsulással. A nehézségi gyorsulás $9.81 \frac {m} {s^2}$ Mekkora a testre ható nehézségi erő? Mekkora az eredő erő? Mekkora erővel húzzuk a testet függőlegesen felfelé?

Válaszainkat ellenőrizhetjük az alábbi szimuláció alapján:

[Függőlegesen lefelé gyorsuló test súlya](https://alexerdei73.github.io/physics-engine/project/#ab26cafb-9a10-491b-a55b-97408d43f06e)

$$
G = mg = 0.1 \times 9.81 = 0.981N
$$

$100g$ az $0.1kg$, ami közel $1N$ erőt jelent. Az eredő erő lefelé mutat:

$$
F_e = ma = 0.1 \times 2 = 0.2N
$$

$$
F_e = G - F_k
$$

$$
0.2N = 0.981N - F_k
$$

$$
F_k = 0.781N
$$

Itt nyilván tudtuk, hogy $F_k < G$, hisz a test lefelé gyorsul.

### Feladatok

1. Egy $75kg$ tömegű ember egy liftben áll, amely éppen elindul felfelé. A gyorsítási szakaszban a lift gyorsulása $1.5 \frac {m} {s^2}$. Mekkora tartóerővel nyomja a lift padlója az embert ebben a szakaszban? Hogyan változik ez az erő, ha a lift később állandó sebességgel halad tovább? ($g=9.81 \frac {m} {s^2}$)

2. Egy építkezésen egy daru egy $400kg$ tömegű betonelemet emel fel függőlegesen. A drótkötélben ébredő feszítőerő $4500N$. Mekkora gyorsulással indul el a betonelem felfelé? Mekkora utat tesz meg az első 3 másodpercben? ($g=9.81 \frac {m} {s^2}$)

3. Egy $0.5kg$ tömegű rakétamodell hajtóműve $10N$ tolóerőt fejt ki függőlegesen felfelé. Mekkora a rakéta gyorsulása az indítás pillanatában? Mekkora a rakétára ható erők eredője? (A légellenállást hanyagoljuk el, $g=9.81 \frac {m} {s^2}$).