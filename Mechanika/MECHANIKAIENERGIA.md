# A mechanikai energia

## Az energia fogalma

Láttuk, hogy a gyorsítási munka mozgási energia formájában, az emelési munka pedig helyzeti energia formájában tárolódik el. Gondolhatjuk, hogy a befektetett munkát vissza is nyerhetjük, akár teljes egészében, ha a veszteségek, pl. súrlódás elhanyagolhatóak. 

### Kísérletek

[Víz helyzeti energiájával hajtott kiskocsi](https://www.youtube.com/shorts/oQi9H1pqRLM)

[Fagolyók helyzeti energiája hajt gépet](https://www.youtube.com/shorts/PxiitGpbq2o)

A kísérletekből látszik, hogy csakugyan a helyzeti energia felhasználásával vissza lehet nyerni a befektetett munkát, vagy akár kinetikus energiát.

>**Az energia a testek munkavégző képessége. Jele E, egysége joule (J). A helyzeti energia és a mozgási energia a mechanikai energia különböző fajtái.**

A mechanikai energiából mindig 100%-ban visszanyerhető a befektetett munka, ha a veszteségek elhanyagolhatóak. Ez elméletben mindig elérhető.

## A mechanikai energia megmaradása

Tegyük fel, hogy a testre mozgása közben csak konzervatív erők hatnak. Az egyszerűség kedvéért hasson csak egy konzervatív erő a testre. Ekkor a munka, melyet a konzervatív erő végez a testen, nem más, mint a helyzeti energia csökkenése.

$$
W = -\Delta E_h
$$

Ha csak egy erő hat a testre, akkor ez az eredő erő, tehát munkája a gyorsítási munka, mely nem más, mint a mozgási energia növekedése.

$$
W = \Delta E_m
$$

Tehát amennyivel a helyzeti energia csökken, pontosan annyival nő a mozgási energia.

$$
-(E_h - E_{h,0}) = E_m - E_{m,0}
$$

$$
E_{h,0} - E_h = E_m - E_{m,0}
$$

$$
E_m + E_h = E_{m,0} + E_{h,0}
$$

$$
E_m + E_h = const.
$$

>**Ha egy rendszerben csak konzervatív erők hatnak, akkor a mechanikai energiája állandó. Ez a mechanikai energia megmaradásának tétele.**

Bár mi a tételt csak egy test esetére láttuk be, amikor a test csak egy konzervatív erő hatása alatt mozgott, a tétel teljesen általánosan érvényes és belátható.

Fontos, hogy nincsenek disszipatív erők, tehát súrlódás vagy közegellenállás a rendszerben. Olyan erők sincsenek, melyek energiát adnak, tehát nem löki meg valaki a testet például izomerejével stb. Az ilyen erők sem konzervatív erők. A kényszererő általában konzervatív, hisz merőleges a felületre, melyen a test mozogni tud, így munkája általában nulla.

### Kísérlet

[Walter Lewin demonstrálja a mechanikai energia megmaradását](https://www.youtube.com/watch?v=77ZF50ve6rs)

### Szimuláció

[Ingalengés](https://alexerdei73.github.io/physics-engine/project/#be74d75b-d4ef-49e0-ac4e-98ff80ff6a54)

A kísérlet és a szimuláció az ingalengéseket mutatja be, amelyeknél a mechanikai energia megmarad. Ha a légellenállás elhanyagolható és a kötélben sincs energiaveszteség, amely általában jó közelítés, a testre csak két erő hat. A konzervatív nehézségi erő és a szintén konzervatív kényszererő, mely a kötél irányába, tehát a sebességre minden pillanatban merőlegesen mutat. A kényszererő munkája ez esetben nulla, tehát a hozzá tartozó potenciális energia állandó, vagyis nullának vehető. Tehát csak a gravitációs potenciális energia és a mozgási energia összege a teljes mechanikai energia, mely állandó a mozgás során. Ez látható a szimuláció során, ahol a bal felső sarokban folyamatosan megjelenítjük ezeket a mennyiségeket.

### Példák
1. Egy $0,100 kg$ tömegű testet meglökünk a lejtő alján $5,00 \frac {m} {s}$ sebességgel. Mekkora a mozgási energiája? Mekkora a helyzeti energiája? A lejtő súrlódásmentes. Milyen magasra mehet fel a test? Mekkora ekkor a mozgási energiája? Mekkora ekkor a helyzeti energiája?

$$
E_{m,0} = \frac {mv_0^2} {2} = \frac {0,1 \times 5^2} {2} = 1,25 J
$$

A helyzeti energia a vonatkoztatási szinttől függ. Válasszuk $h_0 = 0$-t!

$$
E_{h,0} = mgh_0 = 0
$$

Minden pillanatban igaz, hogy:

$$
E_h + E_m = 1,25 J
$$

Ha a test felfelé mozog a lejtőn és nincs súrlódás, akkor egy pillanatra megáll, majd visszafordul. Tehát a maximális emelkedés akkor következik be, amikor a sebessége és mozgási energiája 0.

$$
mgh + 0 = 1,25 J
$$

$$
0,1 \times 9,81 \times h = 1,25
$$

$$
h = \frac {1,25} {0,1 \times 9,81} = 1,274 m 
$$

2. Egy $0,100 kg$ tömegű test egy $3,00 m$ hosszú kötél alján lóg, és meglökjük $5,00 \frac {m} {s}$ sebességgel. Milyen magasra emelkedik a kezdőpont felett? Mekkora kitérésnek felel ez meg? Az esetleges veszteségektől tekintsünk el.

Az első példában megadott gondolatmenetet alkalmazhatjuk itt is. Az adatok is azonosak. Az egyedüli különbség a mozgás pályájában van, hisz most köríven mozog a test, nem egy síkon felfelé, mint az előző példában. A kényszererő munkája persze itt is nulla, tehát nem kell potenciális energiát figyelembe vegyünk a kényszererő miatt. A magasságra itt is $1,274 m$-t kapunk. Mekkora az ehhez tartozó szög? Ez már geometriai feladat. A keresett szög, melyet a kötél a függőlegessel bezár a teljes kitérésnél, legyen $\alpha$. Ez egy derékszögű háromszög egyik szöge, melynek szög melletti befogója $R - h$, az átfogója pedig $R$, a körpálya sugara, tehát a kötél hossza.

$$
\cos \alpha = \frac {R - h} {R} = \frac {3 - 1,274} {3} = 0,5753
$$

$$
\alpha = 54,88^\circ
$$

## Az energia megmaradása

A mechanikai energia általános esetben nem marad meg. Láttuk például, hogy egy vízszintes felületen meglökött tégla csúszik, majd megáll a súrlódás következtében. A súrlódási erő disszipatív erő, felemészti a mozgási energiát, miközben a helyzeti energia nem változik, hisz a magasság állandó. A test megáll. Hova tűnik a mechanikai energia?

### Kísérlet

[Súrlódáskor fellépő felmelegedés](https://www.youtube.com/shorts/S_5KajI6LLg)

[Tűzgyújtás öngyújtó nélkül](https://www.youtube.com/shorts/6vPUwhWyMoA)

Ez sokáig rejtély volt a fizikában. Mára tudjuk, hogy a testeket atomi részecskék építik fel, melyek igen parányiak. Ezeket a részecskéket a szilárd testekben kötőerők tartják a helyükön, ahol rezgő mozgást végeznek. Ez a rendezetlen, közvetlenül meg nem figyelhető mozgás a hőmozgás. Annál nagyobb az atomi részecskék energiája, minél magasabb a test hőmérséklete. 

A súrlódási erő magyarázata, hogy a felületek egyenetlenségei mozgás közben kicsiny rezgésekhez vezetnek. Ezek a kicsiny rezgések, apró ütközések a felületi egyenetlenségek között felemésztik a megfigyelhető mechanikai energiát, de a testek hőmérséklete emelkedik a folyamat során. A hőmozgás erősödik, a testek belső energiája nő. A belső energia az atomi részecskék hőmozgásának mechanikai energiája. Kimutatható, hogy a belső energia és a megfigyelhető mechanikai energia összege a folyamatokban disszipatív erők jelenléte esetén is megmarad. Az energia tehát megmaradó mennyiség általános esetben is. A testek belső energiája, tehát az atomi részecskék hőmozgásához tartozó mechanikai energia, nem alakítható vissza megfigyelhető mechanikai energiává teljes egészében. A belső energia tehát nem használható fel 100%-ban veszteségmentes esetekben sem. A megfigyelhető mechanikai energia csökkenése a disszipatív erők munkája révén tehát egyirányú folyamat, mely önként nem fordul vissza a természetben makroszkopikus testek esetén.

>**Bár a mechanikai energia csökken disszipatív erők jelenléte esetén, a belső energia és a mechanikai energia összege már megmaradó mennyiség. A teljes energia tehát megmaradó mennyiség a fizikában, de a belső energia nem használható fel teljes egészében munkavégzésre. Emiatt a munkavégzésre felhasználható energia a természetes folyamatokban mindig csökken.**

### Példa
Egy autó gázadással gyorsít vízszintes úton. A mozgási energiája nő, helyzeti energiája nem változik. Hogy lehet ez, hisz disszipatív erők is fellépnek, például a légellenállás és a súrlódás?

A magyarázat az, hogy a gázadáskor a motorba üzemanyag és levegő keveréke kerül, mely a motorban elég. Ezért hívjuk az autók motorját belső égésű motornak, hiszen az üzemanyag a motor belsejében ég el. Égéskor az anyagok belső energiája csökken, és ennek egy része mechanikai energia formájában jelenik meg. A motor melegszik, és ez energiaveszteség, hisz nem a mechanikai energiát növeli, hanem az égéstermékek belső energiáját, tehát végső soron az autó környezetét melegíti. A felhasználható energia csökken a folyamatban az üzemanyag mennyiségével együtt, hisz a környezet melegedése elkerülhetetlen. Az üzemanyag belső energiájának csökkenése tehát csak részben fordítódik a mechanikai energia növelésére, tehát 100%-ban nem hasznosítható. Ezekkel a kérdésekkel, illetve a belső égésű motorokkal a hőtan vagy termodinamika foglalkozik részletesen. 

Az autó nyílt rendszer, az égéstermékek is eltávoznak, és energia is távozik hő és munkavégzés formájában is. Ha összeadjuk a felhasznált üzemanyag és levegő belső energiáját és az autó kezdeti mechanikai energiáját, pontosan ugyanannyit kapunk, mintha összeadjuk az égéstermékek belső energiáját, a leadott hőenergiát, valamint a környezeten végzett munkát és a megnövekedett mechanikai energiát. Az energia tehát nem változik az autó gyorsítása során. A mechanikai energia ugyan nő, de az elégetett üzemanyaggal jelentősen csökken a rendelkezésre álló felhasználható energia mennyisége. A felhasználható energia a folyamatban csökken, az energia jelentős része a környezetet melegíti, és ez veszteséget jelent az energiafelhasználás szempontjából, amely elkerülhetetlen.

## Az örökmozgó lehetetlensége

A történelem során sokan próbáltak készíteni örökmozgót. Ez olyan mechanikus (vagy elektromos) szerkezet, melyben semmilyen energiaveszteség nem lép fel, tehát a mozgását lényegében örökké képes folytatni. Ilyet nyilván nem lehet építeni, hisz disszipatív erők mindig vannak, bármennyire ügyesen is csökkentjük ezeket. Olyan gépet végképp nem lehet építeni, mely még felhasználható energiát is termel mozgása során, minden ezzel összefüggő egyéb változás nélkül. Sokáig és sokan próbálkoztak ezzel, és szélhámosok is akadtak bőven, de mindig kiderült a csalás alapos vizsgálat után.

### Kísérlet

[Örökmozgó gép elektromos hajtással](https://www.youtube.com/watch?v=r_LG8FDt51U)

[Mechanikus örökmozgó hamisítvány videó](https://www.youtube.com/watch?v=nGBGPiqzeNk)

## Feladatok

1. Egy 0,5 kg tömegű testet 20 m magasból szabadon ejtünk. Mekkora a test helyzeti energiája a kiindulási pontban, és mekkora a mozgási energiája a talajra érkezés pillanatában, ha a közegellenállástól eltekintünk?
2. Egy súrlódásmentes, 10 m hosszú és 5 m magas lejtő tetejéről elengedünk egy 2 kg tömegű golyót. Mekkora lesz a golyó mozgási energiája és sebessége a lejtő alján?
3. Mekkora kezdősebességgel kell függőlegesen felfelé dobni egy 0,2 kg tömegű követ, hogy az 15 méter magasra emelkedjen? Alkalmazd a mechanikai energia megmaradásának tételét!
4. Egy fonálinga hossza 2 m, a végén lévő test tömege 0,5 kg. A testet olyan magasságba húzzuk ki, hogy a kötél vízszintes legyen, majd elengedjük. Mekkora lesz a test sebessége a pálya legalsó pontján?
5. Egy 1000 kg tömegű autó 72 km/h sebességgel halad vízszintes úton, majd üresbe téve a sebességváltót, gurulni kezd. Egy emelkedőhöz érve a motor segítsége nélkül milyen magasra fut fel az autó, ha a súrlódási veszteségeket elhanyagoljuk?