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