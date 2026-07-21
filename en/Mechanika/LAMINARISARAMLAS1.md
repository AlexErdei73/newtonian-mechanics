# Laminar Flows I.

## General Features

As previously discussed, the flow pattern of laminar flows can be well characterized by streamlines. The flow is often steady, meaning the streamline pattern is constant over time. These flows are characterized by pure vortex-free motion. Internal friction stabilizes the flow against disturbances, meaning that the viscous braking forces within the fluid overcome inertial effects. Consequently, the Reynolds number is extremely small for laminar flows.

The fluid flows in layers, and these layers do not mix with each other. Due to the lack of macroscopic mixing, the flow is perfectly reversible in time. This is demonstrated by the spectacular and astonishing experiment below:

### Experiment

[The Reversibility of Laminar Flow](https://www.youtube.com/watch?v=j2_dJY_mIys)  

---

## Stokes' Law

### Experiment: Sinking of Spheres in a Viscous Medium

[Walter Lewin's Experiment](https://www.youtube.com/watch?v=iV7LN_uD-oA&t=14m35s)  
*(Clickable video: Walter Lewin demonstrates how the velocity of spherical ball bearings depends on their diameter in thick corn syrup)*

This experiment can be correctly interpreted by assuming that the downward forces acting on the sphere come into equilibrium with the upward resistive (drag) force. This is the force exerted by the fluid due to its internal friction on the moving body, braking the fall of the sphere. Once the forces are balanced, the object moves at a uniform speed.

George Gabriel Stokes derived the law of resistive force for this specific case in 1851, using theoretical methods from the Navier–Stokes equations, which also bear his name. His result is **Stokes' Law**:

$$
F_s = 6\pi\eta r u
$$

Here, $u$ is the velocity of the flow (or the body), $r$ is the radius of the sphere, and $\eta$ is the dynamic viscosity of the fluid.

It is important to note that this law is exclusively valid for laminar flows, where the Reynolds number is much smaller than 1. The formula applies only to the motion of a perfect sphere, and the sphere must be far from the walls of the container holding the fluid so that the return flow does not disturb the clean profile.

### Simulation

[Stokes' Law Interactive Physics Simulation](https://alexerdei73.github.io/physics-engine/project#b38f050f-a404-4d02-82ad-959009d1ce05)

The simulation shows how the velocity reaches its terminal value from the moment of release. It can be seen that the smaller sphere covers only one unit of distance, while the larger sphere, which has twice the diameter, covers exactly four units. This proves that the larger sphere reaches four times the terminal velocity. 

The fluid resistance is represented in the simulation by a purely viscous thread, which makes the braking effect visually observable. At the end of the run, the following velocity-time graph can be displayed:

![Velocity-time graph for a sphere dropped into a viscous fluid](Kepek/stokestorvenysebessegido.png)

The diagram precisely confirms that the ball with twice the diameter accelerates to four times the terminal velocity under identical conditions.

### Derivation of Terminal Velocity

Let us calculate the terminal velocity based on Stokes' Law! During uniform motion, the sum of the resistive force $F_s$ arising in the fluid and the buoyant force $F_f$ balances the weight $G$ of the body with pinpoint accuracy:

$$
m_{\text{body}}g = 6\pi\eta r u + \rho_f V g
$$

$$
m_{\text{body}}g - \rho_f V g = 6\pi\eta r u
$$

Let us express the mass of the body using density ($m_{\text{body}} = \rho_b V$), and then divide both sides by the volume $V$:

$$
\rho_b g - \rho_f g = \frac{6\pi\eta r u}{V}
$$

Substitute the geometric volume formula of a sphere into $V$ ($V = \frac{4}{3}\pi r^3$):

$$
(\rho_b - \rho_f)g = \frac{6\pi\eta r u}{\frac{4}{3}\pi r^3} = \frac{18\pi\eta r u}{4\pi r^3}
$$

After simplification, we obtain the relationship:

$$
(\rho_b - \rho_f)g = \frac{9\eta u}{2r^2}
$$

From this, the terminal velocity $u$, or in the case of an unknown fluid, the viscosity $\eta$, can be calculated during measurements:

$$
u = \frac{2r^2(\rho_b - \rho_f)g}{9\eta}
$$

Our result theoretically demonstrates that the terminal velocity $u$ is proportional to the **square** of the radius ($r^2$). This explains why the ball with twice the radius sinks exactly four times as fast in the syrup.

### Examples

1. Let us calculate the viscosity of the syrup and the Reynolds number of the flow from Walter Lewin's experimental data!

Measurement data for the smallest ball bearing:

$$
\begin{aligned}
d &= 1/8\text{ inch} = 0.3175\text{ cm} = 3.175 \cdot 10^{-3}\text{ m} \\
r &= \frac{d}{2} = 0.15875\text{ cm} = 1.5875 \cdot 10^{-3}\text{ m} \\
\rho_f &= 1380\text{ kg/m}^3 \quad \text{(density of the syrup)} \\
\rho_b &= 7800\text{ kg/m}^3 \quad \text{(density of the steel ball)} \\
h &= 4\text{ cm} = 0.04\text{ m} \quad \text{(the measured sinking distance)} \\
t &= 5.8\text{ s} \quad \text{(the sinking time)} \\
u &= \frac{h}{t} = \frac{0.04}{5.8} = 0.006897\text{ m/s}
\end{aligned}
$$

Let us substitute the data into the rearranged terminal velocity equation:

$$
\eta = \frac{2r^2(\rho_t - \rho_f)g}{9u} = \frac{2 \cdot (1.5875 \cdot 10^{-3})^2 \cdot (7800 - 1380) \cdot 9.81}{9 \cdot 0.006897} = 5.11\text{ Pa}\cdot\text{s}
$$

Let us calculate the Reynolds number characteristic of the flow:

$$
Re = \frac{\rho_f d u}{\eta} = \frac{1380 \cdot 3.175 \cdot 10^{-3} \cdot 0.006897}{5.11} = 0.00591
$$

Since the resulting Reynolds number is orders of magnitude smaller than 1 ($Re \ll 1$), applying Stokes' theory to this experiment is entirely justified and highly accurate.

2. Show that for a sphere moving in a fluid, the Reynolds number is nothing more than the ratio of the inertial force required to accelerate a fluid mass equal to the sphere's volume to the velocity $u$, and the viscous resistive force (assuming the acceleration takes place over a length corresponding to the sphere's diameter $d$, neglecting a pure geometric constant)!

The inertial force required for acceleration can be calculated from the work-energy theorem ($W = \Delta E_m$):

$$
F_i \cdot d = \frac{1}{2} m_f u^2 = \frac{1}{2} \left(\rho_f \cdot \frac{4r^3\pi}{3}\right) u^2
$$

Since $d = 2r$, substitute it and express the inertial force:

$$
F_i \cdot (2r) = \frac{2}{3} \pi \rho_f r^3 u^2 \implies F_t = \frac{\pi \rho_f r^2 u^2}{3}
$$

The resistive force is given by Stokes' Law ($F_s = 6\pi\eta r u$). Let us look at the numerical ratio of the two forces:

$$
\frac{F_i}{F_s} = \frac{\frac{1}{3}\pi \rho_f r^2 u^2}{6\pi \eta r u} = \frac{1}{18} \frac{\rho_f r u}{\eta}
$$

Since the standard Reynolds number uses the diameter instead of the radius ($d = 2r$, meaning $r = d/2$):

$$
\frac{F_i}{F_s} = \frac{1}{18} \frac{\rho_f \left(\frac{d}{2}\right) u}{\eta} = \frac{1}{36} \frac{\rho_f u d}{\eta} = \frac{1}{36} Re
$$

This result proves that the Reynolds number (neglecting a geometric factor) indeed reflects the physical ratio of inertial effects to viscous forces.

---

## Problems

**Problem 1**
In clean autumn air, a tiny, spherical mist droplet sinks at a uniform velocity. The radius of the droplet is $r = 15\text{ }\mu\text{m}$ ($15 \cdot 10^{-6}\text{ m}$), and the density of water is $\rho_{\text{water}} = 1000\text{ kg/m}^3$. The dynamic viscosity of air on the day of measurement is $\eta = 1.8 \cdot 10^{-5}\text{ Pa}\cdot\text{s}$, and the acceleration due to gravity is $g = 9.81\text{ m/s}^2$. Calculate the uniform terminal sinking velocity of the mist droplet! (The buoyant force of air is negligible due to its minute density).

**Problem 2**
In a medical laboratory, the sedimentation of red blood cells is investigated in a water-based test fluid ($\rho_f = 1000\text{ kg/m}^3$, $\eta = 0.001\text{ Pa}\cdot\text{s}$). For the calculation, consider the red blood cells as perfect spheres with a radius of $r = 3\text{ }\mu\text{m}$ and a density of $\rho_t = 1100\text{ kg/m}^3$. The test tube is placed in a centrifuge where the artificial acceleration due to gravity is exactly five hundred times the earthly $g$ value ($g_{\text{centrifuge}} = 500 \cdot 9.81\text{ m/s}^2$). What uniform sedimentation velocity do the cells move at within the fluid while the centrifuge is operating, assuming that Stokes' law is valid for the motion?

**Problem 3**
Inside a closed mechanical apparatus, there is 5W-30 motor oil at $20\text{ }^{\circ}\text{C}$ with a density of $\rho_{\text{oil}} = 850\text{ kg/m}^3$ and a dynamic viscosity of $\eta = 0.175\text{ Pa}\cdot\text{s}$ based on the table in the lesson. A tiny, spherical air bubble with a diameter of $d = 2\text{ mm}$ forms in the oil and begins to move upward due to the buoyant force. The density of air inside the bubble is negligible ($0\text{ kg/m}^3$), and the acceleration due to gravity is $g = 9.81\text{ m/s}^2$. Calculate the uniform rising velocity of the bubble in the oil, and based on your result, check by calculating the Reynolds number whether the validity condition for Stokes' law ($Re < 1$) is truly satisfied!