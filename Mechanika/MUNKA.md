# A munka

## A munkavégzés fogalma

A mindennapi életben munka alatt leggyakrabban azt értjük, amikor bemegyünk dolgozni a munkahelyünkre. A fizikában azonban a munka sokkal pontosabban meghatározható fogalom.

> **Munkavégzésről beszélünk, ha egy test erő hatására az erő irányába elmozdul, vagy ha az elmozdulásnak van az erő irányába eső komponense.**

### Példák
1. Felemelünk egy súlyt állandó sebességgel. Ilyenkor a nehézségi erő ellenében erőt fejtünk ki, amely egyenlő a test nehézségi erejével. Az elmozdulás a kifejtett emelőerő irányában történik.
2. Egy testet felgyorsítunk. Ilyenkor a gyorsuláshoz erőt kell kifejtenünk a testre. A test az erő irányában elmozdul és felgyorsul.
3. Egy rugót erővel nyújtunk meg. Ilyenkor a rugó egyik végét rögzítjük, a másik végét erővel húzzuk, és a rugó megnyúlik az erő hatására, vagyis a végpont elmozdul az erő irányába.

### Ellenpéldák
1. Egy asztalon lévő súly nem mozdul el. Ilyenkor az asztal kifejt ugyan kényszererőt, de elmozdulás híján munkavégzés sem történik.
2. Egy nehéz testet tartunk egy helyben. Ilyenkor biológiailag elfáradunk, de munkát fizikai értelemben nem végzünk, hiszen az asztal is tarthatná a testet. Elmozdulás nincs.
3. Egy nehéz súllyal a kezünkben egyenes talajon, állandó sebességgel sétálunk. Ilyenkor sincs fizikai munkavégzés, mert az általunk kifejtett tartóerő függőlegesen felfelé mutat, a megtett út viszont vízszintes. Mivel az elmozdulás merőleges az erő irányára, az elmozdulásnak nincs az erő irányába eső komponense.

## A munka kiszámítása

> **A munka az erő és az erő irányába eső elmozduláskomponens szorzata. Egysége a joule (J).**

$$
W = \vec{F} \cdot \Delta \vec{r}
$$

Ez a formula állandó nagyságú és irányú erő esetén érvényes, vagyis az erő iránya és nagysága sem változik meg az elmozdulás során.

$$
W = F \cdot |\Delta \vec{r}| \cdot \cos \alpha
$$

Itt az $\alpha$ szög az erő- és az elmozdulásvektorok által bezárt, $180^\circ$-nál nem nagyobb szög. Ha a mozgás egyenes vonalú, és irányváltozás sem történik a folyamat alatt, akkor a megtett út hossza ($s$) megegyezik az elmozdulás nagyságával. Ebben az esetben:

$$
W = F \cdot s \cdot \cos \alpha
$$

### Speciális esetek:

1. Az erő pontosan az elmozdulás irányába mutat. Ekkor $\alpha = 0^\circ$, így $\cos(0^\circ) = 1$, a munka formula pedig:

$$
W = F \cdot s
$$

2. Az erő és az elmozdulás merőleges egymásra, azaz $\alpha = 90^\circ$. Ekkor a végzett munka nulla:

$$
W = 0
$$

mivel $\cos(90^\circ) = 0$.

3. Az erő és az elmozdulás ellentétes irányúak. Ekkor $\alpha = 180^\circ$, vagyis a munka negatív előjelű:

$$
W = -F \cdot s
$$

mivel $\cos(180^\circ) = -1$.

A munka skalármennyiség. Amikor a matematikában két vektort úgy szorzunk össze, hogy az eredményül kapott mennyiség skalár, akkor a vektorok **skaláris szorzatáról** beszélünk.

### Példák

1. Egy $200\text{ kg}$ tömegű testet függőlegesen felemelünk egy daruval $15{,}0\text{ m}$ magasra. Az emelés lassan, állandó sebességgel történik. Mekkora a nehézségi erő, mekkora a súly, mekkora erővel emelünk, és mekkora a végzett munka? A nehézségi gyorsulás legyen $g = 9{,}81\text{ }\frac{\text{m}}{\text{s}^2}$.

A testre ható nehézségi erő:

$$
G = m \cdot g = 200 \cdot 9{,}81 = 1962\text{ N}
$$

Mivel az emelés állandó sebességgel (gyorsulás nélkül) történik, az emelőerő nagysága egyenlő a kényszererővel és a nehézségi erővel:

$$
F = K = G = 1962\text{ N}
$$

A daru által végzett munka az erő irányú elmozdulás alapján:

$$
W = F \cdot s = 1962 \cdot 15 = 29\ 430\text{ J} = 29{,}43\text{ kJ}
$$

Az emelés során végzett munka tehát $29{,}43\text{ kJ}$.

2. Egy $200\text{ kg}$ tömegű testet állandó sebességgel gurítunk fel egy $15{,}0\text{ m}$ magas, $90{,}0\text{ m}$ hosszú emelkedőn (lejtőn). Az emelkedő sík felület, a gördülési ellenállástól eltekinthetünk. Mekkora a nehézségi erő? Hány Newton erővel nyomja a test az emelkedőt? Mekkora erővel kell tolni a testet? Mekkora a tolóerő, a nehézségi erő, valamint a kényszererő által végzett munka?

A nehézségi erő nagysága megegyezik az előző példával:

$$
G = m \cdot g = 200 \cdot 9{,}81 = 1962\text{ N}
$$

