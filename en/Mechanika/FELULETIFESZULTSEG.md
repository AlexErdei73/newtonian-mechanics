# Surface Tension

## Potential Energy Minimum in Mechanical Equilibrium

When studying energy, we observed that, in general, the energy available to do work decreases in natural processes until a time-independent equilibrium state is reached. At this point, the energy available to do work is at its minimum. For mechanical systems, this means that the kinetic energy is zero, and the potential energy takes its lowest possible value under the given conditions, which is known as a local minimum.

A local minimum here simply implies that if the system is displaced only slightly from its equilibrium position, its potential energy always increases. However, if the system is significantly displaced, we may find a position where the potential energy is even lower, since multiple local minima can exist with different minimum energies at various positions of the system.

> **In a stable equilibrium position of a mechanical system, its potential energy has a local minimum.**

### Examples
1. A ball can roll freely on a curved surface that features two valleys and multiple hills. One valley is located deeper than the other. In this case, the potential energy of the ball is at an absolute minimum in the deeper valley, but it is locally minimal at both valley points. Therefore, both valley points are local minima, and the ball is in stable equilibrium in both.
2. The equilibrium of fluids also occurs when the potential energy of the fluid is minimized.

For instance, let us consider a communicating vessel where the cross-sections of the two columns are $A_1$ and $A_2$, the total volume of the fluid is $V$, and its density is $\rho$. The total gravitational potential energy can be written using the heights of the centers of mass of the fluid columns in the branches ($\frac{h}{2}$):

$$E_h = E_{h,1} + E_{h,2} = m_1 g \frac {h_1} 2 + m_2 g \frac {h_2} 2$$

Since the masses are the products of density, cross-sectional area, and height:

$$m_1 = \rho A_1 h_1 \quad \text{and} \quad m_2 = \rho A_2 h_2$$

The total volume of the fluid remains constant throughout the process:

$$V = A_1 h_1 + A_2 h_2 \implies h_2 = \frac {V - A_1 h_1} {A_2}$$

Let us write the total potential energy as a function of the height $h_1$:

$$E_h = \frac 1 2 \rho g \left( A_1 h_1^2 + A_2 h_2^2 \right)$$

Let us examine the expression inside the brackets separately after substituting $h_2$:

$$A_1 h_1^2 + A_2 \frac{(V - A_1 h_1)^2} {A_2^2} = A_1 h_1^2 + \frac {A_1^2 h_1^2 - 2 V A_1 h_1 + V^2} {A_2} = \left( A_1 + \frac{A_1^2}{A_2} \right) h_1^2 - \left( \frac{2 V A_1}{A_2} \right) h_1 + \frac{V^2}{A_2}$$

This is a quadratic polynomial of the form $f(h_1) = a h_1^2 + b h_1 + c$, whose minimum position can be determined using the relation $h_{1,\text{min}} = - \frac b {2a}$.

Here, the coefficients of our expression are:

$$a = A_1 + \frac {A_1^2} {A_2}$$
$$b = - \frac {2 V A_1} {A_2}$$

Substituting into the formula for the minimum position:

$$h_{1,\text{min}} = -\frac b {2a} = \frac{\frac {2 V A_1} {A_2}}{2 \left( A_1 + \frac{A_1^2}{A_2} \right)} = \frac{\frac {V A_1} {A_2}}{\frac{A_1 A_2 + A_1^2}{A_2}} = \frac{V A_1}{A_1 A_2 + A_1^2} = \frac {V} {A_1 + A_2}$$

It remains only to show that the fluid stands at the same height in both columns of the vessel at equilibrium, meaning $h_{2,\text{min}} = h_{1,\text{min}}$.

Indeed:

$$h_{2,\text{min}} = \frac {V - A_1 h_{1,\text{min}}} {A_2} = \frac {V - \frac {V A_1} {A_1 + A_2}} {A_2} = \frac {\frac{V(A_1 + A_2) - V A_1}{A_1 + A_2}} {A_2} = \frac {\frac{V A_2}{A_1 + A_2}} {A_2} = \frac {V} {A_1 + A_2}$$

Therefore, we can establish that the potential energy of the fluid in the columns of communicating vessels is minimized when the fluid stands at an equal height in both branches. This is indeed the equilibrium state in this system.

---

## Surface Tension

### Experiments

