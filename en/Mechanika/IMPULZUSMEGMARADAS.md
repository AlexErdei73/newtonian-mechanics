# Conservation of Linear Momentum

Let us consider two point masses interacting with each other and with their environment. Let an external force $\vec{F}_1$ from the environment act on body 1, and an external force $\vec{F}_2$ from the environment act on body 2. Let the internal force exerted on body 1 by body 2 be denoted by $\vec{F}_{1,2}$, and conversely, the force exerted on body 2 by body 1 be denoted by $\vec{F}_{2,1}$.

Let us write Newton's second law in its original formulation for both bodies:

$$
\vec{F}_1 + \vec{F}_{1,2} = \frac {\Delta \vec{p}_1} {t}
$$

$$
\vec{F}_2 + \vec{F}_{2,1} = \frac {\Delta \vec{p}_2} {t}
$$

We add the two equations together, because if the left side equals the right side in both equations, their sums must also remain equal:

$$
\vec{F}_1 + \vec{F}_2 + \vec{F}_{1,2} + \vec{F}_{2,1} = \frac {\Delta \vec{p}_1} {t} + \frac {\Delta \vec{p}_2} {t}
$$

What happened to the internal forces on the left side? Their sum became a zero vector, which follows directly from Newton's third law (the principle of action-reaction):

$$
\vec{F}_{1,2} = -\vec{F}_{2,1}
$$

Thus, indeed:

$$
\vec{F}_{1,2} + \vec{F}_{2,1} = \vec{0}
$$

Let us assume that the resultant of the external forces is also $\vec{0}$. We can then multiply by the duration $t$ to obtain:

$$
\vec{0} = \Delta \vec{p}_1 + \Delta \vec{p}_2
$$

We can rearrange this slightly according to the definition of changes:

$$
\vec{0} = \vec{p}_1 - \vec{p_{1,0}} + \vec{p}_2 - \vec{p_{2,0}}
$$

$$
\vec{p_{1,0}} + \vec{p_{2,0}} = \vec{p}_1 + \vec{p}_2
$$

Our final equation expresses that the total momentum of the system is constant. Although we showed this derivation only for the case of two bodies, it can be generalized to a system consisting of an arbitrary number of bodies. If we write the second law for all bodies and then add the resulting equations together, the sum of the internal forces will always cancel out in pairs. If the net external force is zero, the sum of the momentum changes on the right side also yields zero, meaning the total momentum does not change. Therefore, we can state the law of conservation of momentum for systems of particles:

> **If the net external force acting on a system of particles is zero, the total linear momentum of the system remains constant. This is the law of conservation of momentum.**

## Examples

1. Two ice skaters stand facing each other on the ice. The mass of the one on the left is $40.0\text{ kg}$, and the one on the right is $60.0\text{ kg}$. The first skater ($40.0\text{ kg}$) pushes the second one, thereby acquiring a velocity of magnitude $3.00\text{ }\frac{\text{m}}{\text{s}}$. What will be the velocity in the opposite direction of the other skater ($60\text{ kg}$)? Friction is negligible, and the skaters are just standing on the ice apart from the push, meaning they do not propel themselves!

At the starting point, the total momentum of the system is zero. Due to the conservation of momentum, the total momentum after the push must also be zero. The vectors $\vec{p}_1$ and $\vec{p}_2$ are horizontal but point in opposite directions, since the velocity vectors point oppositely as well. Thus, the equation written with coordinates along the straight line of motion is:

$$
p_2 - p_1 = 0
$$

$$
m_2 \cdot v_2 - m_1 \cdot v_1 = 0
$$

$$
60 \cdot v_2 - 40 \cdot 3 = 0
$$

$$
60 \cdot v_2 - 120 = 0
$$

$$
60 \cdot v_2 = 120
$$

$$
v_2 = 2.00\text{ }\frac {text{m}} {text{s}}
$$

Therefore, the velocity of the $60\text{ kg}$ skater will be exactly $2.00\text{ }\frac{\text{m}}{\text{s}}$.

