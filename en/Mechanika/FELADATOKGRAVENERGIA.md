# Exercises on Gravitational Energy

## Examples for Gravitational Energy

1. The International Space Station orbits at an altitude of $420\text{ km}$. What is its gravitational potential energy if its mass is $435\,000\text{ kg}$? What is this energy calculated using the exact formula for gravitational energy? What is it calculated using the standard formula for local potential energy? (The reference level is chosen at a radius of $6370\text{ km}$.) What percentage of error do we commit if we use the traditional local method? ($G = 6.674 \cdot 10^{-11}\text{ m}^3\text{/(kg} \cdot \text{s}^2\text{)}$ and $M = 5.972 \cdot 10^{24}\text{ kg}$)

$$
E_{\text{p}} = mg(h - h_0) = 435\,000 \cdot 9.81 \cdot (420 - 6370) \cdot 10^3 \approx -2.539 \cdot 10^{13}\text{ J}
$$

Now let us look at what we get using the exact formula for gravitational energy!

$$
E_{\text{g}} = -G \frac{Mm}{R + h} = -6.674 \cdot 10^{-11} \cdot \frac{5.972 \cdot 10^{24} \cdot 435\,000}{(6370 + 420) \cdot 10^3} \approx -2.553 \cdot 10^{13}\text{ J}
$$

The absolute error committed is:

$$
\Delta E = E_{\text{p}} - E_{\text{g}} = (-2.539 - (-2.553)) \cdot 10^{13}\text{ J} = 1.4 \cdot 10^{11}\text{ J}
$$

The relative error is:

$$
\frac{\Delta E}{|E_{\text{g}}|} = \frac{1.4 \cdot 10^{11}}{2.553 \cdot 10^{13}} \approx 0.00548
$$

Therefore, the relative error committed is approximately $0.55\%$.

2. What is the total mechanical energy of the space station? Assume the orbit is a circle! What is the kinetic energy? What are the orbital velocity and the period of revolution? Is Kepler's third law satisfied when comparing the space station to an object orbiting at the first cosmic velocity?

$$
E = -E_{\text{k}} = \frac{E_{\text{g}}}{2} \approx -1.277 \cdot 10^{13}\text{ J}
$$

$$
\frac{mv^2}{2} = E_{\text{k}}
$$

$$
v = \sqrt{\frac{2E_{\text{k}}}{m}} = \sqrt{\frac{2 \cdot 1.277 \cdot 10^{13}}{435\,000}} \approx 7\,662\text{ m/s}
$$

$$
T = \frac{2\pi(R + h)}{v} = \frac{2 \cdot 3.1416 \cdot (6370 + 420) \cdot 10^3}{7\,662} \approx 5\,568\text{ s} \approx 92\text{ min } 48\text{ s}
$$

Let us check Kepler's third law!

$$
\frac{T^2}{a^3} = \frac{5\,568^2}{(6370 + 420)^3} \approx 9.904 \cdot 10^{-5}\text{ s}^2\text{/km}^3
$$

The orbital period at a distance $R$ (at the surface):

$$
T_R = \frac{2\pi R}{\sqrt{GM/R}} \approx 5\,060\text{ s}
$$

$$
\frac{T_{\text{R}}^2}{R^3} = \frac{5\,060^2}{6370^3} \approx 9.906 \cdot 10^{-5}\text{ s}^2\text{/km}^3
$$

The two values match within our calculation precision, so Kepler's law holds true for the motion.

3. We mentioned that the total energy does not depend on the shape of the orbit either, but is uniquely a function of the mean distance $a$ from the attractive center. Let us derive this for the case of an elliptical orbit!

We can start with four fundamental equations:

$$
E = \frac{mv_{\text{min}}^2}{2} - G\frac{mM}{r_{\text{max}}}
$$

$$
E = \frac{mv_{\text{max}}^2}{2} - G\frac{mM}{r_{\text{min}}}
$$

$$
v_{\text{min}} r_{\text{max}} = v_{\text{max}} r_{\text{min}}
$$

$$
2a = r_{\text{min}} + r_{\text{max}}
$$

These 4 equations contain 6 quantities; we wish to retain only $E$ and $a$. We express the squares of the velocities from the first and second equations, and then substitute them into the square of the third equation!

$$
v_{\text{min}}^2 = \frac{2E}{m} + \frac{2GM}{r_{\text{max}}}
$$

$$
v_{\text{max}}^2 = \frac{2E}{m} + \frac{2GM}{r_{\text{min}}}
$$

$$
v_{\text{min}}^2 r_{\text{max}}^2 = v_{\text{max}}^2 r_{\text{min}}^2
$$

$$
\left(\frac{2E}{m} + \frac{2GM}{r_{\text{max}}}\right) r_{\text{max}}^2 = \left(\frac{2E}{m} + \frac{2GM}{r_{\text{min}}}\right) r_{\text{min}}^2
$$

$$
\frac{2E}{m} r_{\text{max}}^2 + 2GMr_{\text{max}} = \frac{2E}{m} r_{\text{min}}^2 + 2GMr_{\text{min}}
$$

