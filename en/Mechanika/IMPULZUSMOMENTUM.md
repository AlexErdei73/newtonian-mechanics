# Angular Momentum

## Angular Momentum for a System of Particles

The angular momentum of a point mass is derived from its linear momentum in a manner similar to how torque is derived from a force. Let the axis of rotation be located at the origin, and let this be the $z$-axis of the coordinate system. Then, the angular momentum about this axis is calculated as follows:

$$
L_z = mvr \sin \alpha
$$

In this equation, everything refers to the projection of the motion onto the $x$-$y$ plane, so $v$ is the velocity of the point mass of mass $m$ in the $x$-$y$ plane, and $r$ is the distance of the point mass from the axis of rotation. The angle $\alpha$ is the angle (no greater than $180^\circ$) enclosed by $r$ and $v$ in the $x$-$y$ plane. The sign of the angle is chosen such that a counter-clockwise rotation yields a positive angular momentum, while a clockwise rotation yields a negative angular momentum.

For a system of particles, the angular momentum is the sum of the angular momenta of the individual point masses belonging to the system; therefore, the addition must be performed on these signed quantities, taking their signs into account:

$$
L_z = \sum_{i = 1}^{N} m_i v_i r_i \sin \alpha_i
$$

Although angular momentum is a vector quantity, we are currently only concerned with its component along the axis of rotation (the $z$-direction), which is a signed quantity. In Hungarian scientific literature, you may frequently encounter the names *perdület* or *forgásmennyiség* for this concept.

## Angular Momentum of a Rigid Body

Let us now consider a rigid body undergoing planar motion in the $x$-$y$ plane about the $z$-axis passing through the origin. Since the body is rigid, the distance $r_i$ for each individual point mass is constant, and the particles undergo circular motion about the axis. In circular motion, the velocity is tangential, which means it is perpendicular to the radius vector. Therefore:

$$
\sin \alpha_i = \sin 90^\circ = 1
$$

for every point mass. Thus, the angular momentum can be calculated as follows:

$$
L_z = \sum_{i = 1}^{N} r_i m_i v_i
$$

This means that for every point, we sum the product of its distance from the axis (the radius of the circle) and its linear momentum. The linear momentum here is signed because the velocities $v_i$ are signed quantities, since they can be written as the product of the radius and the angular velocity, and the angular velocity is a signed quantity.

$$
r_i m_i v_i = r_i m_i r_i \omega = m_i r_i^2 \omega
$$

Thus, the angular momentum can be written in the following manner:

$$
L_z = \left( \sum_{i = 1}^{N} m_i r_i^2 \right) \omega = I \omega
$$

Since the angular velocity is identical for every point, we factored it out of the sum.

### Example

Two identical masses of $0.200\text{ kg}$, fixed symmetrically to a rigid rod of negligible mass, rotate at an identical distance of $0.300\text{ m}$ from the axis of rotation at a speed of $3.00\text{ m/s}$. The rotation is counter-clockwise. Calculate the angular momentum of the system with respect to the axis of rotation!

$$
L_z = \sum_{i = 1}^{N} m_i v_i r_i = 2 \cdot 0.2 \cdot 3 \cdot 0.3 = 0.360\text{ kg}\cdot\text{m}^2\text{/s}
$$

## The Moment of Inertia

Here, $I$ is called the moment of inertia, and its definition is:

$$
I = \sum_{i = 1}^{N} m_i r_i^2
$$

We must sum the product of the mass and the square of the distance from the axis of rotation for all bodies. Thus, the unit of the moment of inertia is $\text{kg}\cdot\text{m}^2$. We will see that $I$ is the rotational equivalent of mass, meaning it acts to oppose any acceleration or deceleration of the body's rotation about a given axis.

### Examples

1. In the previous example, what is the angular velocity of the bodies? Calculate the moment of inertia with respect to the axis of rotation as well! Show that the product of the moment of inertia and the angular velocity yields the angular momentum!

$$
v_i = r_i \omega
$$

$$
\omega = \frac{v_i}{r_i} = \frac{3}{0.3} = 10.0\ 1\text{/s}
$$

$$
I = \sum_{i = 1}^{N} m_i r_i^2 = 2 \cdot 0.2 \cdot 0.3^2 = 0.036\text{ kg}\cdot\text{m}^2
$$

$$
L_z = I \omega = 0.036 \cdot 10 = 0.360\text{ kg}\cdot\text{m}^2\text{/s}
$$

Indeed, we obtain exactly the same value for the angular momentum, just as it should be.

2. What happens to the moment of inertia in the previous example if the mass of the bodies is doubled, but they are placed half as far from the axis of rotation?

$$
I_0 = 2m r^2
$$

$$
I = 2(2m)\left(\frac{r}{2}\right)^2 = 4m \frac{r^2}{4} = m r^2 = \frac{I_0}{2}
$$

It can be seen that the moment of inertia is reduced to half.

---

## Exercises

1. Three identical point-like bodies, each with a mass of $0.500\text{ kg}$, are located on a rigid rod of negligible mass. Their distances measured from the axis of rotation at the origin are $0.200\text{ m}$, $0.400\text{ m}$, and $0.600\text{ m}$, respectively. The system rotates in a counter-clockwise direction with an angular velocity of $5.00\ 1\text{/s}$.
    * a) Calculate the moment of inertia of the system!
    * b) Calculate the angular momentum of the system!

2. A ball with a mass of $1.50\text{ kg}$ undergoes circular motion at the end of a string (of negligible mass) with a length of $0.800\text{ m}$. The angular momentum of the system with respect to the center (axis of rotation) is $12.0\text{ kg}\cdot\text{m}^2\text{/s}$ (counter-clockwise).
    * a) What is the linear velocity ($v$) of the ball?
    * b) What is the angular velocity ($\omega$) of the ball?

3. The moment of inertia of a system consisting of two bodies about a given axis is $I_1$. How does the moment of inertia change if the mass of both bodies is increased threefold ($3m$), and their distance from the axis of rotation is reduced to one-third ($\frac{r}{3}$)? Derive your answer using the formulas based on Example 2!

4. Two point-like bodies of identical mass ($m = 2.00\text{ kg}$) orbit about a common axis along paths of identical radius $r = 0.500\text{ m}$. Body "A" has a velocity of $4.00\text{ m/s}$ in a counter-clockwise direction, whereas body "B" has a velocity of $3.00\text{ m/s}$ in a clockwise direction.
    * Calculate the combined (net) angular momentum of the two bodies, taking the signs into account!
    * In which direction does the system rotate "overall" (what is the sign of the net angular momentum)?