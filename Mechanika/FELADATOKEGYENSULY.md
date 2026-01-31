# Feladatok az egyensúlyra

## Példák
1. Egy vízszintes plafonon egymástól $3,00m$ távolságra van két kampó, melyekre kötelet akasztunk, úgy, hogy a kötél közepén egy $0,10kg$ tömegű test lóg. A test a kötél közepén van, úgy, hogy a kötélszárak egyenlők, és a test a plafon szintje alatt $2,00m$-rel helyezkedik el. Mekkora a kötél hossza? Mekkora a kötélben ébredő húzóerő, ha a test egyensúlyban van?

### Szimuláció
[Statika első példa](https://alexerdei73.github.io/physics-engine/project/#d90c17ac-3c4c-47fa-b91e-46157c5a3069)

A példa az ábrán látható. Megmutatjuk a szimuláció eredményét is a testet és az egyik kötélszárat illetően.

![Az első statikai példa](Kepek/elsostatikapelda.png)
![A test adatai az első példában](Kepek/elsostatikapeldatestadatai.png)
![A kötélszár adatai az első példában](Kepek/elsostatikapeldakoteladatai.png)

Végezzük el a számításokat!
A kötélszárak egyenlő hosszúak, és a szimmetria miatt az erő is egyenlő nagyságú bennük, jelöljük ezt $K$-val. Legyen a koordináta-rendszer $x$ tengelye vízszintes és jobbra mutató, az $y$ tengely meg függőleges és felfelé mutató.
A kötélszárak hossza legyen $l$:

$$
l = \sqrt {1,5^2 + 2^2} = 2,50m
$$

Tehát a kötél teljes hossza ($2l$): $5,00m$. Legyen a kötélszár függőlegessel bezárt szöge $\alpha$. Ekkor:

$$
\sin \alpha = \frac {1,5} {2,5} = 0,6
$$

$$
\cos \alpha = \frac {2} {2,5} = 0,8
$$

Az egyensúly feltétele:

$$
\overrightarrow {K_1} + \overrightarrow {K_2} + \overrightarrow {G} = \overrightarrow {0}
$$

Itt 1-es a bal kötélszár indexe és 2-es a jobboldali kötélszáré.

$$
|\overrightarrow {K_1}| = |\overrightarrow {K_2}| = K
$$

Az egyenletek a koordinátákban:

$$
K_{1,x} + K_{2,x} + G_x = 0 
$$

$$
K_{1,y} + K_{2,y} + G_y = 0
$$

$$
K_{1,x} = -K \times \sin \alpha
$$

$$
K_{2,x} = K \times \sin \alpha
$$

$$
K_{1,y} = K_{2,y} = K \times \cos \alpha
$$

$$
G_x = 0, G_y = -G
$$

Ezeket beírva kapjuk:

$$
-K \times \sin \alpha + K \times \sin \alpha + 0 = 0
$$

$$
K \times \cos \alpha + K \times \cos \alpha - G = 0
$$

Az első egyenlet azonosság, a második egyenlet:

$$
2K \times \cos \alpha = G
$$

$$
K = \frac {G} {2\cos \alpha} = \frac {0,98N} {2 \times 0,8} = 0,6125N
$$

Tehát a kötélben ébredő erő $0,613N$.

2. Egy $0,10kg$ tömegű testet kötélre kötünk, mely a vízszintes mennyezethez van rögzítve. Egy másik kötéllel a testet vízszintesen jobbra húzzuk, úgy, hogy a felfüggesztési ponttól $1,50m$-rel jobbra mozdul el, és így lesz egyensúlyban a mennyezet alatt $2,00m$-rel. Milyen hosszú a testet a mennyezethez rögzítő kötél? Mekkora erők tartják egyensúlyban a testet a kötelekben?

### Szimuláció

[Statika második példa](https://alexerdei73.github.io/physics-engine/project/#69d5f6ba-1609-4b80-b2ef-e200344051f2)

Az ábra a példához és az eredmények a következők:

![A második statikai példa](Kepek/masodikstatikapelda.png)
![A test adatai](Kepek/masodikstatikapeldatestadatai.png)
![A bal kötél adatai](Kepek/masodikstatikapeldabalkoteladatai.png)
![A jobb kötél adatai](Kepek/masodikstatikapeldajobbkoteladatai.png)

A bal oldali kötél hossza ugyanúgy számítható ki, ahogy az első példában, hisz a méretek pont ugyanazok. Így a kötél hosszára $2,50m$-t kapunk.
Pontosan ugyanúgy kapjuk, hogy $\sin \alpha = 0,6$ és $\cos \alpha = 0,8$. Itt $\alpha$ újra a bal oldali kötél függőlegessel bezárt szöge.

A számítások:

$$
\overrightarrow {K_1} + \overrightarrow {K_2} + \overrightarrow {G} = \overrightarrow {0}
$$

A koordinátás alak:

$$
K_{1,x} + K_{2,x} + G_x = 0
$$

$$
K_{1,y} + K_{2,y} + G_y = 0
$$

Az ábra alapján:

$$
K_{1,x} = -K_1 \times \sin \alpha
$$

$$
K_{1,y} = K_1 \times \cos \alpha
$$

$$
K_{2,x} = K_2, K_{2,y} = 0
$$

$$
G_x = 0, G_y = -G
$$

Behelyettesítve ezeket:

$$
-K_1 \times \sin \alpha + K_2 + 0 = 0
$$

$$
K_1 \times \cos \alpha + 0 - G = 0
$$

A második egyenletből kapjuk:

$$
K_1 = \frac {G} {\cos \alpha} = \frac {0,98N} {0,8} = 1,225N
$$

Az első egyenletből pedig:

$$
K_2 = K_1 \times \sin \alpha = 1,225N \times 0,6 = 0,735N
$$

Tehát a bal oldali kötél $1,23N$ erővel feszül, míg a jobb oldalról a vízszintes húzóerő $0,735N$.

---

## Feladatok

1. Egy vízszintes plafonon két kampó távolsága $4,00m$. Egy $0,50kg$ tömegű testet két kötéllel függesztünk fel úgy, hogy az egyik kötél hossza $3,00m$, a másiké $4,00m$. Számítsd ki a kötelekben ébredő erőket, ha a test nyugalomban van!

[Statika első feladat](https://alexerdei73.github.io/physics-engine/project/#b7f8397b-e4ea-4f20-9a85-cddec0155428)

2. Egy $30^\circ$-os hajlásszögű, súrlódásmentes lejtőn egy $2,00kg$ tömegű testet a lejtő tetejéhez rögzített, a lejtő síkjával párhuzamos kötéllel tartunk egyensúlyban. Mekkora a kötélben ébredő erő és mekkora a lejtő által kifejtett nyomóerő?

3. Egy utcai lámpát, amelynek tömege $15kg$, két oszlop közé feszített acélhuzal tart. A huzal két fele $170^\circ$-os szöget zár be egymással (vagyis mindkét oldalon csak $5^\circ$-ot tér el a vízszintestől). Mekkora erő feszíti a huzalt?

4. Egy $5,00kg$ tömegű testet a mennyezethez rögzített két kötél tart, melyek a függőlegessel $30^\circ$-os és $45^\circ$-os szöget zárnak be. Határozd meg a két kötélben ébredő húzóerőt!

5. Egy $10kg$ tömegű közlekedési lámpa egy $6,00m$ hosszú vízszintes rúd végén lóg. A rudat a falnál egy csukló tartja, a rúd végét pedig egy, a falhoz $45^\circ$-os szögben csatlakozó merevítő drót rögzíti a rúd felett. Mekkora erő ébred a drótban, ha a rúd súlyát elhanyagoljuk?

[Statika ötödik feladat](https://alexerdei73.github.io/physics-engine/project/#83d3b11c-0a5a-4eca-9e5e-74b36177f4dc)