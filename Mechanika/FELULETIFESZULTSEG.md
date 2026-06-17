# A felületi feszültség

## Potenciális energia minimuma mechanikai egyensúlyban

Amikor az energiával foglalkoztunk, láttuk, hogy általános esetben a munkavégzésre fordítható energia a természeti folyamatokban csökken, ameddig be nem következik az egyensúlyi állapot, amely időben állandó. Ilyenkor tehát a munkavégzésre fordítható energia minimális. Mechanikai rendszerek esetében ez annyit jelent, hogy a mozgási energia nulla, és a potenciális energia felveszi az adott körülmények közt legkisebb értékét, amely egy úgynevezett lokális minimum. 

A lokális minimum itt pusztán annyit jelent, hogy ha a rendszert az egyensúlyi helyzetből csupán kissé mozdítjuk ki, a potenciális energia mindig nő. Ha azonban nagymértékben mozdítjuk ki a rendszert, találhatunk olyan helyzetet, amelyben a potenciális energia még kisebb, hiszen több lokális minimum is létezhet, különböző minimális energiákkal a rendszer különböző pozícióiban.

> **Mechanikai rendszerek stabil egyensúlyi helyzetében a potenciális energiájuknak lokális minimuma van.**

### Példák
1. Egy labda szabadon gurulhat egy görbült felületen, ahol két völgy és több domborulat is található. Az egyik völgy mélyebben helyezkedik el, mint a másik. Ekkor a labda helyzeti energiája a mélyebb völgyben abszolút értelemben minimális, de mindkét völgypontban lokálisan minimális. Tehát mindkét völgypont lokális minimum, és mindkettőben stabil egyensúlyban van a labda.
2. Folyadékok egyensúlya is akkor következik be, amikor a folyadék helyzeti energiája minimális.

Legyen például egy közlekedőedény két szárának keresztmetszete $A_1$ és $A_2$, a folyadék össztérfogata $V$, illetve sűrűsége $\rho$. Ekkor a teljes helyzeti energiát a szárakban lévő folyadékoszlopok tömegközéppontjának magasságával ($\frac{h}{2}$) írhatjuk fel:

$$E_h = E_{h,1} + E_{h,2} = m_1 g \frac {h_1} 2 + m_2 g \frac {h_2} 2$$

Mivel a tömegek a sűrűség, a keresztmetszet és a magasság szorzatai:

$$m_1 = \rho A_1 h_1 \quad \text{és} \quad m_2 = \rho A_2 h_2$$

A folyadék össztérfogata a folyamat során állandó:

$$V = A_1 h_1 + A_2 h_2 \implies h_2 = \frac {V - A_1 h_1} {A_2}$$

Írjuk fel a teljes helyzeti energiát a $h_1$ magasság függvényeként:

$$E_h = \frac 1 2 \rho g \left( A_1 h_1^2 + A_2 h_2^2 \right)$$

Nézzük meg külön a zárójeles kifejezést a $h_2$ behelyettesítése után:

$$A_1 h_1^2 + A_2 \frac{(V - A_1 h_1)^2} {A_2^2} = A_1 h_1^2 + \frac {A_1^2 h_1^2 - 2 V A_1 h_1 + V^2} {A_2} = \left( A_1 + \frac{A_1^2}{A_2} \right) h_1^2 - \left( \frac{2 V A_1}{A_2} \right) h_1 + \frac{V^2}{A_2}$$

Ez egy $f(h_1) = a h_1^2 + b h_1 + c$ alakú másodfokú polinom, amelynek minimumhelye az $h_{\text{1,min}} = - \frac b {2a}$ összefüggés alapján határozható meg. 

Itt a kifejezésünk együtthatói:

$$a = A_1 + \frac {A_1^2} {A_2}$$
$$b = - \frac {2 V A_1} {A_2}$$

Behelyettesítve a minimumhely képletébe:

$$h_{1,\text{min}} = -\frac b {2a} = \frac{\frac {2 V A_1} {A_2}}{2 \left( A_1 + \frac{A_1^2}{A_2} \right)} = \frac{\frac {V A_1} {A_2}}{\frac{A_1 A_2 + A_1^2}{A_2}} = \frac{V A_1}{A_1 A_2 + A_1^2} = \frac {V} {A_1 + A_2}$$

