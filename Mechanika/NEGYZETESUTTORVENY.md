# A negyzetes úttorveny

## Az út kiszámítása
Idézzük fel a sebesség-idő grafikont a lejtőn lefele mozgó test esetére, amikor a gyorsulás $0.5 \frac {m} {s^2}$.

![egyenletesen gyorsuló test sebesség-idő grafikonja](Kepek/egyenletesengyorsulomozgassebidograf.png)

Arra is emlékezunk, hogy a pillanatnyi sebesség görbéje (egyenese) alatti terület általános esetben is a megtett út.

Ez alapján könnyen kiszámíthatjuk a megtett utat abban az esetben, ha a $v_0$ kezdősebesseg 0. Ekkor a t időpillanatban elért sebesség:

$$
a = \frac {v - v_0} {t} = \frac {v} {t}
$$

Mindkét oldalt t-vel megszorozva kapjuk, hogy

$$
v = a \times t
$$

Most egy derékszögü háromszög területét kell meghatároznunk, melynek derékszögü csúcsa az idő tengelyen (vízszintes tengely) van a t időpontnal. Az egyik befogó tehát $t$, a másik pedig $a \times t$. A derékszögü háromszög területe az pont fele a téglalap területének, tehát:

$$
s = \frac {(a \times t) \times t} {2}
$$

A keresett formula melyet negyzetes uttorvenynek nevezunk:

$$
s = \frac {a} {2} \times t^2
$$

> **Az nulla kezdősebessegu egyenletesen gyorsuló mozgás által megtett út az idő négyzetével egyenesen arányos, az arányossági tényezö a gyorsulás fele.**

### Példa
Mekkora utat tesz meg az álló helyzetböl lejtőn lecsúszó test 4s alatt, ha gyorsulása $0.5 \frac {m} {s^2}$?

$$
s = \frac {a} {2} \times t^2 = \frac {0.5 \frac {m} {s^2}} {2} \times 16s^2 = 4m
$$

Ez a példa pont a grafikonon ábrázolt mozgás. Látszik azonban a grafikonról, hogy a sebesseg egyenese alatti terület 4s-ig az pont 4 egység négyzet (2 egész négyzet és 2 ketté vágott egész négyzet).

## Az út-idő grafikon
Vizsgáljuk most meg az út-idő grafikont, amit megkaphatunk a szimuláció alapján is. Erről is nyilvánvalóan 4m-t kell leolvassunk 4s idő elteltékor.

[Súrlódás mentes mozgás lejtőn](https://alexerdei73.github.io/physics-engine/project/#94f47c36-ead0-4d85-a1ff-ac1827797ce9)

Gyakorlásképp nézzük meg az út-idő grafikon képét a szimuláció alapján! A következő grafikont kell kapnunk:

![Negyzetes úttorveny grafikonja](Kepek/negyzetesuttorvenygraf.png)

Látszik is, hogy valóban a megtett út 4m, 4s idő elteltékor. A görbe neve parabola.