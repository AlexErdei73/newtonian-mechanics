# Az energia megmaradása forgómozgás esetén

## A tömegközépponti tengely

Eddig láttuk, hogy a forgómozgás alapegyenlete alkalmazható rögzített tengely esetén, vagy a pillanatnyi forgástengely esetén is, amennyiben a tengely nem rögzített.

Most azt fogjuk megmutatni, hogy a tömegközépponton átmenő tengelyre is alkalmazható. Bizonyítani ezt nem fogjuk, de nézzünk meg egy példát!

### Példa

Egy homogén gömb alakú golyó gördül le a $30^\circ$-os hajlásszögű lejtőn. A gömb tehetetlenségi nyomatéka $\Theta_{\text{TKP}} = \frac{2}{5}mr^2$. Mekkora a gömb gyorsulása?

![Kerék gördülése lejtőn lefelé](Kepek/kerekgorduleselejton.svg)

Ezt a problémát már megoldottuk a pillanatnyi forgástengely segítségével. Most oldjuk meg a tömegközépponton átmenő tengely segítségével is!

A nyomaték most a tapadási erőből fakad, hiszen egyedül ennek a hatásvonala nem megy át a tömegközépponti tengelyen.

$$
M_{z,\text{e}}^{\text{k}} = F_{\text{t}}r
$$

Az alapegyenlet tehát ekkor a következő:

$$
F_{\text{t}}r = \Theta_{\text{TKP}}\beta
$$

A tömegközépponthoz képest a lejtővel érintkező pont sebességének nagysága a következő:

$$
v = r\omega
$$

Valójában ennek a pontnak a sebessége az inerciarendszerben nulla, hiszen a tömegközéppont halad ugyanekkora nagyságú, de ellentétes irányú sebességgel. Írhatjuk tehát, hogy:

$$
v_{\text{TKP}} = r\omega
$$

amiből a lejtő irányú gyorsulásra azt kapjuk, hogy:

$$
a = a_{\text{TKP}} = r\beta
$$

Ez ismét csak igen fontos összefüggés. A Newton-féle második törvény alakja most is ugyanaz:

$$
mg \sin \alpha - F_{\text{t}} = ma
$$

Ebből kifejezve a tapadási erőt és beírva az alapegyenletbe, továbbá a szöggyorsulást az előző összefüggésből kifejezve és beírva, megkapjuk a gyorsulásra vonatkozó egyenletet:

$$
F_{\text{t}} = mg \sin \alpha - ma
$$

$$
r(mg \sin \alpha - ma) = \Theta_{\text{TKP}}\frac{a}{r}
$$

$$
g \sin \alpha - a = a\frac{\Theta_{\text{TKP}}}{mr^2}
$$

Innen fejezzük ki $a$-t, és meg is van az összefüggés, amit keresünk:

$$
g \sin \alpha = a\left(1 + \frac{\Theta_{\text{TKP}}}{mr^2}\right)
$$

$$
a = \frac{g \sin \alpha}{1 + \frac{\Theta_{\text{TKP}}}{mr^2}}
$$

Ez pontosan az az összefüggés, amelyet előzőleg a pillanatnyi forgástengely alkalmazásával vezettünk le. Ide beírhatjuk a gömb tehetetlenségi nyomatékát:

$$
\frac{\Theta_{\text{TKP}}}{mr^2} = \frac{2}{5}
$$

$$
a = \frac{g \sin \alpha}{1 + \frac{2}{5}} = \frac{5g \sin \alpha}{7}
$$

Az adatokat behelyettesítve megkapjuk a gyorsulást:

$$
a = \frac{5 \cdot 9,81 \cdot \sin 30^\circ}{7} \approx 3,504\text{ m/s}^2
$$

## A mechanikai energia megmaradása

Forgómozgás esetén is igaz az, hogy a mechanikai energia megmaradhat. Ennek viszont fontos feltétele, hogy az összes külső és belső erő konzervatív legyen. A merev testekben ható belső erők konzervatívak. Tehát ha nincs csúszási súrlódás (csak tiszta gördülés), és csak egy merev test mozog, akkor a mechanikai energia megmaradó mennyiség. A mozgási energia kiszámításakor viszont figyelembe kell venni a forgást is! Itt is vagy a pillanatnyi forgástengely körüli forgással dolgozunk, vagy a tömegközéppont körüli forgás energiájához adjuk a haladó mozgás energiáját, amelyet úgy képzelünk el, mintha a test teljes tömege a tömegközéppontba lenne egyesítve, és úgy mozgona.

