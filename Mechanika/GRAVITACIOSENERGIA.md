# Gravitációs energia

## A gravitációs energia fogalma
Láttuk, hogy a nehézségi erő konzervatív, és tartozik hozzá potenciális energia. A nehézségi erő által végzett munkát a test potenciális energiájának csökkenése fedezi.

Azt is láttuk, hogy a nehézségi erő a Föld gravitációs vonzásából fakad, melyet a Föld a felszín közeli testekre fejt ki. Láttuk, hogy ez a vonzóerő a távolság négyzetével csökken, tehát a Hold távolságára lévő testre például 3600-szor kisebb vonzóerővel hat a Föld, mint egy ugyanilyen testre a földfelszín közelében, hisz a Hold 60-szor olyan messze van a Föld középpontjától, mint a Föld felszíne. 

Hogyan változik vajon a test gravitációs helyzeti energiája, ha a Föld sugarához képest nem elhanyagolható magasságok is szóba jöhetnek? Erre a kérdésre keressük a választ!

## A gravitációs potenciális energia kiszámítása
Nézzük meg, hogyan változik az $\frac{1}{r}$ függvény, ha az $r$ kis mértékben megváltozik! Legyen tehát $\Delta r \ll r$!

$$
\Delta \frac {1} {r} = \frac {1} {r} - \frac {1} {r_0} = \frac {r_0 - r} {rr_0} = - \frac {r - r_0} {r(r - \Delta r)} = - \frac {\Delta r} {r^2}
$$

Itt az utolsó lépésben két fontos dolog történt:
1. Egyrészt felismertük, hogy a számlálóban $r - r_0 = \Delta r$.
2. A nevezőben $\Delta r$ elhanyagolható $r$ mellett, hisz sokkal kisebb.

Most vizsgáljuk meg, hogyan változik a gravitációs energia, ha a Nap körül keringő bolygó pályáján kis mértékben elmozdul! Az elmozdulás két részből tevődik össze:
1. A Naptól a bolygóhoz húzott sugárra merőleges elmozdulás-komponens munkavégzéssel nem jár, hisz ez az erő irányára merőleges elmozdulás-komponens!
2. A bolygó távolsága ($r$) a Naptól megváltozik. Legyen $m$ a bolygó tömege és $M$ a Nap tömege. Ekkor:

$$
W_g = -F_g \Delta r
$$

A munka negatív, ha $\Delta r > 0$, mivel ellentétes irányú a gravitációs erő és az elmozdulás. A munka pozitív, ha $\Delta r < 0$, mert a bolygó az erő irányába mozdul el. Van-e olyan $E_g$ gravitációs energia, mely úgy változik, hogy

$$
W_g = - \Delta E_g
$$

mindig igaz legyen?

Válasz:

$$
E_g = -G \frac {Mm} {r}
$$

gravitációs energia van a rendszerben, melynek változása megegyezik a gravitációs erő által végzett munkával.

Bizonyítás:

$$
-\Delta E_g = -(-G \frac {mM} {r} + G \frac {mM} {r_0}) = GmM (\frac {1} {r} - \frac {1} {r_0}) = GmM \Delta \frac {1} {r}
$$

Most beírjuk ide, amit kaptunk a $\Delta \frac{1}{r}$-re!

$$
-\Delta E_g = GmM(- \frac {\Delta r} {r^2}) = - G\frac {mM} {r^2} \Delta {r} = - F_g \Delta r = W_g
$$

Látjuk tehát, hogy a gravitációs energia valóban kiszámítható a fenti formulával.

Hol van a vonatkoztatási szint? Milyen messze kell legyen a bolygó a Naptól, hogy gravitációs energiája 0 legyen? Látható, hogy minél nagyobb $r$, annál kisebb a gravitációs energia, hisz $r$ a nevezőben szerepel, és tudjuk, hogy minél nagyobb számmal osztunk, annál kisebb az eredmény. Tehát a bolygónak végtelen nagy távolságban kell lennie a Naptól, hogy a gravitációs energia nulla legyen. A vonatkoztatási szint $r = \infty$.

## A magassági helyzeti energia határesete
Visszakapjuk-e a korábbi magassági helyzeti energia kiszámítást a mostani képletből, ha $h \ll R$? Tehát a magasság sokkal kisebb a Föld sugarához képest, akkor számolhatjuk-e a gravitációs energiát a korábbi módon?

$$
E_g = -G\frac {mM} {r} = -m GM\frac {1} {R + h} 
$$

$$
\frac {1} {R + h} = \frac {1} {R} - \frac {h} {R^2}
$$

Ez az utolsó sor nem más, mint az első kifejezésünk alkalmazva $r = R$ és $\Delta r = h$ esetekre.

$$
E_g = -m GM (\frac {1} {R} - \frac {h} {R^2}) = -m GM \frac {R - h} {R^2} = m \frac {GM} {R^2} (h - R)
$$