A lejtő geometriájából adódó hajlásszög szinusza:

$$
\sin \alpha = \frac{15}{90} \approx 0{,}1667 \implies \alpha \approx 9{,}594^\circ
$$

A lejtőre merőleges $K$ kényszererő nagysága (amellyel a test nyomja a felületet):

$$
K = m \cdot g \cdot \cos \alpha = 200 \cdot 9{,}81 \cdot \cos(9{,}594^\circ) \approx 1935\text{ N}
$$

A test egyenletes mozgatásához szükséges lejtőirányú tolóerő:

$$
F = m \cdot g \cdot \sin \alpha = 200 \cdot 9{,}81 \cdot 0{,}1667 \approx 327{,}1\text{ N}
$$

A testet felfelé mozgató tolóerő által végzett munka a lejtő hossza mentén ($s = 90{,}0\text{ m}$):

$$
W = F \cdot s = 327{,}1 \cdot 90 = 29\ 439\text{ J} \approx 29{,}44\text{ kJ}
$$

A nehézségi erő által végzett munka (mivel a gravitáció és a mozgásirány által bezárt szög $90^\circ + \alpha = 99{,}594^\circ$):

$$
W_G = G \cdot s \cdot \cos(90^\circ + \alpha) = 1962 \cdot 90 \cdot \cos(99{,}594^\circ) \approx -29\ 430\text{ J} = -29{,}43\text{ kJ}
$$

Ezt a gravitációs munkát egyszerűbben is kiszámíthatjuk, hiszen a nehézségi erővel ellentétes irányú függőleges elmozdulás a $h$ magasság:

$$
W_G = -G \cdot h = -1962 \cdot 15 = -29\ 430\text{ J} = -29{,}43\text{ kJ}
$$

A felületre merőleges $K$ kényszererő által végzett munka nulla, mivel a mozgásirányra merőleges:

$$
W_K = K \cdot s \cdot \cos(90^\circ) = 0\text{ J}
$$

Láthatjuk, hogy a lejtőn végzett emelési munkánk hajszálpontosan megegyezik azzal, mintha a testet lejtő nélkül, függőlegesen emeltük volna fel ugyanilyen magasra. A lejtő erőt spórol nekünk (kisebb erővel kell tolni, mint emelni), de munkát nem takarít meg.

A gravitációs erő munkája tehát teljesen független az út alakjától, kizárólag az elmozdulás kezdő- és végpontjának helyzetétől (a magasságkülönbségtől) függ.

3. Egy autó tömege $1300\text{ kg}$. Álló helyzetből indulva egyenletesen felgyorsítjuk $20{,}0\text{ }\frac{\text{m}}{\text{s}}$ sebességre $8{,}00\text{ s}$ alatt. Mekkora a gyorsulás, mekkora úton történt a gyorsítás, mekkora a gyorsítóerő, és mekkora munkát végez a motor a gyorsítás alatt? A veszteségektől és a menetellenállásoktól eltekinthetünk.

Az autó egyenletes gyorsulása:

$$
a = \frac{v - v_0}{t} = \frac{20 - 0}{8} = 2{,}50\text{ }\frac{\text{m}}{\text{s}^2}
$$

A gyorsítási szakasz hossza a négyzetes úttörvény alapján:

$$
s = \frac{a}{2} \cdot t^2 = \frac{2{,}50}{2} \cdot 8^2 = 0{,}125 \cdot 64 = 80\text{ m}
$$

A gyorsításhoz szükséges eredő erő nagysága:

$$
F = F_e = m \cdot a = 1300 \cdot 2{,}50 = 3250\text{ N}
$$

A motor által végzett gyorsítási munka:

$$
W = F \cdot s = 3250 \cdot 80 = 260\ 000\text{ J} = 260\text{ kJ}
$$

---

## Feladatok

**1. Láda húzása a padlón**
Egy $50\text{ kg}$ tömegű ládát vízszintes talajon húzunk $10\text{ m}$ hosszan, állandó sebességgel. A felületek közötti csúszási súrlódási együttható $0{,}25$. Mekkora munkát végzünk a láda vontatása során?

**2. Test mozgatása állandó erővel**
Egy $0{,}3\text{ kg}$ tömegű testre állandó $20\text{ N}$ nagyságú erőt fejtünk ki, miközben a test pontosan $5\text{ m}$-t mozdul el a ható erő irányában. Mekkora munkát végzünk a folyamat alatt?

**3. Doboz tolása ferde erővel**
Egy munkás $100\text{ N}$ erővel tol egy dobozt $12\text{ m}$ hosszan a vízszintes padlón. Az általa kifejtett tolóerő $30^\circ$-os szöget zár be a vízszintes síkkal. Mekkora munkát végez a munkás a doboz arrébb tolása közben?

**4. Elmozdulás ferde erőhatás alatt**
Egy testre $40\text{ N}$ nagyságú állandó erő hat, amely $15^\circ$-os szöget zár be a vízszintessel. A test az erő hatására vízszintes irányban pontosan $5\text{ m}$-t mozdul el. Mekkora a testen végzett munka?

**5. Terhek függőleges emelése**
Egy $20\text{ kg}$ tömegű dobozt $3\text{ m}$ magasra kell felemelnünk állandó sebességgel. Mekkora emelési munkát végzünk a folyamat során?

*A feladatok megoldásához a nehézségi gyorsulás értékét tekintsük* $g = 9{,}81\text{ }\frac{\text{m}}{\text{s}^2}$ *-nek.*
