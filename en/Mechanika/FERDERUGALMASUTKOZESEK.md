# Perfectly Elastic, Oblique Collisions

We will now examine some of the more important perfectly elastic collisions that cannot be considered central (head-on) collisions.

## Perfectly Elastic Collision with a Massive Body

We have seen that in the central case, a perfectly elastic collision leads to a rebound with the same speed as the impact speed. Now we are interested in the relation between the angle of reflection and the angle of incidence in an oblique collision.

Let us assume that the surface of the massive target is a flat plane, and the smaller mass collides with it. At the point of impact, we draw a line perpendicular to the plane of the massive body; this is the **normal line** (or normal to the surface). The angle between this normal line and the initial velocity vector is the **angle of incidence** ($\alpha$). The **angle of reflection** ($\beta$) is the angle between the normal line and the velocity vector after the collision.

### Simulation

[Perfectly elastic, oblique collision with a massive target](https://alexerdei73.github.io/physics-engine/project/#84fdb621-068e-4ead-9814-cc2862fb8e85)

As seen in the simulation, the angle of incidence and the angle of reflection are equal. Why is this so? We know two things:
1. Mechanical energy is conserved during the collision since it is a perfectly elastic collision.
2. The massive body exerts a force on the colliding body perpendicular to its surface (friction is neglected).

Let the $x$-axis of the coordinate system be perpendicular to the wall and the $y$-axis be parallel to it. In this case, the conservation of energy is:

$$
\frac{m \cdot v_0^2}{2} = \frac{m \cdot v^2}{2}
$$

$$
v_0 = v
$$

In other words, based on the conservation of energy, the magnitude of the velocity before the collision is equal to the magnitude of the velocity after the collision. Since there is no force parallel to the wall ($F_y = 0$ because there is no friction), the $y$-component of momentum is conserved:

$$
F_{\text{net},y} = 0 \quad \rightarrow \quad \Delta p_y = 0
$$

$$
m \cdot v_{0,y} = m \cdot v_y
$$

Therefore, the momentum component parallel to the wall remains constant during the collision. If the angle of incidence is $\alpha$ and the angle of reflection is $\beta$ (measured from the normal):

$$
v_{0,y} = v_0 \cdot \sin \alpha
$$

$$
v_y = v \cdot \sin \beta
$$

Since $v_0 = v$ and $v_{0,y} = v_y$:

$$
m \cdot v_0 \cdot \sin \alpha = m \cdot v \cdot \sin \beta
$$

$$
\sin \alpha = \sin \beta
$$

$$
\alpha = \beta
$$

Here, we took advantage of the fact that the magnitude of the velocity does not change, so both sides of the equation can be divided by it.

### Example

A ball of mass $0.100\ \text{kg}$ strikes a wall with a velocity magnitude of $3.00\ \frac{\text{m}}{\text{s}}$ in a perfectly elastic collision and rebounds. The angle of incidence is $30^\circ$, and the collision lasts for $1.00\ \text{ms}$. What is the average force exerted on the wall during the collision?

The component of velocity perpendicular to the wall (in the $x$ direction) is:

$$
p_{0,x} = m \cdot v_{0,x} = m \cdot v_0 \cdot \cos \alpha = 0.100 \cdot 3.00 \cdot \cos 30^\circ \approx 0.2598\ \frac{\text{kg} \cdot \text{m}}{\text{s}}
$$

Since the collision is elastic, the $x$-component of the rebound velocity has the opposite direction:

$$
v_x = -v_{0,x}
$$

$$
m \cdot v_x = -m \cdot v_{0,x}
$$

The change in momentum in the $x$ direction is:

$$
\Delta p_{0,x} = p_x - p_{0,x} = -p_{0,x} - p_{0,x} = -2 \cdot 0.2598 = -0.5196\ \frac{\text{kg} \cdot \text{m}}{\text{s}}
$$

The average force (acting on the ball) is:

$$
F_{\text{net},x} = \frac{\Delta p_x}{t} = \frac{-0.5196}{0.001} = -519.6\ \text{N}
$$

The force acting on the wall is the counterforce (reaction force) of this (Newton's third law):

$$
N = -F_{\text{net},x} = 519.6\ \text{N}
$$

## Perfectly Elastic Collision of Objects of Equal Mass when the Target is at Rest

### Simulation

[Perfectly elastic collision of objects of equal mass when the target is at rest](https://alexerdei73.github.io/physics-engine/project/#2b3c424c-4e99-483b-a26e-c34d7ffa8834)

The velocities are perpendicular to each other after the collision, as can be seen from the simulation! Why is this the case?

We know two things:
1. Total momentum is conserved during the collision.
2. Mechanical energy is conserved during the collision.

Conservation of momentum in vector form:

$$
m \cdot \vec{v}_0 = m \cdot \vec{v}_1 + m \cdot \vec{v}_2
$$

Simplifying by mass:

$$
\vec{v}_0 = \vec{v}_1 + \vec{v}_2
$$

The initial velocity is therefore the vector sum of the two final velocities. This means that $\vec{v}_1$, $\vec{v}_2$, and $\vec{v}_0$ form the sides of a triangle, where the longest side is $\vec{v}_0$.

Due to the conservation of energy:

$$
\frac{m \cdot v_0^2}{2} = \frac{m \cdot v_1^2}{2} + \frac{m \cdot v_2^2}{2}
$$

$$
v_0^2 = v_1^2 + v_2^2
$$

The last equation is none other than the **Pythagorean theorem** applied to this triangle. This means that the triangle is a right-angled triangle; therefore, $\vec{v}_1$ and $\vec{v}_2$ are perpendicular to each other (provided that the collision is not central).

### Example

A ball of mass $0.100\ \text{kg}$ moving at a velocity of $5.00\ \frac{\text{m}}{\text{s}}$ undergoes a perfectly elastic oblique collision with a stationary ball of identical mass, deflecting with a velocity of $4.00\ \frac{\text{m}}{\text{s}}$. What will be the velocity of the initially stationary ball after the collision? The rotation of the balls is negligible, so they can be considered as point masses. What is the average force between the balls if the collision lasts for $1.00\ \text{ms}$?

Let us apply the Pythagorean theorem to the velocities:

$$
v_0^2 = v_1^2 + v_2^2
$$

$$
5^2 = 4^2 + v_2^2
$$

$$
v_2 = \sqrt{5^2 - 4^2} = \sqrt{25 - 16} = \sqrt{9} = 3\ \frac{\text{m}}{\text{s}}
$$

Calculating the force (from the momentum change of the second ball):

$$
F_{\text{net}} = \frac{\Delta p_2}{t} = \frac{m \cdot v_2 - 0}{t}
$$

$$
F_{\text{net}} = \frac{0.1 \cdot 3}{0.001} = \frac{0.3}{0.001} = 300\ \text{N}
$$

Thus, an average force of **$300.0\ \text{N}$** arises between the balls during the $1\ \text{ms}$ collision time. This force accelerates the initially stationary ball to a velocity of $3.00\ \frac{\text{m}}{\text{s}}$.

---

## Exercises

1. A tennis ball strikes a vertical wall at a velocity of $10.0\ \frac{\text{m}}{\text{s}}$. The angle of incidence (relative to the surface normal) is $45^\circ$. The ball rebounds in a perfectly elastic manner.
    * a) What is the magnitude of the ball's change in velocity ($\Delta v$)?
    * b) If the mass of the ball is $58.0\ \text{g}$ and the contact lasts for $5.00\ \text{ms}$, what average force does the wall exert on the ball?

2. A ice hockey puck ($m$) slides frictionlessly across the ice at a velocity of $v_0$ and collides with another stationary puck of identical mass. After the collision, the first puck continues to slide at a velocity of $v_1$ at an angle of $30^\circ$ relative to its original direction.
    * a) At what angle does the second puck move relative to the original direction?
    * b) Express the post-collision velocities of both pucks ($v_1, v_2$) in terms of $v_0$!

3. In a particle accelerator, protons are collided with stationary protons. During a specific measurement, the detectors showed that the scattering velocities of the protons were $v_1 = 0.01c$ and $v_2 = 0.0173c$.
    * a) What was the velocity $v_0$ of the incoming proton, assuming that kinetic energy was conserved during the collision (i.e., radiation losses are neglected)?
    * b) Prove by calculation that if energy conservation holds true, the trajectories of the two protons form a perfect right angle ($90^\circ$) with each other!