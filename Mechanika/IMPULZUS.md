# Az impulzus

## A tömegpont fogalma

Az eddigiekben olyan mozgásokkal foglalkoztunk, amelyekben a test mérete elhanyagolhatónak tekinthető az elmozdulásához kőpest. Ilyen esetben a test forgásától is eltekintünk, sőt a test teljes belső szerkezete figyelmen kívül hagyható a mozgás leírásának szempontjából.

> **A tömegpont gyakori közelítés a mechanikában, amikor a testet egy kiterjedés nélküli, matematikai ponttal írjuk le, amelynek tömege van.**

Egyelőre most is egyetlen tömegpont mozgásával foglalkozunk, majd áttérünk azokra az esetekre, amikor több tömegpont mozgását vizsgáljuk egyidejűleg.

## Newton második törvénye eredeti alakjában

A második törvényt eddig az alábbi alakban használtuk:

$$
F_e = m \cdot a
$$

Itt az $F_e$ eredő erő és az $a$ gyorsulás egy irányba mutató vektorok.

$$
a = \frac {\Delta v} {t} = \frac {v - v_0} {t}
$$

Ha ezt beírjuk az előző egyenletbe, és feltételezzük, hogy a tömeg állandó, tehát:

$$
m = m_0
$$

akkor:

$$
F_e = m \cdot \frac {v - v_0} {t} = \frac {m \cdot v - m_0 \cdot v_0} {t} = \frac {\Delta (m \cdot v)} {t}
$$

A $m \cdot v$ mennyiséget impulzusnak (lendületnek) nevezzük. Jele: $I$. Ez vektormennyiség, és a sebességvektor irányába mutat. A második törvény általános alakja tehát:

$$
\vec{I} = m \cdot \vec{v}
$$

$$
\vec{F}_e = \frac {\Delta \vec{I}} {t}
$$

Ez az a formula, ahogyan Newton a második törvényt eredetileg megfogalmazta. Ez az eredeti megfogalmazás állandó erő esetén érvényes, tehát egyenletesen változó mozgásokra vonatkozik, amelyekkel egyelőre foglalkozunk.

Amennyiben az erő változik, a képlet csak az átlagos erőt adja meg. Ez általában nem egyezik meg az erő pillanatnyi értékével. Azonban a $t$ időtartam csökkentésével elérhető, hogy az átlagerő a számítási pontosságunkon belül megegyezzen az erő pillanatnyi értékével. Ilyenkor a képlet úgy értendő, hogy a $t$ időtartamot elegendően rövidre választjuk a kívánt pontosság eléréséhez. Ennek jelölése a következő:

$$
t \to 0
$$

Az eddig használt alak ($F_e = m \cdot a$) csak akkor érvényes, ha a tömeg állandónak tekinthető. Ezt eddig feltételeztük. A fizikában van két fő eset, amikor a tömeg nem tekinthető állandónak:

1. A fény vákuumbeli sebességével összemérhető sebességek esetén a tömeg nem állandó. A második törvény az eredeti alakjában ekkor is érvényes, de az impulzus kifejezése megváltozik. Ezzel a relativitáselmélet foglalkozik, ami nem tartozik a newtoni mechanika tárgykörébe.
2. A rakéták üzemanyagot lövellnek ki nagy sebességgel, így tömegük csökken a mozgás során. A rakéta mozgásának leírására az eredeti, impulzussal megfogalmazott alak használatos.

## Az impulzus fogalma

> **A test tömegének és sebességének szorzatát impulzusnak (lendületnek) nevezzük. Jele: $I$, egysége: $\text{kg} \cdot \text{m/s}$. Az impulzus vektormennyiség, amely a sebesség irányába mutat.**

$$
\vec{I} = m \cdot \vec{v}
$$

A második törvény eredeti, impulzussal felírt megfogalmazása a fentebb szereplő formula.

## Az impulzus megmaradása tömegpontra

Ha az eredő erő nulla, akkor az impulzus változása is nulla. Ez azt jelenti, hogy:

$$
\vec{I} = \vec{I}_0
$$

Ha a test tömege is állandó, akkor:

$$
m = m_0
$$

$$
m \cdot \vec{v} = m_0 \cdot \vec{v}_0
$$

Tehát:

$$
\vec{v} = \vec{v}_0
$$

A test tehát egyenes vonalú, egyenletes mozgást végez vagy nyugalomban van. Visszakaptuk tehát az első törvényt, amely csak inerciarendszerben érvényes. Ebből látszik, hogy a második törvény eredeti alakja inerciarendszerekre vonatkozik.

## Példák

