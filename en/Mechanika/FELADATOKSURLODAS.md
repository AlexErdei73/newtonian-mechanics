# Exercises on Friction

## Examples

1. The coefficient of sliding friction between a car's tire and the asphalt road is $0.6$, and the coefficient of static friction is $0.8$. The car decelerates uniformly from a speed of $100\text{ }\frac{\text{km}}{\text{h}}$ such that the anti-lock braking system (ABS) is working, meaning the wheels do not slip on the ground. Calculate the car's deceleration, the time elapsed until a complete stop, and the stopping distance if the car's mass is $1300\text{ kg}$! Does the magnitude of the deceleration depend on the car's mass? Also, calculate the stopping distance if the ABS turns off, causing the wheels to lock completely and slide on the ground! The acceleration due to gravity is $g = 9.81\text{ }\frac{\text{m}}{\text{s}^2}$.

The gravitational force acting on the car is:

$$
F_g = m \cdot g = 1300 \cdot 9.81 = 12,753\text{ N}
$$

Since the road is horizontal, the perpendicular constraint force pressing the surfaces together is equal to the gravitational force:

$$
N = F_g = 12,753\text{ N}
$$

Since the ABS prevents the wheels from slipping, the maximum achievable static friction force acts on the vehicle, providing the net braking force:

$$
F_{\text{net}} = F_{t,\text{max}} = \mu_t \cdot N = 0.8 \cdot 12,753 = 10,202.4\text{ N}
$$

From Newton's second law ($F_{\text{net}} = m \cdot |a|$), the magnitude of the acceleration is:

$$

|a| = \frac {F_{\text{net}}} {m} = \frac {10,202.4} {1300} \approx 7.848\text{ }\frac {m} {s^2}
$$

Since the motion is decelerating, the sign of the acceleration is negative: $a = -7.848\text{ }\frac {\text{m}} {\text{s}^2}$.

Let's convert the initial speed into basic SI units:

$$
100\text{ }\frac{\text{km}}{\text{h}} = \frac{100 \cdot 1000\text{ m}}{3600\text{ s}} \approx 27.78\text{ }\frac {\text{m}} {\text{s}}
$$

The duration until coming to a stop ($v = 0\text{ }\frac{\text{m}}{\text{s}}$) from the acceleration formula:

$$
a = \frac {v - v_0} {t} \implies -7.848 = \frac {0 - 27.78} {t}
$$

$$
t = \frac {-27.78} {-7.848} \approx 3.540\text{ s}
$$

The length of the covered stopping distance based on the quadratic distance law:

$$
s = v_0 \cdot t + \frac {a} {2} \cdot t^2 = 27.78 \cdot 3.540 + \frac {-7.848} {2} \cdot 3.540^2 \approx 98.34 - 49.17 = 49.17\text{ m}
$$

It can be seen that the magnitude of the deceleration is actually completely independent of the car's mass, since combining the equations cancels out the mass:

$$

|a| = \frac {F_{\text{net}}} {m} = \frac {\mu_t \cdot m \cdot g} {m} = \mu_t \cdot g = 0.8 \cdot 9.81 = 7.848\text{ }\frac {\text{m}} {\text{s}^2}
$$

**In the case of locked (sliding) wheels:**
At this point, the coefficient of sliding friction determines the process, so the magnitude of the deceleration is:

$$

|a| = \mu \cdot g = 0.6 \cdot 9.81 = 5.886\text{ }\frac {\text{m}} {\text{s}^2} \implies a = -5.886\text{ }\frac {\text{m}} {\text{s}^2}
$$

The duration of sliding braking:

$$
t = \frac {v - v_0} {a} = \frac {0 - 27.78} {-5.886} \approx 4.720\text{ s}
$$

The length of the sliding stopping distance:

$$
s = v_0 \cdot t + \frac {a} {2} \cdot t^2 = 27.78 \cdot 4.720 + \frac {-5.886} {2} \cdot 4.720^2 \approx 131.12 - 65.56 = 65.56\text{ m}
$$

The numerical results clearly show that by using the anti-lock braking system (ABS), the length of the stopping distance is shortened by more than $16\text{ meters}$, which can be life-saving.

2. The coefficient of sliding friction between a car's tire and the asphalt is $0.6$, and the static coefficient is $0.8$. What is the car's maximum acceleration if the traction control system functions optimally? How much time does it take and over what distance does the vehicle reach a speed of $100\text{ }\frac{\text{km}}{\text{h}}$ from rest? Calculate the same quantities if the driven wheels spin (slide) throughout the entire duration of the acceleration!

