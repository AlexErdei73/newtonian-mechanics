# The Inclined Plane *

## Condition for Equilibrium

In a state of equilibrium, both the velocity and acceleration of the studied objects are zero. This state remains unchanged until the external influences acting on the object change.

According to Newton's second law, the net force acting on an object in equilibrium is zero, meaning the net force is a zero vector:

$$
a = 0
$$

$$
F_e = m \cdot a = 0
$$

$$
\vec{F}_e = \vec{F}_1 + \vec{F}_2 + \dots + \vec{F}_n = \vec{0}
$$

Vector addition in a fixed coordinate system means the signed addition of the respective axis coordinates. Therefore, the condition for equilibrium can be written component-wise as follows:

$$
F_{ex} = F_{1x} + F_{2x} + \dots + F_{nx} = 0
$$

and

$$
F_{ey} = F_{1y} + F_{2y} + \dots + F_{ny} = 0
$$

## Equilibrium on the Inclined Plane

### Experiment
[Equilibrium of an object with a weight of 10 N on a 30-degree inclined plane (Experimental video)](https://www.youtube.com/watch?v=6w6yRr7y9n8)

The experiment presented in the video demonstrates two basic physical facts:
1. To hold an object with a weight of $10\text{ N}$ placed on a $30^\circ$ inclined plane, a holding force of exactly $5\text{ N}$ directed upward and parallel to the inclined plane is required.
2. The surface of the inclined plane exerts a perpendicular force on the object, known as the normal or constraint force, which prevents the object from penetrating the material of the incline. In this case, this perpendicular force is smaller than the total weight of the object.

If these two constraint forces are replaced by external forces (for example, two spring balances) of exactly the same magnitude and direction, the inclined plane itself can be removed: the object will still float perfectly in equilibrium in space. This proves that the two components exactly balance the vertically downward weight of the object.

### Simulation
[Interactive simulator of an object with a weight of 1 N on a 30-degree inclined plane](https://alexerdei73.github.io/physics-engine/project/#e22ed2ae-1e97-40f2-858d-f7a8feafd961)

During the simulation, a spring aligned parallel to the inclined plane keeps an object with a weight of $1\text{ N}$ in equilibrium on a perfectly frictionless $30^\circ$ incline. Following the launch, the spring stretches slightly, and after a few seconds of decaying oscillation, static equilibrium is established. Based on the software's measurements, the parallel force exerted by the spring is $0.5\text{ N}$, and the perpendicular constraint force provided by the incline is $0.8660\text{ N}$. These values are exactly one-tenth of those seen in the experiment, since the weight of the studied object is also precisely one-tenth of the previous one.

![Forces on the inclined plane](Kepek/erokalejton.png)
![Object data on the inclined plane](Kepek/testadataialejton.png)
![Spring data on the inclined plane](Kepek/rugoeroalejton.png)
![Force exerted by the inclined plane](Kepek/kenyszereroalejton.png)

The stabilization of the spring characteristics over time is illustrated by the graph below:

![Changes in spring data over time](Kepek/rugoadataiazidofuggvenyeben.png)

The red curve shows the current length of the spring, while the green curve shows the evolution of the elastic force over time.

## Derivation of the Formula

Let us denote the gravitational force acting on the object by $\vec{G}$, the perpendicular constraint force exerted by the surface of the incline by $\vec{K}$, and the holding force parallel to the incline (which prevents sliding) by $\vec{F}$. Let us choose a coordinate system whose $x$-axis points downward parallel to the plane of the incline, and whose $y$-axis points perpendicularly to the incline in the direction of the constraint force $\vec{K}$.

Since the object is in equilibrium, the vector sum of the three forces is a zero vector:

$$
\vec{F} + \vec{K} + \vec{G} = \vec{0}
$$

Let's write the vector equation broken down into axial components:

$$
F_x + K_x + G_x = 0
$$

$$
F_y + K_y + G_y = 0
$$

Based on the chosen axial directions, the coordinates of the forces $\vec{F}$ and $\vec{K}$ are as follows:

$$
F_x = -F,\ \ F_y = 0
$$

$$
K_x = 0,\ \ K_y = K
$$

The vertically downward gravitational force $\vec{G}$ must be resolved into an $x$ component parallel to the plane of the incline, as well as a perpendicular $y$ component. If we draw the right-angled triangle needed for the resolution, it can be geometrically seen that the angle of inclination $\alpha$ of the plane appears exactly as the angle opposite to the component $G_x$ parallel to the incline. The reason for this is that the sides of the angle are perpendicular to the sides of the base angle of the incline, and acute angles with perpendicular sides are equal to each other.

Based on the definition of trigonometric functions, we can write:

$$
\frac {G_x} {G} = \sin \alpha \implies G_x = G \cdot \sin \alpha
$$

Similarly for the perpendicular component:

$$
\frac {|G_y|} {G} = \cos \alpha \implies G_y = -G \cdot \cos \alpha
$$

The coordinate $G_y$ received a negative sign because its direction is opposite to the chosen $y$-axis (and thus opposite to the constraint force $\vec{K}$). Substitute these components into the initial equilibrium equations:

$$
-F + 0 + G \cdot \sin \alpha = 0
$$

$$
0 + K + (-G \cdot \cos \alpha) = 0
$$

By rearranging the equations, we obtain the fundamental formulas for the forces acting on an inclined plane:

$$
F = G \cdot \sin \alpha = m \cdot g \cdot \sin \alpha
$$

$$
K = G \cdot \cos \alpha = m \cdot g \cdot \cos \alpha
$$

### Example
If the weight of the object is $1\text{ N}$ and the angle of inclination is $30^\circ$, then based on the formulas:

$$
F = G \cdot \sin \alpha = 1\text{ N} \cdot \sin(30^\circ) = 1\text{ N} \cdot 0.5 = 0.5\text{ N}
$$

$$
K = G \cdot \cos \alpha = 1\text{ N} \cdot \cos(30^\circ) = 1\text{ N} \cdot 0.8660 = 0.8660\text{ N}
$$

Since the constraint force $\vec{K}$ and the parallel holding force $\vec{F}$ are perpendicular to each other, let us determine the magnitude of their vector sum as a check using the Pythagorean theorem:

$$
\sqrt{F^2 + K^2} = \sqrt {0.5^2 + 0.8660^2} = \sqrt{0.25 + 0.75} = \sqrt{1} = 1.0000\text{ N} = G
$$

The vector resultant of the derived forces $\vec{F}$ and $\vec{K}$ is numerically exactly equal to the gravitational force $\vec{G}$ acting on the object, and its direction points vertically upward. Thus, these external forces together can perfectly balance gravity, just as we experience in physical reality.

## Problems

1. A small cart with a mass of $5.00\text{ kg}$ stands at rest on a frictionless inclined plane with an angle of inclination of $20.0^\circ$. What is the holding force $F$ parallel to the incline that prevents the cart from rolling down?
2. An object with a weight of $12.0\text{ N}$ is placed on an inclined plane with an angle of inclination of $40.0^\circ$. What perpendicular constraint force $K$ does the object exert on the surface of the incline?
3. An object is kept in equilibrium by a spring balance fixed parallel to a $35.0^\circ$ inclined plane. The display of the spring balance shows exactly $15.0\text{ N}$ of force. What is the mass of the studied object?
4. The same object with a mass of $8.00\text{ kg}$ is placed first on a $15.0^\circ$ incline, and then on a $45.0^\circ$ incline. How many times does the holding force $F$ parallel to the incline increase on the steeper slope compared to the first state?
5. On a $30.0^\circ$ inclined plane, an object with a mass of $2.50\text{ kg}$ is held by a spring. The spring exerts a force of exactly $12.3\text{ N}$ on the object parallel to the plane of the incline, pointing upward. Is the object in static equilibrium, or does it start moving in one of the directions? (Justify your answer by numerically calculating the gravitational force component along the incline!)

*Throughout the problems, friction between the surfaces is everywhere negligible, and the acceleration due to gravity is* $g = 9.81\text{ }\frac{\text{m}}{\text{s}^2}$*.*