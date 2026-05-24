# A mechanikai energia

## Az energia fogalma

Láttuk, hogy a testen végzett gyorsítási munka mozgási energia formájában, az emelési munka pedig helyzeti energia formájában tárolódik el a fizikai rendszerben. Ebből arra következtethetünk, hogy a rendszerbe befektetett mechanikai munkát később vissza is nyerhetjük – akár teljes egészében is –, feltéve, hogy a mozgást gátló súrlódási és közegellenállási veszteségek elhanyagolhatók.

### Kísérletek
[Víz helyzeti energiájával hajtott kiskocsi (Rövid videó)](https://www.youtube.com/shorts/oQi9H1pqRLM)

[Fagolyók helyzeti energiája hajtja a mechanikus gépet (Rövid videó)](https://www.youtube.com/shorts/PxiitGpbq2o)

A kísérletek látványosan bizonyítják, hogy a testek felhalmozott helyzeti energiájának célzott felhasználásával a korábban befektetett munka visszanyerhető, és közvetlenül hasznos mechanikai munkává vagy mozgási energiává alakítható.

> **Az energia a testek munkavégző képességét megadó fizikai állapotjelző. Jele: $E$, alapvető SI-mértékegysége a joule (J). A helyzeti (potenciális) energia és a mozgási (kinetikus) energia a mechanikai energia különböző megjelenési formái.**

Ideális, veszteségmentes rendszerekben a mechanikai energiából elméletileg mindig $100\%$-ban visszanyerhető a befektetett munka.

## A mechanikai energia megmaradása

Tegyük fel, hogy egy testre a mozgása során kizárólag konzervatív erők hatnak! Az egyszerűség kedvéért tételezzük fel, hogy a testre csupán egyetlen ilyen konzervatív erő fejt ki hatást. Ebben az esetben az ezen erő által végzett munka nem más, mint a test helyzeti energiájának a csökkenése:

$$
W = -\Delta E_h
$$

Mivel a modellünkben ez az egyetlen ható erő, ez képezi a testre ható eredő erőt is, így a munkatétel értelmében a munkája egyenlő a test mozgási energiájának növekedésével:

$$
W = \Delta E_m
$$

A két egyenlet összevetéséből jól látszik, hogy amennyivel csökken a test helyzeti energiája, pontosan ugyanakkora mértékben növekszik meg a mozgási energiája:

$$
-(E_h - E_{h,0}) = E_m - E_{m,0}
$$

$$
E_{h,0} - E_h = E_m - E_{m,0}
$$

Rendezve az egyenletet úgy, hogy a kezdeti ($0$ indexű) állapotok az egyik, a végső állapotok pedig a másik oldalra kerüljenek:

$$
E_m + E_h = E_{m,0} + E_{h,0}
$$

Ebből következik, hogy a két energiafajta összege a mozgás során mindvégig állandó marad:

$$
E_m + E_h = \text{const.}
$$

> **Ha egy zárt mechanikai rendszerben kizárólag konzervatív erők végeznek munkát, akkor a rendszer teljes mechanikai energiája (a mozgási és a helyzeti energia összege) időben állandó. Ez a mechanikai energia megmaradásának tétele.**

Bár a tételt a fenti levezetésben csak egyetlen test és egyetlen ható erő egyszerűsített esetére mutattuk meg, a törvény teljesen általánosan, összetett rendszerekre is érvényes és egzakt módon belátható.

A megmaradási törvény alkalmazásakor szigorú feltétel, hogy a rendszerben ne lépjenek fel disszipatív (energiaveszteséget okozó) erők, mint a súrlódás vagy a légellenállás. Ugyancsak feltétel, hogy külső, nem konzervatív erők se módosítsák a rendszert (például egy külső személy ne lökje meg a testet az izomerejével). A felületek által kifejtett kényszererők munkája a mozgás során általában nulla, mivel merőlegesek az elmozdulásra, így a megmaradást nem sértik.

### Kísérlet
[Walter Lewin professzor híres ingakísérlete a mechanikai energia megmaradására (MIT)](https://www.youtube.com/watch?v=77ZF50ve6rs)

Walter Lewin professzor az előadásában egy monumentális ingát használ a tétel demonstrálására: egy mennyezetre függesztett, $15\text{ kg}$ tömegű nehéz acélgolyót emel fel pontosan $1\text{ m}$ magasságba. Ezzel nagyjából $150\text{ J}$ helyzeti energiát fektet be a rendszerbe. Ez az energia bőségesen elegendő lenne ahhoz, hogy a golyó elengedése után bezúzza az ember állkapcsát. 

A professzor az állát szorosan a falhoz és a golyóhoz szorítja, majd kezdősebesség nélkül (nyugalmából) elengedi a nehéz ingát. Az inga elsuhan, a pálya alján a helyzeti energiája teljesen mozgási energiává alakul, majd a túloldalon visszaalakul helyzeti energiává. Amikor a golyó visszalendül a professzor arca felé, a mechanikai energia megmaradásának törvénye miatt **nem képes magasabbra emelkedni, mint ahonnan elindult**. A golyó megáll, és éppen csak megérinti a professzor állát, bizonyítva, hogy a fizika törvényei hibátlanul működnek.

### Szimuláció
[Ingalengés fizikai modellezése interaktív szimulátor](https://alexerdei73.github.io/physics-engine/project/#be74d75b-d4ef-49e0-ac4e-98ff80ff6a54)

Mind a kísérlet, mind az interaktív szimuláció az ingamozgást modellezi, amelynél a mechanikai energia megmarad. Ha a levegő közegellenállása és a felfüggesztési pont súrlódása elhanyagolható, a testre csupán két erő hat: a konzervatív nehézségi erő, valamint a kötél által kifejtett $K$ kényszererő. Mivel a kötélerő a körpálya sugarának irányába, azaz a test pillanatnyi elmozdulására minden pontban merőlegesen hat, a munkája nulla ($W_K = 0$). Így a rendszerben egyedül a gravitációs helyzeti energia és a kinetikus mozgási energia összege adja a teljes mechanikai energiát, amely a mozgás során végig konstans marad. Ez kiválóan nyomon követhető a szimuláció futtatásakor, ahol a bal felső sarokban a szoftver folyamatosan grafikonon ábrázolja és számszerűsíti ezeket az energiaértékeket.

### Példák

1. Egy $0{,}100\text{ kg}$ tömegű testet meglökünk egy súrlódásmentes lejtő alján $5{,}00\text{ }\frac{\text{m}}{\text{s}}$ kezdősebességgel. Mekkora a mozgási energiája és a helyzeti energiája a kiindulópontban? Milyen magasra képes feljutni a test a lejtőn? Mekkora a mozgási és a helyzeti energiája a pálya legfelső pontján? A nehézségi gyorsulás értéke $g = 9{,}81\text{ }\frac{\text{m}}{\text{s}^2}$.

A test kezdeti mozgási energiája:

$$
E_{m,0} = \frac {m \cdot v_0^2} {2} = \frac {0{,}1\text{ kg} \cdot 5^2} {2} = 1{,}25\text{ J}
$$

A helyzeti energia számszerű értéke a vonatkoztatási szint megválasztásától függ. Vegyük a lejtő alját nullaszintnek ($h_0 = 0\text{ m}$):

$$
E_{h,0} = m \cdot g \cdot h_0 = 0\text{ J}
$$

Mivel a felület súrlódásmentes és más disszipatív erő nem hat, a mechanikai energia megmaradásának tétele értelmében a mozgás minden további pillanatában igaz, hogy az energiák összege állandó:

$$
E_h + E_m = 1{,}25\text{ J}
$$

Ahogy a test halad felfelé a lejtőn, a gravitáció folyamatosan lassítja, amíg a sebessége egy pillanatra nullává nem válik, majd visszafordul. A maximális emelkedési magasságot ($h$) tehát pontosan abban a pillanatban éri el, amikor a pillanatnyi sebessége, és ezáltal a mozgási energiája is nullára csökken ($E_m = 0\text{ J}$). A tetőponton a teljes kezdeti energia helyzeti energiává alakul:

$$
m \cdot g \cdot h + 0 = 1{,}25\text{ J}
$$

$$
0{,}1 \cdot 9{,}81 \cdot h = 1{,}25
$$

$$
h = \frac {1{,}25} {0{,}1 \cdot 9{,}81} \approx 1{,}274\text{ m} 
$$

A test kerekítve $1{,}27\text{ m}$ függőleges magasságig képes feljutni. Ezen a legfelső ponton a mozgási energiája $0\text{ J}$, a helyzeti energiája pedig $1{,}25\text{ J}$.

2. Egy $0{,}100\text{ kg}$ tömegű testet egy $3{,}00\text{ m}$ hosszú elhanyagolható tömegű fonal végére akasztunk (matematikai inga), majd a függőleges helyzetből meglökjük $5{,}00\text{ }\frac{\text{m}}{\text{s}}$ kezdősebességgel. Milyen magasra emelkedik a test a kezdőpont szintje felett, és mekkora szögkitérésnek felel ez meg a pálya végpontján? Az esetleges súrlódási veszteségektől eltekinthetünk.

Vegyük észre, hogy a kiindulási adatok számszerűen teljesen megegyeznek az 1. példa adataival. Mivel a fonalat feszítő $K$ kényszererő a körpálya sugarának irányába mutat, így az elmozdulásra minden pillanatban merőleges, vagyis mechanikai munkát nem végez ($W_K = 0\text{ J}$). A rendszerben egyedül a konzervatív nehézségi erő végez munkát, így a mozgás pályájától (legyen az egyenes lejtő vagy körív) teljesen függetlenül a mechanikai energia megmaradásának tétele itt is érvényes.

A test maximális függőleges emelkedési magasságára a korábbi energiamegmaradás alapján hajszálpontosan ugyanúgy $h = 1{,}274\text{ m}$-t kapunk.

Annak meghatározása, hogy mekkora szögkitérés tartozik ehhez a magassághoz, már egy tiszta geometriai feladat. Jelöljük az inga függőlegessel bezárt maximális szögét $\alpha$-val! A kitérés pillanatában a szál hossza ($R = 3\text{ m}$) alkotja az átfogót, a függőleges vetület hossza ($R - h$) pedig a szög melletti befogót. A koszinusz függvény definíciója alapján:

$$
\cos \alpha = \frac {R - h} {r_b} = \frac {R - h} {R} = \frac {3 - 1{,}274} {3} = \frac{1{,}726}{3} \approx 0{,}5753
$$

$$
\alpha \approx 54{,}88^\circ
$$

A maximális szögkitérés értéke három értékes jegyre kerekítve $54{,}9^\circ$.

---

## Az energia megmaradásának általános törvénye

A tiszta mechanikai energia a valóságos, mindennapi folyamatok során nem marad meg. Tapasztalatból tudjuk, hogy egy vízszintes asztallapon meglökött tégla a csúszás során egyenletesen lassul, majd teljesen megáll. Mivel a magassága nem változott, a helyzeti energiája állandó maradt, a mozgási energiája viszont teljesen eltűnt. Hová lett a test mechanikai energiája?

### Kísérletek
[Súrlódás és mechanikai munka hatására fellépő intenzív felmelegedés (Rövid videó)](https://www.youtube.com/shorts/S_5KajI6LLg)

[Tűzgyújtás mechanikus dörzsöléssel, öngyújtó nélkül (Rövid videó)](https://www.youtube.com/shorts/6vPUwhWyMoA)

Ez a kérdés évszázadokon át komoly rejtélyt jelentett a fizikusok számára. Ma már tudjuk, hogy a makroszkopikus testeket mikroszkopikus méretű atomok és molekulák építik fel. Ezek a részecskék a szilárd anyagokon belül folyamatos, rendezetlen rezgő mozgást végeznek, amelyet **hőmozgásnak** nevezünk. Minél magasabb egy test hőmérséklete, az atomjai annál nagyobb energiával rezegnek.

Amikor két felület egymáson elcsúszik, a mikroszkopikus felületi egyenetlenségek folyamatosan egymásnak ütköznek és beakadnak. Ezek az apró ütközések a makroszkopikusan látható mechanikai energiát felmorzsolják, és közvetlenül átadják az atomoknak, felerősítve azok rendezetlen rezgését. Ennek következtében a testek hőmérséklete megemelkedik. A makroszkopikus mechanikai energia tehát nem veszett el, hanem mikroszkopikus mechanikai energiává, azaz a test **belső energiájává** alakult át.

Gondos mérésekkel kimutatható, hogy a testek makroszkopikus mechanikai energiájának és belső energiájának összege a zárt folyamatokban a disszipatív erők jelenléte ellenére is szigorúan állandó marad. Az energia tehát a legáltalánosabb esetben is megmaradó mennyiség. Létezik azonban egy alapvető korlát: az atomok kaotikus, rendezetlen hőmozgásának energiája makroszkopikus testek esetén természetes úton soha nem képes magától visszaalakulni rendezett, egyirányú mechanikai mozgássá. A disszipatív erők által végzett munka tehát egyirányú (irreverzibilis) energiaátalakulást jelent, amely a természetben önként soha nem fordul meg.

> **Bár a megfigyelhető mechanikai energia csökken a disszipatív erők (súrlódás, közegellenállás) hatására, a mechanikai energia és a belső energia összege változatlan marad. A teljes energia a fizikában egy szigorúan megmaradó mennyiség. Mivel azonban a belső energia közvetlenül nem alakítható vissza teljes egészében hasznos mechanikai munkává, a munkavégzésre szabadon felhasználható energia mennyisége a valóságos folyamatokban folyamatosan csökken.**

### Példa
Egy gépkocsi gázadással felgyorsít egy teljesen vízszintes útszakaszon. A mozgási energiája látványosan megnövekszik, a magassága és a helyzeti energiája viszont változatlan marad. Hogyan lehetséges ez, ha a mozgást ráadásul disszipatív erők (légellenállás, gördülési súrlódás) is gátolják?

A magyarázat a gépkocsi motorjában lejátszódó kémiai folyamatban rejlik. Gázadáskor a belső égésű motor hengereibe üzemanyag és levegő keveréke kerül, amely ott robbanásszerűen elég. Az égési kémiai reakció során az anyagok belső energiája lecsökken, és ennek egy része alakul át rendezett mechanikai munkává, amely forgatni kezdi a kerekeket. A folyamat hatásfoka azonban nem $100\%$-os: a felszabaduló kémiai energia jelentős része a motor felmelegedésére és a forró kipufogógázok belső energiájának növelésére fordítódik, vagyis elkerülhetetlen veszteségként a környezetet fűti. Ezzel a kérdéskörrel a fizika **hőtan (termodinamika)** nevű ága foglalkozik részletesen.

Az autó egy nyílt rendszert képez: tömeg (üzemanyag, égéstermékek) és energia (hő és munka) is átlépi a határait. Ha mérleget készítünk, a felhasznált üzemanyag kémiai belső energiájának és az autó kezdeti mechanikai energiájának összege hajszálpontosan megegyezik a keletkező égéstermékek belső energiájának, a hűtővíz és a környezet felé leadott hőnek, a menetellenállások ellenében végzett munkának, valamint az autó megnövekedett mozgási energiájának az összegével. A teljes energia tehát itt is megmarad, de a folyamat végére a szabadon felhasználható, értékes energia mennyisége az üzemanyag elégetésével véglegesen lecsökkent.

---

## A perpetuum mobile (örökmozgó) lehetetlensége

A fizika története során a feltalálók és amatőr kutatók évszázadokon át próbáltak megépíteni egy olyan szerkezetet, amelyet **perpetuum mobile**-nak, azaz örökmozgónak neveznek. Az elsőfajú örökmozgó olyan gép lenne, amely külső energia betáplálása nélkül, a semmiből képes lenne folyamatosan hasznos mechanikai munkát végezni, vagyis megsértené az energia megmaradásának egyetemes törvényét. A tudomány mai állása szerint ilyen gépet építeni kategorikusan **lehetetlen**, mivel a természetben disszipatív erők (csapágyak súrlódása, levegő ellenállása) mindig jelen vannak, így külső táplálás nélkül minden mechanikus rendszer előbb-utóbb megáll. 

Ennek ellenére az interneten ma is számtalan olyan videó kering, amely működő „ingyenenergia-gépeket” mutat be. Alapos fizikai és mérnöki vizsgálattal azonban ezekről a szerkezetekről kivétel nélkül mindig bebizonyosodik, hogy ügyes csalások vagy illúziók.

### Kísérleti leleplezések
[A guruló golyós „örökmozgó” gép valós működése és belső elektronikája (Steve Mould)](https://www.youtube.com/watch?v=r_LG8FDt51U)

[A rugós-lendkerekes „ingyenenergia” motor működése és a csalás bemutatása](https://www.youtube.com/watch?v=nGBGPiqzeNk)

A bemutatott videók lerántják a leplet a legnépszerűbb örökmozgó-illúziókról:
1. Steve Mould bemutatja az egyik legelterjedtebb asztali „örökmozgót”, amelyben egy acélgolyó egy rámpáról legurulva látszólag magától visszaugrik a felső tölcsérbe. Ha a talpat átlátszó akrilra cseréljük, azonnal láthatóvá válik a mérnöki trükk: a gép talpába egy **induktív közelségérzékelő** és egy **rejtett elektromágnes** van beépítve, amelyet nagyteljesítményű kondenzátorok és akkumulátorok táplálnak. Amikor a golyó elgurul a rejtett szenzor felett, az áramkör $10\text{ ezredmásodpercre}$ bekapcsolja a mágnest, amely hirtelen meglöki a golyót, pont annyi mozgási energiát adva neki, amennyit a súrlódás miatt elveszített. Energia a semmiből itt sincs: a gép addig működik, amíg a beépített telepek le nem merülnek.
2. A második videóban egy olyan rugós-főtengelyes motort láthatunk, amely megpörgetés után látszólag a feszülő rugók hatására magától pörög tovább, sőt egy generátort hajtva működtet egy LED lámpát. A készítő őszinte leleplezéséből kiderül, hogy a videó képkivágásán kívül eső részen egy **nagyteljesítményű légbefúvó (kompresszor)** működik. A rejtett fúvóka nagysebességű levegősugarat fúj a lendkerék speciálisan kialakított barázdáira, és ez a rejtett pneumatikus meghajtás forgatja a gépet. A működési hangot pedig utólagosan, egy kézzel megpörgetett motor halk hangjával keverték alá, hogy elnyomják a kompresszor hangos füstölését és zaját.

---

## Feladatok

**1. Szabadon eső test energiái**
Egy $0{,}500\text{ kg}$ tömegű testet $20{,}0\text{ m}$ magasságból szabadon ejtünk le függőlegesen. Mekkora a test gravitációs helyzeti energiája a kiindulási pontban, és mekkora lesz a mozgási energiája a talajra érkezés szent pillanatában, ha a levegő közegellenállását elhanyagolhatónak tekintjük? (A vonatkoztatási szint a talaj felszíne legyen!)

**2. Golyó lecsúszása a lejtőn**
Egy tökéletesen súrlódásmentes, $10{,}0\text{ m}$ hosszú és $5{,}00\text{ m}$ magas lejtő tetejéről álló helyzetből elengedünk egy $2{,}00\text{ kg}$ tömegű golyót. Mekkora lesz a golyó mozgási energiája és a sebességének nagysága, amikor eléri a lejtő alját?

**3. Kő függőleges felhajítása**
Mekkora kezdősebességgel kell függőlegesen felfelé elhajtanunk egy $0{,}200\text{ kg}$ tömegű követ a talajszintről, hogy az pontosan $15{,}0\text{ méter}$ magasságig emelkedjen fel? Alkalmazd a mechanikai energia megmaradásának tételét! (A légellenállás elhanyagolható).

**4. Inga elengedése vízszintes helyzetből**
Egy fonálinga hossza $2{,}00\text{ m}$, a végére rögzített kisméretű test tömege $0{,}500\text{ kg}$. A testet olyan magasságba húzzuk ki oldalra, hogy a tartófonál teljesen vízszintes legyen, majd kezdősebesség nélkül elengedjük. Mekkora lesz a test pillanatnyi sebessége a körpálya legalsó pontján való áthaladáskor?

**5. Autó kigurulása az emelkedőn**
Egy $1000\text{ kg}$ tömegű gépkocsi $72{,}0\text{ km/h}$ sebességgel halad egy egyenes, vízszintes úton, majd a vezető üresbe teszi a sebességváltót, és lekapcsolja a motort. Az autó egy emelkedőhöz érve gurulni kezd felfelé. Milyen függőleges magasságig képes felfutni a jármű a lejtőn a motor segítsége nélkül, ha a súrlódási és gördülési veszteségeket elhanyagolhatónak tekintjük?
