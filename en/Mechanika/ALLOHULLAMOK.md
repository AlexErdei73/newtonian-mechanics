# Standing Waves *

## Reflection of One-Dimensional Waves

### Experiment

[Wave Reflection -- xmdemo 138](https://www.youtube.com/watch?v=1PsGZq5sLrw)

### Simulation

[Wave Propagation on Mass Points Coupled by Springs](https://alexerdei73.github.io/physics-engine/project/#e22e5592-48ce-4e65-a3ea-5f37449761c4)

> Adjust the simulation so that both ends are visible! The right end is a fixed end, and the left end is a free end, which is connected to a distant point by a rope of negligible mass.

In both the experiment and the simulation, we can observe that when the wave is reflected from the fixed end, the reflected wave has an opposite phase compared to the incident wave. The situation is exactly the opposite when the wave is reflected from a free end. In this case, the reflected wave is in phase with the incident wave.

> **Reflection of a one-dimensional wave:** From a fixed end, the wave is reflected in opposite phase compared to the incident wave, so a wave crest becomes a wave trough and vice versa. From a free end, the wave is reflected in phase, so a wave crest remains a wave crest, and this is also true for a wave trough.

## Explanation for Wave Reflection

We can explain this observation using the principle of superposition. At the fixed end, the displacement is zero at every instant. However, the displacement is the superposition of the incident and reflected waves.

$$
y_{\text{incident}} = A\cos(\omega t - kx)
$$

We know that the direction of the wave speed, and thus the wavenumber, has the opposite sign for the reflected wave compared to the incident wave. The path traveled by the reflected wave after reflection is $l - x$, so the variation of $x$ is $x - l$. In an ideal case, in one dimension, there is no change in amplitude.

$$
y_{\text{reflected}} = A\cos(\omega t - kl + k(x - l) - \phi) = A\cos(\omega t + kx - 2kl - \phi)
$$

Here $\phi$ is the unknown phase shift, for which we expect $\pi$ based on the experiment. Let us see if we obtain this!

$$
y = y_{\text{incident}} +  y_{\text{reflected}} = A(\cos(\omega t - kx) + \cos(\omega t + kx - 2kl - \phi))
$$

Since the fixed endpoint cannot displace at all, the sum of the displacements of the incident and reflected waves at the position $x=l$ must yield zero at every instant of time. To bring this expression into a simpler form and examine the displacement, we can apply a well-known trigonometric identity to the sum of the cosine functions:

$$
\cos(\alpha + \beta) + \cos(\alpha - \beta) = 2\cos\alpha\cos\beta
$$

Let

$$
\alpha + \beta = \omega t - kx
$$

$$
\alpha - \beta = \omega t + kx - 2kl - \phi
$$

We determine the values of $\alpha$ and $\beta$:

$$
\alpha = \omega t - kl - \frac{\phi}{2}
$$

$$
\beta = \frac{\phi}{2} + kl - kx
$$

Thus, the displacement is the following:

$$
y = 2A\cos\left(\frac{\phi}{2} + k(l - x)\right)\cos\left(\omega t - kl - \frac{\phi}{2}\right)
$$

This is the general expression for the displacement of a one-dimensional wave when the displacement is the meeting of the traveling and reflected waves. If $x = l$, meaning we are at the fixed end, then according to the above condition, the position-dependent part must become zero:

$$
y = 2A\cos\left(\frac{\phi}{2}\right)\cos\left(\omega t - kl - \frac{\phi}{2}\right)
$$

This is therefore a simple harmonic motion. The amplitude must be zero at the fixed end, so:

$$
\cos\left(\frac{\phi}{2}\right) = 0
$$

$$
\frac{\phi}{2} = \left(n + \frac{1}{2}\right)\pi, \quad n = 0, 1, 2, ...
$$

Expressing $\phi$ from here we get that:

$$
\phi = (2n + 1)\pi
$$

These solutions are equivalent for the displacement of the reflected waves, so we can choose the case $n = 0$ and thus $\phi = \pi$.

## Standing Waves

### Experiment

[Standing wave Fixed end](https://www.youtube.com/watch?v=MgTyN-KUrHM)

### Simulation

[Standing Wave with a Free End](https://alexerdei73.github.io/physics-engine/project/#1f7d72de-d5c2-4f07-83be-26d914a79c2b)

In the experiments, we can see standing waves. Unlike traveling waves, these appear to stand still, from which their name originates. Some frequently used concepts regarding standing waves are the following:

>**Antinode:** A point at which the amplitude of vibration is the largest.

>**Node:** A point at which the amplitude of vibration is zero.

>An antinode always forms at a free end, while a node forms in every case at a fixed end.

>**Natural oscillation:** A standing wave forming on a string is also called the natural oscillation of the string.

>**Natural frequency:** In a standing wave, every point of the string oscillates with the same frequency. This frequency is the natural frequency. The string has infinitely many natural oscillations and natural frequencies.

>**Fundamental harmonic or fundamental tone (1st harmonic):** The standing wave forming on the string that has no internal node on the string (hereinafter this is denoted by the case $n=0$).

>**Fundamental frequency:** The frequency of the fundamental harmonic. This is the lowest natural frequency.

>**Overtone (and harmonics):** A standing wave where there are internal nodes on the string. In physics, we also call the oscillations harmonics (where the fundamental tone is the 1st harmonic). If there are $n$ internal nodes on the string, we call it the $n$-th overtone, which means the $(n+1)$-th harmonic. The frequency of the harmonics in the case of a string with fixed ends is always an integer multiple of the fundamental frequency.

In the oscillating system, two waves propagating in opposite directions interfere, and the formula derived above for the displacement is valid for this situation. Let us assume that after the external driving force ceases, as we can see in the simulation, an oscillation with a constant amplitude develops at the free end. Let us denote this amplitude by $2A$ now! Then at the free end $x = 0$, it must hold true that:

$$
2A = 2A\left|\cos\left(\frac{\pi}{2} + kl\right)\right|
$$

The value of the cosine is therefore $\pm 1$.

$$
\frac{\pi}{2} + kl = m\pi, \quad m = 1, 2, 3, ...
$$

Then an interesting relationship must hold true between the length of the string and the wavelength:

$$
kl = \left(m - \frac{1}{2}\right)\pi = \left(n + \frac{1}{2}\right)\pi, \quad n = 0, 1, 2, ...
$$

$$
\frac{2\pi}{\lambda} l = \left(n + \frac{1}{2}\right)\pi
$$

$$
l = \left(n + \frac{1}{2}\right)\frac{\lambda}{2} = (2n + 1)\frac{\lambda}{4}
$$

The length of the string must be an odd multiple of the quarter wavelength. The simulation presents the case $n = 2$, when the length of the string is $5$ times the quarter wavelength. Naturally, it is not prescribed how large the amplitude $A$ is, so as long as the string moves within the elastic range, it can be of any size. The displacement function with a unit amplitude $2A$ given $n$ internal nodes is called the $n$-th eigenfunction, or natural oscillation, of the string. Naturally, the amplitude can be of any size, and according to the principle of superposition, the sum of several such solutions is also a solution. Therefore, in the most general case, the solution of the equation of motion must be the following:

$$
y = \sum_{n = 0}^{\infty} A_n f_n(x, t)
$$

Here the eigenfunction $f_n$ is:

$$
f_n = \cos\left(\frac{\pi}{2} + k(l - x)\right)\cos\left(\omega t - kl - \frac{\pi}{2}\right)
$$

> 💡 **Outlook for Advanced Students: The Most Elegant Form of a Standing Wave**  
> With the help of boundary conditions and trigonometric identities, we can bring the expression above, which seems complicated, into a much simpler form. If we perform the mathematical steps, the time-dependent and spatial parts separate beautifully:  
> 
$$
f_n(x,t) = \cos(k_n x) \cos(\omega_n t)
$$

> **Why is this form ingenious?** The essence of a standing wave can be read from it immediately! The $\cos(\omega_n t)$ part shows that every point of the string performs a *simple harmonic motion* in time. The $\cos(k_n x)$ part gives the *position-dependent amplitude* of the vibration: where this is zero, there is a node, and where it is maximal, there is an antinode.

Mathematicians also prove that the solution of the equation of motion for any arbitrary free oscillation of the string can be written in the form above. Of course, the specific form of the functions $f_n$ depends on the physical parameters of the string, for example, on the wave speed on the string, and on whether the ends of the string oscillate freely or are fixed. The displacements of the string must obviously be within the elastic limits.

>A free oscillation forming on a string is always the superposition of natural oscillations taken with different amplitudes. This statement is valid for any arbitrary oscillating system, not only for strings. The only condition is that the principle of superposition must be valid, therefore the displacements must be small and the system moves within its elastic limits where Hooke's law is valid.

### Examples

1. The driving frequency to which the string resonates can be read in the simulation. This is $0.59\text{ Hz}$. At this time, two internal nodes develop, so our index is $n = 2$. The length of the string is $l = 15\text{ m}$.
* How large is the wavelength of the developing standing wave?
* How large is the wave speed on the string?
* How large is the fundamental frequency? Let us try this frequency in the simulation!

$$
l = (2n + 1)\frac{\lambda}{4}
$$

$$
15 = 5 \frac{\lambda}{4}
$$

$$
\lambda = 12\text{ m}
$$

$$
c = \frac{\lambda}{T} = \lambda f = 12 \cdot 0.59 = 7.08\text{ m/s}
$$

$$
l = \frac{\lambda_0}{4}
$$

$$
\lambda_0 = 4l = 4 \cdot 15 = 60\text{ m}
$$

$$
f_0 = \frac{c}{\lambda_0} = \frac{7.08}{60} = 0.118\text{ Hz}
$$

It is true here too that the frequency is an odd integer multiple of the fundamental frequency, in this case precisely $5$ times (since $2n+1 = 5$).

$$
\frac{f}{f_0} = \frac{0.59}{0.118} = 5
$$

2. Let us now examine the standing waves developing on the string featured in the simulation if both ends are fixed!
* How large is the wavelength of the fundamental tone (n=0 internal nodes) if the string is $15\text{ m}$ long?
* How large is the fundamental frequency if the wave speed continues to be $c = 7.08\text{ m/s}$?
* How large are the wavelengths and frequencies of the 1st and 2nd overtones (meaning the oscillations possessing 1 and 2 internal nodes, respectively)?
* How large are the wavelength and frequency of a general standing wave possessing $n$ internal nodes?
* Let us set up a simulation for the 2nd harmonic (for the 1st overtone)!

If both ends are fixed, then there is a node on them, but in the case of the fundamental tone there is no internal node ($n=0$), so the length of the string must be a half wavelength.

$$
l = \frac{\lambda_0}{2}
$$

$$
\lambda_0 = 2l = 30\text{ m}
$$

$$
f_0 = \frac{c}{\lambda_0} = \frac{7.08}{30} = 0.236\text{ Hz}
$$

The frequency of the 1st overtone (1 internal node) corresponds to the 2nd harmonic:

$$
f_1 = 2f_0 = 0.472\text{ Hz}
$$

The frequency of the 2nd overtone (2 internal nodes) is the 3rd harmonic:

$$
f_2 = 3f_0 = 0.708\text{ Hz}
$$

The corresponding wavelengths:

$$
\lambda_1 = \frac{c}{f_1} = \frac{7.08}{0.472} = 15\text{ m}
$$

$$
\lambda_2 = \frac{c}{f_2} = \frac{7.08}{0.708} = 10\text{ m}
$$

The general formula in the case of $n$ pieces of internal nodes:

$$
l = (n + 1)\frac{\lambda}{2}
$$

Expressing $\lambda$ from here we get that:

$$
\lambda = \frac{2l}{n + 1}
$$

$$
f = \frac{c}{\lambda} = \frac{c}{\frac{2l}{n + 1}} = \frac{n + 1}{2} \frac{c}{l}
$$

[Állóhullám húron két rögzített véggel](https://alexerdei73.github.io/physics-engine/project/#80f91da0-5f31-4cad-8590-1ec4a3824fa1)

## Problems

**Problem 1**
One end of a homogeneous rope of length $10 \text{ m}$ is fixed, and the other end can move freely. The wave speed on the rope is $5 \text{ m/s}$.
* Determine the frequency and wavelength of the fundamental harmonic (fundamental tone)!
* With what frequency must the rope be vibrated so that a standing wave develops on which precisely 3 internal nodes can be found ($n=3$)?

**Problem 2**
Both ends of a guitar string are fixed, its length is $0.65 \text{ m}$. We know that the frequency of the string's fundamental tone is $330 \text{ Hz}$ (this corresponds to the note E).
* At what speed do the mechanical waves propagate on this string?
* Determine the frequency and the corresponding wavelength of the third overtone (at which three internal nodes can be found)!

**Problem 3**
We examine two strings made of the same material and under the same mechanical tension (therefore possessing identical wave speeds) under laboratory conditions. Both ends of the first string of length $L_1$ are fixed, while one end of the second string of length $L_2$ is fixed and the other is free.
* Express the length $L_2$ as a function of $L_1$ if we want to achieve that the fundamental frequencies ($f_0$) of the two strings match each other precisely!
