# Az erő mérése

## A súly fogalma

Láttuk, hogy a szabadon eső testek a Föld felé, függőlegesen lefelé gyorsulnak a felszín közelében a nehézségi gyorsulással. Ezt a nehézségi erőnek tulajdonítjuk, melyet a Föld távolról fejt ki a testekre.

A második törvény értelmében:

$$
F_e = m \cdot a
$$

$$
F_e = G
$$

$$
a = g
$$

Tehát a testekre:

$$
G = m \cdot g
$$

nehézségi erő hat. Ha a test egyensúlyban van, tehát nem esik szabadon, hanem például fel van függesztve vagy épp alá van támasztva, akkor ez csak úgy lehetséges, hogy az alátámasztás vagy felfüggesztés a nehézségi erőt kiegyenlíti. Vagyis egy vele egyenlő nagyságú, de függőlegesen felfelé mutató kényszererőt fejt ki a testre ott, ahol vele érintkezik. Ekkor viszont a test is kifejt egy a nehézségi erővel egyenlő nagyságú, de ellentétes irányú, tehát függőlegesen lefelé mutató erőt az alátámasztásra vagy a felfüggesztésre a harmadik törvény értelmében. Ezt az erőt nevezzük a test súlyának.

$$
K = G = m \cdot g
$$

$$
F_s = K
$$

$$
F_s = m \cdot g
$$

Első egyenletünk azt fejezi ki, hogy az alátámasztás vagy felfüggesztés által kifejtett kényszererő egyenlő a nehézségi erővel, így a test egyensúlyban van, nem mozdul. A második egyenlet a harmadik törvényt tükrözi, miszerint a súlyerő és a kényszererő egyenlő nagyságú.

> **Az az erő, amellyel a test nyomja az alátámasztást, vagy húzza a felfüggesztést, a test súlya.**

Az egyensúlyban lévő test súlya tehát megegyezik a rá ható nehézségi erő nagyságával. $1\text{ kg}$ tömegű test súlya $9{,}81\text{ N}$, azaz kerekítve kb. $10\text{ N}$. Ebből a formulából adódik az is, hogy $10\text{ dkg}$ tömeg súlya megközelítőleg $1\text{ N}$.

## A rugós erőmérő

Az erő nemcsak gyorsítani képes a testeket, hanem az alakjukat is megváltoztathatja. Ha például egy függőleges rugóra akasztunk egy testet, akkor a rugó megnyúlik a test súlya miatt. Természetesen minél nagyobb a súly, annál nagyobb a megnyúlás is. Mivel egyensúlyban a súly egyenesen arányos a tömeggel, a rugót skálával ellátva rugós erőmérőt készíthetünk. Ezt mutatjuk be a kísérletben, a szimulációban pedig kipróbálható, hogy a tömeg megduplázásakor hogyan változik meg a rugó megnyúlása.

