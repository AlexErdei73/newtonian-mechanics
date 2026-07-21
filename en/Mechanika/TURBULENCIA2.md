# The Kolmogorov K41 Model for the Energy Cascade *

## History of the Model

Turbulence is perhaps the single remaining unsolved problem in classical physics. It has not even been proven that the Navier–Stokes equations possess mathematically well-behaved, physically meaningful solutions under all physically realizable circumstances. We do not know for certain whether there are points in the flow field where the energy density or velocity could suddenly become infinite. This mathematical problem is so fundamental that the Clay Mathematics Institute has established a one-million-dollar Millennium Prize for proving the existence of a smooth solution (or providing a counterexample that disproves it).

Because solving the governing equations directly is exceptionally difficult, it is understandable that an exact description of how turbulence develops is still out of reach. In practice, however, engineers have a pressing need for mathematical methods that can characterize turbulence or simplify its description enough to extract useful information for solving everyday fluid dynamics problems.

One such brilliant and highly useful tool is Andrey Kolmogorov's turbulence model formulated in 1941 (the K41 model). Rather than solving the governing equations directly, this approach relies on a few simple, statistical assumptions and dimensional analysis.

## Introduction to the Model

Let us once again imagine fluid flow inside a pipe, but this time water is flowing instead of glycerin, the flow is quite fast, and the pipe is thick—meaning the Reynolds number is high. The fluid flows from an area of high pressure to an area of low pressure. This pressure difference represents a force doing work on the fluid to sustain the mechanical energy, which is continuously being converted into internal energy within the fluid. 

If we measure the fluid velocity at a single point in the developing turbulent flow, we find that the velocity fluctuates extremely rapidly around an average value:

$$
u(t) = \overline{u} + u'(t)
$$

Here, $\overline{u}$ is the constant average velocity of the flow, which is uniform throughout the pipe. The term $u'(t)$ is the rapidly fluctuating component of the velocity, whose time average is precisely zero. These fluctuations arise because numerous eddies of various sizes pass through that specific point over a short duration, and inside these eddies, the velocity of the water deviates to a greater or lesser extent from the average. Without getting lost in the details, by experimentally measuring the function $u'(t)$, computer-aided methods can determine the energy distribution across different eddy sizes relative to a unit mass of fluid. This quantity, $E$, represents the spectral density of kinetic energy.

Essentially, this process mimics what a graphic equalizer does with sound when it splits an audio signal into its deep (low-frequency) components, mid-frequency components, and finally, high-frequency components. This calculation is a routine computational task today. Kolmogorov characterized the size of eddies using the wavenumber $k$, rather than the distance $D$ (diameter):

$$
k = \frac{2\pi}{r}
$$

Thus, $k$ is the wavenumber, which is inversely proportional to the radius $r$ of the eddies. The spectral density therefore becomes a function of the wavenumber:

$$
E = E(k)
$$

Here, $E$ represents the kinetic energy stored by $1\text{ kg}$ of fluid inside the eddies whose wavenumbers fall between $k$ and $k + \Delta k$, relative to a unit wavenumber length. That is:

$$
E = \frac{\text{Energy in } 1\text{ kg of fluid inside eddies with wavenumbers between } k \text{ and } k + \Delta k}{\Delta k}
$$

Let's calculate the fundamental SI base unit for the spectral density $E$:

$$
[E] = \frac{\text{J}/\text{kg}}{1/\text{m}} = \frac{\text{N}\cdot\text{m}/\text{kg}}{1/\text{m}} = \frac{\text{kg}\cdot\text{m}/\text{s}^2 \cdot \text{m} / \text{kg}}{1/\text{m}} = \frac{\text{m}^3}{\text{s}^2}
$$

First, let's look at how Kolmogorov characterizes viscosity. He uses the *kinematic viscosity* ($\nu$), which is the ratio of the dynamic viscosity ($\eta_{\text{din}}$) to the density $\rho$:

$$
\nu = \frac{\eta_{\text{din}}}{\rho}
$$

After simplifying the units, its unit is:

$$
[\nu] = \frac{\text{Pa}\cdot\text{s}}{\text{kg}/\text{m}^3} = \frac{\frac{\text{kg}\cdot\text{m}}{\text{s}^2\cdot\text{m}^2}\cdot\text{s}}{\text{kg}/\text{m}^3} = \frac{\text{kg}}{\text{m}\cdot\text{s}} \cdot \frac{\text{m}^3}{\text{kg}} = \frac{\text{m}^2}{\text{s}}
$$

Kolmogorov uses the notation $\eta$ to denote the radius of the smallest eddies. When energy cascades down and reaches the eddy radius $\eta$, viscosity becomes dominant and dissipates the energy into heat. Within these eddies, the fluid velocity resulting from its rotation is $v_{\eta}$.

Now we can determine the size of the smallest vortex filaments. According to Kolmogorov, this can only depend on two things: the rate at which energy enters a unit mass of fluid within the cascade per unit time ($\varepsilon$, whose unit is $\text{m}^2/\text{s}^3$), and the kinematic viscosity $\nu$. The assumed relationship is:

$$
\eta = C \cdot \varepsilon^a \cdot \nu^b
$$

Performing dimensional analysis means the units on the left and right sides must match:

$$
\text{m}^1 = \left(\frac{\text{m}^2}{\text{s}^3}\right)^a \cdot \left(\frac{\text{m}^2}{\text{s}}\right)^b = \text{m}^{2a+2b} \cdot \text{s}^{-3a-b}
$$

By matching the powers, the exponents on the left and right sides must be equal:

$$
1 = 2a + 2b
$$

$$
0 = -3a - b
$$

Adding twice the second equation to the first equation gives:

$$
1 = -4a \implies a = -\frac{1}{4}
$$

Substituting this back into the second equation:

$$
0 = \frac{3}{4} - b \implies b = \frac{3}{4}
$$

Based on this, the fourth-root formula obtained for the smallest eddy size is:

$$
\eta \sim \left(\frac{\nu^3}{\varepsilon}\right)^{1/4}
$$

The relationship for velocity can be derived in a similar manner:

$$
v_{\eta} = K \cdot \varepsilon^c \cdot \nu^d
$$

$$
\frac{\text{m}}{\text{s}} = \left(\frac{\text{m}^2}{\text{s}^3}\right)^c \cdot \left(\frac{\text{m}^2}{\text{s}}\right)^d
$$

$$
1 = 2c + 2d
$$

$$
-1 = -3c - d
$$

Solving this system of equations yields the exponents:

$$
c = \frac{1}{4}, \quad d = \frac{1}{4}
$$

From this, we get the microscopic velocity formula:

$$
v_{\eta} \sim (\varepsilon \cdot \nu)^{1/4}
$$

Let's examine the product of the two derived microscopic parameters:

$$
v_{\eta} \cdot \eta \sim (\varepsilon \cdot \nu)^{1/4} \cdot \left(\frac{\nu^3}{\varepsilon}\right)^{1/4} = \nu
$$

Thus, the local Reynolds number defined at the smallest scale is:

$$
Re_{\eta} = \frac{v_{\eta} \cdot \eta}{\nu} \sim 1 
$$

In the language of Kolmogorov's theory, this means that the kinetic energy is dissipated (turned into heat) precisely by those eddies whose individual eddy-level Reynolds number is of the order of $1$, which is small enough for internal friction to become the dominant factor governing their motion.

## Kolmogorov's Result for the $E(k)$ Function

Kolmogorov assumed that friction is negligible in the intermediate range of the energy cascade (the inertial subrange), meaning that the function $E(k)$ here can only depend on the energy dissipation rate $\varepsilon$ and the wavenumber $k$. It does not depend on the kinematic viscosity $\nu$:

$$
E(k) = D \cdot \varepsilon^x \cdot k^y
$$

Converting to units:

$$
\frac{\text{m}^3}{\text{s}^2} = \left(\frac{\text{m}^2}{\text{s}^3}\right)^x \cdot \left(\frac{1}{\text{m}}\right)^y
$$