### Példa

A lejtőn legördülő gömb esetében mutassuk meg, hogy a mechanikai energia állandó!

$$
E = \frac{\Theta_{\text{TKP}}\omega^2}{2} + \frac{mv_{\text{TKP}}^2}{2} + mgh_{\text{TKP}} = \text{állandó}
$$

Induljon a test mondjuk álló helyzetből az egyszerűség kedvéért! Ekkor a gyorsulás:

$$
a_{\text{TKP}} = \frac{g \sin \alpha}{1 + \frac{\Theta_{\text{TKP}}}{mr^2}}
$$

A szöggyorsulás:

$$
\beta = \frac{a_{\text{TKP}}}{r}
$$

$$
v_{\text{TKP}} = a_{\text{TKP}}t
$$

$$
\omega = \beta t
$$

Továbbá:

$$
h_{\text{TKP}} = h_{\text{TKP},0} - s \sin \alpha
$$

ahol

$$
s = \frac{a_{\text{TKP}}}{2}t^2
$$

Helyettesítsük ezeket be!

$$
E = \frac{1}{2}mg^2 \sin^2 \alpha \cdot t^2 \frac{1}{\left(1 + \frac{\Theta_{\text{TKP}}}{mr^2}\right)^2} + \frac{1}{2}\Theta_{\text{TKP}}\frac{g^2 \sin^2 \alpha \cdot t^2}{r^2\left(1 + \frac{\Theta_{\text{TKP}}}{mr^2}\right)^2} + mgh_{\text{TKP},0} - mg\frac{g \sin \alpha}{2\left(1 + \frac{\Theta_{\text{TKP}}}{mr^2}\right)}t^2 \sin \alpha
$$

Az első két tag összevonható:

$$
\frac{1}{2}mg^2 \sin^2 \alpha \cdot t^2 \frac{1}{\left(1 + \frac{\Theta_{\text{TKP}}}{mr^2}\right)^2} + \frac{1}{2}\Theta_{\text{TKP}}\frac{g^2 \sin^2 \alpha \cdot t^2}{r^2\left(1 + \frac{\Theta_{\text{TKP}}}{mr^2}\right)^2} = \frac{mg^2 \sin^2 \alpha \cdot t^2}{2}\frac{1 + \frac{\Theta_{\text{TKP}}}{mr^2}}{\left(1 + \frac{\Theta_{\text{TKP}}}{mr^2}\right)^2}
$$

Itt egyszerűsítés után pontosan az utolsó tag ellentettje áll, vagyis azt kapjuk, hogy:

$$
E = mgh_{\text{TKP},0}
$$

---

## Feladatok

**1. A letekeredő henger (A jojó-probléma):**

A szövegben egy lejtőn guruló testet vizsgáltunk, ahol a forgatónyomatékot a tapadási erő adta. Képzeljünk el most egy $m$ tömegű, $r$ sugarú tömör hengert ($\Theta_{\text{TKP}} = \frac{1}{2}mr^2$), amelynek a palástjára fonalat tekertünk. A fonál végét rögzítjük a mennyezeten, majd a hengert elengedjük, így az lefelé esik, miközben letekeredik a fonálról (mint egy jojó).
Alkalmazd a szövegben látott dinamikai logikát: a tapadási erőt cseréld le a kötélerőre ($K$), írd fel a haladó mozgás és a forgómozgás alapegyenleteit, majd határozd meg a henger lefelé irányuló gyorsulását! Hogyan aránylik ez az érték a nehézségi gyorsuláshoz ($g$)?

