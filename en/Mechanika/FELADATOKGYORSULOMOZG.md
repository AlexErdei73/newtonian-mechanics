# Exercises on Accelerated Motion

## Examples of Accelerated Motion with Zero Initial Velocity

1. A car accelerates from rest to $100\text{ km/h}$ in $8.00\text{ s}$. What is the final velocity in $\text{m/s}$? What is the acceleration? What is the distance traveled during acceleration? The acceleration can be considered uniform throughout the process.

$$
v = \frac {s} {t} = \frac {100\text{ km}} {1\text{ h}} = \frac {100,000\text{ m}} {3600\text{ s}} \approx 27.8\text{ }\frac {\text{m}} {\text{s}}
$$

Here, we used the fundamental concept of uniform motion to convert the final velocity, as we can assume the car would continue to travel at this constant speed after the acceleration phase. This means it would cover a distance of $100\text{ km}$ in $1\text{ h}$. We know that $1\text{ hour} = 60\text{ minutes} = 3600\text{ seconds}$, since each minute contains $60\text{ s}$.

$$
a = \frac {\Delta v} {t} = \frac {v - v_0} {t} = \frac {27.8\text{ }\frac {\text{m}} {\text{s}} - 0} {8\text{ s}} \approx 3.48\text{ }\frac {\text{m}} {\text{s}^2}
$$

$$
s = \frac {a} {2} \cdot t^2 = \frac {3.48\text{ }\frac {\text{m}} {\text{s}^2}} {2} \cdot (8\text{ s})^2 = 111\text{ m}
$$

The results are rounded to three significant figures, as required by the precision of the initial data, so the final answer should not suggest greater precision.

2. An object slides down a $30^\circ$ inclined plane without friction, starting from rest, with an acceleration of $5.00\text{ }\frac{\text{m}}{\text{s}^2}$. If the length of the incline is $10.0\text{ m}$, how many seconds does it take to reach the bottom of the incline? At what velocity does it arrive?

$$
s = \frac {a} {2} \cdot t^2
$$

Substituting the known data, where the unknown time is denoted by $x$ (units are omitted during the calculation, and the result is understood to be in seconds):

$$
10.0 = \frac {5.00} {2} \cdot x^2
$$

$$
10.0 = 2.50 \cdot x^2
$$

$$
4.00 = x^2
$$

$$
x = \pm 2.00
$$

Since the elapsed time can physically only be a positive value, the correct solution is $t = 2.00\text{ s}$. The precision is reported here rounded to three significant figures as well.

Calculating the final velocity from the acceleration formula:

$$
a = \frac {v - v_0} {t}
$$

$$
5.00 = \frac {x - 0} {2.00}
$$

$$
x = 10.0
$$

Thus, the object reaches a velocity of exactly $10.0\text{ }\frac{\text{m}}{\text{s}}$ at the bottom of the incline.

### Practice Tasks

1. A car accelerates uniformly from rest to $60.0\text{ km/h}$ in $5.00\text{ s}$. What is its acceleration, and what distance does it cover during the acceleration time?
2. A ball rolls down a hillside. The motion can be considered frictionless, and its acceleration is $3.00\text{ }\frac{\text{m}}{\text{s}^2}$. The length of the hill is $15.0\text{ m}$. How much time does it take for the ball to reach the bottom, and what will its velocity be at the bottom?
3. A elevator starting from rest accelerates upward with a uniform acceleration of $2.00\text{ }\frac{\text{m}}{\text{s}^2}$ for exactly $10.0\text{ s}$. What will the final velocity of the elevator be, and what distance does it cover during this time?

---

## Examples of Accelerated Motion with Non-Zero Initial Velocity

1. The deceleration of a ball thrown vertically upward due to the gravitational force is $9.81\text{ }\frac{\text{m}}{\text{s}^2}$. How high does it fly if it is launched with an initial velocity of $5.00\text{ }\frac{\text{m}}{\text{s}}$, and how much time does it take to reach the peak of its trajectory?

If we apply the standard formula, the value of acceleration must be taken into account with a negative sign, since the velocity of the ball continuously decreases (decelerates). At the highest point, its instantaneous velocity becomes zero ($v = 0$).

$$
a = \frac {v - v_0} {t}
$$

$$
-9.81 = \frac {0 - 5.00} {x}
$$

$$
-9.81 \cdot x = -5.00
$$

$$
x = \frac {-5.00} {-9.81} \approx 0.510
$$

Thus, the duration of the ascent is $t = 0.510\text{ s}$.

The maximum height is determined using the quadratic law of motion:

$$
s = v_0 \cdot t + \frac {a} {2} \cdot t^2 = 5.00 \cdot 0.510 + \frac {-9.81} {2} \cdot 0.510^2 \approx 1.27\text{ m}
$$

The ball flies to a maximum height of $1.27\text{ m}$.

2. A car brakes from an initial velocity of $30.0\text{ }\frac{\text{m}}{\text{s}}$ with a constant deceleration of $3.00\text{ }\frac{\text{m}}{\text{s}^2}$, covering a distance of $113\text{ m}$ during the braking distance. How long did the braking process last, and to what velocity did the vehicle slow down?

This task might seem complex at first, but notice that in the quadratic law of motion, all parameters are given except for time. The time duration can therefore be uniquely determined by solving a quadratic equation.

$$
s = v_0 \cdot t + \frac {a} {2} \cdot t^2
$$

$$
113 = 30.0 \cdot x + \frac {-3.00} {2} \cdot x^2
$$

Rearranging the equation to equal zero:

$$
1.50 \cdot x^2 - 30.0 \cdot x + 113 = 0
$$

To determine the time $x$, we apply the well-known quadratic formula:

$$
x_{1,2} = \frac {-b \pm \sqrt {b^2 - 4ac}} {2a} = \frac {30.0 \pm \sqrt {30.0^2 - 4 \cdot 1.50 \cdot 113}} {2 \cdot 1.50} = \frac {30.0 \pm \sqrt {900 - 678}} {3.00} = \frac {30.0 \pm 14.9} {3.00}
$$

At the end of the calculation, we obtain two mathematical solutions: $x_1 = 15.0$ and $x_2 = 5.03$.

Physically, the two values carry the following meaning: in the first case ($5.03\text{ s}$), the car traveling straight reaches the specified distance without changing direction. The larger time value ($15.0\text{ s}$) would manifest if the braking acceleration continued to act continuously even after the vehicle came to a complete stop: the car would slow down to zero, turn around, and accelerate backward to reach the $113\text{ m}$ distance measured from the starting point once again. Since in reality braking ends upon stopping or when the desired velocity is reached, only the shorter time before the direction of motion reverses is relevant to us. The deceleration time is therefore $t = 5.03\text{ s}$.

The velocity reached can then be calculated simply from the fundamental acceleration formula:

$$
a = \frac {v - v_0} {t}
$$

$$
-3.00 = \frac {x - 30.0} {5.03}
$$

$$
-15.1 = x - 30.0
$$

$$
x = 14.9
$$

The velocity of the car at the end of the segment is $14.9\text{ }\frac{\text{m}}{\text{s}}$.

### Practice Tasks

4. A car starting from an initial velocity of $20.0\text{ }\frac{\text{m}}{\text{s}}$ brakes with a constant deceleration of $2.00\text{ }\frac{\text{m}}{\text{s}^2}$. How much time does it take to cover exactly $60.0\text{ meters}$ from the start of braking?
5. A ball is thrown vertically upward from the ground with an initial velocity of $15.0\text{ }\frac{\text{m}}{\text{s}}$. The deceleration value caused by the gravitational force is $9.81\text{ }\frac{\text{m}}{\text{s}^2}$. How much time elapses before the ball reaches a height of $10.0\text{ meters}$ during the ascending phase?
6. The steam locomotive of a train travels at a speed of $25.0\text{ }\frac{\text{m}}{\text{s}}$, then increases its velocity with a uniform acceleration of $5.00\text{ }\frac{\text{m}}{\text{s}^2}$ for $10.0\text{ seconds}$. What final velocity does the train reach, and what distance does it cover during the acceleration phase?
7. A moped travels at a speed of $12.0\text{ }\frac{\text{m}}{\text{s}}$ when it suddenly begins to brake with a deceleration of $1.50\text{ }\frac{\text{m}}{\text{s}^2}$. How much time does it need to cover $50.0\text{ meters}$ along the braking distance?
8. A sports car rushes at a speed of $40.0\text{ }\frac{\text{m}}{\text{s}}$, then accelerates intensely with an acceleration of $5.00\text{ }\frac{\text{m}}{\text{s}^2}$ for exactly $8.00\text{ seconds}$. To what speed does the vehicle's velocity rise, and what distance does it leave behind by the end of the process?
9. A skier glides down the track at a speed of $30.0\text{ }\frac{\text{m}}{\text{s}}$, then begins to brake with a uniform deceleration of $4.00\text{ }\frac{\text{m}}{\text{s}^2}$ upon reaching the horizontal run-out. How much time does it take for their speed to reduce to $10.0\text{ }\frac{\text{m}}{\text{s}}$, and what distance do they cover during this deceleration process?
