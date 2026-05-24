# Az impulzusmomentum-tétel

## Az impulzusmomentum-tétel

Nézzük most meg az eredő forgatónyomatékot, mert arra lesz a legtöbbször szükségünk!

$$
M_{z,\text{e}} = \sum_{i = 1}^{N} r_i F_i \sin \alpha_i
$$

Az $F_i \sin \alpha_i$ nem más, mint az $i$-edik pontra ható erő érintőirányú komponense. Jelöljük ezt $F_{i,\text{t}}$-vel.

$$
M_{z,\text{e}} = \sum_{i = 1}^{N} r_i F_{i,\text{t}} = \sum_{i = 1}^{N} r_i m_i a_{i,\text{t}} = \sum_{i = 1}^{N} r_i m_i \frac{v_i - v_{i,0}}{t}
$$

$$
M_{z,\text{e}} = \frac{\sum_{i = 1}^{N} r_i m_i v_i - \sum_{i = 1}^{N} r_i m_i v_{i,0}}{t}
$$

Ezek szerint az eredő forgatónyomaték nem más, mint az impulzusmomentum-változás és az eltelt idő hányadosa. Itt ugye felhasználtuk, hogy körmozgás esetén a gyorsulás érintőirányú komponensének nagysága a sebesség nagyságának változása osztva az idővel, hiszen a sebesség érintőirányú.

$$
M_{z,\text{e}} = \frac{N_z - N_{z,0}}{t} = \frac{\Delta N_z}{t}
$$

Megmutatjuk még, hogy az eredő forgatónyomaték csak a külső erők forgatónyomatékainak eredője, mert a belső erők forgatónyomatékainak eredője mindig nulla. Ehhez Newton azt feltételezte, hogy a pontrendszer pontjai között ható erők ún. *centrális erők*. Ez azt jelenti, hogy nemcsak egyenlő nagyságúak és ellentétes irányúak, ahogy azt a harmadik törvény kimondja, hanem a hatásvonaluk is a két pontot összekötő egyenes. Ez azt eredményezi, hogy az erő-ellenerő pár együttes forgatónyomatéka nulla, bármely két pont esetén. Ez a feltételezés nem magától értetődő, de igaz például a gravitációs vagy éppen rugalmas erőkre, és általában igaz a részecskék között működő alaperőkre is.

$$
M_{i,j} + M_{j,i} = 0, \quad i \neq j
$$

$$
M_{z,\text{e}} = \sum_{i = 1}^{N} \left( M_i^{\text{k}} + \sum_{j = 1, i \neq j}^{N} M_{i,j} \right) = \sum_{i = 1}^{N} M_i^{\text{k}} + \sum_{i = 1}^{N} \sum_{j = 1, i \neq j}^{N} M_{i,j}
$$

$$
\sum_{i = 1}^{N}\sum_{j = i + 1}^{N} M_{i,j} = \sum_{i = 1}^{N}\sum_{j = 1}^{i - 1} M_{j,i}
$$

$$
\sum_{i = 1}^{N} \sum_{j = 1, i \neq j}^{N} M_{i,j} = \sum_{i = 1}^{N} \sum_{j = 1}^{i - 1} M_{i,j} + \sum_{i = 1}^{N}\sum_{j = 1}^{i - 1} M_{j,i} = \sum_{i = 1}^{N} \sum_{j = 1}^{i - 1} (M_{i,j} + M_{j,i}) = 0
$$

Tehát:

$$
M_{z,\text{e}} = M_{z,\text{e}}^{\text{k}}
$$

Eljutottunk tehát az impulzusmomentum-tételének pontrendszerekre vonatkozó alakjáig, amelyet mi csak a merev test rögzített tengely körüli forgásának speciális esetére láttunk be, de általánosan igaz.

$$
M_{z,\text{e}}^{\text{k}} = \frac{\Delta N_z}{t}
$$

> **A pontrendszer impulzusmomentumának időegységre eső változása a rá ható külső erők forgatónyomatékainak összege.**

