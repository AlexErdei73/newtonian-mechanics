# A tomegkozeppont tetele

## Az impulzus tetel altalanos levezetese

Most megvizsgaljuk az impulzus tetel altalanos levezeteset, hisz ezt a tetelt eddig csak 2 test esetere lattuk be. Legyen most N testunk a pontrendszerben! Az i-edik testre Newton masodik torvenye a kovetkezo:

$$
\vec F_{e,i} = \frac {\Delta \vec I_i} {t}
$$

Kicsit ezt atirjuk, hogy konyebb legyen a dolgunk:

$$
\vec F_{e,i}^k + \sum_{j = 1, j \neq i}^{N} {\vec F_{i,j}} = \frac {m_i\vec v_i - m_i \vec v_{i,0}} {t}
$$

Most osszeadjuk az egyenleteket az osszes tomegpontra:

$$
\sum_{i = 1}^{N} \vec F_{e,i}^k + \sum_{i = 1}^{N} \sum_{j = 1, j \neq i}^{N} {\vec F_{i,j}} = \sum_{i = 1}^{N}\frac {m_i\vec v_i - m_i \vec v_{i,0}} {t}
$$

Most ki fogjuk mutatni, hogy a belso erok osszege nulla.

$$
\sum_{i = 1}^{N} \sum_{j = 1, j \neq i}^{N} {\vec F_{i,j}} = \sum_{i = 1}^{N} \sum_{j = 1}^{i - 1} {\vec F_{i,j}} + \sum_{i = 1}^{N} \sum_{j = i + 1}^{N} {\vec F_{i,j}}
$$

Az eredeti osszeget ket osszegre bontjuk. Az elso osszegben j < i, mig a masodik osszegben j > i. Mindket osszeg az osszes lehetseges parositast tartalmazza ezekkel a kitetelekkel. Ha most a masodik osszegben felcserlejuk $\vec F_{i,j}$-ben i-t es j-t, ugyanakkor atterunk az elo osszeg hataraira, tehat most j < i, lesz j > i helyett, akkor az osszeg erteke nem valtozik. Peldaul ha eredetileg i = 2 es j = 3, akkor a parositas szerepel a masodik osszegben, mert j > i. Ez ugye $\vec F_{2,3}$. Ha inkabb most i = 3 es j = 2 ertekek irjak le ugyanezt a tagot, tehat j < i, akkor ez $\vec F_{j,i}$. A masodik osszegben az osszes tagra megcsinaljuk ezt a cseret, de ettol az osszeg nem valtozik meg.

$$
\sum_{i = 1}^{N} \sum_{j = i + 1}^{N} {\vec F_{i,j}} = \sum_{i = 1}^{N} \sum_{j = 1}^{i-1} {\vec F_{j,i}}
$$

Igy tehat a belso erok osszege:

$$
\sum_{i = 1}^{N} \sum_{j = 1, j \neq i}^{N} {\vec F_{i,j}} = \sum_{i = 1}^{N} \sum_{j = 1}^{i - 1} {\vec F_{i,j}} + \sum_{i = 1}^{N} \sum_{j = 1}^{i-1} {\vec F_{j,i}} = \sum_{i = 1}^{N} \sum_{j = 1}^{i-1} (\vec F_{i,j} + \vec F_{j,i}) = \vec 0
$$

Itt felhasznaltuk Newton harmadik torvenyet:

$$
\vec F_{i,j} = -\vec F_{j,i}
$$

Eszerint az osszeg tagjai, mind nullak. Most alakitsunk kicsit a masik oldalon is!

$$
\sum_{i = 1}^{N}\frac {m_i\vec v_i - m_i \vec v_{i,0}} {t} = \frac {\sum_{i = 1}^{N}m_i\vec v_i - \sum_{i = 1}^{N}m_i\vec v_{i,0}} {t} = \frac {\vec I - \vec I_0} {t}
$$

Eredmenyunk az impulzus tetel:

