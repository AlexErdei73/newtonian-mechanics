# Measurement of Force

## The Concept of Weight

We have seen that near the surface of the Earth, freely falling objects accelerate vertically downward at the rate of gravitational acceleration. We attribute this to the gravitational force, which the Earth exerts on objects from a distance.

According to Newton's Second Law:

$$
F_{\text{net}} = m \cdot a
$$

$$
F_{\text{net}} = F_g
$$

$$
a = g
$$

Therefore, a gravitational force of:

$$
F_g = m \cdot g
$$

acts on the objects. If an object is in equilibrium, meaning it is not in free fall but is suspended or supported instead, this is only possible if the support or suspension counterbalances the gravitational force. In other words, it exerts an equal but vertically upward-pointing constraint force on the object at the point of contact. In this case, however, the object also exerts a force on the support or suspension that is equal in magnitude to the gravitational force but opposite in direction—meaning it points vertically downward—according to Newton's Third Law. This force is called the weight of the object.

$$
N = F_g = m \cdot g
$$

$$
F_w = N
$$

$$
F_w = m \cdot g
$$

Our first equation expresses that the constraint force exerted by the support or suspension equals the gravitational force, so the object is in equilibrium and does not move. The second equation reflects Newton's Third Law, stating that the weight force and the constraint force are equal in magnitude.

> **The force with which an object presses against its support or pulls on its suspension is called the weight of the object.**

The weight of an object in equilibrium is therefore equal to the magnitude of the gravitational force acting upon it. The weight of a $1\text{ kg}$ mass is $9.81\text{ N}$, which rounds to approximately $10\text{ N}$. From this formula, it also follows that the weight of a $10\text{ dkg}$ mass is approximately $1\text{ N}$.

## The Spring Balance

Force is not only capable of accelerating objects, but it can also change their shape. For example, if we hang an object on a vertical spring, the spring stretches because of the object's weight. Naturally, the greater the weight, the greater the elongation. Since weight in equilibrium is directly proportional to mass, we can create a spring balance by equipping the spring with a scale. This is shown in the experiment, and you can test in the simulation how doubling the mass changes the elongation of the spring.

### Demonstration

[Construction and Use of a Spring Balance](https://www.youtube.com/watch?v=bSg7M2NgKZA)

### Simulation

[The Weight Interactive Simulation](https://alexerdei73.github.io/physics-engine/project/#38c6b933-5bd4-42f2-a59e-1390633a14a3)

## The Dependence of Weight on Acceleration

If an object is not stationary relative to the Earth but moves with acceleration in a vertical direction, its weight will be greater or smaller than the gravitational force acting upon it. Let us examine the motion from an inertial frame of reference fixed to the Earth.

First, let the acceleration of the object point vertically **upward** with a magnitude of $a$. For the object to accelerate upward, according to Newton's equation of motion, the upward-pointing constraint force must be greater than the downward-pointing gravitational force:

$$
F_{\text{net}} = N - F_g = m \cdot a
$$

Expressing the constraint force yields:

$$
N = m \cdot a + F_g = m \cdot a + m \cdot g = m \cdot (a + g)
$$

Since the weight and the constraint force remain equal in magnitude according to Newton's Third Law ($F_w = N$), the weight of the object increases during upward acceleration:

$$
F_w = m \cdot (a + g)
$$

Now let us examine the case where the object accelerates vertically **downward** with an acceleration magnitude of $a$. If the object is merely lowered gently, the downward-pointing gravitational force is greater than the upward-holding constraint force:

$$
F_{\text{net}} = F_g - N = m \cdot a
$$

From this, the constraint force, and thus the reduced weight of the object, can be calculated:

$$
F_w = N = F_g - m \cdot a = m \cdot g - m \cdot a = m \cdot (g - a)
$$

Let us carefully consider how we determine the magnitude of the net force. Since the constraint force and the gravitational force are vectors in opposite directions, the magnitude of the net force is their difference, subtracting the smaller one from the larger one. If the object accelerates upward, the constraint force is the larger one; if it accelerates downward (but its acceleration is less than $g$), the gravitational force is the larger one.

A highly interesting scenario arises if the object is **compelled to accelerate downward at a rate greater than the gravitational acceleration ($a > g$)**. If the object is fixed to a downward-barreling rod or heavily jerked downward by a machine, the gravitational force alone can no longer provide the required large acceleration. For the net force to be large enough downward, the constraint force must reverse its direction: at this point, the constraint force no longer holds the object up but pushes it **vertically downward**. Due to Newton's Third Law, the object then exerts an upward reaction force, meaning that during forced downward acceleration, the weight of the object reverses and will push upward against the support that restricts it.

If the object is allowed to fall freely without external constraints, its acceleration will be precisely the gravitational acceleration ($a = g$). Substituting this into the weight formula for downward-accelerating motion reveals that the weight becomes exactly zero ($F_w = m \cdot (g - g) = 0$). This is the **state of weightlessness**. During free fall, the object exerts no force on any support or suspension, causing both the constraint force and the weight force to disappear completely.

## The State of Weightlessness

### Demonstration

[Professor Walter Lewin's Demonstration of Weightlessness (MIT)](https://www.youtube.com/watch?v=Z07tTuE1mwk&t=27m30s)

In the video, we can observe two highly instructive experiments back-to-back:
1. In the first experiment, the professor holds a plastic bottle filled with water in his hand and jumps off the top of a table. While he is falling freely in the air, he pulls his hand out from under the bottle. The bottle floats freely in space above his hand, proving that it is completely weightless during the free fall phase.
2. In the second experiment, a weight attached to an electronic scale is dropped. The graph recorded by the computer perfectly plots the phases of the process: the initial resting value drops to zero instantly at the beginning of the free fall. When the apparatus reaches a soft pillow, the weight suddenly spikes to several times its normal value due to deceleration (overload), and after the elastic rebound, a short weightless phase can be observed in the air once again.

### Simulation

[Variation of Elastic Force During Free Fall Interactive Simulation](https://alexerdei73.github.io/physics-engine/project#416bad65-3027-47ac-909f-fc53e64fc5a1)

Let us examine the length of the spring and the variation of the elastic force over time by running the simulation! It is highly recommended to plot these quantities on a graph within the software.

> **During free fall—and in every case where an object moves exclusively under the influence of the gravitational force, so that its acceleration matches the gravitational acceleration exactly—the object enters the state of weightlessness.**