# Work

## The Concept of Work

In everyday life, by work we most often mean going to our workplace. In physics, however, work is a much more precisely defined concept.

> **We speak of work being done if a body moves in the direction of a force under its influence, or if the displacement has a component in the direction of the force.**

### Examples
1. Lifting a weight at a constant speed. In this case, we exert a force against gravity that is equal to the gravitational force of the body. The displacement occurs in the direction of the exerted lifting force.
2. Accelerating a body. In this case, to cause acceleration, we must exert a force on the body. The body moves and accelerates in the direction of the force.
3. Stretching a spring with a force. In this case, one end of the spring is fixed, and the other end is pulled with a force, and the spring stretches under the influence of the force, meaning the endpoint moves in the direction of the force.

### Counter-examples
1. A weight on a table does not move. In this case, although the table exerts a constraint force, no work is done due to the lack of displacement.
2. Holding a heavy body in one place. In this case, we become biologically tired, but we do not perform work in the physical sense, since a table could also hold the body. There is no displacement.
3. Walking at a constant speed on flat ground with a heavy weight in our hands. In this case, too, no physical work is done because the holding force we exert points vertically upward, whereas the covered path is horizontal. Since the displacement is perpendicular to the direction of the force, the displacement has no component in the direction of the force.

## Calculating Work

> **Work is the product of the force and the displacement component in the direction of the force. Its unit is the joule (J).**

$$
W = \vec{F} \cdot \Delta \vec{r}
$$

This formula is valid for a force of constant magnitude and direction, meaning neither the direction nor the magnitude of the force changes during the displacement.

$$
W = F \cdot |\Delta \vec{r}| \cdot \cos \alpha
$$

Here, the angle $\alpha$ is the angle enclosed by the force and displacement vectors, which is not greater than $180^\circ$. If the motion is rectilinear and no change of direction occurs during the process, the length of the covered path ($s$) is equal to the magnitude of the displacement. In this case:

$$
W = F \cdot s \cdot \cos \alpha
$$

### Special cases:

1. The force points exactly in the direction of the displacement. Then $\alpha = 0^\circ$, so $\cos(0^\circ) = 1$, and the work formula is:

$$
W = F \cdot s
$$

2. The force and the displacement are perpendicular to each other, i.e., $\alpha = 90^\circ$. Then the work done is zero:

$$
W = 0
$$

since $\cos(90^\circ) = 0$.

3. The force and the displacement point in opposite directions. Then $\alpha = 180^\circ$, meaning the work has a negative sign:

$$
W = -F \cdot s
$$

since $\cos(180^\circ) = -1$.

Work is a scalar quantity. When we multiply two vectors in mathematics such that the resulting quantity is a scalar, we refer to it as the **scalar product** (or dot product) of the vectors.

### Examples

1. A body with a mass of $200\text{ kg}$ is lifted vertically to a height of $15.0\text{ m}$ by a crane. The lifting takes place slowly, at a constant speed. What is the gravitational force, what is the weight, what force do we lift with, and what is the work done? Let the acceleration due to gravity be $g = 9.81\text{ }\frac{\text{m}}{\text{s}^2}$.

The gravitational force acting on the body:

$$
F_g = m \cdot g = 200 \cdot 9.81 = 1962\text{ N}
$$

Since the lifting occurs at a constant speed (without acceleration), the magnitude of the lifting force is equal to the constraint force and the gravitational force:

$$
F = N = F_g = 1962\text{ N}
$$

The work done by the crane based on the displacement along the force direction:

$$
W = F \cdot s = 1962 \cdot 15 = 29,430\text{ J} = 29.43\text{ kJ}
$$

Thus, the work done during the lifting is $29.43\text{ kJ}$.

2. A body with a mass of $200\text{ kg}$ is rolled at a constant speed up an incline (slope) that is $15.0\text{ m}$ high and $90.0\text{ m}$ long. The incline is a flat surface, and rolling resistance can be neglected. What is the gravitational force? How many Newtons of force does the body exert on the incline? What force is required to push the body? What is the work done by the pushing force, the gravitational force, and the constraint force?

The magnitude of the gravitational force is identical to the previous example:

$$
F_g = m \cdot g = 200 \cdot 9.81 = 1962\text{ N}
$$

The sine of the inclination angle resulting from the geometry of the incline:

$$
\sin \alpha = \frac{15}{90} \approx 0.1667 \implies \alpha \approx 9.594^\circ
$$

