# Perfectly Elastic Collisions

## The Concept of Collisions

When two bodies collide in the everyday sense, we also refer to it as a collision in physics. In everyday life, what matters most is usually the change that occurs in the internal structure of the bodies as a result of the collision. For example, in a car crash: how badly the car is damaged, how expensive the repair is, whether the passengers are injured, etc.

Here, we will only deal with the **collision of point masses (particles)**, so the internal structure of the bodies is completely irrelevant to us. What matters to us is how the velocity of the bodies changes. We have already seen an example of this type of collision with the ballistic pendulum. There, the total momentum of the pendulum body and the bullet was constant during the short duration of the collision. This is true for two reasons:

1. On the one hand, the net external force in this case is nearly zero (apart from the gravitational force acting on the bullet, which is not balanced by anything before the collision). If the net external force is zero, the total momentum remains constant.
2. However, momentum can also be considered constant if the net external force is non-zero but does not depend on the duration of the collision. The collision time is usually very short compared to the characteristic time scales of the motion, meaning the change in momentum is negligible due to Newton's second law.

In our previous derivation, this is evident because when we multiply both sides by time, we get approximately zero on the left-hand side. Although the net external force is not zero, the time interval we multiply by is negligibly small. Thus, we can still treat the left side of the equation as zero, meaning momentum can be considered a conserved quantity in this case as well.

> **In the case of point masses, momentum is generally a conserved quantity because the duration of the collision can be neglected.**

Therefore, the conservation of momentum can always be applied to collisions of point masses.

## Central and Oblique Collisions

When a collision takes place along a single straight line, we call it a **central (or head-on) collision**. In the case of point masses, this means that the straight line connecting the points is also the direction of both the velocities and, consequently, the momenta. Thus, during a central collision, point-like bodies move along a single straight line. The ballistic pendulum example was such a collision. We will mainly focus on central collisions. Non-central collisions are called **oblique collisions**.

## Perfectly Elastic Collisions

> **If mechanical energy is conserved along with momentum during a collision, it is called a perfectly elastic collision.**

Such collisions can only be approximated in reality but are never fully realized. There is always some loss of mechanical energy, no matter how hard we try to minimize it. However, perfectly elastic collisions are common during collisions of tiny atomic or subatomic particles, as there is no friction or air resistance at that scale.

