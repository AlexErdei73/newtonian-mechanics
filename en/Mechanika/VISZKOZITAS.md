# Viscosity

## Newtonian Fluids

Internal friction is characterized by viscosity. It is measured under laminar flow conditions, where fluid layers "slide" over each other roughly in parallel, without any mixing of the fluid. 

Let us consider a flow that takes place parallel to the $x\text{-}y$ plane. The fluid layers that slide over one another are perpendicular to the $z$-axis. Let the direction of the flow be the $x$-axis, meaning that only the velocity component $u$ differs from zero. The layers are characterized by their $z$-coordinate, and the velocity $u$ is also a function of the $z$-coordinate. 

If the distance between two very close layers is $\Delta z$, and the velocity difference between the two layers is $\Delta u$, then the layers exert a force on each other in the $x$ direction that is proportional to their surface area $A$, in an effort to eliminate this velocity difference. In this case, the force per unit area is proportional to the change in velocity per unit length. The proportionality factor is the viscosity:

$$
\frac{F_x}{A} = \eta \frac{\Delta u}{\Delta z}
$$

The symbol for viscosity is $\eta$ (eta), and based on the equation, its unit is $\text{Pa}\cdot\text{s}$ (Pascal-second).

>**For Newtonian fluids, viscosity can be considered independent of velocity and depends only on temperature. Most liquids and gases can be treated as Newtonian fluids during flows.**