[Behavior of water on the space station](https://www.youtube.com/watch?v=H_qPWZbxFl8)

[Tensile force of a soap film](https://www.youtube.com/shorts/iKmm7GZ7G_0)

In the first experiment, water on the space station takes on a spherical shape in its equilibrium state. Until equilibrium is reached, the surface of the water naturally vibrates, keeping the sphere in constant oscillation. We can also observe that the phenomenon appears as if an elastic membrane were located on the surface of the water (at the water-air interface). The resulting system is stable because gravity is negligible, allowing the fluid to float freely under microgravity conditions.

The second experiment is conducted with a soap film, which is much more stable under terrestrial conditions than a film forming on the surface of pure water. The reason for this stability lies in the chemistry of the soap solution: water molecules reside inside the film, while soap molecules align themselves at the solution-air interface. This arrangement of molecules stabilizes the thin soap film so that it can be significantly stretched or contracted.

From a physics perspective, the most important feature is that such boundary layer films exert a force tangential to the surface. It is due to this force that the movable wire bounding the soap film starts moving inward with an acceleration as soon as its movement is permitted.

Why does water take on a spherical shape while floating on the space station? Why is a soap film spherical when it forms a soap bubble? The reason is this tangential contracting force, which we call surface tension.

> **Surface tension is the physical quantity that indicates the magnitude of the force arising in a fluid film per unit length of the film, acting in the direction of the film's tangent. Its symbol is $\alpha$, and its unit is N/m.**

---

## Surface Energy

In the soap film experiment, the movable wire is enclosed by the soap film on both sides, meaning that two fluid-air interfaces (two films) actually exert the tensile force. If the length of the wire is $L$, then the total force pulling the wire is:

$$F = \alpha \cdot 2L$$

Here, $\alpha$ is the surface tension of the solution. What happens if we displace the wire by a distance of $\Delta s$ by applying an opposite external force to increase the area of the soap film? In this case, the external force performs work, which increases the energy of the film. Thus, work is required to increase the surface area, whereas energy is released when the surface area decreases (for example, converting into kinetic energy to accelerate the released wire). We call this energy surface energy:

$$\Delta E_{\text{surface}} = W = F \cdot \Delta s = \alpha \cdot 2L \cdot \Delta s = \alpha \cdot \Delta A$$

Where $\Delta A = 2 \cdot L \cdot \Delta s$ is the total change in surface area on both sides of the film.

> **The surface of fluids possesses a property called surface energy, which is directly proportional to the size of the surface area. Surface tension ($\alpha$) numerically represents the amount of work required to create a unit of new fluid surface.**

### Microscopic Explanation of Surface Energy
A particle located deep within the fluid is surrounded homogeneously in all directions by neighboring fluid particles; thus, the attractive cohesive forces acting between them come from all directions, and their net resultant is zero.

In contrast, a molecule on the surface of the fluid experiences strong attractive forces only from the interior of the fluid (since the gatz-phase air molecules are scattered and exert negligible attraction). Consequently, the interaction energy of surface molecules is less negative than that of internal ones. Bringing a molecule from the interior of the fluid to the surface can therefore only be achieved through external work (investment of energy). The macroscopic manifestation of this microscopic phenomenon is surface tension and surface energy.

Now we can easily answer our questions. A freely floating water droplet and a soap bubble take on a spherical shape because the effect of gravity is negligible in these cases. The total potential energy of the system is provided by the surface energy.

As mechanical systems strive for equilibrium, they attempt to minimize their potential energy, which in this case means minimizing the surface area of the fluid. Since **a sphere is the geometric shape that has the smallest surface area for a given volume**, fluids automatically take on this shape in an equilibrium state.

### Experiment

[Minimal surfaces of soap films](https://www.youtube.com/watch?v=Yg0TPid2Yt4&t=28m35s)

## Examples

1. Two soap bubbles of different sizes are connected by a tube fitted with a valve. The radius of one bubble is $R = 2\text{ cm}$ and the other is $r = 1\text{ cm}$. When the valve is opened, air flows from the smaller bubble into the larger one (the small one gets even smaller, and the large one continues to grow) until the smaller one is completely absorbed into the larger one. Prove mathematically that the total surface area of the films decreases during this process! (Assume the total volume of enclosed air remains constant due to the minimal change in pressure.)

The bubbles are spherical. The surface area of a sphere of radius $R$ is $A = 4\pi R^2$, and its volume is $V = \frac{4}{3}\pi R^3$. 
Since a soap film has both an outer and an inner surface, the actual fluid-air interface area is twice the geometric surface area ($8\pi R^2$).

The initial radii of the bubbles are $R_1 = 2\text{ cm} = 0.02\text{ m}$ and $r_1 = 1\text{ cm} = 0.01\text{ m}$.
The initial total volume of the system ($V_{\text{total}}$) is:

$$V_{\text{total}} = \frac{4}{3}\pi R_1^3 + \frac{4}{3}\pi r_1^3 = \frac{4}{3}\pi (2^3 + 1^3) = \frac{4}{3}\pi \cdot 9 = 12\pi\text{ cm}^3$$

The initial film surface area of the system ($A_{\text{initial}}$) is:

$$A_{\text{initial}} = 2 \cdot \left( 4\pi R_1^2 + 4\pi r_1^2 \right) = 8\pi (2^2 + 1^2) = 8\pi \cdot 5 = 40\pi\text{ cm}^2 \approx 125.66\text{ cm}^2$$

At the end of the process, the small bubble completely disappears ($r_2 = 0$), and all the air flows into the large bubble. Let us denote the radius of the final state as $R_2$.
Since the total volume remains constant:

$$V_{\text{total}} = \frac{4}{3}\pi R_2^3 = 12\pi\text{ cm}^3 \implies R_2^3 = 9 \implies R_2 = \sqrt[3]{9}\text{ cm} \approx 2.08\text{ cm}$$

The final film surface area of the system ($A_{\text{final}}$) is:

$$A_{\text{final}} = 2 \cdot 4\pi R_2^2 = 8\pi (\sqrt[3]{9})^2 = 8\pi \cdot \sqrt[3]{81} \approx 8\pi \cdot 4.327 = 34.61\pi\text{ cm}^2 \approx 108.74\text{ cm}^2$$

$$\Delta A = A_{\text{final}} - A_{\text{initial}} = 108.74\text{ cm}^2 - 125.66\text{ cm}^2 = -16.92\text{ cm}^2$$

The total surface area decreased by $16.92\text{ cm}^2$. This proves that during the transfer of air, the surface energy of the system decreased, meaning the process occurred spontaneously in pursuit of a minimum potential energy state.

2. A soap film within a frame is bounded on one side by a movable wire of length $L = 10\text{ cm}$. The surface tension of the soap solution is \(\alpha = 0.03\text{ N/m}\). What external force is required to maintain equilibrium against the contracting force of the film, and how much work is done if the wire is pulled out uniformly by a distance of $s = 5\text{ cm}$?

The soap film has two sides, so the contracting force acting on the wire is:

$$F = \alpha \cdot 2L = 0.03\text{ N/m} \cdot 2 \cdot 0.1\text{ m} = 0.006\text{ N}$$

To maintain equilibrium, an identical external force of $0.006\text{ N}$ is required.

The work done is equal to the change in surface energy:

$$W = F \cdot s = 0.006\text{ N} \cdot 0.05\text{ m} = 0.0003\text{ J} = 0.3\text{ mJ}$$

The force maintaining equilibrium is $0.006\text{ N}$, and the work done is $0.3\text{ mJ}$.

---

## Problems

**Problem 1**
Water droplets are allowed to slowly detach from a glass tube dipped into pure water. Just before separation, the droplets are approximately spherical and hang from the rim of the tube, which has a diameter of $d = 2\text{ mm}$. At the moment of detachment, the weight of the droplet becomes equal to the surface tension force acting along the perimeter of the tube's rim. Calculate the mass of a single detaching water droplet if the surface tension of water is \(\alpha = 0.072\text{ N/m}\)! ($g \approx 9.81\text{ m/s}^2$)

**Problem 2**
A piece of thread knotted into a loose loop lies on a soap film stretched across a delicate, horizontal wire frame. If the soap film inside the loop is pierced with a needle, the thread is instantly pulled out into a perfect circle of radius $R = 3\text{ cm}$ due to the tensile force of the remaining outer film. What mechanical tensile force develops within the cross-section of the thread if the surface tension of the soap solution is \(\alpha = 0.025\text{ N/m}\)?

**Problem 3**
An ultrasonic humidifier atomises a water droplet with a volume of $V = 1\text{ cm}^3$ into millions of tiny, identically sized mist droplets with a radius of $r = 1\ \mu\text{m}$ ($10^{-6}\text{ m}$). How much external work must the device perform purely to increase the water surface area by such a massive extent? (The surface tension of water is \(\alpha = 0.072\text{ N/m}\). The atomised droplets are continuous spheres of liquid, so they only have an outer surface.)