Rearranging this slightly, we obtain exactly what we are looking for:

$$
\frac{2E}{m} (r_{\text{max}}^2 - r_{\text{min}}^2) = - 2GM(r_{\text{max}} - r_{\text{min}})
$$

$$
\frac{2E}{m} (r_{\text{max}} + r_{\text{min}})(r_{\text{max}} - r_{\text{min}}) = - 2GM(r_{\text{max}} - r_{\text{min}})
$$

Provided that we are not dealing with a circular orbit (for which we have already derived the relationship using a different method), we can divide both sides by $(r_{\text{max}} - r_{\text{min}})$.

$$
\frac{2E}{m} 2a = - 2GM
$$

$$
\frac{2E}{m} = - \frac{GM}{a}
$$

This is exactly the equation we previously derived in a different manner and utilized for the special case of a circular orbit. Now we have completed the derivation for the general case of an elliptical orbit as well.

4. Let us derive Kepler's third law generally for the case of an elliptical orbit! Utilize the area formula of an ellipse, the calculation of the areal velocity at the perihelion point, and the general equation for orbital velocity! We will also need the general geometric relationships of an ellipse.

$$
T = \frac{\pi ab}{\frac{v_{\text{max}} r_{\text{min}}}{2}} = \frac{2\pi ab}{v_{\text{max}} r_{\text{min}}}
$$

$$
T^2 = \frac{4\pi^2 a^2 b^2}{v_{\text{max}}^2 r_{\text{min}}^2}
$$

We express the maximum velocity from the equation for calculating velocity:

$$
v_{\text{max}}^2 = GM\left(\frac{2}{r_{\text{min}}} - \frac{1}{a}\right) = GM \frac{2a - r_{\text{min}}}{a r_{\text{min}}}
$$

Substituting this into the previous relationship:

$$
T^2 = \frac{4\pi^2 a^2 b^2}{GM \frac{2a - r_{\text{min}}}{a r_{\text{min}}} r_{\text{min}}^2} = \frac{4\pi^2 a^3 b^2}{GM(2a - r_{\text{min}})r_{\text{min}}}
$$

Now we show that $b^2$ cancels out!

$$
(2a - r_{\text{min}})r_{\text{min}} = (2a - (a - c))(a - c) = (a + c)(a - c) = a^2 - c^2 = b^2
$$

Thus, we obtain Kepler's third law!

$$
T^2 = \frac{4\pi^2 a^3 b^2}{GM b^2} = \frac{4\pi^2 a^3}{GM}
$$

$$
\frac{T^2}{a^3} = \frac{4\pi^2}{GM}
$$

5. The great comet of the year 2024 is Comet C/2023 A3 (Tsuchinshan–ATLAS). It is currently moving away from the Sun. The comet's distance from the Sun is $6.758\text{ AU}$ and its velocity is $18.44\text{ km/s}$. The estimated mass of the comet is $4.4 \cdot 10^{14}\text{ kg}$. What is the mechanical energy of the comet along its path? Will this comet ever return near the Sun?

[Video of comet C/2023 A3 from the International Space Station](https://www.youtube.com/watch?v=FPMMFIB9sjY)

$$
r = 6.758\text{ AU} = 6.758 \cdot 149.6 \cdot 10^6\text{ km} \approx 1.011 \cdot 10^9\text{ km}
$$

$$
E = \frac{mv^2}{2} - \frac{GmM}{r} = \frac{4.4 \cdot 10^{14} \cdot 18\,440^2}{2} - \frac{6.674 \cdot 10^{-11} \cdot 4.4 \cdot 10^{14} \cdot 1.9891 \cdot 10^{30}}{1.011 \cdot 10^{12}} \approx 1.703 \cdot 10^{22}\text{ J}
$$

The orbital energy is positive ($E > 0$); therefore, the comet is traveling along a hyperbolic trajectory and will never return.

---

## Exercises

1. The mass of Mars is approximately $6.417 \cdot 10^{23}\text{ kg}$ and its radius is $3\,396\text{ km}$. What is the minimum velocity (second cosmic velocity) at which a space probe must be launched from the surface of Mars to permanently escape the planet's gravitational field? Neglect air resistance.

2. A satellite of mass $m = 1\,200\text{ kg}$ orbits the Earth in a circular orbit of radius $R_1 = 7\,000\text{ km}$. Mission control decides to maneuver the satellite into a higher circular orbit with a radius of $R_2 = 8\,500\text{ km}$. How much work must the engines perform during this orbit modification?

3. A meteorite falls toward the Earth from a great distance from the Earth's center (from infinity) with an initial velocity of $v_0 \approx 0$. With what velocity does it strike the Earth's surface if the braking effect of the atmosphere is neglected? Use the law of conservation of energy! ($M_{\text{Earth}} = 5.972 \cdot 10^{24}\text{ kg}$, $R_{\text{Earth}} = 6\,370\text{ km}$, $G = 6.674 \cdot 10^{-11}\text{ m}^3\text{/(kg} \cdot \text{s}^2\text{)}$)