# Kinetic Energy

## Acceleration Work

Let us investigate the acceleration work required to accelerate a body with a mass of $m$ from an initial velocity of $v_0$ to a final velocity of $v$. Let the duration of the acceleration be $t$, consider the acceleration to be constant, and denote it by $a$.

The accelerating net force acting on the body is:

$$
F_e = m \cdot a = m \cdot \frac {v - v_0} {t}
$$

The length of the acceleration phase expressed from the quadratic distance law (substituting the change in velocity for $a$):

$$
s = v_0 \cdot t + \frac {a} {2} \cdot t^2 = \left(v_0 + \frac {v - v_0} {2}\right) \cdot t = \frac {2v_0 + (v - v_0)} {2} \cdot t
$$

$$
s = \frac {v_0 + v} {2} \cdot t
$$

The acceleration work performed, as the product of the force and the displacement:

$$
W = F_e \cdot s = m \cdot \frac {v - v_0} {t} \cdot \frac {v_0 + v} {2} \cdot t = \frac {m} {2} \cdot (v - v_0) \cdot (v + v_0) = \frac {m} {2} \cdot (v^2 - v_0^2)  
$$

$$
W = \frac {m \cdot v^2} {2} - \frac {m \cdot v_0^2} {2}
$$

Our result clearly shows that a quantity structured as $\frac {m \cdot v^2} {2}$ is crucial for calculating acceleration work, since the change (difference) in this physical state indicator determines the work done. This quantity is called **kinetic energy**. The acceleration work is spent on increasing the kinetic energy of the body. Like all forms of energy, its unit is the **joule** (J).

## Kinetic Energy

> **Kinetic energy is half the product of the body's mass and the square of its instantaneous velocity. Symbol: $E_m$ or $E_k$.**

$$
E_m = \frac{1}{2} \cdot m \cdot v^2
$$

## The Work-Energy Theorem

> **The acceleration (or deceleration) work done on a body is equal to the change in the kinetic energy of the body.**

$$
W = \Delta E_m = E_m - E_{m,0}
$$

In the derivation above, we proved the work-energy theorem only for the special case of rectilinear, uniformly accelerated motion, but the theorem is generally valid for motions along any path and changing arbitrarily.

## Examples

1. A car with a mass of $1300\text{ kg}$ accelerates from a speed of $10.0\text{ }\frac{\text{m}}{\text{s}}$ to a speed of $20.0\text{ }\frac{\text{m}}{\text{s}}$. What is its kinetic energy initially, and what does it increase to by the end of the acceleration? What is the acceleration work performed by the engine, neglecting internal losses? Calculate the work traditionally as well, by determining the acceleration, the accelerating force, and the distance covered! Do the results match?

The initial kinetic energy of the body:

$$
E_{m,0} = \frac {m \cdot v_0^2} {2} = \frac {1300 \cdot 10^2} {2} = 65,000\text{ J}
$$

The final kinetic energy of the body:

$$
E_m = \frac {m \cdot v^2} {2} = \frac {1300 \cdot 20^2} {2} = 260,000\text{ J}
$$

Based on the work-energy theorem, the acceleration work of the engine is the difference between the two energy values:

$$
W = \Delta {E_m} = E_m - E_{m,0} = 260,000 - 65,000 = 195,000\text{ J} = 195.0\text{ kJ}
$$

Thus, the acceleration work is $195\text{ kJ}$. Let's calculate this from the perspective of kinematics and dynamics as well! Let us arbitrarily assume that the duration of the acceleration was exactly $10\text{ s}$:

$$
a = \frac {v - v_0} {t} = \frac {20 - 10} {10} = 1\text{ }\frac {\text{m}} {\text{s}^2}
$$

$$
F_e = m \cdot a = 1300 \cdot 1 = 1300\text{ N}
$$

The length of the acceleration phase based on the quadratic distance law:

$$
s = v_0 \cdot t + \frac {a} {2} \cdot t^2 = 10 \cdot 10 + \frac {1} {2} \cdot 10^2 = 100 + 50 = 150\text{ m}
$$

