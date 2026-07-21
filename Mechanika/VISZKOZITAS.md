# A viszkozitás

## Newtoni folyadékok

A belső súrlódást a viszkozitással jellemezzük. Mérése lamináris áramlási körülmények között történik, amikor a folyadékrétegek egymáson mintegy párhuzamosan „elcsúsznak”, a folyadék keveredése nélkül. 

Vegyünk egy olyan áramlást, amely az $x\text{-}y$ síkkal párhuzamosan történik. A folyadékrétegek, amelyek egymáson elcsúsznak, a $z$-tengelyre merőlegesek. Az áramlás iránya legyen az $x$-tengely, tehát csak az $u$ sebességkomponens különbözzön nullától. A rétegeket a $z$-koordináta jellemzi, és az $u$ sebesség is a $z$-koordináta függvénye. 

Ha két igen közeli réteg távolsága $\Delta z$, és a sebességkülönbség a két réteg között $\Delta u$, akkor a rétegek az $A$ felületükkel arányos, $x$ irányú erőt fejtenek ki egymásra úgy, hogy ez a sebességkülönbséget igyekszik megszüntetni. Ekkor a felületegységre eső erő arányos az egységnyi hosszra eső sebességváltozással. Az arányossági tényező a viszkozitás:

$$
\frac{F_x}{A} = \eta \frac{\Delta u}{\Delta z}
$$

A viszkozitás jele $\eta$ (éta), egysége az egyenlet alapján $\text{Pa}\cdot\text{s}$ (Pascal-másodperc).

>**Newtoni folyadékokra a viszkozitás a sebességtől függetlennek tekinthető, csak a hőmérséklet függvénye. A legtöbb folyadék és gáz az áramlások során Newtoni folyadéknak tekinthető.**