By using traction control, the wheels operate at the limit of static friction, so the maximum accelerating force is provided by the maximum static friction ($F_{\text{net}} = F_{t,\text{max}} = \mu_t \cdot m \cdot g$):

$$
a = \frac {F_{\text{net}}} {m} = \frac {\mu_t \cdot m \cdot g} {m} = \mu_t \cdot g = 0.8 \cdot 9.81 = 7.848\text{ }\frac {\text{m}} {\text{s}^2}
$$

The time required to reach a speed of $v = 100\text{ }\frac{\text{km}}{\text{h}} \approx 27.78\text{ }\frac{\text{m}}{\text{s}}$:

$$
t = \frac {v - v_0} {a} = \frac {27.78 - 0} {7.848} \approx 3.540\text{ s}
$$

The distance covered during acceleration:

$$
s = \frac {a} {2} \cdot t^2 = \frac {7.848} {2} \cdot 3.540^2 \approx 49.17\text{ m}
$$

It can be observed that the stopping distance covered during ideal braking is precisely equal to the distance covered during ideal acceleration, since during both processes we fully exploit the available static friction limit. Because of this, the two processes are kinematically perfect mirror images of each other in time. (In reality, they are of course completely different energetically, since during braking the braking system heats up intensively, while during acceleration the engine burns fuel).

**In the case of spinning (sliding) driven wheels:**
At this point, the acceleration value is already limited by sliding friction:

$$
a = \mu \cdot g = 0.6 \cdot 9.81 = 5.886\text{ }\frac {\text{m}} {\text{s}^2}
$$

The increased duration required to reach the speed:

$$
t = \frac {v - v_0} {a} = \frac {27.78 - 0} {5.886} \approx 4.720\text{ s}
$$

The length of the acceleration distance with spinning wheels:

$$
s = \frac {a} {2} \cdot t^2 = \frac {5.886} {2} \cdot 4.720^2 \approx 65.57\text{ m}
$$

---

## Practice Problems

**1. Braking on Wet Asphalt**
A car travels on a wet asphalt road at a speed of $90\text{ }\frac{\text{km}}{\text{h}}$. On the wet surface, the coefficient of static friction between the tire and the road drops to $\mu_t = 0.5$, and the coefficient of sliding friction drops to $\mu = 0.4$. What will be the length of the stopping distance if the car brakes with a working anti-lock braking system (ABS), and what will it be if the brakes lock up (the wheels slip)?

**2. Off-road Vehicle on an Icy Road**
In winter, we travel on a completely icy road section with an off-road vehicle with a mass of $1500\text{ kg}$. On the ice surface, the static coefficient of the tire is only $0.15$, and its coefficient of sliding friction is $0.1$. What is the maximum deceleration the vehicle is capable of at the threshold of slipping? How long does it take to come to a complete stop from an initial speed of $50\text{ }\frac{\text{km}}{\text{h}}$ if we brake carefully without slipping (activating the ABS)?

**3. Acceleration Limits of a Sports Motorcycle**
We want to reach a speed of $100\text{ }\frac{\text{km}}{\text{h}}$ from rest as quickly as possible with a sports motorcycle. The static coefficient between the warm tire and the dry asphalt is excellent, $\mu_t = 1.0$. The combined mass of the motorcycle and the rider is $250\text{ kg}$. Assume that the center of mass of the motorcycle is low enough so that the front wheel does not lift off the ground even during maximum acceleration (the bike does not wheelie). What is the minimum duration under which we can reach the target speed at the threshold of slipping? Is it necessary to know the mass to calculate the acceleration?

**4. Comparison of the Stopping Distance of a Passenger Car and a Truck**
Let's compare the stopping distance of a passenger car with a mass of $1000\text{ kg}$ and a truck with a mass of $4000\text{ kg}$! Both vehicles travel at the same speed of $72\text{ }\frac{\text{km}}{\text{h}}$, and during emergency braking, the wheels of both lock up completely (slide). The coefficient of sliding friction between the tire and the asphalt is identical for both vehicles: $\mu = 0.7$. Which vehicle is able to stop in a shorter distance? Justify your answer with numerical calculations!

**5. Loss of Traction in a Drag Race**
In a drag race, a race car accidentally applies too much throttle at the moment of launch, causing its driven wheels to spin continuously on the ground throughout the first $4\text{ seconds}$ of acceleration. The coefficient of sliding friction between the surfaces is $\mu = 0.5$, whereas the static coefficient would have been an optimal $\mu_t = 0.9$ in the ideal case. What distance does the car cover during these $4\text{ seconds}$ of acceleration? What distance would it have left behind if it had accelerated right at the optimal static limit with the help of traction control?
