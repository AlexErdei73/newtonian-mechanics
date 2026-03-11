# Az impulzusmomentum-tétel

## Az impulzusmomentum-tétel
Nézzük most meg az eredő forgatónyomatékot, mert arra lesz a legtöbbször szükségünk!


$$
M_{z,e} = \sum_{i = 1}^{N} r_i F_i \sin \alpha_i
$$


Az $F_i \sin \alpha_i$ nem más, mint az $i$. pontra ható erő érintőirányú komponense. Jelöljük ezt $F_{i,t}$-vel.


$$
M_{z,e} = \sum_{i = 1}^{N} r_i F_{i,t} = \sum_{i = 1}^{N} r_i m_i a_{i,t} = \sum_{i = 1}^{N} r_i m_i \frac {v_i - v_{i,0}} {t}
$$



$$
M_{z,e} = \frac {\sum_{i = 1}^{N} r_i m_i v_i - \sum_{i = 1}^{N} r_i m_i v_{i,0}} {t}
$$


Ezek szerint az eredő forgatónyomaték nem más, mint az impulzusmomentum-változás és az eltelt idő hányadosa. Itt ugye felhasználtuk, hogy a körmozgás esetén a gyorsulás érintőirányú komponensének nagysága a sebesség nagyságának változása osztva az idővel, hisz a sebesség érintőirányú.


$$
M_{z,e} = \frac {N_z - N_{z,0}} {t} = \frac {\Delta N_z} {t}
$$


Megmutatjuk még, hogy az eredő forgatónyomaték csak a külső erők forgatónyomatékainak eredője, mert a belső erők forgatónyomatékainak eredője mindig nulla. Ehhez Newton azt feltételezte, hogy a pontrendszer pontjai közt ható erők ún. *centrális erők*. Ez azt jelenti, hogy nemcsak egyenlő nagyságúak és ellentétes irányúak, ahogy azt a harmadik törvény kimondja, hanem a hatásvonaluk is a két pontot összekötő egyenes. Ez azt eredményezi, hogy az erő-ellenerő pár együttes forgatónyomatéka nulla, bármely két pont esetén. Ez a feltételezés nem magától értetődő, de igaz például a gravitációs vagy épp rugalmas erőkre, és általában igaz a részecskék közt működő erőkre is.


$$
M_{i,j} + M_{j,i} = 0, \quad i \neq j
$$



$$
M_{z,e} = \sum_{i = 1}^{N} \left( M_i^k + \sum_{j = 1, i \neq j}^{N} M_{i,j} \right) = \sum_{i = 1}^{N} M_i^k + \sum_{i = 1}^{N} \sum_{j = 1, i \neq j}^{N} M_{i,j}
$$



$$
\sum_{i = 1}^{N}\sum_{j = i + 1}^{N} M_{i,j} = \sum_{i = 1}^{N}\sum_{j = 1}^{i - 1} M_{j,i}
$$



$$
\sum_{i = 1}^{N} \sum_{j = 1, i \neq j}^{N} M_{i,j} = \sum_{i = 1}^{N} \sum_{j = 1}^{i - 1} M_{i,j} + \sum_{i = 1}^{N}\sum_{j = 1}^{i - 1} M_{j,i} = \sum_{i = 1}^{N} \sum_{j = 1}^{i - 1} (M_{i,j} + M_{j,i}) = 0
$$


Tehát


$$
M_{z,e} = M_{z,e}^k
$$


Eljutottunk tehát az impulzusmomentum-tételének pontrendszerekre vonatkozó alakjáig, melyet mi csak a merev test rögzített tengely körüli forgásának speciális esetére láttunk be, de általánosan igaz.


$$
M_{z,e}^k = \frac {\Delta N_z} {t}
$$


>**A pontrendszer impulzusmomentumának időegységre eső változása a rá ható külső erők forgatónyomatékainak összege.**

Ez a tétel tehát általánosan igaz, de mi csak a rögzített tengely (z-tengely) körüli forgást vizsgáltuk, és csak merev testek esetén, tehát amikor a pontrendszerben nincsenek deformációk.

### Kísérlet

