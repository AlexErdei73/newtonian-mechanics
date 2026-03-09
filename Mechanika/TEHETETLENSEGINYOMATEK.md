# A tehetetlenségi nyomaték

## Direkt kiszámítás
A tehetetlenségi nyomatéknak láttuk már a definícióját. Vesszük az egyes tömegeket, megszorozzuk őket a forgástengelytől mért távolságuk négyzetével, majd az így nyert szorzatokat összeadjuk. Formulában ez így nézett ki:


$$
\Theta = \sum_{i = 1}^{N} m_i r_i^2
$$


Ez a definíció felhasználható a kiszámításra, de ez általában számunkra nehézkes, mert nem ismerjük a szükséges matematikát még elég jól.

### Példa
Számítsuk ki egy $m$ tömegű és $l$ hosszúságú rúd tehetetlenségi nyomatékát, ha a rudat a végpontján átmenő és a rúdra merőleges tengely körül megforgatjuk. 

Legyen például a rúd x tengely irányú és az origón átmenő z tengely körül forgatjuk meg. A rúd vastagsága elhanyagolható a hosszához képest! Először is felosztjuk jó sok $N$ darabkára. 


$$
m_i = \frac{m}{N}
$$


Az i-edik darabka $x_i$ koordinátája:


$$
r_i = x_i = i \cdot \frac{l}{N}
$$


A definíció alapján felírhatjuk az alábbi összefüggést:


$$
\Theta_{\text{rúd}} = \sum_{i = 1}^{N} m_i r_i^2 = \sum_{i = 1}^{N} \frac{m}{N} \cdot \frac{i^2 l^2}{N^2} = \frac{m l^2}{N^3} \sum_{i = 1}^{N} i^2
$$


Matematikai nehézségünk most az összeg kiszámítása. Ebben már semmi fizika nincs, de nehéz problémának tűnik. Szerencsére már régen megoldott probléma, de sajnos általában nem tudjuk a megoldást rögtön.


$$
\sum_{i = 1}^{N} i^2 = 1^2 + 2^2 + 3^2 + \dots + N^2 = 1 + 4 + 9 + \dots + N^2
$$


Reméljük, találunk egy képletet erre! Nézzük meg az értékeket különböző $N$ értékekre és próbáljunk találni valami összefüggést!

| N | $\sum_{i = 1}^{N} i^2$ |
| --- | --- |
| 0 | 0 |
| 1 | 1 |
| 2 | 5 |
| 3 | 14 |
| 4 | 30 |

Sejtésünk szerint a formula $N$-ben harmadfokú polinom. Látni fogjuk, hogy egy ilyen képlet megoldaná a problémánkat és a képlet ilyen alakú:


$$
\sum_{i = 1}^{N} i^2 = aN^3 + bN^2 + cN + d
$$


Az ismeretlen $a$ valamint $b$ és $c$ továbbá $d$ számokat megpróbáljuk meghatározni a táblázatunk alapján!


$$
0 = d
$$



$$
1 = a + b + c
$$



$$
5 = 8a + 4b + 2c
$$



$$
14 = 27a + 9b + 3c
$$


Megoldjuk az egyenletrendszert és remélhetőleg megkapjuk a keresett képletet!

Az első egyenletet kivonjuk a másik 2 egyenletből annyiszor, hogy a $c$ eltűnjön.


$$
3 = 6a + 2b
$$



$$
11 = 24a + 6b
$$


Már csak 2 egyenlet van és 2 ismeretlen. Most az itteni első egyenlet 3-szorosát vonjuk ki a másik egyenletből!


$$
2 = 6a
$$



$$
a = \frac{1}{3}
$$



$$
b = \frac{1}{2}
$$



$$
c = 1 - a - b = 1 - \frac{1}{3} - \frac{1}{2} = \frac{1}{6}
$$


A formula sejtésünk szerint a következő:


$$
\sum_{i = 1}^{N} i^2 = \frac{N^3}{3} + \frac{N^2}{2} + \frac{N}{6}
$$


Kipróbálhatjuk $N = 4$ esetére, hátha működik arra is.


$$
\frac{4^3}{3} + \frac{4^2}{2} + \frac{4}{6} = 30
$$


Táblázatunkban is ennyit számoltunk, tehát a formula látszólag tökéletes nagyobb $N$ értékekre is. Be lehet bizonyítani, hogy minden $N$ természetes számra érvényes.
Most már szinte készen is vagyunk.