### Kísérlet
[Rugós erőmérő felépítése és használata](https://www.youtube.com/watch?v=bSg7M2NgKZA)

### Szimuláció
[A súly interaktív szimuláció](https://alexerdei73.github.io/physics-engine/project/#38c6b933-5bd4-42f2-a59e-1390633a14a3)

## A súly függése a gyorsulástól

Ha a test a Földhöz képest nem áll egy helyben, hanem függőleges irányban gyorsuló mozgást végez, akkor a súlya nagyobb vagy kisebb lesz, mint a rá ható gravitációs erő. Vizsgáljuk a mozgást a Földhöz rögzített inerciarendszerből!

Legyen először a test gyorsulása függőlegesen **felfelé** mutató, a nagysága pedig $a$. Ahhoz, hogy a test felfelé gyorsuljon, a Newton-féle mozgásegyenlet alapján a felfelé mutató kényszererőnek nagyobbnak kell lennie, mint a lefelé mutató nehézségi erőnek:

$$
F_e = K - G = m \cdot a
$$

A kényszererőt kifejezve kapjuk:

$$
K = m \cdot a + G = m \cdot a + m \cdot g = m \cdot (a + g)
$$

Mivel a súly és a kényszererő továbbra is egyenlő nagyságúak Newton harmadik törvénye alapján ($F_s = K$), a test súlya felfelé gyorsuláskor megnövekszik:

$$
F_s = m \cdot (a + g)
$$

Most vizsgáljuk meg azt az esetet, amikor a test függőlegesen **lefelé** gyorsul $a$ nagyságú gyorsulással! Ha a testet csupán óvatosan leengedjük, a lefelé mutató nehézségi erő nagyobb, mint a felfelé tartó kényszererő:

$$
F_e = G - K = m \cdot a
$$

Ebből a kényszererő, és így a test lecsökkent súlya is kiszámítható:

$$
F_s = K = G - m \cdot a = m \cdot g - m \cdot a = m \cdot (g - a)
$$

Gondoljuk végig, hogyan határozzuk meg az eredő erő nagyságát! Mivel a kényszererő és a nehézségi erő ellentétes irányú vektorok, az eredő erő nagysága a különbségük, ahol a nagyobbikból vonjuk ki a kisebbiket. Ha a test felfelé gyorsul, a kényszererő a nagyobb; ha lefelé gyorsul (de a gyorsulása kisebb, mint $g$), a nehézségi erő a nagyobb.

Rendkívül érdekes eset áll elő, ha a testet a nehézségi gyorsulásnál nagyobb ütemben **lefelé kényszerítjük gyorsulásra ($a > g$)**. Ha a testet egy lefelé száguldó rúdhoz rögzítjük vagy egy gép erősen lefelé rántja, a nehézségi erő önmagában már nem képes biztosítani a kívánt nagy gyorsulást. Ahhoz, hogy az eredő erő elég nagy legyen lefelé, a kényszererőnek irányt kell váltania: ekkor a kényszererő már nem felfelé tartja a testet, hanem **függőlegesen lefelé** nyomja azt. Newton harmadik törvénye miatt a test ekkor felfelé mutató ellenhatást fejt ki, vagyis a kényszerű lefelé gyorsítás közben a test súlya megfordul, és felfelé fogja nyomni az őt korlátozó alátámasztást.

Ha a testet külső kényszer nélkül, szabadon engedjük esni, akkor a gyorsulása pontosan a nehézségi gyorsulás lesz ($a = g$). Ha ezt behelyettesítjük a lefelé gyorsuló mozgás súlyképletébe, látható, hogy a súly pontosan nullává válik ($F_s = m \cdot (g - g) = 0$). Ez a **súlytalanság állapota**. Szabadesés közben a test nem fejt ki erőt semmilyen alátámasztásra vagy felfüggesztésre, így a kényszererő és a súlyerő is teljesen megszűnik.

## A súlytalanság állapota

### Kísérlet
[Walter Lewin professzor demonstrációja a súlytalanságra (MIT)](https://www.youtube.com/watch?v=Z07tTuE1mwk&t=27m30s)

A videóban két nagyon tanulságos kísérletet láthatunk egymás után:
1. Az első kísérletben a professzor egy vízzel teli műanyag palackot tart a kezében, majd leugrik az asztal tetejéről. Amíg szabadon esik a levegőben, a kezét elhúzza a palack alól. A palack a keze felett szabadon lebeg a térben, ami bizonyítja, hogy a szabadesés ideje alatt teljesen súlytalan.
2. A második kísérletben egy elektronikus mérlegre erősített súlyt ejtenek le. A számítógép által rögzített grafikonon tökéletesen kirajzolódnak a folyamat szakaszai: a kezdeti nyugalmi érték a szabadesés kezdetén azonnal nullára esik vissza. Amikor a szerkezet eléri a puha párnát, a fékeződés miatt a súly hirtelen a normál érték többszörösére ugrik meg (túlterhelés), majd a rugalmas visszapattanás után a levegőben újra egy rövid súlytalan szakasz figyelhető meg.

### Szimuláció
[Rugalmas erő változása szabadesés közben interaktív szimuláció](https://alexerdei73.github.io/physics-engine/project#416bad65-3027-47ac-909f-fc53e64fc5a1)

Vizsgáljuk meg a rugó hosszát és a rugalmas erő időbeli változását a szimuláció futtatása során! Érdemes ezeket a mennyiségeket grafikonon ábrázolni a szoftverben.

> **Szabadesés közben – és minden olyan esetben, amikor egy test kizárólag a nehézségi erő hatása alatt mozog, így a gyorsulása pontosan megegyezik a nehézségi gyorsulással – a test a súlytalanság állapotába kerül.**