Ha bevezetjük $g$-t, a nehézségi gyorsulást:

$$
g = \frac {GM} {R^2}
$$

akkor

$$
E_g = mg(h - R) = mgh - mgR
$$

Látjuk, hogy ez mindig negatív, hisz $h \ll R$, de egy adott testre csak egy állandóban ($-mgR$) különbözik a magassági helyzeti energiától ($mgh$). Ez annyit jelent, hogy a helyzeti energia nullaszintje $R$ magasságban, tehát $6370 \text{ km}$-nél van nullának választva. A szokásos esetben, amikor a talajszinten van nullának választva a gravitációs energia:

$$
E_h = mgh = E_g + mgR
$$

## A mechanikai energia megmaradása

A bolygómozgás esetén megmarad a mechanikai energia, hiszen csak a gravitációs erő éri a bolygót, és ez konzervatív, amint épp megállapítottuk. 

$$
E_m + E_g = E_{m,0} + E_{g,0}
$$

$$
\frac {mv^2} {2} - G\frac {mM} {r} = E
$$

Itt az $E$ állandó a pályához tartozó energia, mely állandó az adott pályán.

## Sebesség kiszámítása

Ha a mechanikai energia egyenletéből kifejezzük a sebességet, akkor a következő képlet adódik:

$$
v = \sqrt{\frac {2E} {m} + GM\frac {2} {r}}
$$

Itt az $E$ összenergia ismeretlen, de jegyezzük meg, hogy ez csak a bolygó és a Nap átlagos távolságától függ, nem függ a pálya alakjától sem. Az összefüggés az $E$ energia és az $a$ átlagos távolság közt körpályából is megkapható:

$$
ma_{cp} = F_g
$$

$$
m\frac {v^2} {a} = G \frac {Mm} {a^2}
$$

Innen $v^2$ kifejezhető:

$$
v^2 = \frac {GM} {a}
$$

Az energia tehát:

$$
E = \frac {mv^2} {2} - G\frac {mM} {r} = \frac {GmM} {2a} - \frac {GmM} {a} = -G \frac {mM} {2a}
$$

Eszerint:

$$
\frac {2E} {m} = -GM \frac {1} {a}
$$

Ezt visszaírva a sebesség kiszámításába, megkapjuk a sebesség kiszámítására vonatkozó egyenletet:

$$
v = \sqrt {GM(\frac {2} {r} - \frac {1} {a})}
$$

## A második kozmikus sebesség

Mekkora sebességgel kell egy testet elhajítanunk a Föld felszínén, hogy sose térjen vissza? (A légellenállást elhanyagoljuk.) A válasz egyszerű, ha meggondoljuk, hogy el kell jusson végtelen távolságra, tehát $a = \infty$.

$$
v = \sqrt{GM\frac {2} {R}} = \sqrt {2gR} = \sqrt {2} \sqrt{gR} = 1,4142 \times 7,902 \text{ km/s} = 11,18 \text{ km/s}
$$

Ezt a sebességet nevezzük második kozmikus sebességnek.

### Szimuláció

