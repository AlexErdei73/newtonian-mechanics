# Newton törvényei

## A tehetetlenség törvénye (Newton I. törvénye)

> **Minden test megtartja nyugalmi állapotát vagy egyenes vonalú, egyenletes mozgását mindaddig, amíg egy másik test ennek megváltoztatására nem kényszeríti.**

### Kísérlet
[Newton első törvényének bemutatása az űrállomáson (NASA)](https://www.youtube.com/watch?v=-luKN6mad5w)

A kísérleti videó világosan szemlélteti a törvényt, de a fizika történetében ez a felismerés nem volt mindig magától értetődő. Arisztotelész ókori filozófus szerint a mozgás fenntartásához folyamatosan egy másik test aktív hatására van szükség. Megfigyelései alapján egy lovaskocsi a lovak húzóhatása nélkül hamar megáll, míg a húzóhatás jelenlétében egyenletesen halad előre.

Galileo Galilei fedezte fel elsőként, hogy a testeknek nem a mozgásban maradásához, hanem a mozgásállapotuk *megváltoztatásához* van szükségük egy másik test közreműködésére. A lovaskocsi azért áll meg a lovak leállása után, mert más testek (a talaj és a levegő) fékező hatást fejtenek ki rá a gördülési ellenállás és a légellenállás formájában. A lovak húzóhatása valójában csak ezeket a gátló hatásokat ellensúlyozza.

A törvény demonstrációjához azért kiváló helyszín a Nemzetközi Űrállomás, mert a mikrogravitációs környezetben a testek szabadon lebegnek, így a súrlódás teljesen kiküszöbölhető, és a kis sebességeknél fellépő légellenállás is elhanyagolható. Hasonlóan ideális körülményeket láthattunk a korábbi kísérletekben is, amikor a vízszintes légpárnás sínen meglökött test egyenes vonalú, egyenletes mozgást végzett, és a mozgásállapota csak akkor változott meg, amikor a sín végén elhelyezett ütközővel (mint másik testtel) érintkezésbe lépett.

### Az inerciarendszer

A tehetetlenség törvénye – és vele együtt a fizika többi dinamikai törvénye is – **kizárólag inerciarendszerekben érvényes**.

> **Inerciarendszernek nevezzük az olyan vonatkoztatási rendszert (koordináta-rendszert), amelyben a tehetetlenség törvénye érvényesül. A fizika törvényei inerciarendszerekben érvényesek.**

Gondoljunk egy hirtelen felgyorsító, intenzíven fékező vagy éles kanyart bevevő autóbuszra: a benne álló utasok kapaszkodás nélkül kibillennek az egyensúlyukból, eldőlnek anélkül, hogy bármilyen valóságos másik test meglökte volna őket. Mivel ebben a rendszerben a testek mozgása látszólag „ok nélkül” változik meg, a gyorsuló jármű **nem tekinthető inerciarendszernek**.

A NASA kísérleti videójában Jeff Williams bemutat egy ilyen esetet: amikor az űrállomás rakétamotorjai pályakorrekciót (úgynevezett re-boostot) végeznek, a benti térben szabadon lebegő, magára hagyott nehéz kamera hirtelen, külső behatás nélkül felgyorsul a képernyő felé. Valójában a kamera ekkor is megtartja korábbi egyenletes mozgását (tehetetlenség), és csak azért látjuk gyorsulni, mert a hajtóművek miatt maga az űrállomás válik átmenetileg egy nem-inerciarendszerré, amely egyszerűen rágurul a kamerára.

A gyakorlatban a Föld felszínéhez rögzített koordináta-rendszer a legtöbb mechanikai probléma esetén kielégítő pontossággal inerciarendszernek tekinthető. Ugyanakkor a Föld saját tengely körüli forgása és Nap körüli keringése precíz kísérletekkel kimutatható, ami azt jelenti, hogy a földi laboratórium sem tökéletes inerciarendszer. 

Sokáig úgy gondolták, hogy az „állócsillagokhoz” rögzített koordináta-rendszer a tökéletes inerciarendszer. A modern csillagászat azonban bebizonyította, hogy saját galaxisunk, a Tejútrendszer csillagai is mozgásban vannak (keringenek a galaktikus mag körül), így ez a rendszer sem nyújt abszolút pontosságot. A mai legprecízebb tudományos inerciarendszert ezért már nem a csillagokhoz, hanem a tőlünk mérhetetlenül távoli, gyakorlatilag teljesen mozdulatlannak tekinthető **galaxisokhoz és kvazárokhoz** rögzítik.

## Newton második törvénye (A dinamika alaptörvénye)

> **A test gyorsulása egyenesen arányos a rá ható erők vektori eredőjével, és fordítottan arányos a test tömegével.**

$$
\vec{F}_e = m \cdot \vec{a}
$$

Ebben az összefüggésben az $\vec{F}_e$ eredő erő a testre ható egyedi erők vektoriális összege:

$$
\vec{F}_e = \vec{F}_1 + \vec{F}_2 + \dots + \vec{F}_n
$$

Az erő tehát a sebességhez és a gyorsuláshoz hasonlóan **vektormennyiség**. Az erő SI-mértékegysége a **Newton** (jele: $\text{N}$). $1\text{ N}$ nagyságú az az erő, amely egy $1\text{ kg}$ tömegű testet pontosan $1\text{ }\frac{\text{m}}{\text{s}^2}$ gyorsulással késztet mozgásra:

$$
1\text{ N} = 1\text{ kg} \cdot 1\text{ }\frac{\text{m}}{\text{s}^2}
$$

### Kísérlet
[Newton második törvényének demonstrációja az űrállomáson (NASA)](https://www.youtube.com/watch?v=sPZ2bjW53c8)

### Szimuláció
[Állandó erő gyorsító hatása interaktív szimulátor](https://alexerdei73.github.io/physics-engine/project/#cb9b475b-53d9-4de4-8934-73b283fd0045)

Az interaktív szimuláció látványosan bemutatja, hogyan változik egy test gyorsulása, ha egyetlen állandó erő hat rá. A szoftverben a test tömege és az alkalmazott erő nagysága tetszőlegesen változtatható, így a diákok önállóan is ellenőrizhetik az összefüggés helyességét.

## A hatás-ellenhatás törvénye (Newton harmadik törvénye)

> **Ha egy test hatást gyakorol egy másik testre, akkor a második test is ugyanakkora nagyságú, de ellentétes irányú hatást fejt ki az elsőre.**

A törvényt röviden a hatás-ellenhatás (akció-reakció) elvének is nevezzük. Fontos megjegyezni, hogy ez a két erő mindig két *különböző* testre hat, ezért soha nem egyenlíthetik ki egymást!

Gyakori tévhit a diákok körében, hogy a nagyobb vagy erősebb test nagyobb erőt fejt ki a kisebbre. Amint azt Mark Vande Hei kosárlabdás kísérlete is mutatja az űrállomáson: ha egy űrhajós eltol magától egy könnyű labdát, a két fellépő erő nagysága hajszálpontosan megegyezik. Mivel azonban az űrhajós tömege (és így a tehetetlensége) lényegesen nagyobb, az őt érő egyenlő nagyságú erő hatására az ő gyorsulása szinte észrevehetetlen lesz a labda nagy sebességű megugrásához képest ($a = \frac{F}{m}$). Ha viszont két azonos tömegű űrhajós löki el egymást az űrben, a hatás-ellenhatás miatt mindketten teljesen egyforma gyorsulással repülnek hátra ellentétes irányban.

### Kísérlet
[A hatás-ellenhatás törvénye az űrállomáson (NASA)](https://www.youtube.com/watch?v=dCF--YOjiOw)

[Newton harmadik törvényének gyakorlati demonstrációja (Walter Lewin / MIT)](https://www.youtube.com/watch?v=WmTt3CIJz_c)