[Maxwell-kerék](https://www.youtube.com/watch?v=NNXmOm9L-S8)

A Maxwell-kerék (vagy Maxwell-tárcsa) egy klasszikus demonstrációs eszköz, amely a jojó-probléma fizikai alapelveit szemlélteti. Egy viszonylag nagy tehetetlenségi nyomatékú, vastag tengelyű kereket függesztünk fel kétoldalt egy-egy fonálra. Amikor a fonalakat feltekerjük a tengelyre és a kereket elengedjük, az látványosan, de a szabadesésnél lényegesen lassabban gyorsulva gördül lefelé [0:01:16]. A mozgás során a helyzeti energia forgási és haladó mozgási energiává alakul át. A legalsó pontot elérve a fonalak hirtelen megfeszülnek, és a tárcsa forgási energiája miatt a fonalak elkezdenek visszatekeredni a tengelyre, így a kerék szinte teljesen visszatér a kezdeti kiindulási magasságába, folyamatos periodikus oszcillációt végezve [0:01:17].

**2. Különböző testek versenye:**

A szövegben egy tömör gömb gyorsulását számoltuk ki. Képzeljük el, hogy a gömb helyett egy homogén, tömör henger gördül le ugyanezen a $30^\circ$-os lejtőn! A henger tehetetlenségi nyomatéka $\Theta_{\text{TKP}} = \frac{1}{2}mr^2$. 
* Használd a szövegben levezetett általános képletet, és számítsd ki a henger gyorsulását! 
* Hasonlítsd össze a kapott értéket a gömb gyorsulásával ($3,504\text{ m/s}^2$)! Melyik test ér le hamarabb a lejtő aljára, ha azonos magasságból, egyszerre indítjuk őket? A testek tömege és sugara számít-e a végeredmény szempontjából?

**3. Alternatív levezetés energiamegmaradásból:**

A szövegben az erőtani összefüggésekből kiindulva igazoltuk, hogy az energia állandó. Végezd el a fordított műveletet! Írd fel az energiamegmaradás törvényét két állapotra: a test induljon egy $s$ hosszúságú, $\alpha$ hajlásszögű lejtő tetejéről álló helyzetből, majd érjen le a lejtő aljára $v$ sebességgel. Ebből az egyenletből vezesd le a test tömegközéppontjának sebességét ($v$), majd a $v^2 = 2as$ kinematikai képlet felhasználásával mutasd meg matematikai úton, hogy pontosan ugyanazt a gyorsulást ($a$) kapjuk, mint amit a szövegben a nyomatéki egyenlettel levezettünk!

**4. A tiszta gördülés feltétele (Maximális hajlásszög):**

A tiszta gördülés feltétele, hogy a test ne csússzon meg, azaz a fellépő tapadási erő ($F_{\text{t}}$) ne lépje túl a maximális tapadási súrlódási erőt ($F_{\text{t,max}} = \mu_0 F_{\text{nyomó}}$). A szövegben szereplő gyorsulásképletet és a tapadási erőt ($F_{\text{t}} = mg \sin \alpha - ma$) felhasználva vezesd le, **mekkora lehet a lejtő maximális hajlásszöge ($\alpha_{\text{max}}$)** egy adott $\mu_0$ tapadási súrlódási együttható esetén, hogy a tömör gömb még éppen tisztán gördüljön! *(Számítsd ki ezt a maximális szöget konkrétan, ha a lejtő és a gömb közötti tapadási súrlódási együttható* $\mu_0 = 0,2$ *!)*

**5. Gördülés a halálkanyarban:**

A szövegben bemutatott mechanikai energiamegmaradást használjuk fel egy klasszikus feladathoz! Egy homogén tömör gömb nyugalmi helyzetből, $h$ magasságból legördül egy lejtőn, majd beérkezik egy $R$ sugarú függőleges körpályába („halálkanyarba”). Határozd meg, **legalább mekkora $h$ magasságból kell indítani a gömböt** ahhoz, hogy a hurok legfelső pontján se essen le (azaz végig a pályán maradva tisztán gördüljön)! *(Tipp: A hurok tetején a testnek kell, hogy legyen egy minimális sebessége, amit a súlytalanság állapota, azaz az* $mg = m\frac{v^2}{R}$ *feltétel határoz meg. Ne felejtsd el a hurok tetején lévő test mozgási energiájába beleszámolni a forgást is! A gömb* $r$ *sugarát az* $R$ *sugárhoz képest elhanyagolhatónak tekinthetjük:* $r \ll R$ *.)*