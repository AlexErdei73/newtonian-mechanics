# Damped Oscillations *

## Simulations

We have seen both in simulation and theory that the vibrational energy, and thus the amplitude, remains constant as long as the oscillating body is only acted upon by the conservative elastic force and possibly the also conservative gravitational force. In reality, however, we never observe this, as dissipative forces are always present. Let us examine what forces cause the damping of an oscillation in the case of a body undergoing harmonic oscillation, and how this decreases the amplitude as time passes!

### Friction Damping
First, let us investigate the effect of the frictional force, since we are already familiar with it! The simulation will differ from the example seen in the discussion of vibrational energy only in that the oscillation takes place under the influence of gravity on a horizontal surface where friction acts on the body. The vibrational energy is initially $4$ J here as well, but when the simulation is started, the total energy is only $3.853$ J! The reason for this is the constant gravitational potential energy of $-0.147$ J. If the body loses its vibrational energy, only this gravitational potential energy remains; thus, the energy of the body at equilibrium will be $-0.147$ J. Let us examine the course of the oscillation and plot the displacement-time graph (for body 1) so we can see how the amplitude damps out!

[Harmonic Oscillation with Friction Damping](https://alexerdei73.github.io/physics-engine/project/#763312f1-b675-4eea-9bbd-c6fb59026bb4)

* How does the amplitude damp out?
* Calculate the work done by the frictional force based on the simulation data! The total distance traveled by the body is the **path length**. The direction of the force is always opposite to the direction of motion, but its magnitude is constant. $\mu = 0.9$ and $mg$ can be easily read from the data. The frictional force itself can also be read, but this must be done before the body comes to a stop, otherwise we only see the static friction force. In the case of the algorithm, the body must be considered stationary below a certain small velocity, which is $10^{-4}$ m/s in this program, so this is the residual velocity of the body. 
* Does the body reach the equilibrium position when it stops? This would be exactly at $x = 2$ m.

### Air Resistance
Now let us look at the case where there is no friction, but there is air resistance. Here, the $10$ g body is a sphere with a diameter of $20$ cm, so its air resistance will be unrealistically large. This means we can see the effect magnified by about 100 times (in reality, a ball of this mass is about ten times smaller, but the force is proportional to the surface area, which is 100 times smaller). By the way, in reality, this is the determining factor even for school experiments, despite the fact that the damping is not very large. Friction is usually eliminated, but air resistance is generally present. Observe the displacement-time graph here as well! Here we can see a very rapid damping initially, but when the amplitude and velocity are already small, the damping is very slow. The reason for this is that air resistance is a force proportional to the square of the velocity, so it is almost completely negligible at low velocities. Thanks to this, by the time we achieve that the total vibrational energy is converted into internal energy with an accuracy of 4 significant figures, about $26$ s passes in the simulation!

[Damping of Harmonic Oscillation Due to Air Resistance](https://alexerdei73.github.io/physics-engine/project/#2d7bf5da-1455-4c4a-896d-a40baf1347a4)

### Velocity-Proportional Damping
Real springs damp the oscillation to a very small extent, even if there is no air resistance. The magnitude of this is very small for steel; steel is almost perfectly elastic. Furthermore, this type of damping cannot be described by the expressions used so far. The reason is that the internal material structural mechanism results in a damping force that depends on the amplitude rather than the velocity.
Although theoretically incorrect, this is often modeled using a velocity-dependent damping force that is linear with velocity. The reason for this is that the mathematics is relatively simple and the damping is usually very small. Such a damping force arises in liquids during low-velocity motion when the flow has a regular structure, meaning it is not turbulent. A typical example is the damping forces occurring in shock absorbers. In the following, we will deal with this damping in more detail.

[Harmonic Oscillation with Velocity-Proportional Damping](https://alexerdei73.github.io/physics-engine/project/#8b2676f8-91a6-4f77-b2cd-e8f0c9b87a51)

## Equation of Motion for Velocity-Proportional Damping

$$
F_{x,e} = -Dx - \beta v_x
$$

This equation shows that alongside the elastic force, a force arises that is proportional to the magnitude of the velocity but opposite in direction to it, which attempts to slow down the motion at every moment. Substituting this into Newton's second law gives us the equation of motion.

$$
F_{x,e} = ma_x
$$

$$
ma_x = -Dx - \beta v_x
$$

It is customary to write the equation rearranged to zero:

$$
ma_x + \beta v_x + Dx = 0
$$

The question is what kind of displacement-time function solves the equation if the body starts from rest from the position $x(0) = +A$. This can only be answered with a knowledge of higher mathematics, so we will not solve the equation, but only explain the solution.

## The Decrease of Amplitude

First, let us examine how the amplitude decreases. If we recorded the displacement value in our simulation every $nT$ time, where $n$ is a non-negative integer, we would notice that the following relationship holds:

$$
x(nT) = A_0q^n, \quad 0 < q < 1
$$

This sequence is known in mathematics as a *geometric progression*. Therefore, the amplitudes decrease according to a geometric progression. The smaller the factor $q$, the faster the amplitude decreases, and thus the faster the oscillation dies out.
We can introduce the *damping coefficient*, which we will denote by $\delta$. Its unit is 1/s, just like the angular frequency, so they can be compared.

$$
\delta = \frac \beta {2m}
$$

By solving the equation of motion, it can be shown that:

$$
q = e^{-\delta T}
$$

Here, the number $e$ is the irrational number well known from higher mathematics, named after the mathematician *Euler*. Its value is:

$$
e = 2.71828...
$$

This is almost enough to calculate $q$, but the period time is a bit longer than in the case of undamped oscillation. By solving the equation of motion, it can be shown that the angular frequency is a little smaller than in the undamped case.

$$
\omega_0^2 = \frac D m
$$

$$
\omega = \sqrt {\omega_0^2 - \delta^2}
$$

With the help of these relationships, the factor $q$ can now be calculated.

### Example

Let us calculate the value of the factor $q$ in our previous example! How much time does it take for the energy of the oscillation to decrease to 0 with 4 decimal places of accuracy? (A maximum energy of $5 \times 10^{-5}$ J may remain in the system.) The damping coefficient in our simulation is $\beta = 0.06$ kg/s.

The calculation of the damping factor is as follows:


$$
\delta = \frac {\beta} {2m} = \frac {0.06} {2 \times 0.01} = 3\text{ 1/s}
$$


The exact angular frequency and period can also be calculated:


$$
\omega_0^2 = \frac {D} {m} = \frac {200} {0.01} = 20000\text{ s}^{-2}
$$



$$
\omega = \sqrt {\omega_0^2 - \delta^2} = \sqrt {20000 - 9} = 141.39\text{ 1/s}
$$
 


$$
T = \frac {2 \pi} {\omega} = \frac {2 \pi} {141.39} = 0.044439\text{ s}
$$


Now $q$ can be calculated:


$$
q = e^{-\delta T} = e^{-3 \cdot 0.044439} = 0.87519
$$


From the remaining energy, we can obtain the remaining maximum displacement!


$$
\frac {Dx_{max}^2} {2} = E_{max}
$$

$$
x_{max} = \sqrt \frac {2E_{max}} {D} = \sqrt \frac {2 \cdot 5 \cdot 10^{-5}} {200} = 7.0711 \cdot 10^{-4}\text{ m}
$$

From the remaining displacement $x_{max}$, we can calculate the minimum value of $n$ such that the energy of the oscillation becomes 0 with four decimal places of accuracy!  


$$
x_{max} = A_0 q^n
$$



$$
q^n = \frac{x_{max}}{A_0}
$$


The calculation of the exponent is possible using the logarithm function. The base of the logarithm is the base of the power, and the function returns the exponent from the value of the power. This function can be found on most scientific calculators. Sometimes only the base-10 $\log$ or base-$e$ $\ln$ functions are available. In this case, the following logarithm identity helps reduce the base-$q$ logarithm to a base-10 or base-$e$ logarithm:


$$
\log_a(x) = \frac{\log_b(x)}{\log_b(a)}, \quad a > 0, b > 0, a \neq 1, b \neq 1
$$


Based on this, the calculation using the base-$e$ logarithm is the following:


$$
n = \log_q \left( \frac{x_{max}}{A_0} \right) = \frac{\ln \left( \frac{x_{max}}{A_0} \right)}{\ln q} = \frac{\ln \left( \frac{7.0711 \cdot 10^{-4}}{0.2} \right)}{\ln 0.87519} = 42.3427
$$


From the value of $n$, the minimum value of time can now be determined:


$$
t_{min} = nT = 42.3427 \cdot 0.044439 = 1.8817 \text{ s}
$$


Indeed, it can be seen from the simulation that the energy reaches $-0.1470$ J in $1.882$ s!
Notice that to obtain the exact value here, we must use the fractional value for $n$ that we get from the pocket calculator. 

## The Displacement-Time Function
We learned in mathematics that exponentiation can be performed with any arbitrary real exponent. If the base is the number $e$, this leads to the exponential function. We find this function in the displacement-time function as a multiplier of the amplitude. Thus, the amplitude decreases exponentially.


$$
x(t) = Ae^{-\delta t}\cos(\omega t + \phi)
$$


The phase shift $\phi$ is needed so that the initial velocity is zero at the initial moment in time. Its calculation:


$$
\tan \phi = - \frac \delta \omega
$$
 

Here, the multiplier $A$ is not yet the amplitude itself, because the initial amplitude is obtained by substituting $t = 0$.


$$
A_0 = A\cos \phi
$$


### Example
Let us calculate the displacement as a function of time in our simulation example!


$$
\tan \phi = - \frac \delta \omega = - \frac {3} {141.39} = -0.021218
$$



$$
\phi = -0.021215
$$



$$
A = A_0 / \cos \phi = 0.2 / \cos(-0.021215) = 0.200045
$$


Substituting these, we get:


$$
x = 0.200045e^{-3t}\cos(141.39t - 0.021215)
$$


## Critical Damping
When the damping is so large that the angular frequency becomes zero, the cosine function is constantly 1, so the body simply approaches the equilibrium position exponentially. This is called critical damping.


$$
\delta_k = \omega_0
$$


The formula can be obtained from the earlier equation, but the derivation requires higher mathematics, so we will not derive it here. The formula is provided for the sake of completeness:


$$
x = A_0(1 + \delta_k t)e^{-\delta_k t}
$$


In engineering practice, efforts are made to achieve critical damping in car shock absorbers because this is when the car's wheel suspension returns to its equilibrium position the fastest, meaning that driving stability will be the best possible. However, shock absorbers exert low damping during the compression of the spring, while the damping is larger during the return. This asymmetric damping is important so that if the wheel hits a large upward bump, the suspension does not transfer this impact to the body of the car.

### How a Shock Absorber Works

[The Shock Absorber](https://www.youtube.com/watch?v=O-n7IvzPtME)

### Example
Let us write down the formula for the case of our simulation example!


$$
x = 0.2(1 + 141.42t)e^{-141.42t}
$$


### Simulation

[Critical Damping](https://alexerdei73.github.io/physics-engine/project/#1de4ac61-0df7-4a4c-b912-fbec97a261c1)

## The Overdamped Case

If the damping factor is larger than the undamped angular frequency—which characterizes critical damping—the body does not perform oscillations, but it returns exponentially to the equilibrium position more slowly the larger the damping factor is. This formula can also be derived using higher mathematical tools from the case of underdamping, but here we only present the result.


$$
\gamma = \sqrt {\delta^2 - \omega_0^2}
$$



$$
x = \frac A {2\gamma} \left( (\delta + \gamma)e^{(-\delta+\gamma)t} - (\delta - \gamma)e^{(-\delta-\gamma)t} \right)
$$


Such a case occurs in door dampeners, so that they do not slam shut but instead close nice and slowly.

## Problems

1. **Calculation of basic parameters:** A body of mass $m = 0.2$ kg suspended on a spring moves in a medium with velocity-proportional damping. The spring constant is $D = 50$ N/m, and the damping coefficient is $\beta = 0.4$ kg/s. Calculate the undamped angular frequency ($\omega_0$), the damping factor ($\delta$), and the angular frequency of the damped oscillation ($\omega$)!

2. **Theoretical question on critical damping:** Based on the text, explain in your own words why engineers strive to achieve critical damping when designing car shock absorbers! What would happen to the vehicle's driving stability if the system were underdamped, and what would happen if it were overdamped?

3. **Writing the displacement-time function:** In the case of a damped harmonic oscillation, it is known that the initial value of the amplitude is $A = 5$ cm, the damping factor is $\delta = 0.5\text{ 1/s}$, and the angular frequency of the damped oscillation is $\omega = 10\text{ 1/s}$. Consider the initial phase ($\phi$) to be zero. Write down the displacement-time function in the form $x(t)$ and determine what the displacement will be after $t = 2$ seconds!

4. **Verifying underdamping:** Let us verify the calculation of the displacement based on simulation data in the case of underdamping! Start the simulation and stop it after a short time. Read the $x$-coordinate of body 1. Since the equilibrium position in the simulation is at $x = 2$ m, this value must be subtracted from the read coordinate (as our theoretical formulas refer to an equilibrium position of $x = 0$). Read the elapsed time as well, and substitute into the formula! An agreement of 4 significant figures of accuracy is expected between the calculated displacement and the displacement read from the simulation.

5. **Verifying critical damping:** Perform the verification described in the previous (4th) problem for the case of critical damping as well! For this investigation, it is recommended to slow down the simulation speed to one-tenth due to the rapid progression of the process.