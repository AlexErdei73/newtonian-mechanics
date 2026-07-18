# The Angular Momentum Theorem

## The Angular Momentum Theorem

Let us now examine the net torque, as this is what we will need most of the time:

$$
M_{z,\text{e}} = \sum_{i = 1}^{N} r_i F_i \sin \alpha_i
$$

The term $F_i \sin \alpha_i$ is nothing other than the tangential component of the force acting on the $i$-th point. Let us denote this by $F_{i,\text{t}}$.

$$
M_{z,\text{e}} = \sum_{i = 1}^{N} r_i F_{i,\text{t}} = \sum_{i = 1}^{N} r_i m_i a_{i,\text{t}} = \sum_{i = 1}^{N} r_i m_i \frac{v_i - v_{i,0}}{t}
$$

$$
M_{z,\text{e}} = \frac{\sum_{i = 1}^{N} r_i m_i v_i - \sum_{i = 1}^{N} r_i m_i v_{i,0}}{t}
$$

According to this, the net torque is nothing other than the ratio of the change in angular momentum to the elapsed time. Here we have utilized the fact that in the case of circular motion, the magnitude of the tangential component of acceleration is the change in the magnitude of velocity divided by time, since the velocity is tangential.

$$
M_{z,\text{e}} = \frac{N_z - N_{z,0}}{t} = \frac{\Delta N_z}{t}
$$

We will also show that the net torque is only the resultant of the torques of external forces, because the net torque of internal forces is always zero. To prove this, Newton assumed that the forces acting between the points of a system of particles are so-called *central forces*. This means that they are not only equal in magnitude and opposite in direction—as stated by the third law—but their line of action also lies along the straight line connecting the two points. This results in the net torque of the action-reaction force pair being zero for any two points. This assumption is not self-evident, but it holds true, for example, for gravitational or elastic forces, and it is generally true for the fundamental forces operating between particles.

$$
M_{i,j} + M_{j,i} = 0, \quad i \neq j
$$

$$
M_{z,\text{e}} = \sum_{i = 1}^{N} \left( M_i^{\text{k}} + \sum_{j = 1, i \neq j}^{N} M_{i,j} \right) = \sum_{i = 1}^{N} M_i^{\text{k}} + \sum_{i = 1}^{N} \sum_{j = 1, i \neq j}^{N} M_{i,j}
$$

$$
\sum_{i = 1}^{N}\sum_{j = i + 1}^{N} M_{i,j} = \sum_{i = 1}^{N}\sum_{j = 1}^{i - 1} M_{j,i}
$$

$$
\sum_{i = 1}^{N} \sum_{j = 1, i \neq j}^{N} M_{i,j} = \sum_{i = 1}^{N} \sum_{j = 1}^{i - 1} M_{i,j} + \sum_{i = 1}^{N}\sum_{j = 1}^{i - 1} M_{j,i} = \sum_{i = 1}^{N} \sum_{j = 1}^{i - 1} (M_{i,j} + M_{j,i}) = 0
$$

Therefore:

$$
M_{z,\text{e}} = M_{z,\text{e}}^{\text{k}}
$$

Thus, we have arrived at the form of the law of angular momentum for systems of particles, which we have only proven for the special case of a rigid body rotating around a fixed axis, but it is generally true.

$$
M_{z,\text{e}}^{\text{k}} = \frac{\Delta N_z}{t}
$$

> **The rate of change of the angular momentum of a system of particles per unit time is equal to the sum of the torques of the external forces acting upon it.**

Therefore, this theorem is generally true, but we have only investigated rotation around a fixed axis (the $z$-axis) and only in the case of rigid bodies, meaning when there are no deformations within the system of particles.

### Experiment

