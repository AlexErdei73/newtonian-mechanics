# Forgas rogzitett tengely korul

## Forgomozgas leirasa

Amennyiben a test rogzitett tengely korul forog, minden pontja a tengely korul korpalyat ir le. Hasznalhatjuk tehat a kormozgast leiro szogsebesseget. Ez minden pontra ugyanaz, hiszen a pontok egymashoz kepest el nem mozdulnak a forgas soran, szoval ha az A-pont a tengely korul elfordul valamekkora szoggel, akkor a test masik, mondjuk B pontja is pontosan ekkora szoggel fordul el. Tehat $\omega$ a forgasra jellemzo elojeles mennyiseg. Pozitivnak vesszuk, ha a forgas az oramutato jarasaval ellentetes ertelmu es negativ a forditott esetben.

A test minden pontjara ervenyes a korrmozgasnal megismert osszefugges. Legyen a rogzitett tengely az origoban, merolegesen a koordinatarendszer sikjara. Ekkor:

$$
v_i = r_i \omega
$$

A test pontjainak $r_i$ tavolsaga a forgastengelytol kulonbozo lehet. Ezaltal a sebessegeik is kulonbozo nagysaguak lehetnek, de a szogsebesseg az ugyanaz minden pontra.

## A szoggyorsulas

A merev test forgasa gyorsulhat vagy lassulhat. Ilyenkor a szogsebesseg valtozik. A szoggyorsulas jellemzi a forgas gyorsulasat, melynek jele $\beta$. Kiszamitasa:

$$
\beta = \frac {\Delta \omega} {t} = \frac {\omega - \omega_0} {t}
$$

A szoggyorsulas egysege $\frac {rad} {s^2}$. Ha a forgas pozitiv ertelmu es gyrsul, vagy negativ ertelmu es lassul, a szoggyorsulas pozitiv. Ellenkezo esetben a szoggyorsulas negativ. Egyenletes forgas, vagy nyugalmi helyzet nulla szoggyorsulast jelent. 

## Az impulzusmomentum

Ha a tengely az origoban van es a z-tengelyel esik egybe, akkor a merev test tengelyre vonatkozo impulzusmomentuma, melyet $N_z$-vel jelolunk:

$$
N_z = \sum_{i = 1}^{N} r_im_iv_i
$$

Ez azt jelenti, hogy minden pontra osszeadjuk a tengelytol (origotol) mert tavolsagnak (a kor sugaranak) es az impulzusnak a szorzatat! Az impulzus itt elojeles, mivel a $v_i$ sebessegek elojelesek, hiszen a sugar es a szogsebesseg szorzatakent irhatok fel, viszont a szogsebesseg elojeles mennyiseg.

$$
r_im_iv_i = r_im_ir_i\omega = m_ir_i^2\omega
$$

Igy az impulzusmomentum, felirhato a kovetkezo modon.

$$
N_z = (\sum_{i = 1}^{N} m_ir_i^2) \omega = \Theta \omega
$$

Mivel a szogsebesseg minden pontra ugyanaz, ezert az osszegbol kiemeltuk. Itt $\Theta$ neve tehetetlensegi nyomatek es definicioja:

$$
\Theta = \sum_{i = 1}^{N} m_ir_i^2
$$

Ossze kell adjuk az osszes testre a tomegenek es a forgastengelytol mert tavolsag negyzetenek a szorzatait. Igy a tehetetlensegi nyomatek egysege $kgm^2$. Latni fogjuk, hogy $\Theta$ a tomeg megfeleloje forgomozgas esetere, tehat a test adott tengely koruli forgatasanak gyorsitasat vagy lassitasat igyekszik gatolni. 

## A forgatonyomatek
Eddig lattuk a halado mozgas sebessegenek, gyorsulasanak es tomegenek, valamint az impulzusnak a rogzitett tengely koruli forgas eseten a megfeleloit. Azt is tudjuk, hogy a halado mozgas gyorsulasaert az ero a felelos. Mi az ero megfeleloje forgomozgas eseten, ami felelos a forgas gyorsitasaert vagy epp lassitasaert? Ez a mennyiseg a forgatonyomatek.

Itt nehany fogalmat kell megbeszeljunk: 

>**Az ero tamadaspontja az a pont, ahol az ero a testre hatasat kifejti.**

>**Az ero hatasvonala az az egyenes, mely a tamadasponton halad at es az ero vektor iranyaval parhuzamos.**

>**Az erokar az ero hatasvonalanak a forgastengelytol mert tavolsaga.**

Ezekutan konnyen megfogalmazhatjuk a forgatonyomatek definiciojat is.

>**Az ero forgatonyomateka az ero es az erokar szorzata.**

$$
M_z = Fk = Frsin \alpha
$$

Itt $\alpha$ az a $180\degree$-nal nem nagyobb szog, melyet az ero vektor bezar az tamadaspont helyvektoraval, ha az origo a forgastengely. A szog elojeles forgasszog. Amenniben az ero pozitiv iranyba forgat, tehat az oramutato jarasaval ellentetes ertelemben, akkor a szoget pozitivnak, ellenkezo esetben negativnak tekintjuk. Igy a forgatonyomatek is elojeles szam, hiszen az ilyen szogekre a szinusz fuggveny ugyanolyan elojelu, mint a szog.

## Az impulzusmomentum tetele
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
\sum_{i = 1}^{N} \sum_{j = 1, i \neq j}^{N} M_{i,j} = \sum_{i = 1}^{N} \sum_{j = 1}^{i - 1} M_{i,j} + \sum_{i = 1}^{N}\sum_{j = i + 1}^{N} M_{i,j} = \sum_{i = 1}^{N} \sum_{j = 1}^{i - 1} M_{i,j} + \sum_{i = 1}^{N}\sum_{j = 1}^{i - 1} M_{j,i} = \sum_{i = 1}^{N} \sum_{j = 1}^{i - 1} (M_{i,j} + M_{j,i}) = 0
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

## A forgomozgas alapegyenlete
Innen mar csak egy lepes, hogy eljussunk Newton masodik torvenyenek forgomozgasokra vonatkozo megfelelojehez.

$$
M_{z,e}^k = \frac {N_z - N_{z,0}} {t} = \frac {\Theta \omega - \Theta \omega_0} {t} = \Theta \frac {\omega - \omega_0} {t}
$$

$$
M_{z,e}^k = \Theta \beta
$$

Ez a forgomozgas alapegyenlete, mely ervenyes tobbek kozt a merev test rogzitett tengely koruli forgasara.