$$
\Theta_{\text{rúd}} = \left(a + \frac{b}{N} + \frac{c}{N^2}\right)ml^2
$$


Látjuk, hogy $\Theta$ még függ az $N$ értékétől, de ezt nagyon meg kell növeljük, hogy a folytonos tömegeloszlásúnak tekintett rudat jól megközelíthessük. Ekkor a zárójelben csak az $a = \frac{1}{3}$ tag marad, a másik kettő elhanyagolható lesz. Így megkaptuk, amit akartunk.


$$
\Theta_{\text{rúd}} = \frac{1}{3}ml^2
$$


## Tehetetlenségi nyomatékok (tömegközépponton átmenő tengelyre)

| Test | $\Theta_{\text{TKP}}$ |
| ---- | ---------------|
| kör | $mR^2$ |
| körlap | $\frac{1}{2}mR^2$ |
| henger | $\frac{1}{2}mR^2$ |
| rúd | $\frac{1}{12}ml^2$ |
| gömb | $\frac{2}{5}mR^2$ |

## A tehetetlenségi nyomatékra vonatkozó tételek

Látjuk, hogy a közvetlen kiszámítás eléggé körülményes, főleg integrálszámítás nélkül, amit még nem tanultunk. Szükségünk van tehát táblázatokra és tételekre, hogy megkönnyítsük a dolgunkat. 

1. **Lapítási tétel:** Szabad a testet a forgástengellyel párhuzamosan nyújtani vagy lapítani anélkül, hogy a tehetetlenségi nyomatéka megváltozna.

### Példák:
1. Mennyi a tehetetlenségi nyomatéka az $m$ tömegű valamint $a$ és $b$ oldalú téglalap alakú lemeznek, ha az $a$ oldal a forgástengely?
A test összelapítható egy rúddá a forgástengely mentén, melynek hossza $b$ és tömege $m$ marad. A formula tehát a következő lesz:


$$
\Theta_{a,\text{téglalap}} = \frac{1}{3}mb^2
$$


2. Mennyi a tehetetlenségi nyomatéka egy $m$ tömegű és $R$ sugarú homogén hengernek a szimmetriatengelyére vonatkozólag, ha egy ugyanilyen paraméterű körlapnak a tehetetlenségi nyomatéka:


$$
\Theta_{\text{TKP,körlap}} = \frac{1}{2}mR^2
$$


Pontosan ugyanannyi, mert a hengert a körlap kinyújtásával kapjuk a szimmetriatengely mentén.


$$
\Theta_{\text{TKP,henger}} = \frac{1}{2}mR^2
$$


2. **Addíciós tétel:** Ha a test ismert tehetetlenségi nyomatékú testekből tehető össze, akkor a tehetetlenségi nyomatékok összege lesz a keresett tehetetlenségi nyomaték. 

### Példa
Mekkora az $m$ tömegű és $l$ hosszúságú merev rúd tehetetlenségi nyomatéka a rúdra merőleges és a rúd felezőpontján átmenő forgástengelyre vonatkozólag?

Ez két $\frac{m}{2}$ tömegű és $\frac{l}{2}$ hosszúságú darabból tehető össze, melyeket a végeiknél pörgetünk. Ez az az eset, amit már kiszámítottunk.


$$
\Theta_{\text{TKP,rúd}} = 2 \cdot \frac{1}{3} \cdot \frac{m}{2} \left(\frac{l}{2}\right)^2 = \frac{1}{12}ml^2
$$


3. **Poláris-ekvatoriális tétel (Merőleges tengelyek tétele):** Amennyiben a test egy lemez az x-y síkban (tehát z irányú kiterjedése elhanyagolható), akkor a z tengelyre vonatkozó tehetetlenségi nyomatéka egyenlő az x és y tengelyekre vonatkozó tehetetlenségi nyomatékok összegével. 


$$
\Theta_z = \sum_{i = 1}^{N} m_i r_i^2 = \sum_{i = 1}^{N} m_i(x_i^2 + y_i^2) = \sum_{i = 1}^{N} m_i x_i^2 + \sum_{i = 1}^{N} m_i y_i^2 = \Theta_x + \Theta_y
$$


### Példa
Mekkora egy $m$ tömegű valamint $a$ és $b$ oldalú homogén téglalap alakú lemez tehetetlenségi nyomatéka a z tengely körül, ha a lap az x-y síkban van és oldalai a tengelyekkel párhuzamosak, az origó pedig a téglalap középső pontja?