[Demonstrations of the Conservation of Angular Momentum](https://www.youtube.com/watch?v=PwE3eiREYA4)

In the presented experiment, we can see two fundamental demonstrations to illustrate the conservation of angular momentum:
1. **Rotating stool with dumbbells**: A student sitting on a rotating chair holds heavy weights with extended arms far from the vertical axis of rotation, which initially results in a large moment of inertia ($\Theta_{\text{initial}}$). When they pull their arms in close to their body, the mass distribution becomes closer to the axis of rotation, causing the system's moment of inertia to drop drastically. Since the ball bearings work excellently and the external torque acting along the vertical axis is negligibly small ($M^{\text{k}} \approx 0$), angular momentum is conserved. To compensate for the decreasing moment of inertia, the angular speed of the stool visibly increases, and the student suddenly speeds up.
2. **Flipping a spinning wheel**: The student sits on a stool initially at rest, while holding a rapidly spinning bicycle wheel in their hands. According to the right-hand rule, the wheel's angular momentum vector points vertically upward. When the student flips the wheel $180^\circ$ around a horizontal axis (turning it upside down), the wheel's own angular momentum begins to point vertically downward. Since the net external torque acting on the entire system along the vertical axis is zero, the total angular momentum along the vertical axis must be conserved. In order to preserve the initial upward angular momentum, the stool and the student together start rotating rapidly in a direction that restores the missing angular momentum. By tilting the wheel back to its original position, the student stops immediately.

### Examples

1. In planetary motion, Kepler's second law is also an example of the law of angular momentum. Although this is planar motion, the planet does not perform circular motion; its distance from the Sun varies. The axis of rotation passes through the Sun, perpendicular to the plane of planetary motion.

$$
N_z = \sum_{i = 1}^{1} m_i v_i \sin \alpha_i = m_1 v_1 \sin \alpha_1 = 2m_1 \frac{T_{\text{ellipszis}}}{T}
$$

Thus, the angular momentum is $2m$ times the areal velocity, where $m = m_1$ is the mass of the planet. We have proven that the areal velocity is constant, so the angular momentum must be constant as well, just as it should be, since the line of action of the gravitational force passes through the Sun—meaning through the axis of rotation.

2. A pivoted rod is capable of rotating in a vertical plane around its upper endpoint. Friction and air resistance can be neglected. The length of the rod is $1.20\text{ m}$, and its mass is $0.800\text{ kg}$. A body considered as a point mass with a mass of $0.500\text{ kg}$ is attached to the free end of the rod. What is the moment of inertia of the system? A horizontally moving projectile with a mass of $20.0\text{ g}$ hits the rod in the direction of rotation at a distance of $0.900\text{ m}$ from the axis with a velocity of $250\text{ m/s}$. The collision is perfectly inelastic, meaning that after the collision, the rod and the projectile move together. What is the angular momentum relative to the axis at the moment before the collision? What is it at the moment immediately following the collision? Is momentum a conserved quantity during the collision? What is the angular velocity at the moment after the collision? What is the maximum deflection angle of the rod?

$$
\Theta_{\text{rod}} = \frac{1}{3}Ml^2 = \frac{1}{3} \cdot 0.8 \cdot 1.2^2 = 0.384\text{ kg}\cdot\text{m}^2
$$

$$
\Theta_{\text{point}} = m l^2 = 0,5 \cdot 1.2^2 = 0.72\text{ kg}\cdot\text{m}^2
$$

$$
\Theta = \Theta_{\text{rod}} + \Theta_{\text{point}} = 0.384 + 0.72 = 1.104\text{ kg}\cdot\text{m}^2
$$

$$
    N_{z,0} = m_{\text{bullet}} r v = 0.02 \cdot 0.9 \cdot 250 = 4.50\text{ kg}\cdot\text{m}^2\text{/s}
$$

Since the lines of action of the external forces acting on the system (the gravitational force and the supporting force at the pivot) pass through the axis of rotation, they have no lever arm, and thus no torque. Therefore, angular momentum is a conserved quantity during the collision.

$$
N_z = 4.50\text{ kg}\cdot\text{m}^2\text{/s}
$$

This is valid immediately at the moment after the collision.

$$
N_z = (\Theta + \Theta_{\text{bullet}}) \omega
$$

$$
\Theta_{\text{bullet}} = m_{\text{bullet}} r^2 = 0.02 \cdot 0.9^2 = 0.0162\text{ kg}\cdot\text{m}^2
$$

$$
\omega = \frac{N_z}{\Theta + \Theta_{\text{bullet}}} = \frac{4.50}{1.104 + 0.0162} \approx 4.017\text{ rad/s}
$$

Let us calculate the distance of the center of mass from the axis of rotation!

$$
r_{\text{COM}} = \frac{\sum_{i = 1}^{N} m_i r_i}{M_{\text{total}}} = \frac{0.8 \cdot 0.6 + 0.5 \cdot 1.2 + 0.02 \cdot 0.9}{1.320} \approx 0.8318\text{ m}
$$

$$
v_{\text{COM}} = r_{\text{COM}} \omega = 0.8318 \cdot 4.017 \approx 3.341\text{ m/s}
$$

$$
I = M_{\text{total}} v_{\text{COM}} = 1.32 \cdot 3.341 \approx 4.411\text{ kg}\cdot\text{m/s}
$$

Therefore, this is the momentum immediately after the collision.

$$
I_0 = m_{\text{bullet}} v_{\text{bullet}} = 0.02 \cdot 250 = 5\text{ kg}\cdot\text{m/s}
$$

This is the momentum before the collision, which means that linear momentum is not conserved because the external force exerted by the pivot changes it. To answer the last question, we will need to calculate the rotational energy.

## Rotational Energy

We can easily calculate the energy of rotation around a fixed axis:

$$
E_{\text{m}} = \sum_{i = 1}^{N} \frac{m_i v_i^2}{2} = \sum_{i = 1}^{N} \frac{m_i(r_i \omega)^2}{2}
$$

We can factor out $\omega^2$ and $\frac{1}{2}$:

$$
E_{\text{m}} = \frac{\omega^2}{2} \sum_{i = 1}^{N} m_i r_i^2
$$

$$
E_{\text{m}} = \frac{\Theta \omega^2}{2}
$$

We obtained a formula exactly identical to that of translational motion, only with the moment of inertia substituted for mass, and the angular velocity substituted for velocity.

### Example

Let us finish the previous example!

$$
E_{\text{m},0} = E_{\text{h}}
$$

$$
\frac{(\Theta + \Theta_{\text{bullet}})\omega^2}{2} = M_{\text{total}} g h_{\text{COM}}
$$

$$
h_{\text{COM}} = \frac{(\Theta + \Theta_{\text{bullet}})\omega^2}{2 M_{\text{total}} g} = \frac{(1.104 + 0.0162) \cdot 4.017^2}{2 \cdot 1.32 \cdot 9.81} \approx 0.6980\text{ m}
$$

To calculate the angle, the following equation is needed:

$$
h_{\text{COM}} = r_{\text{COM}} - r_{\text{COM}} \cos \phi
$$

$$
\cos \phi = \frac{r_{\text{COM}} - h_{\text{COM}}}{r_{\text{COM}}} = \frac{0.8318 - 0.6980}{0.8318} \approx 0.1609
$$

$$
\phi \approx 80.74^\circ
$$

***

## Problems

1. A figure skater with a moment of inertia of $\Theta_1 = 3\text{ kg}\cdot\text{m}^2$ starts spinning and rotates with an angular velocity of $\omega_1 = 2\text{ rad/s}$ with extended arms. When they pull their arms in close to their body, their moment of inertia decreases to $\Theta_2 = 1.2\text{ kg}\cdot\text{m}^2$. Neglect friction!
    * a) What will the skater's angular velocity be after pulling in their arms?
    * b) By how much did their rotational energy change, and what is the source of this extra energy?

