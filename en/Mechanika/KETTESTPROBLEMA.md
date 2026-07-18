# The Two-Body Problem *

## Statement of the Problem

For Newton, publishing the theory of gravitational force was highly problematic because his available data was imprecise. Most notably, the accepted value for the Earth's radius was inaccurate, which caused him to delay publication until more precise measurement data came to light.

The Moon–Earth distance is roughly 60 Earth radii. However, this is only true to two significant figures. What happens if we use modern data and calculate to 4 significant figures? According to modern data, the Earth's radius is $6371\text{ km}$, and the Moon–Earth distance is $384\,400\text{ km}$. Their ratio is:

$$
\frac{r}{R} = \frac{384\,400\text{ km}}{6371\text{ km}} \approx 60.34
$$

Thus, the ratio is slightly greater than 60, which will cause a discrepancy with Newton's prediction starting in the third decimal place. Indeed:

$$
60.34^2 \approx 3640
$$

How is it possible that Newton's gravitational theory remains correct and holds up perfectly under modern data? How can the square of the ratio derived from dynamics still yield almost exactly 3600 today? We will briefly address this problem.

## The Two-Body Problem

How does a system composed of two bodies move when a force acts between them, but no other external influences are present? This problem is known as the two-body problem.
Let $m$ denote the body with the smaller mass and $M$ denote the body with the larger mass. Although the Moon's mass is significantly smaller than the Earth's mass, it is not entirely negligible compared to the Earth.

$$
m \vec{a}_m = \vec{F}_{m,M}
$$

$$
M \vec{a}_M = \vec{F}_{M,m}
$$

Let us now introduce the center of mass of the two bodies as the origin of our coordinate system. We will measure the positions of the bodies relative to this point. As we have previously shown, this point does not accelerate; therefore, a frame attached to it is an inertial frame, provided it does not rotate in space.

$$
\vec{r} = \vec{r}_m - \vec{r}_M
$$

Here, $\vec{r}$ represents the position of the smaller body relative to the larger one. If we examine the motion of the bodies only over an extremely short time interval $t$ ($t \ll T$), the following relationships hold:

$$
\frac{\vec{r} - \vec{r}_0}{t} = \frac{(\vec{r}_m - \vec{r}_M) - (\vec{r}_{m,0} - \vec{r}_{M,0})}{t} = \frac{\vec{r}_m - \vec{r}_{m,0}}{t} - \frac{\vec{r}_M - \vec{r}_{M,0}}{t}
$$

Accordingly:

$$
\vec{v} = \vec{v}_m - \vec{v}_M
$$

Therefore, the velocity of the smaller body relative to the larger one is the difference between their velocities measured in the appropriate center-of-mass system. In a completely analogous way, we can show that:

$$
\vec{a} = \vec{a}_m - \vec{a}_M
$$

Thus, what we stated for the velocities also holds true for the accelerations. Consequently:

$$
\vec{a} = \frac{\vec{F}_{m,M}}{m} - \frac{\vec{F}_{M,m}}{M} = \frac{\vec{F}_{m,M}}{m} + \frac{\vec{F}_{m,M}}{M} = \left(\frac{1}{m} + \frac{1}{M}\right)\vec{F}_{m,M}
$$

Therefore:

$$
\mu \vec{a} = \vec{F}_{m,M}
$$

Where:

$$
\mu = \frac{1}{\frac{1}{m} + \frac{1}{M}} = \frac{mM}{M + m}
$$

The quantity $\mu$ has the dimension of mass and is generally slightly smaller than the smaller mass ($m$). For this reason, it is called the *reduced mass*. When viewed relative to the larger body, the motion of the smaller body is modified such that it behaves as if its mass were smaller. Aside from this adjustment, the motion of the smaller body can be treated exactly as if the larger body were completely stationary.

Looking at the law of gravitation:

$$
F_{\text{g}} = G \frac{mM}{r^2} = G \frac{\frac{mM}{M + m}(M + m)}{r^2} = G \frac{\mu(M + m)}{r^2}
$$

The body moves exactly as if its mass were $\mu$ and the mass of the attractive center were the total mass of the system. Consequently, Kepler's laws remain valid, but in the third law—which includes the mass of the attractive center—the total mass ($M + m$) will appear instead of just $M$.

