# Az impulzusmomentum

## Impulzusmomentum pontrendszerre

A tömegpont impulzusmomentuma hasonlóan jön létre az impulzusból, mint a forgatónyomaték az erőből. Az origóban legyen a forgástengely, legyen ez a z-tengelye a koordináta-rendszernek. Ekkor az erre a tengelyre vett impulzusmomentum a következőképp számítható ki:


$$
N_z = mvr \sin \alpha
$$


Ebben az egyenletben minden a mozgás x-y síkban történő vetületére vonatkozik, tehát $v$ az $m$ tömegű tömegpont sebessége az x-y síkban, $r$ pedig a tömegpont távolsága a forgástengelytől. Az $\alpha$ szög az a $180^\circ$-nál nem nagyobb szög, melyet $r$ bezár $v$-vel az x-y síkban. A szög előjele olyan, hogy az óramutató járásával ellentétes értelmű forgás pozitív impulzusmomentumot eredményez, az óramutató járásával egyező értelmű forgás pedig negatív impulzusmomentumot jelent.

Pontrendszer esetén az impulzusmomentum a rendszerhez tartozó tömegpontok impulzusmomentumainak összege, tehát az összeadást az előjeles mennyiségeken kell elvégezni az előjel figyelembevételével:


$$
N_z = \sum_{i = 1}^{N} m_iv_ir_i \sin \alpha_i
$$

Bár az impulzusmomentum vektormennyiség, mi jelenleg csak a forgástengelyre eső (z-irányú) komponensével foglalkozunk, amely előjeles mennyiség. A magyar szakirodalomban gyakran találkozhatunk a perdület vagy a forgásmennyiség elnevezésekkel is.

## Merev test impulzusmomentuma

Gondoljunk most egy merev testre, mely síkmozgást végez az origón áthaladó z-tengely körül az x-y síkban. Mivel a test merev, az $r_i$ távolság minden egyes tömegpontra állandó, és a pontok körmozgást végeznek a tengely körül. Körmozgásnál a sebesség érintőirányú, tehát merőleges a sugárra. Ez azt jelenti, hogy:


$$
\sin \alpha_i = \sin (90^\circ) = 1
$$


minden tömegpontra. Így az impulzusmomentum a következőképp számítható ki:


$$
N_z = \sum_{i = 1}^{N} r_im_iv_i
$$


Ez azt jelenti, hogy minden pontra összeadjuk a tengelytől (origótól) mért távolságnak (a kör sugarának) és az impulzusnak a szorzatát! Az impulzus itt előjeles, mivel a $v_i$ sebességek előjelesek, hiszen a sugár és a szögsebesség szorzataként írhatók fel, a szögsebesség viszont előjeles mennyiség.


$$
r_im_iv_i = r_im_ir_i\omega = m_ir_i^2\omega
$$


Így az impulzusmomentum felírható a következő módon:


$$
N_z = \left( \sum_{i = 1}^{N} m_ir_i^2 \right) \omega = \Theta \omega
$$


Mivel a szögsebesség minden pontra ugyanaz, ezért az összegből kiemeltük. 

### Példa
Egy elhanyagolható tömegű merev rúdhoz rögzítve, a forgástengelyre szimmetrikusan két egyforma $0,200 \, \text{kg}$ tömeg egyforma $0,300 \, \text{m}$ távolságra a tengelytől forog $3,00 \, \frac{\text{m}}{\text{s}}$ sebességgel. A forgás az óramutató járásával ellentétes értelmű. Számítsuk ki a rendszer impulzusmomentumát a forgástengelyre vonatkozóan!


$$
N_z = \sum_{i = 1}^{N} m_iv_ir_i = 2 \cdot 0,2 \cdot 3 \cdot 0,3 = 0,360 \, \frac{\text{kg}\cdot\text{m}^2}{\text{s}}
$$


## A tehetetlenségi nyomaték

Itt $\Theta$ neve tehetetlenségi nyomaték, és definíciója:


$$
\Theta = \sum_{i = 1}^{N} m_ir_i^2
$$


