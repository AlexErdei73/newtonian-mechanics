# Feladatok az erő témakörében

## Példák a második törvényre

1. Egy $1300\text{ kg}$ tömegű autó $8{,}00\text{ s}$ alatt gyorsul fel $100{,}0\text{ }\frac{\text{km}}{\text{h}}$ sebességre. Mekkora az elért sebesség $\text{m/s}$-ban? Mekkora a gyorsulás? Milyen hosszú úton gyorsít fel a kocsi? Mekkora a gyorsítóerő $\text{N}$-ban?

$$
v = \frac {s} {t} = \frac {100\text{ km}} {1\text{ h}} = \frac {100\ 000\text{ m}} {3600\text{ s}} \approx 27{,}78\text{ }\frac {\text{m}} {\text{s}}
$$

Itt az elért sebesség átváltásához az egyenletes mozgás alapgondolatát használtuk, hiszen feltételezhetjük, hogy az autó a gyorsítási szakasz után ezzel az állandó sebességgel haladna tovább. Ez azt jelenti, hogy $100\text{ km}$ utat tenne meg $1\text{ h}$ alatt. Tudjuk, hogy $1\text{ óra} = 3600\text{ másodperc}$, mivel minden perc $60\text{ s}$.

$$
a = \frac {\Delta v} {t} = \frac {v - v_0} {t} = \frac {27{,}78 - 0} {8{,}00} \approx 3{,}473\text{ }\frac {\text{m}} {\text{s}^2}
$$

$$
s = \frac {a} {2} \cdot t^2 = \frac {3{,}473} {2} \cdot 8{,}00^2 \approx 111{,}1\text{ m}
$$

$$
F_e = m \cdot a = 1300 \cdot 3{,}473 \approx 4515\text{ N} \approx 4{,}52\text{ kN}
$$

2. Egy $1500\text{ kg}$ tömegű gépkocsi egyenletesen halad $50\text{ }\frac{\text{km}}{\text{h}}$ sebességgel. A vezető elé hirtelen kilép egy gyalogos, ezért hirtelen fékez. A vezető reakcióideje $0{,}300\text{ s}$. A gépkocsit lassító erő $8{,}83\text{ kN}$. Számítsd ki a lassulást $\frac{\text{m}}{\text{s}^2}$-ban! Mennyi a fékezési idő, és mennyi idő telik el a gyalogos megpillantásától a teljes megállásig? Mennyi utat tesz meg az autó a reakcióidő alatt és a fékezés alatt? Mennyi a teljes fékút a megállásig?

$$
v_0 = \frac {s} {t} = \frac {50\text{ km}} {1\text{ h}} = \frac {50\ 000\text{ m}} {3600\text{ s}} \approx 13{,}89\text{ }\frac {\text{m}} {\text{s}}
$$

A reakcióidő alatt az autó még lassítás nélkül halad:

$$
v_0 = \frac {s_1} {t_1} 
$$

$$
13{,}89 = \frac {s_1} {0{,}3} 
$$

$$
s_1 = 13{,}89 \cdot 0{,}3 \approx 4{,}167\text{ m}
$$

A fékezőerő nagyságából a gyorsulás abszolút értéke:

$$
F_e = m \cdot |a|
$$

$$
8830 = 1500 \cdot |a|
$$

$$
|a| = \frac {8830} {1500} \approx 5{,}887\text{ }\frac {\text{m}} {\text{s}^2}
$$

Mivel fékezésről van szó, a gyorsulás értéke a mozgással ellentétes, azaz $-5{,}887\text{ }\frac{\text{m}}{\text{s}^2}$.

$$
a = \frac {\Delta v} {t} = \frac {v - v_0} {t}
$$

$$
-5{,}887 = \frac {0 - 13{,}89} {t}
$$

$$
t = \frac {-13{,}89} {-5{,}887} \approx 2{,}359\text{ s}
$$

A tiszta fékezési fékút a négyzetes úttörvény alapján:

$$
s_2 = v_0 \cdot t + \frac {a} {2} \cdot t^2 = 13{,}89 \cdot 2{,}359 + \frac {-5{,}887} {2} \cdot 2{,}359^2 \approx 16{,}39\text{ m}
$$

A teljes időtartam a megpillantástól a megállásig:

$$
t_{\text{teljes}} = t_1 + t = 0{,}3\text{ s} + 2{,}359\text{ s} \approx 2{,}66\text{ s}
$$

A teljes megtett út (totális fékút):

