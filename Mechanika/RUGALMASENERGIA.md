# A rugalmas energia

## Valtozo ero munkaja

### Pelda
Egy $203,9$ g tomegu jegkorong csuszik a jegen. A korong kezdosebessege $20$ m/s. A csuszasi surlodasi egyutthato a jeg es a korong kozott $0,05$. A korong az elso $100$ m megtetele utan lecsuszik a palyarol es a betonon csuszik, ahol a surlodasi egyutthato $0,5$.
* Mekkora ero lassitja a korongot a jegen?
* Mekkora sebessegre lassul le a korong, mikor a betonra er?
* Mekkora ero lassitja a korongot a betonon?
* Mekkora utat tesz meg a korong a betonon a megallasig?
* Mekkora a surlodasi ero munkaja a jegen?
* Mekkora a surlodasi ero munkaja a betonon?
* Rajzoljuk fel a surlodasi ero grafikonjat a megtett ut fuggvenyeben! Mekkora a grafikon gorbeje alatti terulet?

Mozogjon a korong az x-tengely iranyaban. Ekkor az x komponensekkel dolgozhatunk.

$$
F_{x,1} = -\mu_1 mg = -0,05 \cdot 0,2039 \cdot 9,81 = -0,1000\text{ N}
$$

$$
a_{x,1} = \frac {F_{x,1}} {m} = \frac {-0,1000} {0,2039} = -0,4905\text { m}/\text{s}^2
$$

$$
s_1 = v_{x,0}t + \frac {a_{x,1}} {2}t^2
$$

$$
100 = 20t + \frac {-0,4905} {2}t^2 
$$

$$
0,4905t^2 - 40t + 200 = 0
$$

$$
t = \frac {-b \pm \sqrt{b^2 - 4ac}} {2a} = \frac {40 \pm \sqrt{40^2 - 4 \cdot (-0,4905) \cdot 200}} {2 \cdot (-0,4905)} = \frac {40 \pm 44,6363} {-0,9810} = 4,726\text{ s}, -86,28\text{ s} 
$$

$$
v_x = v_{x,0} + a_{x,1}t = 20 + (-0,4905) \cdot 4,726 = 17,68\text{ m/s}
$$

$$
F_{x,2} = -\mu_2 mg = -0,5 \cdot 0,2039 \cdot 9,81 = -1,000\text{ N}
$$

$$
a_{x,2} = \frac {F_{x,2}} {m} = \frac {-1,000} {0,2039} = -4,904\text { m}/\text{s}^2
$$

$$
a_{x,2} = \frac {\Delta v_x} {t_2}
$$

$$
t_2 = \frac {\Delta v_x} {a_{x,2}} = \frac {0 - 17,68} {-4,904} = 3,605\text{ s} 
$$

Mivel a korong kezdosebesseget $v_x$ jeloli a betonon valo fekezodeskor, ezert a kovetkezo keplet adja az utat.

$$
s_2 = v_xt_2 + \frac {a_{x,2}} {2}t_2^2 = 31,87\text{ m}
$$

Most mar konnyu kiszamolni a munkakat!

$$
W_1 = - F_{x,1} s_1 = - 0,1000 \cdot 100 = -10,00\text{ J}
$$

$$
W_2 = - F_{x,2} s_2 = - 1,000 \cdot 31,87 = -31,87\text{ J}
$$

A teljes munka, mely meg kell egyezzen a mozgasi energia csokkenesevel a kovetkezo.

$$
W = W_1 + W_2 = -41,87\text{ J}
$$

Valoban a mozgasi energia a kovetkezo:

$$
\Delta E_m = -E_m = -\frac {mv_0^2} {2} = -\frac {0,2039 \cdot 20^2} {2} = -40,78\text{ J}
$$