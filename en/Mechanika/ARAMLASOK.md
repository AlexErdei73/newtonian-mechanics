# Fluid Flow

## Observation of Flows

### Experiments

[Observation of flow with smoke, Physics Girl video](https://www.youtube.com/watch?v=N7d_RWyOv20)

[Elemér Sas's experiment with smoke rings](https://www.youtube.com/watch?v=Yg0TPid2Yt4&t=11s)

[Observation of fluid flow with ink injection](https://www.youtube.com/watch?v=cAdud5Wdvyw)

[Regular layered flow in a Hele-Shaw apparatus](https://www.youtube.com/watch?v=iixOXO5hubw)

The experiments show that flows can be well observed in both air and water. Smoke is usually blown into air, and its small particles follow the flow. In the case of water, ink is typically injected into the water, and the ink will follow the flow. 

Furthermore, we can see that flows are generally vortex-like, billowing, almost unpredictable, so-called chaotic phenomena. Under certain conditions, however, a regular, so-called laminar, streamlined flow develops.

## The Velocity Field

At a given moment, the direction and magnitude of the velocity, i.e., the velocity vector, can be measured at every point in the fluid. This is the velocity field. This means different velocities at points with different coordinates in the fluid, and it also depends on time, as the flow pattern generally changes over time.

$$\vec{u} = \vec{u}(x, y, z, t)$$

In calculations, this vector represents three equations for the three components:

$$
\begin{aligned}
u = u(x, y, z, t) \\
v = v(x, y, z, t) \\
w = w(x, y, z, t)
\end{aligned}
$$

There are practical reasons why the notation for velocity in fluid mechanics is usually $\vec{u}$, and the notation for the components is $u, v, w$.

## Ideal Fluids

We will only deal with the flow of incompressible fluids. This is a good approximation for real liquids, but it is also acceptable for gases (such as air) if the flow velocity does not exceed $0.3$ times the speed of sound. Obviously, this approximation is not suitable for describing sound waves propagating in a fluid.

Another very strong idealisation is an inviscid (frictionless) fluid, in which tangential forces do not arise. In the absence of tangential forces, pieces of the fluid cannot enter into rotation, so vortices cannot form either. There is also no energy loss, so mechanical energy is a conserved quantity, as we will see. If, somehow, the inviscid fluid were to enter into rotation, this rotation would be preserved.

This also means that swirling, turbulent flow is not possible in this approach, so this is a very rough approximation. Only vortex-free, laminar flows are possible, where the streamlines can be easily observed. If the shape of the streamlines is also constant over time, we speak of a time-independent, steady (stationary) flow. First, we will deal with this approximation.

## The Concept of Streamlines and Streamtubes

> **Streamlines are curves whose tangent at every point points in the direction of the velocity vector.**

Streamlines cannot intersect each other, as velocity cannot have two different directions at a given point. An exception to this is if the fluid has a source or a sink at a point. These are idealised points where fluid enters or leaves the system. It is customary to draw streamlines so densely that the number of streamlines passing through a unit surface perpendicular to the streamlines equals the magnitude of the velocity.

In steady flow, streamlines bound streamtubes. In these, the fluid flows along the "walls" formed by the streamlines, so the fluid can only enter and leave through surfaces perpendicular to the streamlines. It follows from this that actual pipes are also streamtubes, meaning that streamlines are parallel to the walls of the obstacles. The fluid cannot flow through the walls of the pipes.

## The Continuity Equation

> **The velocity field of an incompressible fluid is source-free everywhere, except at point sources. This means that the number of streamlines entering an arbitrary resting volume element at a given moment equals the number of streamlines leaving it. For the fluid as a whole, this means that its volume does not change during the flow. This is the continuity equation, which expresses that the shape of the fluid can change continuously, but its volume remains constant, provided that no fluid enters the system from the outside or flows out of it.**

Let the cross-sectional area of a streamtube perpendicular to the flow be $A_1 at the fluid inlet and $A_2$ at the outlet. If the velocity is $u_1$ where the fluid flows in and $u_2$ where it flows out, then the inflowing and outflowing fluid volumes during a time interval $\Delta t$ are equal:

$$
\begin{aligned}
\Delta V_1 = A_1 u_1 \Delta t \\
\Delta V_2 = A_2 u_2 \Delta t
\end{aligned}
$$

Since the volume of an incompressible fluid cannot change, the inlet and outlet volumes must be equal ($\Delta V_1 = \Delta V_2$):

$$A_1 u_1 \Delta t = A_2 u_2 \Delta t$$

This leads to the following relationship:

$$A_1 u_1 = A_2 u_2$$

> **In a streamtube, the flow velocity is inversely proportional to the cross-section of the streamtube perpendicular to the direction of flow.**

### Example

The internal radius of a garden hose is $r_1 = 0.5\text{ cm}$ (i.e., its diameter is $1\text{ cm}$). The flow velocity in the hose is $1\text{ m/s}$. What is the exit velocity from the hose if the end of the hose is narrowed and the diameter there is only $d_2 = 0.25\text{ cm}$?

In the narrowing, the diameter of the hose ($0.25\text{ cm}$) is exactly one-quarter of the original diameter of the hose ($1\text{ cm}$). Since the cross-section of a circle is proportional to the square of its diameter ($A = \frac{d^2\pi}{4}$), the exit area will be $\frac{1}{16}$ of the original area:

$$A_2 = \frac{A_1}{16}$$

Expressing the required velocity from the continuity equation:

$$u_2 = \frac{A_1 u_1}{A_2} = \frac{A_1 u_1}{A_1 / 16} = 16 u_1 = 16 \cdot 1\text{ m/s} = 16\text{ m/s}$$

The exit velocity at the narrowed end is $16\text{ m/s}$.

---

## Problems

**Problem 1**
A river flows with a uniform, steady flow. In a wide section, the cross-section of the riverbed is $60\text{ m}^2$, and here the water flow velocity is $0.5\text{ m/s}$. Later, the river reaches a narrow gorge where the bed narrows and its depth also changes, so the new cross-section is only $15\text{ m}^2$. What is the water flow velocity in this narrow gorge?

**Problem 2**
The internal diameter of a main water pipe in an apartment is $2\text{ cm}$. The bathroom tap branches off from this pipe, and the circular opening at its end has a diameter of $8\text{ mm}$. If the water flows in the main pipe at a velocity of $0.4\text{ m/s}$, at what velocity does the water shoot out through the fully opened tap?

**Problem 3**
Air flows at a velocity of $4\text{ m/s}$ in a large industrial ventilation pipe. The pipe reaches a junction where it splits into two identical, smaller-diameter pipes. According to continuity, the incoming air volume is divided equally between the two smaller branches. Determine the flow velocity measurable in the small pipes, knowing that the cross-section of the pipes after the junction is individually exactly one-third of the original cross-section of the main pipe!
