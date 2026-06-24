# Folyadékok áramlása

## Áramlások megfigyelése

### Kísérletek

* [Áramlás megfigyelése füsttel, Physics Girl videó](https://www.youtube.com/watch?v=N7d_RWyOv20)
* [Sas Elemér kísérlete füstkarikákkal](https://www.youtube.com/watch?v=Yg0TPid2Yt4&t=11s)
* [Folyadékáramlás megfigyelése tinta befecskendezéssel](https://www.youtube.com/watch?v=cAdud5Wdvyw)
* [Szabályos réteges áramlás Hele-Shaw berendezésben](https://www.youtube.com/watch?v=iixOXO5hubw)

A kísérletek mutatják, hogy az áramlások mind levegőben, mind vízben jól megfigyelhetők. Levegőbe általában füstöt fújunk, és ennek a kis részecskéi követik az áramlást. Víz esetében általában tintát fecskendezünk a vízbe, és a tinta fogja követni az áramlást. 

Azt is látjuk továbbá, hogy az áramlások általában örvényes, gomolygó, szinte kiszámíthatatlan, úgynevezett kaotikus jelenségek. Bizonyos körülmények között azonban szabályos, úgynevezett lamináris, áramvonalas áramlás alakul ki.

## A sebességtér

Egy adott pillanatban a folyadék minden pontjában megmérhető a sebesség iránya és nagysága, vagyis a sebességvektor. Ez a sebességtér. Ez más és más sebességet jelent a folyadék más és más koordinátájú pontjaiban, illetve függ még az időtől is, hiszen az áramlási kép általában az időben is változik.

$$\vec{u} = \vec{u}(x, y, z, t)$$

Ez a vektor a számítások során három egyenletet jelent a három komponensre nézve:

$$
\begin{aligned}
u = u(x, y, z, t) \\
v = v(x, y, z, t) \\
w = w(x, y, z, t)
\end{aligned}
$$

Praktikus okai vannak, hogy a folyadékok mechanikájában a sebesség jelölése általában $\vec{u}$, a komponensek jelölése pedig $u, v, w$.

## Ideális folyadékok

Mi csak összenyomhatatlan folyadékok áramlásával fogunk foglalkozni. A valódi folyadékokra ez jó közelítés, de még gázokra (például a levegőre) is elfogadható, ha az áramlási sebesség nem haladja meg a hangsebesség $0,3$-szorosát. Nyilván ez a közelítés nem alkalmas a folyadékban terjedő hanghullámok leírására.

További igen erős idealizáció a súrlódásmentes folyadék, melyben érintőirányú erők nem lépnek fel. Az érintőirányú erők hiányában a folyadék darabkái nem képesek forgásba jönni, tehát nem alakulhatnak ki örvények sem. Energiaveszteség sincs, tehát a mechanikai energia megmaradó mennyiség, ahogy látni fogjuk. Ha valamiképpen a súrlódásmentes folyadék mégis forgásba jönne, ez a forgás megmaradna. 

Ez azt is jelenti, hogy az örvénylő, turbulens áramlás ebben a megközelítésben nem lehetséges, tehát ez igen durva közelítés. Csak örvénymentes, lamináris áramlások lehetségesek, ahol az áramvonalakat jól meg lehet figyelni. Ha az áramvonalak alakja az időben is állandó, akkor időben állandó, stacionárius áramlásról beszélünk. Először ezzel a közelítéssel foglalkozunk.

## Áramvonalak, áramcső fogalma

> **Azok a görbék, melyek minden pontjában a sebességvektor az érintő irányába mutat, az áramvonalak.**

Áramvonalak nem metszhetik egymást, hiszen a sebesség nem rendelkezhet egy adott pontban két különböző iránnyal. Ez alól kivétel, ha a folyadéknak forrása vagy nyelője van egy pontban. Ezek olyan idealizált pontok, ahol folyadék jut a rendszerbe vagy onnan eltávozik. Ha a forrás vagy nyelő pontszerűnek tekinthető, akkor innen áramvonalak indulnak ki, vagy ide futnak be. Az áramvonalakat olyan sűrűn szokás berajzolni, hogy az egységnyi, áramvonalakra merőleges felületen a sebesség nagyságával megegyező számú áramvonal haladjon át.

A stacionárius áramlás esetén az áramvonalak áramcsöveket határolnak. Ezekben az áramvonalak által alkotott "falak" mentén áramlik a folyadék, tehát a folyadék csak az áramvonalakra merőleges felületeken át áramolhat be, és ezeken át áramolhat ki. Ebből adódik, hogy a tényleges csövek is áramcsövek egyben, vagyis az áramvonalak az akadályok falaival párhuzamosak. A folyadék nem áramolhat keresztül a csövek falain.

## A kontinuitási egyenlet

> **Az összenyomhatatlan folyadék sebességtere – a pontforrásoktól eltekintve – mindenütt forrásmentes. Ez azt jelenti, hogy tetszőleges nyugvó térfogatelembe egy adott pillanatban belépő áramvonalak száma egyenlő az onnan kilépő áramvonalak számával. Ez a teljes folyadékra nézve azt jelenti, hogy annak térfogata nem változik az áramlás során. Ez a kontinuitási egyenlet, mely azt fejezi ki, hogy a folyadék alakja folytonosan változhat, de a térfogata állandó, amennyiben a rendszerbe nem jut kívülről folyadék, vagy nem folyik ki onnan.**

Legyen egy áramcső áramlásra merőleges felülete a folyadék belépésénél $A_1$, a kilépésnél pedig $A_2$. Ha a sebesség $u_1$, ahol a folyadék beáramlik, és $u_2$, ahol kiáramlik, akkor $\Delta t$ idő alatt a beáramló és a kiáramló folyadéktérfogatok egyenlők:

$$
\begin{aligned}
\Delta V_1 = A_1 u_1 \Delta t \\
\Delta V_2 = A_2 u_2 \Delta t
\end{aligned}
$$

Mivel az összenyomhatatlan folyadék térfogata nem változhat, a belépő és kilépő térfogatnak meg kell egyeznie ($\Delta V_1 = \Delta V_2$):

$$A_1 u_1 \Delta t = A_2 u_2 \Delta t$$

Ebből a következő összefüggésre jutunk:

$$A_1 u_1 = A_2 u_2$$

> **Az áramcsőben az áramlás sebessége fordítottan arányos az áramcsőnek az áramlás irányára merőleges keresztmetszetével.**

### Példa
Egy kerti slag belső sugara $r_1 = 0,5\text{ cm}$ (azaz az átmérője $1\text{ cm}$). A csőben az áramlás sebessége $1\text{ m/s}$. Mekkora a csőből a kiáramlás sebessége, ha a cső vége szűkített, és az ottani átmérője mindössze $d_2 = 0,25\text{ cm}$?

A szűkületben a cső átmérője ($0,25\text{ cm}$) pontosan negyede a slag eredeti átmérőjének ($1\text{ cm}$). Mivel a kör keresztmetszete az átmérő négyzetével arányos ($A = \frac{d^2\pi}{4}$), a kilépő felület az eredeti felületnek az $\frac{1}{16}$-od része lesz:

$$A_2 = \frac{A_1}{16}$$

A kontinuitási egyenletből kifejezve a keresett sebességet:

$$u_2 = \frac{A_1 u_1}{A_2} = \frac{A_1 u_1}{A_1 / 16} = 16 u_1 = 16 \cdot 1\text{ m/s} = 16\text{ m/s}$$

A szűkített végen a kiáramlás sebessége $16\text{ m/s}$.

---

## Feladatok

1. Egy folyó egyenletes, stacionárius áramlással folyik. Egy széles szakaszon a folyómeder keresztmetszete $60\text{ m}^2$, és itt a víz áramlási sebessége $0,5\text{ m/s}$. Később a folyó egy szűk szurdokba ér, ahol a meder összeszűkül és a mélysége is megváltozik, így az új keresztmetszet mindössze $15\text{ m}^2$ lesz. Mekkora a víz áramlási sebessége ebben a szűk szurdokban?
2. Egy lakás fő vízvezetéscsövének belső átmérője $2\text{ cm}$. Ebből a csőből ágazik el a fürdőszobai csaptelep, amelynek a végén lévő kör alakú nyílás átmérője $8\text{ mm}$. Ha a fővezetékben a víz $0,4\text{ m/s}$ sebességgel áramlik, mekkora sebességgel fúvódik ki a víz a teljesen megnyitott csapon keresztül?
3. Egy nagy ipari légtechnikai csőben $4\text{ m/s}$ sebességgel áramlik a levegő. A cső egy olyan elágazáshoz ér, ahol két egyforma, kisebb átmérőjű csőre válik szét. A kontinuitás értelmében a belépő levegőmennyiség egyenlően oszlik meg a két kisebb ág között. Határozd meg a kis csövekben mérhető áramlási sebességet, ha tudjuk, hogy az elágazás utáni csövek keresztmetszete külön-külön pontosan harmada a főcső eredeti keresztmetszetének!

