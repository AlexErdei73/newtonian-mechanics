# Moment of Inertia

## Direct Calculation

We have already seen the definition of the moment of inertia. We take each individual mass, multiply them by the square of their distance from the axis of rotation, and then add these products together. In formula form, it looks like this:

$$
I = \sum_{i = 1}^{N} m_i r_i^2
$$

This definition can be used for calculation, but it is usually cumbersome for us because we do not know the required mathematics well enough yet.

### Example

Let us calculate the moment of inertia of a rod with mass $m$ and length $l$ if the rod is rotated around an axis that passes through its endpoint and is perpendicular to the rod.

For example, let the rod lie along the $x$-axis, and let it rotate around the $z$-axis passing through the origin. The thickness of the rod is negligible compared to its length! First, we divide it into a large number of $N$ pieces:

$$
m_i = \frac{m}{N}
$$

The $x$-coordinate of the $i$-th piece is:

$$
r_i = x_i = i \cdot \frac{l}{N}
$$

Based on the definition, we can write the following relationship:

$$
I_{\text{rod}} = \sum_{i = 1}^{N} m_i r_i^2 = \sum_{i = 1}^{N} \frac{m}{N} \cdot \frac{i^2 l^2}{N^2} = \frac{m l^2}{N^3} \sum_{i = 1}^{N} i^2
$$

Our mathematical difficulty now lies in calculating the sum. There is no physics left in this, but it seems like a difficult problem. Fortunately, it is a long-solved problem, but unfortunately, we usually do not know the solution right away.

$$
\sum_{i = 1}^{N} i^2 = 1^2 + 2^2 + 3^2 + \dots + N^2 = 1 + 4 + 9 + \dots + N^2
$$

Hopefully, we can find a formula for this! Let us look at the values for different values of $N$ and try to find some relationship!

| $N$ | $\sum_{i = 1}^{N} i^2$ |
| :---: | :---: |
| 0 | 0 |
| 1 | 1 |
| 2 | 5 |
| 3 | 14 |
| 4 | 30 |

According to our conjecture, the formula is a third-degree polynomial in $N$. We will see that such a formula would solve our problem, and the formula has the following form:

$$
\sum_{i = 1}^{N} i^2 = aN^3 + bN^2 + cN + d
$$

We will attempt to determine the unknown numbers $a$, $b$, $c$, and $d$ based on our table!

$$
0 = d
$$

$$
1 = a + b + c
$$

$$
5 = 8a + 4b + 2c
$$

$$
14 = 27a + 9b + 3c
$$

We solve the system of equations, and hopefully, we get the formula we are looking for! We subtract the first equation from the other two as many times as necessary to make $c$ disappear:

$$
3 = 6a + 2b
$$

$$
11 = 24a + 6b
$$

Now there are only 2 equations and 2 unknowns left. Let us subtract 3 times the first equation here from the other equation!

$$
2 = 6a
$$

$$
a = \frac{1}{3}
$$

$$
b = \frac{1}{2}
$$

$$
c = 1 - a - b = 1 - \frac{1}{3} - \frac{1}{2} = \frac{1}{6}
$$

According to our conjecture, the formula is the following:

$$
\sum_{i = 1}^{N} i^2 = \frac{N^3}{3} + \frac{N^2}{2} + \frac{N}{6}
$$

We can test it for the case of $N = 4$ to see if it works for that too:

$$
\frac{4^3}{3} + \frac{4^2}{2} + \frac{4}{6} = 30
$$

This is the same value we calculated in our table, so the formula apparently works perfectly for larger values of $N$ as well. It can be proven that it is valid for all natural numbers $N$. Now we are almost done.

$$
I_{\text{rod}} = \left(a + \frac{b}{N} + \frac{c}{N^2}\right)ml^2
$$

We see that $I$ still depends on the value of $N$, but we must increase this greatly so that we can closely approximate the rod, which is considered to have a continuous mass distribution. In this case, only the term $a = \frac{1}{3}$ remains in the parentheses, and the other two become negligible. Thus, we have obtained what we wanted:

$$
I_{\text{rod}} = \frac{1}{3}ml^2
$$

## Moments of Inertia (for Axes Passing Through the Center of Mass)

| Object | $I_{\text{COM}}$ |
| :--- | :---: |
| Hoop / thin ring | $mR^2$ |
| Circular disk / homogeneous disk | $\frac{1}{2}mR^2$ |
| Cylinder (homogeneous) | $\frac{1}{2}mR^2$ |
| Rod (homogeneous, perpendicular to the longitudinal axis) | $\frac{1}{12}ml^2$ |
| Sphere (homogeneous, solid) | $\frac{2}{5}mR^2$ |

## Theorems Regarding the Moment of Inertia

We can see that direct calculation is quite cumbersome, especially without integral calculus, which we have not learned yet. Therefore, we need tables and theorems to make our work easier.

1. **Stretch-flattening theorem (or Flattening theorem):** A body may be stretched or compressed parallel to the axis of rotation without changing its moment of inertia.

### Examples

1. What is the moment of inertia of a rectangular plate with mass $m$ and sides $a$ and $b$ if side $a$ is the axis of rotation?
The body can be flattened into a rod along the axis of rotation, whose length remains $b$ and mass remains $m$. The formula will therefore be:

$$
I_{a,\text{rectangle}} = \frac{1}{3}mb^2
$$

2. What is the moment of inertia of a homogeneous cylinder with mass $m$ and radius $R$ relative to its axis of symmetry, if the moment of inertia of a circular disk with the same parameters is:

$$
I_{\text{COM,disk}} = \frac{1}{2}mR^2
$$

It is exactly the same because the cylinder is obtained by stretching the circular disk along the axis of symmetry.

$$
I_{\text{COM,cylinder}} = \frac{1}{2}mR^2
$$

2. **Addition theorem:** If a body can be assembled from pieces with known moments of inertia, then the requested moment of inertia will be the sum of those individual moments of inertia.

### Example

What is the moment of inertia of a rigid rod with mass $m$ and length $l$ relative to an axis of rotation that is perpendicular to the rod and passes through its midpoint?

This can be assembled from two pieces of mass $\frac{m}{2}$ and length $\frac{l}{2}$, which are spun at their ends. This is the exact case we have already calculated.

$$
I_{\text{COM,rod}} = 2 \cdot \frac{1}{3} \cdot \frac{m}{2} \left(\frac{l}{2}\right)^2 = \frac{1}{12}ml^2
$$

3. **Perpendicular axis theorem:** If the body is a planar lamina in the $x\text{-}y$ plane (meaning its extension in the $z$ direction is negligible), then its moment of inertia about the $z$-axis is equal to the sum of its moments of inertia about the $x$ and $y$ axes.

$$
I_z = \sum_{i = 1}^{N} m_i r_i^2 = \sum_{i = 1}^{N} m_i(x_i^2 + y_i^2) = \sum_{i = 1}^{N} m_i x_i^2 + \sum_{i = 1}^{N} m_i y_i^2 = I_x + I_y
$$

### Example

What is the moment of inertia of a homogeneous rectangular plate with mass $m$ and sides $a$ and $b$ around the $z$-axis if the plate lies in the $x\text{-}y$ plane, its sides are parallel to the axes, and the origin is the midpoint of the rectangle?

$$
I_{\text{COM,rectangle}} = I_x + I_y = \frac{1}{12}ma^2 + \frac{1}{12}mb^2 = \frac{1}{12}m(a^2 + b^2)
$$

4. **Parallel axis theorem (Steiner's theorem):** If we know the moment of inertia of a body about an axis passing through its center of mass, then for an axis parallel to it and at a distance $d$:

$$
I = I_{\text{COM}} + Md^2
$$

where $M$ is the total mass of the body.

Let the axis be the $z$-axis, but let the center of mass of the body not be at the origin, but on the $x$-axis at $x_{\text{COM}} = d$!

$$
I = \sum_{i = 1}^{N} m_i(x_i^2 + y_i^2)
$$

$$
I_{\text{COM}} = \sum_{i = 1}^{N} m_i((x_i - d)^2 + y_i^2) = \sum_{i = 1}^{N} m_i(x_i^2 - 2dx_i + d^2 + y_i^2)
$$

$$
I_{\text{COM}} = \sum_{i = 1}^{N} m_i(x_i^2 + y_i^2) + d^2\sum_{i = 1}^{N} m_i - 2d\sum_{i = 1}^{N} m_i x_i
$$

$$
I_{\text{COM}} = I + Md^2 - 2dMx_{\text{COM}}
$$

$$
I_{\text{COM}} = I - Md^2
$$

Here we used the fact that $\sum_{i = 1}^{N} m_i x_i = M x_{\text{COM}}$ based on the definition of the center of mass, and $x_{\text{COM}} = d$. We get the theorem by rearranging the equation for $I$.

### Examples

1. Show that the parallel axis theorem holds true for the rod!

$$
I_{\text{rod}} = I_{\text{COM,rod}} + md^2
$$

$$
I_{\text{rod}} = \frac{1}{12}ml^2 + m\left(\frac{l}{2}\right)^2 = \left(\frac{1}{12} + \frac{1}{4}\right)ml^2
$$

$$
I_{\text{rod}} = \frac{1}{3}ml^2
$$

2. Calculate the moment of inertia of a homogeneous cylinder with mass $m$ and radius $R$ if the axis is parallel to the cylinder's axis of symmetry and runs along the edge of the cylinder, meaning at a distance $R$ from the axis of symmetry!

$$
I_{\text{cylinder}} = I_{\text{COM,cylinder}} + mR^2 = \frac{1}{2}mR^2 + mR^2 = \frac{3}{2}mR^2
$$

## Problems

**Problem 1 (Application of the Parallel Axis Theorem)**

A homogeneous solid sphere of mass $m$ and radius $R$ is rotated around an axis tangent to its surface. Determine the moment of inertia of the sphere relative to this axis! Use the center of mass moment of inertia provided in the table.
*(Hint: The distance from the axis of rotation to the center of mass will be exactly the radius of the sphere.)*

**Problem 2 (Addition Theorem)**

Two identical thin rods (each of mass $m$ and length $l$) perpendicularly intersect each other at their midpoints (forming a symmetrical cross). What is the moment of inertia of the system relative to an axis passing through the intersection point and perpendicular to the plane of the rods?

**Problem 3 (Perpendicular Axis Theorem)**

We know the moment of inertia of a thin homogeneous hoop of mass $m$ and radius $R$ relative to an axis perpendicular to its plane and passing through its center (the $z$-axis), which is $I_z = mR^2$. Determine the moment of inertia of the hoop relative to an axis lying in its plane and running along one of its diameters (for example, the $x$-axis)!
*(Hint: Make use of the circle's symmetry, because of which the moments of inertia relative to the $x$ and $y$ axes are equal!)*