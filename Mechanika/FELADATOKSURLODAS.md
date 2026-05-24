# Feladatok a súrlódásról

## Példák

1. Egy autó gumiabroncsa és az aszfaltút között a csúszási súrlódási együttható $0{,}6$, a tapadási súrlódási együttható pedig $0{,}8$. Az autó $100\text{ }\frac{\text{km}}{\text{h}}$ sebességről egyenletesen lefékez úgy, hogy a blokkolásgátló (ABS) rendszer működik, vagyis a kerekek nem csúsznak meg a talajon. Számítsuk ki a gépkocsi lassulását, a teljes megállásig eltelt időt, valamint a fékutat, ha az autó tömege $1300\text{ kg}$! Függ-e a lassulás mértéke az autó tömegétől? Számítsuk ki a fékutat abban az esetben is, ha az ABS kikapcsol, így a kerekek teljesen blokkolnak és csúsznak a talajon! A nehézségi gyorsulás értéke $g = 9{,}81\text{ }\frac{\text{m}}{\text{s}^2}$.

A gépkocsira ható nehézségi erő:

$$
G = m \cdot g = 1300 \cdot 9{,}81 = 12\ 753\text{ N}
$$

Mivel az út vízszintes, a felületeket összenyomó merőleges kényszererő egyenlő a nehézségi erővel:

$$
K = G = 12\ 753\text{ N}
$$

Mivel az ABS megakadályozza a kerekek megcsúszását, a maximálisan elérhető tapadási súrlódási erő hat a járműre, amely a fékező eredő erőt biztosítja:

$$
F_e = F_{t,\text{max}} = \mu_t \cdot K = 0{,}8 \cdot 12\ 753 = 10\ 202{,}4\text{ N}
$$

A dinamika alaptörvényéből ($F_e = m \cdot |a|$) a gyorsulás nagysága:

$$
|a| = \frac {F_e} {m} = \frac {10\ 202{,}4} {1300} \approx 7{,}848\text{ }\frac {m} {s^2}
$$

Mivel a mozgás lassul, a gyorsulás előjele negatív: $a = -7{,}848\text{ }\frac {\text{m}} {\text{s}^2}$.

Váltsuk át a kezdősebességet alapvető SI-egységbe:

$$
100\text{ }\frac{\text{km}}{\text{h}} = \frac{100 \cdot 1000\text{ m}}{3600\text{ s}} \approx 27{,}78\text{ }\frac {\text{m}} {\text{s}}
$$

A megállásig ($v = 0\text{ }\frac{\text{m}}{\text{s}}$) eltelt időtartam a gyorsulás képletéből:

$$
a = \frac {v - v_0} {t} \implies -7{,}848 = \frac {0 - 27{,}78} {t}
$$

$$
t = \frac {-27{,}78} {-7{,}848} \approx 3{,}540\text{ s}
$$

A megtett fékút hossza a négyzetes úttörvény alapján:

$$
s = v_0 \cdot t + \frac {a} {2} \cdot t^2 = 27{,}78 \cdot 3{,}540 + \frac {-7{,}848} {2} \cdot 3{,}540^2 \approx 98{,}34 - 49{,}17 = 49{,}17\text{ m}
$$

Látható, hogy a lassulás mértéke valójában teljesen független az autó tömegétől, hiszen az egyenleteket összevonva a tömeg kiesik:

$$
|a| = \frac {F_e} {m} = \frac {\mu_t \cdot m \cdot g} {m} = \mu_t \cdot g = 0{,}8 \cdot 9{,}81 = 7{,}848\text{ }\frac {\text{m}} {\text{s}^2}
$$

**A kerekek blokkolása (csúszása) esetén:**
Ekkor már a csúszási súrlódási együttható határozza meg a folyamatot, így a lassulás nagysága:

$$
|a| = \mu \cdot g = 0{,}6 \cdot 9{,}81 = 5{,}886\text{ }\frac {\text{m}} {\text{s}^2} \implies a = -5{,}886\text{ }\frac {\text{m}} {\text{s}^2}
$$

A csúszásos fékezés időtartama:

$$
t = \frac {v - v_0} {a} = \frac {0 - 27{,}78} {-5{,}886} \approx 4{,}720\text{ s}
$$

A csúszásos fékút hossza:

$$
s = v_0 \cdot t + \frac {a} {2} \cdot t^2 = 27{,}78 \cdot 4{,}720 + \frac {-5{,}886} {2} \cdot 4{,}720^2 \approx 131{,}12 - 65{,}56 = 65{,}56\text{ m}
$$

A számszerű eredményekből tisztán látszik, hogy a blokkolásgátló (ABS) rendszer használatával a fékút hossza több mint $16\text{ méterrel}$ rövidül meg, ami életmentő lehet.

2. Az autó gumiabroncsa és az aszfalt közötti csúszási súrlódási együttható $0{,}6$, a tapadási együttható pedig $0{,}8$. Mekkora az autó maximális gyorsulása, ha a kipörgésgátló rendszer optimálisan működik? Mennyi idő alatt és mekkora úton éri el így a jármű álló helyzetből a $100\text{ }\frac{\text{km}}{\text{h}}$ sebességet? Számítsuk ki ugyanezeket a mennyiségeket abban az esetben is, ha a gyorsítás teljes tartama alatt a hajtott kerekek kipörögnek (csúsznak)!

Kipörgésgátló használatával a kerekek a tapadási határon működnek, így a maximális gyorsítóerőt a tapadási súrlódás maximuma adja ($F_e = F_{t,\text{max}} = \mu_t \cdot m \cdot g$):

