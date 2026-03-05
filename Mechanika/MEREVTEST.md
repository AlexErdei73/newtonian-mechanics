# Merev testek

## A merev test fogalma

Eddig főként olyan testek mozgásával foglalkoztunk, melyek pontszerűeknek voltak tekinthetők mozgásuk során, mivel az elmozdulások méretei jóval nagyobbak voltak, mint a test méretei. Az ilyen tömegpontok forgásával sem foglalkoztunk, a belső szerkezetüket teljesen figyelmen kívül hagytuk. 

Foglalkoztunk még tömegpontok rendszerével is, amikor két vagy több tömegpont együttes mozgását figyeltük meg. Ilyen volt például a kéttest-probléma, vagy a pontrendszerekre vonatkozó tömegközéppont fogalma és a rá vonatkozó tétel. 

> **A merev testek tulajdonképpen speciális pontrendszerek, melyeknél bármely két kiválasztott tömegpont távolsága állandó.**

Ideális merev testek a valóságban nincsenek, hisz bármely szilárd test elegendően nagy erőhatás hatására alakját szemmel láthatóan megváltoztatja. Ilyen változás például autóbaleset esetén a kocsi deformációja, vagy egy rugó elszakadása, ha túlterhelik stb. Sokszor a deformációk kicsik, és a test képes visszanyerni az alakját az erőhatás megszűntével. Ilyen esetre példa a nem túl nagy erővel megfeszített rugó, mely alakját visszanyeri, ha az erőhatás megszűnik. Az ilyen deformációkat rugalmasnak nevezzük, és ezekkel a rugalmasságtan foglalkozik. A merev testeket úgy tekintjük, hogy a fellépő erőhatások olyan kicsinyek, hogy a test deformációi teljesen elhanyagolhatók. 

## A merev test helyzetének megadása

A merev test alakját tehát a mozgás során nem változtatja meg, így elmozdulása minden esetben összetevődik egy eltolás és egy elforgatás egymásutánjaként. Tehát a merev test haladó mozgáson kívül forgómozgást is képes végezni. 

A merev test helyzetét három pontjának megadása a térben egyértelműen meghatározza. Ez 9 koordináta megadását jelenti, de ezek közt fennáll 3 összefüggés, nevezetesen a három pont közül bármely kettőnek a távolsága állandó. Ez 3 távolság állandóságát jelenti, tehát a test helyzetének megadásához 6 független adat elegendő. Ez lehet például egy pontjának 3 koordinátája és 3 szög megadása a test térbeli orientációjának megfelelően. Például megadhatjuk egy vasrúd tömegközéppontjának helyzetét és a tömegközépponton átmenő forgástengely egységvektorát (ez két koordináta, hisz az egységvektor hossza egységnyi), továbbá egy szögadatot, amely egy elfordulási szöget ad meg a tengely körül. Ezen 6 adat a térben egyértelműen meghatározza a vasrúd helyzetét, feltéve, hogy a rúd alakváltozást nem szenved mozgása során.

## A merev test síkmozgása

Minket leginkább a merev test egy speciális mozgása fog érdekelni. Ilyenkor a merev test pontjai egy síkkal párhuzamosan mozdulnak el, tehát minden pont sebessége párhuzamos ugyanazon megadott síkkal. Az ilyen mozgást a merev test síkmozgásának nevezzük. 

>**Merev test síkmozgásakor a test pontjai egy adott síkkal párhuzamos sebességvektorokkal mozognak.**

Gondoljunk például egy kerék gördülésére, amikor a kerék egyenes vonalon gurul. Ilyenkor a kerék pontjai általában függőleges síkban mozognak, mely párhuzamos a gördülés egyenes irányával. Az ilyen mozgás esetén mi csak a mozgás síkbeli vetületével fogunk foglalkozni, tehát a test térbeli kiterjedése a síkra merőlegesen nem lesz túl fontos. 

Síkmozgás esetén a test helyzetét két pontjának koordinátái meghatározzák. Itt a két pont távolsága nem változik, tehát csak 3 független adat kell. Lehet ez mondjuk a tömegközéppont 2 koordinátája a síkban és a test elfordulási szöge a síkban. Kerék esetében például a középpont általában a tömegközéppont is egyben, és a kerék még az ezen a ponton áthaladó, a mozgás síkjára merőleges képzeletbeli tengely körül el is fordul gördülése során. Az elfordulási szög, mint látni fogjuk, előjeles szám. Ha a test az óramutató járásával ellenkező irányban fordult el a síkban, akkor az elfordulási szög pozitív, ellenkező esetben negatív.

## A pillanatnyi forgástengely

Gondoljunk valamilyen merev test síkmozgására, például a kerék gördülésére egyenes vonal mentén. Ekkor a tömegközéppont haladó mozgást végez, de a kerék a tömegközépponton átmenő, a gördülés síkjára merőleges tengely körül forog is. Van-e olyan tengely, mely körül a kerék mozgása leírható tisztán forgással legalább egy igen rövid időtartam alatt? A gördülő kerék esetén, feltéve, hogy a kerék nem csúszik meg, hanem tisztán gördül, a kerék talajjal érintkező pontján átmenő tengely, mely a gördülés síkjára merőleges, ilyen tengely. Ezt nevezzük pillanatnyi forgástengelynek. 

>**Pillanatnyi forgástengely az a tengely, mely körüli tiszta elfordulással leírható a merev test elmozdulása egy rövid időtartam alatt, eltolás nélkül.**

Pillanatnyi forgástengely mindig van, amennyiben van forgás. Síkmozgás esetén például az A pont a C-be, a B pont a D-be mozdul el. 


$$
\overline {AB} = \overline {CD}
$$


Ez azért van így, mert bármely két pont távolsága a mozgás során nem változik. A geometriából tudjuk, hogy az $AC$ szakasz felezőmerőlegesének pontjaiból A elforgatással juttatható C-be. A $BD$ szakasz felezőmerőlegesének pontjaiból pedig B forgatással juttatható D-be. Ha a két merőleges metszi egymást, meg is van a pillanatnyi forgástengely a mozgás síkjában. Ezek a szakaszok sosem párhuzamosak, kivéve, ha a test mozgása tiszta eltolás. Ilyen esetben elforgatás és pillanatnyi forgástengely sincs, de amint a test elfordul a síkban, mindig létezik a pillanatnyi forgástengely.