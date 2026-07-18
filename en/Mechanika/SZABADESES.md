# Free Fall

## Experiments

[Free Fall Experiment in the World's Largest Vacuum Chamber](https://www.youtube.com/watch?v=E43-CfukEgs)

[Free Fall Experiments Without a Vacuum Chamber](https://www.youtube.com/watch?v=gZbsgk5KgpU)

[Free Fall Experiment on the Moon](https://www.youtube.com/watch?v=KDp1tiUsZw8)

## Simulation

[Free Fall Interactive Simulator](https://alexerdei73.github.io/physics-engine/project/#0dc5f5ff-96d5-4814-a91d-ee64042e037b)

Let us examine the velocity-time and distance-time graphs of a freely falling object by running the simulation!

## Free Fall and Its Conditions

According to Galileo Galilei's observations, objects of different masses—regardless of their material composition—will strike the ground at the same time if they are released from the same height. However, this law manifests itself fully only if air resistance is negligible during the motion, meaning the objects fall purely freely, completely devoid of any other external influences.

Galileo also determined that free fall is a uniformly accelerated motion, whose constant acceleration is called **gravitational acceleration**. Its average value at the Earth's surface is approximately $9.81\text{ }\frac{\text{m}}{\text{s}^2}$. The value of gravitational acceleration varies slightly depending on geographic location due to the Earth's shape and mass distribution.

> **Freely falling objects near the surface of the Earth undergo a uniformly accelerated motion, where the acceleration is the gravitational acceleration. The symbol for gravitational acceleration is $g$, and its average value is $9.81\text{ }\frac{\text{m}}{\text{s}^2}$, which depends slightly on geographic location. At any given location, the gravitational acceleration is precisely the same for all objects.**

The quadratic law of motion applies fully to a fall starting with zero initial velocity:

$$
h = \frac {g} {2} \cdot t^2
$$

Here, $h$ is the release height (the vertical distance covered), $t$ is the duration of the fall, and $g$ is the gravitational acceleration.

### Examples

1. How long does it take for an object dropped from a height of $5.00\text{ m}$ to hit the ground if it falls freely? At what velocity does it impact?

Let us write down the quadratic law of motion and denote the unknown time by $x$:

$$
h = \frac {g} {2} \cdot t^2
$$

$$
5.00 = \frac {9.81} {2} \cdot x^2
$$

$$
5.00 = 4.905 \cdot x^2
$$

$$
x^2 \approx 1.019
$$

$$
x = \pm 1.010
$$

We reject the negative time value as a physically meaningless solution, so the object falls in $1.01\text{ s}$.

The impact velocity is calculated from the fundamental definition of acceleration:

$$
a = g = \frac {v - v_0} {t}
$$

$$
9.81 = \frac {v - 0} {1.0096}
$$

$$
v \approx 9.90
$$

Therefore, the instantaneous velocity at the moment of hitting the ground is $9.90\text{ }\frac {\text{m}} {\text{s}}$.

2. A freely falling object impacts the ground with a velocity of $30.0\text{ }\frac {\text{m}} {\text{s}}$. How long did the object fall, and from what height was it released?

First, let us determine the duration of the fall, where the unknown is denoted by $x$:

$$
a = g = \frac {v - v_0} {t}
$$

$$
9.81 = \frac {30.0 - 0} {x}
$$

$$
9.81 \cdot x = 30.0
$$

$$
x \approx 3.058
$$

The duration of the fall rounded to three significant figures is $3.06\text{ s}$.

Using this, the initial height can already be calculated directly:

$$
h = \frac {g} {2} \cdot t^2 = \frac {9.81} {2} \cdot 3.058^2 \approx 45.9\text{ m}
$$

The object was therefore released from a height of $45.9\text{ m}$.

## Exercises

1. How much time does it take for an object dropped freely from a height of $80.0\text{ m}$ to hit the ground, and at what velocity does it impact the earth?
2. A freely falling object arrives at the ground with a velocity of $20.0\text{ }\frac {\text{m}} {\text{s}}$. How long did it fall, and from what height was it dropped?
3. A pebble is dropped from the top of a $150.0\text{ m}$ high tower. How long does it take to arrive at the ground, and what will its final velocity be immediately before impact?
4. The impact velocity of a freely falling object is $60.0\text{ }\frac {\text{m}} {\text{s}}$. How long did its fall last, and from what height did it start?
5. A dropped object hits the ground exactly at the end of the 3rd second of its fall. What distance did it cover until striking the ground, and what was its instantaneous velocity at the end of the 1st second?
