# Examples of Elastic Collisions

## Rebound of Two Stacked Balls

### Experiment

[Rebound of stacked balls](https://www.youtube.com/watch?v=2UHS883_P60)

### Simulation

[Rebound of two stacked balls](https://alexerdei73.github.io/physics-engine/project/#5f77abb4-1a91-425d-b756-096b5e3c4107)

Let the lower ball be 10 times more massive than the upper ball. Calculate the rebound velocity of the upper ball and determine its maximum height as well! Let the initial height be $h_0$!

$$
11mgh_0 = \frac{11mv_0^2}{2}
$$

$$
2gh_0 = v_0^2
$$

Both balls reach the ground with this velocity $v_0$. First, the lower ball rebounds with a velocity of magnitude $v_0$. At this moment, it collides with the second (upper) ball, which arrives with the same speed but in the opposite direction. Suppose that the collision is central and perfectly elastic!

$$
9mv_0 = 10mv_1 + mv_2
$$

$$
\frac{10mv_0^2}{2} + \frac{mv_0^2}{2} = \frac{10mv_1^2}{2} + \frac{mv_2^2}{2}
$$

From the first equation:

$$
v_2 = 9v_0 - 10v_1
$$

The simplified form of the second equation:

$$
11v_0^2 = 10v_1^2 + v_2^2
$$

Substituting the expression for $v_2$ into this:

$$
11v_0^2 = 10v_1^2 + (9v_0 - 10v_1)^2
$$

$$
11v_0^2 = 10v_1^2 + 81v_0^2 - 180v_0 v_1 + 100v_1^2
$$

We obtain the following parametric quadratic equation for $v_1$:

$$
0 = 110v_1^2 - 180v_0 v_1 + 70v_0^2
$$

$$
0 = 11v_1^2 - 18v_0 v_1 + 7v_0^2
$$

$$
v_1 = \frac{18v_0 \pm \sqrt{324v_0^2 - 4 \cdot 11 \cdot 7v_0^2}}{2 \cdot 11} = \frac{18v_0 \pm 4v_0}{22} = v_0 \quad \text{or} \quad \frac{7}{11}v_0
$$

We are interested in the second solution, which we substitute into the equation used to calculate $v_2$:

$$
v_2 = 9v_0 - 10 \cdot \frac{7v_0}{11} = \frac{29}{11}v_0 \approx 2.636 v_0
$$

Now that we have obtained $v_2$, which is the rebound velocity of the upper ball, we can easily calculate the final height of the ball:

$$
mgh = \frac{m(2.636 v_0)^2}{2}
$$

$$
h = \frac{6.950 v_0^2}{2g} \approx 6.950 h_0
$$

Thus, the upper ball rebounds to nearly 6.95 times the release height!

## Newton's Cradle

### Experiment

[Newton's cradle](https://www.youtube.com/watch?v=ofgeRSCLyXc)

### Simulation

[Newton's cradle simulation](https://alexerdei73.github.io/physics-engine/project/#4d1b6707-6e5e-42fc-a4eb-bcdca0d2dad4)

The operation of the toy can be understood most simply by assuming perfectly elastic collisions. In this case, both momentum and mechanical energy are conserved. Suppose we lift two balls and release them on one side. Then the initial energy is:

$$
E_{\text{m},0} = \frac{2mv_0^2}{2} = mv_0^2
$$

The initial momentum:

$$
I_0 = 2mv_0
$$

Exactly the same energy and momentum must appear at the other end of the system for both conservation laws to be satisfied. Is it possible for only one ball to rise?

Due to the conservation of momentum:

$$
I_0 = I
$$

$$
2mv_0 = mv
$$

$$
v = 2v_0
$$

The velocity of the single rising ball would be twice as large as the velocity with which the two balls collided. The energy would then be:

$$
E_{\text{m}} = \frac{mv^2}{2} = \frac{4mv_0^2}{2} = 2mv_0^2
$$

This is not possible because the energy would double:

$$
E_{\text{m}} = 2E_{\text{m},0}
$$

Is it possible for three balls to rise? In this case, the velocity would be:

$$
2mv_0 = 3mv
$$

$$
v = \frac{2}{3}v_0 \approx 0.6667 v_0
$$

The mechanical energy would then be:

$$
E_{\text{m}} = \frac{3m(0.6667 v_0)^2}{2} \approx 0.6667 mv_0^2 = 0.6667 E_{\text{m},0}
$$

If three balls were to swing out, one-third of the energy would be lost, so this is not possible either. Therefore, exactly the same number of balls will swing out on the far side as we originally swung out.

There is another very important factor that is rarely mentioned when explaining the operation of the toy: the balls must be completely identical, primarily having equal masses. We have seen that this is the condition for a stationary ball to completely absorb the energy and momentum of the moving ball during a central, perfectly elastic collision. It can easily be tested using the simulation that the motion of the toy is disrupted if the mass of any ball differs from the others. In such cases, the system loses the beautiful, regular rhythm we are used to.

## Exercises

1. Two stacked balls are dropped from a height of $h_0$. The mass of the lower ball is $M$, and the mass of the upper ball is $m$. The collisions with the ground and with each other are perfectly elastic and central.
    * Show that the rebound velocity of the upper ball is:
    
    $v_{\text{upper}} = \frac{3M - m}{M + m} v_0$
    
    where
    
    $v_0 = \sqrt{2gh_0}$
    
    * Determine the height to which the upper ball rebounds!
    * Examine the limiting case where $M \gg m$! What do you observe?

2. In a Newton's cradle, there are 5 identical balls. Two are raised to a height of $h_0$ on one side and released.
    * Show, using the laws of conservation of momentum and energy, that exactly two balls will swing out on the other side!
    * At what velocity do they start?
    * What would happen if the mass of the middle ball were twice as large as the others? Would the system work the same way? Justify your answer!