Ez a tétel tehát általánosan igaz, de mi csak a rögzített tengely ($z$ tengely) körüli forgást vizsgáltuk, és csak merev testek esetén, tehát amikor a pontrendszerben nincsenek deformációk.

### Kísérlet

[Az impulzusmomentum megmaradás demonstrációi](https://www.youtube.com/watch?v=PwE3eiREYA4)

A bemutatott kísérletben két alapvető demonstrációt láthatunk az impulzusmomentum megmaradásának szemléltetésére:
1. **Súlyzókkal forgó zsámoly**: Egy forgózsámolyon ülő diák kinyújtott karokkal nehéz súlyokat tart a függőleges forgástengelytől távol, ami kezdetben nagy tehetetlenségi nyomatékot ($\Theta_{\text{kezdet}}$) eredményez. Amikor a karjait behúzza a teste mellé, a tömeg eloszlása közelebb kerül a forgástengelyhez, így a rendszer tehetetlenségi nyomatéka drasztikusan lecsökken. Mivel a csapágyak kiváló minőségűek és a függőleges tengely mentén fellépő külső forgatónyomaték elhanyagolhatóan kicsi ($M^{\text{k}} \approx 0$), az impulzusmomentum megmarad ($N_z = \text{const.}$). A csökkenő tehetetlenségi nyomatékot kompenzálva a zsámoly szögsebessége látványosan megemelkedik, a diák hirtelen felgyorsul.
2. **Forgó kerék átfordítása**: A diák egy kezdetben álló zsámolyon ül, miközben a kezében tart egy gyorsan pörgő kerékpárkereket, amelynek impulzusmomentum-vektora a jobbkéz-szabály szerint függőlegesen felfelé mutat. Amikor a diák a kereket vízszintes tengely körül $180^\circ$-kal átfordítja (fejjel lefelé), a kerék saját perdülete függőlegesen lefelé kezd mutatni. Mivel a teljes rendszerre ható külső függőleges nyomaték nulla, a függőleges tengely menti teljes impulzusmomentum megmarad. Hogy a kezdeti felfelé mutató perdület megmaradjon, a zsámoly és a diák együttesen gyors forgásba jönnek abba az irányba, amely visszaadja a hiányzó impulzusmomentumot. A kerék visszabillentésével a diák azonnal megáll.

### Példák

1. A bolygók mozgásánál Kepler második törvénye is egy példája az impulzusmomentum-tételének. Ez ugyan síkmozgás, de a bolygó nem végez körmozgást, távolsága változik a Naptól, amelyen a forgástengely megy keresztül merőlegesen a bolygómozgás síkjára. 

$$
N_z = \sum_{i = 1}^{1} m_i v_i \sin \alpha_i = m_1 v_1 \sin \alpha_1 = 2m_1 \frac{T_{\text{ellipszis}}}{T}
$$

Tehát az impulzusmomentum a területi sebesség $2m$-szerese, amennyiben $m = m_1$ a bolygó tömege. A területi sebességről bebizonyítottuk, hogy állandó, tehát az impulzusmomentum is az, ahogy ennek lennie is kell, hiszen a gravitációs erő hatásvonala átmegy a Napon, vagyis a forgástengelyen. 

2. Egy csapágyazott rúd függőleges síkban képes forogni a felső végpontja körül. A súrlódástól és a légellenállástól eltekinthetünk. A rúd hossza $1,20\text{ m}$, tömege $0,800\text{ kg}$. A rúd szabad végére erősítettek egy $0,500\text{ kg}$ tömegű, pontszerűnek tekinthető testet. Mekkora a rendszer tehetetlenségi nyomatéka? Egy vízszintesen mozgó $20,0\text{ g}$ tömegű lövedék a forgás irányában találja el a rudat a tengelytől $0,900\text{ m}$ távolságra $250\text{ m/s}$ sebességgel. Az ütközés tökéletesen rugalmatlan, tehát ütközés után a rúd és a lövedék együtt mozognak. Mekkora a tengelyre vonatkozó impulzusmomentum az ütközés előtti pillanatban? Mekkora az ütközést közvetlenül követő pillanatban? Megmaradó mennyiség-e a lendület az ütközés során? Mekkora a szögsebesség az ütközés utáni pillanatban? Mekkora szögben tér ki a rúd?

$$
\Theta_{\text{rúd}} = \frac{1}{3}Ml^2 = \frac{1}{3} \cdot 0,8 \cdot 1,2^2 = 0,384\text{ kg}\cdot\text{m}^2
$$

$$
\Theta_{\text{pont}} = m l^2 = 0,5 \cdot 1,2^2 = 0,72\text{ kg}\cdot\text{m}^2
$$

$$
\Theta = \Theta_{\text{rúd}} + \Theta_{\text{pont}} = 0,384 + 0,72 = 1,104\text{ kg}\cdot\text{m}^2
$$

$$
N_{z,0} = m_{\text{golyó}} r v = 0,02 \cdot 0,9 \cdot 250 = 4,50\text{ kg}\cdot\text{m}^2\text{/s}
$$

Mivel a rendszerre ható külső erők (a nehézségi erő és a csapágynál fellépő tartóerő) hatásvonala átmegy a forgástengelyen, nincs erőkarjuk, tehát forgatónyomatékuk sem. Így az impulzusmomentum megmaradó mennyiség az ütközés során.

$$
N_z = 4,50\text{ kg}\cdot\text{m}^2\text{/s}
$$

Ez az ütközés utáni pillanatban érvényes közvetlenül.

$$
N_z = (\Theta + \Theta_{\text{golyó}}) \omega
$$

$$
\Theta_{\text{golyó}} = m_{\text{golyó}} r^2 = 0,02 \cdot 0,9^2 = 0,0162\text{ kg}\cdot\text{m}^2
$$

$$
\omega = \frac{N_z}{\Theta + \Theta_{\text{golyó}}} = \frac{4,50}{1,104 + 0,0162} \approx 4,017\text{ rad/s}
$$

Számítsuk ki a tömegközéppont távolságát a forgástengelytől!

$$
r_{\text{TKP}} = \frac{\sum_{i = 1}^{N} m_i r_i}{M_{\text{össz}}} = \frac{0,8 \cdot 0,6 + 0,5 \cdot 1,2 + 0,02 \cdot 0,9}{1,320} \approx 0,8318\text{ m}
$$

$$
v_{\text{TKP}} = r_{\text{TKP}} \omega = 0,8318 \cdot 4,017 \approx 3,341\text{ m/s}
$$

$$
I = M_{\text{össz}} v_{\text{TKP}} = 1,32 \cdot 3,341 \approx 4,411\text{ kg}\cdot\text{m/s}
$$

Ez tehát az ütközés utáni lendület közvetlenül.

$$
I_0 = m_{\text{golyó}} v_{\text{golyó}} = 0,02 \cdot 250 = 5\text{ kg}\cdot\text{m/s}
$$

Ez az ütközés előtti lendület, tehát a lendület nem marad meg, mivel a csapágy által kifejtett külső erő ezt megváltoztatja. Az utolsó kérdés megválaszolásához szükségünk lesz a forgási energia kiszámítására.

## Forgási energia

Rögzített tengely körüli forgás energiáját könnyen kiszámíthatjuk:

$$
E_{\text{m}} = \sum_{i = 1}^{N} \frac{m_i v_i^2}{2} = \sum_{i = 1}^{N} \frac{m_i(r_i \omega)^2}{2}
$$

$\omega^2$ és $\frac{1}{2}$ kiemelhető:

$$
E_{\text{m}} = \frac{\omega^2}{2} \sum_{i = 1}^{N} m_i r_i^2
$$

$$
E_{\text{m}} = \frac{\Theta \omega^2}{2}
$$

Pontosan olyan képletet kaptunk, mint a haladó mozgásra, csak a tömeg helyett a tehetetlenségi nyomaték és a sebesség helyett a szögsebesség szerepel.

### Példa

Fejezzük be az előző példát!

$$
E_{\text{m},0} = E_{\text{h}}
$$

$$
\frac{(\Theta + \Theta_{\text{golyó}})\omega^2}{2} = M_{\text{össz}} g h_{\text{TKP}}
$$

$$
h_{\text{TKP}} = \frac{(\Theta + \Theta_{\text{golyó}})\omega^2}{2 M_{\text{össz}} g} = \frac{(1,104 + 0,0162) \cdot 4,017^2}{2 \cdot 1,32 \cdot 9,81} \approx 0,6980\text{ m}
$$

A szög kiszámításához a következő egyenletre van szükség:

$$
h_{\text{TKP}} = r_{\text{TKP}} - r_{\text{TKP}} \cos \phi
$$

$$
\cos \phi = \frac{r_{\text{TKP}} - h_{\text{TKP}}}{r_{\text{TKP}}} = \frac{0,8318 - 0,6980}{0,8318} \approx 0,1609
$$

$$
\phi \approx 80,74^\circ
$$

***

## Feladatok

1. Egy $\Theta_1 = 3\text{ kg}\cdot\text{m}^2$ tehetetlenségi nyomatékú műkorcsolyázó forgásba jön, és kinyújtott karokkal $\omega_1 = 2\text{ rad/s}$ szögsebességgel forog. Amikor a karjait behúzza a teste mellé, a tehetetlenségi nyomatéka $\Theta_2 = 1,2\text{ kg}\cdot\text{m}^2$-re csökken. A súrlódástól tekintsünk el!
    * a) Mekkora lesz a korcsolyázó szögsebessége a karjai behúzása után?
    * b) Mennyivel változott meg a forgási energiája, és honnan származik ez a többletenergia?

