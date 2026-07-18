# Circular Motion and Energy Conservation

## Experiment

[Walter Lewin demonstrates conservation of energy in circular motion](https://www.youtube.com/shorts/L7xp97uoe6E)

### Example

From what height must a car start on a roller coaster whose track continues into a circular loop of radius $R$, if we want to ensure the car does not fall off even at the top of the loop? Friction and air resistance are negligible.

Let $h_0$ be the height in question, with the reference level chosen at ground level. At this starting point, the car has no kinetic energy. When the car is at a height of $2R$, its kinetic energy must be at least enough for it to press against the circular track at the highest point of the loop.

The conservation of energy:

$$
E_{\text{p},0} + E_{\text{k},0} = E_{\text{p}} + E_{\text{k}}
$$

$$
mgh_0 + 0 = mg2R + \frac{mv^2}{2}
$$

At the highest point, Newton's second law states:

$$
N + mg = ma
$$

$$
a = \frac{v^2}{R}
$$

Let us express $v^2$ from the energy theorem and substitute it into Newton's second law:

$$
2gh_0 = g4R + v^2
$$

$$
v^2 = 2g(h_0 - 2R)
$$

$$
N + mg = m\frac{2g(h_0 - 2R)}{R}
$$

Solving for $N$:

$$
N = m\frac{2g(h_0 - 2R)}{R} - mg
$$

$$
N = m\frac{2gh_0 - 4gR - gR}{R}
$$

$$
N = m\frac{2g(h_0 - \frac{5}{2}R)}{R}
$$

We utilize the fact that $N$ cannot be negative (the object must press against the rail).

$$
N \geqslant 0
$$

$$
m\frac{2g(h_0 - \frac{5}{2}R)}{R} \geqslant 0
$$

$$
h_0 - \frac{5}{2}R \geqslant 0
$$

$$
h_0 \geqslant \frac{5}{2}R
$$

We find that $h_0$ must be at least $\frac{5}{2} = 2.5$ times $R$ for the object to complete the loop. This was demonstrated in the video by Walter Lewin.

## Simulation

[Object sliding down a hemisphere](https://alexerdei73.github.io/physics-engine/project/#bf65a2c0-d5cf-43c1-81a4-e9affbf63df1)

### Example

An object slides down from the topmost peak of a hemispherical surface with no initial velocity. What angle does the line connecting the center of the sphere to the object form with the vertical at the exact moment the object detaches from the surface of the sphere? Friction and air resistance are negligible.

Let the angle in question be $\phi$, which changes over time as the object slides down the surface of the sphere. At any point, the gravitational force acting on the object can be decomposed into a radial component and a tangential component. Let us write down Newton's second law for the radial components!

$$
mg\cos \phi - N = ma_{\text{cp}}
$$

The radial (centripetal) acceleration is:

$$
a_{\text{cp}} = \frac{v^2}{R}
$$

Let us also write down the conservation of mechanical energy. Let the reference level be chosen at the height of the center of the sphere!

$$
E_{\text{p},0} + E_{\text{k},0} = E_{\text{p}} + E_{\text{k}}
$$

At the topmost point, the potential energy is $mgR$ and the kinetic energy is 0. At an arbitrary angle $\phi$, the height is $R\cos \phi$.

$$
mgR + 0 = mgR\cos \phi + \frac{mv^2}{2}
$$

At the moment of detachment, the constraint force vanishes:

$$
N = 0
$$

Substituting this into the equation of motion:

$$
mg\cos \phi = \frac{mv^2}{R} \Rightarrow v^2 = Rg\cos \phi
$$

Let us substitute this squared velocity into the energy equation:

$$
mgR = mgR\cos \phi + \frac{m(Rg\cos \phi)}{2}
$$

Divide the equation by $mgR$:

$$
1 = \cos \phi + \frac{\cos \phi}{2}
$$

$$
1 = \frac{3}{2}\cos \phi
$$

$$
\frac{2}{3} = \cos \phi
$$

$$
\phi \approx 48.19^\circ
$$

---

## Exercises

1. A ball of mass $m = 2\text{ kg}$ suspended from a string of length $L = 1.5\text{ m}$ is displaced up to a horizontal position and released.
    * What is the velocity of the ball at the lowest point of its path? (Conservation of energy)
    * What force pulls on the string at this lowest point? (Dynamics: remember, the net force of gravity and the string tension produces the centripetal acceleration!)

2. A $60\text{ kg}$ skier starts from rest from the top of a hill of height $H = 20\text{ m}$. At the bottom of the slope, the track continues into a circular arc-shaped "valley" of radius $R = 15\text{ m}$.
    * With what velocity does the skier arrive at the bottom of the valley?
    * What normal force does the ground exert on the skis at the very bottom of the valley?

3. The roller coaster car ($m = 500\text{ kg}$) from the example starts from a height of $h_0 = 2.5R$. The radius of the loop is $R = 10\text{ m}$.
    * What is its velocity at the lowest point of the loop (before it ascends into the loop, but while it is already moving along the circular arc)?
    * What "G-force" load do the passengers experience at this point? (How many times greater is the normal force compared to the gravitational force?)

4. The same roller coaster car ($m = 500\text{ kg}$, $h_0 = 2.5R$, $R = 10\text{ m}$) reaches the top of the loop.
    * Calculate its velocity at the peak using the conservation of energy!
    * Prove by calculation that the normal force exerted by the rail at this point is exactly zero!
    
5. Tarzan ($m = 80\text{ kg}$) swings on a vine that is $12\text{ m}$ long. At the highest point of the swing, the vine forms an angle of $60^\circ$ with the vertical.
    * What is his velocity when the vine is vertical?
    * Can the vine withstand the load if its tensile strength is $1500\text{ N}$?