# Coupled Oscillations *

## Experiments

[Coupled Oscillations on an Air Track](https://www.youtube.com/shorts/71qpMFz4QPU)

## Simulation

[Coupled Oscillations](https://alexerdei73.github.io/physics-engine/project/#b1063662-b2d3-414e-92b8-83432592bea3)

In the case of the simulation, the phenomenon presented in the experiment can be seen very clearly. The difference is that while three identical springs are featured in the experiment, here the middle spring is explicitly weak. Therefore, two symmetrical bodies, capable of oscillation and each attached to an external spring, are connected to each other by a third, very weak spring, by which we establish a loose coupling between the two mass points.

The simulation presents the so-called normal modes (natural oscillation modes) of the oscillating system in parallel. There are two of these now, since the system has two degrees of freedom (coordinates). The displacement of the first body and the displacement of the second body are the coordinates of the system, which can vary over time. In the case of the first normal mode, the bodies oscillate in phase, both with the same frequency. In the case of the second normal mode, the two bodies oscillate in opposite phase, also with a matching frequency. The frequency of the second normal mode is larger than that of the first normal mode, which will be essential later on. These frequencies are the resonance frequencies of the system.

If we stop the simulation at any moment, we can establish that in the case of the first normal mode, adding the signed displacement of the first body to the displacement of the first body obtained in the second normal mode yields precisely the displacement of the first body in the third, combined case (which by itself is not a normal mode). Let us check this as well!

### Example

The simulation was stopped at the time instant $t = 10.7688\ \text{s}$. In the simulation, we must read the $x$ coordinate of body 9, then subtracting the equilibrium $2\ \text{m}$ from it, we get the displacement of body 1 in normal mode I:

$$
x_{\text{I},1} = 1.8754 - 2 = -0.1246\text{ m}
$$

In the second normal mode, we get the displacement of body 1 similarly, only now we read the $x$ coordinate of body 5 in the simulation:

$$
x_{\text{II},1} = 2.4903 - 2 = 0.4903\text{ m}
$$

Finally, the displacement of body 1 in the combined oscillation can be determined in the simulation directly from the $x$ coordinate of body 1:

$$
x_1 = 2.3657 - 2 = 0.3657\text{ m}
$$

Now we can indeed see that the following superposition relationship is valid at the selected moment:

$$
x_1 = x_{\text{I},1} + x_{\text{II},1} = -0.1246 + 0.4903 = 0.3657\text{ m}
$$

This relationship is valid at any moment for the oscillation developing under the given initial conditions. A similar relationship is true for body 2:

$$
x_2 = x_{\text{I},2} + x_{\text{II},2}
$$

We do not perform the proof of these relationships now. The reason for this is that to do so, we would have to solve the coupled system of differential equations, which calculation we leave for after mastering advanced mathematical knowledge.

## Beats

### Experiments

[Beats with Tuning Forks](https://www.youtube.com/shorts/_bV_mEakQ7o)

[Superposition of Oscillations in the Same Direction](https://www.youtube.com/watch?v=e2YRtEMvFiQ)

### Superposition of Oscillations in the Same Direction

Let the displacement $x$ be the sum of two harmonic oscillations, $x_{\text{I}}$ and $x_{\text{II}}$. Their frequencies may differ to a small extent from each other.

$$
x_{\text{I}} = A \cos(\omega_{\text{I}} t)
$$

$$
x_{\text{II}} = A \cos(\omega_{\text{II}} t)
$$

The resultant oscillation is the following superposition:

$$
x = x_{\text{I}} + x_{\text{II}}
$$

In order to be able to transform this into a product form, we will need the well-known trigonometric addition theorems:

$$
\cos(\alpha + \beta) = \cos \alpha \cos \beta - \sin \alpha \sin \beta
$$

$$
\cos(\alpha - \beta) = \cos \alpha \cos \beta + \sin \alpha \sin \beta
$$

If we add these two identities together now, we get the necessary relationship:

$$
\cos(\alpha + \beta) + \cos(\alpha - \beta) = 2 \cos \alpha \cos \beta
$$

Let us determine the **phase angles** $\alpha$ and $\beta$ appearing in the parentheses so that with their help we can write down the time-dependent argument of our two oscillations:

$$
\alpha + \beta = \omega_{\text{II}} t
$$

$$
\alpha - \beta = \omega_{\text{I}} t
$$

Adding these equations together, and subtracting them from each other, we get the pure time-dependent form of the phase angles $\alpha$ and $\beta$:

$$
\alpha = \frac{\omega_{\text{II}} + \omega_{\text{I}}}{2} t
$$

$$
\beta = \frac{\omega_{\text{II}} - \omega_{\text{I}}}{2} t
$$

It can be seen that the expressions $\alpha$ and $\beta$ are angles, which are produced as the product of a certain angular frequency-like term and time. Substituting these back into the equation of the superposition:

$$
x = x_{\text{I}} + x_{\text{II}} = A \cos(\omega_{\text{I}} t) + A \cos(\omega_{\text{II}} t) = A(\cos(\omega_{\text{I}} t) + \cos(\omega_{\text{II}} t))
$$

$$
x = 2A \cos \alpha \cos \beta
$$

And the final result takes the following form:

$$
x = 2A \cos\left(\frac{\omega_{\text{II}} + \omega_{\text{I}}}{2} t\right) \cos\left(\frac{\omega_{\text{II}} - \omega_{\text{I}}}{2} t\right)
$$

This resultant oscillation is a fast oscillation characterized by the average of the two angular frequencies ($\frac{\omega_{\text{II}} + \omega_{\text{I}}}{2}$), whose amplitude pulsates (is modulated) with a much slower frequency, half of the difference angular frequency ($\frac{\omega_{\text{II}} - \omega_{\text{I}}}{2}$), exactly as we detected in the experiments.

### Beats in the Resonance Experiment

We could already observe this phenomenon when we examined forced oscillations and resonance. Beats occurred there too when the frequency of the driving force closely matched the natural frequency of the system, but was not completely equal to it. The reason for this is that depending on the initial conditions, the system's own, damped free oscillation is also always excited, and this is added to the external forced oscillation. In reality, the beats die out there over time, since the free oscillation is damped over time due to friction, so after a sufficiently long time only the pure forced oscillation remains. Such transient, dying out phenomena are called *transients* in physics. Therefore, the beats experienced in the resonance experiment are a transient process.

## Explanation of the Simulation

In the simulation, the amplitude is $A = 0.5\text{ m}$. The angular frequencies $\omega_{\text{II}}$ and $\omega_{\text{I}}$ can also be determined from the mechanical data. The spring constant of the two outer springs is $D_1 = 0.5\text{ N/m}$, that of the middle coupling spring is $D_2 = 0.05\text{ N/m}$. The mass of the oscillating bodies is $m = 0.2\text{ kg}$ each. Let us look at the motion of body 1!

The equations of the pure normal modes are:

$$
x_{\text{I},1} = x_{\text{I},2} = A \cos(\omega_{\text{I}} t)
$$

$$
x_{\text{II},1} = -x_{\text{II},2} = A \cos(\omega_{\text{II}} t)
$$

Thus, the superposition relationship

$$
x = x_{\text{I},1} + x_{\text{II},1}
$$

precisely means that the trigonometrically derived formula for beats will be valid for the instantaneous displacement of body 1.

### Example

When does the amplitude of body 1 become zero for the first time?

To answer this question, we must determine the natural angular frequencies of the system!

In the first (symmetrical, in-phase) mode, the two bodies move together with identical displacements, so the length of the middle coupling spring does not change at all (it exerts no force). In this case, only the two outer springs act on the bodies:

$$
\omega_{\text{I}}^2 = \frac{D_1}{m} = \frac{0.5}{0.2} = 2.5
$$

$$
\omega_{\text{I}} = \sqrt{2.5} \approx 1.5811\text{ rad/s}
$$

The determination of the other (antisymmetrical, opposite-phase) angular frequency is slightly more complex. Let us notice that the midpoint of the middle spring is completely motionless in normal mode II due to symmetry! If the displacement of body 1 is $x$, then the elongation (or compression) of the middle spring will be precisely $2x$ due to the opposite motion. The force of this inner spring points toward the equilibrium position, meaning it **adds to** the restoring force of the outer spring. Writing the equation of motion for body 1:

$$
ma = F_{\text{e},x} = -D_1 x - 2D_2 x = -(D_1 + 2D_2)x
$$

$$
a = - \frac{D_1 + 2D_2}{m} x
$$

Based on this, the angular frequency of the second mode is:

$$
\omega_{\text{II}}^2 = \frac{D_1 + 2D_2}{m} = \frac{0.5 + 2 \cdot 0.05}{0.2} = \frac{0.6}{0.2} = 3
$$

$$
\omega_{\text{II}} = \sqrt{3} \approx 1.7321\text{ rad/s}
$$

Let us define the **beat angular frequency** ($\omega_{\text{beat}}$) that performs the modulation of the amplitude:

$$
\omega_{\text{beat}} = \frac{\omega_{\text{II}} - \omega_{\text{I}}}{2} = \frac{1.7321 - 1.5811}{2} = 0.0755\text{ rad/s}
$$

The period of the modulation is:

$$
T = \frac{2\pi}{\omega_{\text{beat}}} = \frac{2 \cdot 3.1416}{0.0755} \approx 83.22\text{ s}
$$

The first full amplitude minimum (when body 1 stops completely because it has transferred all its energy to body 2) occurs at a quarter of the modulation period, that is:

$$
t_{\text{min}} = \frac{T}{4} = \frac{83.22}{4} \approx 20.81\text{ s}
$$


## Curiosity: Energy Flow in Other Forms (Outlook)

The phenomenon observed in coupled oscillations—namely that energy periodically migrates between different parts of the system or forms of motion—can be caught not only with linear springs.

[What If Swings Had Springs Instead Of Ropes: Autoparametric Resonance](https://www.youtube.com/watch?v=MUJmKl7QfDU)

[Rugós inga módusváltása (Szimuláció)](https://alexerdei73.github.io/physics-engine/project/#a3802550-a697-495b-a39e-de8a9bf5bab8)

In the video and the simulation, we can see a pendulum attached to a spring, which illustrates an extremely spectacular physical phenomenon, the so-called **autoparametric resonance** [0:00:27]. If the system is initially vibrated purely vertically (up-and-down harmonic oscillation), after a while this vertical motion stops completely, and the body switches by itself into a lateral swinging motion (like a classic pendulum) [0:01:21]. After this, the process reverses: the amplitude of the pendulum swing begins to decrease, and the energy returns to the vertical spring oscillation [0:01:22]. The mechanical energy thus periodically migrates back and forth between the two completely different forms of motion [0:09:02].

Steve Mould presents another classic example, the **Wilberforce pendulum** [0:10:02]. This system consists of a heavy metal disk suspended from a helical spring, which also has two main modes of motion: a vertical translational and a twisting (rotational) mode around its axis [0:10:01]. When the spring is stretched vertically, due to the spiral geometry, the spring untwists slightly during extension, which exerts a torque on the disk [0:10:14]. If the twisting frequency is tuned exactly to the frequency of the vertical oscillation by adjusting the screws, the energy flows completely from the vertical oscillation into the pure twisting motion, and then back [0:10:32].

Although the mathematical description of these systems is much more complex—their equations of motion lead to the so-called Mathieu-type differential equations [0:12:25]—the physical essence is the same as what we calculated for the small carts. The system has two normal modes with frequencies extremely close to each other, between which the mechanical energy flows back and forth slowly, like a beat, due to the tiny geometric or coupling elastic relationship [0:09:02].

---

## Problems

**Problem 1: Effect of Coupling Strength**

Let us assume that the middle coupling spring is replaced with a significantly stronger one, whose spring constant matches that of the outer springs ($D_2 = 0.5\text{ N/m}$), while the other data remain unchanged ($m = 0.2\text{ kg}$, $D_1 = 0.5\text{ N/m}$). 
- Determine the angular frequency of normal modes I and II!
- Calculate how much the period of the beat envelope curve will be in this case!
- Formulate based on the obtained results how increasing the strength of the coupling affects the period of the beat!

**Problem 2: Initial Conditions and Energy**

In the described coupled oscillating system, at the time instant $t = 0$, body 1 is released from a displacement $x_0 = 10\text{ cm}$ without initial velocity, while body 2 is exactly in its equilibrium position ($x_2 = 0\text{ cm}$), also without initial velocity. 
- Express the displacement of the two bodies as a function of time as the superposition of the normal modes! 
- Explain briefly, based on the derived equations, how the mechanical energy flows between the two bodies during the motion!

**Problem 3: Transient Beat in Forced Oscillation**

The natural frequency of a damped spring-mass system is $f_0 = 5\text{ Hz}$. The system is driven by a harmonically varying external force, whose frequency is $f_{\text{g}} = 5.2\text{ Hz}$. Weak damping is present in the system.
- Calculate how many beats (amplitude maxima) can be observed per second in the first few seconds following the turning on of the driving force, before the transient phenomenon completely dies out!
