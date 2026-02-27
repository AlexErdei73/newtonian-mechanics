# Feladatok a bolygomozgasra

## Peldak Kepler harmadik torvenyere
1. A Nap-Fold atlagos tavolsag az un. csillagaszati egyseg (CSE). Tudjuk, hogy a Fold egy csillagaszati egysegre van tehat a Naptol es keringesi ideje 1 ev. Mekkora a Mars bolygo keringesi ideje, ha atlagos Naptol mert tavolsaga 1,52 csillagaszati egyseg? A Venusz bolygo keringesi ideje 0,6152 ev. Milyen messze van atlagosan a Naptol?

$$
\frac {a^3} {T^2} = 1
$$

Itt $a$-t csillagaszati egysegben, $T$-t evekben adtuk meg. 

$$
T_{Mars} = \sqrt {a_{Mars}^3} = \sqrt {1,524^3} = 1,881ev = 687,0nap
$$

$$
a_{Venusz} = \sqrt [3] {T_{Venusz}^2} = \sqrt [3] {0,6152^2} = 0,7233 CSE
$$

2. Geostacionarius palyan keringo muholdak a Folddel egyutt forognak, tehat keringesi idejuk 1nap. Az elso kozmikus sebesseg alapjan szamitsuk ki milyen magassagban vannak a felszin felett az ilyen tavkozlesi muholdak!

$$
\frac {a^3} {T^2} = \frac {R^3} {(\frac {2 \pi R} {\sqrt {gR}})^2}
$$

$$
\frac {a^3} {T^2} = \frac {gR^2} {4 \pi^2}
$$

$$
a^3 = \frac {gR^2T^2} {4 \pi^2} = \frac {9,81 \times 6370000^2 \times 86400^2} {4 \times 3,1415^2} = 7,527 \times 10^{22}m^3
$$

$$
a = \sqrt [3] {7,527 \times 10^{22}} = 42220000m = 42220km
$$

A magassag:

$$
h = a - R = 42220 - 6370 = 35850km
$$

A valosagban a 35786km magassagot hasznalnak, amely 3 ertekes jegyre megegyezik a mi szamitasunkbol kapott ertekkel. 

3. A nemzetkozi urallomas 420km magassagban kering a Foldfelszin felett. Szamitsuk ki a keringesi idejet! Mekkora a sebessege ebben a magassagban? Hany szazaleka ez az elso kozmikus sebessegnek?

$$
\frac {a^3} {T^2} = \frac {gR^2} {4 \pi^2}
$$

$$
T^2 = \frac {4 \pi^2 a^3} {gR^2} = \frac {4 \pi^2 \times (6370000 + 420000)^3} {9,81 \times 6370000^2}
$$

$$
T = 5572s = 93min
$$

$$
v = \frac {2 \pi a} {T} = \frac {2 \times 3,1415 \times (6370000 + 420000)} {5572} = 7656 \frac {m} {s}
$$

$$
\frac {7656} {7905} \times 100 = 96,86%
$$

Ez tehat 96,9%-a az elso kozmikus sebessegnek. Azert van ilyen kozel, mivel a magassag viszonylag kicsi a Fold sugarahoz kepest, tehat szinte olyan a keringes, mint az elso kozmikus sebesseg kiszamitasakor felteteleztuk. Ebben a magassagban a legellenallas meg nem teljesen nulla, ezert idonkent alkalmaznak egy kis meghajtast, hogy az urallomas ne veszitsen a magassagabol.