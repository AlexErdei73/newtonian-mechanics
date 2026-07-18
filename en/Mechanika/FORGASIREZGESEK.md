# Torsional Oscillations

## Experiments

[Torsion Pendulum I](https://www.youtube.com/watch?v=6iucHadtnX4)

[Torsion Pendulum II](https://www.youtube.com/watch?v=GGO2I_sN8hI)

## The Equation of Motion

The most typical example of torsional oscillations is the torsion pendulum. A body fixed to a vertical, elastic wire (or spiral spring) is turned in a horizontal plane from its equilibrium position and then released. To write down the equation of motion, we start again from the fundamental equation of rotational motion:

$$
\Theta \beta = M_{z,e}^k
$$

Here $\Theta$ is the moment of inertia relating to the axis oscillations of the suspension, and $\beta$ is the angular acceleration.

When the wire is twisted, an elastic stress develops in it, which exerts a torque on the body in the opposite direction to the displacement. According to the form of Hooke's law relating to rotational motion, this restoring torque is directly proportional to the angle $\phi$ of the twisting:

$$
M_{z,e}^k = -D^* \phi
$$

Here $D^*$ is the directional torque or torsional constant characteristic of the wire, its unit of measurement is $\text{Nm/rad}$. It shows how much torque is required to twist the wire by 1 radian.

Substituting this into the equation of motion we get:

$$
\Theta \beta = -D^* \phi
$$

$$
\beta = -\frac {D^*} {\Theta} \phi
$$

**Important difference compared to the physical pendulum:** Here, no small-angle approximation ($\sin\phi \approx \phi$) was needed! As long as the twisting does not exceed the elastic limit of the wire, this equation is precisely valid even in the case of larger displacements (even several complete turns). 

Since the angular acceleration is directly proportional to the displacement and is in the opposite direction to it, the solution here too is simple harmonic motion.

## The Period

From the form of the equation, we can read the square of the angular frequency:

$$
\omega^2 = \frac {D^*} {\Theta}
$$

And the period ($T = \frac{2\pi}{\omega}$) develops in the following way:

$$
\frac {4\pi^2} {T^2} = \frac {D^*} {\Theta}
$$

$$
\frac {T^2} {4\pi^2} = \frac {\Theta} {D^*}
$$

$$
T = 2\pi \sqrt {\frac {\Theta} {D^*}}
$$

It can be seen that the period is independent of the acceleration due to gravity ($g$), it depends exclusively on the inertia of the body and the elastic properties of the wire.

### Examples
1. A homogeneous solid metal disk of radius $R = 0.1\text{ m}$, mass $m = 2\text{ kg}$ is suspended by its center from a steel wire. The directional torque of the wire is $D^* = 0.05\text{ Nm/rad}$. How large is the period of the torsion pendulum?

First, let us determine the moment of inertia of the disk relating to its own axis:

$$
\Theta = \frac 1 2 mR^2 = \frac 1 2 \cdot 2 \cdot (0.1)^2 = 0.01\text{ kg m}^2
$$

Substituting into the formula of the period:

$$
T = 2\pi \sqrt {\frac {\Theta} {D^*}} = 2\pi \sqrt {\frac {0.01} {0.05}} = 2\pi \sqrt {0.2} \approx 2.81\text{ s}
$$

2. **Measurement of the moment of inertia of an unknown body (Laboratory method).** 
A torsion pendulum is given, of which we know neither the directional torque ($D^*$) nor the moment of inertia of its original fixed body ($\Theta_0$). We measure the period of the system, which is $T_1 = 1.50\text{ s}$.
After this, we place a standard body (e.g., a ring) of known moment of inertia $\Theta_{plusz} = 0.02\text{ kg m}^2$ onto the axis symmetrically. The new period will be $T_2 = 2.10\text{ s}$ will be. How large is the moment of inertia $\Theta_0$ of the original system?

Let us write down the square of the period for both cases:
Case 1: $T_1^2 = 4\pi^2 \frac {\Theta_0} {D^*}$
Case 2: $T_2^2 = 4\pi^2 \frac {\Theta_0 + \Theta_{plusz}} {D^*}$

Let us divide the second equation by the first (thus the $4\pi^2$ and the unknown $D^*$ also drop out):

$$
\frac {T_2^2} {T_1^2} = \frac {\Theta_0 + \Theta_{plusz}} {\Theta_0}
$$

$$
\frac {T_2^2} {T_1^2} = 1 + \frac {\Theta_{plusz}} {\Theta_0}
$$

Let us substitute the numerical data:

$$
\frac {2.10^2} {1.50^2} = 1 + \frac {0.02} {\Theta_0}
$$

$$
1.96 = 1 + \frac {0.02} {\Theta_0}
$$

$$
0.96 = \frac {0.02} {\Theta_0}
$$

$$
\Theta_0 = \frac {0.02} {0.96} \approx 0.0208\text{ kg m}^2
$$


This is an extremely elegant and frequently used experimental method, because the moment of inertia of a body of an arbitrarily complicated shape can be determined merely by time measurement!

## The Cavendish Experiment

[Cavendish Experiment with Steve Mould](https://www.youtube.com/watch?v=70-_GBymrck)

[Old Recording of the Cavendish Experiment](https://www.youtube.com/watch?v=VYf-Glwtr68)

### Equation for determining G

Let us denote the angle of deflection by $\phi$, since $\Theta$ is the notation for the moment of inertia during our discussion.

The gravitational force:

$$
F_g = G\frac{mM} {r^2}
$$

The developing torque is the following:

$$

|M_z| = 2F_g\frac L 2 = F_gL
$$

We know that an angular displacement proportional to the torque happens on the torsion wire. This is Hooke's law for the torsion wire:

$$

|M_z| = D^*\phi
$$

Here, we denoted the magnitude of the torque by $|M_z|$, therefore $|M_z|$ is non-negative. For the rotational oscillation, we can write down that:

$$
\omega^2 = \frac {D^*} {\Theta}
$$

The moment of inertia is the following:

$$
\Theta = 2m\left(\frac L 2\right)^2 = \frac 1 2 mL^2
$$

Let us put the equations together into a single equation, from which we are going to express $G$. For this, we express $D^*$!

$$
D^* = \omega^2 \Theta = \frac {4\pi^2} {T^2} \frac 1 2 mL^2 = \frac {2\pi^2mL^2} {T^2}
$$

We also make the torques equal, and substitute $F_g$:

$$
D^* \phi = G\frac{mM} {r^2}L
$$

Finally, we write in $D^*$, and express $G$:

$$
\frac {2\pi^2mL^2\phi} {T^2} = G\frac {mM} {r^2}L
$$

$$
G = \frac {2\pi^2Lr^2\phi} {MT^2}
$$

## Problems

**Problem 1: The rod and the movable spheres**
The middle of a horizontal rod of length $L$ and negligible mass is suspended from a torsion wire. We fix two pieces of bodies of mass $m$, which can be considered point-like, onto the rod, both at a distance $x$ from the axis of rotation. 
*   Write down the period as a function of the distance $x$!
*   If we slide the bodies from the end of the rod ($x = L/2$) to the half of the rod ($x = L/4$), by how many times does the period of the torsion pendulum change?

**Problem 2: Different metal cylinders on the same wire**
We suspend two solid metal cylinders made of the same material, of the same height, but of different radii alternately from the same torsion wire by their geometric axis. The radius of cylinder "A" is $R$, the radius of cylinder "B" is $2R$.
*   Determine how large the period of cylinder "B" is, if the period of cylinder "A" is $T_A = 2\text{ seconds}$!
*Hint:* Do not forget that the larger cylinder has not only a larger radius but its mass is also larger, since they are made of the same material! Express the mass with the help of the density, the height, and the radius!

**Problem 3: The balance of a mechanical wristwatch**
In classic mechanical clocks, the accurate time measurement is performed by a balance (torsion pendulum), which is kept in motion by a hairspring. The balance is a wheel of moment of inertia $\Theta = 1.5 \cdot 10^{-7}\text{ kg m}^2$. In order for the clock to run accurately, the balance must perform exactly 4 full oscillations (back-and-forth motion) per second.
*   How large is the period ($T$) of the balance?
*   With how large a directional torque ($D^*$) must the built-in hairspring possess so that the clock is accurate?