# A súrlódás

## Kísérlet és szimuláció

[Csúszási súrlódás megszűnik szabadeséskor (Kísérleti videó)](https://www.youtube.com/shorts/qBAdyNVEi_c)

[Csúszási súrlódás és szabadesés interaktív szimulátor](https://alexerdei73.github.io/physics-engine/project/#186187e3-eb58-4a34-a098-e4c35f6f0323)

A kísérlet, valamint az interaktív szimuláció egyértelműen megmutatja, hogy az egymáson elmozduló felületek között csúszási súrlódási erő lép fel, amennyiben a felületekre merőleges kényszererő nyomja össze őket. Ez az erő a felületek egymáson való elcsúszását akadályozni igyekszik, és a felülettel párhuzamos irányú. Ha a felülettel párhuzamosan más külső erő nem hat a csúszó testre, az egyenletesen lassul, majd teljesen megáll.

Nincs azonban csúszási súrlódási erő a felületek között abban az esetben, ha azokat semmilyen külső hatás nem nyomja össze – mint például a szabadon eső, súlytalanság állapotában végzett kísérlet során.

## Kísérletek a súrlódás tulajdonságairól

Nézzük meg a következő videókat is, amelyek részletesen bemutatják a súrlódási erő különböző tulajdonságait és törvényszerűségeit!

[A súrlódás mérése és a súlyerő kapcsolata](https://www.youtube.com/watch?v=9w-ORd14Ucs)

[A súrlódás függetlensége az érintkező felületek nagyságától](https://www.youtube.com/watch?v=idYX7kkRqbs)

[A merőleges kényszererő szerepe a súrlódásban](https://www.youtube.com/watch?v=oEaxJ7NqNPA)

[A súrlódási együttható meghatározása különböző felületekre](https://www.youtube.com/watch?v=oxtBa90bpww)

[A tapadási és a csúszási súrlódás közötti különbség](https://www.youtube.com/watch?v=z9pxjS924AQ)

## A csúszási súrlódás

A kísérleti megfigyelések alapján megállapíthatjuk, hogy az egymáson elcsúszó felületek a felülettel párhuzamos irányú, a relatív mozgást fékező erőt fejtenek ki egymásra. Ezt az erőt **csúszási súrlódási erőnek** nevezzük.

A csúszási súrlódási erő nagysága kizárólag az érintkező felületek anyagi minőségétől és a felületeket merőlegesen összenyomó $K$ kényszererőtől függ. Nem függ viszont az érintkező felületek látszólagos nagyságától.

> **A csúszási súrlódási erő nagysága egyenesen arányos a felületeket merőlegesen összenyomó erővel. Az arányossági tényező a súrlódási együttható ($\mu$), amely a felületek anyagi minőségére jellemző, dimenzió nélküli szám (értéke általában $0$ és $1$ közé esik). A súrlódási erő a felületek relatív mozgását fékezi, és mindig a felülettel párhuzamos irányú.**

$$
F_s = \mu \cdot K
$$

### Példa
A szimulációban bemutatott esetben a test tömege $0{,}05\text{ kg}$, és $5{,}00\text{ }\frac{\text{m}}{\text{s}}$ kezdősebességgel indítjuk el egy vízszintes felületen. A súrlódási együttható a felületek között $0{,}5$. Mekkora a test nehézségi ereje? Mekkora a fellépő súrlódási erő és a test gyorsulása? Mennyi idő alatt, és milyen hosszú úton áll meg a test? A nehézségi gyorsulás értéke $g = 9{,}81\text{ }\frac{\text{m}}{\text{s}^2}$.

![Súrlódás fékez egy vízszintes felületen mozgó testet](Kepek/surlodasfekezvizszintestalajon.png)

A testre ható nehézségi erő nagysága:

$$
G = m \cdot g = 0{,}05 \cdot 9{,}81 = 0{,}4905\text{ N}
$$

Mivel a talaj vízszintes és a test függőleges irányban nem mozog, a felületeket összenyomó merőleges kényszererő egyenlő nagyságú a nehézségi erővel:

$$
K = G = 0{,}4905\text{ N}
$$

A csúszási súrlódási erő nagysága:

$$
F_s = \mu \cdot K = 0{,}5 \cdot 0{,}4905 = 0{,}24525\text{ N}
$$

A dinamika alaptörvénye alapján ($F_e = m \cdot |a|$), mivel a vízszintes síkon csak a súrlódási erő hat rá:

$$
0{,}24525 = 0{,}05 \cdot |a|
$$

$$
|a| = \frac {0{,}24525} {0{,}05} = 4{,}905\text{ }\frac {\text{m}} {\text{s}^2}
$$

Mivel a súrlódás a mozgást fékezi, a gyorsulás előjeles értéke a mozgásirányhoz képest negatív: $a = -4{,}905\text{ }\frac {\text{m}} {\text{s}^2}$.

A megállásig ($v = 0\text{ }\frac{\text{m}}{\text{s}}$) eltelt időtartam a gyorsulás alapképletéből kiszámítva:

$$
a = \frac {v - v_0} {t}
$$

$$
-4{,}905 = \frac {0 - 5} {t}
$$

$$
t = \frac {-5} {-4{,}905} \approx 1{,}019\text{ s}
$$

A test három értékes jegyre kerekítve $1{,}02\text{ s}$ alatt áll meg. A fékút hossza a négyzetes úttörvény alapján:

$$
s = v_0 \cdot t + \frac {a} {2} \cdot t^2 = 5 \cdot 1{,}019 + \frac {-4{,}905} {2} \cdot 1{,}019^2 \approx 5{,}095 - 2{,}547 \approx 2{,}548\text{ m}
$$

A test kerekítve $2{,}55\text{ m}$ hosszú úton áll meg.

## A tapadási súrlódási erő

A súrlódás másik alapvető fajtája a **tapadási súrlódás**. Ebben az esetben is igaz, hogy a felületek a felülettel párhuzamos irányú erőt fejtenek ki egymásra, de a testek nem mozdulnak el egymáshoz képest, mert a megcsúszást a tapadási erő megakadályozza. Ennek az erőnek az irányát úgy állapíthatjuk meg a legegyszerűbben, ha gondolatban elhagyjuk a tapadási erőt, és kiszámítjuk, hogy a többi erő hatására milyen irányú lenne a test gyorsulása. A valóságos tapadási súrlódási erő ezzel a virtuális mozgásiránnyal ellentétes irányba mutat.

A tapadási erő nem növekedhet egy maximális határérték fölé; ha a külső húzó- vagy tolóerő ezt meghaladja, a felületek megcsúsznak, és a mozgás megindulásával átváltanak csúszási súrlódásba. Amennyiben a megcsúszás megakadályozásához a maximális értéknél kisebb erő is elegendő, a tapadási súrlódási erő hajszálpontosan akkora lesz, mint a mozgásra kényszerítő külső erők eredője.

A tapadási súrlódási erő maximumára a csúszási súrlódáshoz hasonló összefüggés érvényes:

$$
F_{t,\text{max}} = \mu_t \cdot K
$$

Vagyis a tapadási erőre általánosan igaz, hogy:

$$
F_t \leqslant \mu_t \cdot K
$$

A kísérletekből láthattuk, hogy adott felületek és $K$ erő esetén a megcsúszás elindításához nagyobb erőre van szükség, mint a mozgás fenntartásához, vagyis a tapadási súrlódási együttható nagyobb (vagy egyenlő), mint a csúszási súrlódási együttható:

$$
\mu \leqslant \mu_t
$$

### Példa
Egy $0{,}500\text{ kg}$ tömegű testet vízszintes talajra helyezünk, és megpróbáljuk eltolni egy $3{,}00\text{ N}$ nagyságú, vízszintes irányú erővel. A felületek közötti tapadási súrlódási együttható $\mu_t = 0{,}7$, a csúszási súrlódási együttható pedig $\mu = 0{,}5$. Mekkora a testre ható súrlódási erő és a test gyorsulása? Számítsuk ki ugyanezeket a mennyiségeket abban az esetben is, ha a vízszintes tolóerőt $4{,}00\text{ N}$-ra növeljük!

A test nehézségi ereje és a merőleges kényszererő vízszintes talajon:

$$
G = m \cdot g = 0{,}5 \cdot 9{,}81 = 4{,}905\text{ N}
$$

$$
K = G = 4{,}905\text{ N}
$$

Számítsuk ki a tapadási súrlódási erő maximális lehetséges értékét:

$$
F_{t,\text{max}} = \mu_t \cdot K = 0{,}7 \cdot 4{,}905 \approx 3{,}434\text{ N}
$$

Mivel a tapadási erő maximuma ($3{,}434\text{ N}$) nagyobb, mint az általunk alkalmazott $3{,}00\text{ N}$-os tolóerő, a tapadási súrlódás képes teljesen kiegyenlíteni a külső hatást. Így a testre ható erők eredője nulla, a gyorsulás $0\text{ }\frac{\text{m}}{\text{s}^2}$, a test nyugalomban marad. A fellépő tapadási súrlódási erő nagysága ebben a fázisban pontosan $3\text{ N}$, iránya pedig ellentétes a tolóerővel.

Ha a tolóerőt $4{,}00\text{ N}$-ra növeljük, ez az érték már meghaladja a tapadási erő maximumát ($3{,}434\text{ N}$). A test ekkor megcsúszik, mozgásba lendül, így a továbbiakban már a csúszási súrlódási erővel kell számolnunk:

$$
F_s = \mu \cdot K = 0{,}5 \cdot 4{,}905 \approx 2{,}453\text{ N}
$$

A mozgást biztosító vízszintes eredő erő nagysága:

$$
F_e = F - F_s = 4 - 2{,}453 = 1{,}547\text{ N}
$$

A dinamika alaptörvényéből ($F_e = m \cdot a$) a mozgó test gyorsulása:

$$
1{,}547 = 0{,}5 \cdot a
$$

$$
a = \frac{1{,}547}{0{,}5} = 2 \cdot 1{,}547 \approx 3{,}094\text{ }\frac {\text{m}} {\text{s}^2}
$$

A megcsúszás után a test kerekítve $3{,}09\text{ }\frac{\text{m}}{\text{s}^2}$ állandó gyorsulással mozog.

---

## Feladatok

1. Egy jégkorongozó $15{,}0\text{ }\frac{\text{m}}{\text{s}}$ kezdősebességgel megüti a vízszintes jégen fekvő, $0{,}170\text{ kg}$ tömegű korongot. A korong és a jégfelület közötti csúszási súrlódási együttható $\mu = 0{,}05$. Mekkora a korongra ható csúszási súrlódási erő, és milyen messzire csúszik el a korong, mielőtt teljesen megállna?
2. Egy $2{,}00\text{ kg}$ tömegű hasábot egy vízszintes asztallapra helyezünk, és elkezdjük vízszintes irányban húzni egy rugós erőmérő segítségével. Azt tapasztaljuk, hogy a test pontosan abban a pillanatban indul meg, amikor az erőmérő kijelzője elérte a $8{,}00\text{ N}$ értéket. Mekkora a tapadási súrlódási együttható ($\mu_t$) a fa és az asztallap felülete között?
3. Egy $50{,}0\text{ kg}$ tömegű nehéz szekrényt szeretnénk eltolni a vízszintes parkettán. A felületek közötti tapadási súrlódási együttható $0{,}6$, a csúszási súrlódási együttható pedig $0{,}4$. Mekkora vízszintes erővel kell megnyomnunk a szekrényt ahhoz, hogy éppen megmozduljon? Ha a szekrény már mozgásban van, mekkora állandó erő szükséges ahhoz, hogy egyenletes, állandó sebességgel toljuk tovább?
4. Egy gépkocsi vészfékez egy vízszintes aszfaltozott úton, aminek következtében a kerekek teljesen blokkolnak (csúsznak). A gumi és a száraz aszfalt közötti csúszási súrlódási együttható $0{,}7$. Mekkora az autó lassulása a csúszás során? Függ-e a lassulás mértéke a jármű tömegétől?
5. Egy $10{,}0\text{ kg}$ tömegű ládát $60\text{ N}$ nagyságú, vízszintes irányú erővel húzunk a padlón. A láda és a padló közötti csúszási súrlódási együttható $0{,}3$. Számítsuk ki a ládára ható csúszási súrlódási erőt, valamint a láda mozgásának gyorsulását!

*A számítások során a nehézségi gyorsulás értékét tekintsük* $g = 9{,}81\text{ }\frac{\text{m}}{\text{s}^2}$ *-nek.*
