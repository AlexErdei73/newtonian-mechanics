# Horizontal Projectile Motion *

## Demonstration

[Experimental Demonstration of Horizontal Projectile Motion (Shoot-n-Drop)](https://www.youtube.com/watch?v=zMF4CD7i3hg)

## Simulation

[Horizontal Projectile Motion Interactive Simulator](https://alexerdei73.github.io/physics-engine/project/#047e40be-950c-44e1-a808-e07095d3539d)

Both the interactive simulation and the experimental demonstration beautifully illustrate that the vertical motion of an object released from rest (free fall) occurs in perfect synchrony with the vertical component of motion of a horizontally projected object. If two objects are launched from the exact same height at precisely the same time, their vertical positions (heights) match identically at every single instant throughout the entire duration of the motion.

## Formulas for Horizontal Projectile Motion

Let us project an object with a horizontally directed initial velocity $v_0$ from the origin of a coordinate system ($x_0 = 0$, $y_0 = 0$). Let us assume that air resistance is negligible and the value of gravitational acceleration is $g = 9.81\text{ }\frac{\text{m}}{\text{s}^2}$. Let the horizontal $x$-axis point in the direction of the initial velocity (from left to right), and this time, let the vertical $y$-axis point straight downward.

The components of the gravitational acceleration vector (since acceleration points vertically downward and our $y$-axis is also directed downward) are:

$$
\vec{a} = (a_x,\ a_y) = (0,\ g)
$$

The components of the initial velocity vector (since the initial velocity is purely horizontal) are:

$$
\vec{v}_0 = (v_{0x},\ v_{0y}) = (v_0,\ 0)
$$

Let us recall the quadratic law of motion for uniformly changing motion in its general form:

$$
s = v_0 \cdot t + \frac {a} {2} \cdot t^2
$$

As we have learned previously, when treating composite motions, the corresponding displacement coordinate replaces the distance traveled ($s$), and the targeted directional signed coordinates (components) replace $v_0$ and $a$.

### Horizontal Motion

$$
x - x_0 = v_{0x} \cdot t + \frac {a_x} {2} \cdot t^2
$$

$$
x - 0 = v_0 \cdot t + \frac {0} {2} \cdot t^2
$$

$$
x = v_0 \cdot t
$$

Thus, the object undergoes no acceleration in the horizontal direction, meaning it performs rectilinear uniform motion along the $x$-axis.

### Vertical Motion

$$
y - y_0 = v_{0y} \cdot t + \frac {a_y} {2} \cdot t^2
$$

$$
y - 0 = 0 \cdot t + \frac {g} {2} \cdot t^2
$$

$$
y = \frac {g} {2} \cdot t^2
$$

We can see that the time dependence of the $y$-coordinate matches identically with the distance traveled by an object released from rest in free fall. If the time duration $t$ and the value of gravitational acceleration $g$ are identical, then the vertical displacement of the two objects is also identical ($y = s$). This independence and synchrony are what we observed in both the experiment and the simulation.

### Examples

1. From the edge of a $20.0\text{ m}$ high vertical cliff, a stone is projected horizontally with an initial velocity of $10.0\text{ }\frac{\text{m}}{\text{s}}$. After how much time does the stone impact the ground? How far does it travel horizontally, measured from the edge of the cliff? Calculate the magnitude of the stone's instantaneous velocity at the moment of impact!

The vertical distance covered until impact is $y = 20.0\text{ m}$. Let us determine the fall time, denoting the unknown by $x$:

$$
y = \frac {g} {2} \cdot t^2
$$

$$
20.0 = \frac {9.81} {2} \cdot x^2
$$

$$
20.0 = 4.905 \cdot x^2
$$

$$
x = \pm 2.019
$$

We reject the negative time value as physically uninterpretable, so impact occurs $2.02\text{ s}$ after launch.

Let us calculate the horizontal distance covered by the stone (the projectile range):

$$
x = v_0 \cdot t = 10.0 \cdot 2.019 \approx 20.2\text{ m}
$$

The stone flies a horizontal distance of $20.2\text{ m}$ from the cliff wall.

Since the horizontal acceleration component is zero ($a_x = 0$), the horizontal component of velocity remains constant throughout the motion:

$$
v_x = v_0 = 10.0\text{ }\frac {\text{m}} {\text{s}}
$$

Let us determine the vertical component of velocity ($v_y$) at the moment of impact, based on the definition of acceleration (denoting the unknown by $x$):

$$
a_y = \frac {v_y - v_{0y}} {t}
$$

$$
9.81 = \frac {x - 0} {2.019}
$$

$$
x = 9.81 \cdot 2.019 \approx 19.81
$$

Thus, $v_y \approx 19.81\text{ }\frac{\text{m}}{\text{s}}$.

The pure magnitude (length) of the impact velocity vector can be obtained from its perpendicular components using the Pythagorean theorem:

$$
v = \sqrt {v_x^2 + v_y^2} = \sqrt {10.0^2 + 19.81^2} = \sqrt{100 + 392.44} \approx 22.2\text{ }\frac {\text{m}} {\text{s}}
$$

2. The initial velocity of a projectile leaving the barrel of a rifle is $600\text{ }\frac{\text{m}}{\text{s}}$. If the weapon is fired perfectly horizontally, how much does the bullet drop vertically by the time it hits a target placed at a distance of $150\text{ m}$? Air resistance is negligible, and the value of gravitational acceleration is $9.81\text{ }\frac{\text{m}}{\text{s}^2}$.

Let us first determine the flight time of the projectile from the horizontal, uniform phase of motion (denoting the unknown by $x$):

$$
x = v_0 \cdot t
$$

$$
150 = 600 \cdot x
$$

$$
x = \frac{150}{600} = 0.250
$$

The flight time of the bullet is exactly $t = 0.250\text{ s}$.

During this time, the drop height corresponding to vertical free fall is:

$$
y = \frac {g} {2} \cdot t^2 = \frac {9.81} {2} \cdot 0.250^2 = 4.905 \cdot 0.0625 \approx 0.307\text{ m}
$$

The projectile drops approximately $30.7\text{ cm}$ along its trajectory, meaning that for a guaranteed hit, the barrel of the weapon must be aimed precisely this much above the center of the target.

## Exercises

1. A tennis ball is projected horizontally with an initial velocity of $15.0\text{ }\frac{\text{m}}{\text{s}}$ from the top of a $10.0\text{ m}$ high tower. How much time does it take for the ball to reach the ground, and what horizontal distance does it cover measured from the base of the tower?
2. The bullet of a modern hunting rifle leaves the barrel horizontally with an initial velocity of $500\text{ }\frac{\text{m}}{\text{s}}$ from the height of $1.0\text{ m}$. How much time does the bullet need to drop exactly $1.0\text{ m}$ in the vertical direction?
3. A stone is projected horizontally with an initial velocity of $20.0\text{ }\frac{\text{m}}{\text{s}}$ from the brink of a $15.0\text{ m}$ deep cliff with vertical walls. How much time does it take for the stone to impact the bottom of the cliff, and what will the magnitude of its impact velocity be?
4. A little girl throws a rubber ball horizontally with a velocity of $12.0\text{ }\frac{\text{m}}{\text{s}}$ from the window of an $8.0\text{ m}$ high school building. How far does the ball travel in the horizontal direction by the moment of impact, measured from the wall of the building?
5. An object is projected horizontally with an initial velocity of $25.0\text{ }\frac{\text{m}}{\text{s}}$. After how much time does the object reach a vertical displacement of exactly $5.0\text{ m}$?
