# Csillapitott Rezgesek

## Szimulaciok

A szimulacioban es elmeletben is lattuk, hogy a rezgesi energia es igy az amplitudo is allando, amennyiben a rezgo testre csak a konzervativ rugalmas ero es esetleg a szinten konzervativ nehezsegi ero hatnak. A valosagban azonban ilyesmit nem tapasztalunk, hiszen mindig vannak disszipativ erok. Nezzuk meg, hogy egy harmonikus rezgest vegzo test eseteben milyen erok okozzak a rezges csillapodasat es ez hogyan csokkenti az amplitudot ahogy az ido mulik!

### Surlodasos csillapitas
Eloszor vizsgaljuk a surlodasi ero hatasat, hisz ezt mar jol ismerjuk! A szimulacio annyiban lesz mas, mint a peldaban lattuk a rezgesi energia targyalasakor, hogy a rezges a nehezsegi ero hatasa alatt tortenik egy vizszintes feluleten, ahol surlodas hat a testre. A rezgesi energia most is $4$ J kezdetben, de ha a szimulaciot elinditjuk az osszenergia csak $3,853$ J! Ennek oka, az allando $-0,147$ J magassagi helyzeti energia. Ha a test elveszti rezgesi energiajat, akkor csak ez a magassagi helyzeti energia marad, tehat a test energiaja egyensulyban $-0,147$ J lesz. Vizsgaljuk meg a rezges lefolyasat es rajzoltassuk ki a kiteres-ido grafikont (az 1-es test eseteben), hogy lathassuk az amplitudo hogyan csillapodik!

[Harmonikus rezges surlodasos csillapitassal](https://alexerdei73.github.io/physics-engine/project/#763312f1-b675-4eea-9bbd-c6fb59026bb4)

* Hogyan csillapodik az amplitudo?
* Szamitsuk ki a surlodasi ero munkajat a szimulacios adatok alapjan! A test altal megtet teljes ut a **path length**. Az ero iranya mindig ellentetes a mozgas iranyaval, de nagysaga allando. $\mu = 0,9$ es $mg$ konnyen kiolvashato az adatokbol. Maga a surlodasi ero is kiolvashato, de ezt a test megallasa elott kell megtenni, kulonben csak a tapadasi erot lathatjuk. Az algoritmus eseteben valamilyen kicsiny sebessegnel a testet allonak kell tekinteni, ez ebben a programban $10^-4$ m/s, tehat ez a test maradek sebessege. 
* Eleri-e a test megallaskor az egyensulyi helyzetet? Ez pontosan $x = 2$ m-nel lenne. 

### Legellenallas
Most nezzuk meg azt az esetet, mikor surlodas ugyan nincs, de van legellenallas. Itt a $10$ g-os test $20$ cm atmeroju gomb, igy a legellenallasa irrealisan nagy lesz. Ez azt jelenti, hogy a hatast kb. 100-szorosara felnagyitva lathatjuk (A valosagban egy ilyen tomegu golyo kb. tizszer kisebb, de az ero a felulettel aranyos, amely 100-szor kisebb). Egyebkent a valosagban ez a meghatarozo tenyezo az iskolai kiserleteknel is, annak ellenere, hogy a csillapitas nem tul nagy. A surlodast altalaban kikuszoboljuk, de a legellenallas altalaban jelen van. Itt is figyeljuk meg a kiteres-ido grafikont! Itt kezdetben igen gyors csillapodast lathatunk, de amikor mar az amplitudo es a sebesseg kicsi, akkor a csillapodas igen lassu. Ennek oka, hogy a legellenallas a sebeseg negyzetevel aranyos ero, tehat kis sebessegeknel szinte teljesen elhanyagolhato. Ennek koszonheto, hogy mire 4 ertekes jegy pontosaggal elerjuk, hogy a teljes rezgesi energia a belso energiava alakuljon at kb $26$ s telik el a szimulacioban!

[Harmonikus rezges csillapodasa a legellenallas miatt](https://alexerdei73.github.io/physics-engine/project/#2d7bf5da-1455-4c4a-896d-a40baf1347a4)

## A sebesseggel aranyos csillapitas
A valodi rugok igen kismertekben ugyan, de csillapitjak a rezgest, akkor is, ha nincs legellenallas. Ennek merteke acel eseten igen kicsiny, az acel szinte tokeletesen rugalmas. Ez a fajta csillapitas egyebkent nem irhato le az eddigi kifejezesekkel. Ennek oka, hogy a belso anyagszerkezeti mechanizmus amplitudotol fuggo, nem pedig sebessegfuggo csillapito erot eredmenyez.
Bar elmeletileg helytelen, ezt sokszor szoktak modellezni sebessegfuggo, a sebesseggel linearis csillapitasi erovel. Ennek oka, hogy a matematika viszonylag egyszeru es a csillapitas altalaban igen kicsi. Ilyen csillapitasi ero lep fel folyadekokban kis sebessegek eseten, amikor az aramlas szabalyos szerkezetu, tehat nem orvenyes. A tipikus pelda a lengescsillapitokban fellepo csillapitasi erok. A tovabbiakban mi evvel a csillapitassal fogunk reszletesebben foglalkozni.

[Harmonikus rezges sebesseggel aranyos csillapitassal](https://alexerdei73.github.io/physics-engine/project/#8b2676f8-91a6-4f77-b2cd-e8f0c9b87a51)