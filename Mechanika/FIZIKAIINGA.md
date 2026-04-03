# A fizikai inga

## Kísérletek

[A fizikai inga I](https://www.youtube.com/watch?v=Jac3A-ecs4c)

[A fizikai inga II](https://www.youtube.com/watch?v=-6jDd0V5feI)

## A mozgásegyenlet

A fizikai inga esetében a mozgásegyenlet a forgómozgás alapegyenlete, melyből kiindulunk:


$$
\Theta \beta = M_{z,e}^k
$$


*(Itt $\Theta$ a forgástengelyre vonatkozó tehetetlenségi nyomaték, $\beta$ pedig a szöggyorsulás.)*

Csupán a nehézségi erőnek – melyet a tömegközéppontba vagy súlypontba képzelhetünk egyesítve – van nyomatéka, mivel a felfüggesztésnél fellépő erő hatásvonala átmegy a felfüggesztésen, tehát ennek az erőkarja nulla. Legyen a súlypont a felfüggesztéstől $s$ távolságra! Ekkor a nyomaték:


$$
M_{z,e}^k = -mgs \sin \phi
$$


Itt $\phi$ az a forgásszög, melyet a súlypontot a forgástengellyel összekötő szakasz a függőleges egyenessel bezár. Amennyiben ez a szög pozitív, a nyomaték negatív előjelű, tehát a kitérés szögét csökkenteni igyekszik. Ezt behelyettesítve kapjuk a következő egyenletet:


$$
\Theta \beta = -mgs \sin\phi
$$



$$
\beta = -\frac {mgs} {\Theta} \sin\phi
$$


Kis szögű közelítésben (a gyakorlatban legfeljebb $5^\circ - 10^\circ$-os kitérésig) $\sin\phi \approx \phi$, tehát az egyenlet a következő lesz:


$$
\beta = -\frac {mgs} {\Theta} \phi
$$


Ennek a megoldása, mint tudjuk, harmonikus rezgés.

## A periódusidő

Az egyenlet alakjából leolvashatjuk a körfrekvencia négyzetét:


$$
\omega^2 = \frac {mgs} {\Theta}
$$


A periódusidő pedig a következő:


$$
\frac {4\pi^2} {T^2} = \frac {mgs} {\Theta}
$$



$$
\frac {T^2} {4\pi^2} = \frac {\Theta} {mgs}
$$



$$
T^2 = 4\pi^2 \frac {\Theta} {mgs}
$$



$$
T = 2\pi \sqrt {\frac {\Theta} {mgs}}
$$


### Példák
1. A matematikai inga esetében $s=l$ és $\Theta = ml^2$. Számítsuk ki a periódusidőt!


$$
T = 2\pi \sqrt {\frac {\Theta} {mgs}} = 2\pi \sqrt {\frac {ml^2} {mgl}} = 2\pi \sqrt {\frac l g}
$$


Természetesen megkaptuk a matematikai inga periódusidejét.

2. Mekkora a kísérletben látott $l = 0,6\text{ m}$ hosszú homogén rúd lengésideje mint fizikai inga?

Itt a tehetetlenségi nyomaték $\Theta = \frac 1 3 ml^2$ és $s = \frac l 2$, tehát ezeket behelyettesítve kapjuk a következő képletet:


$$
T = 2\pi \sqrt {\frac {\Theta} {mgs}} =  2\pi \sqrt {\frac {\frac 1 3 ml^2} {mg\frac l 2}} = 2\pi \sqrt {\frac {2l} {3g}}
$$


Ide a $0,6\text{ m}$-es hosszat behelyettesítve azt kapjuk, hogy:


$$
T = 2\pi \sqrt {\frac {2l} {3g}} = 2 \cdot 3,1415 \sqrt {\frac {2 \cdot 0,6} {3 \cdot 9,81}} = 1,269\text{ s}
$$


A kísérletet bemutató videóról megállapíthatjuk néhány lengés lengésidejét. 7 lengés ideje kb. $9,02\text{ s}$. Ebből $T$:


$$
T = \frac {9,02} 7 \approx 1,29\text{ s}
$$


Ez kb. 1,6%-os hiba. 2% alatti hiba jónak számít egy ilyen megfigyelésnél, hisz a reakcióidő kb. $0,3\text{ s}$. Ez egy lengésnél $0,04\text{ s}$ hibát jelent. Ez nagyjából 3%-os relatív hiba.

## A redukált hossz

Összehasonlítva a matematikai inga és a fizikai inga lengésidejét, megállapíthatjuk, hogy minden fizikai ingához található olyan matematikai inga, melynek lengésideje megegyezik a fizikai inga lengésidejével. Ennek a matematikai ingának a hosszát nevezzük a fizikai inga redukált hosszának.

> **Redukált hossz:** Annak a matematikai ingának a hossza, melynek a lengésideje egyenlő a fizikai inga lengésidejével.


$$
l_r = \frac \Theta {ms}
$$


Ezt megjegyezve mindig számolhatunk a matematikai ingára vonatkozó képlettel. Fizikai inga esetén az inga redukált hosszával kell a lengésidőt kiszámítanunk.

### Példák
1. Mutassuk ki, hogy a matematikai inga redukált hossza nem más, mint a saját hossza!


$$
l_r = \frac \Theta {ms} = \frac {ml^2} {ml} = l
$$


2. Számítsuk ki egy $l$ hosszúságú homogén rúd mint fizikai inga redukált hosszát, ha a forgástengely a rúd végpontja!


$$
l_r = \frac \Theta {ms} = \frac {\frac 1 3 ml^2} {m \frac l 2} = \frac 2 3 l
$$


3. Számítsuk ki a redukált hosszt és a lengésidőt, ha az előző példa rúdja esetén a forgástengely $\frac l 4$ távolságra van a súlyponttól! A rúd hossza $0,6\text{ m}$.

A tehetetlenségi nyomaték meghatározása a Steiner-tétel alapján történhet:


$$
\Theta_0 = \Theta_{TKP} + md^2
$$


Innen az előző példa alapján meghatározzuk $\Theta_{TKP}$-t!


$$
\Theta_{TKP} = \Theta_0 - md^2 = \frac 1 3 ml^2 - m\left(\frac l 2\right)^2 = \frac 1 {12} ml^2
$$


Most meghatározzuk az új $\Theta$-t!


$$
\Theta = \Theta_{TKP} + ms^2 = \frac 1 {12} ml^2 + m\left(\frac l 4\right)^2 = \frac 7 {48} ml^2
$$


Most a redukált hossz már meghatározható:


$$
l_r = \frac {\Theta} {ms} = \frac {\frac 7 {48} ml^2} {m\frac l 4} = \frac 7 {12} l = \frac{7 \cdot 0,6}{12} = 0,35\text{ m}
$$


A lengésidő:


$$
T = 2\pi \sqrt {\frac {l_r} g} = 2\pi \sqrt {\frac {0,35} {9,81}} = 1,187\text{ s}
$$


## Feladatok

**1. Feladat: A felfüggesztett korong**
Egy $R$ sugarú, homogén tömegeloszlású, $m$ tömegű vékony korongot a peremének egyik pontjánál fogva felfüggesztünk úgy, hogy a saját síkjában tudjon lengéseket végezni.
*   Határozd meg az inga kis kitérésekre vonatkozó lengésidejét!
*   Mekkora a korong redukált hossza?

*Segítség:* A korong saját tömegközéppontjára vonatkozó tehetetlenségi nyomatéka: $\Theta_{TKP} = \frac{1}{2}mR^2$, alkalmazd a Steiner-tételt!

**2. Feladat: A minimális lengésidő**
Egy $L$ hosszúságú, homogén, vékony rudat egy rajta átmenő vízszintes tengely körül fizikai ingaként lengésbe hozunk. A felfüggesztési pont a rúd tömegközéppontjától $x$ távolságra található. 
*   Írd fel a lengésidőt az $x$ távolság függvényében!
*   Számítással igazold, hogy milyen $x$ távolság esetén lesz a rúd lengésideje minimális!

**3. Feladat: Az ingaóra modellje**
Egy ingaóra ingáját modellezzük a következőképpen: az inga szára egy $l$ hosszúságú, elhanyagolható tömegű merev rúd, melynek a végére egy $R$ sugarú, $m$ tömegű tömör gömböt rögzítettek.
*   Határozd meg ennek a fizikai ingának a lengésidejét!
*   Hogyan aránylik ennek az ingának a lengésideje egy olyan matematikai ingáéhoz, melynek hossza megegyezik a gömb középpontjának a felfüggesztéstől mért távolságával ($l+R$)?

*Segítség:* A tömör gömb saját tömegközéppontjára vonatkozó tehetetlenségi nyomatéka: $\Theta_{TKP} = \frac{2}{5}mR^2$.