# Inclined Plane with Friction *

## Static Friction Force on the Inclined Plane

### Experiment
[The relationship between inclination angle and friction forces (Experimental video)](https://www.youtube.com/watch?v=dGQS1j_aTj8)

### Simulation
[Object on an inclined plane in equilibrium due to static friction force interactive simulator](https://alexerdei73.github.io/physics-engine/project/#ef6ee12e-a1f2-400e-b6ce-7815f010aa4f)

### Relationship Between the Inclination Angle and the Coefficient of Static Friction

In an inertial reference frame fixed to the Earth, the component of the gravitational force acting along the inclined plane (pulling it down) is:

$$
F = m \cdot g \cdot \sin \alpha
$$

The magnitude of the constraint force perpendicular to the surface of the incline is:

$$
K = m \cdot g \cdot \cos \alpha
$$

For the static friction force arising between the surfaces, it is generally true that:

$$
F_t \leqslant \mu_t \cdot K
$$

As long as the object is in static equilibrium (does not move), the static friction force is precisely equal to the gravitational force component along the incline:

$$
F_t = F
$$

Let's substitute the components into the inequality of the static friction condition:

$$
m \cdot g \cdot \sin \alpha \leqslant \mu_t \cdot m \cdot g \cdot \cos \alpha
$$

Since the mass $m$ of the object and the acceleration due to gravity $g$ appear on both sides, we can simplify the expression to get:

$$
\sin \alpha \leqslant \mu_t \cdot \cos \alpha
$$

Dividing both sides by the positive value of $\cos \alpha$ (since $\alpha < 90^\circ$), we arrive at the desired relationship:

$$
\tan \alpha \leqslant \mu_t
$$

This highly important result shows that **if the tangent of the inclination angle does not exceed the coefficient of static friction, the object will not slip and remains at rest, regardless of its mass**. The threshold limit state of slipping (the maximum inclination angle) is determined by the state of equality: $\tan \alpha_{\text{max}} = \mu_t$.

### Example
An object with a mass of $0.1\text{ kg}$ is located on an inclined plane that is $2.00\text{ m}$ high and $6.00\text{ m}$ wide. What angle does the incline enclose with the horizontal? What is the force pulling down along the incline and what is the constraint force? What is the maximum static friction force if $\mu_t = 0.5$? At what inclination angle does the object slip? The acceleration due to gravity is $g = 9.81\text{ }\frac{\text{m}}{\text{s}^2}$.

Based on the geometry of the incline, the tangent of the inclination angle is:

$$
\tan \alpha = \frac{2.00}{6.00} \approx 0.3333 \implies \alpha \approx 18.43^\circ
$$

The magnitude of the gravitational force component along the incline:

$$
F = m \cdot g \cdot \sin \alpha = 0.1 \cdot 9.81 \cdot \sin(18.43^\circ) \approx 0.3101\text{ N}
$$

The magnitude of the constraint force perpendicular to the incline:

$$
K = m \cdot g \cdot \cos \alpha = 0.1 \cdot 9.81 \cdot \cos(18.43^\circ) \approx 0.9307\text{ N}
$$

Let's calculate the maximum possible value of the static friction force:

$$
F_{t,\text{max}} = \mu_t \cdot K = 0.5 \cdot 0.9307\text{ N} \approx 0.4654\text{ N}
$$

Since the maximum static friction force ($0.4654\text{ N}$) is greater than the force pulling the object downward ($0.3101\text{ N}$), friction can prevent motion, so the object remains at rest.

Determine the critical angle where the object would just slip:

$$
\tan \alpha_{\text{max}} = \mu_t = 0.5 \implies \alpha_{\text{max}} \approx 26.57^\circ
$$

## Friction Force on the Inclined Plane (In Motion)

### Simulation
[Object sliding down an inclined plane when there is friction interactive simulator](https://alexerdei73.github.io/physics-engine/project/#310ef527-8324-47b6-a1bd-ac3682ef52bb)

### Calculating the Acceleration

If the inclination angle of the plane exceeds the threshold limit of static friction, the object slips and moves downward with acceleration. The sliding friction force arising during motion depends on the coefficient of sliding friction ($F_s = \mu \cdot K$). Let's write the net force along the incline:

$$
F = m \cdot g \cdot \sin \alpha
$$

$$
K = m \cdot g \cdot \cos \alpha
$$

$$
F_e = F - F_s = m \cdot g \cdot \sin \alpha - \mu \cdot K = m \cdot g \cdot \sin \alpha - \mu \cdot m \cdot g \cdot \cos \alpha
$$

Apply Newton's second law ($F_e = m \cdot a$):

$$
m \cdot a = m \cdot g \cdot \sin \alpha - \mu \cdot m \cdot g \cdot \cos \alpha
$$

Since the mass $m$ of the object appears in every term of the equation, we can cancel it out. Thus, the uniform acceleration of the sliding object is:

$$
a = g \cdot \sin \alpha - \mu \cdot g \cdot \cos \alpha
$$

From this relationship, it can be seen that the acceleration of the sliding object – similar to free fall – is **completely independent of the object's mass**.

### Example
The height of an inclined plane is $4.00\text{ m}$ and its horizontal width is $6.00\text{ m}$. What is the inclination angle of the plane? The mass of the object placed on the incline is $0.1\text{ kg}$. What is the force pulling down along the incline and the perpendicular constraint force? What is the acceleration of the sliding object if the coefficient of sliding friction is $0.5$? The acceleration due to gravity is $g = 9.81\text{ }\frac{\text{m}}{\text{s}^2}$.

Determining the inclination angle:

$$
\tan \alpha = \frac{4.00}{6.00} \approx 0.6667 \implies \alpha \approx 33.69^\circ
$$

The force component along the incline:

$$
F = m \cdot g \cdot \sin \alpha = 0.1 \cdot 9.81 \cdot \sin(33.69^\circ) \approx 0.5442\text{ N}
$$

The constraint force perpendicular to the surface:

$$
K = m \cdot g \cdot \cos \alpha = 0.1 \cdot 9.81 \cdot \cos(33.69^\circ) \approx 0.8162\text{ N}
$$

The sliding friction force generated during motion:

$$
F_s = \mu \cdot K = 0.5 \cdot 0.8162 \approx 0.4081\text{ N}
$$

The net force accelerating the object:

$$
F_e = F - F_s = 0.5442 - 0.4081 = 0.1361\text{ N}
$$

From Newton's second law ($F_e = m \cdot a$), the value of the acceleration is:

$$
0.1361 = 0.1 \cdot a \implies a = \frac{0.1361}{0.1} \approx 1.361\text{ }\frac{\text{m}}{\text{s}^2}
$$

Rounded to three significant figures, the object slides downward with a constant acceleration of $1.36\text{ }\frac{\text{m}}{\text{s}^2}$.

---

## Problems

1. The vertical height of an inclined plane is $3.00\text{ m}$, and the actual (slant) length of the incline is $5.00\text{ m}$. Calculate the inclination angle of the plane with the horizontal, as well as the downward force along the incline for an object with a mass of $0.200\text{ kg}$!
2. During an experiment, we observe that an object starts to slip exactly when the inclination angle of the plane is raised to $20.0^\circ$. Determine the value of the coefficient of static friction ($\mu_t$) between the surfaces!
3. An object with a mass of $0.500\text{ kg}$ slides down an inclined plane with an inclination angle of $30.0^\circ$. The coefficient of sliding friction between the surfaces is $0.3$. Determine the numerical magnitude of the following forces: force along the incline ($F$), constraint force ($K$), friction force ($F_s$), and net force ($F_e$)!
4. With what constant acceleration does an arbitrary object slide down an inclined plane with an inclination angle of $25.0^\circ$ if the value of the coefficient of sliding friction is $0.2$? Does the obtained acceleration depend on the object's mass?
5. In a warehouse, crates are slid down a smooth incline. What should be the minimum inclination angle of the plane so that the crates slip and start moving downward by themselves if the value of the coefficient of static friction is $\mu_t = 0.4$?

*During the calculations, consider the value of the acceleration due to gravity to be* $g = 9.81\text{ }\frac{\text{m}}{\text{s}^2}$*.*