[Az impulzusmomentum megmaradás demonstrációi](https://www.youtube.com/watch?v=PwE3eiREYA4)

Két demonstrációt láthatunk.
1. Forgózsámolyon a tanuló kinyújtott karokkal tart súlyokat a forgástengelytől távol, és azokat behúzza, mire a forgás felgyorsul.
2. Forgózsámolyon a tanuló gyorsan forgó biciklikereket tart úgy, hogy a tengely függőleges legyen, majd azt átfordítja úgy, hogy a forgás ellentétes értelművé válik. Ekkor ő is forgásba jön.

Mindkét kísérlet az impulzusmomentum megmaradásával értelmezhető. Egyik sem esik szigorúan a levezetésünk hatálya alá, a második eset az átfordításkor nem is tekinthető síkmozgásnak sem. Ezek a demonstrációk azt mutatják, hogy a tétel általánosan érvényes pontrendszerek esetén. Mi ugyan az impulzusmomentumot előjeles mennyiségnek tekintjük, de ez igazából vektor, melynek mi csak a z-komponensével foglalkozunk a merev test síkmozgása esetén.

### Példák
1. A bolygók mozgásánál Kepler második törvénye is egy példája az impulzusmomentum-tételének. Ez ugyan síkmozgás, de a bolygó nem végez körmozgást, távolsága változik a Naptól, melyen a forgástengely megy keresztül merőlegesen a bolygómozgás síkjára. 


$$
N_z = \sum_{i = 1}^{1} m_i v_i \sin \alpha_i = m_1 v_1 \sin \alpha_1 = 2m_1 \frac {T_{ellipszis}} {T}
$$


Tehát az impulzusmomentum a területi sebesség $2m$-szerese, amennyiben $m = m_1$ a bolygó tömege. A területi sebességről bebizonyítottuk, hogy állandó, tehát az impulzusmomentum is az, ahogy ennek lennie is kell, hiszen a gravitációs erő hatásvonala átmegy a Napon, tehát a forgástengelyen. 

2. Egy csapágyazott rúd függőleges síkban képes forogni a felső végpontja körül. A súrlódástól és a légellenállástól eltekinthetünk. A rúd hossza $1,20\,m$, tömege $0,800\,kg$. A rúd szabad végére erősítettek egy $0,500\,kg$ tömegű, pontszerűnek tekinthető testet. Mekkora a rendszer tehetetlenségi nyomatéka? Egy vízszintesen mozgó $20,0\,g$ tömegű lövedék a forgás irányában találja el a rudat a tengelytől $0,900\,m$ távolságra $250\,\frac{m}{s}$ sebességgel. Az ütközés tökéletesen rugalmatlan, tehát ütközés után a rúd és a lövedék együtt mozognak. Mekkora a tengelyre vonatkozó impulzusmomentum az ütközés előtti pillanatban? Mekkora az ütközést közvetlenül követő pillanatban? Megmaradó mennyiség-e a lendület az ütközés során? Mekkora a szögsebesség az ütközés utáni pillanatban? Mekkora szögben tér ki a rúd?


$$
\Theta_{r\acute{u}d} = \frac {1} {3} M l^2 = \frac {1} {3} \times 0,8 \times 1,2^2 = 0,384\,kgm^2
$$



$$
\Theta_{pont} = m l^2 = 0,5 \times 1,2^2 = 0,72\,kgm^2
$$



$$
\Theta = \Theta_{r\acute{u}d} + \Theta_{pont} = 0,384 + 0,72 = 1,104\,kgm^2
$$



$$
N_{z,0} = m_{goly\acute{o}} r v = 0,02 \times 0,9 \times 250 = 4,50\,\frac{kgm^2}{s}
$$


Mivel a rendszerre ható külső erők (a nehézségi erő és a csapágynál fellépő tartóerő) hatásvonala átmegy a forgástengelyen, nincs erőkarjuk, tehát forgatónyomatékuk sem. Így az impulzusmomentum megmaradó mennyiség az ütközés során.


$$
N_z = 4,50\,\frac{kgm^2}{s}
$$


Ez az ütközés utáni pillanatban érvényes közvetlenül.


$$
N_z = (\Theta + \Theta_{goly\acute{o}}) \omega
$$



$$
\Theta_{goly\acute{o}} = m_{goly\acute{o}} r^2 = 0,02 \times 0,9^2 = 0,0162\,kgm^2
$$



$$
\omega = \frac {N_z} {\Theta + \Theta_{goly\acute{o}}} = \frac {4,50} {1,104 + 0,0162} = 4,017\,\frac{rad}{s}
$$


Számítsuk ki a tömegközéppont távolságát a forgástengelytől!


$$
r_{TKP} = \frac {\sum_{i = 1}^{N} m_i r_i} {M_{\ddot{o}ssz}} = \frac {0,8\times 0,6 + 0,5\times 1,2 + 0,02\times 0,9} {1,320} = 0,8318\,m
$$



$$
v_{TKP} = r_{TKP} \omega = 0,8318 \times 4,017 = 3,341\,\frac{m}{s}
$$



$$
I = M_{\ddot{o}ssz} v_{TKP} = 1,32 \times 3,341 = 4,411\,\frac{kgm}{s}
$$


Ez tehát az ütközés utáni lendület közvetlenül.


$$
I_0 = m_{goly\acute{o}} v_{goly\acute{o}} = 0,02 \times 250 = 5\,\frac{kgm}{s}
$$


Ez az ütközés előtti lendület, tehát a lendület nem marad meg, mivel a csapágy által kifejtett külső erő ezt megváltoztatja. Az utolsó kérdés megválaszolásához szükségünk lesz a forgási energia kiszámítására.

## Forgási energia
Rögzített tengely körüli forgás energiáját könnyen kiszámíthatjuk:


$$
E_m = \sum_{i = 1}^{N} \frac {m_i v_i^2} {2} = \sum_{i = 1}^{N} \frac {m_i(r_i \omega)^2} {2}
$$


$\omega^2$ és $\frac {1} {2}$ kiemelhető.


$$
E_m = \frac {\omega^2} {2} \sum_{i = 1}^{N} m_i r_i^2
$$



$$
E_m = \frac {\Theta \omega^2} {2}
$$


Pontosan olyan képletet kaptunk, mint a haladó mozgásra, csak a tömeg helyett a tehetetlenségi nyomaték és a sebesség helyett a szögsebesség szerepel.

### Példa
Fejezzük be az előző példát!


$$
E_{m,0} = E_h
$$



$$
\frac {(\Theta + \Theta_{goly\acute{o}})\omega^2} {2} = M_{\ddot{o}ssz} g h_{TKP}
$$



$$
h_{TKP} = \frac {(\Theta + \Theta_{goly\acute{o}})\omega^2} {2 M_{\ddot{o}ssz} g} = \frac {(1,104 + 0,0162)\times 4,017^2} {2 \times 1,32 \times 9,81} = 0,6980\,m
$$


A szög kiszámításához a következő egyenletre van szükség:


$$
h_{TKP} = r_{TKP} - r_{TKP} \cos\phi
$$



$$
\cos\phi = \frac {r_{TKP} - h_{TKP}} {r_{TKP}} = \frac {0,8318 - 0,6980} {0,8318} = 0,1609
$$



$$
\phi = 80,74^\circ
$$


***

## Feladatok
1. Egy $I_1 = 3\,kgm^2$ tehetetlenségi nyomatékú műkorcsolyázó forgásba jön, és kinyújtott karokkal $\omega_1 = 2\,\frac{rad}{s}$ szögsebességgel forog. Amikor a karjait behúzza a teste mellé, a tehetetlenségi nyomatéka $I_2 = 1,2\,kgm^2$-re csökken. Súrlódástól tekintsünk el!
a) Mekkora lesz a korcsolyázó szögsebessége a karjai behúzása után?
b) Mennyivel változott meg a forgási energiája, és honnan származik ez a többletenergia?

