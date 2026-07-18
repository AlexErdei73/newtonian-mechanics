# The Physical Pendulum

## Experiments

[Physical Pendulum I](https://www.youtube.com/watch?v=Jac3A-ecs4c)

[Physical Pendulum II](https://www.youtube.com/watch?v=-6jDd0V5feI)

## The Equation of Motion

In the case of a physical pendulum, the equation of motion is based on the fundamental equation of rotational motion, which is our starting point:

$$
\Theta \beta = M_{z,\text{e}}^{\text{k}}
$$

*(Here, $\Theta$ is the moment of inertia relative to the axis of rotation, and $\beta$ is the angular acceleration.)*

Only the gravitational force—which can be imagined as concentrated at the center of mass or center of gravity—exerts a torque, because the line of action of the force arising at the suspension passes through the pivot, meaning its lever arm is zero. Let the center of gravity be at a distance $s$ from the suspension! In this case, the torque is:

$$
M_{z,\text{e}}^{\text{k}} = -mgs \sin \phi
$$

Here, $\phi$ is the angle of rotation enclosed by the vertical line and the segment connecting the center of gravity to the axis of rotation. Provided that this angle is positive, the torque has a negative sign, meaning it acts to decrease the displacement angle. Substituting this gives the following equation:

$$
\Theta \beta = -mgs \sin\phi
$$

$$
\beta = -\frac {mgs} {\Theta} \sin\phi
$$

In the small-angle approximation (in practice up to a displacement of $5^\circ - 10^\circ$ at most), $\sin\phi \approx \phi$, therefore the equation becomes:

$$
\beta = -\frac {mgs} {\Theta} \phi
$$

The solution to this, as we know, is simple harmonic motion.

## The Period

From the form of the equation, we can read the square of the angular frequency:

$$
\omega^2 = \frac {mgs} {\Theta}
$$

And the period is as follows:

$$
\frac {4\pi^2} {T^2} = \frac {mgs} {\Theta}
$$

$$
\frac {T^2} {4\pi^2} = \frac {\Theta} {mgs}
$$

$$
T^2 = 4\pi^2 \frac {\Theta} {mgs}
$$

$$
T = 2\pi \sqrt {\frac {\Theta} {mgs}}
$$

### Examples
1. In the case of a simple pendulum, $s=l$ and $\Theta = ml^2$. Let us calculate the period!

$$
T = 2\pi \sqrt {\frac {\Theta} {mgs}} = 2\pi \sqrt {\frac {ml^2} {mgl}} = 2\pi \sqrt {\frac l g}
$$

Naturally, we obtained the period of a simple pendulum.

2. What is the period of a homogeneous rod of length $l = 0.6\text{ m}$ as a physical pendulum, as seen in the experiment?

Here, the moment of inertia is $\Theta = \frac 1 3 ml^2$ and $s = \frac l 2$, so substituting these gives the following formula:

$$
T = 2\pi \sqrt {\frac {\Theta} {mgs}} =  2\pi \sqrt {\frac {\frac 1 3 ml^2} {mg\frac l 2}} = 2\pi \sqrt {\frac {2l} {3g}}
$$

Substituting the length of $0.6\text{ m}$ here, we get:

$$
T = 2\pi \sqrt {\frac {2l} {3g}} = 2 \cdot 3.1415 \sqrt {\frac {2 \cdot 0.6} {3 \cdot 9.81}} = 1.269\text{ s}
$$

From the video demonstrating the experiment, we can determine the period across a few oscillations. The time for 7 oscillations is approximately $9.02\text{ s}$. From this, $T$ is:

$$
T = \frac {9.02} 7 \approx 1.29\text{ s}
$$

This is an error of about 1.6%. An error below 2% is considered good for such an observation, since the reaction time is about $0.3\text{ s}$. This represents an error of $0.04\text{ s}$ for a single oscillation. This is roughly a 3% relative error.

## The Reduced Length

Comparing the period of a simple pendulum and a physical pendulum, we can establish that for every physical pendulum, a simple pendulum can be found whose period matches the period of the physical pendulum. The length of this simple pendulum is called the reduced length of the physical pendulum.

> **Reduced length:** The length of a simple pendulum whose period is equal to the period of the physical pendulum.

$$
l_{\text{r}} = \frac \Theta {ms}
$$

By remembering this, we can always calculate using the formula for a simple pendulum. In the case of a physical pendulum, we must calculate the period using the reduced length of the pendulum.

### Examples
1. Show that the reduced length of a simple pendulum is none other than its own length!

$$
l_{\text{r}} = \frac \Theta {ms} = \frac {ml^2} {ml} = l
$$

2. Calculate the reduced length of a homogeneous rod of length $l$ as a physical pendulum, if the axis of rotation is the endpoint of the rod!

$$
l_{\text{r}} = \frac \Theta {ms} = \frac {\frac 1 3 ml^2} {m \frac l 2} = \frac 2 3 l
$$

3. Calculate the reduced length and the period if, in the case of the rod from the previous example, the axis of rotation is at a distance of $\frac l 4$ from the center of mass! The length of the rod is $0.6\text{ m}$.

The determination of the moment of inertia can be done based on the parallel axis theorem (Steiner's theorem):

$$
\Theta_0 = \Theta_{\text{COM}} + md^2
$$

From here, based on the previous example, we determine $\Theta_{\text{COM}}$!

$$
\Theta_{\text{COM}} = \Theta_0 - md^2 = \frac 1 3 ml^2 - m\left(\frac l 2\right)^2 = \frac 1 {12} ml^2
$$

Now we determine the new $\Theta$!

$$
\Theta = \Theta_{\text{COM}} + ms^2 = \frac 1 {12} ml^2 + m\left(\frac l 4\right)^2 = \frac 7 {48} ml^2
$$

Now the reduced length can already be determined:

$$
l_{\text{r}} = \frac {\Theta} {ms} = \frac {\frac 7 {48} ml^2} {m\frac l 4} = \frac 7 {12} l = \frac{7 \cdot 0.6}{12} = 0.35\text{ m}
$$

The period:

$$
T = 2\pi \sqrt {\frac {l_{\text{r}}} g} = 2\pi \sqrt {\frac {0.35} {9.81}} = 1.187\text{ s}
$$

## Problems

**Problem 1: The Suspended Disk**
A thin disk of mass $m$ and radius $R$ with a homogeneous mass distribution is suspended by one point of its rim so that it can perform oscillations in its own plane.
*   Determine the period of the pendulum for small displacements!
*   What is the reduced length of the disk?

*Hint:* The moment of inertia of the disk relative to its own center of mass is: $\Theta_{\text{COM}} = \frac{1}{2}mR^2$, apply the parallel axis theorem!

**Problem 2: The Minimal Period**
A thin, homogeneous rod of length $L$ is set into oscillation as a physical pendulum around a horizontal axis passing through it. The suspension point is located at a distance $x$ from the center of mass of the rod. 
*   Write down the period as a function of the distance $x$!
*   Verify by calculation what distance $x$ will make the period of the rod minimal!

**Problem 3: The Model of a Pendulum Clock**
Let us model the pendulum of a pendulum clock as follows: the shaft of the pendulum is a rigid rod of length $l$ and negligible mass, at the end of which a solid sphere of mass $m$ and radius $R$ is fixed.
*   Determine the period of this physical pendulum!
*   In what ratio does the period of this pendulum stand to that of a simple pendulum whose length matches the distance measured from the suspension to the center of the sphere ($l+R$)?

*Hint:* The moment of inertia of a solid sphere relative to its own center of mass is: $\Theta_{\text{COM}} = \frac{2}{5}mR^2$.
