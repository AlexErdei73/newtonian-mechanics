# Archimédész törvénye

## Kísérletek

[Archimédészi hengerpár](https://www.youtube.com/watch?v=Fodof4gSIA0&t=884s)

[Higany alatt marad a parafakorong](https://www.youtube.com/watch?v=Fodof4gSIA0&t=1423s)

[Cartesius-búvár](https://www.youtube.com/watch?v=Fodof4gSIA0&t=1696s)

A kísérletekből láttuk, hogy a nyugvó folyadékba merülő testre a folyadék felhajtóerőt fejt ki. Erre a felhajtóerőre vonatkozik Archimédész törvénye.

> **Minden folyadékba merülő testre felfelé irányuló felhajtóerő hat, amelynek nagysága megegyezik a test által kiszorított folyadék súlyával.**

A kísérletekből azt is láttuk, hogy a felhajtóerő folyadékokban a hidrosztatikai nyomás következménye. A hidrosztatikai nyomáshoz hozzáadódik a külső légköri nyomás, de az egyformán nyomja a testet felfelé és lefelé, tehát kiegyenlítődik. 

Legyen egy egyenes hasáb (például téglatest alakú test) a folyadékban úgy, hogy teljesen elmerül (tehát a folyadék teljesen körülveszi), viszont nincs az edény alján, mint a parafadugó a higanyos kísérletben. Legyen a hasáb alapterülete $A$, a magassága (a felső és alsó lap távolsága) pedig $\Delta h$. Az $A$ felületű lapok vízszintesek. Ekkor a felhajtóerő könnyen kiszámítható az alsó és felső lapra ható nyomóerők különbségeként:

$$F_{\text{felhajtó}} = F_2 - F_1 = p_2 A - p_1 A = (p_2 - p_1) A = \Delta p A$$

A nyomáskülönbség a különböző mélységek miatt:

$$\Delta p = p_2 - p_1 = (p_0 + \rho_{\text{folyadék}} g h_2) - (p_0 + \rho_{\text{folyadék}} g h_1) = \rho_{\text{folyadék}} g (h_2 - h_1) = \rho_{\text{folyadék}} g \Delta h$$

Behelyettesítve a felhajtóerő képletébe:

$$F_{\text{felhajtó}} = \Delta p A = \rho_{\text{folyadék}} g \Delta h A = \rho_{\text{folyadék}} V g = m_{\text{folyadék}} g = G_{\text{folyadék}}$$

Itt $\rho_{\text{folyadék}}$ a folyadék sűrűsége, $V$ a test térfogata (ami teljesen elmerült testnél megegyezik a kiszorított folyadék térfogatával), így $m_{\text{folyadék}}$ a kiszorított folyadék tömege, $G_{\text{folyadék}}$ pedig a kiszorított folyadék súlya. A $p_0$ külső légnyomás valóban kiesik. Tehát az elméleti levezetés igazolja Archimédész törvényét.

## Testek úszása, lebegése 

Mi a helyzet akkor, ha a test nem süllyed el, hanem úszik a folyadék felszínén?

Ekkor is alkalmazható a levezetés, de ekkor csak alulról nyomja a hidrosztatikai nyomás a testet felfelé. A felső lapra ható hidrosztatikai nyomás nulla ($p_1 = 0$ a folyadék felszínén), hiszen a test felső része kint van a levegőn.

$$\Delta p = p_2 - p_1 = (p_0 + \rho_{\text{folyadék}} g h_2) - p_0 = \rho_{\text{folyadék}} g h_2$$

$$F_{\text{felhajtó}} = \Delta p A = \rho_{\text{folyadék}} g h_2 A = \rho_{\text{folyadék}} V_{\text{bemerülő}} g = m_{\text{kiszorított}} g = G_{\text{kiszorított}}$$

Ez esetben tehát csak a testnek a folyadékba merülő térfogata ($V_{\text{bemerülő}}$) számít, amely megegyezik a kiszorított folyadék térfogatával. A test azért marad a folyadék felszínén, mert a rá ható nehézségi erő egyensúlyt tart a felhajtóerővel:

$$F_{\text{felhajtó}} = G_{\text{test}}$$

$$\rho_{\text{folyadék}} V_{\text{bemerülő}} g = \rho_{\text{test}} V_{\text{test}} g$$

$$\rho_{\text{folyadék}} V_{\text{bemerülő}} = \rho_{\text{test}} V_{\text{test}}$$

Mivel a test teljes $V_{\text{test}}$ térfogata nagyobb, mint a bemerülő (kiszorított) $V_{\text{bemerülő}}$ térfogat (hiszen a test csak részlegesen merül el), ezért a test $\rho_{\text{test}}$ átlagos sűrűsége kisebb, mint a folyadék $\rho_{\text{folyadék}}$ sűrűsége.

Fontos megjegyeznünk, hogy itt a test **átlagsűrűségéről** van szó, különben az acélból készült hajó nem tudna úszni a víz felszínén. A hajótest azonban rengeteg levegőt (üreget) tartalmaz, így az átlagsűrűsége a vízénél kisebb lesz, annak ellenére, hogy az acél önmagában a víznél jóval sűrűbb.

Ez az utolsó egyenlet akkor is érvényes, ha a test **lebeg** a folyadék belsejében, de ekkor a bemerülő térfogat és a test teljes térfogata megegyezik ($V_{\text{bemerülő}} = V_{\text{test}}$). Ebből következik, hogy lebegéskor a test átlagsűrűsége pontosan egyenlő a folyadék sűrűségével.

Amennyiben a test átlagsűrűsége nagyobb a folyadék sűrűségénél, a felhajtóerő nem képes megtartani a test súlyát, így a test **lemerül** (lesüllyed) az edény aljára.

---

## Példák

1. Egy üresen $45\ 000\text{ t}$ tömegű tanker teljes térfogata $520\ 000\text{ m}^3$. Mennyi tengervizet engedtek a ballaszttartályokba, ha a tanker így $117\ 000\text{ m}^3$ tengervizet szorít ki? A tengervíz sűrűsége $1025\text{ kg/m}^3$. Mennyi a tanker átlagsűrűsége ekkor?

Az úszás feltétele szerint a hajóra ható teljes nehézségi erő egyenlő a felhajtóerővel, vagyis a hajó össztömege ($m_{\text{összes}}$) megegyezik a kiszorított tengervíz tömegével ($m_{\text{víz}}$).

Számítsuk ki a kiszorított víz tömegét:

$$
m_{\text{víz}} = \rho_{\text{tengervíz}} \cdot V_{\text{kiszorított}} = 1025\text{ kg/m}^3 \cdot 117\ 000\text{ m}^3 = 119\ 925\ 000\text{ kg} = 119\ 925\text{ t}
$$

A hajó össztömege az üres tömeg és a ballasztvíz tömegének összege:

$$
m_{\text{összes}} = m_{\text{üres}} + m_{\text{ballaszt}} = 119\ 925\text{ t}
$$

$$
m_{\text{ballaszt}} = 119\ 925\text{ t} - 45\ 000\text{ t} = 74\ 925\text{ t}
$$

A hajó átlagsűrűsége az össztömeg és a teljes térfogat hányadosa:

$$
\rho_{\text{átlag}} = \frac{m_{\text{összes}}}{V_{\text{teljes}}} = \frac{119\ 925\ 000\text{ kg}}{520\ 000\text{ m}^3} \approx 230,625\text{ kg/m}^3
$$

A ballaszttartályokba $74\ 925\text{ t}$ tengervizet engedtek, a hajó átlagsűrűsége ekkor kb. $230,6\text{ kg/m}^3$.

2. Mennyi olajat szállít a tanker, ha a ballasztvizet a tartályokból kiszivattyúzzák, és a rakománnyal együtt $336\ 600\text{ m}^3$ lesz a kiszorított víz térfogata? (A tengervíz sűrűsége továbbra is $1025\text{ kg/m}^3$.)

Úszáskor a hajó új össztömege megegyezik az újonnan kiszorított víz tömegével.
 
Számítsuk ki az új össztömeget:

$$
m_{\text{összes\ új}} = \rho_{\text{tengervíz}} \cdot V_{\text{kiszorított\ új}} = 1025\text{ kg/m}^3 \cdot 336\ 600\text{ m}^3 = 345\ 015\ 000\text{ kg} = 345\ 015\text{ t}
$$

Az új össztömeg az üres hajó és a szállított olaj tömegéből áll (mivel a ballasztvizet kiszivattyúzták):

$$
m_{\text{olaj}} = m_{\text{összes\ új}} - m_{\text{üres}} = 345\ 015\text{ t} - 45\ 000\text{ t} = 300\ 015\text{ t}
$$

A tanker $300\ 000\text{ t}$ olajat szállít.

---

## Felhajtóerő gázokban: A hőlégballon

### Kísérlet

[Kétlángos cső](https://www.youtube.com/watch?v=Fodof4gSIA0&t=33m20s)

Archimédész törvénye nemcsak folyadékokra, hanem gázokra is teljes mértékben érvényes, hiszen a gázok is rendelkeznek sűrűséggel, és a magassággal változó légnyomás miatt felhajtóerőt fejtenek ki a bennük elhelyezkedő testekre. Ezen az elven működnek a hőlégballonok is. A ballonban lévő levegőt égők segítségével felmelegítik. A meleg levegő tágulás közben ritkábbá válik, így a sűrűsége kisebb lesz, mint a ballont körülvevő hideg, külső levegő sűrűsége. Amikor a hőlégballon által kiszorított külső, nehezebb levegő súlya (vagyis az Archimédész-féle felhajtóerő) nagyobbá válik, mint a ballon szerkezetének, kosarának, utasainak és a benne lévő meleg levegőnek az összsúlya, a hőlégballon felemelkedik a magasba.

### Példa

Egy hőlégballon kupolájának belső térfogata $3000\text{ m}^3$. A külső, hideg levegő sűrűsége $\rho_{\text{hideg}} = 1,29\text{ kg/m}^3$, míg a ballonban lévő felmelegített levegő sűrűsége $\rho_{\text{meleg}} = 0,95\text{ kg/m}^3$. A ballon saját szerkezete (vászon, kosár, égők, gázpalackok) összesen $450\text{ kg}$ tömegű. Maximum mekkora tömegű hasznos terhet (utasokat és felszerelést) képes felemelni a hőlégballon? ($g \approx 9,81\text{ m/s}^2$)

A hőlégballon akkor képes felemelkedni, ha a rá ható Archimédész-féle felhajtóerő legalább akkora, mint a rendszer összsúlya. 

A felhajtóerőt a kiszorított külső, hideg levegő súlya határozza meg:

$$
F_{\text{felhajtó}} = \rho_{\text{hideg}} \cdot V \cdot g = 1,29\text{ kg/m}^3 \cdot 3000\text{ m}^3 \cdot 9,81\text{ m/s}^2 = 37\ 964,7\text{ N}
$$

Számítsuk ki a ballonban lévő meleg levegő tömegét és súlyát:

$$
m_{\text{meleg}} = \rho_{\text{meleg}} \cdot V = 0,95\text{ kg/m}^3 \cdot 3000\text{ m}^3 = 2850\text{ kg}
$$
   
$$
G_{\text{meleg}} = m_{\text{meleg}} \cdot g = 2850\text{ kg} \cdot 9,81\text{ m/s}^2 = 27\ 958,5\text{ N}
$$

Számítsuk ki a ballon saját szerkezetének súlyát:
   
$$
G_{\text{szerkezet}} = m_{\text{szerkezet}} \cdot g = 450\text{ kg} \cdot 9,81\text{ m/s}^2 = 4414,5\text{ N}
$$

Írjuk fel az erőegyensúlyt a maximális teherre ($G_{\text{teher}}$):
A felfelé mutató erő egyenlő a lefelé mutató erők összegével:

$$
F_{\text{felhajtó}} = G_{\text{szerkezet}} + G_{\text{meleg}} + G_{\text{teher}}
$$

$$
37\ 964,7\text{ N} = 4414,5\text{ N} + 27\ 958,5\text{ N} + G_{\text{teher}}
$$

$$
37\ 964,7\text{ N} = 32\ 373\text{ N} + G_{\text{teher}}
$$

$$
G_{\text{teher}} = 37\ 964,7\text{ N} - 32\ 373\text{ N} = 5591,7\text{ N}
$$

Számítsuk ki a hasznos teher maximális tömegét:
   
$$
m_{\text{teher}} = \frac{G_{\text{teher}}}{g} = \frac{5591,7\text{ N}}{9,81\text{ m/s}^2} = 570\text{ kg}
$$

A hőlégballon maximum $570\text{ kg}$ hasznos terhet képes a magasba emelni.

---

## Feladatok

1. Egy teljesen zárt, üres fém hordó tömege $20\text{ kg}$, belső térfogata pedig $0,2\text{ m}^3$. Ha a hordót teljesen felöntjük $800\text{ kg/m}^3$ sűrűségű gázolajjal, majd bedobjuk egy $1000\text{ kg/m}^3$ sűrűségű édesvizű tóba, elmerül-e a hordó, vagy úszni fog a felszínen? Ha úszik, mekkora térfogata látszik ki a vízből?

2. Egy tengeri kutatószonda tömege a műszerekkel együtt $1500\text{ kg}$. A szondát úgy tervezték, hogy lebegjen a tengervízben ($1025\text{ kg/m}^3$) egy bizonyos mélységben. Mekkorára kell megválasztani a szonda teljes külső térfogatát, hogy se le ne süllyedjen, se fel ne jöjjön a felszínre?

3. Egy uresen $12\ 000\text{ t}$ tömegű teherhajó folyóvízen ($1000\text{ kg/m}^3$) hajózik, ekkor a vízbe merülő térfogata $15\ 000\text{ m}^3$. A hajót megpakolják áruval, majd behajózik a nyílt óceánra ($1025\text{ kg/m}^3$). A tengeren azt tapasztalják, hogy a hajó bemerülő térfogata a sűrűbb víz ellenére $28\ 000\text{ m}^3$-re nőtt. Hány tonna árut pakoltak a hajóra?
