# A munka

## A munkavégzés fogalma

A mindennapi életben munka alatt azt értjük, amikor bemegyünk dolgozni a munkahelyre. A fizikában munka alatt sokkal pontosabban meghatározható dologról van szó.

>**Munkavégzésről beszélünk, ha egy test erő hatására az erő irányába elmozdul vagy van az elmozdulásnak az erő irányába eső komponense.**

### Példák
1. Felemelünk egy súlyt állandó sebességgel. Ilyenkor a nehézségi erő ellenében erőt fejtünk ki, amely a test súlya. Az elmozdulás az emelő erő irányában történik.
2. Egy testet felgyorsítunk. Ilyenkor a gyorsuláshoz erőt kell kifejtenünk. A test az erő irányában elmozdul és felgyorsul.
3. Egy rugót erővel nyújtunk meg. Ilyenkor a rugó egyik végét rögzítjük, a másik végét erővel húzzuk és a rugó megnyúlik az erő hatására, tehát a végpont elmozdul az erő irányába.

### Ellenpéldák
1. Egy asztalon lévő súly nem mozdul. Ilyenkor az asztal erőt fejt ki, de elmozdulás nincs, tehát munkavégzés sem történik.
2. Egy nehéz testet tartunk. Ilyenkor bizony elfáradunk, de munkát fizikai értelemben nem végzünk, hisz az asztal is tarthatná a testet. Elmozdulás nincs.
3. A nehéz súllyal egyenletes sebességgel sétálunk. Ilyenkor sincs munkavégzés, hisz a súly függőlegesen lefelé mutat, a talaj viszont vízszintes, tehát az elmozdulás az erő irányára merőlegesen történik. Nincs az elmozdulásnak az erő irányába eső komponense.

## A munka kiszámítása

>**A munka az erő és az erő irányába eső elmozdulás (komponens) szorzata. Egysége a joule (J).**

$$
W = \overrightarrow{F} \Delta \overrightarrow{r}
$$

Ez a formula állandó nagyságú erő esetén érvényes, tehát az erő iránya és nagysága sem változik az elmozdulás során.

$$
W = F |\Delta \overrightarrow{r}| \cos \alpha
$$

Itt az $\alpha$ szög az erő és az elmozdulás vektorok által bezárt $180^\circ$-nál nem nagyobb szög. Ha a mozgás egyenes vonalú és irányváltozás sem történik az elmozdulás során, akkor a megtett út megegyezik az elmozdulás nagyságával. Ez esetben:

$$
W = Fs \cos \alpha
$$

### Speciális esetek:

1. Az erő az elmozdulás irányába mutat. Ekkor $\alpha = 0$, tehát:

$$
W = Fs
$$

2. Az erő és az elmozdulás egymásra merőleges, tehet $\alpha = 90^\circ$. Ekkor:

$$
W = 0
$$

mivel $\cos \alpha = \cos(90^\circ) = 0$.

3. Az erő és az elmozdulás ellentétes irányú. Ekkor $\alpha = 180^\circ$, vagyis:

$$
W = -Fs
$$

Ilyenkor $\cos \alpha = \cos(180^\circ) = -1$.

A munka skalár mennyiség. Amikor két vektort úgy szorzunk össze, hogy az eredmény skalár, skaláris szorzatról beszélünk a matematikában. 

### Példák

1. Egy $200 kg$ tömegű testet függőlegesen felemelünk egy daruval $15,0 m$ magasra. Az emelés lassan, állandó sebességgel történik. Mekkora a nehézségi erő? Mekkora a súly? Mekkora erővel emelünk? Mekkora a végzett munka?

$$
G = mg = 200 \times 9,81 = 1962 N
$$

$$
F = K = G = 1962 N
$$

$$
W = Fs = 1962 \times 15 = 29430 J = 29,43 kJ
$$

Tehát a végzett munka $29,4 kJ$.

2. Egy $200 kg$ tömegű testet állandó sebességgel gurítunk fel egy $15,0 m$ magas, $90,0 m$ hosszú emelkedőn. Az emelkedő sík felület, a gördülési ellenállástól eltekinthetünk. Mekkora a nehézségi erő? Hány N erővel nyomja a test az emelkedőt? Mekkora erővel kell tolni a testet? Mekkora az emelési munka? Mekkora a nehézségi erő által végzett munka? Mekkora a kényszererő által végzett munka?

$$
G = mg = 200 \times 9,81 = 1962 N
$$

$$
\sin \alpha = \frac{15}{90} = 0,1667
$$

$$
\alpha = 9,594^\circ
$$

$$
K = mg \cos \alpha = 200 \times 9,81 \times \cos(9,594^\circ) = 1935 N
$$

$$
F = mg \sin \alpha = 200 \times 9,81 \times 0,1667 = 327,1 N
$$

$$
W = Fs = 327,1 \times 90 = 29440 J = 29,44 kJ
$$

$$
W_G = Gs \cos(90^\circ + \alpha) = 1962 \times 90 \times \cos(99,594^\circ) = -29430 J = -29,43 kJ
$$

Ezt kiszámíthatjuk másképp is. A G erő és a h emelkedés ellentétes irányú, tehát:

$$
W_G = -Gh = -1962 \times 15 = -29430 J = -29,43 kJ
$$

$$
W_K = Ks \cos(90^\circ) = 0
$$

Láthatjuk, hogy az emelési munkánk a lejtőn pontosan annyi, mintha lejtő nélkül emeltük volna fel ugyanazt a testet ugyanolyan magasra, feltéve hogy nincs veszteség. A lejtő erőt spórol nekünk, de munkát nem.

A kényszererő munkája általában nulla, mivel merőleges az elmozdulásra. 

A gravitációs erő munkája független az úttól, csak az elmozdulás kezdő és végpontjától függ. A nehézségi erő esetében ez gyakorlatban a magasságkülönbségtől való függést jelenti.

3. Egy autó tömege $1300 kg$. Felgyorsítjuk álló helyzetből egyenletesen $20,0 \frac{m}{s}$ sebességre $8,00 s$ alatt. Mekkora a gyorsulás? Mekkora úton történt a gyorsítás? Mekkora a gyorsító erő? Mekkora munkát végez a motor a gyorsítás alatt? A veszteségektől, menetellenállásoktól eltekinthetünk.

$$
a = \frac{v - v_0}{t} = \frac{20}{8} = 2,50 \frac{m}{s^2}
$$

$$
s = \frac{a}{2} \times t^2 = \frac{2,50}{2} \times 8^2 = 80 m
$$

$$
F = F_e = ma = 1300 \times 2,50 = 3250 N
$$

$$
W = Fs = 3250 \times 80 = 260000 J = 260 kJ
$$

## Feladatok

1. Egy 50 kg tömegű ládát egy vízszintes talajon húzunk 10 m hosszan állandó sebességgel. A súrlódási együttható 0,25. Mekkora munkát végzünk?

2. Egy 0,3 kg tömegű testre állandó 20 N erőt fejtünk ki, miközben a test 5 m-t mozdul el az erő irányában. Mekkora munkát végzünk?

3. Egy munkás 100 N erővel tol egy dobozt 12 m hosszan vízszintes talajon, az erő 30°-os szöget zár be a vízszintessel. Mekkora munkát végez?

4. Egy testre 40 N erő hat 15°-os szögben a vízszinteshez képest. A test vízszintes irányban 5 m-t mozdul el. Mekkora a végzett munka?

5. Egy 20 kg tömegű dobozt 3 m magasra kell felemelni állandó sebességgel. Mekkora munkát végzünk?