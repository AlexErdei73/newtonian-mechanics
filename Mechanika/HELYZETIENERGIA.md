# A helyzeti energia

## Az emelési munka

Vizsgáljuk meg, mitől függ az emelési munka! Emeljünk egy $m$ tömegű testet egyenletes sebességgel a Föld felszíne közelében egy kezdeti $h_0$ magasságból egy végső $h$ magasságba!

Mivel a mozgás egyenletes (gyorsulás nélküli), az általunk kifejtett emelőerő nagysága hajszálpontosan megegyezik a testre ható nehézségi erővel:

$$
F = G = m \cdot g
$$

A függőleges elmozdulás mentén végzett mechanikai munkánk:

$$
W = F \cdot s = G \cdot (h - h_0) = m \cdot g \cdot h - m \cdot g \cdot h_0 = \Delta (m \cdot g \cdot h)
$$

Látható, hogy az emelési munka nem más, mint az $m \cdot g \cdot h$ mennyiség megváltozása. Ezt a fizikai állapotjelzőt **helyzeti energiának** (potenciális energiának) nevezzük. Az emelési munka a test helyzeti energiájának növelésére fordítódik.

$$
E_h = m \cdot g \cdot h
$$

$$
W = \Delta E_h
$$

Ha a testet nem emeljük, hanem lassan és egyenletesen leeresztjük, akkor a kifejtett erőnk és az elmozdulás ellentétes irányúak, így az emelési munkánk negatív előjelű lesz. Ez azt jelenti, hogy a helyzeti energia csökkenése révén a test képes hasznos munkát végezni a külső környezet számára.

## Helyzeti energia

> **A testre ható nehézségi erő (súly) és a választott szinttől mért magasság szorzatát nehézségi vagy gravitációs helyzeti energiának nevezzük. Jele: $E_h$ vagy $E_p$.**

$$
E_h = G \cdot h = m \cdot g \cdot h
$$

### Vonatkoztatási szint

A helyzeti energia kiszámításakor minden esetben ki kell jelölnünk egy bázist, ahonnan a $h$ magasságot mérjük, vagyis ahol a helyzeti energia értéke szigorúan nulla ($h = 0$). Ezt a szintet **vonatkoztatási szintnek** (nullaszintnek) nevezzük.

> **A helyzeti energia nullaszintjét vonatkoztatási szintnek nevezzük. Ez a térben teljesen tetszőlegesen megválasztható, de egy adott fizikai feladaton belül minden helyzeti energiát szigorúan ehhez a rögzített vonatkoztatási szinthez képest kell mérni.**

### Konzervatív és disszipatív erők

Látni fogjuk a későbbiekben, hogy létezik rugalmas helyzeti energia is, valamint a gravitációs helyzeti energiának is létezik egy általánosabb, bolygóközi méretekre érvényes formulája. 

Az eddigi tanulmányaink során megfigyelhettük, hogy az emelési munka nem függ az emelés konkrét módjától vagy pályájától az ideális, veszteségmentes esetekben (feltéve, hogy lassú, állandó sebességű mozgatásról van szó). Teljesen mindegy, hogy a testet egyenesen emeljük, lejtőn gördítjük fel, vagy csigasor segítségével juttatjuk a magasba. Bár a mozgás valóságos pályája mindegyik esetben eltérő, ha a kezdő- és végpont azonos, a végzett munka is pontosan ugyanakkora lesz.

> **Azokat az erők, amelyekhez potenciális energia társítható, konzervatív erőknek nevezzük. Az ilyen erők munkája kizárólag az elmozdulás kezdő- és végpontjától függ, de teljesen független a mozgás valóságos pályájának alakjától. A nehézségi erő konzervatív erő.**

> **A nem konzervatív erőket disszipatív erőknek nevezzük. A disszipatív erők munkája függ a pálya alakjától (és gyakran a test sebességétől is), hatásukra a mechanikai energia elvész, azaz belső energiává (hővé) alakul. A súrlódási erő és a közegellenállási erő disszipatív erők.**

Helyzeti energiáról szigorúan csak konzervatív erőhatások esetén beszélhetünk.

## Példák

1. Egy $1500\text{ kg}$ tömegű vasbeton panelt a daru $5{,}00\text{ m}$ kezdeti magasságból lassan, elhanyagolható sebességgel felemel $30{,}0\text{ m}$ magasba. A vonatkoztatási szint legyen a talaj szintje. Mekkora a panel helyzeti energiája kezdetben, mekkora az emelés végén, és mennyi emelési munkát végzett a daru, ha a súrlódási veszteségek elhanyagolhatók? A nehézségi gyorsulás értéke $g = 9{,}81\text{ }\frac{\text{m}}{\text{s}^2}$.

