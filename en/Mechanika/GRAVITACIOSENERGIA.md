# Gravitational Energy

## The Concept of Gravitational Energy

We have seen that the gravitational force is conservative and has an associated potential energy. The work done by the gravitational force is supplied by the decrease in the object's potential energy.

We have also seen that the gravitational force stems from the Earth's gravitational attraction, which it exerts on objects near its surface. We have seen that this attractive force decreases as the square of the distance. For instance, the Earth exerts an attractive force on an object at the distance of the Moon that is $3600$ times smaller than on an identical object near the Earth's surface, because the Moon is $60$ times farther from the center of the Earth than the Earth's surface is.

How does the gravitational potential energy of an object change when altitudes that are not negligible compared to the Earth's radius are considered? This is the question we seek to answer!

## Calculating Gravitational Potential Energy

Let us examine how the function $\frac{1}{r}$ changes when $r$ changes by a small amount. Let $\Delta r \ll r$!

$$
\Delta \frac{1}{r} = \frac{1}{r} - \frac{1}{r_0} = \frac{r_0 - r}{r r_0} = - \frac{r - r_0}{r(r - \Delta r)} = - \frac{\Delta r}{r^2}
$$

In the final step here, two important things occurred:
1. We recognized that the numerator is $r - r_0 = \Delta r$.
2. In the denominator, $\Delta r$ is negligible compared to $r$ since it is much smaller.

Now let us examine how the gravitational energy changes when a planet orbiting the Sun undergoes a small displacement along its path. The displacement can be decomposed into two parts:
1. The component of displacement perpendicular to the radius vector drawn from the Sun to the planet performs no work, as it is perpendicular to the direction of the force!
2. The planet's distance ($r$) from the Sun changes. Let $m$ be the mass of the planet and $M$ be the mass of the Sun. Then:

$$
W_{\text{g}} = -F_{\text{g}} \Delta r
$$

The work is negative if $\Delta r > 0$ because the gravitational force and the displacement point in opposite directions. The work is positive if $\Delta r < 0$ because the planet moves in the direction of the force. Is there a gravitational energy $E_{\text{g}}$ that changes such that

$$
W_{\text{g}} = - \Delta E_{\text{g}}
$$

is always true?

The answer:

$$
E_{\text{g}} = -G \frac{Mm}{r}
$$

is the gravitational energy present in the system, whose change equals the work done by the gravitational force.

Proof:

$$
-\Delta E_{\text{g}} = -\left(-G \frac{mM}{r} + G \frac{mM}{r_0}\right) = GmM \left(\frac{1}{r} - \frac{1}{r_0}\right) = GmM \Delta \frac{1}{r}
$$

Now we substitute our result for $\Delta \frac{1}{r}$:

$$
-\Delta E_{\text{g}} = GmM\left(- \frac{\Delta r}{r^2}\right) = - G\frac{mM}{r^2} \Delta r = - F_{\text{g}} \Delta r = W_{\text{g}}
$$

Thus, we see that the gravitational energy can indeed be calculated using the formula above.

Where is the reference level? How far must the planet be from the Sun for its gravitational energy to be 0? It is clear that the larger $r$ is, the smaller the absolute value of the gravitational energy becomes, since $r$ is in the denominator, and we know that dividing by a larger number yields a smaller result. Therefore, the planet must be at an infinite distance from the Sun for the gravitational energy to be zero. The reference level is $r = \infty$.

## The Limiting Case of Gravitational Potential Energy Near the Surface

Do we recover our previous calculation for gravitational potential energy near the surface from this new formula when $h \ll R$? That is, when the altitude is much smaller than the Earth's radius, can we calculate the gravitational energy using our previous method?

$$
E_{\text{g}} = -G\frac{mM}{r} = -m GM\frac{1}{R + h}
$$

$$
\frac{1}{R + h} = \frac{1}{R} - \frac{h}{R^2}
$$

This last line is simply our first expression applied to the cases where $r = R$ and $\Delta r = h$.

$$
E_{\text{g}} = -m GM \left(\frac{1}{R} - \frac{h}{R^2}\right) = -m GM \frac{R - h}{R^2} = m \frac{GM}{R^2} (h - R)
$$

If we introduce $g$, the acceleration due to gravity:

$$
g = \frac{GM}{R^2}
$$

then

$$
E_{\text{g}} = mg(h - R) = mgh - mgR
$$

We see that this is always negative since $h \ll R$, but for a given object, it differs from the local potential energy ($mgh$) only by a constant term ($-mgR$). This means that the zero level of potential energy is chosen to be zero at a height of $R$, which is at $6370\text{ km}$ from the center. In the standard case where gravitational energy is chosen to be zero at ground level:

$$
E_{\text{p}} = mgh = E_{\text{g}} + mgR
$$

## Conservation of Mechanical Energy

In the case of planetary motion, mechanical energy is conserved since only the gravitational force acts on the planet, and this force is conservative, as we have just established.

$$
E_{\text{k}} + E_{\text{g}} = E_{\text{k},0} + E_{\text{g},0}
$$

$$
\frac{mv^2}{2} - G\frac{mM}{r} = E
$$

Here, the constant $E$ is the total energy associated with the orbit, which is constant along that specific path.

## Calculating Orbital Velocity

If we express the velocity from the mechanical energy equation, the following formula is obtained:

$$
v = \sqrt{\frac{2E}{m} + GM\frac{2}{r}}
$$

Here, the total energy $E$ is unknown, but note that it depends only on the mean distance of the planet from the Sun and does not depend on the shape of the orbit. The relationship between the energy $E$ and the mean distance $a$ can be derived from a circular orbit:

$$
ma_{\text{cp}} = F_{\text{g}}
$$

$$
m\frac{v^2}{a} = G \frac{Mm}{a^2}
$$

From here, $v^2$ can be expressed as:

$$
v^2 = \frac{GM}{a}
$$

Therefore, the energy is:

$$
E = \frac{mv^2}{2} - G\frac{mM}{r} = \frac{GmM}{2a} - \frac{GmM}{a} = -G \frac{Mm}{2a}
$$

Accordingly:

$$
\frac{2E}{m} = -GM \frac{1}{a}
$$

Substituting this back into the velocity equation, we obtain the equation for calculating orbital velocity:

$$
v = \sqrt{GM\left(\frac{2}{r} - \frac{1}{a}\right)}
$$

## Second Cosmic Velocity

At what velocity must we launch an object from the surface of the Earth so that it never returns? (Air resistance is neglected.) The answer is simple if we consider that it must reach an infinite distance, meaning $a = \infty$.

$$
v = \sqrt{GM\frac{2}{R}} = \sqrt{2gR} = \sqrt{2} \sqrt{gR} \approx 1.4142 \cdot 7.902\text{ km/s} \approx 11.18\text{ km/s}
$$

This speed is called the second cosmic velocity (escape velocity from Earth).

### Simulation