$$
\sum_{i = 1}^{N} \vec F_{e,i}^k = \frac {\vec I - \vec I_0} {t}
$$

>**A pontrendszerre hato kulso erok vektori osszege egyenlo a pontrendszer osszimpulzusanak idoegysegre eso megvaltozasaval.**

## A tomegkozeppont tetele

Most felhasznaljuk, amit a pontrendszer impulzusarol tudunk. Ez kifejezheto a tomegkozeppont sebessegevel, hiszen:

$$
\vec v_{TKP} = \frac {\sum_{i = 1}^{N} m_i \vec v_i} {M}
$$

$$
M \vec v_{TKP} = \sum_{i = 1}^{N} m_i \vec v_i = \sum_{i = 1}^{N} \vec I_i = \vec I
$$

$$
\sum_{i = 1}^{N} \vec F_{e,i}^k = \frac {M \vec v_{TKP} - M \vec v_{TKP,0}} {t}
$$

A jobb oldalbol az M ossztomeget kiemeljuk.

$$
\frac {M \vec v_{TKP} - M \vec v_{TKP,0}} {t} = M \frac {\vec v_{TKP} - \vec v_{TKP,0}} {t} = M \vec a_{TKP}
$$

Itt bevezettuk a tomegkozeppont gyorsulasat:

$$
\vec a_{TKP} = \frac {\vec v_{TKP} - \vec v_{TKP,0}} {t}
$$

Ez egyezik a gyorsulas eddigi definiciojaval, egy fontos kulonbseggel. Mi eddig leginkabb csak egyenesvonalu mozgasokra alkalmaztuk ezt az osszefuggest, ahol a gyorsulas vektor a sebeseggel parhuzamos vektor. Ha a sebesseg iranya is valtozik, akkor az osszefuggest csak a vektorokra vagy azok komponenseire alkalmazhatjuk. 

Eredmenyunk a tomegkozeppont tetele:

$$
\sum_{i = 1}^{N} \vec F_{e,i}^k = M \vec a_{TKP}
$$

Ez a tetel, nagyon hasonlit a masodik torvenyre, de van ket fontos kulonbseg:
1. Csak a kulso erok szamitanak, melyeket a rendszerhez nem tartozo testek fejtenek ki.
2. A pontrendszer ossztomege szamit es a tomegkozeppont gyorsulasarol van szo benne, melynek helyen sok esetben nincs is tomegpont egyaltalan, tehat csak egy matematikai pont.

>**A pontrendszer tomegkozeppontja ugy mozog, mint egy tomegpont, melybe a pontrendszer teljes tomege van egyesitve mikozben a ra hato eredoero a pontrendszerre hato kulso erok vektori osszege. Ez a tomegkozeppont tetele.**

Ez a tetel teszi lehetove, hogy amennyiben a newtoni mechanika torvenyei ervenyesek kicsiny, pontszerunek tekintheto reszecskekre, akkor az ezekbol felepulo nagy meretu testekre is alkalmazhato a mechanika.

Az viszont nem kovetkezik ebbol, hogy amennyiben a newtoni mechanika alkalmazhato nagy meretu testekre, akkor epp igy alkalmazhato a testek kicsiny, pontszerunek tekintheto reszecskeire is. Valoban a XX szazadban kiderult, hogy a newtoni mechanika torvenyei nem alkalmazhatok atomi vagy subatomi reszecskekre. Ilyen kis meretekben az ugynevezett kvantummechanikat kell alkalmazni, amely nagy meretu testek esetere visszaadja Newton torvenyeit, de a kicsiny reszecskekre a kavantummechanika torvenyei kulonboznek Newton torvenyeitol.

A tetelt eddig is szamtalanszor hasznaltuk mar. A tomegpontok ugyanis a valosagban a legtobb esetben rengeteg kicsiny reszecsket tartalmaznak, csupan a mozgas leirasa szempontjabol a belso szerkezetuk nem fontos. A mozgas ilyenkor a tomegkozeppont tetele miatt irhato le Newton masodik torvenye alapjan.

