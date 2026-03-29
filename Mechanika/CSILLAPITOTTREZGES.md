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

### A sebesseggel aranyos csillapitas
A valodi rugok igen kismertekben ugyan, de csillapitjak a rezgest, akkor is, ha nincs legellenallas. Ennek merteke acel eseten igen kicsiny, az acel szinte tokeletesen rugalmas. Ez a fajta csillapitas egyebkent nem irhato le az eddigi kifejezesekkel. Ennek oka, hogy a belso anyagszerkezeti mechanizmus amplitudotol fuggo, nem pedig sebessegfuggo csillapito erot eredmenyez.
Bar elmeletileg helytelen, ezt sokszor szoktak modellezni sebessegfuggo, a sebesseggel linearis csillapitasi erovel. Ennek oka, hogy a matematika viszonylag egyszeru es a csillapitas altalaban igen kicsi. Ilyen csillapitasi ero lep fel folyadekokban kis sebessegu mozgas eseten, amikor az aramlas szabalyos szerkezetu, tehat nem orvenyes. A tipikus pelda a lengescsillapitokban fellepo csillapitasi erok. A tovabbiakban mi evvel a csillapitassal fogunk reszletesebben foglalkozni.

[Harmonikus rezges sebesseggel aranyos csillapitassal](https://alexerdei73.github.io/physics-engine/project/#8b2676f8-91a6-4f77-b2cd-e8f0c9b87a51)

## Mozgasegyenlet sebeseggel aranyos csillapitas eseten

$$
F_{x,e} = -Dx - \beta v_x
$$

Ez az egyenlet azt mutatja, hogy a rugalmas ero mellett fellep egy a sebesseg nagysagaval aranyos, de a sebesseggel ellentetes iranyu ero, mely a mozgast minden pillanatban lassitani igyekszik. Ezt behelyettesitve Newton masodik torvenyebe megkapjuk a mozgasegyenletet.

$$
F_{x,e} = ma_x
$$

$$
ma_x = -Dx - \beta v_x
$$

Nullara rendezve szokas az egyenletet felirni.

$$
ma_x + \beta v_x + Dx = 0
$$

Kerdes az hogy milyen kiteres-ido fuggveny az egyenlet megoldasa, ha a test a allo helyzetbol indul az $x(0) = +A$ helyzetbol. Erre csak felsobb matematikai ismeretek birtokaban lehet valaszolni, tehat az egyenletet nem fogjuk megoldani, csak a megoldast magyarazzuk el.

## Az amplitudo csokkenese

Eloszor is vizsgaljuk meg hogyan csokken az amplitudo. Ha a szimulacionkban feljegyeznenk az keteres erteket $nT$ idonkent, ahol $n$ nem negativ egesz szam, akkor eszrevennenk, hogy a kovetkezo osszefugges all fenn.

$$
x(nT) = Aq^n, 0 < q < 1
$$

Ezt a sorozatot a matematikaban ugy ismerjuk, mint a *mertani sorozat*. Tehat az amplitudok mertani sorozat szerint csokkennek. Minnel kisebb a $q$ tenyezo, annal gyorsabban csokken az amplitudo, tehat annal gyorsabban hal el a rezges.
Bevezethetjuk a *csillapitasi tenyezot*, melyet $\delta$-val fogunk jelolni. Ennek egysege 1/s akarcsak a korferekvencianak, tehat ezek osszehasonlithatok.

$$
\delta = \frac \beta {2m}
$$

A mozgasegyenlet megoldasaval megmutathato, hogy 

$$
q = e^{-\delta T}
$$

Itt az $e$ szam a felsobb matematikabol jol ismert irracionalis szam, nevet *Euler* matematikusrol kapta. Erteke:

$$
e = 2,71828...
$$

Ez mar majdnem elegendo q kiszamitasahoz, de a periodusido egy kicsivel hoszabb, mint a csillapitatlan rezges eseten. A mozgasegyenlet megoldasaval megmutathato, hogy a korfrekvencia egy kicsit kisebb, mint a csillapitatlan esetben.

$$
\omega_0^2 = \frac D m
$$

$$
\omega = \sqrt {\omega_0^2 - \delta^2}
$$

Ezen osszefuggesek segitsegevel a q tenyezo mar kiszamithato.

### Pelda

Szamitsuk ki az eddigi peldankban a $q$ tenyezo erteket! Mennyi ido alatt csokken a rezges energiaja 4 tizedes pontosaggal 0-ra? ($5 \times 10^-5$ J energia maradhat maximum a rendszerben) A $\beta = 0,06$ kg/s a szimulacionkban.

A csillapitasi tenyezo kiszamitasa a kovetkezo.

$$
\delta = \frac {\beta} {2m} = \frac {0,06} {2 \times 0,01} = 3\text{ 1/s}
$$

A pontos korfrekvencia es periodusido is kiszamithato.

$$
\omega_0^2 = \frac {D} {m} = \frac {200} {0,01} = 20000\text{ s}^{-2}
$$

$$
\omega = \sqrt {\omega_0^2 - \delta^2} = \sqrt {20000 - 9} = 141,39\text{ 1/s}
$$

$$
T = \frac {2 \pi} {\omega} = \frac {2 \pi} {141,39} = 0,044439\text{ s}
$$

Most mar $q$ kiszamithato.

$$
q = e^{-\delta T} = e^{-3 \cdot 0,044439} = 0,87519
$$

Az maradek energiabol megkaphatjuk a maradek maximalis kiterest!

$$
\frac {Dx_{max}^2} {2} = E_{max}
$$

$$
x_{max} = \sqrt \frac {2E_{max}} {D} = \sqrt \frac {2 \cdot 5 \cdot 10^{-5}} {200} = 7,0711 \cdot 10^{-4}\text{ m}
$$

$$
x_{max} \geq Aq^n
$$

$$
\ln {x_{max}} \geq \ln A + n \ln q
$$

$$
n \geq \frac {\ln {x_{max}} - \ln A} {\ln q}
$$

$$
n \geq \frac {\ln {7,0711 \cdot 10^{-4}} - \ln 0,2} {\ln 0,87519} = 43
$$

$$
t_{min} = nT = 43 \cdot 0,044439 = 1,911\text{ s}
$$

Valoban a szimulaciobol latszik, hogy az energia kb. $1,9$ s alatt eri el a $-0,147$ J-t!
A valosagban kisse tulbecsultuk az idot, hisz n itt egesz szam.

## A kiteres-ido fuggveny
Matematikabol tanultuk, hogy a hatvanyozas elvegezheto tettszoleges valos kitevovel is. Ha az alap az $e$ szam, ez az exponencialis fuggvenyhez vezet. Ezt a fuggvenyt talaljuk a kiteres-ido fuggvenyben, mint az amplitudo szorzoja. Igy tehat az amplitudo exponencialisan csokken.

$$
x(t) = Ae^{-\delta t}\cos(\omega t)
$$

## Kritikus csillapitas
Amikor a csillapitas akkora, hogy a korfrekvencia mullava valik, akkor a koszinusz fuggveny mar allandoan 1, tehat a test egyszeruen exponencialisan tart az egyensulyi helyzethez. Ezt nevezzuk kritikus csillapitasnak.

$$
\delta_k = \omega_0
$$

### Szimulacio

[Kritikus csillapitas](https://alexerdei73.github.io/physics-engine/project/#1de4ac61-0df7-4a4c-b912-fbec97a261c1)