2. Egy $L = 1,5\text{ m}$ hosszú, $M = 2\text{ kg}$ tömegű homogén rúd a felső végpontjánál fogva súrlódásmentesen csapágyazott. A rúd kezdetben nyugalomban lóg. Egy $m = 10\text{ g}$ tömegű lövedék vízszintesen, $v = 400\text{ m/s}$ sebességgel repülve eltalálja a rúd legalsó pontját, és abba belefúródik (tökéletesen rugalmatlan ütközés).
    * a) Mekkora a rendszer (rúd és lövedék együttes) tehetetlenségi nyomatéka a tengelyre vonatkozóan az ütközés után?
    * b) Mekkora lesz a rúd szögsebessége közvetlenül az ütközés után?

3. Egy üstökös a Nap körül elnyújtott elliptikus pályán kering. Amikor a legközelebb van a Naphoz (perihélium, $r_1 = 0,5\text{ CSE}$ távolságra), a sebessége $v_1 = 60\text{ km/s}$. Mekkora a sebessége az üstökösnek, amikor a Naptól a legtávolabb van (afélium), ha ez a távolság $r_2 = 15\text{ CSE}$? (Tudjuk, hogy az impulzusmomentum állandó.)

4. Egy nagy gép lendkerekének tehetetlenségi nyomatéka $\Theta = 25\text{ kg}\cdot\text{m}^2$, és másodpercenként 10\ fordulatot tesz ($f = 10\text{ Hz}$). A gép kikapcsolásakor egy fék állandó forgatónyomatékot fejt ki a lendkerékre, amely így $t = 20\text{ s}$ alatt áll meg teljesen.
    * a) Mekkora a lendkerék kezdeti impulzusmomentuma?
    * b) Mekkora a fékező forgatónyomaték ($M_{\text{f}}$) nagysága?

5. Egy játszótéri körhinta (amelyet tekinthetünk egy $M = 100\text{ kg}$ tömegű, $R = 2\text{ m}$ sugarú homogén tömör korongnak) súrlódásmentesen foroghat a függőleges tengelye körül. A körhinta kezdetben nyugalomban van. Egy $m = 40\text{ kg}$ tömegű gyerek érintőirányban, $v = 3\text{ m/s}$ sebességgel futva felugrik a körhinta szélére. Határozd meg a rendszer (körhinta és gyerek együttesen) szögsebességét a felugrás után! (A tömör korong tehetetlenségi nyomatéka a tengelyére vonatkozóan $\Theta = \frac{1}{2}MR^2$, a gyereket a számítás során tekinthetjük pontszerűnek.)
