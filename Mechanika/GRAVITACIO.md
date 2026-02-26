# A gravitáció törvénye

## Az első kozmikus sebesség
Gondoljuk el, hogy egy testet vízszintes irányban a földfelszín közelében kilövünk megfelelően nagy sebességgel. Gondolatban most hanyagoljuk el a légellenállást! Ekkor a test elegendően nagy sebesség esetén a Föld körüli körpályára állna!

Számítsuk ki ezt a sebességet!


$$
F_e = ma_{cp}
$$



$$
F_e = mg
$$



$$
mg = ma_{cp}
$$



$$
g = a_{cp}
$$



$$
g = \frac {v^2} {R}
$$



$$
v^2 = gR
$$



$$
v = \sqrt {gR} = \sqrt {9,81 \times 6,370 \times 10^6} = 7905 \frac {m} {s} = 7,905 \frac {km} {s}
$$


A számítás során felhasználtuk, hogy a Föld sugara $6370 km$. 

Ezt az elméletileg legkisebb sebességet, mellyel egy elhajított test a felszín közelében körpályára állítható, első kozmikus sebességnek nevezzük. A valóságban a légellenállás legyőzéséhez komoly meghajtás lenne szükséges a felszín közelében, de néhány száz km magasságban már nem. Itt a levegő olyan ritka, hogy a testek körpályára állíthatók a Föld körül, ha megfelelő sebességre gyorsítjuk fel őket. Ha a test elérte a sebességet, további meghajtás szinte nem is szükséges.

## A gravitáció távolságfüggése

A fenti számítást Newton is elvégezte. Arra volt kíváncsi, vajon hogyan csökken a testet körpályán tartó nehézségi erő a magassággal. Arra gondolt, hogy a Holdat is ugyanaz az erő tartja körpályán, ami a testeket a Föld középpontja felé vonzza. Milyen arányban csökken az erő a távolsággal?

Newton tudta, hogy a Hold a Földtől kb. 60 Föld-sugárnyi távolságra van ($384400 km$). Ki tudjuk számítani a Hold gyorsulását, hisz keringési ideje $T = 27,3 nap$.


$$
v = \frac {2 \pi r} {T} = \frac {2 \times 3,1415 \times 384400000} {27,3 \times 86400} = 1024 \frac {m} {s}
$$



$$
a_{cp} = \frac {v^2} {r} = \frac {1024^2} {384400000} = 0,002728 \frac {m} {s^2}
$$



$$
\frac {g} {a_{cp}} = \frac {9,81} {0,002728} = 3597
$$


Látszik, hogy számolási pontosságunkon belül 3600-at kapunk. Newton tehát azt kapta, hogy:


$$
\frac {g} {a_{cp}} = \frac {r^2} {R^2}
$$



$$
a_{cp} = \frac {gR^2} {r^2}
$$


Tehát a testek gyorsulása az $r$ távolság négyzetével fordított arányban csökken. Ez nyilván a testekre ható erőre is érvényes. Így született meg a gravitációs erő törvénye.

## A gravitáció törvénye

>**Bármely két test közt gravitációs vonzóerő lép fel. Ez pontszerű testek közt egyenesen arányos a testek tömegével és fordítottan arányos a távolságuk négyzetével. Az erő a pontszerű testeket összekötő egyenes menten hat és mindig vonzóerő.**


$$
F_g = G \frac {m_1 m_2} {r^2}
$$


Newton a gravitáció törvényéből sikeresen le tudta vezetni mindhárom Kepler-törvényt a bolygók mozgására. Sajnos az ellipszispályák levezetése magasabb matematikai ismereteket igényel, úgyhogy ezt mi nem fogjuk megtenni. Tanulságos viszont a második és a harmadik törvény levezetése. A harmadik törvényt mi itt csak körpályák esetére fogjuk levezetni.

## Kepler második törvényének levezetése

A test mozgását figyeljük nagyon rövid $t$ időtartamokon keresztül, tehát $t \ll T$. Kezdetben a test $A$ pontból a $B$ pontba jut egyenes vonalban az igen rövid $t$ idő alatt. Ha erő nem hatna rá, akkor újabb $t$ idő elteltével a $C$ pontba jutna az egyenes mentén tovább mozogva egyenletes sebességgel.


$$
\overline {AB} = \overline {BC}
$$


Legyen a Nap az $O$ pontban! Ekkor az $OAB$ háromszög és az $OBC$ háromszög területe egyenlő, hisz a magasságaik és a rá merőleges oldalaik is egyenlők.


$$
T_{OAB} = T_{OBC}
$$


Mivel a testre a Nap felé mutató erő hat, ezért nem a $C$, hanem a $D$ pontba jut. A $\overline {CD}$ párhuzamos az $\overline {OB}$ szakasszal, mivel az erő a Nap felé mutat. Ekkor viszont az $OBC$ és $OBD$ háromszögek területei is egyenlők, hisz az alapjuk az $\overline {OB}$ közös és magasságaik is egyenlők. Ez azt jelenti, hogy:


$$
T_{OAB} = T_{OBD}
$$


Mivel $t$ tetszőleges, bár kicsiny időtartam, ez azt jelenti, hogy a területi sebesség állandó.

## Kepler harmadik törvénye körpályák esetére

Legyen $M$ a Nap tömege. Ekkor a gyorsulás egy körpályán mozgó bolygó esetén:


$$
a_{cp} = \frac {F_e} {m} = \frac {F_g} {m} = \frac {G \frac {mM} {r^2}} {m} = \frac {GM} {r^2}
$$


A centripetális gyorsulás körpálya esetén:


$$
a_{cp} = \frac {v^2} {r} = \frac {(\frac {2 \pi r} {T})^2} {r} = \frac {4 \pi^2 r^2} {T^2 r} = \frac {4 \pi^2 r} {T^2}
$$


A két kifejezést egyenlővé téve:


$$
\frac {GM} {r^2} = \frac {4 \pi^2 r} {T^2}
$$



$$
\frac {GM} {4 \pi^2} = \frac {r^3} {T^2}
$$


Tehát a Naptól mért középtávolság köbének és a keringési idő négyzetének hányadosa csak a Nap $M$ tömegétől függő állandó. 

Bár levezetésünk csak körpályák esetére adja vissza a törvényt, a törvény igaz ellipszispályák esetére is. Ilyenkor az $r$ sugár helyére az $a$ kerül, mely a nagytengely hosszának fele. Ez körpályák esetére nem más, mint a sugár.