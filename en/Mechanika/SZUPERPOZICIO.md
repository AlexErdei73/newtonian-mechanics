# The Principle of Superposition *

## Wave Superposition

### Experiments

[Wave Superposition Introduction](https://www.youtube.com/watch?v=JUCLoczzwPo)

[Superposition Demo: Slinky](https://www.youtube.com/watch?v=N5MltLd05MI)

[Superposition of Waves](https://www.youtube.com/watch?v=hnZ1FKVWN4k)

> **The Principle of Superposition:** If two or more waves propagate in the same region of space, their propagation is independent of each other. At any arbitrary point in the wave field and at any arbitrary instant, the resultant displacement is the sum of the displacements of the individual waves.

The experiments beautifully illustrate the principle of superposition, which can be mathematically derived from Newton's laws for mechanical waves. This derivation is left for later. Here, we only write down the result in mathematical form for the case of two one-dimensional transverse waves.

$$
y_1 = f(x, t)
$$

$$
y_2 = g(x, t)
$$

$$
y = y_1 + y_2 = f(x, t) + g(x, t)
$$

## Young's Double-Slit Interference Experiment

### Experiments

[Ripple Tank, showing superposition, constructive and destructive interference.](https://www.youtube.com/watch?v=5raMmc7BeEY)

[Interference Demo: Speakers](https://www.youtube.com/watch?v=b87QZtYKmqo)

[The Original Double Slit Experiment](https://www.youtube.com/watch?v=Iuv6hY6zsd0)

> **Coherent wave sources:** Wave sources emitting harmonic waves of equal frequency with a constant phase difference between them.

> **Interference:** A phenomenon that occurs when waves coming from coherent wave sources meet. At certain points in the wave field where the waves meet in phase, they reinforce each other. Where the waves meet in opposite phase, they weaken each other.

The mathematical description shows that whether reinforcement or weakening is experienced at a given point in the wave field depends on the difference between the paths traveled from the wave sources to the point of observation.

Let us write down the two wave functions! Let $A$ be the amplitude, $\omega$ the angular frequency, and $c$ the wave speed.

$$
y_1 = A\cos\left(\omega\left(t - \frac {x_1} c\right)\right)
$$

$$
y_2 = A\cos\left(\omega\left(t - \frac {x_2} c\right)\right)
$$

$$
y = y_1 + y_2 = A(\cos(\omega t - k x_1) + \cos(\omega t - k x_2))
$$

Where we introduced the wavenumber $k = \frac \omega c$.

Now we utilize the trigonometric identity that we already used before:

$$
\cos (\alpha + \beta) + \cos (\alpha - \beta) = 2\cos\alpha\cos\beta
$$

Let us now choose:

$$
\alpha + \beta = \omega t - k x_1
$$

$$
\alpha - \beta = \omega t - k x_2
$$

Then we have:

$$
\alpha = \frac {\omega t - k x_1 + \omega t - k x_2} 2 = \frac {2\omega t - k(x_1 + x_2)} 2 = \omega t - k\frac {x_1 + x_2} 2
$$

$$
\beta = \frac {\omega t - k x_1 - (\omega t - k  x_2)} 2 = \frac{k(x_2 - x_1)}{2} = k\frac{\Delta x}{2}
$$

Thus, finally, the displacement at that point of the wave field where the path difference from the sources is $\Delta x$ is:

$$
y = \left[ 2A\cos\left(k\frac{\Delta x}{2}\right) \right] \cos\left(\omega t - k\frac {x_1 + x_2} 2\right)
$$

**Let us observe the obtained result!** In a wonderful way, the formula broke into two well-distinguishable parts:
1. In the first part, which is in square brackets, only position ($\Delta x$) appears, time does not. This part, independent of time, gives the interference pattern "standing" in space, that is, the resultant amplitude at the given point.
2. The second part (the cosine on the right side) contains time ($t$), which shows that the particles of the medium at the given spatial point continue to perform a simple harmonic motion with an angular frequency $\omega$.

The amplitude of the resultant vibration thus changes from point to point in space:

$$
A_{\text{resultant}} = \left| 2A\cos\left(k \frac{\Delta x}{2}\right) \right| = \left| 2A\cos\left(\frac{2\pi}{\lambda}\frac {\Delta x}{2}\right) \right| = \left| 2A\cos\left(\pi\frac {\Delta x} \lambda\right) \right|
$$

The condition for cancellation is that the amplitude, therefore the value of the $\cos$ function, must be 0.

$$
\pi \frac {\Delta x} \lambda = \left(n + \frac 1 2\right)\pi, \quad n = 0, 1, 2, 3, ...
$$

$$
\Delta x = \left(n + \frac 1 2\right) \lambda
$$

*(From a physical perspective, this is completely logical: if the path difference is a half wavelength, or an odd multiple of it, then the crest of one wave meets precisely with the trough of the other wave, completely destroying each other.)*

The condition for reinforcement is that the amplitude must be the maximum $2A$, therefore the value of the $\cos$ function must be $\pm 1$.

$$
\pi \frac {\Delta x} \lambda = n\pi, \quad n = 0, 1, 2, 3, ...
$$

$$
\Delta x = n \lambda
$$

*(In this case, wave crest meets wave crest, the phase difference is zero, or a full wavelength.)*

### Example
The distance between two speakers, which can be considered point-like, is $2\text{ m}$. The generator applies a signal of equal amplitude and $2\text{ kHz}$ frequency to them. The speed of sound is $340\text{ m/s}$. An observer stands on the perpendicular bisector of the segment connecting the two speakers such that they are at a distance of precisely $4\text{ m}$ from both speakers. How much should the observer displace to the right, parallel to the plane of the speakers, to the first position of cancellation?

**Solution:**

Let us calculate the wavelength!

$$
\lambda = \frac c f = \frac {340} {2000} = 0.17\text{ m}
$$

The path difference for the first cancellation ($n=0$):

$$
\Delta x = \left(0 + \frac 1 2\right) \lambda = \frac \lambda 2 = 0.085\text{ m} = 8.5\text{ cm}
$$

The observer is originally 4 m away from the speakers, and the half distance between the speakers is 1 m. By the Pythagorean theorem, the perpendicular distance between the observer's line and the plane of the speakers is: $\sqrt{4^2 - 1^2} = \sqrt{15}\text{ m}$.

Let us assume that we move to the right by a distance $d$. Then the new distances from the two speakers, written using the Pythagorean theorem, give the following path difference:

$$
\Delta x = \sqrt{(1 + d)^2 + 15} - \sqrt{(1 - d)^2 + 15} = 0.085
$$

Solving this equation (by appropriate mathematical approximation or algebraically) yields $d \approx 0.17\text{ m}$, which means they must displace by **17 cm**. We can verify this by substitution.

## Problems
1. Two coherent waves of identical amplitude and frequency interfere in a medium. The wavelength is $40\text{ cm}$. What will the amplitude of the resultant wave be compared to the maximum amplitude (in percentage) that would be measured in the case of constructive interference at a point where the difference between the distances measured from the two wave sources is $10\text{ cm}$?

2. Two speakers are located $3\text{ m}$ away from each other and emit sound of frequency $f$ in phase. An observer stands $4\text{ m}$ away from one speaker and $5\text{ m}$ away from the other (the three points form a right-angled triangle). Determine the lowest frequency at which the observer experiences maximum reinforcement (constructive interference)! The speed of sound in air is $340\text{ m/s}$.

3. In a Young's double-slit experiment, the distance between the two slits is $0.2\text{ mm}$. Monochromatic laser light with a wavelength of $600\text{ nm}$ falls perpendicularly onto the slits. The observation screen is located at a distance of $2\text{ m}$ from the slits. Determine the linear distance on the screen between the zeroth-order (central) maximum of the interference pattern and the first interference minimum (first dark band)!
