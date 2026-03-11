# Az impulzusmomentum tetel

## Az impulzusmomentum tetel
Nezzuk most meg az eredo forgatonyomatekot, mert arra lesz legtobbszor szuksegunk!

$$
M_{z,e} = \sum_{i = 1}^{N} r_iF_isin \alpha_i
$$

Az $F_isin \alpha_i$ nem mas mint az i. pontra hato ero erinto iranyu komponense. Jeloljuk ezt $F_{i,t}$-vel.

$$
M_{z,e} = \sum_{i = 1}^{N} r_iF_{i,t} = \sum_{i = 1}^{N} r_im_ia_{i,t} = \sum_{i = 1}^{N} r_im_i\frac {v_i - v_{i,0}} {t}
$$

$$
M_{z,e} = \frac {\sum_{i = 1}^{N} r_im_iv_i - \sum_{i = 1}^{N} r_im_iv_{i,0}} {t} 
$$

Ezek szerint az eredo forgatonyomatek nem mas mint a impulzusmomentum valtozas es az eltelt ido hanyadosa. Itt ugye felhasznaltuk, hogy a kormozgas eseten a gyorsulas erinto iranyu komponensenek nagysaga a sebesseg nagysaganak valtozasa osztva az idovel, hisz a sebesseg erinto iranyu.

$$
M_{z,e} = \frac {N_z - N_{z,0}} {t} = \frac {\Delta {N_z}} {t}
$$

Megmutatjuk meg, hogy az eredo forgatonyomatek, csak a kulso erok forgatonyomatekainak eredoje, mert a belso erok forgatonyomatekainak eredoje mindig nulla. Ehhez Newton azt tetelezte fel, hogy a pontrendszer pontjai kozt hato erok un. *centralis erok*. Ez azt jelenti, hogy nemcsak egyenlo nagysaguak es ellentetes iranyuak, ahogy azt a harmadik torveny kimondja, hanem a hatasvonaluk is a ket pontot osszekoto egyenes. Ez azt eredmenyezi, hogy az ero-ellenero par egyuttes forgatonyomateka nulla, barmely ket pont eseten. Ez a feltetelezes nem magatol ertetodo, de igaz peldaul a gravitacios vagy epp rugalmas erokre es altalaban igaz a reszecskek kozt mukodo erokre is.

$$
M_{i,j} + M_{j,i} = 0, i \neq j
$$

$$
M_{z,e} = \sum_{i = 1}^{N} (M_i^k + \sum_{j = 1, i \neq j}^{N} M_{i,j}) = \sum_{i = 1}^{N} M_i^k + \sum_{i = 1}^{N} \sum_{j = 1, i \neq j}^{N} M_{i,j}
$$

$$
\sum_{i = 1}^{N}\sum_{j = i + 1}^{N} M_{i,j} = \sum_{i = 1}^{N}\sum_{j = 1}^{i - 1} M_{j,i}
$$

$$
\sum_{i = 1}^{N} \sum_{j = 1, i \neq j}^{N} M_{i,j} = \sum_{i = 1}^{N} \sum_{j = 1}^{i - 1} M_{i,j} + \sum_{i = 1}^{N}\sum_{j = 1}^{i - 1} M_{j,i} = \sum_{i = 1}^{N} \sum_{j = 1}^{i - 1} (M_{i,j} + M_{j,i}) = 0
$$

Tehat

$$
M_{z,e} = M_{z,e}^k
$$

Eljutottunk tehat az impulzusmomentum tetelenek pontrendszerekre vonatkozo alakjaig, melyet mi csak a merev test rogzitett tengely koruli forgasanak specialis esetere lattunk be, de altalanosan igaz.

$$
M_{z,e}^k = \frac {\Delta N_z} {t}
$$

>**A pontrendszer impulzusmomentumanak idoegysegre eso valtozasa a rea hato kulso erok forgatonyomatekainak osszege**

Ez a tetel tehat altalanosan igaz, de mi csak a rogzitett tengely (z-tengely) koruli forgast vizsgaltuk es csak merev testek eseten, tehat amikor a pontrendszerben nincsenek deformaciok.

### Kiserlet

