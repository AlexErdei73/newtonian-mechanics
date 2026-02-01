# A súrlódás

## Kísérlet
[Csúszási súrlódás megszűnik szabadeséskor](https://www.youtube.com/shorts/qBAdyNVEi_c)

## Szimuláció
[Csúszási súrlódás és szabadesés](https://alexerdei73.github.io/physics-engine/project/#186187e3-eb58-4a34-a098-e4c35f6f0323)

A kísérlet illetve a szimuláció is mutatja, hogy van egy csúszási súrlódási erő a felületek között, ha ezek egymáson csúsznak, miközben a felületre merőleges erő nyomja őket össze. Ez az erő a felületek egymáson való elcsúszását akadályozni igyekszik és a felülettel párhuzamos irányú. A csúszó test lassul, majd megáll, mivel más erő, mely a felülettel párhuzamos, nem hat. 

Nincs azonban csúszási súrlódási erő a felületek közt, ha azokat nem nyomja össze semmilyen erő, mint például a szabadon eső, súlytalanság állapotában végzett kísérlet esetében.

## Kísérletek

Nézzük meg a következő videókat is, melyek a súrlódási erő tulajdonságait mutatják be.

[A súrlódás 1](https://www.youtube.com/watch?v=9w-ORd14Ucs)

[A súrlódás 2](https://www.youtube.com/watch?v=idYX7kkRqbs)

[A súrlódás 3](https://www.youtube.com/watch?v=oEaxJ7NqNPA)

[A súrlódás 4](https://www.youtube.com/watch?v=oxtBa90bpww)

[A súrlódás 5](https://www.youtube.com/watch?v=z9pxjS924AQ)

## A csúszási súrlódás

A kísérletek alapján megállapíthatjuk, hogy az egymáson csúszó felületek a felülettel párhuzamos irányú, a csúszást fékező erőt fejtenek ki. Ez a csúszási súrlódási erő. 

Ennek nagysága csak az érintkező felületek anyagi minőségétől és a felületeket összenyomó kényszererőtől függ, mely a felületekre merőleges. Nem függ az erő azonban az érintkező felületek nagyságától. 

>**A csúszási súrlódási erő arányos a felületeket összenyomó erővel, az arányossági tényező a súrlódási együttható ($\mu$), mely a felületek anyagi minőségére jellemző dimenzió nélküli szám 0 és 1 között. A súrlódási erő a felületek relatív mozgását fékezi és a felülettel párhuzamos irányú.**

$$
F_s = \mu \times K
$$

### Példa
A szimulációban látott esetben a test tömege $0,05kg$ és $5,00 \frac {m} {s}$ kezdősebességgel indítjuk. A súrlódási együttható a felületek közt 0,5. Mekkora a test súlya? Mekkora súrlódási erő? Mekkora a test gyorsulása? Mennyi idő alatt áll meg a test? Milyen hosszú úton áll meg a test?

![Súrlódás fékez egy vízszintes felületen mozgó testet](Kepek/surlodasfekezvizszintestalajon.png)

$$
G = mg = 0,05 \times 9,81 = 0,4905N
$$

$$
K = G
$$

$$
F_s = \mu \times K = 0,5 \times 0,4905 = 0,2453N
$$

$$
F_e = m|a|
$$

$$
0,2453 = 0,05 \times |a|
$$

$$
|a| = \frac {0,2453} {0,05} = 4.906 \frac {m} {s^2}
$$

$$
a = -4,906 \frac {m} {s^2}
$$

$$
a = \frac {v - v_0} {t}
$$

$$
-4,906 = \frac {0 - 5} {t}
$$

$$
t = \frac {-5} {-4,906} = 1,019s
$$

$$
s = v_0 \times t + \frac {a} {2} \times t^2 = 5 \times 1,019 + \frac {-4,906} {2} \times 1,019^2 = 2,548m
$$

## A tapadási erő

A súrlódás másik fajtája a tapadási súrlódás. Itt is érvényes, hogy a felületek a felülettel párhuzamos irányú erőt fejtenek ki egymásra, de nem mozognak egymáshoz képest, mert a megcsúszást a tapadási erő megakadályozza. Ennek az erőnek az irányát úgy állapítjuk meg, hogy gondolatban elhagyjuk a tapadási erőt és kiszámítjuk, milyen irányú lenne a gyorsulás. A tapadási erő ezzel ellentétes irányú erő. 

A tapadási erő nem lehet nagyobb egy maximális értéknél, különben a felületek megcsúsznak és a csúszási súrlódás fog fellépni. Amennyiben kevesebb erő is elég a megcsúszás megakadályozásához, mint a tapadási erő maximuma, akkor a tapadási erő akkora, hogy a megcsúszást megakadályozza.

A tapadási erő maximumára hasonló összefüggés vonatkozik, mint a csúszási súrlódási erőre:

$$
F_{t,max} = \mu_t \times K
$$

Vagyis:

$$
F_t \leqslant \mu_t \times K
$$

A kísérletekből láttuk, hogy adott felületek és K erő esetén a tapadási erő nagyobb, mint a csúszási súrlódási erő, tehát:

$$
\mu \leqslant \mu_t
$$

### Példa
Egy test tömege $0,500kg$ és a testet vízszintes talajra helyezzük és toljuk $3,00N$ erővel vízszintes irányban. A tapadási együttható $0,7$, a csúszási súrlódási együttható pedig $0,5$. Mekkora a súrlódási erő? Mekkora a test gyorsulása? Számítsuk ki ugyanezt akkor is, ha a tolóerő $4,00N$!

$$
G = mg = 0,5 \times 9,81 = 4,905N
$$

$$
K = G = 4,905N
$$

$$
F_{t,max} = \mu_t \times K = 0,7 \times 4,905 = 3,434N
$$

Mivel a tapadási erő maximuma nagyobb, mint $3N$, így a $3N$ erőt a tapadási erő kiegyensúlyozza, tehát a gyorsulás 0, a test nyugalomban marad. A tapadási erő ez esetben $3N$ és az általunk kifejtett tolóerővel ellentétes irányú. A $4N$ erő az nagyobb, mint a tapadási erő maximuma, ez esetben a test megcsúszik és a csúszási súrlódással kell számoljunk.

$$
F_s = \mu \times K = 0,5 \times 4,905 = 2,453N
$$

$$
F_e = F - F_s = 4 - 2,453 = 1,547N
$$

$$
F_e = ma
$$

$$
1,547 = 0,5a
$$

$$
a = 2 \times 1,547 = 3,094 \frac {m} {s^2}
$$

## Feladatok

1. Egy jégkorongozó $15,0 \frac{m}{s}$ sebességgel üti meg a $0,170 kg$ tömegű korongot a jégen. A korong és a jég közötti csúszási súrlódási együttható $\mu = 0,05$. Mekkora a súrlódási erő? Milyen messzire csúszik a korong, mielőtt megállna?

2. Egy $2,00 kg$ tömegű fatéglát helyezünk egy vízszintes asztallapra. A testet vízszintes irányban húzzuk egy rugós erőmérővel. Azt tapasztaljuk, hogy a test akkor indul meg, ha az erőmérő $8,00 N$ erőt mutat. Mekkora a tapadási súrlódási együttható ($\mu_t$) a fa és az asztal között?

3. Egy $50,0 kg$ tömegű szekrényt szeretnénk eltolni a parkettán. A tapadási súrlódási együttható $0,6$, a csúszási súrlódási együttható $0,4$. Mekkora vízszintes erővel kell tolnunk a szekrényt ahhoz, hogy éppen megmozduljon? Ha már mozog, mekkora erő szükséges ahhoz, hogy állandó sebességgel toljuk tovább?

4. Egy autó vészfékez egy vízszintes úton. A kerekek blokkolnak (csúsznak). A gumi és az aszfalt közötti csúszási súrlódási együttható $0,7$. Mekkora az autó lassulása? (Számoljunk $g=9,81 \frac{m}{s^2}$ értékkel!) Függ-e a lassulás mértéke az autó tömegétől?

5. Egy $10,0 kg$ tömegű ládát $60 N$ vízszintes erővel húzunk a padlón. A láda és a padló közötti csúszási súrlódási együttható $0,3$. Számítsuk ki a ládára ható súrlódási erőt, valamint a láda gyorsulását!