According to the definition of mechanical work:

$$
W = F_e \cdot s = 1300 \cdot 150 = 195,000\text{ J} = 195.0\text{ kJ}
$$

It can be seen that the two different approaches yield exactly the same final result, which proves that using the work-energy theorem can save a lot of unnecessary intermediate calculations.

2. A stone with a mass of $0.10\text{ kg}$ is thrown vertically upward with an initial velocity of $5\text{ }\frac{\text{m}}{\text{s}}$. What is the work done by the gravitational force until the velocity of the stone decelerates to $2\text{ }\frac{\text{m}}{\text{s}}$? Determine the result without the work-energy theorem, directly from the product of the gravitational force and the displacement as well!

The initial and final kinetic energies:

$$
E_{m,0} = \frac {m \cdot v_0^2} {2} = \frac {0.10 \cdot 5^2} {2} = 1.25\text{ J}
$$

$$
E_m = \frac {m \cdot v^2} {2} = \frac {0.10 \cdot 2^2} {2} = 0.20\text{ J}
$$

Based on the work-energy theorem, the work done by gravity:

$$
W = \Delta E_m = 0.20 - 1.25 = -1.05\text{ J}
$$

The work of the gravitational force is negative because it opposes the motion (decelerates the stone). Let's verify this through dynamics! The magnitude of the gravitational force acting on the body ($g = 9.81\text{ }\frac{\text{m}}{\text{s}^2}$):

$$
F_e = G = m \cdot g = 0.1 \cdot 9.81 = 0.981\text{ N}
$$

The value of deceleration along the vertical axis is $a = -9.81\text{ }\frac{\text{m}}{\text{s}^2}$, and the change in velocity is $\Delta v = v - v_0 = 2 - 5 = -3\text{ }\frac{\text{m}}{\text{s}}$. The duration of the ascent:

$$
a = \frac {\Delta v} {t} \implies -9.81 = \frac {-3} {t} \implies t = \frac {-3} {-9.81} \approx 0.3058\text{ s}
$$

The vertical displacement (height of ascent) covered during this time:

$$
s = h = v_0 \cdot t + \frac {a} {2} \cdot t^2 = 5 \cdot 0.3058 + \frac {-9.81} {2} \cdot 0.3058^2 \approx 1.529 - 0.458 = 1.071\text{ m}
$$

Since the upward displacement and the downward gravitational force are in opposite directions ($\alpha = 180^\circ$):

$$
W = -F_e \cdot s = -0.981 \cdot 1.071 \approx -1.050\text{ J}
$$

Within the limits of calculation accuracy, the results match perfectly.

---

## Problems

**1. Energy of a Moving Car**
What is the kinetic energy of a passenger car with a mass of $1200\text{ kg}$ when it travels on the highway at a constant speed of rounded $72\text{ km/h}$? (Before the calculation, do not forget to convert the speed into SI units!)

**2. Accelerating an Object from Rest**
An initially stationary object with a mass of $2\text{ kg}$ is set into motion at the cost of exactly $40\text{ J}$ of acceleration work on a frictionless horizontal surface. What will be the final velocity of the object when the acceleration process concludes?

**3. Stopping a Ball**
A ball with a mass of $0.4\text{ kg}$ arrives at the goal with a speed of $15\text{ }\frac{\text{m}}{\text{s}}$, and then the goalkeeper confidently catches it (the ball stops). How much work was done by the braking force exerted by the goalkeeper's hands during the stopping of the ball? Why is this work negative or positive?

**4. Effect of Velocity Change on Energy**
How many times does the kinetic energy of any moving object change if its velocity is increased to exactly twice its value, while its mass remains strictly unchanged?

**5. Increasing a Car's Speed**
The speed of a car with a mass of $1500\text{ kg}$ is increased uniformly from $20\text{ }\frac{\text{m}}{\text{s}}$ to $30\text{ }\frac{\text{m}}{\text{s}}$. How much useful acceleration work must the engine perform during the process, neglecting rolling resistance and friction?
