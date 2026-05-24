# Az impulzus megmaradása

Vegyünk két tömegpontot, amelyek egymással és környezetükkel is kölcsönhatásban vannak. Hasson az $1$-es testre a környezet $\vec{F_1}$ külső erővel, a $2$-es testre ez a környezet által kifejtett külső erő $\vec{F_2}$! Az $1$-es testre a $2$-es által kifejtett belső erőt jelöljük $\vec{F_{1,2}}$ -vel, és fordítva, a $2$-es testre az $1$-es által kifejtett erőt pedig $\vec{F_{2,1}}$ -gyel!

Írjuk fel mindkét testre a dinamika alaptörvényét Newton eredeti megfogalmazásában:

$$
\vec{F_1} + \vec{F_{1,2}} = \frac {\Delta \vec{I_1}} {t}
$$

$$
\vec{F_2} + \vec{F_{2,1}} = \frac {\Delta \vec{I_2}} {t}
$$

Összeadjuk a két egyenletet, hiszen ha a bal oldal egyenlő a jobb oldallal mindkét egyenletben, akkor összeadva őket az összegek is egyenlőek maradnak:

$$
\vec{F_1} + \vec{F_2} = \frac {\Delta \vec{I_1}} {t} + \frac {\Delta \vec{I_2}} {t}
$$

Mi történt a belső erőkkel a bal oldalon? Azok összege nullvektorrá vált, ami közvetlenül Newton harmadik törvényéből (a hatás-ellenhatás elvéből) következik:

$$
\vec{F_{1,2}} = -\vec{F_{2,1}}
$$

Vagyis valóban:

$$
\vec{F_{1,2}} + \vec{F_{2,1}} = \vec{0}
$$

Tegyük fel, hogy a külső erők eredője is $\vec{0}$! Ekkor szorozhatunk a $t$ időtartammal, és a következőt kapjuk:

$$
\vec{0} = \Delta \vec{I_1} + \Delta \vec{I_2}
$$

Ezt még kicsit átrendezhetjük a megváltozások definíciója szerint:

$$
\vec{0} = \vec{I_1} - \vec{I_{1,0}} + \vec{I}_2 - \vec{I_{2,0}}
$$

$$
\vec{I_{1,0}} + \vec{I_{2,0}} = \vec{I_1} + \vec{I_2}
$$

Utolsó egyenletünk azt fejezi ki, hogy a rendszer összlendülete állandó. Mi csak két test esetére mutattuk meg a levezetést, de ez tetszőleges számú testből álló rendszerre is általánosítható. Ha felírjuk a második törvényt az összes testre, majd összeadjuk a kapott egyenleteket, a belső erők összege páronként mindig nulla lesz. Amennyiben a külső erők eredője nulla, a jobb oldalon álló impulzusváltozások összege is nullát ad, ami azt jelenti, hogy az összimpulzus nem változik meg. Kimondhatjuk tehát pontrendszerek esetére az impulzusmegmaradás tételét:

> **Amennyiben a külső erők eredője nulla, a pontrendszer összimpulzusa állandó. Ez az impulzusmegmaradás tétele.**

## Példák

1. Két korcsolyázó egymással szemben áll a jégen. A bal oldali tömege $40{,}0\text{ kg}$, a jobb oldalié $60{,}0\text{ kg}$. Az első, $40{,}0\text{ kg}$-os korcsolyázó meglöki a másodikat, és ezáltal $3{,}00\text{ }\frac{\text{m}}{\text{s}}$ nagyságú sebességre tesz szert. Mekkora lesz az ellenkező irányú sebessége a másik, $60\text{ kg}$-os korcsolyázónak? A súrlódás elhanyagolható, és a korcsolyázók csak állnak a jégen a lökéstől eltekintve, tehát nem hajtják magukat!

A kiindulási pontban a rendszer összlendülete nulla. Az impulzusmegmaradás miatt a lökés utáni összlendületnek is nullának kell lennie. Az $\vec{I_1}$ és $\vec{I_2}$ vektorok vízszintesek, de ellentétes irányúak, hiszen a sebességvektorok is ellentétesen mutatnak. Így az egyenes vonalú mozgás mentén a koordinátákkal felírt egyenlet:

$$
I_2 - I_1 = 0
$$

$$
m_2 \cdot v_2 - m_1 \cdot v_1 = 0
$$

$$
60 \cdot v_2 - 40 \cdot 3 = 0
$$

$$
60 \cdot v_2 - 120 = 0
$$

$$
60 \cdot v_2 = 120
$$

$$
v_2 = 2{,}00\text{ }\frac {\text{m}} {\text{s}}
$$

A $60\text{ kg}$-os korcsolyázó sebessége tehát pontosan $2{,}00\text{ }\frac{\text{m}}{\text{s}}$ lesz.