2. Egy $L = 1,5\,m$ hosszú, $M = 2\,kg$ tömegű homogén rúd felső végpontjánál fogva súrlódásmentesen csapágyazott. A rúd kezdetben nyugalomban lóg. Egy $m = 10\,g$ tömegű lövedék vízszintesen, $v = 400\,\frac{m}{s}$ sebességgel repülve eltalálja a rúd legalsó pontját, és abba belefúródik (tökéletesen rugalmatlan ütközés).
a) Mekkora a rendszer (rúd+lövedék) tehetetlenségi nyomatéka a tengelyre vonatkozóan az ütközés után?
b) Mekkora lesz a rúd szögsebessége közvetlenül az ütközés után?

3. Egy üstökös a Nap körül elnyújtott elliptikus pályán kering. Amikor a legközelebb van a Naphoz (perihélium, $r_1 = 0,5\,\text{CsE}$ távolságra), a sebessége $v_1 = 60\,\frac{km}{s}$. 
Mekkora a sebessége az üstökösnek, amikor a Naptól a legtávolabb van (aphélium), ha ez a távolság $r_2 = 15\,\text{CsE}$? (Tudjuk, hogy az impulzusmomentum állandó.)

4. Egy nagy gép lendkerekének tehetetlenségi nyomatéka $\Theta = 25\,kgm^2$, és másodpercenként 10 fordulatot tesz ($f = 10\,\text{Hz}$). A gép kikapcsolásakor egy fék állandó forgatónyomatékot fejt ki a lendkerékre, amely így $t = 20\,s$ alatt áll meg teljesen.
a) Mekkora a lendkerék kezdeti impulzusmomentuma?
b) Mekkora a fékező forgatónyomaték ($M_f$) nagysága?

5. Egy játszótéri körhinta (melyet tekinthetünk egy $M = 100\,kg$ tömegű, $R = 2\,m$ sugarú homogén tömör korongnak) súrlódásmentesen foroghat a függőleges tengelye körül. A körhinta kezdetben nyugalomban van. Egy $m = 40\,kg$ tömegű gyerek érintőirányban, $v = 3\,\frac{m}{s}$ sebességgel futva felugrik a körhinta szélére. 
Határozd meg a rendszer (körhinta és gyerek együttesen) szögsebességét a felugrás után! (A tömör korong tehetetlenségi nyomatéka a tengelyére vonatkozóan $\Theta = \frac{1}{2}MR^2$, a gyereket a számítás során tekinthetjük pontszerűnek.)