Matching the exponents:

$$
3 = 2x - y
$$

$$
-2 = -3x \implies x = \frac{2}{3}
$$

$$
y = 2x - 3 = \frac{4}{3} - \frac{9}{3} = -\frac{5}{3}
$$

Our result is therefore the famous **Kolmogorov $-5/3$ spectrum law**:

$$
E(k) \sim \varepsilon^{2/3} \cdot k^{-5/3}
$$

## Experimental Verification

The function $E(k)$ can be determined from the measured values of the velocity signal $u'(t)$ using computer-based evaluation (Fourier transform). After that, the function simply needs to be plotted on a logarithmic scale. For the values of $k$ where the theoretical relationship holds, the curve must form a straight line with a slope of $-\frac{5}{3}$:

$$
\log E(k) = \log\left(D \cdot \varepsilon^{2/3} \cdot k^{-5/3}\right) = \log\left(D \cdot \varepsilon^{2/3}\right) - \frac{5}{3} \log k
$$

By introducing $Y = \log E(k)$ and $X = \log k$, we obtain the equation of a classic linear straight line:

$$
Y = -\frac{5}{3} X + B
$$

## Practical Application in Computational Fluid Dynamics (CFD)

Since $\varepsilon$ can be easily determined by measuring the global work done on the fluid (for instance, pump power), and the kinematic viscosity $\nu$ is a well-known tabulated value, the size range of the smallest eddies ($\eta$) and the velocity of these eddies ($v_{\eta}$) can be precisely calculated. These parameters strictly dictate the size of the cells (meshes) into which the flow domain must be divided when solving the Navier–Stokes equations via Direct Numerical Simulation (DNS). 

If a mesh coarser than this size is applied, the computer cannot account for the fastest, smallest eddies, energy accumulates at the grid nodes, and the simulation becomes erroneous or numerically explodes. Unfortunately, this size $\eta$ is extremely tiny (often just a few micrometers), meaning that direct DNS solutions generally require gigantic supercomputers and are unfeasible for the complete flow around a car or an airplane. 

However, this computation time can be substantially reduced if we only intend to calculate the average velocity $\overline{u}$ during engineering design (RANS - Reynolds-Averaged Navier-Stokes models). In such cases, a much coarser mesh is sufficient, but it is crucial that a so-called **turbulent viscosity** ($\nu_t$) is added to the real physical viscosity of the fluid during the simulation to substitute for the braking effect of small-scale eddies. The computer calculates this added value per cell based on the statistical principles of the Kolmogorov model, thereby providing fast approximate results that align well with experiments, which engineers can excellently utilize in everyday design.

---

## Worked Examples

### Example 1: Microscopic Eddies in Pipe Flow
Pure water at $20\text{ }^{\circ}\text{C}$ flows through a straight pipe under severe turbulence. The global Reynolds number of the flow is $Re = 100\ 000$, and the average velocity is $\overline{u} = 10\text{ m/s}$. According to measurements, the pressure drop due to friction in the pipe per meter is $\Delta p/L = 400\text{ Pa/m}$. 

**Question:** What is the inner diameter of the pipe? What is the specific energy dissipation rate $\varepsilon$ converted into heat per second in the fluid, what is the size $\eta$ of the smallest developing eddies, and what is the velocity $v_{\eta}$ generated within them?  
*(Data for water: density $\rho = 1000\text{ kg/m}^3$, dynamic viscosity $\eta_{\text{din}} = 10^{-3}\text{ Pa}\cdot\text{s}$)*

**Solution:**
Let us determine the kinematic viscosity $\nu$ of the water:

$$
\nu = \frac{\eta_{\text{din}}}{\rho} = \frac{10^{-3}}{1000} = 10^{-6}\text{ m}^2/\text{s}
$$

Calculate the pipe diameter $d$ from the global Reynolds number ($Re = \frac{\overline{u}\cdot d}{\nu}$):

$$
100\ 000 = \frac{10 \cdot d}{10^{-6}} \implies d = \frac{100\ 000 \cdot 10^{-6}}{10} = 0.01\text{ m} = 1\text{ cm}
$$

