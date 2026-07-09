# Út a turbulenciához a Kármán-féle örvénysoron át

## Végtelen henger körüli áramlás síkban

### Kísérletek

[Végtelen henger körüli áramlás síkban](https://www.youtube.com/watch?v=6xVF6qJmOnI)

Az előző fejezetben láttuk a lamináris áramlást, amely kis Reynolds-számoknál időben állandó, örvénymentes áramlást jelentett. Az áramlási kép ezekben az egyszerű esetekben – például egy gömb körüli folyadékáramlás vagy egy végtelen hosszú, egyenes csőben történő áramlás esetén – elméletileg is kiszámítható a Navier–Stokes-egyenletek megoldásával, ha valaki már ismeri az ehhez szükséges matematikai apparatust. 

Azt is tudjuk viszont, hogy az így kapott törvények, mint például a Stokes-törvény vagy a Hagen–Poiseuille-törvény, csak kis Reynolds-számok esetén érvényes közelítések. Amint az áramlás elegendően gyors, vagyis a Reynolds-szám elég naggyá válik, a belső súrlódás már nem képes stabilizálni az áramlást, és az áramlásban örvények jelennek meg, amelyek leválnak az akadályokról – például a cső faláról vagy a gömbről. 

Tovább növelve a Reynolds-számot, az áramlás teljesen turbulenssé válik. Ez egy kaotikus állapot, amelyről a későbbiekben fogunk részletesen beszélni. Most az átmeneti tartományt vizsgáljuk meg részletesebben egy egyszerűbb, síkbeli áramlási példán keresztül, amely a végtelen hosszú henger körüli áramlás.

### Örvények megjelenése

Amint a videóban is láthattuk, a jelenség gyakran előfordul a mindennapi életben is, de az egyenletek nem oldhatók meg számítógépek használata nélkül. Ezért a legjobb a jelenséget úgy vizsgálni, ahogyan a videóban is teszi a matematikus: elemzi a szimuláció eredményeit különböző Reynolds-számok esetén. Ezt aztán összehasonlíthatjuk a természetben is megfigyelt jelenségekkel, és megállapíthatjuk, hogy a szimulációk hűen visszaadják a valóságot.

Kis Reynolds-szám esetén az áramlási kép stacionárius (időben állandó), örvények egyáltalan nem figyelhetők meg. Ez a gyakorlatban azt jelenti, hogy $Re < 5$.

Ha a Reynolds-szám, vagyis az áramlási sebesség növekszik, azt tapasztaljuk, hogy az áramlás még mindig stacionárius, de a henger mögött szimmetrikusan két mozdulatlan örvény jelenik meg. Ez a helyzet nagyjából $Re = 46$ értékig áll fenn. A Reynolds-szám növekedésével a két szimmetrikusan elhelyezkedő örvény növekszik, de továbbra is szimmetrikusan helyezkednek el és mozdulatlanok maradnak.

### Örvények leválása: a Kármán-féle örvénysor

Kármán Tódor 1911-ben elméleti úton bebizonyította, hogy egy olyan örvénysor, amelynél az örvények periodikusan, egymástól egyenlő távolságra következnek, és felváltva helyezkednek el a szimmetriasík alatt és felett úgy, hogy a szimmetriasík feletti és alatti örvények forgásának értelme ellentétes, stabil képződmény az áramló folyadékban. Ez a *Kármán-féle örvénysor*.

A henger esetében a stacionárius áramlás $Re > 46$ esetén instabillá válik. Egy periodikus oszcilláció (lengés) jelenik meg, amelyet a belső súrlódás többé már nem képes lecsillapítani. A szimmetria megszűnik, és a henger anyaga mögül az örvények kezdenek leválni periodikusan, felváltva, így jön létre az az új, dinamikusan stabil áramlás, amely a Kármán-féle örvénysor. 

A Reynolds-szám további növelésével a leváló örvények kölcsönhatásba kerülnek az alacsonyabb Reynolds-szám esetén a henger mögött megjelenő, szimmetrikusan elhelyezkedő örvényekkel is. Így ezek a belső zónák már szintén pulzálni fognak, és az elhelyezkedésük a továbbiakban egyáltalán nem lesz szimmetrikus.

A Reynolds-szám drasztikus növelésével a henger mögötti áramlás teljesen turbulenssé válik. Ez azonban a valóságban egy háromdimenziós instabilitás, így a kétdimenziós számítógépes szimulációk önmagukban ezt már nem képesek tökéletesen visszaadni.

---

## Valódi henger körüli áramlások: a Strouhal-szám

Hogyan tudjuk megjósolni, hogy a szél sebességétől vagy az oszlop vastagságától függően másodpercenként hányszor fognak leválni ezek az örvények? Erre a kérdésre Vincenz Strouhal (1850–1922) cseh fizikus adta meg a választ, aki bevezette az áramlástan harmadik legfontosabb dimenzió nélküli számát, a *Strouhal-számot* ($St$):

$$
St = \frac{f \cdot d}{u}
$$

*   $f$: az örvényleválás frekvenciája ($\text{1/s}$ vagy $\text{Hz}$)
*   $d$: az akadály (henger) átmérője ($\text{m}$)
*   $u$: a zavartalan áramlási sebesség ($\text{m/s}$)

### A Strouhal-szám a Reynolds-szám függvényében

Ha laboratóriumban megmérjük, hogyan változik a Strouhal-szám a Reynolds-számnak (mely itt az áramlás sebességét jellemzi) a függvényében egy kör keresztmetszetű henger mögött, az áramlástan egyik leghíresebb grafikonját kapjuk:

![A Strouhal-szám a Reynolds-szám függvényében henger esetén](Kepek/strouhal.gif)

A grafikonból számunkra az a legfontosabb elméleti tanulság, hogy egy igen széles Reynolds-szám tartományban – nagyjából $250 < Re < 250\ 000$ között – a Strouhal-szám szinte teljesen állandónak tekinthető, méghozzá $St \approx 0{,}21$. Ez azt jelenti, hogy az áramlás sebességével egyenesen arányos lesz a kialakuló frekvencia ebben a hatalmas gépészeti tartományban. Nyilvánvalóan kisebb Reynolds-számokra ez a linearitás már nem igaz, nagyon kis Reynolds-számok esetén pedig az örvények le sem válnak a testről.

Kifejezetten érdekes, hogy mi történik hatalmas Reynolds-számok esetén. Itt a hengerre tapadó folyadék-határréteg, amely sokáig az elülső falon megőrzi a lamináris jellegét, szinten turbulenssé válik. Ez azt jelenti, hogy az örvényleválás pontos geometriai helye is fluktuálni kezd, így a szigorúan szabályos periodikus jelleg és az állandó, tiszta frekvencia felbomlik. Ez még magasabb Reynolds-számoknál újra visszaáll egy stabilabb állapotba, de ott a Strouhal-szám értéke már magasabb, nagyjából $0{,}25 - 0{,}30$ között mozog.

### A Strouhal-szám a gyakorlatban

A periodikusan leváló örvények a rugalmas szerkezeteket erős rezgésbe hozhatják, és a mechanikai rezonancia kialakulása esetén ez akár életveszélyes vagy pusztító is lehet. A Strouhal-szám és az áramlási sebesség ismeretében a leválási frekvencia kiszámítható, így a szerkezetek úgy tervezhetők meg, hogy ez a rezonancia ne alakulhasson ki. 

A hírhedt **Tacoma Narrows híd** az erős szélben az átadása után mindössze 4 hónappal látványosan összeomlott. A katasztrófa utáni vizsgálatok során sokáig gyanakodtak arra, hogy a hidat a fentebb vázolt tiszta Kármán-örvény rezonancia pusztította el. A vizsgálatokban, illetve az új híd aerodinamikai tervezésében maga Kármán Tódor is aktívan részt vett. A modern áramlástani kutatások alapján ma már tudjuk, hogy az örvényleválások frekvenciája aznapi szélsebesség függvényében kb. $1\text{ Hz}$ volt, míg a hídon kialakult végzetes torziós (csavaró) rezgések frekvenciája kb. $0{,}2\text{ Hz}$ volt, vagyis nem a tiszta Kármán-örvénysor rezonanciája okozta a híd leomlását (hanem az úgynevezett aerelasztikus flatter jelenség). 

A villanyoszlopok és vékony vezetékek heves lengéseit a szélben viszont hajszálpontosan ez a jelenség okozza. Szintén rendkívül veszélyes ez a ritmusos erőlökés a magas, henger alakú gyárkémények esetén, ezért ezekre spirális légterelő bordákat szerelnek, hogy megtörjék az örvények ütemét. 

A Strouhal-szám ezenkívül kulcsfontosságú tényező a madarak repülésekor és a halak úszásakor is. A leváló örvények energiájának egy része ugyanis visszanyerhető, ha az állat mozgása (a szárny- vagy farokcsapás) megfelelő frekvenciával történik. A mérések szerint a biológiailag optimális, leginkább energiatakarékos érték hajszálpontosan a $0{,}2$ és $0{,}4$ közötti Strouhal-tartományban van.

### Példa

Mekkora egy $30\text{ cm}$ átmérőjű, hengeres villanyoszlop körül fújó, $36\text{ km/h}$ sebességű szélben a Reynolds-szám, a Strouhal-szám, és mekkora lesz az örvények által az oszlopra kifejtett periodikus erő frekvenciája?  
A levegő sűrűsége $20\text{ }^{\circ}\text{C}$-on $\rho = 1{,}204\text{ kg/m}^3$, dinamikus viszkozitása $\eta = 1{,}82 \cdot 10^{-5}\text{ Pa}\cdot\text{s}$

Váltsuk át a szélsebességet SI alapmértékegységre:

$$
u = 36\text{ km/h} = \frac{36\ 000\text{ m}}{3600\text{ s}} = 10\text{ m/s}
$$

A cső vagy az oszlop karakterisztikus mérete az átmérő: $d = 30\text{ cm} = 0{,}3\text{ m}$. Számítsuk ki az áramlásra jellemző globális Reynolds-számot:

$$
Re = \frac{\rho d u}{\eta} = \frac{1{,}204 \cdot 0{,}3 \cdot 10}{1{,}82 \cdot 10^{-5}} = 198\ 461
$$

Ez egy kifejezetten magas Reynolds-szám, de ha ránézünk a St(Re) diagramra, látható, hogy ez az érték még szigorúan a stabil fennsíkon belül helyezkedik el. Így a Strouhal-szám állandónak vehető:

$$
St \approx 0{,}21
$$

A Strouhal-szám definíciós egyenletéből fejezzük ki tiszta algebrával a keresett $f$ frekvenciát:

$$
f = \frac{St \cdot u}{d} = \frac{0{,}21 \cdot 10}{0{,}3} = 7{,}0\text{ Hz}
$$

Az oszlop mögött leváló örvények másodpercenként hétszer ($7\text{ Hz}$-es ütemben) fognak felváltva rángatást kifejteni a szerkezetre keresztirányban.

---

## Feladatok

1. Egy téli viharban a szélsebesség $u = 15\text{ m/s}$. A széllel szemben egy $d = 5\text{ mm}$ ($0{,}005\text{ m}$) átmérőjű, vékony réz távvezeték feszül. Feltételezzük, hogy az áramlás a grafikon szerinti stabil fennsíkon van, így a Strouhal-szám értéke $St = 0{,}21$. Milyen $f$ frekvenciájú (magasságú) hangon fog fütyülni a vezeték a szélben? Hallható ez a hang az emberi fül számára?

2. Egy gyártelepen egy kör keresztmetszetű, $d = 2\text{ m}$ átmérőjű fém kéményt építettek fel. A statikai mérések szerint a kémény szerkezetének saját rezgési frekvenciája (ami a legkönnyebben kilendíti) $f_{\text{saját}} = 3\text{ Hz}$ (másodpercenként három lengés). Az áramlás a stabil fennsíkon mozog ($St = 0{,}21$). Mekkora szélsebesség ($u$) esetén lép fel a rezonancia katasztrófa veszélye, vagyis mikor lesz az örvényleválás üteme pontosan egyenlő a kémény saját frekvenciájával? Számítsd ki ezt a kritikus szélsebességet $\text{km/h}$-ban is!

3. Egy bionikai kutatócsoport egy kisméretű cápa úszását vizsgálja egy áramlási csatornában. A cápa haladási sebessége a vízben $u = 2\text{ m/s}$. A mérések szerint a cápa farokúszójának magassága (ami az áramlást megzavaró akadály karakterisztikus mérete) $d = 10\text{ cm}$ ($0{,}1\text{ m}$). A videófelvételek elemzéséből megállapítják, hogy a cápa másodpercenként pontosan hatszor csap a farkával ($f = 6\text{ Hz}$). Határozd meg a cápa mozgására jellemző Strouhal-számot! A kapott érték alapján az állat mozgása a bionikailag leginkább energiatakarékos és optimális zónában van?