The magnitude of the constraint force $N$ perpendicular to the incline (with which the body presses against the surface):

$$
N = m \cdot g \cdot \cos \alpha = 200 \cdot 9.81 \cdot \cos(9.594^\circ) \approx 1935\text{ N}
$$

The pushing force along the incline required to move the body uniformly:

$$
F = m \cdot g \cdot \sin \alpha = 200 \cdot 9.81 \cdot 0.1667 \approx 327.1\text{ N}
$$

The work done by the pushing force moving the body upward along the length of the incline ($s = 90.0\text{ m}$):

$$
W = F \cdot s = 327.1 \cdot 90 = 29,439\text{ J} \approx 29.44\text{ kJ}
$$

The work done by the gravitational force (since the angle enclosed by gravity and the direction of motion is $90^\circ + \alpha = 99.594^\circ$):

$$
W_G = F_g \cdot s \cdot \cos(90^\circ + \alpha) = 1962 \cdot 90 \cdot \cos(99.594^\circ) \approx -29,430\text{ J} = -29.43\text{ kJ}
$$

We can calculate this gravitational work more simply, since the vertical displacement opposite to the gravitational force is the height $h$:

$$
W_G = -F_g \cdot h = -1962 \cdot 15 = -29,430\text{ J} = -29.43\text{ kJ}
$$

The work done by the constraint force $N$ perpendicular to the surface is zero because it is perpendicular to the direction of motion:

$$
W_N = N \cdot s \cdot \cos(90^\circ) = 0\text{ J}
$$

We can see that the lifting work done on the incline matches precisely what it would have been if we had lifted the body vertically to the same height without an incline. The incline saves us force (it requires less force to push than to lift), but it does not save work.

Therefore, the work of the gravitational force is completely independent of the shape of the path; it depends solely on the positions of the starting and ending points of the displacement (the difference in height).

3. The mass of a car is $1300\text{ kg}$. Starting from rest, it accelerates uniformly to a speed of $20.0\text{ }\frac{\text{m}}{\text{s}}$ in $8.00\text{ s}$. What is the acceleration, over what distance does the acceleration occur, what is the accelerating force, and how much work does the engine perform during the acceleration? Losses and driving resistances can be neglected.

The uniform acceleration of the car:

$$
a = \frac{v - v_0}{t} = \frac{20 - 0}{8} = 2.50\text{ }\frac{\text{m}}{\text{s}^2}
$$

The length of the acceleration phase based on the quadratic distance law:

$$
s = \frac{a}{2} \cdot t^2 = \frac{2.50}{2} \cdot 8^2 = 0.125 \cdot 64 = 80\text{ m}
$$

The magnitude of the net force required for acceleration:

$$
F = F_{\text{net}} = m \cdot a = 1300 \cdot 2.50 = 3250\text{ N}
$$

The acceleration work performed by the engine:

$$
W = F \cdot s = 3250 \cdot 80 = 260,000\text{ J} = 260\text{ kJ}
$$

---

## Practice Problems

**1. Pulling a Crate on the Floor**
A crate with a mass of $50\text{ kg}$ is pulled along a horizontal floor for a length of $10\text{ m}$ at a constant speed. The coefficient of sliding friction between the surfaces is $0.25$. How much work do we perform during the towing of the crate?

**2. Moving an Object with a Constant Force**
A constant force of magnitude $20\text{ N}$ is exerted on an object with a mass of $0.3\text{ kg}$, while the object moves exactly $5\text{ m}$ in the direction of the acting force. How much work do we perform during the process?

**3. Pushing a Box with an Oblique Force**
A worker pushes a box with a force of $100\text{ N}$ over a length of $12\text{ m}$ on a horizontal floor. The pushing force exerted by him encloses an angle of $30^\circ$ with the horizontal plane. How much work does the worker perform while pushing the box away?

**4. Displacement Under an Oblique Force Influence**
A constant force of magnitude $40\text{ N}$ acts on an object, enclosing an angle of $15^\circ$ with the horizontal. Under the influence of the force, the object moves exactly $5\text{ m}$ in the horizontal direction. What is the work done on the object?

**5. Vertical Lifting of Loads**
A box with a mass of $20\text{ kg}$ must be lifted to a height of $3\text{ m}$ at a constant speed. How much lifting work do we perform during the process?

*To solve the problems, consider the value of the acceleration due to gravity to be* $g = 9.81\text{ }\frac{\text{m}}{\text{s}^2}$*.*
