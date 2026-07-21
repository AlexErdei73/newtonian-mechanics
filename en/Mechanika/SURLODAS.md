# Friction

## Experiment and Simulation

[Sliding friction vanishes during free fall (Experimental video)](https://www.youtube.com/shorts/qBAdyNVEi_c)

[Sliding friction and free fall interactive simulator](https://alexerdei73.github.io/physics-engine/project/#186187e3-eb58-4a34-a098-e4c35f6f0323)

The experiment and the interactive simulation clearly demonstrate that a sliding friction force arises between surfaces moving relative to each other whenever a normal constraint force presses them together. This force acts parallel to the surface and attempts to oppose the relative sliding of the surfaces. If no other external force acts on the sliding object parallel to the surface, it slows down uniformly and comes to a complete stop.

However, no sliding friction force exists between surfaces when no external influence presses them together – as observed during the experiment conducted in a state of weightlessness during free fall.

## Experiments on the Properties of Friction

Let's watch the following videos, which present the various properties and laws of friction in detail!

[Measuring friction and its relationship with weight](https://www.youtube.com/watch?v=9w-ORd14Ucs)

[Independence of friction from the surface area of contact](https://www.youtube.com/watch?v=idYX7kkRqbs)

[The role of normal constraint force in friction](https://www.youtube.com/watch?v=oEaxJ7NqNPA)

[Determining the coefficient of friction for different surfaces](https://www.youtube.com/watch?v=oxtBa90bpww)

[The difference between static and kinetic friction](https://www.youtube.com/watch?v=z9pxjS924AQ)

## Sliding Friction

Based on experimental observations, we can conclude that surfaces sliding on each other exert a force parallel to the surface that decelerates the relative motion. This force is called the **sliding friction force** (or kinetic friction force).

The magnitude of the sliding friction force depends solely on the material quality of the surfaces in contact and the normal constraint force $N$ pressing the surfaces together. It does not, however, depend on the apparent size of the contact surface area.

> **The magnitude of the sliding friction force is directly proportional to the force pressing the surfaces together perpendicularly. The proportionality factor is the coefficient of friction ($\mu$), which is a dimensionless number characteristic of the material quality of the surfaces (its value usually falls between $0$ and $1$). The friction force opposes the relative motion of the surfaces and always acts parallel to the surface.**

$$
F_k = \mu \cdot N
$$

### Example
In the case presented in the simulation, an object with a mass of $0.05\text{ kg}$ is launched with an initial velocity of $5.00\text{ }\frac{\text{m}}{\text{s}}$ on a horizontal surface. The coefficient of friction between the surfaces is $0.5$. What is the gravitational force acting on the object? What is the resulting friction force and the acceleration of the object? How much time does it take for the object to stop, and over what distance? The acceleration due to gravity is $g = 9.81\text{ }\frac{\text{m}}{\text{s}^2}$.

![Friction brakes an object moving on a horizontal surface](Kepek/surlodasfekezvizszintestalajon.png)

The magnitude of the gravitational force acting on the object:

$$
F_g = m \cdot g = 0.05 \cdot 9.81 = 0.4905\text{ N}
$$

Since the ground is horizontal and the object does not move vertically, the perpendicular constraint force pressing the surfaces together is equal in magnitude to the gravitational force:

$$
N = F_g = 0.4905\text{ N}
$$

The magnitude of the sliding friction force:

$$
F_k = \mu \cdot N = 0.5 \cdot 0.4905 = 0.24525\text{ N}
$$

According to Newton's second law ($F_{\text{net}} = m \cdot |a|$), since only the friction force acts on it on the horizontal plane:

$$
0.24525 = 0.05 \cdot |a|
$$

$$
|a| = \frac {0.24525} {0.05} = 4.905\text{ }\frac {\text{m}} {\text{s}^2}
$$

Since friction opposes the motion, the signed value of the acceleration relative to the direction of motion is negative: $a = -4.905\text{ }\frac {\text{m}} {\text{s}^2}$.

The duration until coming to a stop ($v = 0\text{ }\frac{\text{m}}{\text{s}}$), calculated from the fundamental acceleration formula:

$$
a = \frac {v - v_0} {t}
$$

$$
-4.905 = \frac {0 - 5} {t}
$$

$$
t = \frac {-5} {-4.905} \approx 1.019\text{ s}
$$

Rounded to three significant figures, the object stops in $1.02\text{ s}$. The length of the stopping distance based on the quadratic distance law:

$$
s = v_0 \cdot t + \frac {a} {2} \cdot t^2 = 5 \cdot 1.019 + \frac {-4.905} {2} \cdot 1.019^2 \approx 5.095 - 2.547 \approx 2.548\text{ m}
$$

The object comes to a stop over a distance of approximately $2.55\text{ m}$.

## Static Friction Force

The other fundamental type of friction is **static friction**. In this case, it is also true that the surfaces exert a force parallel to each other, but the objects do not move relative to one another because the static force prevents slipping. The easiest way to determine the direction of this force is to mentally remove the static friction force and calculate the direction in which the object's acceleration would be due to the remaining forces. The real static friction force points in the opposite direction of this virtual motion.

The static friction force cannot increase beyond a maximum threshold limit value; if the external pulling or pushing force exceeds this, the surfaces slip, set into motion, and switch to sliding friction. If a force smaller than the maximum value is sufficient to prevent slipping, the static friction force will be precisely equal to the net external force forcing the motion.

A relationship similar to sliding friction applies to the maximum static friction force:

$$
F_{s,\text{max}} = \mu_s \cdot N
$$

That is, it is generally true for the static force that:

$$
F_s \leqslant \mu_s \cdot N
$$

We have seen from experiments that for a given set of surfaces and force $N$, a larger force is required to initiate slipping than to maintain motion. In other words, the coefficient of static friction is greater than (or equal to) the coefficient of sliding friction:

$$
\mu \leqslant \mu_s
$$

### Example
An object with a mass of $0.500\text{ kg}$ is placed on horizontal ground, and we attempt to push it with a horizontal force of magnitude $3.00\text{ N}$. The coefficient of static friction between the surfaces is $\mu_s = 0.7$, and the coefficient of sliding friction is $\mu = 0.5$. What is the friction force acting on the object and the acceleration of the object? Let's calculate the same quantities if the horizontal pushing force is increased to $4.00\text{ N}$.

The gravitational force and the normal constraint force on the horizontal ground are:

$$
F_g = m \cdot g = 0.5 \cdot 9.81 = 4.905\text{ N}
$$

$$
N = F_g = 4.905\text{ N}
$$

Let's calculate the maximum possible value of the static friction force:

$$
F_{s,\text{max}} = \mu_s \cdot N = 0.7 \cdot 4.905 \approx 3.434\text{ N}
$$

Since the maximum static force ($3.434\text{ N}$) is greater than the $3.00\text{ N}$ pushing force we applied, static friction can fully balance the external influence. Thus, the net force acting on the object is zero, the acceleration is $0\text{ }\frac{\text{m}}{\text{s}^2}$, and the object remains at rest. The magnitude of the occurring static friction force in this phase is exactly $3\text{ N}$, and its direction is opposite to the pushing force.

If we increase the pushing force to $4.00\text{ N}$, this value already exceeds the maximum limit of the static force ($3.434\text{ N}$). The object then slips and sets into motion, so from this point on, we must calculate using the sliding friction force:

$$
F_k = \mu \cdot N = 0.5 \cdot 4.905 \approx 2.453\text{ N}
$$

The magnitude of the horizontal net force ensuring motion is:

$$
F_{\text{net}} = F - F_k = 4 - 2.453 = 1.547\text{ N}
$$

From Newton's second law ($F_{\text{net}} = m \cdot a$), the acceleration of the moving object is:

$$
1.547 = 0.5 \cdot a
$$

$$
a = \frac{1.547}{0.5} = 2 \cdot 1.547 \approx 3.094\text{ }\frac {\text{m}} {\text{s}^2}
$$

After slipping, the object moves with a constant acceleration of approximately $3.09\text{ }\frac{\text{m}}{\text{s}^2}$.

---

## Practice Problems

1. A ice hockey player hits a puck with a mass of $0.170\text{ kg}$ lying on horizontal ice, giving it an initial velocity of $15.0\text{ }\frac{\text{m}}{\text{s}}$. The coefficient of sliding friction between the puck and the ice surface is $\mu = 0.05$. What is the sliding friction force acting on the puck, and how far does the puck slide before coming to a complete stop?
2. A block with a mass of $2.00\text{ kg}$ is placed on a horizontal tabletop and pulled horizontally using a spring balance. We observe that the object sets into motion exactly at the moment the display of the spring balance reaches a value of $8.00\text{ N}$. What is the coefficient of static friction ($\mu_s$) between the wood and the tabletop surface?
3. We want to push a heavy wardrobe with a mass of $50.0\text{ kg}$ across a horizontal parquet floor. The coefficient of static friction between the surfaces is $0.6$, and the coefficient of sliding friction is $0.4$. What horizontal force must we apply to the wardrobe to just get it moving? Once the wardrobe is already in motion, what constant force is required to keep pushing it at a uniform, constant speed?
4. A car performs an emergency braking maneuver on a horizontal asphalt road, causing the wheels to lock completely (slide). The coefficient of sliding friction between the rubber and the dry asphalt is $0.7$. What is the car's deceleration during the slide? Does the magnitude of the deceleration depend on the mass of the vehicle?
5. A crate with a mass of $10.0\text{ kg}$ is pulled along the floor with a horizontal force of $60\text{ N}$. The coefficient of sliding friction between the crate and the floor is $0.3$. Calculate the sliding friction force acting on the crate, as well as the acceleration of the crate's motion!

*During the calculations, consider the value of the acceleration due to gravity to be* $g = 9.81\text{ }\frac{\text{m}}{\text{s}^2}$*.*