[Az impulzus momentum megmaradas demonstracioi](https://www.youtube.com/watch?v=PwE3eiREYA4)

Ket demonstraciot lathatunk.
1. Forgozsamolyon a tanulo kinyujtott karokkal tart sulyokat a forgastengelytol tavol es azokat behuzza, mire a forgas felgyorsul.
2. Forgozsamolyon a tanulo gyorsan forgo bicikli kereket tart ugy, hogy a tengely fuggoleges legyen, majd azt atforditja ugy, hogy a forgas ellentetes ertelmuve valik. Ekkor o is forgasba jon.

Mindket kiserlet az impulzusmomentum megmaradasaval ertelmezheto. Egyik sem esik szigoruan a levezetesunk hatalya ala, a masodik eset az atforditaskor nem is tekintheto sikmozgasnak sem. Ezek a demonstraciok azt mutatjak, hogy a tetel altalanosan ervenyes pontrendszerek eseten. Mi ugyan az impulzusmomentumot elojeles mennyisegnek tekintjuk, ez igazabol vektor, melynek mi csak a z-komponensevel foglalkozunk a merev test sikmozgasa eseten.

### Peldak
1. A bolygok mozgasanal Kepler masodik torvenye is egy peldaja az impulzusmomentum tetelenek. Ez ugyan sikmozgas, de a bolygo nem vegez kormaozgast, tavolsaga valtozik a Naptol, melyen a forgastengely megy keresztul merolegesen a bolygomozgas sikjara. 

$$
N_z = \sum_{i = 1}^{1} m_iv_isin \alpha_i = m_1v_1sin \alpha_1 = 2m_1 \frac {T_{ellipszis}} {T}
$$

Tehat az impulzusmomentum a teruleti sebesseg $2m$-szerese, amennyiben $m = m_1$ a bolygo tomege. A teruleti sebessegrol bebizonyitottuk, hogy allando, tehat az impulzusmomentum is az, ahogy ennek lennie is kell, hiszen a gravitacios ero hatasvonala atmegy a Napon, tehat a forgastengelyen. 

2. Egy csapagyazott rud fuggoleges sikban kepes forogni a felso vegpontja korul. A surlodastol es a legellenallastol eltekinthetunk. A rud hossza $1,20m$, tomege $0,800kg$. A rud szabad vegere erositettek egy $0,500kg$ tomegu, pontszerunek tekintheto testet. Mekkora a rendszer tehetetlensegi nyomateka? Egy vizszintesen mozgo $20,0g$ tomegu lovedek a forgas iranyaban talalja el a rudat a tengelytol $0,900m$ tavolsagra $250 \frac {m} {s}$ sebesseggel. Az utkozes tokeletesen rugalmatlan, tehat utkozes utan a rud es a lovedek egyutt mozognak. Mekkora a tengelyre vonatkozo impulzusmomentum az utkozes elotti pillanatban? Mekkora az utkozest kozvetlenul koveto pillanatban? Megmarado mennyiseg-e a lendulet az utkozes soran? Mekkora a szogsebesseg az utkozes utani pillanatban? Mekkora szogben ter ki a rud?

$$
\Theta_{rud} = \frac {1} {3} Ml^2 = \frac {1} {3} \times 0,8 \times 1,2^2 = 0,384 kgm^2
$$

$$
\Theta_{point} = ml^2 = 0,5 \times 1,2^2 = 0,72 kgm^2
$$

$$
\Theta = \Theta_{rud} + \Theta_{point} = 0,384 + 0,72 = 1,104 kgm^2
$$

$$
N_{z,0} = m_{golyo}rv = 0,02 \times 0,9 \times 250 = 4,50 \frac {kgm^2} {s}
$$

Mivel a csapagynal hato erok a kiegyenlitetlen kulso erok, melyek erik a rendszert, igy az impulzusmomentum megmarado mennyiseg, hisz a csapagynal hato eroknek nincs erokarja, tehat forgatonyomateka sem.

$$
N_z = 4,50 \frac {kgm^2} {s}
$$

Ez az utkozes utani pillanatban ervenyes kozvetlenul.

$$
N_z = (\Theta + \Theta_{golyo}) \omega 
$$

$$
\Theta_{golyo} = m_{golyo}r^2 = 0,02 \times 0,9^2 = 0,0162 kgm^2
$$

$$
\omega = \frac {N_z} {\Theta + \Theta_{golyo}} = \frac {4,50} {1,104 + 0,0162} = 4,017 \frac {rad} {s}
$$

Szamitsuk ki a tomegkozeppont tavolsagat a forgastengelytol!

$$
r_{TKP} = \frac {\sum_{i = 1}^{N} m_ir_i} {M} = \frac {0,8\times0,6 + 0,5\times1,2 + 0,02\times0,9} {1,320} = 0,8318m
$$

$$
v_{TKP} = r_{TKP}\omega = 0,8318 \times 4,017 = 3,341 \frac {m} {s}
$$

$$
I = Mv_{TKP} = 1,32 \times 3,341 = 4,411 \frac {kgm} {s}
$$

Ez tehat az utkozes utani lendulet kozvetlenul.

$$
I_0 = m_{golyo}v_{golyo} = 0,02 \times 250 = 5 \frac {kgm} {s}
$$

Ez az utkozes elotti lendulet, tehat a lendulet nem marad meg, mivel a csapagy altal kifejtett kulso ero ezt megvaltoztataja. Az utolso kerdes megvalaszolasahoz szuksegunk lesz a forgasi energia kiszamitasara.

## Forgasi energia
Rogzitett tengely koruli forgas energiajat konnyen kiszamithatjuk:

$$
E_m = \sum_{i = 1}^{N} \frac {m_iv_i^2} {2} = \sum_{i = 1}^{N} \frac {m_i(r_i\omega)^2} {2}
$$

$\omega^2$ es $\frac {1} {2}$ kiemelheto.

$$
E_m = \frac {\omega^2} {2} \sum_{i = 1}^{N} m_ir_i^2
$$

$$
E_m = \frac {\Theta \omega^2} {2}
$$

Pontosan olyan kepletet kaptunk, mint a halado mozgasra, csak a tomeg helyett a tehetetlensegi nyomatek es a sebesseg helyett a szogsebesseg szerepel.

### Pelda
Fejezzuk be az elozo peldat!

$$
E_{m,0} = E_h
$$

$$
\frac {(\Theta + \Theta_{golyo})\omega^2} {2} = Mgh_{TKP}
$$

$$
h_{TKP} = \frac {(\Theta + \Theta_{golyo})\omega^2} {2Mg} = \frac {(1,104 + 0,0162)\times 4,017^2} {2 \times 1,32 \times 9,81} = 0,6980m
$$

A szog kiszamitasahoz a kovetkezo egyenletre van szukseg.

$$
h_{TKP} = r_{TKP} - r_{TKP}cos\phi
$$

$$
cos\phi = \frac {r_{TKP} - h_{TKP}} {r_{TKP}} = \frac {0,8318 - 0,6980} {0,8318} = 0,1609
$$

$$
\phi = 80,74\degree
$$

## Feladatok