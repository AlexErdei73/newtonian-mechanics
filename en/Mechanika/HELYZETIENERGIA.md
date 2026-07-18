# Potential Energy

## Lifting Work

Let us investigate what lifting work depends on. Let us lift an object with a mass of $m$ at a uniform speed near the surface of the Earth from an initial height of $h_0$ to a final height of $h$.

Since the motion is uniform (without acceleration), the magnitude of the lifting force we exert is precisely equal to the gravitational force acting on the object:

$$
F = G = m \cdot g
$$

The mechanical work we perform along the vertical displacement is:

$$
W = F \cdot s = G \cdot (h - h_0) = m \cdot g \cdot h - m \cdot g \cdot h_0 = \Delta (m \cdot g \cdot h)
$$

It can be seen that lifting work is nothing more than the change in the quantity $m \cdot g \cdot h$. This physical state indicator is called **potential energy** (gravitational potential energy). The lifting work is spent on increasing the potential energy of the object.

$$
E_h = m \cdot g \cdot h
$$

$$
W = \Delta E_h
$$

If the object is not lifted but lowered slowly and uniformly, then the force we exert and the displacement point in opposite directions, so our lifting work will have a negative sign. This means that by decreasing its potential energy, the object is capable of performing useful work for the external environment.

## Potential Energy

> **The product of the gravitational force (weight) acting on an object and its height measured from a chosen level is called gravitational potential energy. Symbol: $E_h$ or $E_p$.**

$$
E_h = G \cdot h = m \cdot g \cdot h
$$

### Reference Level

When calculating potential energy, we must always designate a base from which the height $h$ is measured, meaning where the value of potential energy is strictly zero ($h = 0$). This level is called the **reference level** (zero level).

> **The zero level of potential energy is called the reference level. This can be chosen completely arbitrarily in space, but within a given physical problem, all potential energies must be measured strictly relative to this fixed reference level.**

### Conservative and Dissipative Forces

We will see later that elastic potential energy also exists, and gravitational potential energy also has a more general formula valid for interplanetary scales. 

During our studies so far, we could observe that lifting work does not depend on the specific method or path of lifting in ideal, lossless cases (assuming a slow, constant speed movement). It does not matter at all whether the object is lifted straight up, rolled up an incline, or brought to a height using a pulley system. Although the actual path of motion differs in each case, if the starting and ending points are the same, the work done will also be exactly the same.

> **Forces to which a potential energy can be associated are called conservative forces. The work done by such forces depends exclusively on the starting and ending points of the displacement, but is completely independent of the shape of the actual path of motion. Gravitational force is a conservative force.**

> **Non-conservative forces are called dissipative forces. The work done by dissipative forces depends on the shape of the path (and often on the velocity of the object as well); under their influence, mechanical energy is lost, meaning it converts into internal energy (heat). Friction force and drag force are dissipative forces.**

We can speak of potential energy strictly only in the case of conservative force effects.

## Examples

1. A reinforced concrete panel with a mass of $1500\text{ kg}$ is lifted slowly by a crane from an initial height of $5.00\text{ m}$ to a height of $30.0\text{ m}$ with negligible speed. Let the reference level be the ground level. What is the potential energy of the panel initially, what is it at the end of the lifting, and how much lifting work was done by the crane, neglecting frictional losses? The acceleration due to gravity is $g = 9.81\text{ }\frac{\text{m}}{\text{s}^2}$.

The initial potential energy of the panel:

$$
E_{h,0} = m \cdot g \cdot h_0 = 1500 \cdot 9.81 \cdot 5 = 73,575\text{ J} \approx 73.58\text{ kJ}
$$

The final potential energy of the panel:

$$
E_h = m \cdot g \cdot h = 1500 \cdot 9.81 \cdot 30.0 = 441,450\text{ J} = 441.45\text{ kJ}
$$

The useful lifting work done by the crane is the change in potential energy:

$$
W = \Delta E_h = E_h - E_{h,0} = 441.45 - 73.58 = 367.87\text{ kJ} \approx 367.9\text{ kJ}
$$

2. A stone with a mass of $350\text{ g}$ is thrown from a $1.50\text{ m}$ high terrace, and the stone falls to the bottom of a nearby $3.00\text{ m}$ deep pit. Let the reference level be the smooth ground level. What is the potential energy of the stone initially and at the very end of the motion? What would the lifting work be if the stone were hung on a rope passed over a pulley and lowered slowly and uniformly to the bottom of the pit? Losses can be neglected.

Let's convert the mass into kilograms ($350\text{ g} = 0.35\text{ kg}$). The magnitude of the gravitational force acting on the stone:

$$
G = m \cdot g = 0.35 \cdot 9.81 = 3.4335\text{ N}
$$

The initial potential energy of the stone (above ground level):

$$
E_{h,0} = G \cdot h_0 = 3.4335 \cdot 1.50 \approx 5.150\text{ J} 
$$

The final potential energy of the stone (since the bottom of the pit is $3\text{ meters}$ below ground level, its height is $h = -3.00\text{ m}$):

$$
E_h = G \cdot h = 3.4335 \cdot (-3.00) = -10.3005\text{ J} \approx -10.30\text{ J}
$$

The lifting work done during the uniform lowering is the change in potential energy:

$$
W = \Delta E_h = E_h - E_{h,0} = -10.3005 - 5.1503 \approx -15.45\text{ J}
$$

Numerically, the lifting work would be $-15.45\text{ J}$. The negative sign indicates that if the stone were lowered slowly with a rope, the stone would perform exactly $15.45\text{ J}$ of useful mechanical work on the external system (for example, it could drive a generator or lift a counterweight).

---

## Problems

**1. Moving a Book to the Shelf**
A book with a mass of $2\text{ kg}$ is lifted from a $1\text{ meter}$ high tabletop and moved to a bookshelf located at a height of $2.2\text{ meters}$. What is the change in the book's potential energy if we choose the floor of the room as the reference level?

**2. Mountaineer at the Summit**
What is the potential energy of a mountaineer with a mass of $75\text{ kg}$ standing at the summit of Mont Blanc, which is $4810\text{ meters}$ high, if we choose sea level as the reference level?

**3. Lifting Building Materials**
At a construction site, a brick cargo with a total mass of $400\text{ kg}$ is lifted to a scaffolding located at a height of $12\text{ meters}$. How much useful lifting work does the hydraulic crane mounted on the truck perform during the process, neglecting frictional losses?

**4. Negative Potential Energy**
During an experiment, the gravitational potential energy of an object relative to the chosen reference level turns out to be exactly $-150\text{ J}$. What does the negative sign mean, and where is the object located relative to the designated zero level?

**5. Apple Falling from the Tree**
An apple with a mass of $0.5\text{ kg}$ falls from a $3.5\text{ meter}$ high branch of a tree to the ground below. How much mechanical work does the gravitational force perform during the vertical displacement of the apple?

*To solve the problems, consider the value of the acceleration due to gravity to be* $g = 9.81\text{ }\frac{\text{m}}{\text{s}^2}$*.*
