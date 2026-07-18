# Momentum

## The Concept of a Point Mass

Up to this point, we have dealt with motions where the size of the object can be considered negligible compared to its displacement. In such cases, we also neglect the rotation of the body, and the entire internal structure of the body can be ignored for the purpose of describing the motion.

> **A point mass (or particle) is a common approximation in mechanics where an object is described as a mathematical point with no dimensions that possesses mass.**

For now, we will continue to focus on the motion of a single point mass, before moving on to cases where we investigate the motion of multiple point masses simultaneously.

## Newton's Second Law in Its Original Form

So far, we have used the second law in the following form:

$$
F_e = m \cdot a
$$

Here, the net force $F_e$ and the acceleration $a$ are directional vectors pointing along the same line.

$$
a = \frac {\Delta v} {t} = \frac {v - v_0} {t}
$$

If we substitute this into the previous equation and assume that the mass is constant, meaning:

$$
m = m_0
$$

then:

$$
F_e = m \cdot \frac {v - v_0} {t} = \frac {m \cdot v - m_0 \cdot v_0} {t} = \frac {\Delta (m \cdot v)} {t}
$$

The quantity $m \cdot v$ is called linear momentum. Symbol: $I$. This is a vector quantity and points in the direction of the velocity vector. Thus, the general form of the second law is:

$$
\vec{I} = m \cdot \vec{v}
$$

$$
\vec{F}_e = \frac {\Delta \vec{I}} {t}
$$

This is the formula as Newton originally formulated the second law. This original formulation is valid for a constant force, meaning it applies to uniformly accelerated motion, which we are focusing on for now.

If the force varies, the formula gives only the average force. This generally does not equal the instantaneous value of the force. However, by reducing the duration $t$, it is possible to make the average force match the instantaneous value of the force within our calculation accuracy. In this case, the formula implies that the duration $t$ is chosen to be sufficiently short to achieve the desired accuracy. This is denoted as follows:

$$
t \to 0
$$

The form used so far ($F_e = m \cdot a$) is valid only if the mass can be considered constant. We have assumed this until now. In physics, there are two main cases where mass cannot be considered constant:

1. At velocities comparable to the speed of light in a vacuum, mass is not constant. The second law in its original form remains valid even then, but the expression for momentum changes. This is handled by the theory of relativity, which does not fall under Newtonian mechanics.
2. Rockets eject fuel at high velocities, so their mass decreases during motion. The original form formulated with momentum is used to describe rocket motion.

## The Concept of Momentum

> **The product of an object's mass and its velocity is called linear momentum. Symbol: $I$, unit: $\text{kg} \cdot \text{m/s}$. Momentum is a vector quantity that points in the direction of velocity.**

$$
\vec{I} = m \cdot \vec{v}
$$

The original formulation of the second law written with momentum is the formula shown above.

## Conservation of Momentum for a Point Mass

If the net force is zero, then the change in momentum is also zero. This means that:

$$
\vec{I} = \vec{I}_0
$$

If the mass of the body is also constant, then:

$$
m = m_0
$$

$$
m \cdot \vec{v} = m_0 \cdot \vec{v}_0
$$

Therefore:

$$
\vec{v} = \vec{v}_0
$$

Thus, the body performs rectilinear uniform motion or remains at rest. We have therefore recovered the first law, which is valid only in an inertial reference frame. This shows that the original form of the second law applies to inertial reference frames.

## Examples

1. A car with a mass of $1300\text{ kg}$ accelerates on a straight road from a speed of $20.0\text{ }\frac{\text{m}}{\text{s}}$ to a speed of $30.0\text{ }\frac{\text{m}}{\text{s}}$ in a duration of $2.00\text{ s}$. What is the initial momentum? What is the momentum at the end of the acceleration? What is the accelerating force? Calculate the acceleration and the distance covered during the acceleration! Friction and air resistance are negligible.

$$
I_0 = m \cdot v_0 = 1300 \cdot 20.0 = 26,000\text{ }\frac{\text{kg} \cdot \text{m}}{\text{s}}
$$

$$
I = m \cdot v = 1300 \cdot 30.0 = 39,000\text{ }\frac{\text{kg} \cdot \text{m}}{\text{s}}
$$

$$
F_e = \frac {I - I_0} {t} = \frac {39,000 - 26,000} {2} = 6500\text{ N} = 6.50\text{ kN}
$$

$$
F_e = m \cdot a
$$

$$
a = \frac {F_e} {m} = \frac {6500} {1300} = 5.00\text{ }\frac{\text{m}}{\text{s}^2}
$$

$$
s = v_0 \cdot t + \frac {a} {2} \cdot t^2 = 20.0 \cdot 2 + \frac {5} {2} \cdot 2^2 = 50.0\text{ m}
$$

2. The engines of a fighter jet exert a force of $76\text{ kN}$ at takeoff. The mass of the jet is $18,000\text{ kg}$. How much time does it take for the jet to take off if it must accelerate from rest to a speed of $80.0\text{ }\frac{\text{m}}{\text{s}}$? What is the jet's momentum at the moment of takeoff? What is the acceleration and the length of the runway required for takeoff?

$$
I = m \cdot v = 18,000 \cdot 80.0 = 1,440,000\text{ }\frac{\text{kg} \cdot \text{m}}{\text{s}}
$$

$$
I_0 = 0
$$

$$
F_e = \frac {I - I_0} {t}
$$

$$
76,000 = \frac {1,440,000} {t}
$$

$$
t = \frac {1,440,000} {76,000} \approx 18.95\text{ s}
$$

$$
a = \frac {v - v_0} {t} = \frac {80.0 - 0} {18.95} \approx 4.222\text{ }\frac{\text{m}}{\text{s}^2}
$$

$$
s = \frac {a} {2} \cdot t^2 = \frac {4.222} {2} \cdot 18.95^2 \approx 758\text{ m}
$$

---

## Problems

**1. Momentum of the Fastest Mammal**
What is the momentum of a cheetah with a mass of $45\text{ kg}$ when it runs after its prey at a constant speed of $108\text{ km/h}$?

**2. Stopping a Ball at the Goal**
A football with a mass of $0.4\text{ kg}$ flies toward the goal at a speed of $15\text{ }\frac{\text{m}}{\text{s}}$. The goalkeeper catches the ball and brings it to a complete stop in $0.1\text{ s}$. What average force did the goalkeeper exert on the ball during the braking phase?

**3. Tennis Serve**
During a serve, a tennis player accelerates a ball with a mass of $60\text{ g}$ from $0$ to $180\text{ km/h}$. The contact time of the hit is $5\text{ milliseconds}$ ($0.005\text{ s}$). Determine the change in the ball's momentum and the average force exerted by the racket!

**4. Braking a Freight Train**
A freight train with a mass of $2000\text{ tonnes}$ travels on the tracks at a speed of $54\text{ km/h}$. What constant braking force is required to bring the train to a complete stop in exactly $60\text{ seconds}$?

**5. Satellite Orbit Correction**
A satellite with a mass of $600\text{ kg}$ performs an orbit correction in space. Its engine exerts a constant force of $1200\text{ N}$ in the direction of motion for $5\text{ seconds}$. By how much did the satellite's momentum and velocity change by the end of the maneuver?
