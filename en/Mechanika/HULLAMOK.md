# Mechanical Waves

## The Concept of a Mechanical Wave

### Experiment

[Building a Wave Machine](https://www.youtube.com/watch?v=VE520z_ugcU)

### Simulation

[Wave Propagation on Mass Points Coupled by Springs](https://alexerdei73.github.io/physics-engine/project/#e22e5592-48ce-4e65-a3ea-5f37449761c4)

In both the experiment and the simulation, a mechanical deformation propagates through a one-dimensional elastic medium. In the experiment, the individual sticks are capable of performing torsional oscillations, and there is a loose coupling between them. Thus, the wave machine beautifully illustrates the propagation of a disturbance. We can see something similar in the simulation. Here, a sequence of mass points of equal mass is connected by springs. In such a system, the propagation of a deformation can also be observed, which we call a mechanical wave.

> **Mechanical wave:** The propagation of a deformation through space in an elastic medium is called a mechanical wave.

We can see that the propagation of a wave has a certain wave speed, and some kind of elastic medium is required through which the deformation propagates. Obviously, the wave speed depends on the physical properties of the medium, since there are materials whose density is low and can be considered rigid to a good approximation, but there are also those whose density is higher but are less rigid with respect to deformation. In perfectly rigid bodies, deformations do not develop. Displacing one point of such a body causes all its other points to move instantly. Mechanical waves cannot develop in rigid bodies; the wave speed of mechanical waves in them is infinite. In practice, no such bodies exist, but obviously, the more rigid the body, the higher the wave speed. The wave speed is obviously lower the higher the density of the body.

## Longitudinal and Transverse Waves

Two types of mechanical waves are known, depending on whether the direction of vibration of the particles in the medium is parallel or perpendicular to the direction of propagation.

### Experiments

[Transverse Wave](https://www.youtube.com/watch?v=g8GcMn7K0u4)

[Longitudinal Wave](https://www.youtube.com/watch?v=fMJrtheQfZw)

> **Transverse wave:** The direction of vibration of the particles of the medium is perpendicular to the direction of propagation of the wave.

> **Longitudinal wave:** The direction of vibration of the particles of the medium is parallel to the direction of propagation of the wave.

In both cases, we can state that the particles of the medium oscillate around their equilibrium positions, but do not move away from them when the wave propagates. Only the deformation, and of course energy, propagates through a mechanical wave. In the case of longitudinal waves, there are places of compression and rarefaction in the material, while in transverse waves, there are crests and troughs.

In general, the velocity of transverse waves in the same body is lower than the velocity of longitudinal waves. In liquids and gases, only longitudinal waves can develop. The reason for this is that they are elastic to deformations involving a change in volume, i.e., compression, but they do not exert a force against a force that displaces fluid layers relative to one another in the direction of the layers (neglecting friction). Transverse waves can form on the surface of liquids, but such waves cannot propagate inside the liquid.

## Periodic Waves

Periodic waves can also form in elastic bodies; in fact, these are the most important. In this case, the vibration is periodic. We only deal with the case of harmonic vibrations. If, for example, the endpoint of the wave machine is set into simple harmonic motion by a periodic driving force, then this vibration propagates along the wave machine. As long as the wave does not reach the other end of the wave machine, the mathematical description is simple. Let the vibration be along the y-axis, for example, while the wave propagates in the x-direction. Then the displacement depends on the distance x in addition to time.

$$
y = A\cos\left(\omega\left(t - \frac x c\right)\right)
$$

This function at the position $x = 0$ is exactly the same as at an arbitrary position $x > 0$, where, however, it arrives only with a delay. This delay can be easily determined. Let the time at the origin $x = 0$ be denoted by $t_0$; then at the position x, the wave is in the same state of vibration at a later time $t$ as it was at the origin.

$$
t_0 = t - \frac x c
$$

$$
t = t_0 + \frac x c
$$

Therefore, the value of the time delay is the quotient of the distance traveled and the wave speed.

$$
\Delta t = \frac x c
$$

## The Concept of Wavelength

> **Wavelength:** The distance between two adjacent wave crests in the case of a periodic transverse wave. Symbol: $\lambda$ (lambda)

If the wave oscillates for exactly one period, say at the point $x = 0$, then exactly one oscillation takes place; therefore, if $y = A$ was true, then $y = A$ will be valid again. In this case, however, the wave crest already reaches the distance $x = \lambda$ as well. Based on the previous statements, it is valid that:

$$
T = \frac \lambda c
$$

This relationship can also be written in another form with the help of the frequency, or the angular frequency.

$$
\lambda = cT = \frac c f
$$

The wavenumber, which we denote by $k$, is the number of full periods within a distance of $2\pi$.

$$
k = \frac {2\pi} \lambda = \frac {2\pi f} c = \frac \omega c
$$

### Example
In air at normal temperature, the wave speed of sound is $340\text{ m/s}$. How large is the wavelength of a tuning fork if its frequency is $440\text{ Hz}$? How many full waves are there in a full metre?

$$
\lambda = \frac c f = \frac {340} {440} = 0.77272\text{ m}
$$

$$
n = \frac 1 \lambda = \frac 1 {0.77272} = 1.2941
$$

## Problems
1. A bat emits ultrasound with a frequency of $50\text{ kHz}$ ($50,000\text{ Hz}$) for orientation purposes. The wave speed of sound in air is $340\text{ m/s}$. How large is the wavelength of this ultrasound, and how many full waves fit into one metre?

2. On a wave machine, the wave speed of a transverse wave is $2.4\text{ m/s}$. The driving frequency is $3\text{ Hz}$. How large is the wavelength of the developing wave? How many full waves can be found on a $1\text{ metre}$ section of the wave machine?

3. In a rock, the wave speed of longitudinal (P) waves is $5,000\text{ m/s}$. The frequency of the wave generated during an earthquake is $20\text{ Hz}$. How large is the wavelength of the seismic wave, and how many full waves fit into one metre?
