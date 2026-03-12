# A forgómozgás alapegyenlete

## A szöggyorsulás
A merev test forgását fogjuk leírni rögzített tengely körül, mely ismét a z-tengely lesz. A mozgás ilyenkor síkmozgás, ahogy megbeszéltük. Ha a merev testre ható külső erők forgatónyomatékainak eredője nem nulla, akkor a test forgása gyorsul vagy lassul. Ezt a szöggyorsulással jellemezzük, mely a szögsebesség időegységre eső változása. Ez is előjeles mennyiség, akárcsak a szögsebesség.


$$
\beta = \frac {\omega - \omega_0} {t}
$$


>**Az időegységre eső szögsebesség-változás neve szöggyorsulás. A szöggyorsulás előjeles mennyiség, jele $\beta$, egysége $\frac {1} {s^2}$.**

## A forgómozgás alapegyenlete
Az impulzusnyomaték tétele szerint írhatjuk az alábbi összefüggést:


$$
M_{z,e}^k = \frac {N_z - N_{z,0}} {t}
$$



$$
N_z = \Theta \omega
$$


Ezt beírva az előző egyenletbe azt kapjuk, hogy:


$$
M_{z,e}^k = \frac {\Theta \omega - \Theta \omega_0} {t} = \Theta \frac {\omega - \omega_0} {t}
$$


Itt kiemeltük a $\Theta$ tehetetlenségi nyomatékot, mely a forgástengelyre vonatkozik és nem változik, hisz a test merev. Megkapjuk a következő, végső összefüggésünket:


$$
M_{z,e}^k = \Theta \beta
$$


>**A forgómozgás alapegyenlete szerint a külső erők eredő forgatónyomatéka nem más, mint a tehetetlenségi nyomaték és a szöggyorsulás szorzata. Ez Newton második törvényének megfelelője forgómozgás esetére.**

Itt a forgatónyomatékokat és a tehetetlenségi nyomatékot a forgástengelyre vonatkoztatva kell megállapítani. Az egyenlet tehát függ a forgástengely helyétől és helyzetétől, akárcsak a tehetetlenségi nyomaték és a forgatónyomaték is. A tengelynek inerciarendszerben kell rögzítve lennie, hisz a fizika törvényei erre vonatkoznak. 

### Kísérlet