### Experiment
[Demonstration of collisions on an air track](https://www.youtube.com/watch?v=FFinP5xL6Wk)

### Simulation
[Elastic central collision with equal masses](https://alexerdei73.github.io/physics-engine/project/#2fd33c53-2acf-46ec-8661-98e8116ead0e)

In this simulation, you can try out the cases shown in the experiment as well as other collisions.

### Example
A body of mass $0.100\,\text{kg}$ collides at a velocity of $1.00\,\text{m/s}$ with a body of mass $0.200\,\text{kg}$ initially at rest. The collision is perfectly elastic and central. What are the velocities of the bodies at the instant after the collision?

We write down the conservation laws for the collision process. The mechanical energy both before and after the collision consists only of kinetic energy:

$$
\frac {m_1v_{1,0}^2} {2} + \frac {m_2v_{2,0}^2} {2} = \frac {m_1v_1^2} {2} + \frac {m_2v_2^2} {2}
$$

Conservation of momentum:

$$
m_1v_{1,0} + m_2v_{2,0} = m_1v_1 + m_2v_2
$$

Let's substitute the data!

$$
\frac {0.1 \cdot 1^2} {2} + 0 = \frac {0.1 v_1^2} {2} + \frac {0.2 v_2^2} {2}
$$

$$
0.1 \cdot 1 + 0 = 0.1 v_1 + 0.2 v_2
$$

Multiply the first equation by 20 and the second equation by 10!

1.  
$$
1 = v_1^2 + 2v_2^2
$$

2.  
$$
1 = v_1 + 2v_2
$$

Express $v_1$ from the second equation:

$$
v_1 = 1 - 2v_2
$$

Substitute it back into the first equation:

$$
1 = (1 - 2v_2)^2 + 2v_2^2
$$

$$
1 = 1 - 4v_2 + 4v_2^2 + 2v_2^2
$$

$$
0 = 6v_2^2 - 4v_2
$$

$$
0 = (3v_2 - 2)v_2
$$

The solutions are:

$$
v_2 = 0 \quad \text{or} \quad v_2 = \frac {2} {3} \approx 0.6667 \,\text{m/s}
$$

Of the two solutions, the first one represents the initial state before the collision. Therefore, the unknown solution we are looking for is:
**$v_1 = -0.3334\,\text{m/s}$** and **$v_2 = 0.6667\,\text{m/s}$**.

This can also be verified with the simulation.

### Derivation of the General Formulae

The general formulae can also be derived with a little algebra for $v_1$ and $v_2$. Here, the velocities are actually velocity components along the line of collision, so they are signed quantities. Generally, the positive axis points from left to right. For the sake of completeness, we derive the formulae!

$$
\frac {m_1v_{1,0}^2} {2} + \frac {m_2v_{2,0}^2} {2} = \frac {m_1v_1^2} {2} + \frac {m_2v_2^2} {2}
$$

$$
m_1v_{1,0} + m_2v_{2,0} = m_1v_1 + m_2v_2
$$

The trick is to rearrange the energy equation after multiplying by 2.

$$
m_1v_{1,0}^2 - m_1v_1^2 = m_2v_2^2 - m_2v_{2,0}^2
$$

Factor both sides:

$$
m_1(v_{1,0} + v_1)(v_{1,0} - v_1) = m_2(v_2 + v_{2,0})(v_2 - v_{2,0})
$$

Rearrange the conservation of momentum equation as well:

$$
m_1v_{1,0} - m_1v_1 = m_2v_2 - m_2v_{2,0}
$$

$$
m_1(v_{1,0} - v_1) = m_2(v_2 - v_{2,0})
$$

Divide the rearranged energy equation by this momentum equation:

$$
v_{1,0} + v_1 = v_2 + v_{2,0}
$$

We obtain $v_1$ by expressing $v_2$ from this equation and substituting it into the momentum equation. Then we solve for $v_1$.

$$
v_2 = v_{1,0} + v_1 - v_{2,0}
$$

$$
m_1v_{1,0} + m_2v_{2,0} = m_1v_1 + m_2(v_{1,0} + v_1 - v_{2,0})
$$

$$
m_1v_{1,0} - m_2v_{1,0} + 2m_2v_{2,0} = m_1v_1 + m_2v_1
$$

$$
(m_1 - m_2)v_{1,0} + 2m_2v_{2,0} = (m_1 + m_2)v_1
$$

The final formula:

$$
v_1 = \frac {(m_1 - m_2)v_{1,0} + 2m_2v_{2,0}} {m_1 + m_2}
$$

We can test our general formula with the data from our example:

$$
v_1 = \frac {(0.1 - 0.2) \cdot 1 + 2 \cdot 0.2 \cdot 0} {0.1 + 0.2} = \frac {-0.1} {0.3} \approx -0.3334 \,\text{m/s}
$$

As you can see, we get the correct result. We find $v_2$ in a completely analogous way. Here we present only the result:

$$
v_2 = \frac {(m_2 - m_1)v_{2,0} + 2m_1v_{1,0}} {m_1 + m_2}
$$

Verifying this using our example:

$$
v_2 = \frac {(0.2 - 0.1) \cdot 0 + 2 \cdot 0.1 \cdot 1} {0.1 + 0.2} = \frac {0.2} {0.3} \approx 0.6667 \,\text{m/s}
$$

> **Note:** It is not worth memorizing these formulae; it is better to calculate the steps as we did in the example solution!

### Special Cases

1. **Equal masses, one at rest:** $m_1 = m_2 = m$ and $v_{1,0} = v_0$, $v_{2,0} = 0$
    * $v_1 = 0$
    * $v_2 = v_0$
    *(The bodies exchange velocities)*

2. **Equal masses, moving toward each other:** $m_1 = m_2 = m$ and $v_{1,0} = -v_{2,0} = v_0$
    * $v_1 = -v_0$
    * $v_2 = v_0$
    *(They bounce back with the same speed)*

3. **The target is much heavier:** $m_2 \gg m_1$ and $v_{1,0} = v_0$, $v_{2,0} = 0$ (e.g., a ping-pong ball hitting a wall)
    * $v_1 \approx -v_0$
    * $v_2 \approx 0$
    *(The small body bounces back, the large body barely moves)*

---

### Exercises

1. A cart with a mass of $0.50\,\text{kg}$ is moving at a velocity of $4.0\,\text{m/s}$ on an air track when it undergoes a central, perfectly elastic collision with another cart of mass $0.30\,\text{kg}$ moving ahead of it in the same direction at a slower velocity of $1.0\,\text{m/s}$. Calculate the velocity of both carts after the collision!

2. Two hockey pucks slide frictionlessly toward each other on a horizontal ice rink. Puck "A" has a mass of $0.20\,\text{kg}$ and a velocity of $3.0\,\text{m/s}$. Puck "B" has a mass of $0.40\,\text{kg}$ and a velocity of $2.0\,\text{m/s}$ (in the opposite direction to puck "A"). What will be the velocity and direction of travel of each puck after their perfectly elastic, central collision?

3. A proton ($m$) undergoes a head-on, elastic collision at a velocity of $v_0$ with a helium nucleus (alpha particle, mass $4m$) initially at rest.
   * **a)** What will be the velocities of the proton and the helium nucleus after the collision as a function of $v_0$?
   * **b)** What fraction of the proton's initial kinetic energy was transferred to the helium nucleus?