[Experiment with non-Newtonian fluid](https://www.youtube.com/watch?v=t3neqUhoDRA)

Moving forward, we will deal exclusively with Newtonian fluids.

## Viscosity Values

| Substance | 20 °C | 50 °C | 100 °C |
| :--- | :---: | :---: | :---: |
| **Water** | $0.00100\text{ Pa}\cdot\text{s}$ | $0.00055\text{ Pa}\cdot\text{s}$ | $0.00028\text{ Pa}\cdot\text{s}$ |
| **5W-30 Motor Oil** | $0.17500\text{ Pa}\cdot\text{s}$ | $0.04200\text{ Pa}\cdot\text{s}$ | $0.01100\text{ Pa}\cdot\text{s}$ |
| **Acacia Honey** | $9.00000\text{ Pa}\cdot\text{s}$ | $0.40000\text{ Pa}\cdot\text{s}$ | $0.02000\text{ Pa}\cdot\text{s}$ |

The table clearly illustrates that the viscosity of different Newtonian fluids can span an exceptionally wide range. As the temperature rises, the viscosity of substances generally decreases rapidly.

## The Principle of Hydrodynamic Similarity

When investigating a flow phenomenon—such as the wing of a new aircraft or the aerodynamics of a car—engineers rarely build a full-scale prototype immediately. Instead, they perform measurements on scaled-down models in wind tunnels or experimental basins.

However, to ensure that the results obtained from the small-scale model (flow patterns, forces) correspond precisely to the phenomena observed in the real, full-scale system, geometric similarity (having the same shape) is not enough. **Hydrodynamic similarity** is also required.

### Reynolds' Experiment

[Reynolds' experiment](https://www.youtube.com/watch?v=6A8B05V4OzA)  
*(Clickable video: Demonstration of Reynolds' historic dye-stream experiment)*

The law of hydrodynamic similarity was discovered by Osborne Reynolds in 1883 through a famous experiment. Using a thin funnel at the entrance of a clear glass tube discharging from a water tank, he injected colored dye (ink) into the center of the flow. He observed the following:

1. **At low velocities**, the ink traveled through the glass tube in a razor-thin, perfectly straight line. The fluid layers did not mix at all. This orderly flow is called **laminar flow**.
2. As he gradually opened the valve to **increase the velocity**, he reached a critical point where the dye stream suddenly began to oscillate, then instantly broke apart, chaotically coloring all the water inside the tube. This is **turbulent flow**.

### The Reynolds Number

Using dimensional analysis (scale analysis), Reynolds searched for the relationship that predicts this transition. He gathered the physical properties that influence the flow:

*   $u$: flow velocity ($\text{m/s}$)
*   $d$: pipe diameter ($\text{m}$)
*   $\rho$: fluid density $\left(\text{kg/m}^3\right)$
*   $\eta$: dynamic viscosity ($\text{Pa}\cdot\text{s}$)

He noticed that when these variables are combined in the following form, the units completely cancel out. The resulting pure, dimensionless quantity is known today as the **Reynolds number ($Re$)**:

$$
Re = \frac{\rho \cdot u \cdot d}{\eta}
$$

Experiments revealed that regardless of the pipe's diameter or the water's temperature (viscosity), the dye stream *always* broke apart at precisely the same critical Reynolds number. Based on this, we can formulate the principle of hydrodynamic similarity:

>**For any given geometry, the necessary and sufficient condition for the similarity of flow patterns—beyond geometric similarity—is that the Reynolds numbers of the flows must be identical.**

### Explanation

Although Reynolds demonstrated this experimentally, the general case was later proven mathematically for incompressible fluids based on the fundamental equations of hydrodynamics. If the Reynolds number is identical, the nature of the flow will be exactly the same, whether dealing with a tiny tube or a giant channel.

The fundamental equation of flows (the Navier–Stokes equation) is actually nothing more than **Newton's second law ($F = m \cdot a$) written for fluids**, which accounts for pressure forces and acceleration due to motion alongside internal friction (viscous) forces.

When a viscous fluid flows, two effects compete with each other. On one hand, the inertia of the fluid attempts to destabilize the flow and generate turbulence. On the other hand, the internal friction of the fluid tries to slow down and stabilize the flow. The ratio of these two effects is the Reynolds number. When the Reynolds number is small, friction prevents disturbances from amplifying, suppressing vortex formation. The flow becomes laminar.

Conversely, when the Reynolds number is high, the effect of friction is negligible compared to inertia, meaning it cannot stabilize the growing disturbances. Vortices form and detach from obstacles. While vortex generation itself is only possible in a viscous fluid, it occurs massively when friction is weak relative to inertia, leaving inertia to primarily dictate the fluid's motion.

### Practical Applications

* **Wind Tunnel Operations:** If we examine a $1:10$ scale model of a car, the size ($d$) is reduced to one-tenth. To keep the Reynolds number—and thus the flow pattern—identical to that of the real car, the air velocity ($u$) in the wind tunnel must be increased tenfold.
* **The Nature of Flow in Pipes:** 
  * If $Re < 2300$, internal friction immediately smothers any small flow disturbance $\rightarrow$ the flow remains **laminar**.
  * If $Re > 4000$, friction can no longer absorb the disturbances, the streamlines collapse $\rightarrow$ the flow becomes **turbulent**.

### Example

A car manufacturer wants to test the aerodynamic drag of a new model in a wind tunnel. The real car is $4\text{ m}$ long and travels on city roads at a velocity of $u_{\text{real}} = 20\text{ m/s}$ ($72\text{ km/h}$). Due to the dimensions of the wind tunnel, a $1:4$ scaled-down model is placed in the laboratory (making the model's length $d_{\text{model}} = 1\text{ m}$). The measurements are conducted in air at $20\text{ }^{\circ}\text{C}$, identical to the conditions under which the real car will run, meaning that the density ($\rho$) and dynamic viscosity ($\eta$) are the same in both cases. What wind velocity ($u_{\text{model}}$) must be set in the wind tunnel so that the flow pattern around the model is hydrodynamically completely similar to that of the real car?

According to the principle of hydrodynamic similarity, the Reynolds numbers in the two systems must be equal ($Re_{\text{real}} = Re_{\text{model}}$):

$$
\frac{\rho \cdot u_{\text{real}} \cdot d_{\text{real}}}{\eta} = \frac{\rho \cdot u_{\text{model}} \cdot d_{\text{model}}}{\eta}
$$

Since the fluid (air) is identical in both cases, we can simplify by density ($\rho$) and dynamic viscosity ($\eta$):

$$
u_{\text{real}} \cdot d_{\text{real}} = u_{\text{model}} \cdot d_{\text{model}}
$$

From this, we can express the required velocity for the model:

$$
u_{\text{model}} = u_{\text{real}} \cdot \frac{d_{\text{real}}}{d_{\text{model}}} = 20\text{ m/s} \cdot \frac{4\text{ m}}{1\text{ m}} = 20 \cdot 4 = 80\text{ m/s}
$$

A flow velocity of $80\text{ m/s}$ ($288\text{ km/h}$) must be provided in the wind tunnel to achieve hydrodynamic similarity. (Note: This velocity is only 23% of the speed of sound ($\text{Mach } 0.23$), so the air flow around the model can be considered incompressible with complete confidence, and both the Bernoulli equation and the Reynolds model remain perfectly valid).

---

## Problems

**Problem 1**
Water at $20\text{ }^{\circ}\text{C}$ flows in an industrial pipeline at an average velocity of $u = 0.5\text{ m/s}$. The internal diameter of the pipe is $d = 10\text{ cm}$ ($0.1\text{ m}$). Based on the table, the viscosity of water at this temperature is $\eta = 0.001\text{ Pa}\cdot\text{s}$, and its density is $\rho = 1000\text{ kg/m}^3$. What is the Reynolds number of the flow? Is the flow in the pipe laminar or turbulent?

**Problem 2**
In a laboratory experiment, acacia honey is forced through a thin tube with a diameter of $d = 2\text{ cm}$ ($0.02\text{ m}$) at $20\text{ }^{\circ}\text{C}$ with a velocity of $u = 0.1\text{ m/s}$. The density of the honey is $\rho = 1400\text{ kg/m}^3$, and its viscosity according to the table is $\eta = 9\text{ Pa}\cdot\text{s}$. What is the Reynolds number in this case? How do the Reynolds number and the nature of the flow change if the honey is heated to $100\text{ }^{\circ}\text{C}$ (where its density does not change significantly, but its viscosity drops to $\eta = 0.02\text{ Pa}\cdot\text{s}$), while the velocity and diameter remain unchanged?

**Problem 3**
The prototype of a small submarine is tested using a $1:10$ scale model in an experimental towing tank (so $d_{\text{model}} = \frac{1}{10} \cdot d_{\text{real}}$). Both the real vehicle and the model move in the same saltwater (the density and viscosity are identical). The economical cruising speed of the real submarine on the seabed is $u_{\text{real}} = 1.5\text{ m/s}$ (approx. $5.4\text{ km/h}$). At what velocity ($u_{\text{model}}$) must the model be towed in the experimental tank so that the structure of the streamlines and separating vortices matches the real-world conditions?