[Körlap alakú test tehetetlenségi nyomatékának mérése](https://www.youtube.com/watch?v=O4PSeSuyKZU)

### Példa
Egy körlap alakú test függőleges tengely körül foroghat. Egy kis csigát erősítünk hozzá úgy, hogy a csiga és a körlap ugyanazon függőleges tengely körül forogjon. A csigára fonalat tekerünk, melyet egy másik kis csigán átvetünk úgy, hogy egy függőlegesen süllyedő test húzhassa a fonalat. A süllyedő test tömege $0,1\, \text{kg}$, $0,86\, \text{m}$ magasból, álló helyzetből indulva talajt ér $5,04\, \text{s}$ alatt. A csigák tömege elhanyagolható, akárcsak a súrlódás. 
- Mekkora a süllyedő test gyorsulása?
- Mekkora a fonalat feszítő erő?
- Mekkora a forgatónyomaték, mely a körlap alakú test forgását gyorsítja? A csiga sugara $2,75\, \text{cm} = 0,0275\, \text{m}$.
- Mekkora a szöggyorsulás?
- Számítsuk ki a tehetetlenségi nyomatékot a forgó körlap alakú testre a forgómozgás alapegyenletéből!

A test nyugvó helyzetből indul, tehát érvényes az alábbi összefüggés:


$$
s = \frac {a} {2} t^2
$$



$$
a = \frac {2s} {t^2} = \frac {2 \times 0,86} {5,04^2} = 0,0677\, \frac {\text{m}} {\text{s}^2}
$$


Newton második törvénye a süllyedő testre a következő lesz:


$$
mg - K = ma
$$


Innen a fonalat feszítő erő kifejezhető:


$$
K = mg - ma = 0,1 \times 9,81 - 0,1 \times 0,0677 = 0,974\, \text{N}
$$


A forgatónyomaték kiszámítása esetünkben a következő:


$$
M_z = Kr = 0,974 \times 0,0275 = 0,0268\, \text{Nm}
$$


A szöggyorsulás könnyen meghatározható, hisz tudjuk, hogy a sebesség kiszámítása a csiga peremére, illetve tangenciálisan a süllyedő testre is a következő:


$$
v = r\omega
$$



$$
a = \frac {v - v_0} {t} = \frac {r\omega - r\omega_0} {t} = r \frac {\omega - \omega_0} {t}
$$


Eredményünk a következő:


$$
a = r \beta
$$


Ez igen fontos összefüggés. A csiga peremének pontjaira vonatkozik, melyek körmozgást végeznek. Ezeknek a pontoknak a gyorsulása felbontható centripetális gyorsulásra, mely körmozgás esetében mindig fellép a sebesség irányának változása miatt, és érintő irányú (tangenciális) gyorsulásra. A centripetális gyorsulás a forgástengely felé mutat, míg az érintő irányú gyorsulás a fonal és a süllyedő test egyenes vonalú mozgásának gyorsulásával egyezik meg, hiszen ezek együtt mozognak azonos sebességgel minden pillanatban, és ez a sebesség megegyezik a csiga peremének sebességével ott, ahol a fonal attól elválik.


$$
\beta = \frac {a} {r} = \frac {0,0677} {0,0275} = 2,46\, \frac {1} {\text{s}^2}
$$


A forgómozgás alapegyenlete esetünkben a következő:


$$
M_z = \Theta \beta
$$


Ez azt jelenti, hogy a tehetetlenségi nyomaték kiszámítható:


$$
\Theta = \frac {M_z} {\beta} = \frac {0,0268} {2,46} = 0,0109\, \text{kgm}^2 \approx 0,011\, \text{kgm}^2
$$


## A tiszta gördülés
Eddig rögzített tengely körüli forgással foglalkoztunk, most megnézzük, mi a helyzet, ha a tengely nem rögzített. Ilyen mozgás például egy kerék gördülése. A kerék talajjal érintkező pontjának sebessége nulla, amíg meg nem csúszik. Ezt a tapadási erő biztosítja, és onnan lehet biztosan tudni, hogy a nyom, amit a kerék hagy, nincs elmosódva. Ez azt jelenti, hogy a kerék talajjal érintkező pontján átmenő tengely, amely merőleges a gördülés síkjára, az ún. *pillanatnyi forgástengely*. Ennek sebessége nulla, és a mozgás leírható egy rövid ideig tiszta forgásként ezen tengely körül. A pont helyzete változik a gördülés során, de egy olyan inerciarendszerben dolgozunk, mely ezzel pillanatnyilag együtt mozog (az igen rövid időtartam alatt). Ilyenkor is alkalmazható a forgómozgás alapegyenlete.

Tiszta gördülés esetén a tömegközéppont is csupán forgó mozgást végez a pillanatnyi forgástengely körül, tehát a következőt írhatjuk:


$$
v_{TKP} = r_{TKP}\omega
$$


Illetve a gyorsulásra írhatjuk a következő összefüggést:


$$
a_{TKP} = \frac {v_{TKP} - v_{TKP,0}} {t} = r_{TKP} \frac {\omega - \omega_0} {t}
$$


Itt $r_{TKP}$ nem változik a forgás során, tehát kiemelhető. Így végül eredményünk ez lesz:


$$
a_{TKP} = r_{TKP}\beta
$$


### Példák
1. Egy kereket vízszintesen húzunk a középpontjában $5\, \text{N}$ erővel, aminek hatására tisztán gördül egyenes vonalban a vízszintes talajon, gyorsulva. A kerék tehetetlenségi nyomatéka $0,2\, \text{kgm}^2$ a középpontjára vonatkozólag, mely egyben a tömegközéppontja is, tömege pedig $1\, \text{kg}$. A kerék sugara $0,5\, \text{m}$.
- Mekkora a kerék gyorsulása?
- Mekkora a tapadási erő, ha a kerék tisztán gördül?

Írjuk fel a forgómozgás alapegyenletét a pillanatnyi forgástengelyre vonatkozólag!


$$
M_{z,e}^k = \Theta \beta
$$


Tudjuk, hogy az egyetlen erő, melynek van nyomatéka a pillanatnyi forgástengelyre nézve, az a húzóerő, mivel az összes többi erő hatásvonala átmegy a pillanatnyi forgástengelyen.


$$
M_{z,e}^k = Fr
$$


Itt $r$ a középpont távolsága a pillanatnyi forgástengelytől, tehát a kerék sugara.


$$
a = r \beta \implies \beta = \frac {a} {r}
$$


A tehetetlenségi nyomatékra alkalmazzuk a Steiner-tételt!


$$
\Theta = \Theta_{TKP} + mr^2
$$


Mindezeket behelyettesítve kapjuk az alábbi összefüggést:


$$
Fr = (\Theta_{TKP} + mr^2) \frac {a} {r}
$$


Innen $a$-t kifejezzük:


$$
a = \frac {Fr^2} {\Theta_{TKP} + mr^2} = \frac {F/m} {1 + \frac {\Theta_{TKP}} {mr^2}}
$$


Látjuk, hogy ha $\Theta_{TKP} \ll mr^2$, akkor visszakapjuk a haladó mozgás gyorsulását, mintha forgás nem is lenne. Ez várható is.


$$
a = \frac {5/1} {1 + 0,2 / (1 \times 0,5^2)} = 2,778\, \frac {\text{m}} {\text{s}^2}
$$


A dinamika alapegyenlete (Newton második törvénye) a haladó mozgásra pedig ez:


$$
F - F_t = ma
$$



$$
F_t = F - ma = F - \frac {F} {1 + \frac {\Theta_{TKP}} {mr^2}} = F \frac {\frac {\Theta_{TKP}} {mr^2}} {1 + \frac {\Theta_{TKP}} {mr^2}}
$$



$$
\frac {\Theta_{TKP}} {mr^2} = \frac {0,2} {0,25} = 0,8
$$



$$
F_t = 5 \times \frac {0,8} {1 + 0,8} = 2,222\, \text{N}
$$


2. Az előző kerék egy $\alpha = 30^\circ$ hajlásszögű lejtőn tisztán gördül lefelé álló helyzetből. Mekkora a gyorsulása és a tapadási erő, ha a veszteségektől eltekinthetünk?

A lejtőn lefelé húzó erőre már láttuk a kiszámítást:


$$
F = mg\sin \alpha
$$


Ezt formuláinkba helyettesítve $F$ helyére, megkapjuk a válaszokat!


$$
a = \frac {g\sin \alpha} {1 + \frac {\Theta_{TKP}} {mr^2}}
$$



$$
F_t = mg\sin \alpha \frac {\frac {\Theta_{TKP}} {mr^2}} {1 + \frac {\Theta_{TKP}} {mr^2}}
$$


### Kísérlet

[Tömör henger versenyez ugyanakkora üreges hengerrel lejtőn](https://www.youtube.com/watch?v=CHQOctEvtTY)

A tömör henger nyer, de miért?

### Szimuláció

[Lejtőn legördülő kerék](https://alexerdei73.github.io/physics-engine/project/#04fb3b7b-f9fe-41a0-9dbe-063628267662)

A szimuláció magáért beszél. Az adatokból határozd meg a tehetetlenségi nyomatékát a keréknek és az össztömeget! Határozd meg a lejtő szögét is! Számítsd ki a gyorsulást a formulánkkal, majd mérd is meg a megtett út és a megtételéhez szükséges idő kiolvasásával a szimulációs adatokból a kerék középső pontjára. A gyorsulás közvetlen kiolvasása pontatlan! Ezt a grafikonokból láthatod! A szimuláció némileg alacsonyabb gyorsuláshoz vezet, mint az elmélet. Miért van ez vajon? (Tipp: Nézd meg, mit csinál az összenergia a gördülés során!)

***

## Feladatok

**1. Feladat: Szöggyorsulás és kinematika**
Egy mosógép centrifugája nyugalmi helyzetből indulva, egyenletesen gyorsulva 15 másodperc alatt éri el az $1200\, \text{fordulat/perc}$ fordulatszámot. 
- Mekkora a mosógép dobjának szöggyorsulása? 
- Hány fordulatot tesz meg a dob a felgyorsulás 15 másodperce alatt?

**2. Feladat: Forgómozgás alapegyenlete (rögzített tengely)**
Egy $M = 5\, \text{kg}$ tömegű, $R = 0,2\, \text{m}$ sugarú homogén tömör henger súrlódásmentesen foroghat a geometriai tengelye körül. A henger palástjára vékony, súlytalan fonalat tekerünk, melynek végét állandó $F = 20\, \text{N}$ nagyságú erővel húzzuk. 
- Mekkora a henger szöggyorsulása? 
- Mekkora lesz a henger szögsebessége a húzás megkezdésétől számított 4 másodperc múlva? *(A homogén tömör henger tehetetlenségi nyomatéka: $\Theta = \frac{1}{2}MR^2$)*.

**3. Feladat: Tiszta gördülés vízszintes talajon**
Egy $m = 3\, \text{kg}$ tömegű tömör gömböt egyenes vonalban, vízszintes talajon húzunk a tömegközéppontjában támadó vízszintes $F = 15\, \text{N}$ erővel. A gömb megcsúszás nélkül, tisztán gördül. 
- Mekkora a gömb tömegközéppontjának gyorsulása? 
- Mekkora a talaj és a gömb között fellépő tapadási súrlódási erő nagysága? *(A tömör gömb tehetetlenségi nyomatéka: $\Theta_{TKP} = \frac{2}{5}mR^2$)*.

**4. Feladat: Lejtőn gördülő testek versenye**
Egy $\alpha = 25^\circ$-os hajlásszögű lejtő tetejéről, azonos magasságból, nyugalmi helyzetből egyszerre elengedünk egy tömör hengert és egy vékony falú csövet (üreges hengert). Mindkét test tisztán gördül lefelé a lejtőn. A közegellenállástól eltekintünk.
- Írja fel mindkét test tömegközéppontjának gyorsulását! *(A tömör henger tehetetlenségi nyomatéka $\frac{1}{2}mR^2$, az üregesé $mR^2$)*.
- Melyik test ér le hamarabb a lejtő aljára? Válaszát a kiszámított gyorsulások alapján indokolja! Függ-e az eredmény a testek tömegétől vagy sugarától?

**5. Feladat: Csiga tehetetlenségi nyomatékának figyelembevétele**
Két test, melyek tömege $m_1 = 2\, \text{kg}$ és $m_2 = 4\, \text{kg}$, egy hajlékony, nyújthatatlan kötél két végére van erősítve. A kötél egy $M = 3\, \text{kg}$ tömegű, $R = 0,15\, \text{m}$ sugarú, homogén tömör henger alakú csigán van átvetve. A kötél nem csúszik meg a csigán, a tengelysúrlódás elhanyagolható.
- Határozza meg a rendszer gyorsulását!
- Mekkora erők ébrednek a kötélben a csiga bal, illetve jobb oldalán? Mutassa meg, hogy a kötélben ébredő erők nem egyenlők, és ennek oka a csiga forgásában keresendő!