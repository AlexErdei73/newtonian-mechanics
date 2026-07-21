# Drag Force and Aerodynamic Lift

So far, we have examined Stokes' law for the low Reynolds number laminar flow regime. In that case, a moving sphere experiences a force opposite to its relative velocity, which is directly proportional to the magnitude of the velocity. 

Let us now investigate the general case of high Reynolds numbers, which occur almost always in everyday life! We will explore how the drag force depends on the relative velocity and what other factors influence motion. This is an exceptionally important practical problem, as a significant portion of mechanical energy loss in vehicles is a consequence of drag.

Since directly solving the fundamental governing equations (the Navier–Stokes equations) is mathematically hopeless under these conditions, two primary tools remain to gather accurate information:

*   Wind tunnel experiments for the physical measurement of drag.
*   Computational Fluid Dynamics (**CFD**) simulations.

## Experiments and Simulations

The following videos demonstrate the experimental and numerical background of the phenomenon. Let us watch them carefully before moving on to the mathematical derivation!

[Measuring the Drag Force of a Smooth Ball and a Golf Ball (YouTube Video)](https://www.youtube.com/watch?v=2L8TjobaFac&t=24s)

[Airfoil Lift and Drag (YouTube Video)](https://www.youtube.com/watch?v=EbOpgUrwK7M)

[Numerical Simulation of Flow Around a Sphere at Re=100,000 (YouTube Video)](https://www.youtube.com/watch?v=skzddW_kEq0)

[Flow Around an Airplane Wing Profile (YouTube Shorts)](https://www.youtube.com/shorts/UKHjTZwSH_w)

The experiments illustrate how drag force can be measured on a sphere, as well as how drag force and aerodynamic lift are measured on an airfoil under different angles of attack. Let us first address the calculation of drag, and then examine how the lift that enables flight is generated!

---

## Calculating the Drag Force

Let us imagine a bluff body, such as a cube, moving forward with a velocity $u$! Let the front face of the cube be perpendicular to the direction of travel, and let the area of this face be $A$. The air will act to decelerate the cube. The reason for this is that the body continuously collides with the molecules of the medium: it pushes more and more air ahead of itself and accelerates that air to its own velocity $u$.

To simplify, let us assume that although the air attempts to move out of the way of the cube, it must fully accelerate to the body's velocity $u$ within the total volume swept by the object. During a time interval $\Delta t$, the cube travels a distance $\Delta x = u \cdot \Delta t$. The volume of air affected during this time is:

$$
\Delta V = A \cdot \Delta x = A \cdot u \cdot \Delta t
$$

The mass $\Delta m$ of the accelerated air can be expressed using its density $\rho$:

$$
\Delta m = \rho \cdot \Delta V = \rho \cdot A \cdot u \cdot \Delta t
$$

The drag force can be calculated based on the impulse-momentum theorem, which by virtue of Newton's third law (action-reaction) is of the same order of magnitude as the force imparted to the air:

$$
F_d = \frac{\Delta I}{\Delta t} = \frac{u \cdot \Delta m}{\Delta t} = \frac{u \cdot (\rho \cdot A \cdot u \cdot \Delta t)}{\Delta t} = \rho \cdot u^2 \cdot A
$$

This calculation is obviously only a theoretical estimate, as a portion of the real air moves clear of the advancing body and thus does not accelerate completely to the body's velocity $u$. How accurate this estimate is depends primarily on the geometric shape of the object.

Measurements show that the above line of reasoning yields an excellent approximation if the result is multiplied by a dimensionless constant characteristic of the body's shape, which is conventionally written in physics in the form of $\frac{1}{2} C_d$. Here, $C_d$ is the dimensionless **drag coefficient** characteristic of the object's form (also known as the *shape coefficient*).

The final quadratic force law for drag is therefore expressed as follows:

$$
F_d = C_d \cdot \frac{1}{2} \rho \cdot u^2 \cdot A
$$

Take note of the core physics: the velocity is squared ($u^2$)! The reason for this is that if we travel twice as fast, we collide with **twice as many** air molecules per second, and we must also accelerate these molecules to **twice the velocity**.

### Drag Coefficients for Bodies of Various Shapes

![Drag coefficient for various shapes](Kepek/alaktenyezok.webp)

---

### Dependence of the Drag Coefficient on the Reynolds Number

The fluid dynamics behavior of blunt and streamlined bodies differs drastically and is heavily influenced by the Reynolds number ($Re$). Let us investigate the classic case of a sphere!

We saw previously that at very low Reynolds numbers ($Re \ll 1$), the motion follows Stokes' law. In this regime, the flow is stationary and laminar, the fluid conforms entirely to the sphere, and pure viscous friction dominates. For this range, the drag coefficient can be derived theoretically:

$$
C_d = \frac{24}{Re}
$$

If we substitute this back into the quadratic drag equation (taking into account that the cross-sectional area of a sphere is $A = r^2\pi$ and the Reynolds number is $Re = \frac{\rho \cdot 2r \cdot u}{\eta_{\text{din}}}$):

$$
F_d = \frac{1}{2} C_d \cdot \rho \cdot u^2 \cdot A = \frac{1}{2} \cdot \left(\frac{24\eta_{\text{din}}}{\rho \cdot 2r \cdot u}\right) \cdot \rho \cdot u^2 \cdot (r^2\pi) = 6\pi \cdot \eta_{\text{din}} \cdot r \cdot u
$$

We have arrived exactly back at Stokes' linear force law! Thus, at very low Reynolds numbers, the mechanism of deceleration is the internal, sticky friction of the fluid adhering to the body.

At high Reynolds numbers ($1000 < Re < 300\ 000$), the drag coefficient of a sphere becomes nearly constant at a value of approximately $0.47$. Here, the fluid's inertia and the pressure difference (pressure drag) caused by the vortex wake developing behind the body dominate the dynamics, meaning the force exhibits a clean $u^2$ dependence.

![The drag coefficient of a sphere as a function of the Reynolds number](Kepek/gomb_alaktenyezoje_Re_fuggvenyeben.webp)

#### The Drag Crisis

For a smooth sphere, a truly astonishing physical phenomenon takes place around $Re \approx 300\ 000$: the sphere's drag coefficient drops suddenly and drastically from $0.47$ down to roughly $0.2$!

The reason for this is that the thin, laminar boundary layer forming at the front of the sphere suddenly collapses and becomes turbulent. Although turbulence locally increases skin friction, a turbulent boundary layer possesses much higher kinetic energy. Consequently, it is capable of following the curvature of the sphere much further, delaying the separation point (flow separation occurs at approx. $80^\circ$ in the laminar case, but around $120^\circ$ in the turbulent case). As a result, the low-pressure vortex wake behind the sphere narrows drastically, causing the body's pressure drag to plunge.

This is precisely the purpose of a **golf ball's** dimpled surface: the dimples intentionally agitate and trip the boundary layer into turbulence, causing this drag crisis to occur at a much lower Reynolds number, which allows the ball to travel much further.

*   **For sharp-edged bodies** (e.g., a cube or flat plate), flow separation is forced by the geometry at the sharp corners. Consequently, their separation point is fixed, their drag coefficient ($C_d \approx 1.05 - 1.2$) is virtually independent of the Reynolds number, and they do not experience a drag crisis.
*   **For streamlined bodies** (e.g., teardrop shapes or airfoils), the shape of the body is engineered so that separation does not occur even at massive Reynolds numbers. Their drag is exceptionally low ($C_d \approx 0.04$), which stands as the primary goal of modern vehicle design.

## Terminal Velocity

When an object is released into a fluid medium, it begins to accelerate due to the force of gravity. As its velocity increases, the drag force also increases rapidly according to the quadratic force law. At a certain point, the drag force becomes precisely equal to the gravitational force ($F_d = F_G$). At this moment, the net force acting on the body becomes zero, acceleration ceases, and the object reaches its maximum, constant **terminal velocity**.

### Simulation Verification

[Fall of a Spherical Object Under the Influence of Air Resistance (Interactive Simulation)](https://alexerdei73.github.io/physics-engine/project/#621f3903-6d19-4d8a-867b-45fdd4a016ad)

In this simulation, it is worth observing the value of the terminal velocity and the $v_y(t)$ graph!
 
---

### Worked Examples

**Example 1:** Let us calculate the theoretical terminal velocity of the object featured in the interactive simulation above! The mass of the object is $m = 0.1\text{ kg}$, the density of air is $\rho = 1.225\text{ kg/m}^3$, the radius of the spherical body is $r = 0.1\text{ m}$, and the sphere's drag coefficient is $C_d = 0.47$.

Starting from the state of equilibrium ($g = 9.81\text{ m/s}^2$):

$$
F_G = F_d \implies m \cdot g = \frac{1}{2} C_d \cdot \rho \cdot u^2 \cdot (r^2\pi)
$$

Let's express the velocity and substitute the values:

$$
u = \sqrt{\frac{2 \cdot m \cdot g}{C_d \cdot \rho \cdot r^2\pi}} = \sqrt{\frac{2 \cdot 0.1 \cdot 9.81}{0.47 \cdot 1.225 \cdot 0.1^2 \cdot 3.1415}} \approx 10.415\text{ m/s}
$$

Our result matches the value shown by the simulation exactly!

**Example 2:** What is the landing descent velocity of a skydiver with a total mass of $95\text{ kg}$ if the radius of the hemispherical parachute in its open state is $r = 4\text{ m}$ and its drag coefficient is $C_d = 1.4$? What would this exact same velocity be if the parachute failed to open, and the ill-fated individual fell with a spread-eagle, belly-to-earth posture (with a projected frontal area of $A = 0.7\text{ m}^2$ and a drag coefficient of $C_d = 1.0$)?

*With an open parachute:*

$$
u_1 = \sqrt{\frac{2 \cdot m \cdot g}{C_d \cdot \rho \cdot r^2\pi}} = \sqrt{\frac{2 \cdot 95 \cdot 9.81}{1.4 \cdot 1.225 \cdot 4^2 \cdot 3.1415}} \approx 4.65\text{ m/s} \approx 16.74\text{ km/h}
$$

*Without a parachute (in free fall):*

$$
u_2 = \sqrt{\frac{2 \cdot m \cdot g}{C_d \cdot \rho \cdot A}} = \sqrt{\frac{2 \cdot 95 \cdot 9.81}{1.0 \cdot 1.225 \cdot 0.7}} \approx 46.62\text{ m/s} \approx 167.8\text{ km/h}
$$

**Conclusion:** Notice the dramatic difference! Without a parachute, even with a spread-out body posture, a human would impact the ground at close to $168\text{ km/h}$, which causes instantaneous fatal injury due to the massive deceleration (exceeding $800\text{ g}$) that occurs. The massive projected area and high drag coefficient of the parachute tame the impact into a completely safe jolt of approx. $17\text{ km/h}$.

---

## The Birth of Aerodynamic Lift

During the simulation of flow around an airplane wing profile, a clean laminar flow develops at low angles, where the wing provides a stable lift force. If we closely observe the simulation in the video, we can see a small vortex shedding from the trailing edge of the wing at the very beginning of the motion (this is known as the starting vortex). 

This observation is exceptionally vital! In terms of the conservation of angular momentum, the air around the wing is driven into rotation by this event, establishing what is called circulation. The core mechanism is that the total net angular momentum of the shedding starting vortex and the counter-rotation generated around the wing remains precisely zero. 

The bound rotation around the wing acts in a clockwise direction. Consequently, above the wing, this rotation adds to the velocity of the oncoming flow, while below the wing, it subtracts from it. This causes the flow velocity of the air above the wing to be significantly greater than below the wing. In accordance with Bernoulli's principle, this leads to a pressure difference (pressure decreases on top and increases underneath), which ultimately provides the aerodynamic lift required for flight.

### The Danger of Stall
If the wing is tilted at too high an angle relative to the flow (typically above approx. $15^\circ - 18^\circ$), the air molecules lose their kinetic energy due to surface skin friction, and owing to their inertia, they can no longer follow the upper curvature of the wing. 

The boundary layer suddenly separates, and the clean, rapid flow above the wing is replaced by a chaotic, slow, swirling air mass. At this point, the circulation collapses: the suction effect vanishes, the lift plunges, and the aircraft suddenly **stalls** and begins to drop. 

To prevent this, tiny metal plates called *vortex generators* are installed on the wings of modern aircraft. These intentionally generate micro-turbulence on the surface. As we observed with the golf ball, this turbulent layer adheres better to the wing, meaning that dangerous flow separation and stall will only occur at much higher angles of attack, making flight safe.

---

## Exercises

1. **Descent of a Meteorological Probe:** A cylindrical meteorological measuring probe is dropped into the lower layer of the atmosphere, where the air density is $\rho = 1.2\text{ kg/m}^3$. The total mass of the instrument is $m = 2\text{ kg}$, its projected frontal area perpendicular to the direction of travel is $A = 0.15\text{ m}^2$, and its drag coefficient—thanks to its streamlined body design—is $C_d = 0.32$. Determine the theoretical terminal velocity of the probe from the equilibrium between the gravitational force and the quadratic drag force! ($g = 9.81\text{ m/s}^2$)

2. **Braking of a Water Rescue Device:** During a flood rescue operation, a top-open, hollow hemispherical rescue device with a mass of $m = 12\text{ kg}$ is dropped into a river from a helicopter. The density of water is $\rho = 1000\text{ kg/m}^3$, the drag coefficient of the hollow hemisphere in water is $C_d = 1.42$, and the radius of the sphere is $r = 0.25\text{ m}$. What will be the steady terminal settling velocity of the rescue device in the water, assuming that the motion falls within the high Reynolds number quadratic regime? ($g = 9.81\text{ m/s}^2$)

3. **Drag Force Prediction for a High-Speed Train:** During a wind tunnel test of a new prototype, a railway research group measures that at a velocity of $u_1 = 30\text{ m/s}$ (approx. $108\text{ km/h}$), the total aerodynamic drag force acting on the trainset is $F_{d1} = 4500\text{ N}$. Since the train features a streamlined geometry without sharp breaks, its drag coefficient ($C_d$) can be considered constant across the investigated range. Based on the quadratic drag law, predict the braking force the train must face at its planned cruising speed of $u_2 = 90\text{ m/s}$ (which is exactly three times the first one)!