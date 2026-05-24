# Egy nehéz feladat a forgómozgásra

## Példa

Egy $m$ tömegű, $L$ hosszúságú rúd a tetején csapágyazva van, és függőleges síkban lengéseket képes végezni. A rúd a csapágyazással együtt képes forogni a csapágyon átmenő függőleges tengely körül. Egy motor megforgatja a csapágyazást, és $\omega$ szögsebességű forgásban tartja. Mekkora $\alpha$ szöget zár be a rúd a függőlegessel a forgása közben, ha ez a szög állandó?

![A forgó rúd példája](Kepek/forgorud.svg)

A rúd pontjai körmozgást végeznek vízszintes síkban, tehát gyorsulásuk a centripetális gyorsulás. Az $\alpha$ szög nem változik, vagyis a rúdnak nincs szöggyorsulása a vele együtt forgó koordináta-rendszerben. Van-e szöggyorsulás az inerciarendszerben? Ha felbontjuk a pontok gyorsulását rúdirányú és rúdra merőleges komponensre, akkor nem nulla $\alpha$ szög esetén lesz a rúdra merőleges gyorsulás, amely szöggyorsulást jelent a vízszintes forgástengelyre vonatkozóan.

$$
a_{i,\text{t}} = r_i \sin \alpha\ \omega^2 \cos \alpha
$$

$$
\beta = \frac{a_{i,\text{t}}}{r_i} = \omega^2 \sin \alpha \cos \alpha
$$

Írjuk fel a forgómozgás alapegyenletét a vízszintes tengelyre, amely körül a rúd elfordulhat!

$$
M_{z,\text{e}}^{\text{k}} = \Theta_{\text{rúd}} \beta
$$

Egyedül a nehézségi erőnek van nyomatéka:

$$
M_{z,\text{e}}^{\text{k}} = mg \frac{L}{2} \sin \alpha
$$

Beírva ezeket és a rúd végpontra vonatkozó $\Theta_{\text{rúd}} = \frac{1}{3}mL^2$ tehetetlenségi nyomatékát, a következő egyenletet kapjuk:

$$
mg \frac{L}{2} \sin \alpha = \frac{1}{3} mL^2 \omega^2 \sin \alpha \cos \alpha
$$

$$
\left( \frac{g}{2} - \frac{L\omega^2}{3}\cos \alpha \right)\sin \alpha = 0
$$

Ennek az egyenletnek általában két megoldása van.

1. megoldás:

$$
\sin \alpha = 0 \quad \rightarrow \quad \alpha = 0^\circ
$$

Ez stabil megoldás kis $\omega$ szögsebesség esetén. Egészen pontosan addig, amíg nem létezik a második megoldás.

2. megoldás:

$$
\frac{g}{2} = \frac{L\omega^2}{3} \cos \alpha
$$

Innen kifejezhetjük $\cos \alpha$ értékét:

$$
\cos \alpha = \frac{3g}{2L\omega^2}
$$

Mivel a koszinuszfüggvény értéke nem lehet nagyobb egynél:

$$
\cos \alpha \leqslant 1
$$

Így a motor szögsebességének nagyobbnak kell lennie egy minimális kritikus értéknél, hogy ez a stabil elhajlási megoldás egyáltalán létezhessen:

$$
\frac{3g}{2L\omega^2} \leqslant 1 \quad \rightarrow \quad \omega \geqslant \sqrt{\frac{3g}{2L}}
$$

Megmutatható, hogy amint a motor fordulatszáma átlépi ezt a kritikus határt, a függőleges helyzet instabillá válik, és a rúd magától kitér a stabil $\alpha > 0$ egyensúlyi szögbe.

---

## Analógia a haladó és forgó mozgás között


| Haladó mozgás | Forgó mozgás |
| :--- | :--- |
| Út ($s = r\phi$) | Szög ($\phi$) |
| Sebesség ($v = r\omega$) | Szögsebesség ($\omega$) |
| Gyorsulás ($a = r\beta$) | Szöggyorsulás ($\beta$) |
| Erő ($F$) | Forgatónyomaték ($M = Fr \sin \alpha$) |
| Tömeg ($m$) | Tehetetlenségi nyomaték ($\Theta = \sum_{i = 1}^{N} m_i r_i^2$) |
| Lendület / Impulzus ($I = mv$) | Perdület / Impulzusmomentum ($N = \Theta \omega$) |
| $F_{\text{e}} = ma$ | $M_{\text{e}}^{\text{k}} = \Theta \beta$ |
| $\vec{F}_{\text{e}} = \frac{\Delta \vec{I}}{t} \quad (t \rightarrow 0)$ | $\vec{M}_{\text{e}}^{\text{k}} = \frac{\Delta \vec{N}}{t} \quad (t \rightarrow 0)$ |
| $E_{\text{kin}} = \frac{mv^2}{2}$ | $E_{\text{forg}} = \frac{\Theta \omega^2}{2}$ |

---

## Feladatok

**1. Feladat (Támaszerők)**

Határozd meg a csapágyra ható támaszerő vízszintes és függőleges komponensét a fenti példában abban az esetben, amikor a motor $\omega > \sqrt{\frac{3g}{2L}}$ szögsebességgel forog, és a rúd beállt a stabil $\alpha > 0$ egyensúlyi helyzetébe!
*(Tipp: Írd fel a rúd tömegközéppontjának vízszintes körpályájára a haladó mozgás alapegyenletét!)*

**2. Feladat (Forgó gyűrű)**

Egy $R$ sugarú, vékony drótból készült körgyűrű a függőleges átmérője körül állandó $\omega$ szögsebességgel forog. Egy $m$ tömegű kis gyöngyszem súrlódásmentesen csúszhat a gyűrűn.
* a) Milyen $\omega$ szögsebesség esetén lesz a gyöngyszem stabil egyensúlyi helyzete a gyűrű legalsó pontján kívül?
* b) Határozd meg ezt az egyensúlyi helyzetet (a függőlegessel bezárt $\varphi$ szöget) a szögsebesség függvényében!