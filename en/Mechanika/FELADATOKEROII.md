# Exercises on Force II

## Examples

1. The barrel of a gun is $70.0\text{ cm}$ long, the mass of the bullet is $20.0\text{ g}$, and the muzzle velocity is $600\text{ }\frac{\text{m}}{\text{s}}$. What is the acceleration of the bullet in the barrel? What force accelerates the bullet? How much time does it take for the bullet to accelerate in the barrel? Consider the acceleration to be uniform!

This problem might seem difficult at first glance, since neither the acceleration nor the time is directly known. However, we have two equations: one is used to calculate acceleration, and the other is for calculating the distance covered ($v_0 = 0$):

$$
a = \frac {v} {t}
$$

$$
s = \frac {a} {2} \cdot t^2
$$

Let's convert the data into basic SI units ($s = 0.7\text{ m}$ and $m = 0.02\text{ kg}$), then substitute them into the formulas:

$$
a = \frac {600} {t}
$$

$$
0.7 = \frac {a} {2} \cdot t^2
$$

The system of equations can be easily rearranged algebraically:

$$
a \cdot t = 600
$$

$$
1.4 = (a \cdot t) \cdot t
$$

Substituting the value $a \cdot t = 600$ obtained from the first equation into the second relation:

$$
1.4 = 600 \cdot t
$$

$$
t = \frac {1.4} {600} \approx 0.002333\text{ s} = 2.333\text{ ms}
$$

Now, using the obtained time value, we can calculate the enormous acceleration of the bullet:

$$
a = \frac {600} {0.002333} \approx 257,143\text{ }\frac {\text{m}} {\text{s}^2}
$$

Finally, based on Newton's second law, the accelerating force is:

$$
F_{\text{net}} = m \cdot a = 0.020 \cdot 257,143 \approx 5143\text{ N} \approx 5.14\text{ kN}
$$

Thus, the bullet is accelerated in the gun barrel by an average force of $5.14\text{ kN}$ in just $2.33\text{ ms}$.

2. Upon hitting a wooden block, a bullet penetrates it at a speed of $600\text{ }\frac{\text{m}}{\text{s}}$ and comes to a complete stop over a distance of $30.0\text{ cm}$. The mass of the bullet is still $20\text{ g}$. What is the deceleration, the duration of the braking, and the braking force exerted by the wooden block?

The equations of motion (by substituting $v = 0$ and $s = 0.3\text{ m}$):

$$
a = \frac {v - v_0} {t} \implies a = \frac {-600} {t}
$$

$$
s = v_0 \cdot t + \frac {a} {2} \cdot t^2 \implies 0.3 = 600 \cdot t + \frac {a} {2} \cdot t^2
$$

Let's arrange the system of equations:

$$
a \cdot t = -600
$$

$$
0.6 = 1200 \cdot t + (a \cdot t) \cdot t
$$

Substitute the value $a \cdot t = -600$ into the second equation:

$$
0.6 = 1200 \cdot t - 600 \cdot t
$$

$$
0.6 = 600 \cdot t
$$

$$
t = \frac{0.6}{600} = 0.001\text{ s} = 1.00\text{ ms}
$$

The bullet decelerates in the wood in exactly $1\text{ ms}$. Let's calculate the deceleration:

$$
a = \frac {-600} {0.001} = -600,000\text{ }\frac {\text{m}} {\text{s}^2}
$$

The negative sign indicates that the acceleration vector is in the opposite direction of the motion (deceleration). The magnitude of the braking force is:

$$
|F_{\text{net}}| = m \cdot |a| = 0.02 \cdot 600,000 = 12,000\text{ N} = 12.0\text{ kN}
$$

The magnitude of the average braking force exerted by the wooden block is $12.0\text{ kN}$.

3. A fighter jet accelerates and takes off on a $600\text{ m}$ long runway, with a liftoff speed of $280\text{ }\frac{\text{km}}{\text{h}}$. If the mass of the jet is $17,000\text{ kg}$, what thrust is required for takeoff? Consider the motion to have a constant acceleration!

At the very beginning of solving the problem, do not forget to convert the speed into SI units: $v = \frac{280}{3.6} \approx 77.78\text{ }\frac{\text{m}}{\text{s}}$.

$$
a = \frac {77.78} {t}
$$

$$
600 = \frac {a} {2} \cdot t^2
$$

Rearranged:

$$
a \cdot t = 77.78
$$

$$
1200 = (a \cdot t) \cdot t \implies 1200 = 77.78 \cdot t
$$

$$
t = \frac {1200} {77.78} \approx 15.43\text{ s}
$$

The value of uniform acceleration required for takeoff:

$$
a = \frac {77.78} {15.43} \approx 5.041\text{ }\frac {\text{m}} {\text{s}^2}
$$

According to Newton's second law, the accelerating net thrust is:

$$
F_{\text{net}} = m \cdot a = 17,000 \cdot 5.041 \approx 85,697\text{ N} \approx 85.70\text{ kN}
$$

Therefore, the magnitude of the useful thrust exerted by the engines is $85.70\text{ kN}$.

---

### Practice Problems

**1. Emergency Braking of a Train**
A train with a mass of $400\text{ tonnes}$ travels on the tracks at a speed of $108\text{ }\frac{\text{km}}{\text{h}}$. During emergency braking, the brakes exert a constant braking force of $200\text{ kN}$. Calculate the train's deceleration! How much time elapses until a complete stop, and what is the length of the stopping distance?

**2. Kicking a Football**
A player kicks an initially stationary football with a mass of $450\text{ g}$ such that their foot is in contact with the ball for exactly $0.05\text{ s}$. The ball flies away at a speed of $30\text{ }\frac{\text{m}}{\text{s}}$ after the kick. What uniform acceleration did the ball gain during the contact, and what was the average force of the kick?

**3. Launching an Arrow from a Bow**
An archer draws a bowstring over a length of $70\text{ cm}$. The launched arrow has a mass of $50\text{ g}$, and its muzzle velocity at the moment of launch is $70\text{ }\frac{\text{m}}{\text{s}}$. Assume that the accelerating force is constant over the entire drawn length of the bow! With what acceleration does the arrow start, and what average force did the bow exert on it?

**4. Launching an Aircraft with a Catapult**
On an aircraft carrier, a steam catapult accelerates a fighter jet from rest to a speed of $270\text{ }\frac{\text{km}}{\text{h}}$ over a $90\text{ meter}$ long track. The mass of the fighter jet is $25,000\text{ kg}$. How long does the catapulting take, and what is the average thrust exerted by the catapult (neglect the fighter jet's own engine thrust for now)?

**5. Car Crash Test**
A test car with a mass of $1200\text{ kg}$ is driven into a rigid concrete wall at a speed of $54\text{ }\frac{\text{km}}{\text{h}}$. The front of the car crumples by exactly $0.6\text{ m}$ during the collision until the passenger compartment comes to a complete stop. Consider the deceleration to be uniform during the deformation! What deceleration affects the car during the crash, and what average force acts on it in the crumple zone?