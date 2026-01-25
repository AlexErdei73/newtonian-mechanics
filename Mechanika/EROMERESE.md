# Az erő mérése

## A súly fogalma

Láttuk, hogy a szabadon eső testek a Föld felé, függőlegesen lefelé gyorsulnak a felszín közelében a nehézségi gyorsulással. Ezt a nehézségi erőnek tulajdonítjuk, melyet a Föld távolról fejt ki a testekre. 

A második törvény értelmében:

$$
F = ma
$$

$$
F = G
$$

$$
a = g
$$

Tehát a testekre:

$$
G = mg
$$

Nehézségi erő hat. Ha a test egyensúlyban van, tehát nem esik szabadon, hanem például fel van függesztve vagy épp alá van támasztva, akkor ez csak úgy lehetséges, hogy az alátámasztás vagy felfüggesztés a nehézségi erőt kiegyenlíti, tehát egy vele egyenlő nagyságú de függőlegesen felfelé mutató erőt fejt ki a testre ott ahol vele érintkezik. Ekkor viszont a test is kifejt egy a nehézségi erővel egyenlő nagyságú, de ellentétes irányú, tehát függőlegesen lefelé mutató erőt az alátámasztásra vagy a felfüggesztésre a harmadik törvény értelmében. Ezt az erőt nevezzük a test súlyának.

$$
F_k = G = mg
$$

$$
F_s = F_k
$$

$$
F_s = mg
$$

Első egyenletünk azt fejezi ki, hogy az alátámasztás vagy felfüggesztés által kifejtett kényszerő egyenlő a nehézségi erővel, így a test egyensúlyban van, nem mozdul. A második egyenlet a harmadik törvény, miszerint a súly erő és a kényszerő egyenlő nagyságú.

>**Az erő mellyel a test nyomja az alátámasztást, vagy húzza a felfüggesztést a test súlya.**

Az egyensúlyban lévő test súlya tehát megegyezik a rá ható nehézségi erő nagyságával. 1kg súlya az 9.81N, tehát kb. 10N, tehát 10dkg tömeg súlya kb. 1N formulánk alapján.

## A rugós erőmérő
Az erő nem csak gyorsítani képes a testeket, hanem az alakjukat is megváltoztathatja. Ha például rugóra akasztunk egy testet, akkor a rugó megnyúlik a test súlya miatt. Természetesen minél nagyobb a súly, annál nagyobb a megnyúlás is. A súly a tömeggel arányos egyensúlyban, tehát ilyen módon a rugót skálával ellátva rugós erőmérőt készíthetünk. Ezt mutatjuk be egy kísérletben illetve a szimulációban kipróbálható, hogy megduplázva a tömeget, hogy változik a rugó megnyúlása.

###  Kísérlet
[Rugós erőmérő](https://www.youtube.com/watch?v=bSg7M2NgKZA)

### Szimulació

[A súly](https://alexerdei73.github.io/physics-engine/project/#38c6b933-5bd4-42f2-a59e-1390633a14a3)

## A súly függése a gyorsulástól
Ha a test nincs egyensúlyban, hanem gyorsul, akkor a súlya nagyobb vagy kisebb, mint a rá ható gravitációs erő. Legyen a gyorsulás felfelé mutató és a nagysága $a$. Ekkor:

$$
F_e = F_k - G = ma
$$

$$
F_s = F_k
$$

$$
F_s = ma + G = ma + mg = m(a + g)
$$

Itt a súly és a kényszerő továbbra is egyenlő Newton harmadik törvénye alapján. Ha a gyorsulás lefelé mutat:

$$
F_e = G - F_k = ma
$$

$$
F_s = F_k = G - ma = mg - ma = m(g - a)
$$

Fontos megjegyezzük, hogy kapjuk meg az eredő erő nagyságát. A kényszerő mindig felfelé mutat, a nehézségi erő még lefelé. Az eredő erő a különbségük, de a nagyobbikból kell a kisebbiket kivonni. Ha a test felfelé gyorsul, akkor a kényszerő a nagyobb, ha lefelé gyorsul, akkor a nehézségi erő a nagyobb. Ez speciális esete az ellentétes irányú vektorok összeadásának.

Érdekes az az eset, amely akkor áll elő, amikor a test szabadon esik. Ekkor a gyorsulás a nehézségi gyorsulás, tehát formulánk szerint a súly nulla. Ez a súlytalanság állapota. Persze szabadesésnél nincs alátámasztás, vagy felfüggesztés, tehát kényszer és így súly sincs. 

## A súlytalanság állapota

### Kísérlet

[Walter Lewin demonstrációja a súlytalanságra](https://www.youtube.com/watch?v=Z07tTuE1mwk&t=27m30s)

Itt két érdekes kísérletet is megnézhetünk egymás után. Sajnos a magyar felirat nem mindig elérhető, de az első kísérletben a professzor a kezében egy vízzel teli műanyag palackkal ugrik le az asztal tetejéről. Mialatt szabadon esnek, a kezét elhúzza a palack alól, mely a kezei felett lebeg, tehát súlytalan. A második kísérletben egy elektronikus mérlegre erősít egy súlyt és ezt ejti le. A súly nullára esik a szabadesés alatt, ez látható a grafikonon is.

### Szimulació

[Rugalmas erő változása szabadesés közben](https://alexerdei73.github.io/physics-engine/project#416bad65-3027-47ac-909f-fc53e64fc5a1)

Vizsgáljuk meg a rugó hosszát és a rugalmas erő változását a szimuláció alatt! Érdemes ezeket a mennyiségeket az idő függvényében ábrázolni!

> **Szabadesés közben, illetve minden más esetben is, amikor egy test csupán a nehézségi erő hatása alatt mozog és gyorsulása a nehézségi gyorsulás, a test a súlytalanság állapotába kerül.**