2. A homogeneous rod of length $L = 1.5\text{ m}$ and mass $M = 2\text{ kg}$ is pivot-mounted at its upper endpoint without friction. The rod initially hangs at rest. A projectile of mass $m = 10\text{ g}$ flying horizontally at a velocity of $v = 400\text{ m/s}$ hits the lowest point of the rod and becomes embedded in it (perfectly inelastic collision).
    * a) What is the moment of inertia of the system (rod and projectile combined) relative to the axis after the collision?
    * b) What will the angular velocity of the rod be immediately after the collision?

3. A comet revolves around the Sun in an elongated elliptical orbit. When it is closest to the Sun (perihelion, at a distance of $r_1 = 0.5\text{ AU}$), its velocity is $v_1 = 60\text{ km/s}$. What is the velocity of the comet when it is farthest from the Sun (aphelion), if this distance is $r_2 = 15\text{ AU}$? (We know that angular momentum is constant.)

4. The flywheel of a large machine has a moment of inertia of $\Theta = 25\text{ kg}\cdot\text{m}^2$ and makes 10 revolutions per second ($f = 10\text{ Hz}$). When the machine is turned off, a brake exerts a constant torque on the flywheel, which comes to a complete stop in $t = 20\text{ s}$.
    * a) What is the initial angular momentum of the flywheel?
    * b) What is the magnitude of the braking torque ($M_{\text{f}}$)?

5. A playground merry-go-round (which can be considered a homogeneous solid disk of mass $M = 100\text{ kg}$ and radius $R = 2\text{ m}$) can rotate frictionlessly around its vertical axis. The merry-go-round is initially at rest. A child of mass $m = 40\text{ kg}$ running tangentially at a velocity of $v = 3\text{ m/s}$ jumps onto the edge of the merry-go-round. Determine the angular velocity of the system (merry-go-round and child combined) after the jump! (The moment of inertia of a solid disk relative to its axis is $\Theta = \frac{1}{2}MR^2$; the child can be considered a point mass during the calculation.)