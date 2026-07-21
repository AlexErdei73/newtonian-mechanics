# Conservation of Energy in Rotational Motion

## The Center of Mass Axis

So far, we have seen that the fundamental equation of rotational motion can be applied to a fixed axis, or to the instantaneous axis of rotation when the axis is not fixed.

Now we will show that it can also be applied to an axis passing through the center of mass. We will not prove this formally, but let us look at an example!

### Example

A homogeneous spherical ball rolls down an inclined plane with an inclination angle of $30^\circ$. The moment of inertia of the sphere is $I_{\text{COM}} = \frac{2}{5}mr^2$. What is the acceleration of the sphere?

![Wheel rolling down an inclined plane](Kepek/kerekgorduleselejton.svg)

We have already solved this problem using the instantaneous axis of rotation. Now let us solve it using the axis passing through the center of mass as well!

The torque now arises from the static friction force, as it is the only force whose line of action does not pass through the center of mass axis.

$$
M_{z,\text{net}}^{\text{ext}} = F_{\text{s}}r
$$

The fundamental equation is therefore as follows:

$$
F_{\text{s}}r = I_{\text{COM}}\alpha
$$

Relative to the center of mass, the magnitude of the velocity of the point in contact with the incline is:

$$
v = r\omega
$$

In reality, the velocity of this contact point in the inertial frame is zero, since the center of mass moves with the exact same speed but in the opposite direction. Therefore, we can write:

$$
v_{\text{COM}} = r\omega
$$

from which we get the acceleration along the incline:

$$
a = a_{\text{COM}} = r\alpha
$$

This is, once again, a very important relationship. The form of Newton's second law remains the same:

$$
mg \sin \Theta - F_{\text{s}} = ma
$$

Expressing the static friction force from this and substituting it into the fundamental equation, and further expressing the angular acceleration from the previous relationship and substituting it, we get the equation for acceleration:

$$
F_{\text{s}} = mg \sin \Theta - ma
$$

$$
r(mg \sin \Theta - ma) = I_{\text{COM}}\frac{a}{r}
$$

$$
g \sin \Theta - a = a\frac{I_{\text{COM}}}{mr^2}
$$

From here, let us express $a$, and we get the relationship we are looking for:

$$
g \sin \Theta = a\left(1 + \frac{I_{\text{COM}}}{mr^2}\right)
$$

$$
a = \frac{g \sin \Theta}{1 + \frac{I_{\text{COM}}}{mr^2}}
$$

This is exactly the same relationship we previously derived using the instantaneous axis of rotation. We can substitute the moment of inertia of the sphere here:

$$
\frac{I_{\text{COM}}}{mr^2} = \frac{2}{5}
$$

$$
a = \frac{g \sin \Theta}{1 + \frac{2}{5}} = \frac{5g \sin \Theta}{7}
$$

Substituting the given values, we get the acceleration:

$$
a = \frac{5 \cdot 9.81 \cdot \sin 30^\circ}{7} \approx 3.504\text{ m/s}^2
$$

## Conservation of Mechanical Energy

In the case of rotational motion, it is also true that mechanical energy can be conserved. However, an important condition for this is that all external and internal forces must be conservative. The internal forces acting within rigid bodies are conservative. Therefore, if there is no kinetic (sliding) friction (only pure rolling) and only a single rigid body moves, mechanical energy is a conserved quantity. When calculating kinetic energy, however, rotation must be taken into account! Here, we either work with rotation about the instantaneous axis of rotation, or we add the translational kinetic energy to the rotational kinetic energy about the center of mass, imagining the entire mass of the body condensed into and moving with the center of mass.

### Example

Show that mechanical energy is constant for the sphere rolling down the incline!

$$
E = \frac{I_{\text{COM}}\omega^2}{2} + \frac{mv_{\text{COM}}^2}{2} + mgh_{\text{COM}} = \text{constant}
$$

For the sake of simplicity, let the body start from rest! In this case, the acceleration is:

$$
a_{\text{COM}} = \frac{g \sin \Theta}{1 + \frac{I_{\text{COM}}}{mr^2}}
$$

The angular acceleration is:

$$
\alpha = \frac{a_{\text{COM}}}{r}
$$

$$
v_{\text{COM}} = a_{\text{COM}}t
$$

$$
\omega = \alpha t
$$

Furthermore:

$$
h_{\text{COM}} = h_{\text{COM},0} - s \sin \Theta
$$

where

$$
s = \frac{a_{\text{COM}}}{2}t^2
$$

Let us substitute these expressions back into the energy equation!

$$
E = \frac{1}{2}mg^2 \sin^2 \Theta \cdot t^2 \frac{1}{\left(1 + \frac{I_{\text{COM}}}{mr^2}\right)^2} + \frac{1}{2}I_{\text{COM}}\frac{g^2 \sin^2 \Theta \cdot t^2}{r^2\left(1 + \frac{I_{\text{COM}}}{mr^2}\right)^2} + mgh_{\text{COM},0} - mg\frac{g \sin \Theta}{2\left(1 + \frac{I_{\text{COM}}}{mr^2}\right)}t^2 \sin \Theta
$$