$$
s_{\text{teljes}} = s_1 + s_2 = 4{,}167\text{ m} + 16{,}39\text{ m} \approx 20{,}6\text{ m}
$$

Tehát ha a gyalogos $20{,}6\text{ m}$-en belül van a megpillantás pillanatában, akkor az autónak fizikai esélye sincs a gázolás elkerülésére.

---

### Gyakorló feladatok

**1. Gyorsulás és erő kiszámítása**
Egy $2000\text{ kg}$ tömegű teherautó álló helyzetből indulva $12\text{ s}$ alatt éri el az $54\text{ }\frac{\text{km}}{\text{h}}$ sebességet. Számítsd ki a jármű egyenletes gyorsulását! Mekkora gyorsítóerő hat a teherautóra a gyorsítás közben, ha a súrlódástól eltekintünk? Mekkora utat tesz meg ez alatt az idő alatt?

**2. Fékezés vészhelyzetben**
Egy $900\text{ kg}$ tömegű sportautó a versenypályán $144\text{ }\frac{\text{km}}{\text{h}}$ sebességgel halad. A pilóta hirtelen fékezni kényszerül, a fékek által kifejtett állandó lassítóerő $4500\text{ N}$. Mennyi idő alatt áll meg az autó, és mekkora a tiszta fékút hossza? (A vezető reakcióidejét ebben az esetben hanyagoljuk el).

**3. Mozgás állandó erő hatására**
Egy $50\text{ kg}$ tömegű ládát vízszintes padlón tolunk egyenletesen gyorsulva. A ládára ható vízszintes tolóerő $200\text{ N}$, a padló és a láda között fellépő súrlódási erő pedig $50\text{ N}$. Mekkora a ládára ható erők eredője, és mekkora gyorsulással mozog a láda? Hány métert tesz meg $4\text{ másodperc}$ alatt, ha álló helyzetből indult?

---

## Példák a súlyerőre

1. Egy $60{,}0\text{ kg}$ tömegű tornász a dobbantóra ráugorva $2{,}00\text{ }\frac{\text{m}}{\text{s}}$ függőlegesen lefelé irányú sebességgel érkezik meg, majd $0{,}300\text{ s}$ múlva függőlegesen felfelé irányú $4{,}00\text{ }\frac{\text{m}}{\text{s}}$ sebességgel pattan fel. Mekkora a tornász függőleges gyorsulása? Mekkora a tornászra ható nehézségi erő, és mekkora a súlya nyugalomban? Mekkora a tornász súlya a dobbantás ideje alatt, valamint a levegőben? Számítsuk ki, hogy a tornász súlypontja milyen magasra emelkedik az elrugaszkodás után! A nehézségi gyorsulás értéke $9{,}81\text{ }\frac{\text{m}}{\text{s}^2}$.

$$
G = m \cdot g = 60 \cdot 9{,}81 = 588{,}6\text{ N}
$$

A tornászra ható nehézségi erő és a súlya nyugalomban egyaránt $588{,}6\text{ N}$.

Vegyünk egy felfelé mutató koordinátatengelyt! Ekkor a kezdősebesség lefelé mutat, tehát negatív ($-2{,}00\text{ }\frac{\text{m}}{\text{s}}$), a végsebesség pedig pozitív ($4{,}00\text{ }\frac{\text{m}}{\text{s}}$). A dobbantás alatti egyenletes gyorsulás:

$$
a = \frac {v - v_0} {t} = \frac {4{,}00 - (-2{,}00)} {0{,}3} = \frac{6{,}00}{0{,}3} = 20{,}00\text{ }\frac{\text{m}}{\text{s}^2}
$$

A tornászt a dobbantó rugalmas $K$ kényszerereje gyorsítja felfelé, miközben a gravitáció lefelé húzza. Az eredő erő nagysága a dinamika alaptörvényéből:

$$
F_e = m \cdot a = 60{,}0 \cdot 20{,}0 = 1200\text{ N}
$$

Mivel a gyorsulás felfelé mutat, a $K$ kényszererő a nagyobb:

$$
F_e = K - G
$$

$$
1200 = K - 588{,}6
$$

$$
K = 1200 + 588{,}6 = 1788{,}6\text{ N}
$$

Mivel a test súlya megegyezik a kényszererővel ($F_s = K$), a tornász súlya a dobbantás alatt kerekítve $1790\text{ N}$-ra növekszik a hirtelen felfelé gyorsulás miatt. A levegőben a test a súlytalanság állapotában van ($F_s = 0\text{ N}$), hiszen ott már csak a nehézségi erő hat rá. A súlypont emelkedési magassága a függőleges hajítás egyenleteivel számítható ki:

$$
a = \frac {v - v_0} {t}  
$$

$$
-9{,}81 = \frac {0 - 4{,}00} {t}
$$

$$
t = \frac {-4{,}00} {-9{,}81} \approx 0{,}4077\text{ s}
$$

$$
h = s = v_0 \cdot t + \frac {a} {2} \cdot t^2 = 4{,}00 \cdot 0{,}4077 + \frac {-9{,}81} {2} \cdot 0{,}4077^2 \approx 0{,}8155\text{ m}
$$

A levegőben a nehézségi gyorsulás fékezi a tornászt, ezért vettük az $a$ értékét negatívnak. A test nyilvánvalóan addig emelkedik, amíg a sebessége nullává nem csökken ($v = 0\text{ }\frac{\text{m}}{\text{s}}$). Az emelkedés magassága tehát kerekítve $0{,}816\text{ m}$.

2. Egy $100\text{ g}$ tömegű test függőlegesen lefelé gyorsul $2\text{ }\frac{\text{m}}{\text{s}^2}$ gyorsulással. A nehézségi gyorsulás $9{,}81\text{ }\frac{\text{m}}{\text{s}^2}$. Mekkora a testre ható nehézségi erő, mekkora az eredő erő, és mekkora $K$ kényszererővel tartjuk a testet függőlegesen felfelé?

A kapott válaszokat ellenőrizhetjük az alábbi szimuláció futtatásával:

[Függőlegesen lefelé gyorsuló test súlya szimulátor](https://alexerdei73.github.io/physics-engine/project/#ab26cafb-9a10-491b-a55b-97408d43f06e)

A nehézségi erő kiszámítása (átváltva a tömeget kilogrammra: $100\text{ g} = 0{,}1\text{ kg}$):

$$
G = m \cdot g = 0{,}1 \cdot 9{,}81 = 0{,}981\text{ N}
$$

A Földhöz rögzített inerciarendszerben az eredő erő lefelé mutat, nagysága:

$$
F_e = m \cdot a = 0{,}1 \cdot 2 = 0{,}2\text{ N}
$$

Mivel a mozgás és a gyorsulás lefelé irányul, a nehézségi erő nagyobb, mint a felfelé tartó $K$ kényszererő ($G > K$):

$$
F_e = G - K
$$

$$
0{,}2\text{ N} = 0{,}981\text{ N} - K
$$

$$
K = 0{,}981 - 0{,}2 = 0{,}781\text{ N}
$$

Mivel a test súlya megegyezik a kényszererővel ($F_s = K$), a lefelé gyorsuló test súlya $0{,}781\text{ N}$-ra csökken.

---

### Gyakorló feladatok

**1. Ember a liftben**
Egy $75\text{ kg}$ tömegű ember egy liftben áll, amely éppen elindul függőlegesen felfelé. A gyorsítási szakaszban a lift gyorsulása $1{,}5\text{ }\frac{\text{m}}{\text{s}^2}$. Mekkora $K$ kényszererővel nyomja a lift padlója az embert (azaz mekkora az ember súlya) ebben a szakaszban? Hogyan változik ez a súlyerő, ha a lift később állandó sebességgel halad tovább függőlegesen? ($g = 9{,}81\text{ }\frac{\text{m}}{\text{s}^2}$)

**2. Betonelem emelése daruval**
Egy építkezésen a daru egy $400\text{ kg}$ tömegű betonelemet emel fel függőlegesen. A drótkötélben ébredő feszítő kényszererő nagysága $4500\text{ N}$. Mekkora gyorsulással indul el a betonelem felfelé a Földhöz képest? Mekkora magasságba emelkedik fel az első $3\text{ másodperc}$ alatt, ha álló helyzetből indult? ($g = 9{,}81\text{ }\frac{\text{m}}{\text{s}^2}$)

**3. Rakétamodell indítása**
Egy $0{,}5\text{ kg}$ tömegű kis rakétamodell szilárd hajtóanyagú motorja $10\text{ N}$ tolóerőt fejt ki függőlegesen felfelé az indítóállványon. Mekkora a rakéta gyorsulása az indítás pillanatában? Mekkora a rakétára ható erők eredője? (A mozgást gátló légellenállást ebben a kezdeti fázisban hanyagoljuk el, $g = 9{,}81\text{ }\frac{\text{m}}{\text{s}^2}$).
