# Archimedes' Principle

## Experiments

[Archimedes' double cylinder (bucket and cylinder)](https://www.youtube.com/watch?v=Fodof4gSIA0&t=884s)

[A cork disk remains submerged under mercury](https://www.youtube.com/watch?v=Fodof4gSIA0&t=1423s)

[Cartesian diver](https://www.youtube.com/watch?v=Fodof4gSIA0&t=1696s)

From the experiments, we have seen that a fluid at rest exerts an upward buoyant force on any object submerged in it. Archimedes' principle describes this buoyant force.

> **Any object submerged in a fluid experiences an upward buoyant force equal in magnitude to the weight of the fluid displaced by the object.**

We also observed from the experiments that the buoyant force in fluids is a consequence of hydrostatic pressure. Although external atmospheric pressure adds to the hydrostatic pressure, it pushes equally upward and downward on the object, thereby cancelling itself out.

Let us consider a straight prism (for example, a rectangular cuboid object) completely submerged in a fluid (so that the fluid completely surrounds it) but not resting on the bottom of the container—unlike the cork disk in the mercury experiment. Let the surface area of the horizontal faces of the prism be $A$, and let its height (the distance between the top and bottom faces) be $\Delta h$. The buoyant force can easily be calculated as the difference between the compressive forces acting on the bottom and top faces:

$$
F_{\text{buoyant}} = F_2 - F_1 = p_2 A - p_1 A = (p_2 - p_1) A = \Delta p A
$$

The pressure difference due to the different depths is:

$$
\Delta p = p_2 - p_1 = (p_0 + \rho_{\text{fluid}} g h_2) - (p_0 + \rho_{\text{fluid}} g h_1) = \rho_{\text{fluid}} g (h_2 - h_1) = \rho_{\text{fluid}} g \Delta h
$$

Substituting this back into the buoyant force formula yields:

$$
F_{\text{buoyant}} = \Delta p A = \rho_{\text{fluid}} g \Delta h A = \rho_{\text{fluid}} V g = m_{\text{fluid}} g = G_{\text{fluid}}
$$

Here, $\rho_{\text{fluid}}$ represents the density of the fluid, and $V$ is the volume of the object (which, for a completely submerged object, equals the volume of the displaced fluid). Thus, $m_{\text{fluid}}$ is the mass of the displaced fluid, and $G_{\text{fluid}}$ is the weight of the displaced fluid. The external atmospheric pressure $p_0$ cancels out completely. Therefore, the theoretical derivation confirms Archimedes' principle.

## Flotation and Neutral Buoyancy of Objects

What happens if an object does not sink but instead floats on the surface of the fluid?

The same derivation can be applied, but in this case, hydrostatic pressure only pushes the object upward from below. The hydrostatic pressure acting on the top face is zero ($p_1 = 0$ at the fluid surface), because the upper part of the object is out in the air.

$$
\Delta p = p_2 - p_1 = (p_0 + \rho_{\text{fluid}} g h_2) - p_0 = \rho_{\text{fluid}} g h_2
$$

$$
F_{\text{buoyant}} = \Delta p A = \rho_{\text{fluid}} g h_2 A = \rho_{\text{fluid}} V_{\text{submerged}} g = m_{\text{displaced}} g = G_{\text{displaced}}
$$

In this scenario, only the portion of the object's volume that is submerged in the fluid ($V_{\text{submerged}}$) matters, which is equal to the volume of the displaced fluid. The object remains at the surface of the fluid because the gravitational force acting on it balances the buoyant force:

$$
F_{\text{buoyant}} = G_{\text{object}}
$$

$$
\rho_{\text{fluid}} V_{\text{submerged}} g = \rho_{\text{object}} V_{\text{object}} g
$$

$$
\rho_{\text{fluid}} V_{\text{submerged}} = \rho_{\text{object}} V_{\text{object}}
$$

Since the total volume of the object $V_{\text{object}}$ is greater than the submerged (displaced) volume $V_{\text{submerged}}$ (as the object is only partially submerged), the average density of the object $\rho_{\text{object}}$ must be less than the density of the fluid $\rho_{\text{fluid}}$.

It is crucial to note that we are referring to the **average density** of the object; otherwise, a ship made of steel would not be able to float on the surface of water. However, the hull of a ship contains a massive amount of air (hollow spaces), making its average density less than that of water, even though steel itself is much denser than water.

This final equation also applies when an object achieves **neutral buoyancy** (hovering) inside the fluid, but in that case, the submerged volume equals the total volume of the object ($V_{\text{submerged}} = V_{\text{object}}$). Consequently, during neutral buoyancy, the average density of the object is precisely equal to the density of the fluid.

If the average density of an object is greater than the density of the fluid, the buoyant force cannot support the weight of the object, causing the object to **sink** to the bottom of the container.

---

## Examples

1. A tanker with an empty mass of $45,000\text{ t}$ has a total volume of $520,000\text{ m}^3$. How much seawater was let into the ballast tanks if the tanker displaces $117,000\text{ m}^3$ of seawater in this state? The density of seawater is $1025\text{ kg/m}^3$. What is the average density of the tanker at this time?

According to the condition for flotation, the total gravitational force acting on the ship equals the buoyant force, meaning the total mass of the ship ($m_{\text{total}}$) is equal to the mass of the displaced seawater ($m_{\text{water}}$).

Let us calculate the mass of the displaced water:

$$
m_{\text{water}} = \rho_{\text{seawater}} \cdot V_{\text{displaced}} = 1025\text{ kg/m}^3 \cdot 117,000\text{ m}^3 = 119,925,000\text{ kg} = 119,925\text{ t}
$$

The total mass of the ship is the sum of its empty mass and the mass of the ballast water:

$$
m_{\text{total}} = m_{\text{empty}} + m_{\text{ballast}} = 119,925\text{ t}
$$

$$
m_{\text{ballast}} = 119,925\text{ t} - 45,000\text{ t} = 74,925\text{ t}
$$

The average density of the ship is the quotient of its total mass and its total volume:

$$
\rho_{\text{average}} = \frac{m_{\text{total}}}{V_{\text{total}}} = \frac{119,925,000\text{ kg}}{520,000\text{ m}^3} \approx 230.625\text{ kg/m}^3
$$

Thus, $74,925\text{ t}$ of seawater was let into the ballast tanks, and the average density of the ship is approximately $230.6\text{ kg/m}^3$.

2. How much oil does the tanker carry if the ballast water is pumped out of the tanks and the volume of displaced water becomes $336,600\text{ m}^3$ along with the cargo? (The density of seawater remains $1025\text{ kg/m}^3$.)

When floating, the new total mass of the ship equals the mass of the newly displaced water.

Let us calculate the new total mass:

$$
m_{\text{total\ new}} = \rho_{\text{seawater}} \cdot V_{\text{displaced\ new}} = 1025\text{ kg/m}^3 \cdot 336,600\text{ m}^3 = 345,015,000\text{ kg} = 345,015\text{ t}
$$

The new total mass consists of the empty ship and the carried oil (since the ballast water was pumped out):

$$
m_{\text{oil}} = m_{\text{total\ new}} - m_{\text{empty}} = 345,015\text{ t} - 45,000\text{ t} = 300,015\text{ t}
$$

The tanker carries $300,015\text{ t}$ of oil.

---

## Buoyant Force in Gases: The Hot Air Balloon

### Experiment

[Two-flame tube](https://www.youtube.com/watch?v=Fodof4gSIA0&t=33m20s)

Archimedes' principle applies completely not only to liquids but also to gases, as gases possess density and exert a buoyant force on objects placed within them due to atmospheric pressure changing with altitude. Hot air balloons operate on this very principle. The air inside the balloon envelope is heated using burners. As the hot air expands, it becomes less dense, so its density drops below that of the cold, surrounding external air. When the weight of the external, heavier air displaced by the hot air balloon (which is the Archimedean buoyant force) becomes greater than the total combined weight of the balloon structure, basket, passengers, and the hot air inside, the hot air balloon rises into the sky.

### Example

The internal volume of a hot air balloon's envelope is $3000\text{ m}^3$. The density of the external cold air is $\rho_{\text{cold}} = 1.29\text{ kg/m}^3$, while the density of the heated air inside the balloon is $\rho_{\text{hot}} = 0.95\text{ kg/m}^3$. The balloon's own structural mass (envelope, basket, burners, gas cylinders) is $450\text{ kg}$ in total. What is the maximum mass of payload (passengers and equipment) that the hot air balloon can lift? ($g \approx 9.81\text{ m/s}^2$)

The hot air balloon can lift off if the Archimedean buoyant force acting on it is at least equal to the total weight of the system.

The buoyant force is determined by the weight of the displaced external cold air:

$$
F_{\text{buoyant}} = \rho_{\text{cold}} \cdot V \cdot g = 1.29\text{ kg/m}^3 \cdot 3000\text{ m}^3 \cdot 9.81\text{ m/s}^2 = 37,964.7\text{ N}
$$

Let us calculate the mass and weight of the hot air inside the balloon:

$$
m_{\text{hot}} = \rho_{\text{hot}} \cdot V = 0.95\text{ kg/m}^3 \cdot 3000\text{ m}^3 = 2850\text{ kg}
$$
   
$$
G_{\text{hot}} = m_{\text{hot}} \cdot g = 2850\text{ kg} \cdot 9.81\text{ m/s}^2 = 27,958.5\text{ N}
$$

Let us calculate the weight of the balloon's own structure:
   
$$
G_{\text{structure}} = m_{\text{structure}} \cdot g = 450\text{ kg} \cdot 9.81\text{ m/s}^2 = 4414.5\text{ N}
$$

Let us write down the force equilibrium for the maximum payload ($G_{\text{load}}$):
The upward force is equal to the sum of the downward forces:

$$
F_{\text{buoyant}} = G_{\text{structure}} + G_{\text{hot}} + G_{\text{load}}
$$

$$
37,964.7\text{ N} = 4414.5\text{ N} + 27,958.5\text{ N} + G_{\text{load}}
$$

$$
37,964.7\text{ N} = 32,373\text{ N} + G_{\text{load}}
$$

$$
G_{\text{load}} = 37,964.7\text{ N} - 32,373\text{ N} = 5591.7\text{ N}
$$

Let us calculate the maximum mass of the payload:
   
$$
m_{\text{load}} = \frac{G_{\text{load}}}{g} = \frac{5591.7\text{ N}}{9.81\text{ m/s}^2} = 570\text{ kg}
$$

The hot air balloon can lift a maximum payload of $570\text{ kg}$ into the air.

---

## Problems

**Problem 1**
A completely sealed, empty steel drum has a mass of $20\text{ kg}$ and an internal volume of $0.2\text{ m}^3$. If the drum is completely filled with diesel fuel with a density of $800\text{ kg/m}^3$ and then dropped into a freshwater lake with a density of $1000\text{ kg/m}^3$, will the drum sink or float on the surface? If it floats, what volume of it is visible above the water?

**Problem 2**
A marine research probe along with its instruments has a total mass of $1500\text{ kg}$. The probe is designed to achieve neutral buoyancy (hover) in seawater ($1025\text{ kg/m}^3$) at a certain depth. What must the total external volume of the probe be so that it neither sinks nor rises to the surface?

**Problem 3**
A cargo ship with an empty mass of $12,000\text{ t}$ travels on a river ($1000\text{ kg/m}^3$), where its submerged volume is $15,000\text{ m}^3$. The ship is then loaded with cargo and sails out to the open ocean ($1025\text{ kg/m}^3$). At sea, it is observed that the submerged volume of the ship has increased to $28,000\text{ m}^3$ despite the denser water. How many tonnes of cargo were loaded onto the ship?