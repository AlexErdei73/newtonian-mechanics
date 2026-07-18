# Vector and Scalar Quantities

## Scalar Quantities

Quantities that are completely described by their magnitude (their numerical value and unit of measurement) are called **scalar quantities**. All the physical concepts mentioned so far belong to this category, such as mass, time, or density.

## Vector Quantities

In later chapters, we will frequently encounter quantities that are determined by their direction in addition to their magnitude. These are called **vector quantities**. In printed texts, they are denoted by bold letters, and in handwriting, they are usually represented by a small arrow placed above the symbol. For example, $\vec{a}$ denotes vector $a$, whose length (absolute value) is:

$$

|\vec{a}| = a
$$

The simplest physical example is the **displacement vector**, which has a well-defined magnitude and direction. Other well-known vector quantities include velocity, acceleration, and force, which we will treat in detail in subsequent chapters.

### Vector Addition

We add vectors geometrically in the exact same manner as we treat consecutive displacements (the tip-to-tail method or triangle method). The second vector is translated parallel to itself so that its tail is positioned at the tip of the first vector. The **resultant vector** then points from the tail of the first vector to the tip of the second vector.

$$
\vec{w} = \vec{u} + \vec{v}
$$

[Interactive Vector Addition Simulation (GeoGebra)](https://www.geogebra.org/m/tpa5qfuq)

During addition, we may encounter the following special cases:
* **Vectors in the same direction:** If the two component vectors lie along the same line and point in the same direction, the magnitude of the resultant vector is the pure sum of the lengths of the two components.
* **Vectors in opposite directions:** If the two vectors lie along the same line but point in opposite directions, the magnitude of the resultant vector is the difference between the two lengths (subtracting the smaller value from the larger one), and its direction matches the direction of the larger component vector.
* **Perpendicular vectors:** If the two vectors are perpendicular to each other, the magnitude of the resultant vector can be calculated using the **Pythagorean theorem**, which applies to right-angled triangles.

### Examples

1. A pedestrian walking straight along a sidewalk travels $20\text{ m}$ and then stops to talk. After this, they walk another $30\text{ m}$ in the exact same direction to the gate. What is their total displacement?

Since the displacements of the pedestrian are vectors pointing in the same direction, the magnitude of the resultant displacement is the sum of the two segments:

$$
s = 20\text{ m} + 30\text{ m} = 50\text{ m}
$$

2. The pedestrian first walks $20\text{ m}$ in one direction, then turns around and walks back $30\text{ m}$ in the opposite direction. How far did they displace from the starting point if the displacements occurred along a single straight line?

The displacements are vectors in opposite directions, therefore we subtract the length of the smaller vector from the length of the larger one:

$$
s = 30\text{ m} - 20\text{ m} = 10\text{ m}
$$

*(The direction of the resultant displacement points in the direction of the second, longer segment.)*

3. A pedestrian walks $30\text{ m}$ straight along a sidewalk, then turns perpendicularly at an intersection and walks another $40\text{ m}$. What is their displacement relative to the starting point?

Since the displacement vectors are perpendicular to each other, the resultant displacement will be the hypotenuse of a right-angled triangle:

$$
c^2 = a^2 + b^2 = (30\text{ m})^2 + (40\text{ m})^2 = 900\text{ m}^2 + 1600\text{ m}^2 = 2500\text{ m}^2
$$

$$
c = \sqrt{2500\text{ m}^2} = 50\text{ m}
$$

## Exercises

1. A tourist walks $15\text{ m}$ due East, then travels another $25\text{ m}$ in the same direction. What is their total displacement?
2. A cyclist travels $80\text{ m}$ due North, then turns around and travels $50\text{ m}$ in the opposite direction. What is their displacement relative to the starting point?
3. A person walks $9\text{ m}$ straight, then continues perpendicularly, walking another $12\text{ m}$. What is their displacement relative to the starting point?
4. A person walks $6\text{ m}$ due North, then $8\text{ m}$ due East. What is their displacement relative to the starting point?
5. A person first walks $20\text{ m}$ in one direction, then $35\text{ m}$ in the opposite direction. What is their displacement relative to the starting point?

### Vector Subtraction

We can obtain the difference between two vectors most easily by rearranging the addition equation. If we know that 

$$
\vec{u} + \vec{v} = \vec{w}
$$

, then by rearranging the terms, we arrive at the following relationship:

$$
\vec{w} - \vec{u} = \vec{v}
$$

In practice, this means that if we translate the vector to be subtracted $\vec{u}$ and the vector it is subtracted from $\vec{w}$ to a common tail starting point, then the vector $\vec{v}$ obtained as the difference will connect the two tips, pointing from the tip of the vector being subtracted ($\vec{u}$) toward the tip of the vector it is subtracted from ($\vec{w}$).

### The Zero Vector

If we subtract a vector from itself, we obtain the **zero vector** as a result. The zero vector is a special vector whose length is exactly $0$, and its direction is arbitrary (indeterminate).

$$
\vec{0} = \vec{a} - \vec{a}
$$

$$

|\vec{0}| = 0
$$

The zero vector can be added to or subtracted from any vector; the magnitude and direction of the initial vector remain unchanged.