[A második kozmikus sebesség szimulációja](https://alexerdei73.github.io/physics-engine/project/#5ec467c5-9353-42ca-8f2a-5c9e2afecfb9) 

## A harmadik kozmikus sebesség

Mekkora sebességgel kell egy testet elhajítani a Földről, hogy a Naprendszert is elhagyja? Ugyanígy számolhatunk, de itt $M$ a Nap tömegét jelenti, és $r$ pedig a Nap–Föld távolság, tehát a csillagászati egység. $G$ ekkor $4\pi^2$, tehát:

$$
v_{\text{Nap}} = \sqrt {GM_{\text{Nap}} \frac {2} {r}} = \sqrt {8 \pi^2} = 8,886 \text{ CSE/év} = 42,12 \text{ km/s}
$$

A testnek ezzel a sebességgel kell rendelkeznie a Föld elhagyása után a Naphoz képest, hogy elhagyja a Naprendszert. Tudjuk, hogy a Föld elhagyásához is kell $11,18 \text{ km/s}$ sebesség, mely eltűnik, mikor a test már nagy távolságra kerül a Föld sugarához képest a Földtől. A Föld maga is rendelkezik Nap körüli sebességgel, ez könnyen ki is számítható:

$$
v_{\text{Föld}} = \frac {2 \pi r} {T} = \frac {2 \times 3,1415 \times 1,496 \times 10^8} {365,26 \times 86400} = 29,78 \text{ km/s}
$$

Ez annyit tesz, hogy a Földhöz képest a Föld elhagyása után elegendő

$$
v_{\text{Nap}} - v_{\text{Föld}} = 42,12 - 29,78 = 12,34 \text{ km/s}
$$

sebességgel rendelkezzen a test a földpálya sebességének irányában. Ugyanis ekkor a test a Naphoz képest pont a szükséges $v_{\text{Nap}}$ sebességgel rendelkezik. Indítsuk a testet a Föld keringésének irányában a Föld felszínéről függőlegesen felfelé! Ez azt jelenti, hogy a Föld pályamenti sebessége függőlegesen felfelé mutat! Számítsuk ki a szükséges $v$ sebességet úgy, hogy a Föld elhagyása után a testnek éppen a szükséges sebessége legyen a pályasebesség irányába!

$$
\frac {mv^2} {2} - G \frac {mM} {R} = \frac {m(v_{\text{Nap}} - v_{\text{Föld}})^2} {2}
$$

$$
v^2 = 2 \frac {GM} {R^2} R + (v_{\text{Nap}} - v_{\text{Föld}})^2 = 2gR + (v_{\text{Nap}} - v_{\text{Föld}})^2
$$

$$
v = \sqrt {11,18^2 + 12,34^2} = 16,65 \text{ km/s}
$$

Ez tehát a lehető legkisebb sebesség, amellyel a megfelelő irányban, a megfelelő helyen kilőve a testet a Föld felszínén, ballisztikus pályán, a test képes elhagyni a Naprendszert is.

### Szimuláció

[A harmadik kozmikus sebesség szimulációja](https://alexerdei73.github.io/physics-engine/project/#4bb597b1-beff-4abc-8d96-d3f126822b01)

## Kötött és szabad pályák

Látjuk, hogy az égitestek pályája nem szükségszerűen a zárt ellipszispálya, ahogy azt Kepler bolygómozgásról szóló törvényei leírják. Van, hogy a test vissza sem tér sosem. Ezt a pálya energiája szabja meg. Ha az energia negatív, akkor a pálya ellipszis, és egy pozitív $a$ érték, tehát pozitív félnagytengely tartozik hozzá. Az energia $E < 0$. Ez a kötött pálya. A körpálya speciális esetében a mozgási energia állandó, és fele a negatív helyzeti energia abszolút értékének.

[Ellipszispálya](https://alexerdei73.github.io/physics-engine/project/#fefc0e35-7beb-4f00-81e4-05e25bfbf064)

$$
E_{m,\text{kör}} = \frac {|E_{g,\text{kör}}|} {2} = |E_{\text{kör}}|
$$

[Körpálya](https://alexerdei73.github.io/physics-engine/project/#5f0cba8e-b08a-4f3b-94b6-627d297e388f)

Ha a test képes a végtelenbe eljutni, de ott mozgási energiája nem marad, akkor a pályához tartozó teljes energia nulla. Ekkor $a = \infty$, a pálya alakja parabola. A parabolát el lehet úgy képzelni, hogy végtelenül elnyújtott ellipszis, mely sosem tér vissza önmagába. Ez esetben $E = 0$.

[Parabolapálya](https://alexerdei73.github.io/physics-engine/project/#6139370b-ddc9-44b5-a7ab-603c9bdbb806)

A harmadik eset, hogy a pályához tartozó teljes energia pozitív, tehát a test a vonzócentrumtól végtelen távolságra jut, és még marad is mozgási energiája. Ez az az eset, amikor a test egy hiperbolaágon mozog. A hiperbola olyan görbe, melynek az ellipszishez hasonlóan van két fókuszpontja. Bármely pont fókuszpontoktól mért távolságainak különbsége egy állandó, $\pm 2a$. Vonzóerő esetén a test a görbének azon az ágán mozog, melyre $a < 0$. Az energiát meghatározó képlet továbbra is érvényes marad, sőt a sebesség kiszámítására vonatkozó képlet is érvényes a negatív $a$-val. $E > 0$ tehát ez esetben.

[Hiperbolapálya](https://alexerdei73.github.io/physics-engine/project/#fb3346ec-45d8-4e2f-b03a-07bf897767af)


| Alak | Energia | $a$ | Szimuláció |
| :---: | :---: | :---: | :---: |
| Ellipszis | $E < 0$ | $a > 0$| [Ellipszispálya](https://alexerdei73.github.io/physics-engine/project/#fefc0e35-7beb-4f00-81e4-05e25bfbf064) |
| Kör | $E = -E_{m} = E_{g}/2$ | $a = R$ | [Körpálya](https://alexerdei73.github.io/physics-engine/project/#5f0cba8e-b08a-4f3b-94b6-627d297e388f) |
| Parabola | $E = 0$ | $a = \infty$ | [Parabolapálya](https://alexerdei73.github.io/physics-engine/project/#6139370b-ddc9-44b5-a7ab-603c9bdbb806) |
| Hiperbolapálya | $E > 0$ | $a < 0$ | [Hiperbolapálya](https://alexerdei73.github.io/physics-engine/project/#fb3346ec-45d8-4e2f-b03a-07bf897767af) |