[Kísérlet nem-Newtoni folyadékkal](https://www.youtube.com/watch?v=t3neqUhoDRA)

Mi a továbbiakban kizárólag Newtoni folyadékokkal fogunk foglalkozni.

## Viszkozitási értékek

| Anyag | 20 °C | 50 °C | 100 °C |
| :--- | :---: | :---: | :---: |
| **Víz** | $0{,}00100\text{ Pa}\cdot\text{s}$ | $0{,}00055\text{ Pa}\cdot\text{s}$ | $0{,}00028\text{ Pa}\cdot\text{s}$ |
| **5W-30 Motorolaj** | $0{,}17500\text{ Pa}\cdot\text{s}$ | $0{,}04200\text{ Pa}\cdot\text{s}$ | $0{,}01100\text{ Pa}\cdot\text{s}$ |
| **Akácméz** | $9{,}00000\text{ Pa}\cdot\text{s}$ | $0{,}40000\text{ Pa}\cdot\text{s}$ | $0{,}02000\text{ Pa}\cdot\text{s}$ |

A táblázatból világosan látható, hogy a különböző Newtoni folyadékok viszkozitása rendkívül széles sávban mozoghat. A hőmérséklet emelkedésével az anyagok viszkozitása általában gyorsan csökken.

## A hidrodinamikai hasonlóság elve

Amikor egy áramlási jelenséget vizsgálunk – például egy új repülőgép szárnyát vagy egy autó aerodinamikáját –, a mérnökök ritkán építik meg azonnal a teljes méretű prototípust. Ehelyett kicsinyített modelleken, például szélcsatornában vagy kísérleti medencékben végeznek méréseket.

Ahhoz azonban, hogy a kicsinyített modellen kapott eredmények (áramlási képek, erők) hajszálpontosan megegyezzenek a valóságos, teljes méretű rendszerben tapasztalható jelenségekkel, nem elég a geometriai hasonlóság (azonos alak). **Hidrodinamikai hasonlóságra** is szükség van.

### Reynolds kísérlete

[Reynolds kísérlete](https://www.youtube.com/watch?v=6A8B05V4OzA)  
*(Kattintásra megnyíló videó: Reynolds történelmi tintaszálas kísérletének demonstrációja)*

A hidrodinamikai hasonlóság törvényét Osborne Reynolds fedezte fel 1883-ban egy híres kísérlet segítségével. Egy víztartályból kiáramló, tiszta üvegcső bejáratánál egy vékony tölcséren keresztül színes festéket (tintát) fecskendezett az áramlás közepébe. A következőt tapasztalta:

1. **Alacsony sebességnél** a tinta egy hajszálvékony, tökéletesen egyenes vonalban haladt végig az üvegcsövön. A folyadékrétegek egyáltalán nem keveredtek egymással. Ezt a rendezett áramlást **lamináris áramlásnak** nevezzük.
2. Ahogy a csapot fokozatosan megnyitva **növelte a sebességet**, elért egy kritikus pontot, ahol a tintaszál hirtelen hullámozni kezdett, majd egy pillanat alatt teljesen szétrobbant, és kaotikusan megfestette a csőben lévő összes vizet. Ez a **turbulens áramlás**.

### A Reynolds-szám

Reynolds dimenzióanalízissel (méretarány-elemzéssel) kereste meg azt az összefüggést, amely megjósolja ezt az átmenetet. Összegyűjtötte az áramlást befolyásoló fizikai jellemzőket:

*   $u$: az áramlási sebesség ($\text{m/s}$)
*   $d$: a cső átmérője ($\text{m}$)
*   $\rho$: a fluidum sűrűsége $\left(\text{kg/m}^3\right)$
*   $\eta$: a dinamikus viszkozitás ($\text{Pa}\cdot\text{s}$)

Azt vette észre, hogy ha ezeket a változókat az alábbi formában kombinálja, a mértékegységek teljesen kiejtik egymást. Az így kapott tiszta, dimenzió nélküli mennyiséget ma **Reynolds-számnak ($Re$)** nevezzük:

$$
Re = \frac{\rho \cdot u \cdot d}{\eta}
$$

A kísérletek során kiderült, hogy a cső átmérőjétől vagy a víz hőmérsékletétől (viszkozitásától) függetlenül a tintaszál *mindig* pontosan ugyanannál a kritikus Reynolds-számnál szakadt el. Ez alapján megfogalmazhatjuk a hidrodinamikai hasonlóság elvét:

>**Tetszőleges geometria esetén az áramlási képek hasonlóságának szükséges és elégséges feltétele – a geometriai hasonlóságon túlmenően –, hogy az áramlások Reynolds-száma megegyezzen.**

### Magyarázat

Bár Reynolds ezt kísérletileg mutatta ki, később a hidrodinamika alapegyenletei alapján összenyomhatatlan folyadékokra matematikailag is belátták az általános esetet. Ha a Reynolds-szám azonos, az áramlás jellege is hajszálpontosan ugyanaz lesz, legyen szó egy parányi csőről vagy egy óriási csatornáról.

Az áramlások alapegyenlete (a Navier–Stokes-egyenlet) valójában nem más, mint **Newton második törvényének ($F = m \cdot a$) a folyadékokra felírt alakja**, amely a nyomásból adódó erő és a mozgásból adódó gyorsulás mellett a belső súrlódási (viszkózus) erőket is figyelembe veszi.

A súrlódó folyadék áramlásakor két hatás vetélkedik egymással. Egyrészt a folyadék tehetetlensége próbálja az áramlást destabilizálni és kialakítani a turbulenciát. Másrészt a folyadék belső súrlódása próbálja az áramlást lelassítani és stabilizálni. E két hatás aránya a Reynolds-szám. Amennyiben a Reynolds-szám kicsiny, a súrlódás megakadályozza a zavarok felerősödését, elnyomja az örvényképződést. Az áramlás lamináris lesz.

Abban az esetben, amikor a Reynolds-szám magas, a súrlódás hatása elenyésző a tehetetlenséghez képest, így nem képes stabilizálni a felerősödő zavarokat. Örvények képződnek, amelyek le is válnak az akadályokról. Maga az örvényképződés csak súrlódó folyadékban lehetséges, de akkor fordul elő tömegesen, ha a súrlódás a tehetetlenséghez képest gyenge, és a tehetetlenség határozza meg főképp a folyadék mozgását.

### Gyakorlati alkalmazások

* **A szélcsatorna működése:** Ha egy autó $1:10$ arányú kicsinyített makettjét vizsgáljuk, a méret ($d$) a tizedére csökkent. Ahhoz, hogy a Reynolds-szám – és így az áramlási kép is – megegyezzen a valódi autóéval, a szélcsatornában a levegő sebességét ($u$) a tízszeresére kell növelnünk.
* **Az áramlás jellege csövekben:** 
  * Ha $Re < 2300$, a belső súrlódás minden apró áramlási zavart azonnal elfojt $\rightarrow$ az áramlás **lamináris** marad.
  * Ha $Re > 4000$, a súrlódás már képtelen elnyelni a zavarokat, az áramvonalak összeomlanak $\rightarrow$ az áramlás **turbulenssé** válik.

### Példa

Egy autógyár egy új modell légellenállását szeretné tesztelni szélcsatornában. A valóságos autó hossza $4\text{ m}$, és a városi utakon $u_{\text{valódi}} = 20\text{ m/s}$ ($72\text{ km/h}$) sebességgel halad. A laboratóriumban a szélcsatorna méretei miatt egy $1:4$ arányú, kicsinyített makettet helyeznek el (így a makett hossza $d_{\text{modell}} = 1\text{ m}$). A méréseket ugyanúgy $20\text{ }^{\circ}\text{C}$-os levegőben végzik, mint amilyenben a valódi autó is futni fog, így a sűrűség ($\rho$) and a viszkozitás ($\eta$) megegyezik a két esetben. Mekkora szélsebességet ($u_{\text{modell}}$) kell beállítani a szélcsatornában, hogy a makett körüli áramlási kép hidrodinamikailag teljesen hasonló legyen a valódi autóéhoz?

A hidrodinamikai hasonlóság elve szerint a két rendszerben a Reynolds-számoknak meg kell egyezniük ($Re_{\text{valódi}} = Re_{\text{modell}}$):

$$
\frac{\rho \cdot u_{\text{valódi}} \cdot d_{\text{valódi}}}{\eta} = \frac{\rho \cdot u_{\text{modell}} \cdot d_{\text{modell}}}{\eta}
$$

Mivel a fluidum (a levegő) mindkét esetben azonos, a sűrűséggel ($\rho$) és a dinamikus viszkozitással ($\eta$) egyszerűsíthetünk:

$$
u_{\text{valódi}} \cdot d_{\text{valódi}} = u_{\text{modell}} \cdot d_{\text{modell}}
$$

Ebből kifejezhetjük a modellhez szükséges sebességet:

$$
u_{\text{modell}} = u_{\text{valódi}} \cdot \frac{d_{\text{valódi}}}{d_{\text{modell}}} = 20\text{ m/s} \cdot \frac{4\text{ m}}{1\text{ m}} = 20 \cdot 4 = 80\text{ m/s}
$$

A szélcsatornában $80\text{ m/s}$ ($288\text{ km/h}$) sebességű áramlást kell biztosítani a hidrodinamikai hasonlóság eléréséhez. (Megjegyzés: Ez a sebesség a hangsebességnek mindössze a 23%-a ($\text{Mach } 0{,}23$), így a levegő áramlása a makett körül is teljes biztonsággal összenyomhatatlannak tekinthető, a Bernoulli-törvény és a Reynolds-modell hibátlanul érvényes).

## Feladatok

1. Egy ipari csővezetékben $20\text{ }^{\circ}\text{C}$-os víz áramlik $u = 0{,}5\text{ m/s}$ átlagsebességgel. A cső belső átmérője $d = 10\text{ cm}$ ($0{,}1\text{ m}$). A táblázat alapján a víz viszkozitása ezen a hőmérsékleten $\eta = 0{,}001\text{ Pa}\cdot\text{s}$, a sűrűsége pedig $\rho = 1000\text{ kg/m}^3$. Mekkora az áramlás Reynolds-száma? Lamináris vagy turbulens az áramlás a csőben?

2. Egy laboratóriumi kísérletben egy $d = 2\text{ cm}$ ($0{,}02\text{ m}$) átmérőjű vékony csőben akácmézet áramoltatnak $20\text{ }^{\circ}\text{C}$-on, $u = 0{,}1\text{ m/s}$ sebességgel. A méz sűrűsége $\rho = 1400\text{ kg/m}^3$, a táblázat szerinti viszkozitása pedig $\eta = 9\text{ Pa}\cdot\text{s}$. Mekkora a Reynolds-szám ebben az esetben? Hogyan változik a Reynolds-szám és az áramlás jellege, ha a mézet $100\text{ }^{\circ}\text{C}$-ra melegítjük fel (ahol a sűrűsége nem változik számottevően, de a viszkozitása lecsökken $\eta = 0{,}02\text{ Pa}\cdot\text{s}$-ra), miközben a sebesség és az átmérő változatlan marad?

3. Egy kisméretű tengeralattjáró prototípusát $1:10$ arányú kicsinyített makettel tesztelik egy kísérleti vontatómedencében (így $d_{\text{modell}} = \frac{1}{10} \cdot d_{\text{valódi}}$). Mind a valódi jármű, mind a makett ugyanabban a sós vízben mozog (a sűrűség és a viszkozitás megegyezik). A valódi tengeralattjáró gazdaságos utazósebessége a tenger fenekén $u_{\text{valódi}} = 1{,}5\text{ m/s}$ (kb. $5{,}4\text{ km/h}$). Mekkora sebességgel ($u_{\text{modell}}$) kell vontatni a makettet a kísérleti medencében, hogy az áramvonalak és a leváló örvények szerkezete megegyezzen a valóságossal?
