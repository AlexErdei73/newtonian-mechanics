# Mechanical Energy

## The Concept of Energy

We have seen that acceleration work performed on an object is stored in the physical system in the form of kinetic energy, while lifting work is stored in the form of potential energy. From this, we can conclude that the mechanical work invested into the system can be recovered later – even in its entirety – provided that the frictional and drag losses opposing the motion are negligible.

### Experiments
[Small cart driven by the potential energy of water (Short video)](https://www.youtube.com/shorts/oQi9H1pqRLM)

[Potential energy of wooden balls drives the mechanical machine (Short video)](https://www.youtube.com/shorts/PxiitGpbq2o)

The experiments spectacularly prove that by purposefully utilizing the accumulated potential energy of objects, the previously invested work can be recovered and directly converted into useful mechanical work or kinetic energy.

> **Energy is a physical state indicator that specifies the capacity of objects to perform work. Symbol: $E$, its fundamental SI unit is the joule (J). Potential energy and kinetic energy are different manifestations of mechanical energy.**

In ideal, lossless systems, the invested work can theoretically always be 100% recovered from mechanical energy.

## Conservation of Mechanical Energy

Suppose that only conservative forces act on an object during its motion. For simplicity, let us assume that only a single such conservative force exerts an effect on the object. In this case, the work done by this force is nothing other than the decrease in the object's potential energy:

$$
W = -\Delta E_h
$$

Since in our model this is the only acting force, it also constitutes the net force acting on the object, so according to the work-energy theorem, its work equals the increase in the object's kinetic energy:

$$
W = \Delta E_m
$$

Comparing the two equations, it is clear that the kinetic energy increases by exactly the same amount that the potential energy of the object decreases:

$$
-(E_h - E_{h,0}) = E_m - E_{m,0}
$$

$$
E_{h,0} - E_h = E_m - E_{m,0}
$$

Rearranging the equation so that the initial states (indexed with $0$) are on one side and the final states are on the other:

$$
E_m + E_h = E_{m,0} + E_{h,0}
$$

It follows that the sum of the two types of energy remains constant throughout the motion:

$$
E_m + E_h = \text{const.}
$$

> **If only conservative forces do work in a closed mechanical system, then the total mechanical energy of the system (the sum of kinetic and potential energy) is constant over time. This is the theorem of the conservation of mechanical energy.**

Although we showed the theorem in the derivation above only for the simplified case of a single body and a single acting force, the law is completely general, valid for complex systems, and can be proven in an exact manner.

When applying the conservation law, it is a strict condition that no dissipative forces (causing energy loss), such as friction or air resistance, occur in the system. It is also a condition that external, non-conservative forces do not modify the system (for example, an external person does not push the object with their muscular strength). The work done by constraint forces exerted by surfaces is usually zero during the motion because they are perpendicular to the displacement, so they do not violate the conservation.

### Experiment
[Professor Walter Lewin's famous pendulum experiment on the conservation of mechanical energy (MIT)](https://www.youtube.com/watch?v=77ZF50ve6rs)

Professor Walter Lewin uses a monumental pendulum in his lecture to demonstrate the theorem: he lifts a heavy steel ball hanging from the ceiling with a mass of $15\text{ kg}$ to a height of exactly $1\text{ m}$. By doing this, he invests roughly $150\text{ J}$ of potential energy into the system. This energy would be more than enough to crush a person's jaw after releasing the ball.

The professor presses his chin tightly against the wall and the ball, then releases the heavy pendulum without an initial velocity (from rest). The pendulum swings away, its potential energy converts completely into kinetic energy at the bottom of the path, and then converts back into potential energy on the other side. When the ball swings back toward the professor's face, due to the law of conservation of mechanical energy, it **cannot rise higher than the point from which it started**. The ball stops and just barely touches the professor's chin, proving that the laws of physics work flawlessly.

### Simulation
[Physical modeling of pendulum swing interactive simulator](https://alexerdei73.github.io/physics-engine/project/#be74d75b-d4ef-49e0-ac4e-98ff80ff6a54)

Both the experiment and the interactive simulation model pendulum motion, where mechanical energy is conserved. If the air resistance of the air and the friction of the suspension point are negligible, only two forces act on the body: the conservative gravitational force and the constraint force $K$ exerted by the rope. Since the rope force acts in the direction of the radius of the circular path, meaning it is perpendicular to the instantaneous displacement of the body at every point, its work is zero ($W_K = 0$). Thus, in the system, the sum of the gravitational potential energy and the kinetic energy alone gives the total mechanical energy, which remains constant throughout the motion. This can be excellently tracked when running the simulation, where the software continuously plots and quantifies these energy values on a graph in the upper left corner.

### Examples

1. An object with a mass of $0.100\text{ kg}$ is pushed at the bottom of a frictionless inclined plane with an initial velocity of $5.00\text{ }\frac{\text{m}}{\text{s}}$. What is its kinetic energy and potential energy at the starting point? How high can the object rise along the incline? What is its kinetic and potential energy at the highest point of the path? The acceleration due to gravity is $g = 9.81\text{ }\frac{\text{m}}{\text{s}^2}$.

The initial kinetic energy of the object:

$$
E_{m,0} = \frac {m \cdot v_0^2} {2} = \frac {0.1\text{ kg} \cdot 5^2} {2} = 1.25\text{ J}
$$

The numerical value of potential energy depends on the choice of the reference level. Let us take the bottom of the incline as the zero level ($h_0 = 0\text{ m}$):

$$
E_{h,0} = m \cdot g \cdot h_0 = 0\text{ J}
$$

Since the surface is frictionless and no other dissipative forces act, according to the law of conservation of mechanical energy, the sum of the energies is constant at every subsequent moment of motion:

$$
E_h + E_m = 1.25\text{ J}
$$

As the object moves up the incline, gravity continuously decelerates it until its velocity becomes zero for a moment, and then it turns back. Therefore, it reaches its maximum height of ascent ($h$) precisely at the moment when its instantaneous velocity, and thus its kinetic energy, decreases to zero ($E_m = 0\text{ J}$). At the peak, the entire initial energy converts into potential energy:

$$
m \cdot g \cdot h + 0 = 1.25\text{ J}
$$

$$
0.1 \cdot 9.81 \cdot h = 1.25
$$

$$
h = \frac {1.25} {0.1 \cdot 9.81} \approx 1.274\text{ m} 
$$

Rounded to three significant figures, the object can rise to a vertical height of $1.27\text{ m}$. At this highest point, its kinetic energy is $0\text{ J}$, and its potential energy is $1.25\text{ J}$.

2. An object with a mass of $0.100\text{ kg}$ is hung at the end of a rope of negligible mass with a length of $3.00\text{ m}$ (simple pendulum), and then pushed from the vertical position with an initial velocity of $5.00\text{ }\frac{\text{m}}{\text{s}}$. How high does the object rise above the level of the starting point, and what angular displacement does this correspond to at the endpoint of the path? Frictional losses can be neglected.

Notice that the initial data are numerically identical to the data in Example 1. Since the constraint force $K$ tensioning the rope points in the direction of the radius of the circular path, it is perpendicular to the displacement at every moment, meaning it does not perform mechanical work ($W_K = 0\text{ J}$). Only the conservative gravitational force does work in the system, so completely independent of the path of motion (be it a straight incline or a circular arc), the law of conservation of mechanical energy is valid here as well.

Based on the previous conservation of energy, we get exactly $h = 1.274\text{ m}$ for the maximum vertical height of ascent of the object.

Determining what angular displacement belongs to this height is already a pure geometric problem. Let us denote the maximum angle of the pendulum with the vertical by $\alpha$! At the moment of maximum displacement, the length of the string ($R = 3\text{ m}$) forms the hypotenuse, and the length of the vertical projection ($R - h$) forms the adjacent side to the angle. Based on the definition of the cosine function:

$$
\cos \alpha = \frac {R - h} {r_b} = \frac {R - h} {R} = \frac {3 - 1.274} {3} = \frac{1.726}{3} \approx 0.5753
$$

$$
\alpha \approx 54.88^\circ
$$

The maximum angular displacement rounded to three significant figures is $54.9^\circ$.

---

## The General Law of Conservation of Energy

Pure mechanical energy is not conserved during real, everyday processes. We know from experience that a brick pushed on a horizontal tabletop slows down uniformly during its slide and then comes to a complete stop. Since its height did not change, its potential energy remained constant, but its kinetic energy completely disappeared. Where did the mechanical energy of the body go?

### Experiments
[Intense heating occurring under the influence of friction and mechanical work (Short video)](https://www.youtube.com/shorts/S_5KajI6LLg)

[Starting a fire with mechanical rubbing, without a lighter (Short video)](https://www.youtube.com/shorts/6vPUwhWyMoA)

This question posed a serious mystery to physicists for centuries. Today we know that macroscopic bodies are built up of microscopic atoms and molecules. These particles perform continuous, disordered oscillatory motion inside solid materials, which we call **thermal motion**. The higher the temperature of a body, the greater the energy with which its atoms oscillate.

When two surfaces slide over each other, the microscopic surface irregularities continuously collide and catch on each other. These tiny collisions break down the macroscopically visible mechanical energy and transfer it directly to the atoms, intensifying their disordered oscillation. Consequently, the temperature of the bodies rises. Therefore, the macroscopic mechanical energy was not lost, but converted into microscopic mechanical energy, that is, into the **internal energy** of the body.

Careful measurements show that the sum of the macroscopic mechanical energy and the internal energy of the bodies remains strictly constant in closed processes, despite the presence of dissipative forces. Thus, energy is a conserved quantity even in the most general case. However, there is a fundamental limitation: the energy of the chaotic, disordered thermal motion of atoms can never naturally convert back by itself into ordered, unidirectional mechanical motion in the case of macroscopic bodies. Therefore, the work done by dissipative forces represents a unidirectional (irreversible) energy transformation that never reverses spontaneously in nature.

> **Although the observable mechanical energy decreases under the influence of dissipative forces (friction, air resistance), the sum of mechanical energy and internal energy remains unchanged. Total energy is a strictly conserved quantity in physics. However, since internal energy cannot be directly converted back in its entirety into useful mechanical work, the amount of energy freely available for performing work continuously decreases in real processes.**

### Example
A car accelerates on a completely horizontal section of road by applying throttle. Its kinetic energy visibly increases, while its height and potential energy remain unchanged. How is this possible, especially when the motion is also opposed by dissipative forces (air resistance, rolling friction)?

The explanation lies in the chemical process taking place in the car's engine. When the throttle is applied, a mixture of fuel and air enters the cylinders of the internal combustion engine, where it burns explosively. During the chemical combustion reaction, the internal energy of the substances decreases, and a portion of this is converted into ordered mechanical work, which begins to rotate the wheels. However, the efficiency of the process is not 100%: a significant portion of the released chemical energy is spent on heating the engine and increasing the internal energy of the hot exhaust gases, meaning it heats the environment as an unavoidable loss. This topic is covered in detail by the branch of physics called **thermodynamics**.

The car forms an open system: both mass (fuel, combustion products) and energy (heat and work) cross its boundaries. If we make a balance, the sum of the chemical internal energy of the fuel used and the initial mechanical energy of the car matches precisely the sum of the internal energy of the resulting combustion products, the heat transferred to the cooling water and the environment, the work done against driving resistances, and the increased kinetic energy of the car. Therefore, total energy is conserved here as well, but by the end of the process, the amount of freely available, valuable energy has permanently decreased due to the burning of the fuel.

---

## The Impossibility of Perpetual Motion (Perpetuum Mobile)

Throughout the history of physics, inventors and amateur researchers tried for centuries to build a machine called a **perpetuum mobile**, or perpetual motion machine. A perpetual motion machine of the first kind would be a machine that, without any external energy input, could continuously perform useful mechanical work out of nothing, meaning it would violate the universal law of conservation of energy. According to the current state of science, building such a machine is categorically **impossible**, since in nature dissipative forces (friction of bearings, air resistance) are always present, so without external power, any mechanical system will sooner or later come to a stop.

Despite this, countless videos still circulate on the internet today presenting working "free energy machines." However, through rigorous physical and engineering analysis, these structures without exception always prove to be clever scams or illusions.

### Experimental Exposés
[The real operation and internal electronics of the rolling ball "perpetual motion" machine (Steve Mould)](https://www.youtube.com/watch?v=r_LG8FDt51U)

[Operation of the spring-flywheel "free energy" motor and the demonstration of the fraud](https://www.youtube.com/watch?v=nGBGPiqzeNk)

The presented videos pull back the curtain on the most popular perpetual motion illusions:
1. Steve Mould demonstrates one of the most widespread desktop "perpetual motion machines," in which a steel ball rolling down a ramp seemingly jumps back into the upper funnel by itself. If the base is replaced with transparent acrylic, the engineering trick immediately becomes visible: an **inductive proximity sensor** and a **hidden electromagnet** are built into the machine's base, powered by high-capacity capacitors and batteries. When the ball rolls over the hidden sensor, the circuit turns on the magnet for $10\text{ milliseconds}$, which suddenly pushes the ball, giving it just enough kinetic energy to replace what it lost due to friction. There is no energy out of nothing here either: the machine works until the built-in batteries run flat.
2. In the second video, we see a spring-crankshaft motor that, after being spun up, seemingly continues to spin by itself under the influence of tensioning springs, and even drives a generator to power a LED light. From the creator's honest exposure, it turns out that a **high-capacity air blower (compressor)** is operating outside the frame of the video. The hidden nozzle blows a high-velocity jet of air onto specially designed grooves of the flywheel, and this hidden pneumatic drive rotates the machine. The operational sound was mixed in afterwards using the quiet sound of a hand-spun motor to suppress the loud puffing and noise of the compressor.

---

## Problems

**1. Energies of a Freely Falling Object**
An object with a mass of $0.500\text{ kg}$ is dropped freely from a height of $20.0\text{ m}$ vertically. What is the gravitational potential energy of the object at the starting point, and what will its kinetic energy be at the exact moment of hitting the ground, assuming air resistance is negligible? (Let the reference level be the ground surface!)

**2. Ball Sliding Down an Incline**
From a state of rest, a ball with a mass of $2.00\text{ kg}$ is released from the top of a perfectly frictionless incline that is $10.0\text{ m}$ long and $5.00\text{ m}$ high. What will the kinetic energy and the magnitude of the velocity of the ball be when it reaches the bottom of the incline?

**3. Vertical Launch of a Stone**
With what initial velocity must we launch a stone with a mass of $0.200\text{ kg}$ vertically upward from ground level so that it rises to a height of exactly $15.0\text{ meters}$? Apply the theorem of the conservation of mechanical energy! (Air resistance is negligible).

**4. Releasing a Pendulum from a Horizontal Position**
The length of a string pendulum is $2.00\text{ m}$, and the mass of the small object attached to its end is $0.500\text{ kg}$. The object is pulled sideways to a height such that the supporting string is completely horizontal, and then released from rest. What will the instantaneous velocity of the object be when passing through the lowest point of the circular path?

**5. Car Coasting Up a Hill**
A car with a mass of $1000\text{ kg}$ travels on a straight, horizontal road at a speed of $72.0\text{ km/h}$, then the driver shifts into neutral and turns off the engine. Arriving at a hill, the car begins to coast upward. To what vertical height can the vehicle run up the incline without the help of the engine, assuming frictional and rolling losses are negligible?