$$
\frac{T^2}{a^3} = \frac{4\pi^2}{G(M + m)}
$$

This implies that the orbital period decreases slightly compared to the case of a negligible mass, and the orbital velocity increases. This accounts for the majority of the discrepancy.

## Example

Let us examine how much of a discrepancy the mass of the Moon introduces into the ratio of the Moon's centripetal acceleration to the gravitational acceleration measured on the Earth's surface! The mass of the Earth is approximately 81 times the mass of the Moon.

$$
\frac{g}{a_{\text{cp}}} = \frac{gr}{v^2} = \frac{gr T^2}{4\pi^2 r^2}
$$

$$
\frac{g}{a_{\text{cp}}} = \frac{gr^2}{4\pi^2} \cdot \frac{T^2}{r^3} = \frac{gr^2 4\pi^2}{4\pi^2 GM(1 + m/M)} = \frac{gr^2}{gR^2(1 + m/M)}
$$

$$
\frac{g}{a_{\text{cp}}} = \frac{r^2}{R^2(1 + m/M)}
$$

Our result indicates that the ratio of the squares of the distances must be divided by $(1 + m/M)$ to yield the correct value. Our calculations are still operating under the assumption of a circular orbit.

$$
\frac{r^2}{R^2(1 + m/M)} = \frac{3640}{1 + \frac{1}{81.0}} \approx 3596
$$

The modern value obtained directly from the observed accelerations is slightly higher, precisely 3602 (to four significant figures). The two values now match to at least three significant figures, proving that taking the Moon's mass into account constitutes the most substantial correction.

## Other, Finer Corrections

Three other much smaller corrections are required to arrive at a perfectly precise value. Listed in order of importance, they are:
1. The influence of the Sun – The Moon–Earth system does not exist in isolation from the Sun; the Sun's gravitational effect must also be considered. This is possible, but by Newton's own admission, it caused him a great "headache." This was resolved much later using approximation methods (perturbation theory). This specific configuration (known as the three-body problem) cannot be solved analytically.
2. The Moon's orbit is not a circle, but an ellipse that deviates slightly from a circle. This also introduces a small correction.
3. The Earth's oblateness (its slight deviation from a perfect sphere) similarly influences the system.

The effects of these corrections only manifest in the 4th and 5th significant figures, particularly because they do not all act in the same direction. At this level of precision, it also becomes critical which geographical location's value of $g$ is used in the calculation. This variation was another serious puzzle for Newton. Today, $R$ (the Earth's radius) is known very precisely, and the product $GM$ is known to 9 significant figures! Consequently, a highly accurate calculated value of $g$ must be used—one that excludes the effects of the Earth's rotation and accounts solely for the acceleration due to gravity itself.

---

## Exercises

1. **The Pluto–Charon System:** The mass of Pluto is $1.3 \cdot 10^{22}\text{ kg}$, and the mass of its largest moon, Charon, is $1.6 \cdot 10^{21}\text{ kg}$. The distance between the two celestial bodies is $19\,600\text{ km}$. How far is the system's collective center of mass from the center of Pluto? The radius of Pluto is approximately $1190\text{ km}$. Does the center of mass lie inside or outside the surface of Pluto? (This explains why the system is often referred to as a double dwarf planet.)

2. **Orbital Period of a Binary Star:** Two identical stars, each matching the mass of the Sun ($M = 2 \cdot 10^{30}\text{ kg}$), orbit each other in circular paths around their common center of mass. The distance between the stars is equal to the Earth–Sun distance ($1.5 \cdot 10^{11}\text{ m}$). What is the orbital period of the system? Compare this to the Earth's orbital period (1 year)!

3. **Reduced Mass in a Hydrogen Atom:** A hydrogen atom consists of a proton and an electron. The mass of the proton is $m_{\text{p}} = 1.67 \cdot 10^{-27}\text{ kg}$, and the mass of the electron is $m_{\text{e}} = 9.11 \cdot 10^{-31}\text{ kg}$. Calculate the reduced mass ($\mu$) of the system! By what percentage does this value deviate from the mass of the lone electron? (This small discrepancy also appears in quantum mechanical calculations as a correction to the atomic energy levels.)