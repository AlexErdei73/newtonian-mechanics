# Feladatok a súrlódásról

## Példák
1. Egy autó gumija és az aszfalt közt a súrlódási együttható 0,6, a tapadási együttható 0,8. Az autó $100 \frac {km} {h}$ sebességről egyenletesen lefékez, miközben a blokkolásgátló működik, szóval a kerék nem csúszik meg. Számítsuk ki a lassulást, a megállásig eltelt időt, valamint a fékutat, ha az autó tömege $1300 kg$! Függ-e a lassulás az autó tömegétől? Számítsuk ki a fékutat abban az esetben is, ha a kerekek blokkolnak és csúsznak a talajon!

$$
G = mg = 1300 \times 9,81 = 12750N
$$

$$
K = G = 12750N
$$

$$
F_e = F_s = \mu_t \times K = 0,8 \times 12750 = 10200N
$$

$$
F_e = m|a|
$$

$$
|a| = \frac {F_e} {m} = \frac {10200} {1300} = 7,846 \frac {m} {s^2}
$$

$$
a = -7,846 \frac {m} {s^2}
$$

$$
100 \frac {km} {h} = 100 \frac {1000m} {3600s} = 27,78 \frac {m} {s}
$$

$$
a = \frac {v - v_0} {t}
$$

$$
-7,846 = \frac {-27,78} {t}
$$

$$
t = \frac {-27,78} {-7,846} = 3,541s
$$

$$
s = v_0 \times t - \frac {a} {2} \times t^2 = 27,78 \times 3,541 + \frac {-7,846} {2} \times 3,541^2 = 49,18m
$$

A lassulás független a tömegtől, hisz:

$$
|a| = \frac {F_e} {m} = \frac {\mu_t mg} {m} = \mu_t g = 0,8 \times 9,81 = 7,848 \frac {m} {s^2}
$$

Ez a számítási hibán belül megegyezik az eddigi eredménnyel, az utolsó jegy pontatlan.

Csúszás esetén:

$$
a = -\mu g = -0,6 \times 9,81 = -5,886 \frac {m} {s^2}
$$

$$
t = \frac {v - v_0} {a} = \frac {-27,78} {-5,886} = 4,720s
$$

$$
s = v_0 \times t + \frac {a} {2} \times t^2 = 27,78 \times 4,720 + \frac {-5,886} {2} \times 4,720^2 = 65,56m
$$

Látjuk, a blokkolásgátló hogyan képes csökkenteni a fékutat.

2. Az autó gumija és az aszfalt közt a súrlódási együttható 0,6, a tapadási együttható pedig 0,8. Mekkora az autó maximális gyorsulása kipörgésgátlóval? Mennyi idő alatt és mekkora úton éri el így az autó a $100 \frac {km} {h}$ sebességet? Számítsuk ki ugyanezt, ha a gyorsítás teljes tartama alatt a hajtott kerekek kipörögnek!

$$
F_e = F_t = \mu_t K = \mu_t mg = ma
$$

$$
a = \frac {F_e} {m} = \frac {\mu_t mg} {m} = \mu_t g = 0,8 \times 9,81 = 7,848 \frac {m} {s^2}
$$

$$
t = \frac {v - v_0} {a} = \frac {27,78 - 0} {7,848} = 3,540s
$$

$$
s = \frac {a} {2} \times t^2 = \frac {7,848} {2} \times 3,540^2 = 49,17m
$$

Látjuk, hogy a fékezéskor megtett út egyezik a gyorsításkor megtett úttal, hisz maximálisan kihasználjuk az elérhető tapadást a blokkolásgátlóval is és a kipörgésgátlóval is. Ilyenkor a két folyamat mintegy egymás tükörképe az időben, legalábbis a mozgás szempontjából. A valóságban a két folyamat egyáltalán nem egymás tükörképe, hisz a fékezéskor a fékek alaposan felmelegednek, míg a gyorsításkor a motor jelentős mennyiségű üzemanyagot éget el, amely fékezéskor nem történik meg.

A gyorsulás kipörgő hajtott kerékkel:

$$
a = \mu g = 0,6 \times 9,81 = 5,886 \frac {m} {s^2}
$$

$$
t = \frac {v - v_0} {a} = \frac {27,78 - 0} {5,886} = 4,720s
$$

$$
s = \frac {a} {2} \times t^2 = \frac {5,886} {2} \times 4,720^2 = 65,57m
$$

## Feladatok

1. Egy autó vizes aszfalton halad $90 \frac{km}{h}$ sebességgel. A nedves úton a tapadási súrlódási együttható lecsökken $\mu_t = 0,5$-re, a csúszási súrlódási együttható pedig $\mu = 0,4$-re. Mekkora a fékút, ha az autó blokkolásgátlóval (ABS) fékez, és mekkora, ha a kerekek blokkolnak (csúsznak)?

2. Télen, jeges úton közlekedünk egy $1500 kg$ tömegű terepjáróval. A jégen a tapadási együttható mindössze 0,15, a csúszási együttható pedig 0,1. Mekkora maximális lassulásra képes a jármű megcsúszás nélkül? Mennyi időbe telik megállni $50 \frac{km}{h}$ sebességről, ha óvatosan (csúszás nélkül) fékezünk?

3. Egy sportmotorral szeretnénk minél hamarabb elérni a $100 \frac{km}{h}$ sebességet álló helyzetből. A gumi és az aszfalt közötti tapadási együttható kiváló, $\mu_t = 1,0$. A motor és a pilóta össztömege $250 kg$.
Tételezzük fel, hogy a motor súlypontja elég alacsonyan van ahhoz, hogy a maximális gyorsulásnál se emelkedjen el az első kerék.
Mekkora a minimális idő, ami alatt elérhetjük ezt a sebességet anélkül, hogy a kerék megcsúszna? Szükség van-e a tömeg ismeretére a gyorsulás kiszámításához?

4. Hasonlítsuk össze egy $1000 kg$ tömegű személyautó és egy $4000 kg$ tömegű teherautó fékútját! Mindkét jármű $72 \frac{km}{h}$ sebességgel halad, és mindkettő kerekei blokkolnak vészfékezés során. A gumi és aszfalt közötti csúszási súrlódási együttható mindkét esetben $\mu = 0,7$. Melyik jármű áll meg rövidebb úton? Válaszunkat számítással indokoljuk!

5. Egy gyorsulási versenyen (drag race) egy autó a rajtnál véletlenül túlzott gázt ad, és a kerekei végig kipörögnek az első 4 másodpercben. A csúszási súrlódási együttható $\mu = 0,5$, a tapadási együttható $\mu_t = 0,9$ lenne. Mekkora utat tesz meg ezalatt a 4 másodperc alatt? Mekkora utat tett volna meg, ha a kipörgésgátló segítségével az optimális tapadási határon gyorsult volna?