Let us calculate the specific energy dissipation rate $\varepsilon$. The hydraulic power delivered by the pump per meter is $P = Q \cdot \frac{\Delta p}{L}$. The volumetric flow rate is $Q = A \cdot \overline{u} = \frac{d^2\pi}{4} \cdot \overline{u}$. The mass of water contained within a 1-meter section of the pipe is $m = \frac{d^2\pi}{4} \cdot 1 \cdot \rho$. 
From the expression for the energy flow rate per unit mass ($\varepsilon = P/m$), the geometric terms cancel out:

$$
\varepsilon = \frac{\overline{u} \cdot \frac{\Delta p}{L}}{\rho} = \frac{10\text{ m/s} \cdot 400\text{ Pa/m}}{1000\text{ kg/m}^3} = 4\text{ m}^2/\text{s}^3
$$

Apply Kolmogorov's fourth-root formulas for the radius and rotational velocity of the microscopic eddies:

$$
\eta = \left( \frac{\nu^3}{\varepsilon} \right)^{1/4} = \left( \frac{(10^{-6})^3}{4} \right)^{1/4} = \left( \frac{10^{-18}}{4} \right)^{1/4} = (2.5 \cdot 10^{-19})^{1/4} \approx 22.4 \cdot 10^{-6}\text{ m} = 22.4\text{ }\mu\text{m}
$$

$$
v_{\eta} = (\varepsilon \cdot \nu)^{1/4} = (4 \cdot 10^{-6})^{1/4} \approx 0.0447\text{ m/s} = 4.47\text{ cm/s}
$$

**Conclusion:** The diameter of the macroscopic pipe is $1\text{ cm}$. In contrast, the radius of the smallest heat-generating vortex filaments inside the pipe is a mere $22.4\text{ }\mu\text{m}$ (their diameter is approx. $45\text{ }\mu\text{m}$), and the water within them swirls at a velocity of $4.47\text{ cm/s}$ in the smallest viscous zone.

---

### Example 2: Refutation of an Online Science Video
In a popular online science video, the following assertion is made: *“The kinetic energy stored in eddies of various sizes—relative to a unit mass of fluid—is proportional to the $5/3$ power of the diameter $D$ of the eddies ($E_D \sim D^{5/3}$).”*

**Question:** Show purely by dimensional analysis (matching units) that this assertion is erroneous in this form! Derive the correct power exponent for the true energy density as a function of spatial eddy size!

**Solution:**
According to the video, the energy distribution based on real spatial eddy size ($E_D$) depends on the diameter $D$ and the specific energy dissipation rate $\varepsilon$ ($E_D \sim \varepsilon^{2/3} \cdot D^{5/3}$). Let us check the units of the right-hand side using the standard SI units of Kolmogorov's theory:

*   The unit of $\varepsilon$: $\text{m}^2/\text{s}^3$, hence the unit of $\varepsilon^{2/3}$: $\text{m}^{4/3}/\text{s}^2$
*   The unit of the diameter $D$: $\text{m}$, hence the unit of $D^{5/3}$: $\text{m}^{5/3}$

Multiply the two units together according to the video's formula:

$$
[E_{\text{video}}] = \left(\frac{\text{m}^{4/3}}{\text{s}^2}\right) \cdot \text{m}^{5/3} = \frac{\text{m}^{(4/3 + 5/3)}}{\text{s}^2} = \frac{\text{m}^{9/3}}{\text{s}^2} = \frac{\text{m}^3}{\text{s}^2}
$$

The resulting unit is $\text{m}^3/\text{s}^2$. However, this is the unit of the spectral density $E(k)$ with respect to the wavenumber $k$, where the bandwidth is defined by the reciprocal of the wavenumber ($1/\text{m}$)!

**Determining the correct spatial dimension:**
If the density function is defined not by wavenumber, but by actual spatial size ($D$, measured in meters), then the spatial spectral density ($E_D$) specifies how much specific kinetic energy ($\text{J}/\text{kg} = \text{m}^2/\text{s}^2$) falls within a unit *meter range*. The correct SI unit for this is:

$$
[E_D] = \frac{\text{m}^2/\text{s}^2}{\text{m}} = \frac{\text{m}}{\text{s}^2}
$$

**Deriving the correct relationship via dimensional analysis:**
Let us assume that the correct spatial energy distribution in the inertial subrange also depends strictly on the variables $\varepsilon$ ($[\varepsilon] = \text{m}^2/\text{s}^3$) and $D$ ($[D] = \text{m}$):

$$
E_D = C \cdot \varepsilon^a \cdot D^b
$$

Let's write down the correct matching of units for both sides:

$$
\frac{\text{m}^1}{\text{s}^2} = \left(\frac{\text{m}^2}{\text{s}^3}\right)^a \cdot (\text{m})^b = \text{m}^{2a+b} \cdot \text{s}^{-3a}
$$

Based on the equality of powers, we obtain the following system:

*   For time ($\text{s}$): $-3a = -2 \implies a = \frac{2}{3}$
*   For length ($\text{m}$): $2a + b = 1$

Let's substitute the value $a = 2/3$ into the length equation:

$$
2 \cdot \left(\frac{2}{3}\right) + b = 1 \implies \frac{4}{3} + b = \frac{3}{3} \implies b = -\frac{1}{3}
$$

Our correct physical and dimensional result is therefore:

$$
E_D \sim \varepsilon^{2/3} \cdot D^{-1/3}
$$

**Conclusion:** The creators of the video committed the serious mathematical error of substituting $k \propto 1/D$ directly, without applying the coordinate transformation rules for density functions (converting the differentials, meaning the bandwidth factor $|dk| \propto D^{-2}dD$).

As we also saw in our lesson on gravitational energy:

$$
\Delta \left(\frac{1}{r}\right) \approx -\frac{1}{r^2} \Delta r
$$

This exact relationship (the transformation of differentials) must be applied when shifting from the wavenumber $k$ to the radius $r$ or diameter $D$ during the calculation of spectral density.

Dimensional analysis, acting as an infallible "lie detector," instantly demonstrates that the energy density of eddies in real space varies not according to a positive $5/3$ power, but according to a **negative $1/3$ power** ($D^{-1/3}$).

---

## Exercises

1. **Wind Tunnel Micro-Scales:** In the turbulent core flow of a wind tunnel, the measured specific energy dissipation rate is $\varepsilon = 12\text{ m}^2/\text{s}^3$. The kinematic viscosity of the air during the experiment is $\nu = 1.5 \cdot 10^{-5}\text{ m}^2/\text{s}$. Based on Kolmogorov's formulas, calculate the radius $\eta$ of the smallest developing eddies and the velocity $v_{\eta}$ measurable within them!

2. **Chemical Reactor Eddies:** In a chemical reactor, a dense fluid is mixed at a high rotation speed, with a specific energy input of $\varepsilon = 5\text{ m}^2/\text{s}^3$. The kinematic viscosity of the fluid is exactly two hundred times that of water: $\nu = 2 \cdot 10^{-4}\text{ m}^2/\text{s}$. Determine the radius $\eta$ of the smallest eddies developing in the reactor! By what factor has this microscopic boundary increased compared to the value measurable in pure water ($\nu_{\text{water}} = 10^{-6}\text{ m}^2/\text{s}$) at the exact same energy level?

3. **Spectrum Prediction on a Log-Log Scale:** An aerodynamic research group is analyzing the energy spectrum $E(k)$ of a turbulent wake developing behind a motor vehicle within the inertial subrange on a log-log graph. At a wavenumber corresponding to a larger eddy size, $k_1 = 2\text{ m}^{-1}$, the measured spectral energy density is $E(k_1) = 0.30\text{ m}^3/\text{s}^2$. Based on Kolmogorov's $-5/3$ law, calculate the expected spectral energy value at a much smaller eddy size where the wavenumber is exactly four times the first one ($k_2 = 8\text{ m}^{-1}$)!