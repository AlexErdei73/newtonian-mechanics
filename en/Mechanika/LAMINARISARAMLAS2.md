# Laminar Flows II.

## The Hagen–Poiseuille Law

### Experiment

[16 tubes are equivalent to a single tube twice as thick](https://www.youtube.com/watch?v=wn6eRMIOJ1k)

The experiment demonstrates that a pressure difference is required to maintain flow inside a pipe. At the beginning of the experiment, the tanks are filled, so hydrostatic pressure drives the fluid through the tubes against fluid friction. It is also observed that the fluid drains from both tanks in exactly the same amount of time. One tank empties through 16 thin tubes, while the other empties through just a single tube.

For the single-tube tank, the internal diameter of the pipe is exactly twice as thick as that of the individual tubes in the other tank. From this, we can conclude that the volume of fluid flowing per unit time is proportional to the 4th power of the pipe's radius or diameter. This is because a pipe twice as thick carries 16 times as much fluid ($2^4 = 16$) under identical conditions than a single tube of unit thickness.

Let us denote the volume of fluid flowing per unit time as $Q$, which will henceforth be referred to as the **volumetric flow rate**. The relationship between the pressure difference and the volumetric flow rate can be written as follows:

$$
Q = \frac{\pi r^4}{8\eta l} \Delta p
$$

This relationship is valid for straight, cylindrical pipes whose length is significantly greater than their internal diameter. The flow must be strictly laminar, which in practice means the Reynolds number must be well below 2300. In this formula, $r$ is the internal radius of the pipe, $\eta$ is the dynamic viscosity of the fluid, and $l$ is the length of the investigated pipe section across which a pressure difference of $\Delta p$ occurs to establish steady, laminar flow.

This relationship was originally determined empirically, but it was later derived theoretically from the Navier–Stokes fundamental equations of fluid dynamics. The derivation assumes that the fluid velocity exactly at the pipe wall is zero, meaning the lowest layer of fluid practically "sticks" to the wall. This requirement applies universally to viscous flows and is called the **no-slip condition**.

The flow velocity reaches its maximum exactly at the center (the centerline) of the pipe. The mathematical derivation also reveals that the resulting velocity profile is parabolic. This means a quadratic function describes the change in velocity as a function of the radius measured from the pipe's centerline. We can observe this in the spectacular experiment below:

### Experiment

[Demonstration of the parabolic velocity profile](https://www.youtube.com/watch?v=vhDaCZZ0Sc4&t=117s)

### Example

A horizontal glass tube with an internal diameter of $5\text{ mm}$ has a length of $2\text{ m}$. One end of the tube opens into a tank where glycerin stands at a height of $30\text{ cm}$. The other end of the tube opens freely to the air. Let us calculate the pressure difference between the pipe ends! What are the volumetric flow rate and the average flow velocity? What is the Reynolds number? Can we apply the Hagen–Poiseuille law?  
*(Data: The density of glycerin is $\rho = 1261\text{ kg/m}^3$, its dynamic viscosity is $\eta = 1.412\text{ Pa}\cdot\text{s}$, and the acceleration due to gravity is $g = 9.81\text{ m/s}^2$)*

The driving pressure at the inlet of the pipe is provided by the hydrostatic pressure of the glycerin in the tank, while the pressure at the free end is zero. The driving pressure difference is therefore:

$$
\Delta p = \rho g h = 1261 \cdot 9.81 \cdot 0.3 = 3711\text{ Pa}
$$

The internal radius of the pipe is half the diameter: $r = \frac{d}{2} = 2.5\text{ mm} = 2.5 \cdot 10^{-3}\text{ m}$. Let us substitute the data into the Hagen–Poiseuille law to calculate the volumetric flow rate $Q$:

$$
Q = \frac{\pi r^4}{8\eta l} \Delta p = \frac{3.1416 \cdot (2.5 \cdot 10^{-3})^4}{8 \cdot 1.412 \cdot 2} \cdot 3711 = 2.016 \cdot 10^{-8}\text{ m}^3/\text{s}
$$

The average flow velocity ($u$) is obtained by dividing the volumetric flow rate by the cross-sectional area of the pipe ($A = \pi r^2$):

$$
u = \frac{Q}{\pi r^2} = \frac{2.016 \cdot 10^{-8}}{3.1416 \cdot (2.5 \cdot 10^{-3})^2} = 1.027 \cdot 10^{-3}\text{ m/s}
$$

Let us check the nature of the flow by calculating the Reynolds number (where the characteristic dimension is the internal diameter $d$):

$$
Re = \frac{\rho d u}{\eta} = \frac{1261 \cdot 5 \cdot 10^{-3} \cdot 1.027 \cdot 10^{-3}}{1.412} = 0.00459
$$

Since the calculated Reynolds number is orders of magnitude smaller than the critical value ($Re = 0.00459 \ll 2300$), the flow is perfectly steady and laminar. The application of the law is entirely justified and accurate.

## Analogy with Ohm's Law in Electricity

### Experiment

[Ohm's Law](https://www.youtube.com/shorts/ewW0j5dC3J4)

In electricity, we learned that wires possess resistance, and this applies to electrical loads as well. If we connect a load with a resistance $R$ to an ideal battery with a voltage $U$, a constant current will flow in the circuit, which can be calculated as follows:

$$
I = \frac{U}{R}
$$

This relationship is Ohm's law. It is completely analogous to our hydrodynamic relationship. The Hagen–Poiseuille law can also be written in the following form:

$$
Q = \frac{\Delta p}{R_{\text{hydr}}}
$$

Here, $R_{\text{hydr}}$ is the hydrodynamic (or hydraulic) resistance. The volumetric flow rate $Q$ corresponds to the electrical current $I$, while the pressure difference $\Delta p$ corresponds to the voltage $U$ of the battery.

This analogy holds for other relationships as well. For example, the work done per unit time by a battery (known as electrical power) is given in electricity by:

$$
P = \frac{\Delta W}{\Delta t} = U \cdot I
$$

The work done per unit time on the fluid inside a pipe by gravity (or a pump), which is the hydraulic power, has exactly the same structure:

$$
P = \frac{\Delta W}{\Delta t} = \frac{F \cdot \Delta x}{\Delta t} = \frac{\Delta p \cdot R^2\pi \cdot \Delta x}{\Delta t} = \Delta p \frac{\Delta V}{\Delta t} = \Delta p \cdot Q 
$$

Thus, the relationships correspond to each other perfectly. The calculation of hydrodynamic resistance based on the pipe's radius is as follows:

$$
R_{\text{hydr}} = \frac{8\eta l}{\pi r^4}
$$

However, this analogy diverges in an exciting way at one specific point. Electrical resistance depends on the material quality, is directly proportional to the length $l$ of the wire, and is inversely proportional to the cross-section of the wire, meaning the square of the radius ($r^2$). For hydrodynamic resistance, this is almost identical, but the fourth power of the radius ($r^4$) appears in the denominator instead of $r^2$. The reason for this is that while all charges drift at an average uniform velocity like a solid block inside a wire, a parabolic velocity distribution develops in a fluid flowing through a pipe due to the no-slip condition.

---

## Physical Explanation of the Analogy

Charged particles (electrons) moving inside conductors drift under the influence of an electric field force. These particles do not move without obstruction in the metal either. The electric force accelerates them, similarly to a sphere dropped into a viscous fluid that is accelerated by gravity. 

The electrons also experience an average braking force proportional to their drift velocity, identical to the Stokes resistive force, proportional to velocity, acting on a sphere sinking in a viscous fluid. When the electrons reach a uniform drift velocity, the driving electric force and the internal braking force come into equilibrium with each other:

$$
\frac{U \cdot e}{l} = \beta \cdot v_{\text{drift}}
$$

*   $e$: the charge of an electron ($\text{C}$)
*   $U/l$: the electric field strength inside the wire ($\text{V/m}$)
*   $\beta$: the microscopic friction coefficient characteristic of the material structure

If there are $n$ free electrons per unit volume inside the wire, then the current intensity $I$ flowing in the circuit can be easily calculated:

$$
I = \frac{\Delta Q}{\Delta t} = \frac{n \cdot r^2\pi \cdot v_{\text{drift}}\Delta t \cdot e}{\Delta t} = n \cdot e \cdot r^2\pi \cdot v_{\text{drift}}
$$

Let us substitute the expression obtained for the drift velocity from the equilibrium of forces into this equation:

$$
I = n \cdot e \cdot r^2\pi \cdot \frac{U \cdot e}{\beta \cdot l} = \frac{U}{\frac{\beta \cdot l}{n \cdot e^2 \cdot r^2\pi}} = \frac{U}{R}
$$

From this derivation, we obtain the following closed formula for the electrical resistance $R$:

$$
R = \frac{\beta}{n \cdot e^2} \cdot \frac{l}{r^2\pi}
$$

Thus, we have arrived precisely at Ohm's law! The derivation clearly shows that the resistance of the wire is directly proportional to the length $l$ and inversely proportional to the cross-sectional area $r^2\pi$. The proportionality factor ($\frac{\beta}{n \cdot e^2}$) is nothing other than the **electrical resistivity** of the metal, which contains constants depending solely on the material quality.

---

## Problems

**Problem 1**
In a medical laboratory, pure water is forced through a straight capillary tube with a length of $l = 50\text{ cm}$ and an internal diameter of $d = 2\text{ mm}$. The dynamic viscosity of water at the temperature of measurement is $\eta = 0.001\text{ Pa}\cdot\text{s}$. The driving pressure difference maintained between the two ends of the tube is $\Delta p = 2000\text{ Pa}$. What is the volumetric flow rate $Q$ of the water flow inside the tube based on the Hagen–Poiseuille law?

**Problem 2**
The human body maintains the volumetric flow rate of flowing blood at a constant level inside a healthy artery. Let us assume that due to a disease (calcification), the internal radius ($r$) of the artery decreases to exactly half ($1/2$) of its original value over a specific section, while the length of the section and the viscosity of the blood remain unchanged. By how many times does the hydraulic resistance of the section increase as a result of the narrowing? By how many times must the pressure difference $\Delta p$ between the two endpoints increase so that the delivered volumetric flow rate $Q$ does not decrease?

**Problem 3**
The horizontal lubrication pipe of a hydraulic machine group has a length of $l = 4\text{ m}$ and an internal diameter of $d = 10\text{ mm}$. 5W-30 motor oil at $20\text{ }^{\circ}\text{C}$ flows in the pipe, with a density of $\rho = 850\text{ kg/m}^3$ and a dynamic viscosity of $\eta = 0.175\text{ Pa}\cdot\text{s}$. The driving pressure difference ruling in the system is $\Delta p = 2 \cdot 10^5\text{ Pa}$. Calculate the resulting volumetric flow rate $Q$ and the mean velocity $u$ inside the pipe! Based on the obtained velocity, determine the Reynolds number and decide whether the Hagen–Poiseuille law is truly valid (meaning $Re < 2300$)?