[Simulation of the second cosmic velocity](https://alexerdei73.github.io/physics-engine/project/#5ec467c5-9353-42ca-8f2a-5c9e2afecfb9)

## Third Cosmic Velocity

At what velocity must an object be launched from the Earth to leave the Solar System entirely? We can calculate this in the same way, but here $M$ represents the mass of the Sun, and $r$ is the Earth–Sun distance, which is the astronomical unit. In these units, $G = 4\pi^2$, so:

$$
v_{\text{Sun}} = \sqrt{GM_{\text{Sun}} \frac{2}{r}} = \sqrt{8\pi^2} \approx 8.886\text{ AU/year} \approx 42.12\text{ km/s}
$$

The object must possess this velocity relative to the Sun after leaving the Earth to escape the Solar System. We know that escaping the Earth also requires a velocity of $11.18\text{ km/s}$, which diminishes once the object reaches a large distance from the Earth compared to the Earth's radius. The Earth itself possesses an orbital velocity around the Sun, which can easily be calculated:

$$
v_{\text{Earth}} = \frac{2\pi r}{T} = \frac{2 \cdot 3.1415 \cdot 1.496 \cdot 10^8}{365.26 \cdot 86\,400} \approx 29.78\text{ km/s}
$$

This means that relative to the Earth, after escaping the Earth, it is sufficient for the object to have a velocity of:

$$
v_{\text{Sun}} - v_{\text{Earth}} = 42.12 - 29.78 = 12.34\text{ km/s}
$$

in the direction of the Earth's orbital velocity. In this scenario, the object will have exactly the required velocity $v_{\text{Sun}}$ relative to the Sun. Let us launch the object from the Earth's surface vertically upward in the direction of the Earth's orbital motion. This means that the Earth's orbital velocity points vertically upward! Let us calculate the required launch velocity $v$ such that after leaving the Earth, the object has exactly the required velocity in the direction of the orbital path:

$$
\frac{mv^2}{2} - G \frac{mM}{R} = \frac{m(v_{\text{Sun}} - v_{\text{Earth}})^2}{2}
$$

$$
v^2 = 2 \frac{GM}{R^2} R + (v_{\text{Sun}} - v_{\text{Earth}})^2 = 2gR + (v_{\text{Sun}} - v_{\text{Earth}})^2
$$

$$
v = \sqrt{11.18^2 + 12.34^2} \approx 16.65\text{ km/s}
$$

This is therefore the lowest possible speed at which an object, launched in the correct direction and at the correct position on the Earth's surface along a ballistic trajectory, can leave the Solar System entirely.

### Simulation

[Simulation of the third cosmic velocity](https://alexerdei73.github.io/physics-engine/project/#4bb597b1-beff-4abc-8d96-d3f126822b01)

## Bound and Unbound Orbits

We can see that the trajectory of celestial bodies is not necessarily a closed elliptical orbit as described by Kepler's laws of planetary motion. Sometimes, an object never returns. This is determined by the total energy of the orbit. If the total energy is negative ($E < 0$), the orbit is an ellipse, characterized by a positive semi-major axis ($a > 0$). This constitutes a bound orbit. In the special case of a circular orbit, the kinetic energy is constant and equals half the absolute value of the negative gravitational potential energy.

[Elliptical orbit](https://alexerdei73.github.io/physics-engine/project/#fefc0e35-7beb-4f00-81e4-05e25bfbf064)

$$
E_{\text{k,circle}} = \frac{|E_{\text{g,circle}}|}{2} = |E_{\text{circle}}|
$$

[Circular orbit](https://alexerdei73.github.io/physics-engine/project/#5f0cba8e-b08a-4f3b-94b6-627d297e388f)

If the body is capable of escaping to infinity but retains no kinetic energy there, the total mechanical energy of the orbit is zero ($E = 0$). In this scenario, $a = \infty$, and the shape of the trajectory is a parabola. A parabola can be envisioned as an infinitely elongated ellipse that never closes back on itself.

[Parabolic orbit](https://alexerdei73.github.io/physics-engine/project/#6139370b-ddc9-44b5-a7ab-603c9bdbb806)

The third case occurs when the total mechanical energy of the orbit is positive ($E > 0$). Here, the body escapes to an infinite distance from the attractive center and still retains some kinetic energy. In this situation, the object moves along a hyperbolic branch. A hyperbola, much like an ellipse, possesses two focal points. The difference between the distances from any point on the curve to the two foci is a constant, $\pm 2a$. In the presence of an attractive force, the body moves along the branch where $a < 0$. The governing energy equations, as well as the formula for calculating velocity, remain completely valid using this negative value of $a$.

[Hyperbolic orbit](https://alexerdei73.github.io/physics-engine/project/#fb3346ec-45d8-4e2f-b03a-07bf897767af)


| Trajectory | Energy | $a$ | Simulation |
| :---: | :---: | :---: | :---: |
| Ellipse | $E < 0$ | $a > 0$ | [Elliptical orbit](https://alexerdei73.github.io/physics-engine/project/#fefc0e35-7beb-4f00-81e4-05e25bfbf064) |
| Circle | $E = -E_{\text{k}} = \frac{E_{\text{g}}}{2}$ | $a = R$ | [Circular orbit](https://alexerdei73.github.io/physics-engine/project/#5f0cba8e-b08a-4f3b-94b6-627d297e388f) |
| Parabola | $E = 0$ | $a = \infty$ | [Parabolic orbit](https://alexerdei73.github.io/physics-engine/project/#6139370b-ddc9-44b5-a7ab-603c9bdbb806) |
| Hyperbola | $E > 0$ | $a < 0$ | [Hyperbolic orbit](https://alexerdei73.github.io/physics-engine/project/#fb3346ec-45d8-4e2f-b03a-07bf897767af) |