Össze kell adnunk az összes testre a tömegének és a forgástengelytől mért távolság négyzetének a szorzatait. Így a tehetetlenségi nyomaték egysége $\text{kg}\cdot\text{m}^2$. Látni fogjuk, hogy a $\Theta$ a tömeg megfelelője forgómozgás esetére, tehát a test adott tengely körüli forgatásának gyorsítását vagy lassítását igyekszik gátolni.

### Példák
1. Az előző példában mekkora a testek szögsebessége? Számítsuk ki a tehetetlenségi nyomatékot is a forgástengelyre vonatkoztatva! Mutassuk meg, hogy a tehetetlenségi nyomaték és a szögsebesség szorzata az impulzusmomentumot adja!


$$
v_i = r_i \omega
$$



$$
\omega = \frac {v_i} {r_i} = \frac {3} {0,3} = 10,0 \, \frac {1}{\text{s}}
$$



$$
\Theta = \sum_{i = 1}^{N} m_ir_i^2 = 2 \cdot 0,2 \cdot 0,3^2 = 0,036 \, \text{kg}\cdot\text{m}^2
$$



$$
N_z = \Theta \omega = 0,036 \cdot 10 = 0,360 \, \frac{\text{kg}\cdot\text{m}^2}{\text{s}}
$$


Valóban, így is ugyanannyit kapunk az impulzusmomentumra, ahogy annak lennie is kell.

2. Mi történik az előző példában a tehetetlenségi nyomatékkal, ha a testek tömegét megduplázzuk, de a forgástengelytől fele olyan messze helyezzük el ezeket?


$$
\Theta_0 = 2mr^2
$$



$$
\Theta = 2(2m)\left(\frac {r} {2}\right)^2 = 4m\frac {r^2} {4} = mr^2 = \frac {\Theta_0} {2}
$$


Látható, hogy a tehetetlenségi nyomaték a felére csökken.

## Feladatok
1. Három egyforma, egyenként $0,500 \, \text{kg}$ tömegű pontszerű test helyezkedik el egy elhanyagolható tömegű merev rúdon. Az origóban lévő forgástengelytől mért távolságuk rendre $0,200 \, \text{m}$, $0,400 \, \text{m}$ és $0,600 \, \text{m}$. A rendszer az óramutató járásával ellentétes irányban forog $5,00 \, \frac{1}{\text{s}}$ szögsebességgel. 
* a) Számítsd ki a rendszer tehetetlenségi nyomatékát!
* b) Számítsd ki a rendszer impulzusmomentumát!
2. Egy $1,50 \, \text{kg}$ tömegű golyó egy $0,800 \, \text{m}$ hosszú (elhanyagolható tömegű) madzag végén körmozgást végez. A rendszer impulzusmomentuma a középpontra (forgástengelyre) vonatkozóan $12,0 \, \frac{\text{kg}\cdot\text{m}^2}{\text{s}}$ (az óramutató járásával ellentétes). 
* a) Mekkora a golyó kerületi sebessége ($v$)?
* b) Mekkora a golyó szögsebessége ($\omega$)?
3. Egy két testből álló rendszer tehetetlenségi nyomatéka egy adott tengelyre $\Theta_1$. Hogyan változik a tehetetlenségi nyomaték, ha mindkét test tömegét a háromszorosára növeljük ($3m$), a forgástengelytől mért távolságukat pedig a harmadára csökkentjük ($\frac{r}{3}$)? Válaszodat vezesd le a képletek segítségével a 2. példa alapján!
4. Két azonos tömegű ($m = 2,00 \, \text{kg}$) pontszerű test kering egy közös tengely körül, azonos $r = 0,500 \, \text{m}$ sugarú pályán. Az "A" test sebessége $4,00 \, \frac{\text{m}}{\text{s}}$ az óramutató járásával ellentétes irányban, míg a "B" test sebessége $3,00 \, \frac{\text{m}}{\text{s}}$ az óramutató járásával megegyező irányban. 
* Számítsd ki a két test együttes (eredő) impulzusmomentumát figyelembe véve az előjeleket! 
* Milyen irányba forog a rendszer "összességében" (mi az eredő impulzusmomentum előjele)?