$$
\Theta_{\text{TKP,téglalap}} = \Theta_x + \Theta_y = \frac{1}{12}ma^2 + \frac{1}{12}mb^2 = \frac{1}{12}m(a^2 + b^2)
$$


4. **Steiner-tétel:** Ha ismerjük egy test tömegközéppontján átmenő tengelyre vonatkozó tehetetlenségi nyomatékát, akkor egy ezzel párhuzamos és $d$ távolságra lévő tengelyre:


$$
\Theta = \Theta_{\text{TKP}} + Md^2
$$


ahol $M$ a test össztömege.

Legyen a tengely a z tengely, de a test tömegközéppontja ne legyen az origóban, hanem legyen az x tengelyen $x_{\text{TKP}} = d$ értéknél!


$$
\Theta = \sum_{i = 1}^{N} m_i(x_i^2 + y_i^2)
$$



$$
\Theta_{\text{TKP}} =  \sum_{i = 1}^{N} m_i((x_i - d)^2 + y_i^2) = \sum_{i = 1}^{N} m_i(x_i^2 - 2dx_i + d^2 + y_i^2)
$$



$$
\Theta_{\text{TKP}} = \sum_{i = 1}^{N} m_i(x_i^2 + y_i^2) + d^2\sum_{i = 1}^{N} m_i - 2d\sum_{i = 1}^{N} m_i x_i
$$



$$
\Theta_{\text{TKP}} = \Theta + Md^2 - 2dMx_{\text{TKP}}
$$



$$
\Theta_{\text{TKP}} = \Theta - Md^2
$$


Itt felhasználtuk, hogy $\sum_{i = 1}^{N} m_ix_i = Mx_{TKP}$ a tömegközéppont definíciója alapján es $x_{\text{TKP}} = d$. Megkapjuk a tételt, ha átrendezzük az egyenletet $\Theta$ értékre.

### Példák

1. A rúdra mutassuk meg, hogy igaz a Steiner-tétel!


$$
\Theta_{\text{rúd}} = \Theta_{\text{TKP,rúd}} + md^2
$$



$$
\Theta_{\text{rúd}} = \frac{1}{12}ml^2 + m\left(\frac{l}{2}\right)^2 = \left(\frac{1}{12} + \frac{1}{4}\right)ml^2
$$



$$
\Theta_{\text{rúd}} = \frac{1}{3}ml^2
$$


2. Számítsuk ki a homogén $m$ tömegű és $R$ sugarú henger tehetetlenségi nyomatékát, ha a tengely párhuzamos a henger szimmetriatengelyével és a henger szélén halad, tehát a szimmetriatengelytől $R$ távolságra!


$$
\Theta_{\text{henger}} = \Theta_{\text{TKP,henger}} + mR^2 = \frac{1}{2}mR^2 + mR^2 = \frac{3}{2}mR^2
$$


***

## Feladatok

**1. Feladat (Steiner-tétel alkalmazása)**
Egy $m$ tömegű és $R$ sugarú homogén tömör gömböt a felszínét érintő tengely körül forgatunk meg. Határozd meg a gömb ezen tengelyre vonatkozó tehetetlenségi nyomatékát! Használd a táblázatban megadott tömegközépponti nyomatékot!
*(Tipp: A forgástengely távolsága a tömegközépponttól pontosan a gömb sugara lesz.)*

**2. Feladat (Addíciós tétel)**
Két azonos paraméterekkel rendelkező vékony rúd (mindkettő tömege $m$ és hossza $l$) merőlegesen metszi egymást a felezőpontjukban (szimmetrikus keresztet alkotnak). Mekkora a rendszer tehetetlenségi nyomatéka a keresztezési ponton átmenő és a rudak síkjára merőleges tengelyre vonatkozólag?

**3. Feladat (Poláris-ekvatoriális tétel / Merőleges tengelyek tétele)**
Ismerjük egy $m$ tömegű és $R$ sugarú vékony homogén körgyűrű tehetetlenségi nyomatékát a síkjára merőleges és a középpontján átmenő (z irányú) tengelyre vonatkozóan, melynek értéke $\Theta_z = mR^2$. Határozd meg a körgyűrű tehetetlenségi nyomatékát a síkjába eső, egyik átmérője mentén haladó (például x irányú) tengelyre vonatkozóan!
*(Tipp: Használd ki a kör szimmetriáját, ami miatt az x és y tengelyekre vonatkozó tehetetlenségi nyomatékok megegyeznek!)*