2. The mass of the pendulum bob of a ballistic pendulum is $2.00\text{ kg}$. The pendulum initially hangs vertically at rest when it is hit by a rifle bullet with a mass of $20\text{ g}$ traveling at a speed of $600\text{ }\frac{\text{m}}{\text{s}}$. The collision time is extremely short; after the interaction, the bullet becomes embedded in the pendulum, and they move together from then on. What is the velocity of the pendulum immediately after the rifle bullet has decelerated inside it? How high does the pendulum bob swing up?

[Operation of a ballistic pendulum and measuring muzzle velocity](https://www.youtube.com/watch?v=DUf7Kv9FeSM)

[Interactive simulation of the ballistic pendulum example](https://alexerdei73.github.io/physics-engine/project/#cdde6490-8528-4ed7-b8a0-77f7cc959b41)

The deceleration of the bullet takes place in a very short time, so the process can be divided into two distinct parts. First, the bullet penetrates the object, and the pendulum bob takes on a common velocity with the bullet. Let $v_0$ denote the initial velocity of the bullet, $v$ the common velocity, $m = 20\text{ g} = 0.020\text{ kg}$ the mass of the bullet, and $M = 2.020\text{ kg}$ the combined mass of the pendulum bob and the bullet.

In this first, collision phase, mechanical energy is not conserved (it converts into internal energy due to the deformation and friction of the bullet), but momentum is conserved because the net external force in the horizontal direction is zero. The frictional force decelerating the bullet is considered an internal force within the system.

The magnitude of the momentum before the collision:

$$
p_0 = m \cdot v_0 = 0.020 \cdot 600 = 12\text{ }\frac {\text{kg} \cdot \text{m}} {\text{s}}
$$

The magnitude of the momentum after the collision:

$$
p = M \cdot v = 2.020 \cdot v
$$

According to the conservation of momentum ($p_0 = p$):

$$
12 = 2.020 \cdot v
$$

$$
v = \frac {12} {2.020} \approx 5.941\text{ }\frac {\text{m}} {\text{s}}
$$

Immediately after the collision occurs, the common initial velocity will be $5.941\text{ }\frac{\text{m}}{\text{s}}$.

After the bullet is completely embedded, mechanical energy is conserved during the upward swing, since only the conservative gravitational force and the constraint force of the rope—which is perpendicular to the displacement at every point—act on the system. Because the penetration lasts for an extremely short time, the displacement of the pendulum during this interval is completely negligible.

At the beginning of the pure oscillating motion, the mechanical energy (choosing the lowest level as the zero point) is:

$$
E_{m,0} + E_{h,0} = \frac {M} {2} \cdot v^2 + 0 = \frac {2.020} {2} \cdot 5.941^2 \approx 35.65\text{ J}
$$

The mechanical energy at the highest point of the swing, where the body momentarily comes to rest ($E_m = 0\text{ J}$):

$$
E_m + E_h = 0 + M \cdot g \cdot h = 2.02 \cdot 9.81 \cdot h
$$

Since mechanical energy is constant during the swing:

$$
35.65 = 2.020 \cdot 9.81 \cdot h
$$

$$
35.65 = 19.82 \cdot h
$$

$$
h = \frac {35.65} {19.82} \approx 1.799\text{ m}
$$

Thus, rounded to three significant figures, the pendulum bob swings up to a vertical height of exactly $1.80\text{ m}$, which can be brilliantly and accurately measured experimentally.

Let us estimate more closely the actual displacement of the pendulum bob, assuming that the bullet penetrates a distance of $d = 20\text{ cm} = 0.020\text{ m}$ into the interior of the pendulum bob! The duration $t$ of the deceleration is also unknown.

The magnitude of the average braking force acting on the bullet:

$$

|F_{\text{net}}| = m \cdot |a_1| = m \cdot \frac {|v - v_0|} {t} = 0.02 \cdot \frac {600 - v} {t} = \frac {12 - 0.02 \cdot v} {t}
$$

Due to the law of action-reaction, an identical but forward-pointing accelerating force acts on the block:

$$
F_{\text{net}} = (M - m) \cdot a_2 = 2.00 \cdot \frac {v} {t} = \frac {2 \cdot v} {t}
$$

The magnitudes of the two internal forces are equal:

$$
\frac {12 - 0.02 \cdot v} {t} = \frac {2 \cdot v} {t}
$$

$$
12 - 0.02 \cdot v = 2 \cdot v \implies 12 = 2.02 \cdot v \implies v \approx 5.941\text{ }\frac{\text{m}}{\text{s}}
$$

It can be seen that by setting up the forces, although somewhat more complicated, we obtained precisely the same common velocity as from the conservation of momentum. Let us calculate the value of the acceleration of the two bodies as a function of $t$:

$$
a_1 = \frac {v - v_0} {t} = \frac {5.941 - 600} {t} = \frac {-594.1} {t}
$$

$$
a_2 = \frac {v} {t} = \frac {5.941} {t}
$$

Let's write down the displacements covered by the bodies during the collision phase:

$$
s_1 = v_0 \cdot t + \frac {a_1} {2} \cdot t^2 = 600 \cdot t - 297.05 \cdot t = 302.95 \cdot t
$$

$$
s_2 = \frac {a_2} {2} \cdot t^2 = 2.9705 \cdot t
$$

We know that the displacement of the bullet is greater than the displacement of the pendulum bob by the relative path $d$ traveled in the wood ($s_1 = s_2 + d$):

$$
302.95 \cdot t = 2.9705 \cdot t + 0.20
$$

$$
299.98 \cdot t = 0.20
$$

$$
t = \frac {0.20} {299.98} \approx 6.667 \cdot 10^{-4}\text{ s}
$$

The duration of the deceleration is therefore only $0.667\text{ ms}$. Let us calculate the pure displacement of the pendulum bob (the block) during this extremely short time:

$$
s_2 = 2.9705 \cdot t = 2.9705 \cdot 6.667 \cdot 10^{-4} \approx 1.980 \cdot 10^{-3}\text{ m} = 1.98\text{ mm}
$$

The displacement of the pendulum bob during the collision does not even reach $2\text{ mm}$. Over this minimal distance, the vertical rise of the pendulum is negligible (less than $1\ \mu\text{m}$), which completely justifies our initial assumption that the collision phase can be treated as a pure horizontal motion.

---

## Problems

**1. Cannon Recoil**
A projectile with a mass of $10\text{ kg}$ is fired horizontally from a cannon barrel with a mass of $800\text{ kg}$ at a muzzle velocity of $400\text{ }\frac{\text{m}}{\text{s}}$. What is the recoil velocity of the cannon barrel immediately after the shot, before the hydraulic braking device comes into operation?

**2. Collision of Railway Cars**
A railway car with a mass of $40\text{ tonnes}$ moving at a speed of $4\text{ }\frac{\text{m}}{\text{s}}$ collides with a $60\text{ tonnes}$ railway car standing stationary on the same track. As a result of the collision, the cars automatically couple together and move on as one. What will their common velocity be after the collision?

**3. Astronaut Throwing in Space**
An astronaut with a total combined mass of $70\text{ kg}$ throws a wrench with a mass of $2\text{ kg}$ at a speed of $5\text{ }\frac{\text{m}}{\text{s}}$ while performing repairs. With what velocity and in what direction does the astronaut drift backward as a result of the throw relative to the space station?

**4. Boy Jumping from a Boat**
A boy with a mass of $50\text{ kg}$ stands in a stationary boat with a mass of $100\text{ kg}$ in the middle of a lake. The boy suddenly jumps out of the boat into the water with a horizontal velocity of magnitude $3\text{ }\frac{\text{m}}{\text{s}}$. At what velocity does the boat start moving in the opposite direction?

**5. Inelastic Collision of Balls**
A ball with a mass of $2\text{ kg}$ travels to the right along a straight line at a speed of $6\text{ }\frac{\text{m}}{\text{s}}$ and collides centrally and perfectly inelastically with a $4\text{ kg}$ ball traveling to the left towards it at a speed of $3\text{ }\frac{\text{m}}{\text{s}}$. What will be the magnitude and direction of the common velocity of the balls after the collision if they continue to move together from then on?

*During the solution of the problems, the default value of the acceleration due to gravity is* $g = 9.81\text{ }\frac{\text{m}}{\text{s}^2}$*.*