2. Egy ballisztikus inga ingatestének tömege $2{,}00\text{ kg}$. Az inga kezdetben függőlegesen, nyugalomban lóg, amikor eltalálja egy $20\text{ g}$ tömegű puskagolyó $600\text{ }\frac{\text{m}}{\text{s}}$ sebességgel. Az ütközés ideje rendkívül rövid; az interakció után a golyó az ingában ragad, és a továbbiakban együtt mozognak. Mekkora az inga sebessége közvetlenül azután, hogy a puskagolyó lefékeződött benne? Milyen magasra lendül fel az ingatest?

[A ballisztikus inga működése és a torkolati sebesség mérése](https://www.youtube.com/watch?v=DUf7Kv9FeSM)

[A ballisztikus inga példa interaktív szimulációja](https://alexerdei73.github.io/physics-engine/project/#cdde6490-8528-4ed7-b8a0-77f7cc959b41)

A golyó lefékeződése igen rövid idő alatt megy végbe, így a folyamat két jól elkülöníthető részre bontható. Először a golyó fúródik be a testbe, és az ingatest a golyóval egy közös sebességet vesz fel. Jelölje a golyó kezdeti sebességét $v_0$, a közös sebességet $v$, a golyó tömegét $m = 20\text{ g} = 0{,}020\text{ kg}$, az ingatest és a golyó együttes tömegét pedig $M = 2{,}020\text{ kg}$. 

Ebben az első, ütközési fázisban a mechanikai energia nem marad meg (a golyó deformációja és súrlódása miatt belső energiává alakul), de az impulzus megmarad, mivel a vízszintes irányú külső erők eredője nulla. A golyót lefékező súrlódási erő ugyanis belső erőnek minősül a rendszerben.

Az ütközés előtti lendület nagysága:

$$
I_0 = m \cdot v_0 = 0{,}020 \cdot 600 = 12\text{ }\frac {\text{kg} \cdot \text{m}} {\text{s}}
$$

Az ütközés utáni lendület nagysága:

$$
I = M \cdot v = 2{,}020 \cdot v
$$

A lendületmegmaradás értelmében ($I_0 = I$):

$$
12 = 2{,}020 \cdot v
$$

$$
v = \frac {12} {2{,}020} \approx 5{,}941\text{ }\frac {\text{m}} {\text{s}}
$$

Közvetlenül az ütközés lezajlása után a közös kezdősebesség $5{,}941\text{ }\frac{\text{m}}{\text{s}}$ lesz. 

A golyó teljes beágyazódása után a mechanikai energia már megmarad a kilendülés során, hiszen a rendszerre ekkor már csak a konzervatív nehézségi erő, valamint a kötél elmozdulásra minden pontban merőleges kényszerereje hat. Mivel a behatolás rendkívül rövid ideig tart, az inga elmozdulása ezalatt teljesen elhanyagolható.

A tiszta lengőmozgás kezdetén a mechanikai energia (a legalacsonyabb szintet választva nullapontnak):

$$
E_{m,0} + E_{h,0} = \frac {M} {2} \cdot v^2 + 0 = \frac {2{,}020} {2} \cdot 5{,}941^2 \approx 35{,}65\text{ J}
$$

A mechanikai energia a lengés legmagasabb pontján, ahol a test pillanatnyilag megáll ($E_m = 0\text{ J}$):

$$
E_m + E_h = 0 + M \cdot g \cdot h = 2{,}02 \cdot 9{,}81 \cdot h
$$

Mivel a mechanikai energia a kilendülés közben állandó:

$$
35{,}65 = 2{,}020 \cdot 9{,}81 \cdot h
$$

$$
35{,}65 = 19{,}82 \cdot h
$$

$$
h = \frac {35{,}65} {19{,}82} \approx 1{,}799\text{ m}
$$

Az ingatest tehát három értékes jegyre kerekítve pontosan $1{,}80\text{ m}$ függőleges magasságba lendül fel, ami kísérletileg kiválóan és pontosan mérhető.

Becsüljük meg közelebbről az ingatest valóságos elmozdulását, ha feltételezzük, hogy a golyó $d = 20\text{ cm} = 0{,}020\text{ m}$ úton fúródik be az ingatest belsejébe! A fékeződés $t$ időtartama szintén ismeretlen.

A golyót érő átlagos fékezőerő nagysága:

$$
|F_e| = m \cdot |a_1| = m \cdot \frac {|v - v_0|} {t} = 0{,}02 \cdot \frac {600 - v} {t} = \frac {12 - 0{,}02 \cdot v} {t}
$$

A hatás-ellenhatás törvénye miatt a zsákra ugyanekkora, de előrefelé mutató gyorsítóerő hat:

$$
F_e = (M - m) \cdot a_2 = 2{,}00 \cdot \frac {v} {t} = \frac {2 \cdot v} {t}
$$

A két belső erő nagysága egyenlő:

$$
\frac {12 - 0{,}02 \cdot v} {t} = \frac {2 \cdot v} {t}
$$

$$
12 - 0{,}02 \cdot v = 2 \cdot v \implies 12 = 2{,}02 \cdot v \implies v \approx 5{,}941\text{ }\frac{\text{m}}{\text{s}}
$$

Látható, hogy az erők felírásával némileg bonyolultabban ugyan, de hajszálpontosan ugyanazt a közös sebességet kaptuk meg, mint az impulzusmegmaradásból. Számítsuk ki a két test gyorsulásának értékét a $t$ függvényében:

$$
a_1 = \frac {v - v_0} {t} = \frac {5{,}941 - 600} {t} = \frac {-594{,}1} {t}
$$

$$
a_2 = \frac {v} {t} = \frac {5{,}941} {t}
$$

Írjuk fel a testek által megtett elmozdulásokat az ütközési fázis alatt:

$$
s_1 = v_0 \cdot t + \frac {a_1} {2} \cdot t^2 = 600 \cdot t - 297{,}05 \cdot t = 302{,}95 \cdot t
$$

$$
s_2 = \frac {a_2} {2} \cdot t^2 = 2{,}9705 \cdot t
$$

Tudjuk, hogy a golyó elmozdulása a fában megtett $d$ relatív úttal nagyobb az ingatest elmozdulásánál ($s_1 = s_2 + d$):

$$
302{,}95 \cdot t = 2{,}9705 \cdot t + 0{,}20
$$

$$
299{,}98 \cdot t = 0{,}20
$$

$$
t = \frac {0{,}20} {299{,}98} \approx 6{,}667 \cdot 10^{-4}\text{ s}
$$

A fékeződés ideje tehát mindössze $0{,}667\text{ ms}$. Számítsuk ki az ingatest (a zsák) tiszta elmozdulását ez alatt a rendkívül rövid idő alatt:

$$
s_2 = 2{,}9705 \cdot t = 2{,}9705 \cdot 6{,}667 \cdot 10^{-4} \approx 1{,}980 \cdot 10^{-3}\text{ m} = 1{,}98\text{ mm}
$$

Az ingatest elmozdulása az ütközés lezajlása alatt nem éri el a $2\text{ mm}$-t. Ezen a minimális távolságon az inga függőleges emelkedése elhanyagolható (kevesebb mint $1\ \mu\text{m}$), ami teljes mértékben igazolja a kiindulási feltevésünket, miszerint az ütközési fázis tiszta vízszintes mozgásként kezelhető.

---

## Feladatok

**1. Ágyú visszalökődése**
Egy $800\text{ kg}$ tömegű ágyúcsőből vízszintes irányban kilőnek egy $10\text{ kg}$ tömegű lövedéket $400\text{ }\frac{\text{m}}{\text{s}}$ torkolati sebességgel. Mekkora sebességgel lökődik vissza az ágyúcső közvetlenül a lövés után, ha a hidraulikus fékberendezés még nem lépett működésbe?

**2. Vasúti kocsik ütközése**
Egy $40\text{ tonnás}$ vasúti kocsi $4\text{ }\frac{\text{m}}{\text{s}}$ sebességgel haladva nekiütközik egy ugyanazon a vágányon álló, $60\text{ tonnás}$ vasúti kocsinak. Az ütközés következtében a kocsik automatikusan összekapcsolódnak, és együtt haladnak tovább. Mekkora lesz a közös sebességük az ütközés után?

**3. Űrhajós dobása a világűrben**
Egy $70\text{ kg}$ össztömegű űrhajós szerelés közben elhajít egy $2\text{ kg}$ tömegű csavarkulcsot $5\text{ }\frac{\text{m}}{\text{s}}$ sebességgel. Mekkora sebességgel és milyen irányban sodródik hátrafelé az űrhajós a dobás következtében az űrállomáshoz képest?

**4. Fiú ugrása a csónakból**
Egy $50\text{ kg}$ tömegű fiú áll egy $100\text{ kg}$ tömegű, nyugvó csónakban a tó közepén. A fiú hirtelen kiugrik a csónakból a vízbe $3\text{ }\frac{\text{m}}{\text{s}}$ nagyságú, vízszintes irányú sebességgel. Mekkora sebességgel indul el a csónak az ellenkező irányba?

**5. Golyók rugalmatlan ütközése**
Egy $2\text{ kg}$ tömegű golyó $6\text{ }\frac{\text{m}}{\text{s}}$ sebességgel halad jobbra egy egyenes mentén, és centrálisan, tökéletesen rugalmatlanul ütközik egy vele szemben, balra haladó, $4\text{ kg}$ tömegű, $3\text{ }\frac{\text{m}}{\text{s}}$ sebességű golyóval. Mekkora és milyen irányú lesz a golyók közös sebessége az ütközés után, ha a továbbiakban együtt mozognak tovább?

*A feladatok megoldása során a nehézségi gyorsulás alapértelmezett értéke* $g = 9{,}81\text{ }\frac{\text{m}}{\text{s}^2}$ *.*
