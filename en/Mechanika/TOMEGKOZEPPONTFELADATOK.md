# Exercises on the Center of Mass

## Example 1

Show that the velocity of the center of mass does not change during a perfectly elastic collision either! Use the following formulae for a central, perfectly elastic collision:

$$
v_1 = \frac{(m_1 - m_2)v_{1,0} + 2m_2 v_{2,0}}{m_1 + m_2}
$$

$$
v_2 = \frac{(m_2 - m_1)v_{2,0} + 2m_1 v_{1,0}}{m_1 + m_2}
$$

Of course, these formulae were derived by utilizing the conservation of momentum. Therefore, the total momentum obviously cannot change during an elastic collision either. We must arrive back at this conclusion using the formulas above.

The velocity of the center of mass is:

$$
v_{\text{CM}} = \frac{m_1 v_1 + m_2 v_2}{m_1 + m_2}
$$

Let's look only at the numerator! Substitute the expressions for $v_1$ and $v_2$ from above:

$$
m_1 v_1 + m_2 v_2 = m_1 \frac{(m_1 - m_2)v_{1,0} + 2m_2 v_{2,0}}{m_1 + m_2} + m_2 \frac{(m_2 - m_1)v_{2,0} + 2m_1 v_{1,0}}{m_1 + m_2}
$$

Multiply both sides of the equation by $(m_1 + m_2)$ to clear the fractions:

$$
(m_1 v_1 + m_2 v_2)(m_1 + m_2) = m_1^2 v_{1,0} - m_1 m_2 v_{1,0} + 2m_1 m_2 v_{2,0} + m_2^2 v_{2,0} - m_1 m_2 v_{2,0} + 2m_1 m_2 v_{1,0}
$$

Combine like terms on the right-hand side:

$$
(m_1 v_1 + m_2 v_2)(m_1 + m_2) = (m_1^2 + m_1 m_2)v_{1,0} + (m_2^2 + m_1 m_2)v_{2,0}
$$

Factor out the masses:

$$
(m_1 v_1 + m_2 v_2)(m_1 + m_2) = m_1(m_1 + m_2)v_{1,0} + m_2(m_1 + m_2)v_{2,0}
$$

Divide by $(m_1 + m_2)$:

$$
m_1 v_1 + m_2 v_2 = m_1 v_{1,0} + m_2 v_{2,0}
$$

Thus, the total momentum is indeed constant, just as it must be. It follows that:

$$
v_{\text{CM}} = \frac{m_1 v_{1,0} + m_2 v_{2,0}}{m_1 + m_2} = v_{\text{CM},0}
$$

Our calculation clearly demonstrates that the velocity of the center of mass remains unchanged during an elastic, central collision, though it does not move together with the masses afterward as it would following a perfectly inelastic collision.

### Exercise for the Example

1. During an oblique, perfectly elastic collision, objects with a mass of $0.1\ \text{kg}$ collide such that a body moving at $5\ \text{m/s}$ strikes a stationary body and deflects off it with a velocity of $4\ \text{m/s}$. What will be the velocity of the initially stationary body after the collision? What angle do the post-collision velocities form with the initial $5\ \text{m/s}$ velocity vector? Let the direction of this initial velocity vector define the positive $x$-axis. Show that neither $v_{\text{CM},x}$ nor $v_{\text{CM},y}$ changes during the collision!

## Example 2

The coordinates of a particle with a mass of $0.1\ \text{kg}$ are given in meters as $(1; 2)$, and its velocity vector is given in $\text{m/s}$ as $(-1; 3)$. Another particle with a mass of $0.3\ \text{kg}$ has the coordinates $(4; 6)$.
Calculate the coordinates of the center of mass!
Show that the center of mass lies on the straight line connecting the two point masses and that it divides the line segment defined by them in inverse proportion to their masses—meaning it is closer to the body with the greater mass!
Calculate the coordinates of the velocity vector of the second body if the center of mass is at rest!