$$
a = \frac {F_e} {m} = \frac {\mu_t \cdot m \cdot g} {m} = \mu_t \cdot g = 0{,}8 \cdot 9{,}81 = 7{,}848\text{ }\frac {\text{m}} {\text{s}^2}
$$

A $v = 100\text{ }\frac{\text{km}}{\text{h}} \approx 27{,}78\text{ }\frac{\text{m}}{\text{s}}$ sebesség eléréséhez szükséges idő:

$$
t = \frac {v - v_0} {a} = \frac {27{,}78 - 0} {7{,}848} \approx 3{,}540\text{ s}
$$

A gyorsítás alatt megtett útszakasz:

$$
s = \frac {a} {2} \cdot t^2 = \frac {7{,}848} {2} \cdot 3{,}540^2 \approx 49{,}17\text{ m}
$$

Megfigyelhető, hogy az ideális fékezéskor megtett fékút hajszálpontosan megegyezik az ideális gyorsításkor megtett úttal, hiszen mindkét folyamat során maximálisan kihasználjuk az elérhető tapadási súrlódási határt. Emiatt a két folyamat kinematikailag egymás tökéletes tükörképe az időben. (A valóságban energetikailag természetesen teljesen különböznek, hiszen fékezéskor a fékrendszer melegszik fel intenzíven, míg gyorsításkor a motor üzemanyagot éget el).

**Kipörgő (csúszó) hajtott kerekek esetén:**
Ekkor a gyorsulás értékét már a csúszási súrlódás korlátozza:

$$
a = \mu \cdot g = 0{,}6 \cdot 9{,}81 = 5{,}886\text{ }\frac {\text{m}} {\text{s}^2}
$$

A sebesség eléréséhez szükséges megnövekedett időtartam:

$$
t = \frac {v - v_0} {a} = \frac {27{,}78 - 0} {5{,}886} \approx 4{,}720\text{ s}
$$

A gyorsítási útszakasz hossza kipörgő kerekekkel:

$$
s = \frac {a} {2} \cdot t^2 = \frac {5{,}886} {2} \cdot 4{,}720^2 \approx 65{,}57\text{ m}
$$

---

## Feladatok

**1. Fékezés vizes aszfalton**
Egy autó nedves aszfaltúton halad $90\text{ }\frac{\text{km}}{\text{h}}$ sebességgel. A vizes felületen a gumi és az út közötti tapadási súrlódási együttható lecsökken $\mu_t = 0{,}5$-re, a csúszási súrlódási együttható pedig $\mu = 0{,}4$-re. Mekkora lesz a fékút hossza, ha az autó működő blokkolásgátlóval (ABS) fékez, és mekkora, ha a fékek blokkolnak (a kerekek megcsúsznak)?

**2. Terepjáró a jeges úton**
Télen, teljesen jeges útszakaszon közlekedünk egy $1500\text{ kg}$ tömegű terepjáróval. A jégfelületen a gumi tapadási együtthatója mindössze $0{,}15$, a csúszási súrlódási együtthatója pedig $0{,}1$. Mekkora maximális lassulásra képes a jármű a megcsúszás határán? Mennyi időbe telik teljesen megállni $50\text{ }\frac{\text{km}}{\text{h}}$ kezdősebességről, ha óvatosan, csúszás nélkül (az ABS-t működésbe hozva) fékezünk?

**3. Sportmotor gyorsulási határai**
Egy sportmotorkerékpárral szeretnénk a lehető leghamarabb elérni a $100\text{ }\frac{\text{km}}{\text{h}}$ sebességet álló helyzetből. A meleg gumiabroncs és a száraz aszfalt közötti tapadási együttható kiváló, $\mu_t = 1{,}0$. A motorkerékpár és a pilóta együttes tömege $250\text{ kg}$. Feltételezzük, hogy a motor súlypontja elég alacsonyan helyezkedik el ahhoz, hogy a maximális gyorsulás során se emelkedjen el az első kerék a földről (nem ágaskodik a motor). Mekkora a minimális időtartam, amely alatt elérhetjük a célsebességet a megcsúszás határán? Szükség van-e a tömeg ismeretére a gyorsulás kiszámításához?

**4. Személyautó és teherautó fékútjának összehasonlítása**
Hasonlítsuk össze egy $1000\text{ kg}$ tömegű személygépkocsi és egy $4000\text{ kg}$ tömegű tehergépkocsi fékútját! Mindkét jármű azonos, $72\text{ }\frac{\text{km}}{\text{h}}$ sebességgel halad, és vészfékezés során mindkettőnek teljesen blokkolnak (csúsznak) a kerekei. A gumi és az aszfalt közötti csúszási súrlódási együttható mindkét járműnél megegyezik: $\mu = 0{,}7$. Melyik jármű képes rövidebb úton megállni? Válaszodat számszerű számítással indokold!

**5. Tapadásvesztés drag versenyen**
Egy gyorsulási versenyen (drag race) egy versenyautó a rajt pillanatában véletlenül túl nagy gázt ad, így a hajtott kerekei a gyorsítás első $4\text{ másodperce}$ alatt végig kipörögnek a talajon. A felületek közötti csúszási súrlódási együttható $\mu = 0{,}5$, míg a tapadási együttható optimális esetben $\mu_t = 0{,}9$ lett volna. Mekkora utat tesz meg az autó ez alatt a $4\text{ másodperc}$ alatt? Mekkora utat hagyott volna maga mögött, ha a kipörgésgátló segítségével végig az optimális tapadási határon gyorsít?
