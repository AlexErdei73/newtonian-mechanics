# Perfectly Inelastic Collisions

## The Concept of Perfectly Inelastic Collisions

A collision is perfectly inelastic if the bodies move together as one after the collision. In these collisions, mechanical energy is not conserved; in fact, the loss of mechanical energy is the maximum possible. Total momentum, of course, is still conserved in this case.

### Simulation

[Perfectly inelastic, central collision](https://alexerdei73.github.io/physics-engine/project/#8fb6472a-0612-4261-a3c6-468de892e9b9)

The post-collision velocity can easily be obtained from the conservation of momentum:

$$
m_1 v_{1,0} + m_2 v_{2,0} = (m_1 + m_2)v
$$

$$
v = \frac{m_1 v_{1,0} + m_2 v_{2,0}}{m_1 + m_2}
$$

We have already encountered this formula in the case of the ballistic pendulum. That collision corresponds exactly to the case discussed here.

### Example

A body of mass $m$ moving at a velocity of $v_0$ undergoes a central, perfectly inelastic collision with another body of mass $m$ that is initially at rest. What is their common velocity after the collision? Calculate the loss of mechanical energy!

The conservation of momentum:

$$
m v_0 = 2mv
$$

$$
v = \frac{v_0}{2}
$$

Therefore, the common velocity is half of the initial velocity.

The change in energy:

$$
\Delta E_{\text{m}} = E_{\text{m,final}} - E_{\text{m,initial}}
$$

$$
\Delta E_{\text{m}} = \frac{2mv^2}{2} - \frac{m v_0^2}{2} = \frac{2m (\frac{v_0}{2})^2 - m v_0^2}{2}
$$

$$
\Delta E_{\text{m}} = \frac{2m \frac{v_0^2}{4} - m v_0^2}{2} = \frac{\frac{1}{2}m v_0^2 - m v_0^2}{2} = - \frac{m v_0^2}{4} = - \frac{E_{\text{m},0}}{2}
$$

Half of the total initial energy goes into increasing the internal energy (it is dissipated, converted into heat).

## The Summation Notation

In the following, we will need a shorthand notation for sums with $N$ terms. For example, we can add the natural numbers from 1 to $N$:

$$
1 + 2 + 3 + \dots + N = \sum_{i = 1}^{N} i
$$

The expression on the right-hand side means exactly what is written on the left-hand side, just significantly shorter. It is interpreted as $i$ taking the values $1, 2, 3, \dots, N$, which must be substituted for each individual value into the expression following the summation symbol (which in our case is just $i$). So for $i = 1$ it is 1, then for $i = 2$ it is 2, and so on. The expressions obtained in this way must be added together. This yields the sum on the left-hand side. This can be very long if, for example, $N = 1000$. In that case, the sum has 1000 terms, which we shortened with the "..." notation on the left. The summation symbol is an even shorter form of this. The right-hand side is read as: *"The summation of i from 1 to N of i"*.

## The Center of Mass

The common velocity obtained in a perfectly inelastic collision is the velocity of the center of mass. For two particles, therefore, the velocity of the center of mass is nothing other than the mass-weighted average of the velocities of the two particles.

$$
\vec{v}_{\text{CM}} = \frac{m_1 \vec{v}_1 + m_2 \vec{v}_2}{m_1 + m_2}
$$

The velocity of the center of mass can be defined for any number of point masses:

$$
\vec{v}_{\text{CM}} = \frac{\sum_{i = 1}^{N} m_i \vec{v}_i}{M}
$$

Where $M$ is the total mass of the system:

$$
M = \sum_{i = 1}^{N} m_i
$$

The relationship can also be written without the summation symbol, it is just slightly longer:

$$
\vec{v}_{\text{CM}} = \frac{m_1 \vec{v}_1 + m_2 \vec{v}_2 + \dots + m_N \vec{v}_N}{m_1 + m_2 + \dots + m_N}
$$

Where is the center of mass itself located? Let us first look at a system consisting of 2 point masses, and then generalize!

$$
x_{\text{CM}} = \frac{m_1 x_1 + m_2 x_2}{m_1 + m_2}
$$

$$
y_{\text{CM}} = \frac{m_1 y_1 + m_2 y_2}{m_1 + m_2}
$$

> **The coordinates of the center of mass are the mass-weighted averages of the coordinates of the individual point masses.**

Let us look at the $x$-component of the velocity from the change in coordinates ($v_x = \Delta x / t$):

$$
v_{\text{CM},x} = \frac{x_{\text{CM}} - x_{\text{CM},0}}{t} = \frac{\frac{m_1 x_1 + m_2 x_2}{m_1 + m_2} - \frac{m_1 x_{1,0} + m_2 x_{2,0}}{m_1 + m_2}}{t}
$$

$$
v_{\text{CM},x} = \frac{m_1 x_1 + m_2 x_2 - m_1 x_{1,0} - m_2 x_{2,0}}{(m_1 + m_2)t} = \frac{m_1 \frac{x_1 - x_{1,0}}{t} + m_2 \frac{x_2 - x_{2,0}}{t}}{m_1 + m_2}
$$

$$
v_{\text{CM},x} = \frac{m_1 v_{1,x} + m_2 v_{2,x}}{m_1 + m_2}
$$

We obtain the corresponding relationship for $v_{\text{CM},y}$ in a completely analogous way. With this, we have verified the formula for $\vec{v}_{\text{CM}}$ for a system consisting of two point masses. The generalization is completely similar, we just write the formulas with a summation symbol for $N$ point masses and perform the algebraic operations accordingly.

$$
x_{\text{CM}} = \frac{\sum_{i = 1}^{N} m_i x_i}{M}
$$

$$
v_{\text{CM},x} = \frac{x_{\text{CM}} - x_{\text{CM},0}}{t} = \frac{\frac{\sum_{i = 1}^{N} m_i x_i}{M} - \frac{\sum_{i = 1}^{N} m_i x_{1,0}}{M}}{t}
$$

$$
v_{\text{CM},x} = \frac{\sum_{i = 1}^{N} (m_i x_i - m_i x_{1,0})}{Mt} = \frac{\sum_{i = 1}^{N} m_i \frac{x_i - x_{1,0}}{t}}{M}
$$

$$
v_{\text{CM},x} = \frac{\sum_{i = 1}^{N} m_i v_{i,x}}{M}
$$

In the terms under the summation sign, we factored out the mass $m_i$, and then multiplied each term by $\frac{1}{t}$. We can do this because the summation sign means addition, and we can multiply the terms of a sum by a common factor, as we are used to doing. Thus, we have arrived at the general result, which is valid for a system of point masses consisting of any arbitrary $N$ particles.

> **The velocity of the center of mass is the mass-weighted average of the velocities of the individual point masses.**

### Example

Let the mass of the first point mass be $0.1\text{ kg}$ and that of the second be the same. Both points are located on the $x$-axis, initially at $x_{1,0} = 0$ and $x_{2,0} = 3\text{ m}$. Where is the center of mass located? What is the velocity of the center of mass at this time if the first body has a velocity of $1\text{ m/s}$ and the second body is at rest? What is the velocity of the center of mass after the collision? What is the common velocity of the bodies if the collision is perfectly inelastic?

$$
x_{\text{CM},0} = \frac{m_1 x_{1,0} + m_2 x_{2,0}}{M} = \frac{0.1 \cdot 0 + 0.1 \cdot 3}{0.2} = 1.5\text{ m}
$$

The center of mass is the midpoint of the line segment defined by the two equal masses on the $x$-axis.

$$
v_{\text{CM},x} = \frac{m_1 v_{1,x} + m_2 v_{2,x}}{M} = \frac{0.1 \cdot 1 + 0}{0.2} = 0.5\text{ m/s}
$$

After the collision, both bodies take on the velocity of the center of mass. The velocity of the center of mass does not change during the collision (since the net external force is zero).

---

## Exercises

1. A railway wagon with a mass of $10\,000\text{ kg}$ rolls at a velocity of $2\text{ m/s}$ on the tracks and collides with a stationary wagon with a mass of $15\,000\text{ kg}$. The wagons couple together during the collision.
    * a) What will be the common velocity of the train?
    * b) How much mechanical energy was lost (converted into heat and deformation) during the collision?

2. Three bodies move on a frictionless table.
    * 1st body: $m_1 = 2\text{ kg}$, $v_1 = 4\text{ m/s}$ (to the right)
    * 2nd body: $m_2 = 3\text{ kg}$, $v_2 = -2\text{ m/s}$ (to the left)
    * 3rd body: $m_3 = 5\text{ kg}$, $v_3 = 0$ (at rest)
    Calculate the velocity of the system's center of mass! If these bodies were all to collide and stick together at a single point, what would be the velocity of the resulting "giant body"?

3. A satellite with a mass of $1000\text{ kg}$ orbits the Earth when a meteorite with a mass of $50\text{ kg}$ strikes it. Before the impact, the velocity of the satellite was $7000\text{ m/s}$, and the meteorite arrived head-on at a velocity of $15\,000\text{ m/s}$. The meteorite embeds itself in the satellite (perfectly inelastic collision). What will be the velocity of the wreckage immediately after the collision?
