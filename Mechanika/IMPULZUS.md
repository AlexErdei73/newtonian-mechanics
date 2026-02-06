# Az impulzus

## A tömegpont fogalma

Az eddigiekben olyan mozgásokkal foglalkoztunk, amelyekben a test mérete elhanyagolhatónak tekinthető elmozdulásához képest. Ilyen esetben a test forgásától is eltekintünk, sőt a test teljes belső szerkezete figyelmen kívül hagyható a mozgás leírásának szempontjából.

>**A tömegpont gyakori közelítés a mechanikában, amikor a testet egy kiterjedés nélküli matematikai ponttal írjuk le, melynek tömege van.**

Egyelőre most is egyetlen tömegpont mozgásával foglalkozunk még, majd áttérünk azokra az esetekre, amikor több tömegpont mozgását vizsgáljuk egyidejűleg.

## Newton második törvénye eredeti alakjában

A második törvényt eddig az alábbi alakban használtuk:


$$
F_e = ma
$$


Itt az eredő erő $F_e$ és $a$ a gyorsulás, melyek egy irányba mutató vektorok.


$$
a = \frac {\Delta v} {t} = \frac {v - v_0} {t}
$$


Ha ezt beírjuk az előző egyenletbe és feltételezzük, hogy a tömeg állandó, tehát:


$$
m = m_0
$$


akkor:


$$
F_e = m \frac {v - v_0} {t} = \frac {mv - m_0v_0} {t} = \frac {\Delta (mv)} {t}
$$


Az $mv$ mennyiséget impulzusnak (lendületnek) nevezzük. Jele: I. Ez vektormennyiség és a sebességvektor irányába mutat. A második törvény általános alakja tehát:


$$
\overrightarrow{I} = m \overrightarrow{v}
$$



$$
\overrightarrow {F_e} = \frac {\Delta \overrightarrow {I}} {t}
$$


Ez a formula az, ahogy Newton a második törvényt eredetileg megfogalmazta. Ez az eredeti megfogalmazás állandó erő esetén érvényes alakja, tehát egyenletesen gyorsuló mozgásokra vonatkozik, amelyekkel mi foglalkozunk egyelőre.

Az eddig használt alak csak akkor érvényes, ha a tömeg állandónak tekinthető. Ezt eddig feltételeztük. A fizikában van két eset, amikor a tömeg nem tekinthető állandónak.

1. A fény vákuumbeli sebességével összemérhető sebességek esetén a tömeg nem állandó. A második törvény az eredeti alakjában ekkor is érvényes, de az impulzus kifejezése megváltozik. Ezzel a relativitáselmélet foglalkozik, nem tartozik a newtoni mechanika tárgykörébe.

2. Rakéták üzemanyagot lövellnek ki nagy sebességgel, így tömegük csökken a mozgás során. A rakéta mozgásának leírására az eredeti alak használatos az impulzussal megfogalmazva.

## Az impulzus fogalma

>**A tömeg és a sebesség szorzatát impulzusnak (lendület) nevezzük. Jele: $I$, egysége: $\frac {kg m} {s}$. Az impulzus vektormennyiség, a sebesség irányába mutat.**


$$
\overrightarrow{I} = m\overrightarrow{v}
$$


A második törvény eredeti megfogalmazása az impulzussal az előző pontban szereplő formula.

## Az impulzus megmaradása tömegpontra

Ha az eredő erő nulla, akkor az impulzus változása is nulla. Ez azt jelenti, hogy:


$$
\overrightarrow {I} = \overrightarrow {I_0}
$$


Ha a test tömege is állandó, akkor:


$$
m = m_0
$$



$$
m\overrightarrow{v} = m_0\overrightarrow{v_0}
$$


Tehát:


$$
\overrightarrow {v} = \overrightarrow {v_0}
$$


A test tehát egyenes vonalú egyenletes mozgást végez vagy nyugalomban van. Visszakaptuk tehát az első törvényt, mely csak inerciarendszerben érvényes. Tehát a második törvény eredeti alakja is inerciarendszerekre vonatkozik.

## Példák
1. Egy $1300kg$ tömegű gépkocsi egyenes úton felgyorsít $20,0 \frac {m} {s}$ sebességről $30,0 \frac {m} {s}$ sebességre $2,00s$ idő alatt. Mekkora a kezdeti lendület? Mekkora a lendület a gyorsítás végén? Mekkora a gyorsító erő? Számítsuk ki a gyorsulást! Mekkora a gyorsítás alatt megtett út? A súrlódás és a közegellenállás elhanyagolható.


$$
I_0 = mv_0 = 1300 \times 20,0 = 26000 \frac {kgm} {s}
$$



$$
I = mv = 1300 \times 30,0 = 39000 \frac {kgm} {s}
$$



$$
F_e = \frac {I - I_0} {t} = \frac {39000 -26000} {2} = 6500N = 6,50kN
$$



$$
F_e = ma
$$



$$
a = \frac {F_e} {m} = \frac {6500} {1300} = 5,00 \frac {m} {s^2}
$$



$$
s = v_0t + \frac {a} {2} t^2 = 20,0 \times 2 + \frac {5} {2}2^2 = 50,0m
$$


2. Egy vadászgép hajtóművei felszálláskor $76kN$ erőt fejtenek ki. A gép tömege $18000kg$. Mennyi idő alatt száll fel a gép, ha állóhelyzetből $80,0 \frac {m} {s}$ sebességre kell felgyorsuljon? Mekkora a gép lendülete a felszállás pillanatában? Mekkora a gyorsulás és a kifutópálya hossza, mely a felszálláshoz szükséges?


$$
I = mv = 18000 \times 80,0 = 1440000 \frac {kgm} {s}
$$



$$
I_0 = 0
$$



$$
F_e = \frac {I - I_0} {t}
$$



$$
76000 = \frac {1440000} {t}
$$



$$
t = \frac {1440000} {76000} = 18,95s
$$



$$
a = \frac {v - v_0} {t} = \frac {80,0 - 0} {18,95} = 4,222 \frac {m} {s^2}
$$



$$
s = \frac {a} {2}t^2 = \frac {4,222} {2} 18,95^2 = 758,0m
$$


---

## Feladatok

1. Mekkora a lendülete egy 45 kg tömegű gepárdnak, ha éppen 108 km/h sebességgel fut az áldozata után?
2. Egy 0,4 kg tömegű futballlabda 15 m/s sebességgel repül a kapu felé. A kapus elkapja a labdát, és 0,1 másodperc alatt megállítja azt. Mekkora átlagos erőt fejtett ki a kapus a labdára?
3. Egy teniszjátékos a 60 g tömegű labdát 0 m/s-ról 180 km/h sebességre gyorsítja fel az adogatás során. Az ütés ideje 5 ezredmásodperc ($0,005s$). Határozza meg a labda lendületváltozását és az ütő által kifejtett átlagos erőt!
4. Egy 2000 tonnás tehervonat 54 km/h sebességgel halad. Mekkora fékezőerő szükséges ahhoz, hogy a vonat 60 másodperc alatt megálljon?
5. Egy 600 kg tömegű műhold pályakorrekciót végez a világűrben. A hajtóműve 5 másodpercen keresztül 1200 N állandó erőt fejt ki a mozgás irányába. Mennyivel változott meg a műhold lendülete és sebessége a manőver végére?

