# Lejtő súrlódással

## Tapadási erő a lejtőn

### Kísérlet
[A lejtőhajlásszög és a súrlódási erők kapcsolata (Kísérleti videó)](https://www.youtube.com/watch?v=dGQS1j_aTj8)

### Szimuláció
[Test lejtőn egyensúlyban a tapadási erő által interaktív szimulátor](https://alexerdei73.github.io/physics-engine/project/#ef6ee12e-a1f2-400e-b6ce-7815f010aa4f)

### Összefüggés a lejtőszög és a tapadási együttható között

A Földhöz rögzített inerciarendszerben a testre ható nehézségi erő lejtőirányú (lefelé húzó) komponense:

$$
F = m \cdot g \cdot \sin \alpha
$$

A lejtő felületére merőleges kényszererő nagysága:

$$
K = m \cdot g \cdot \cos \alpha
$$

A felületek között ébredő tapadási súrlódási erőre általánosan érvényes:

$$
F_t \leqslant \mu_t \cdot K
$$

Amíg a test statikus egyensúlyban van (nem mozdul meg), a tapadási súrlódási erő hajszálpontosan egyenlő a lejtőirányú nehézségi erőkomponenssel:

$$
F_t = F
$$

Helyettesítsük be a komponenseket a tapadási feltétel egyenlőtlenségébe:

$$
m \cdot g \cdot \sin \alpha \leqslant \mu_t \cdot m \cdot g \cdot \cos \alpha
$$

Mivel a test $m$ tömege és a $g$ nehézségi gyorsulás mindkét oldalon szerepel, egyszerűsítés után a következőt kapjuk:

$$
\sin \alpha \leqslant \mu_t \cdot \cos \alpha
$$

Mindkét oldalt elosztva a pozitív $\cos \alpha$ értékkel (mivel $\alpha < 90^\circ$), eljutunk a keresett összefüggéshez:

$$
\tan \alpha \leqslant \mu_t
$$

Ez a rendkívül fontos eredmény azt mutatja, hogy **amennyiben a lejtő hajlásszögének tangense nem haladja meg a tapadási súrlódási együttható értékét, a test nem csúszik meg, a tömegétől függetlenül nyugalomban marad**. A megcsúszás határhelyzetét (a maximális lejtőszöget) az egyenlőség állapota határozza meg: $\tan \alpha_{\text{max}} = \mu_t$.

### Példa
Egy $2{,}00\text{ m}$ magas és $6{,}00\text{ m}$ széles lejtőn egy $0{,}1\text{ kg}$ tömegű test helyezkedik el. Mekkora szöget zár be a lejtő a vízszintessel? Mekkora a lejtőn lefelé húzó erő és mekkora a kényszererő? Mekkora a tapadási erő maximuma, ha $\mu_t = 0{,}5$? Mekkora lejtőszögnél csúszik meg a test? A nehézségi gyorsulás értéke $g = 9{,}81\text{ }\frac{\text{m}}{\text{s}^2}$.

A lejtő geometriája alapján a hajlásszög tangense:

$$
\tan \alpha = \frac{2{,}00}{6{,}00} \approx 0{,}3333 \implies \alpha \approx 18{,}43^\circ
$$

A lejtőirányú nehézségi erőkomponens nagysága:

$$
F = m \cdot g \cdot \sin \alpha = 0{,}1 \cdot 9{,}81 \cdot \sin(18{,}43^\circ) \approx 0{,}3101\text{ N}
$$

A lejtőre merőleges kényszererő nagysága:

$$
K = m \cdot g \cdot \cos \alpha = 0{,}1 \cdot 9{,}81 \cdot \cos(18{,}43^\circ) \approx 0{,}9307\text{ N}
$$

Számítsuk ki a tapadási súrlódási erő maximális lehetséges értékét:

$$
F_{t,\text{max}} = \mu_t \cdot K = 0{,}5 \cdot 0{,}9307\text{ N} \approx 0{,}4654\text{ N}
$$

Mivel a tapadási súrlódási erő maximuma ($0{,}4654\text{ N}$) nagyobb, mint a testet lefelé kényszerítő erő ($0{,}3101\text{ N}$), a súrlódás képes megakadályozni a mozgást, így a test nyugalomban marad.

Határozzuk meg azt a kritikus szöget, ahol a test éppen megcsúszna:

$$
\tan \alpha_{\text{max}} = \mu_t = 0{,}5 \implies \alpha_{\text{max}} \approx 26{,}57^\circ
$$

## Súrlódási erő a lejtőn (Mozgás közben)

### Szimuláció
[Lejtőn lecsúszó test, ha van súrlódás interaktív szimulátor](https://alexerdei73.github.io/physics-engine/project/#310ef527-8324-47b6-a1bd-ac3682ef52bb)

### A gyorsulás kiszámítása

Amennyiben a lejtő hajlásszöge meghaladja a tapadási határértéket, a test megcsúszik, és lefelé gyorsulva mozog. A mozgás közben fellépő csúszási súrlódási erő már a csúszási együtthatótól függ ($F_s = \mu \cdot K$). Írjuk fel a lejtőirányú eredő erőt:

$$
F = m \cdot g \cdot \sin \alpha
$$

$$
K = m \cdot g \cdot \cos \alpha
$$

$$
F_e = F - F_s = m \cdot g \cdot \sin \alpha - \mu \cdot K = m \cdot g \cdot \sin \alpha - \mu \cdot m \cdot g \cdot \cos \alpha
$$

Alkalmazzuk a dinamika alaptörvényét ($F_e = m \cdot a$):

$$
m \cdot a = m \cdot g \cdot \sin \alpha - \mu \cdot m \cdot g \cdot \cos \alpha
$$

Mivel a test $m$ tömege az egyenlet minden tagjában szerepel, egyszerűsíthetünk vele. A lecsúszó test egyenletes gyorsulása tehát:

$$
a = g \cdot \sin \alpha - \mu \cdot g \cdot \cos \alpha
$$

Az összefüggésből látható, hogy a lecsúszó test gyorsulása – a szabadeséshez hasonlóan – **teljesen független a test tömegétől**.

### Példa
Egy lejtő magassága $4{,}00\text{ m}$, vízszintes szélessége pedig $6{,}00\text{ m}$. Mekkora a lejtő hajlásszöge? A lejtőre helyezett test tömege $0{,}1\text{ kg}$. Mekkora a lejtőn lefelé húzó erő és a merőleges kényszererő? Mekkora a lecsúszó test gyorsulása, ha a csúszási súrlódási együttható $0{,}5$? A nehézségi gyorsulás értéke $g = 9{,}81\text{ }\frac{\text{m}}{\text{s}^2}$.

A hajlásszög meghatározása:

$$
\tan \alpha = \frac{4{,}00}{6{,}00} \approx 0{,}6667 \implies \alpha \approx 33{,}69^\circ
$$

A lejtőirányú erőkomponens:

$$
F = m \cdot g \cdot \sin \alpha = 0{,}1 \cdot 9{,}81 \cdot \sin(33{,}69^\circ) \approx 0{,}5442\text{ N}
$$

A felületre merőleges kényszererő:

$$
K = m \cdot g \cdot \cos \alpha = 0{,}1 \cdot 9{,}81 \cdot \cos(33{,}69^\circ) \approx 0{,}8162\text{ N}
$$

A mozgás közben ébredő csúszási súrlódási erő:

$$
F_s = \mu \cdot K = 0{,}5 \cdot 0{,}8162 \approx 0{,}4081\text{ N}
$$

A testet gyorsító vízszintes eredő erő:

$$
F_e = F - F_s = 0{,}5442 - 0{,}4081 = 0{,}1361\text{ N}
$$

A dinamika alaptörvényéből ($F_e = m \cdot a$) a gyorsulás értéke:

$$
0{,}1361 = 0{,}1 \cdot a \implies a = \frac{0{,}1361}{0{,}1} \approx 1{,}361\text{ }\frac{\text{m}}{\text{s}^2}
$$

A test három értékes jegyre kerekítve $1{,}36\text{ }\frac{\text{m}}{\text{s}^2}$ állandó gyorsulással csúszik lefelé.

---

## Feladatok

1. Egy lejtő függőleges magassága $3{,}00\text{ m}$, a lejtő saját (ferde) hossza pedig $5{,}00\text{ m}$. Számítsd ki a lejtő vízszintessel bezárt hajlásszögét, valamint a lejtőirányú lefelé húzó erőt egy $0{,}200\text{ kg}$ tömegű test esetén!
2. Egy kísérlet során azt tapasztaljuk, hogy egy test pontosan akkor kezd el megcsúszni, amikor a lejtő hajlásszögét felemeljük $20{,}0^\circ$-ra. Határozd meg a felületek közötti tapadási súrlódási együttható ($\mu_t$) értékét!
3. Egy $0{,}500\text{ kg}$ tömegű test egy $30{,}0^\circ$-os hajlásszögű lejtőn csúszik lefelé. A csúszási súrlódási együttható a felületek között $0{,}3$. Határozd meg a következő erők számszerű nagyságát: lejtőirányú erő ($F$), kényszererő ($K$), súrlódási erő ($F_s$), valamint az eredő erő ($F_e$)!
4. Mekkora állandó gyorsulással csúszik le egy $25{,}0^\circ$-os hajlásszögű lejtőn egy tetszőleges test, ha a csúszási súrlódási együttható értéke $0{,}2$? Függ-e a kapott gyorsulás a test tömegétől?
5. Egy raktárban sima lejtőn csúsztatnak le ládákat. Mekkora legyen a lejtő minimális hajlásszöge ahhoz, hogy a ládák maguktól megcsússzanak és elinduljanak lefelé, ha a tapadási súrlódási együttható értéke $\mu_t = 0{,}4$?

*A számítások során a nehézségi gyorsulás értékét tekintsük* $g = 9{,}81\text{ }\frac{\text{m}}{\text{s}^2}$ *-nek.*
