# Gravitacios energia

## A garvitacios energia fogalma
Lattuk, hogy a nehezsegi ero konzervativ es tartozik hozza potencialis energia. A nehezsegi ero altal vegzett munkat az a test potencialis energiajanak csokkenese fedezi.

Azt is lattuk, hogy a nehezsegi ero az a Fold gravitacios vonzasabol fakad, melyet a Fold a felszin kozeli testekre fejt ki. Lattuk, hogy ez a vonzoero a tavolsag negyzetevel csokken, tehat a Hold tavolsagara levo testre peldaul 3600-szor kisebb vonzoerovel hat a Fold, mint egy ugyanolyan testre a Foldfelszin kozeleben, hisz a Hold 60-szor olyan messze van a Fold kozeppontjatol, mint a Fold felszine. 

Hogyan valtozik vajon a test gravitacios helyzeti energiaja ha a Fold sugarahoz kepest nem elhanyagolhato magassagok is szoba johetnek? Erre a kerdesre keressuk a valszt!

## A gravitacios potencialis energia kiszamitasa
Nezzuk meg hogyan valtozik az $\frac {1} {r}$ fuggveny, ha az r kis mertekben megvaltozik! Legyen tehat $\Delta r \ll r$!

$$
\Delta \frac {1} {r} = \frac {1} {r} - \frac {1} {r_0} = \frac {r_0 - r} {rr_0} = - \frac {r - r_0} {r(r - \Delta r)} = - \frac {\Delta r} {r^2}
$$

Itt az utolso lepesben ket fontos dolog tortent:
1. Egyreszt felismertuk, hogy a szamlaloban $r - r_0 = \Delta r$
2. A nevezoben $\Delta r$ elhanyagolhato $r$ mellett, hisz sokkal kisebb.

Most vizsgaljuk meg hogy valtozik a gravitacios energia, ha a Nap korul keringo bolygo, palyajan kis mertekben elmozdul! Az elmozdulas ket reszbol tevodik ossze:
1. A Naptol a bolygohoz huzott sugarra meroleges elmozdulas komponens munkavegzessel nem jar, hisz ez az ero iranyara meroleges elmozdulas komponens!
2. A bolygo tavolsaga ($r$) a Naptol megvaltozik. Legyen $m$ a bolygo tomege es $M$ a Nap tomege. Ekkor:

$$
W_g = -F_g \Delta r
$$

A munka negativ, ha $\Delta r > 0$, mivel ellentets iranyu a gravitacios ero es az elmozdulas. A munka pozitiv, ha $\Delta r < 0$, mert a bolygo az ero iranyaba mozdul el. Van-e olyan $E_g$ gravitacios energia, mely ugy valtozik, hogy

$$
W_g = - \Delta E_g
$$

mindig igaz legyen?


Valasz:

$$
E_g = -G \frac {Mm} {r}
$$

gravitacios energia van a rendszerben, melynek valtozasa megegyezik a gravitacios ero altal vegzett munkaval.

Bizonyitas:

$$
-\Delta E_g = -(-G \frac {mM} {r} + G \frac {mM} {r_0}) = GmM (\frac {1} {r} - \frac {1} {r_0}) = GmM \Delta \frac {1} {r}
$$

Most beirjuk ide, amit kaptunk a $\Delta {1} {r}$-re!

$$
-\Delta E_g = GmM(- \frac {\Delta r} {r^2}) = - G\frac {mM} {r^2} \Delta {r} = - F_g \Delta r = W_g
$$

Latjuk tehat, hogy a gravitacios energia valoban kiszamithato a fenti formulaval.

Hol van a vonatkoztatasi szint? Milyen messze kell legyen a bolygo a Naptol, hogy gravitacios energiaja 0 legyen? Lathato, hogy minel nagyobb $r$, annal kisebb a gravitacios energia, hisz $r$ a nevezoben szerepel es tudjuk, hogy minel nagyobb szammal osztunk annal kisebb az eredmeny. Tehat a bolygonak vegtelen nagy tavolsagban kell lennie a Naptol, hogy a gravitacios energia nulla legyen. A vonatkoztatasi szint $r = \infty$.

## A magassagi helyzeti energia hataresete
Visszakapjuk-e a korabbi magassagi helyzeti energia kiszamitast a mostani kepletbol, ha $h \ll R$ ? Tehat a magassag, sokkal kisebb a Fold sugarahoz kepest, akkor szamolhatjuk-e a gravitacios energiat a korabbi modon?

$$
E_g = -G\frac {mM} {r} = -m GM\frac {1} {R + h} 
$$

$$
\frac {1} {R + h} = \frac {1} {R} - \frac {h} {R^2}
$$

Ez az utolso sor, nem mas mint az elso kifejezesunk alkalmazva $r = R$ es $\Delta r = h$ esetekre.

$$
E_g = -m GM (\frac {1} {R} - \frac {h} {R^2}) = -m GM \frac {R - h} {R^2} = m \frac {GM} {R^2} (h - R)
$$

Ha bevezetjuk $g$-t, a nehezsegi gyorsulast:

$$
g = \frac {GM} {R^2}
$$

akkor

$$
E_g = mg(h - R) = mgh - mgR
$$

Latjuk, hogy ez mindig negativ, hisz $h \ll R$, de egy adott testre csak egy allandoban ($-mgR$) kulonbozik a magassagi helyzeti energiatol ($mgh$). Ez annyit jelent, hogy a helyzeti energia nulla szintje R magassagban, tehat $6370km$-nel van nullanak valasztva. A szokasos esetben, amikor a talajszinten van nullanak valasztva a gravitacios energia

