# Lejtő súrlódással

## Tapadási erő a lejtőn

### Kísérlet

[Súrlódás lejtőn](https://www.youtube.com/watch?v=dGQS1j_aTj8)

### Szimuláció

[Test lejtőn egyensúlyban a tapadási erő által](https://alexerdei73.github.io/physics-engine/project/#ef6ee12e-a1f2-400e-b6ce-7815f010aa4f)

### Összefüggés a lejtőszög és a tapadási együttható között

A lejtőn lefelé húzó erő:

$$
F = mg \sin \alpha
$$

A kényszererő:

$$
K = mg \cos \alpha
$$

A tapadási erő:

$$
F_t \leqslant \mu_t K
$$

$$
F_t = F
$$

Tehát:

$$
mg \sin \alpha \leqslant \mu_t mg \cos \alpha
$$

$$
\tan \alpha \leqslant \mu_t
$$

Az eredmény azt jelenti, hogy amennyiben a lejtő szöge nem éri el a határszöget, a test nem csúszik meg. A határszögre az egyenlőség vonatkozik az összefüggésben.

### Példa
A $2,00 m$ magas és $6,00 m$ széles lejtőn $0,1 kg$ tömegű test helyezkedik el. Mekkora szöget zár be a lejtő a vízszintessel? Mekkora a lejtőn lefelé húzó erő? Mekkora a kényszererő? Mekkora a tapadási erő maximuma, ha $\mu_t = 0,5$? Mekkora lejtőszögnél csúszik meg a test?

$$
\tan \alpha = \frac{2,00}{6,00} = 0,3333
$$

$$
\alpha = 18,43^\circ
$$

$$
F = mg \sin \alpha = 0,1 \times 9,81 \times \sin(18,43^\circ) = 0,3101 N
$$

$$
K = mg \cos \alpha = 0,1 \times 9,81 \times \cos(18,43^\circ) = 0,9307 N
$$

$$
F_{t,max} = \mu_t K = 0,5 \times 0,9307 N = 0,4654 N
$$

Mivel a tapadási erő maximuma nagyobb, mint a lejtőn lefelé húzó erő, a test nem csúszik meg.

$$
\tan \alpha_{max} = \mu_t = 0,5
$$

$$
\alpha_{max} = 26,57^\circ
$$

## Súrlódási erő a lejtőn

### Szimuláció

[Lejtőn lecsúszó test, ha van súrlódás](https://alexerdei73.github.io/physics-engine/project/#310ef527-8324-47b6-a1bd-ac3682ef52bb)

### A gyorsulás kiszámítása

$$
F = mg \sin \alpha
$$

$$
K = mg \cos \alpha
$$

$$
F_e = F - F_s = mg \sin \alpha - \mu K = mg \sin \alpha - \mu mg \cos \alpha
$$

$$
F_e = ma
$$

$$
a = \frac{F_e}{m}
$$

$$
a = g \sin \alpha - \mu g \cos \alpha
$$

### Példa
Egy lejtő magassága $4,00 m$, szélessége $6,00 m$. Mekkora a lejtő szöge? A lejtőre helyezett test tömege $0,1 kg$. Mekkora a lejtőn lefelé húzó erő? Mekkora a kényszererő? Mekkora a lejtőn lecsúszó test gyorsulása, ha a súrlódási együttható 0,5?

$$
\tan \alpha = \frac{4,00}{6,00} = 0,6667
$$

$$
\alpha = 33,69^\circ
$$

$$
F = mg \sin \alpha = 0,1 \times 9,81 \times \sin(33,69^\circ) = 0,5442 N
$$

$$
K = mg \cos \alpha = 0,1 \times 9,81 \times \cos(33,69^\circ) = 0,8162 N
$$

$$
F_s = \mu K = 0,5 \times 0,8162 = 0,4081 N
$$

$$
F_e = F - F_s = 0,5442 - 0,4081 = 0,1361 N
$$

$$
F_e = ma
$$

$$
0,1361 = 0,1 a
$$

$$
a = 1,361 \frac{m}{s^2}
$$

## Feladatok

1. Egy lejtő 3,00 m magas és 5,00 m hosszú. Számítsd ki a lejtő szögét, majd a lejtőn lefelé húzó erőt egy 0,2 kg tömegű testre!

2. Egy test akkor kezd csúszni, amikor a lejtő szöge 20°. Mennyi a tapadási együttható?

3. Egy 0,5 kg tömegű test egy 30°-os lejtőn csúszik lefelé. A súrlódási együttható 0,3. Mekkorák a következő erők: $F, K, F_s, F_e$?

4. Mekkora gyorsulással csúszik le egy 25°-os lejtőn egy test, ha a súrlódási együttható 0,2?

5. Mekkora legyen a lejtő minimális szöge, hogy egy test $μ_t = 0,4$ esetén megcsússzon?