1. Egy $1300\text{ kg}$ tömegű gépkocsi egyenes úton felgyorsít $20{,}0\text{ }\frac{\text{m}}{\text{s}}$ sebességről $30{,}0\text{ }\frac{\text{m}}{\text{s}}$ sebességre $2{,}00\text{ s}$ idő alatt. Mekkora a kezdeti lendület? Mekkora a lendület a gyorsítás végén? Mekkora a gyorsítóerő? Számítsuk ki a gyorsulást és a gyorsítás alatt megtett utat! A súrlódás és a közegellenállás elhanyagolható.

$$
I_0 = m \cdot v_0 = 1300 \cdot 20{,}0 = 26\ 000\text{ }\frac{\text{kg} \cdot \text{m}}{\text{s}}
$$

$$
I = m \cdot v = 1300 \cdot 30{,}0 = 39\ 000\text{ }\frac{\text{kg} \cdot \text{m}}{\text{s}}
$$

$$
F_e = \frac {I - I_0} {t} = \frac {39\ 000 - 26\ 000} {2} = 6500\text{ N} = 6{,}50\text{ kN}
$$

$$
F_e = m \cdot a
$$

$$
a = \frac {F_e} {m} = \frac {6500} {1300} = 5{,}00\text{ }\frac{\text{m}}{\text{s}^2}
$$

$$
s = v_0 \cdot t + \frac {a} {2} \cdot t^2 = 20{,}0 \cdot 2 + \frac {5} {2} \cdot 2^2 = 50{,}0\text{ m}
$$

2. Egy vadászgép hajtóművei felszálláskor $76\text{ kN}$ erőt fejtenek ki. A gép tömege $18\ 000\text{ kg}$. Mennyi idő alatt száll fel a gép, ha álló helyzetből $80{,}0\text{ }\frac{\text{m}}{\text{s}}$ sebességre kell felgyorsulnia? Mekkora a gép lendülete a felszállás pillanatában? Mekkora a gyorsulás és a felszálláshoz szükséges kifutópálya hossza?

$$
I = m \cdot v = 18\ 000 \cdot 80{,}0 = 1\ 440\ 000\text{ }\frac{\text{kg} \cdot \text{m}}{\text{s}}
$$

$$
I_0 = 0
$$

$$
F_e = \frac {I - I_0} {t}
$$

$$
76\ 000 = \frac {1\ 440\ 000} {t}
$$

$$
t = \frac {1\ 440\ 000} {76\ 000} \approx 18{,}95\text{ s}
$$

$$
a = \frac {v - v_0} {t} = \frac {80{,}0 - 0} {18{,}95} \approx 4{,}222\text{ }\frac{\text{m}}{\text{s}^2}
$$

$$
s = \frac {a} {2} \cdot t^2 = \frac {4{,}222} {2} \cdot 18{,}95^2 \approx 758\text{ m}
$$

---

## Feladatok

**1. A leggyorsabb emlős lendülete**
Mekkora a lendülete egy $45\text{ kg}$ tömegű gepárdnak, ha éppen $108\text{ km/h}$ állandó sebességgel fut az áldozata után?

**2. Labda megállítása a kapuban**
Egy $0{,}4\text{ kg}$ tömegű futballlabda $15\text{ }\frac{\text{m}}{\text{s}}$ sebességgel repül a kapu felé. A kapus elkapja a labdát, és $0{,}1\text{ s}$ alatt teljesen megállítja azt. Mekkora átlagos erőt fejtett ki a kapus a labdára a fékezési szakaszban?

**3. Teniszadogatás**
Egy teniszjátékos a $60\text{ g}$ tömegű labdát $0$-ról $180\text{ km/h}$ sebességre gyorsítja fel az adogatás során. Az ütés érintkezési ideje $5\text{ ezredmásodperc}$ ($0{,}005\text{ s}$). Határozza meg a labda lendületváltozását és az ütő által kifejtett átlagos erőt!

**4. Tehervonat fékezése**
Egy $2000\text{ tonnás}$ tehervonat $54\text{ km/h}$ sebességgel halad a pályán. Mekkora állandó fékezőerő szükséges ahhoz, hogy a vonat pontosan $60\text{ másodperc}$ alatt teljesen megálljon?

**5. Műhold pályakorrekciója**
Egy $600\text{ kg}$ tömegű műhold pályakorrekciót végez a világűrben. A hajtóműve $5\text{ másodpercen}$ keresztül $1200\text{ N}$ állandó erőt fejt ki a mozgás irányába. Mennyivel változott meg a műhold lendülete és sebessége a manőver végére?