The first two terms can be combined:

$$
\frac{1}{2}mg^2 \sin^2 \Theta \cdot t^2 \frac{1}{\left(1 + \frac{I_{\text{COM}}}{mr^2}\right)^2} + \frac{1}{2}I_{\text{COM}}\frac{g^2 \sin^2 \Theta \cdot t^2}{r^2\left(1 + \frac{I_{\text{COM}}}{mr^2}\right)^2} = \frac{mg^2 \sin^2 \Theta \cdot t^2}{2}\frac{1 + \frac{I_{\text{COM}}}{mr^2}}{\left(1 + \frac{I_{\text{COM}}}{mr^2}\right)^2}
$$

After simplification, this combined term is exactly the opposite of the final term in our long equation, which means we get:

$$
E = mgh_{\text{COM},0}
$$

---

## Problems

**Problem 1: The Unwinding Cylinder (The Yo-Yo Problem)**

In the text, we examined an object rolling down an incline, where the torque was provided by the static friction force. Now, imagine a solid cylinder of mass $m$ and radius $r$ ($I_{\text{COM}} = \frac{1}{2}mr^2$), with a string wrapped around its surface. The end of the string is fixed to the ceiling, and the cylinder is released from rest, so that it falls downward while unwinding from the string (like a yo-yo).
Apply the dynamical approach shown in the text: replace the static friction force with the cable tension ($T$), write down the fundamental equations for both translational and rotational motion, and determine the downward acceleration of the cylinder! How does this value compare to the acceleration due to gravity ($g$)?

[Maxwell's Wheel](https://www.youtube.com/watch?v=NNXmOm9L-S8)

Maxwell's wheel (or Maxwell's disk) is a classic demonstration apparatus that illustrates the physical principles of the yo-yo problem. A disk with a relatively large moment of inertia and a thick axle is suspended on each side by a string. When the strings are wound onto the axle and the wheel is released, it rolls downward, accelerating visibly but significantly slower than in free fall. During the motion, gravitational potential energy is converted into rotational and translational kinetic energy. Upon reaching the lowest point, the strings suddenly tighten, and due to the rotational energy of the disk, the strings begin to wind back onto the axle, causing the wheel to return almost completely to its initial starting height, performing a continuous periodic oscillation.

**Problem 2: The Race of Different Objects**

In the text, we calculated the acceleration of a solid sphere. Imagine that instead of the sphere, a homogeneous, solid cylinder rolls down the same $30^\circ$ incline! The moment of inertia of the cylinder is $I_{\text{COM}} = \frac{1}{2}mr^2$.
 
* Use the general formula derived in the text and calculate the acceleration of the cylinder! 
* Compare the obtained value with the acceleration of the sphere ($3.504\text{ m/s}^2$)! Which object reaches the bottom of the incline first if they are started simultaneously from the same height? Do the mass and radius of the objects matter regarding the final result?

**Problem 3: Alternative Derivation from the Conservation of Energy**

In the text, starting from dynamical equations, we proved that energy is constant. Perform the reverse operation! Write down the law of conservation of mechanical energy for two states: let the body start from rest at the top of an incline of length $s$ and inclination angle $\Theta$, and then reach the bottom of the incline with velocity $v$. From this equation, derive the velocity of the body's center of mass ($v$), and then, by using the kinematic formula $v^2 = 2as$, show mathematically that we obtain the exact same acceleration ($a$) as the one derived with the torque equation in the text!

**Problem 4: The Condition for Pure Rolling (Maximum Inclination Angle)**

The condition for pure rolling is that the object does not slip, meaning that the developing static friction force ($F_{\text{s}}$) must not exceed the maximum static friction force ($F_{\text{s,max}} = \mu_0 F_{\text{normal}}$). Using the acceleration formula and the static friction force expression ($F_{\text{s}} = mg \sin \Theta - ma$) from the text, derive **how large the maximum inclination angle of the slope ($\Theta_{\text{max}}$) can be** for a given coefficient of static friction $\mu_0$, so that the solid sphere still just rolls purely! *(Calculate this maximum angle explicitly if the coefficient of static friction between the incline and the sphere is* $\mu_0 = 0.2$ *!)*

**Problem 5: Rolling in the Loop-the-Loop**

Let us use the conservation of mechanical energy presented in the text for a classic problem! A homogeneous solid sphere rolls down an incline from rest at a height $h$, and then enters a vertical circular track ("loop-the-loop") of radius $R$. Determine **the minimum height $h$ from which the sphere must be released** so that it does not fall off even at the highest point of the loop (meaning it stays on the track and rolls purely throughout)! *(Hint: At the top of the loop, the object must have a minimum velocity, which is determined by the condition of weightlessness, i.e., the* $mg = m\frac{v^2}{R}$ *condition. Do not forget to include rotation in the kinetic energy of the object at the top of the loop! The radius* $r$ *of the sphere can be considered negligible compared to the radius* $R$: $r \ll R$ *.)*