A panel kezdő helyzeti energiája:

$$
E_{h,0} = m \cdot g \cdot h_0 = 1500 \cdot 9{,}81 \cdot 5 = 73\ 575\text{ J} \approx 73{,}58\text{ kJ}
$$

A panel végső helyzeti energiája:

$$
E_h = m \cdot g \cdot h = 1500 \cdot 9{,}81 \cdot 30{,}0 = 441\ 450\text{ J} = 441{,}45\text{ kJ}
$$

A daru által végzett hasznos emelési munka a helyzeti energia megváltozása:

$$
W = \Delta E_h = E_h - E_{h,0} = 441{,}45 - 73{,}58 = 367{,}87\text{ kJ} \approx 367{,}9\text{ kJ}
$$

2. Egy $350\text{ g}$ tömegű követ egy $1{,}50\text{ m}$ magas teraszról eldobunk, és a kő beleesik egy közeli, $3{,}00\text{ m}$ mély gödör aljára. A vonatkoztatási szint legyen a sima talaj szintje. Mekkora a kő helyzeti energiája kezdetben és a mozgás legvégén? Mekkora lenne az emelési munka, ha a követ egy csigán átvetett kötélre akasztanánk, és lassan, egyenletesen leengednénk a gödör aljára? A veszteségektől eltekinthetünk.

Váltsuk át a tömeget kilogrammra ($350\text{ g} = 0{,}35\text{ kg}$). A kőre ható nehézségi erő nagysága:

$$
G = m \cdot g = 0{,}35 \cdot 9{,}81 = 3{,}4335\text{ N}
$$

A kő kezdeti helyzeti energiája (a talajszint felett):

$$
E_{h,0} = G \cdot h_0 = 3{,}4335 \cdot 1{,}50 \approx 5{,}150\text{ J} 
$$

A kő végső helyzeti energiája (mivel a gödör alja a talajszint alatt van $3\text{ méterrel}$, a magassága $h = -3{,}00\text{ m}$):

$$
E_h = G \cdot h = 3{,}4335 \cdot (-3{,}00) = -10{,}3005\text{ J} \approx -10{,}30\text{ J}
$$

Az egyenletes leeresztés során végzett emelési munka a helyzeti energia változás:

$$
W = \Delta E_h = E_h - E_{h,0} = -10{,}3005 - 5{,}1503 \approx -15{,}45\text{ J}
$$

Az emelési munka számszerűen $-15{,}45\text{ J}$ lenne. A negatív előjel azt mutatja, hogy ha a követ egy kötéllel lassan engednénk le, a kő pontosan $15{,}45\text{ J}$ hasznos mechanikai munkát végezne a külső rendszeren (például meghajthatna egy generátort vagy felemelhetne egy ellensúlyt).

---

## Feladatok

**1. Könyv áthelyezése a polcra**
Egy $2\text{ kg}$ tömegű könyvet az $1\text{ méter}$ magas asztallapról felemelünk, és átteszünk a $2{,}2\text{ méter}$ magasságban lévő könyvespolcra. Mekkora a könyv helyzeti energiájának megváltozása, ha a vonatkoztatási szintnek a szoba padlóját választjuk?

**2. Hegymászó a csúcson**
Mekkora a helyzeti energiája egy $75\text{ kg}$ tömegű hegymászónak a $4810\text{ méter}$ magas Mont Blanc csúcsán állva, ha a vonatkoztatási szintnek a tengerszintet választjuk?

**3. Építőanyag emelése**
Egy építkezésen $400\text{ kg}$ össztömegű téglarakományt emelnek fel a $12\text{ méter}$ magasságban lévő állványzatra. Mennyi hasznos emelési munkát végez a teherautóra szerelt hidraulikus daru a folyamat során, ha a súrlódási veszteségektől eltekintünk?

**4. Negatív helyzeti energia**
Egy kísérlet során egy test nehézségi helyzeti energiája a választott vonatkoztatási szinthez képest pontosan $-150\text{ J}$-nak adódik. Mit jelent a negatív előjel, és hol helyezkedik el a test a kijelölt nullaszinthez viszonyítva?

**5. Alma leesése a fáról**
Egy $0{,}5\text{ kg}$ tömegű alma leesik a fa $3{,}5\text{ méter}$ magas ágáról az alatta lévő földre. Mekkora mechanikai munkát végez a gravitációs erő az alma függőleges elmozdulása során?

*A feladatok megoldásához a nehézségi gyorsulás értékét tekintsük* $g = 9{,}81\text{ }\frac{\text{m}}{\text{s}^2}$ *-nek.*