Nem maradt más hátra, mint belátni, hogy az edény két szárában a folyadék ugyanabban a magasságban áll egyensúlyban, vagyis $h_{2,\text{min}} = h_{1,\text{min}}$.

Valóban:

$$h_{2,\text{min}} = \frac {V - A_1 h_{1,\text{min}}} {A_2} = \frac {V - \frac {V A_1} {A_1 + A_2}} {A_2} = \frac {\frac{V(A_1 + A_2) - V A_1}{A_1 + A_2}} {A_2} = \frac {\frac{V A_2}{A_1 + A_2}} {A_2} = \frac {V} {A_1 + A_2}$$

Tehát megállapíthatjuk, hogy a közlekedőedény száraiban a folyadék helyzeti energiája akkor minimális, amikor a folyadék mindkét szárban egyforma magasságban áll. Ez valóban az egyensúlyi állapot ebben a rendszerben.

---

## A felületi feszültség

### Kísérletek

* [Víz viselkedése az űrállomáson](https://www.youtube.com/watch?v=H_qPWZbxFl8)
* [Szappanhártya feszítőereje](https://www.youtube.com/shorts/iKmm7GZ7G_0)

Az első kísérletben a víz az űrállomáson, egyensúlyi állapotban gömb alakot vesz fel. Amíg az egyensúly be nem áll, addig természetesen a víz felszíne vibrál, és így a gömb folyamatos rezgésben van. Azt is megfigyelhetjük, hogy a jelenség olyan, mintha a víz felszínén (a víz-levegő határfelületen) egy rugalmas hártya helyezkedne el. A kialakult rendszer stabil, mivel a gravitáció elhanyagolható, így a folyadék szabadon lebeg a súlytalanság állapotában.

A második kísérletet szappanhártyával végezzük, amely földi körülmények közt is sokkal stabilabb, mint a tiszta víz felszínén kialakuló hártya. Ennek a stabilitásnak az oka a szappanoldat kémiájában van: a vízmolekulák a film belsejében, míg a szappanmolekulák az oldat-levegő határfelületen helyezkednek el. A molekuláknak ez az elrendeződése stabilizálja a vékony szappanhártyát úgy, hogy az akár jelentősen meg is nyújtható vagy össze is húzódhat.

Fizikai szempontból a legfontosabb, hogy az ilyen határfelületi hártyák a felülettel érintőirányú erőt fejtenek ki. Ennek az erőnek tulajdonítható, hogy a mozgatható drót, amelyet a szappanhártya határol, gyorsulva indul el befelé, amint a mozgása lehetővé válik.

Miért éppen gömb alakot vesz fel a víz, miközben lebeg az űrállomáson? Miért gömb alakú a szappanhártya, amikor szappanbuborékot formál? Ennek az oka a fent említett érintőirányú összehúzó erő, amelyet felületi feszültségnek nevezünk.

> **A felületi feszültség az a fizikai mennyiség, amely megmutatja, hogy a folyadékhártyában mekkora erő lép fel a hártya egységnyi hossza mentén, a hártya érintőjének irányában. Jele: $\alpha$, mértékegysége: N/m.**

---

## A felületi energia

A szappanhártyás kísérletben a mozgatható drótot a szappanhártya mindkét oldalról közrefogja, így valójában két folyadék-levegő határfelület (két hártya) fejti ki a feszítőerőt. Ha a drót hossza $L$, akkor a drótot húzó teljes erő:

$$F = \alpha \cdot 2L$$

Itt $\alpha$ az oldat felületi feszültsége. Mi történik, ha a drótot egy külső, ellentétes irányú erőt alkalmazva elmozdítjuk $\Delta s$ távolsággal úgy, hogy a szappanhártya felülete növekedjen? Ekkor a külső erő munkát végez, amely növeli a hártya energiáját. A felület növeléséhez tehát munka szükséges, míg a felület csökkenésekor energia szabadul fel (például mozgási energiává alakulva felgyorsítja a szabadon hagyott drótot). Ezt az energiát felületi energiának nevezzük:

$$\Delta E_{\text{felületi}} = W = F \cdot \Delta s = \alpha \cdot 2L \cdot \Delta s = \alpha \cdot \Delta A$$

Ahol $\Delta A = 2 \cdot L \cdot \Delta s$ a hártya kétoldali teljes felületváltozása.

> **A folyadékok felszíne úgynevezett felületi energiával rendelkezik, amely egyenesen arányos a felület nagyságával. A felületi feszültség ($\alpha$) számszerűen megmutatja, hogy mennyi munka szükséges az egységnyi új folyadékfelület létrehozásához.**

### A felületi energia mikroszkopikus magyarázata
A folyadék belsejében elhelyezkedő részecskét minden irányból homogén módon veszik körül a szomszédos folyadékrészecskék, így a köztük fellépő vonzó kohéziós erők minden irányból érik, eredőjük nulla.

Ezzel szemben a folyadék felszínén lévő molekulára csak a folyadék belseje felől hatnak erős vonzóerők (mivel a gázfázisú levegő molekulái elszórtan vannak és alig vonzzák). Emiatt a felszíni molekulák kölcsönhatási energiája kevésbé negatív, mint a belsőké. Egy molekulát a folyadék belsejéből a felszínre hozni tehát csak külső munka (energia befektetése) árán lehet. Ennek a mikroszkopikus jelenségnek a makroszkopikus megnyilvánulása a felületi feszültség és a felületi energia.

Most már könnyen megválaszolhatjuk a kérdéseinket. A szabadon lebegő vízcsepp és a szappanbuborék azért vesz fel gömb alakot, mert ezekben az esetekben a gravitáció hatása elhanyagolható. A rendszer teljes potenciális energiáját a felületi energia adja. 

A mechanikai rendszerek az egyensúlyra törekedve igyekeznek minimalizálni a potenciális energiájukat, ami jelen esetben a folyadékfelület minimalizálását jelenti. Mivel adott térfogat mellett a **gömb geometriai formájának a legkisebb a felülete**, a folyadékok egyensúlyi állapotban automatikusan ezt a formát veszik fel.

### Kísérletek

* [Szappanhártyák minimálfelületei](https://www.youtube.com/watch?v=Yg0TPid2Yt4&t=28m35s)

## Példák

1. Két különböző méretű szappanbuborékot egy csappal elzárt csővel kötünk össze. Az egyik buborék sugara $R = 2\text{ cm}$, a másiké $r = 1\text{ cm}$. Ha a csapot kinyitjuk, a levegő a kisebb buborékból a nagyobb felé áramlik (a kicsi még kisebb lesz, a nagy tovább nő), amíg a kisebb teljesen be nem olvad a nagyobbikba. Igazold matematikailag, hogy a folyamat során a hártyák teljes felülete valóban csökken! (A bezárt levegő össztérfogatát a minimális nyomásváltozás miatt tekintsük állandónak.)

A buborékok gömb alakúak. Egy $R$ sugarú gömb felülete $A = 4\pi R^2$, térfogata $V = \frac{4}{3}\pi R^3$. 
Mivel a szappanhártyának külső és belső felülete is van, a tényleges folyadék-levegő határfelület a geometriai felület kétszerese ($8\pi R^2$).

A buborékok sugarai: $R_1 = 2\text{ cm} = 0,02\text{ m}$ és $r_1 = 1\text{ cm} = 0,01\text{ m}$.
A rendszer kezdeti össztérfogata ($V_{\text{összes}}$):

$$V_{\text{összes}} = \frac{4}{3}\pi R_1^3 + \frac{4}{3}\pi r_1^3 = \frac{4}{3}\pi (2^3 + 1^3) = \frac{4}{3}\pi \cdot 9 = 12\pi\text{ cm}^3$$

A rendszer kezdeti hártyafelülete ($A_{\text{kezdeti}}$):

$$A_{\text{kezdeti}} = 2 \cdot \left( 4\pi R_1^2 + 4\pi r_1^2 \right) = 8\pi (2^2 + 1^2) = 8\pi \cdot 5 = 40\pi\text{ cm}^2 \approx 125,66\text{ cm}^2$$

A folyamat végén a kis buborék teljesen eltűnik ($r_2 = 0$), és minden levegő a nagy buborékba áramlik. A végállapot sugarát jelöljük $R_2$-vel.
Mivel az össztérfogat állandó:

$$V_{\text{összes}} = \frac{4}{3}\pi R_2^3 = 12\pi\text{ cm}^3 \implies R_2^3 = 9 \implies R_2 = \sqrt[3]{9}\text{ cm} \approx 2,08\text{ cm}$$

A rendszer végső hártyafelülete ($A_{\text{végső}}$):

$$A_{\text{végső}} = 2 \cdot 4\pi R_2^2 = 8\pi (\sqrt[3]{9})^2 = 8\pi \cdot \sqrt[3]{81} \approx 8\pi \cdot 4,327 = 34,61\pi\text{ cm}^2 \approx 108,74\text{ cm}^2$$

$$\Delta A = A_{\text{végső}} - A_{\text{kezdeti}} = 108,74\text{ cm}^2 - 125,66\text{ cm}^2 = -16,92\text{ cm}^2$$

A teljes felület $16,92\text{ cm}^2$-rel csökkent. Ez bizonyítja, hogy a levegő átáramlása során a rendszer felületi energiája csökkent, így a folyamat spontán végbement a potenciális energia minimumára törekedve.

2. Egy keretben lévő szappanhártyát egy $L = 10\text{ cm}$ hosszú mozgatható drót határol. A szappanoldat felületi feszültsége $\alpha = 0,03\text{ N/m}$. Mekkora külső erővel lehet egyensúlyt tartani a hártya összehúzó erejével, és mennyi munkát végzünk, ha a drótot egyenletesen $s = 5\text{ cm}$ távolsággal kijebb húzzuk?

A szappanhártyának két oldala van, így a drótra ható összehúzó erő:

$$F = \alpha \cdot 2L = 0,03\text{ N/m} \cdot 2 \cdot 0,1\text{ m} = 0,006\text{ N}$$

Az egyensúly tartásához pontosan ugyanekkora, $0,006\text{ N}$ nagyságú külső erőre van szükség.

A végzett munka a felületi energia megváltozásával egyenlő:

$$W = F \cdot s = 0,006\text{ N} \cdot 0,05\text{ m} = 0,0003\text{ J} = 0,3\text{ mJ}$$

Az egyensúlyt tartó erő $0,006\text{ N}$, a végzett munka pedig $0,3\text{ mJ}$.

---

## Feladatok

1. Egy tiszta vízbe mártott üvegcsőből lassan vízcseppeket engedünk kiszakadni. A cseppek közvetlenül a leválás előtt közelítőleg gömb alakúak, és a cső $d = 2\text{ mm}$ átmérőjű peremén függenek. A leválás pillanatában a csepp súlya egyenlővé válik a cső peremének kerülete mentén ható felületi feszültségi erővel. Számítsd ki egy darab leszakadó vízcsepp tömegét, ha a víz felületi feszültsége $\alpha = 0,072\text{ N/m}$! ($g \approx 9,81\text{ m/s}^2$)

2. Egy finom, vízszintes drótkeretre feszített szappanhártyán egy hurokká csomózott cérnaszál fekszik lazán. Ha a hurok belsejében a szappanhártyát egy tűvel átszúrjuk, a cérnaszál a külső hártya feszítőereje miatt azonnal egy tökéletes, $R = 3\text{ cm}$ sugarú körré rándul ki. Mekkora mechanikai feszítőerő ébred a cérnaszál keresztmetszetében, ha a szappanoldat felületi feszültsége $\alpha = 0,025\text{ N/m}$?

3. Egy ultrahangos párásító készülék $V = 1\text{ cm}^3$ térfogatú vízcseppet milliónyi apró, egyforma méretű, $r = 1\ \mu\text{m}$ ($10^{-6}\text{ m}$) sugarú ködcseppé porlaszt szét. Mennyi külső munkát kell végeznie a készüléknek pusztán a vízfelület ilyen hatalmas mértékű megnöveléséhez? (A víz felületi feszültsége $\alpha = 0,072\text{ N/m}$, a porlasztott cseppek összefüggő folyadékgömbök, így csak külső felületük van.)

