# Vektor- és skalármennyiségek

## Skalármennyiségek

Azokat a mennyiségeket, amelyeket teljes mértékben jellemez a nagyságuk (mértékszámuk és mértékegységük), **skalármennyiségeknek** nevezzük. Az eddig említett fizikai fogalmak mind ilyenek, mint például a tömeg, az idő vagy a sűrűség.

## Vektormennyiségek

A későbbiekben gyakran találkozunk olyan mennyiségekkel is, amelyeket a nagyságuk mellett az irányuk is meghatároz. Ezeket **vektormennyiségeknek** nevezzük. Jelölésük a nyomtatott szövegekben félkövér betűvel, kézírásban pedig általában a jel fölé helyezett kis nyíllal történik. Például: $\vec{a}$ jelöli az $a$ vektort, melynek hossza (abszolút értéke):

$$
|\vec{a}| = a
$$

A legegyszerűbb fizikai példa az **elmozdulásvektor**, amelynek jól meghatározott nagysága és iránya van. További ismert vektormennyiségek: a sebesség, a gyorsulás és az erő, amelyekkel a későbbi fejezetekben részletesen foglalkozunk.

### Vektorok összeadása

Vektorokat geometriai úton úgy adunk össze, ahogyan az egymást követő elmozdulásokkal tesszük (láncszabály vagy háromszögmódszer). A második vektort önmagával párhuzamosan úgy toljuk el, hogy a kezdőpontja az első vektor végpontjába kerüljön. Ekkor az **eredő vektor** az első vektor kezdőpontjából a második vektor végpontjába mutat.

$$
\vec{w} = \vec{u} + \vec{v}
$$

[Vektor-összeadás interaktív szimuláció (GeoGebra)](https://www.geogebra.org/m/tpa5qfuq)

Az összegzés során a következő speciális esetekkel találkozhatunk:
* **Azonos irányú vektorok:** Ha a két összetevő vektor egy egyenesbe esik és azonos irányba mutat, az eredő vektor hossza a két összetevő hosszának tiszta összege.
* **Ellentétes irányú vektorok:** Ha a két vektor egy egyenesbe esik, de ellentétes irányúak, az eredő vektor hossza a két hossz különbsége (a nagyobb értékből kivonjuk a kisebbet), iránya pedig megegyezik a nagyobb összetevő irányával.
* **Merőleges vektorok:** Ha a két vektor merőleges egymásra, az eredő vektor hosszát a derékszögű háromszögre érvényes **Pitagorasz-tétel** segítségével számíthatjuk ki.

### Példák

1. Egy gyalogos a járdán egyenesen haladva $20\text{ m}$-t sétál, majd megáll beszélgetni. Ezután ugyanabban az irányban még $30\text{ m}$-t sétál a kapuig. Mekkora az elmozdulása összesen?

Mivel a gyalogos elmozdulásai azonos irányú vektorok, az eredő elmozdulás hossza a két szakasz összege:

$$
s = 20\text{ m} + 30\text{ m} = 50\text{ m}
$$

2. A gyalogos először $20\text{ m}$-t sétál az egyik irányba, majd megfordul, és visszasétál az ellenkező irányba $30\text{ m}$-t. Milyen messze mozdult el a kezdőponttól, ha az elmozdulások egyetlen egyenes vonal mentén történtek?

Az elmozdulások ellentétes irányú vektorok, ezért a nagyobb vektor hosszából kivonjuk a kisebbik hosszát:

$$
s = 30\text{ m} - 20\text{ m} = 10\text{ m}
$$

*(Az eredő elmozdulás iránya a második, hosszabb szakasz irányába mutat.)*

3. Egy gyalogos $30\text{ m}$-t sétál egyenesen a járdán, majd egy útkereszteződésnél merőlegesen elfordul, és még $40\text{ m}$-t gyalogol. Mekkora az elmozdulása a kezdőponthoz képest?

Mivel az elmozdulásvektorok merőlegesek egymásra, az eredő elmozdulás egy derékszögű háromszög átfogója lesz:

$$
c^2 = a^2 + b^2 = (30\text{ m})^2 + (40\text{ m})^2 = 900\text{ m}^2 + 1600\text{ m}^2 = 2500\text{ m}^2
$$

$$
c = \sqrt{2500\text{ m}^2} = 50\text{ m}
$$

## Feladatok

1. Egy turista $15\text{ m}$-t sétál kelet felé, majd további $25\text{ m}$-t halad ugyanabba az irányba. Mekkora az elmozdulása összesen?
2. Egy biciklista $80\text{ m}$-t halad észak felé, majd visszafordulva $50\text{ m}$-t tesz meg az ellenkező irányba. Mekkora az elmozdulása a kezdőponthoz képest?
3. Egy személy $9\text{ m}$-t sétál egyenesen, majd merőlegesen folytatja útját, és még $12\text{ m}$-t gyalogol. Mekkora az elmozdulása a kezdőponthoz képest?
4. Egy személy $6\text{ m}$-t sétál észak felé, majd $8\text{ m}$-t kelet felé. Mekkora az elmozdulása a kezdőponthoz képest?
5. Egy személy először $20\text{ m}$-t sétál az egyik irányba, majd $35\text{ m}$-t az ellenkező irányba. Mekkora az elmozdulása a kezdőponthoz képest?

### Vektorok kivonása

Két vektor különbségét úgy kaphatjuk meg legkönnyebben, ha az összeadás egyenletét rendezzük át. Ha tudjuk, hogy 

$$
\vec{u} + \vec{v} = \vec{w}
$$

, akkor a tagok átrendezésével a következő összefüggéshez jutunk:

$$
\vec{w} - \vec{u} = \vec{v}
$$

A gyakorlatban ez azt jelenti, hogy ha a kisebbítendő $\vec{w}$ és a kivonandó $\vec{u}$ vektorokat közös kezdőpontra toljuk, akkor a különbségként kapott $\vec{v}$ vektor a két végpontot fogja összekötni, és a kivonandó ($\vec{u}$) végpontjából a kisebbítendő ($\vec{w}$) végpontja felé mutat.

### Nullvektor

Ha egy vektorból önmagát vonjuk ki, eredményül **nullvektort** kapunk. A nullvektor olyan speciális vektor, amelynek a hossza pontosan $0$, az iránya pedig tetszőleges (határozatlan).

$$
\vec{0} = \vec{a} - \vec{a}
$$

$$
|\vec{0}| = 0
$$

A nullvektort bármely vektorhoz hozzáadhatjuk vagy abból kivonhatjuk, a kiindulási vektor nagysága és iránya nem változik.