[Illustration of the Second Center of Mass Example](https://www.geogebra.org/m/peygwq34)

Calculating the coordinates:

$$
x_{\text{CM}} = \frac{m_1 x_1 + m_2 x_2}{M} = \frac{0.1 \cdot 1 + 0.3 \cdot 4}{0.4} = \frac{1.3}{0.4} = 3.25\ \text{m}
$$

$$
y_{\text{CM}} = \frac{m_1 y_1 + m_2 y_2}{M} = \frac{0.1 \cdot 2 + 0.3 \cdot 6}{0.4} = \frac{2}{0.4} = 5\ \text{m}
$$

Therefore, the coordinates of the center of mass are $(3.25; 5)$.

The equation of the straight line connecting the points is:

$$
y = mx + b
$$

Substitute the coordinates of both points into this equation!

$$
2 = m + b
$$

$$
6 = 4m + b
$$

Subtract the first equation from the second equation:

$$
4 = 3m \quad \rightarrow \quad m = \frac{4}{3} \approx 1.3333
$$

$$
b = 2 - m = 2 - 1.3333 = 0.6667
$$

The equation of our line is:

$$
y = 1.3333x + 0.6667
$$

Substituting the value of $x_{\text{CM}}$ into this:

$$
y = 1.3333 \cdot 3.25 + 0.6667 = 5.000 = y_{\text{CM}}
$$

Thus, the center of mass is located on the line connecting the two points. Let us also calculate the distances!

$$
d_1 = \sqrt{(3.25 - 1)^2 + (5 - 2)^2} = \sqrt{2.25^2 + 3^2} = 3.75
$$

$$
d_2 = \sqrt{(3.25 - 4)^2 + (5 - 6)^2} = \sqrt{(-0.75)^2 + (-1)^2} = 1.25
$$

The ratio is:

$$
\frac{d_2}{d_1} = \frac{1.25}{3.75} = \frac{1}{3} = \frac{m_1}{m_2}
$$

Calculating the velocity (if $v_{\text{CM}} = 0$):

$$
v_{\text{CM},x} = \frac{m_1 v_{1,x} + m_2 v_{2,x}}{M}
$$

$$
0 = \frac{0.1 \cdot (-1) + 0.3 v_{2,x}}{0.4}
$$

$$
0 = -1 + 3v_{2,x} \quad \rightarrow \quad v_{2,x} \approx 0.3333\ \text{m/s}
$$

$$
v_{\text{CM},y} = \frac{m_1 v_{1,y} + m_2 v_{2,y}}{M}
$$

$$
0 = \frac{0.1 \cdot 3 + 0.3 v_{2,y}}{0.4}
$$

$$
0 = 3 + 3v_{2,y} \quad \rightarrow \quad v_{2,y} = -1\ \text{m/s}
$$

Thus, the velocity vector of the $0.3\ \text{kg}$ body is $(0.3333; -1)\ \text{m/s}$.

## Example 3

A boat with a mass of $100\ \text{kg}$ is $10\ \text{m}$ long, and its center of mass is at $5\ \text{m}$, which is at the midpoint of its length. The boat floats on completely calm, still water. A boy with a mass of $40\ \text{kg}$ walks from the left end of the boat to the right end. Where is the center of mass of the system initially if the origin is chosen at the left edge of the boat and the $x$-axis points to the right, parallel to the boat? Where is the center of mass at the end of the walk? Drag (water resistance) is negligible. Where is the center of mass of the boat itself at the end of the walk? What is the $x$-coordinate of the boy at this moment?

$$
x_{\text{CM},0} = \frac{m_1 x_{1,0} + m_2 x_{2,0}}{M} = \frac{100 \cdot 5 + 40 \cdot 0}{140} \approx 3.571\ \text{m}
$$

The center of mass is at rest, and internal forces do not change the total momentum, which is zero. The velocity of the center of mass is:

$$
\vec{v}_{\text{CM}} = \frac{\sum_{i = 1}^{N} m_i \vec{v}_i}{M}
$$

$$
M \vec{v}_{\text{CM}} = \vec{p}
$$

Based on this, we can state that the velocity of the center of mass is zero since the total momentum is also zero. Therefore, the center of mass remains at rest throughout the process.

$$
x_{\text{CM}} = x_{\text{CM},0}
$$

Let us assume that the boat moved to the left and covered a distance $s$. In this case, the new midpoint of the boat is $5 - s$, and the new position of the boy (who stands at the right edge of the boat) is $10 - s$.

$$
x_{\text{CM}} = \frac{m_1 x_1 + m_2 x_2}{M} = \frac{100(5 - s) + 40(10 - s)}{140}
$$

$$
\frac{100(5 - s) + 40(10 - s)}{140} = 3.571
$$

$$
500 - 100s + 400 - 40s = 500
$$

$$
-140s + 400 = 0
$$

$$
s = \frac{400}{140} \approx 2.857\ \text{m}
$$

Thus, the boat shifts $2.857\ \text{m}$ to the left, while the walking boy moves $7.143\ \text{m}$ to the right (relative to the water). The center of mass of the boat is then located at $2.143\ \text{m}$.

---

## Exercises

2. Three point-like bodies are placed in a coordinate system.
    * $m_1 = 1\ \text{kg}$, position: $(0; 0)$
    * $m_2 = 2\ \text{kg}$, position: $(3; 0)$
    * $m_3 = 3\ \text{kg}$, position: $(0; 4)$
    Calculate the coordinates of the system's center of mass! How far is the center of mass from the origin?

3. Two hockey pucks slide on the ice.
    * Puck "A" ($2\ \text{kg}$) has a velocity of $v_{\text{A}} = (4; 2)\ \text{m/s}$.
    * Puck "B" ($3\ \text{kg}$) has a velocity of $v_{\text{B}} = (-1; 4)\ \text{m/s}$.
    Determine the velocity vector of the system's center of mass! What is the magnitude of the center of mass velocity?

4. A raft with a mass of $200\ \text{kg}$ and a length of $6\ \text{m}$ rests on the water. Two people stand at the two opposite ends of the raft: Ali ($80\ \text{kg}$) on the left end, and Béla ($60\ \text{kg}$) on the right end. They start walking toward each other at the same time and meet in the middle of the raft (relative to the raft). How much did the raft displace relative to the water, and in which direction, by the time the two people met? (Neglect water resistance.)

5. A block of wood with a mass of $0.5\ \text{kg}$ floats on the water. A frog with a mass of $0.1\ \text{kg}$ sits on it. The frog suddenly leaps horizontally off the block of wood with a velocity of $2\ \text{m/s}$ to the right relative to the shore. What will be the velocity and direction of the block of wood immediately after the jump? (The initial total momentum of the system is zero.)