$$
E_h = mgh = E_g + mgR
$$

## A mechanikai energia megmaradasa

A bolygomozgas eseten megmarad a mechanikai energia, hiszen csak a gravitacios ero eri a bolygot es ez konzervativ, amint epp megallapitottuk. 

$$
E_m + E_g = E_{m,0} + E_{g,0}
$$

$$
\frac {mv^2} {2} - G\frac {mM} {r} = E
$$

Itt az $E$ allando a palyahoz tartozo energia, mely allando az adott palyan.

## Sebesseg kiszamitasa

Ha a mechanikai energia egyenletebol kifejezzuk a sebesseget, akkor a kovetkezo keplet adodik.

$$
v = \sqrt{\frac {2E} {m} + GM\frac {2} {r}}
$$

Itt az $E$ osszenergia ismeretlen, de jegyezzuk meg, hogy ez csak a bolygo es a Nap atlagos tavolsagatol fugg, nem fugg a palya alakjatol sem. Az osszefugges az $E$ energia es az $a$ atlagos tavolsag kozt korpalyabol is megkaphato.

$$
ma_{cp} = F_g
$$

$$
m\frac {v^2} {a} = G \frac {Mm} {a^2}
$$

Innen $v^2$ kifejezheto:

$$
v^2 = \frac {GM} {a}
$$

Az energia tehat:

$$
E = \frac {mv^2} {2} - G\frac {mM} {r} = \frac {GmM} {2a} - \frac {GmM} {a} = -G \frac {mM} {2a}
$$

Eszerint:

$$
\frac {2E} {m} = -GM \frac {1} {a}
$$

Ezt visszairva a sebesseg kiszamitasaba, megkapjuk a ssebesseg kiszamitasara vonatkozo egyenletet.

$$
v = \sqrt {GM(\frac {2} {r} - \frac {1} {a})}
$$

## A masodik kozmikus sebesseg

Mekkora sebesseggel kell egy testet elhajitanunk a Fold felszinen, hogy sose terjen vissza? (A legellenallast elhanyagoljuk.) A valasz egyszeru, ha meggondoljuk, hogy el kell jusson vegtelen tavolsagra, tehat $a = \infty$.

$$
v = \sqrt{GM\frac {2} {R}} = \sqrt {2gR} = \sqrt {2} \sqrt{gR} = 1,4142 \times 7,902 \frac {km} {s} = 11,18 \frac {km} {s}
$$

Ezt a sebesseget nevezzuk masodik kozmikus sebessegnek.

## A harmadik kozmikus sebesseg

Mekkora sebesseggel kell egy testet elhajitani a Foldrol, hogy a Naprendszert is elhagyja? Ugyanigy szamolhatunk, de itt $M$ a Nap tomeget jelenti es $r$ pedig a Nap-Fold tavolsag, tehat a csillagaszati egyseg. G ekkor $4\pi^2$, tehat:

$$
v_{Nap} = \sqrt {GM_{Nap} \frac {2} {r}} = \sqrt {8 \pi^2} = 8,886 \frac {CSE} {ev} = 42,12 \frac {km} {s}
$$

A testnek evvel a sebesseggel kell rendelkeznie a Fold elhagyasa utan a Naphoz kepest, hogy elhagyja a Naprendszert. Tudjuk, hogy a Fold elhagyasahoz is kell $11,18 \frac {km} {s}$ sebesseg, mely eltunik, mikor a test mar nagy tavolsagra kerul a Fold sugarahoz kepest a Foldtol. A Fold maga is rendelkezik Nap koruli sebesseggel, ez konnyen ki is szamithato.

$$
v_{Föld} = \frac {2 \pi r} {T} = \frac {2 \times 3,1415 \times 1,496 \times 10^8} {365,26 \times 86400} = 29,78 \frac {km} {s}
$$

Ez annyit tesz, hogy a Foldhoz kepest a Fold elhagyasa utan elegendo

$$
v_{Nap} - v_{Föld} = 42,12 - 29,78 = 12,34 \frac {km} {s}
$$

sebesseggel rendelkezzen a test a Foldpalya sebessegenek iranyaban. Ugyanis ekkor a test a Naphoz képest pont a szükséges $v_{Nap}$ sebességgel rendelkezik. Indítsuk a testet a Föld keringésének irányában a Föld felszínéről függőlegesen felfelé! Ez azt jelenti, hogy a Föld pályamenti sebessége függőlegesen felfelé mutat! Számítsuk ki a szükséges $v$ sebességet úgy, hogy a Föld elhagyása után a testnek éppen a szükséges sebessége legyen a pályasebesség irányába!

$$
\frac {mv^2} {2} - G \frac {mM} {R} = \frac {m(v_{Nap} - v_{Föld})^2} {2}
$$

$$
v^2 = 2 \frac {GM} {R^2} R + (v_{Nap} - v_{Föld})^2 = 2gR + (v_{Nap} - v_{Föld})^2
$$

$$
v = \sqrt {11,18^2 + 12,34^2} = 16,65 \frac {km} {s}
$$

Ez tehát a lehető legkisebb sebesség, amellyel a megfelelő irányban, a megfelelő helyen kilőve a testet a Föld felszínén, ballisztikus pályán, a test képes elhagyni a Naprendszert is.