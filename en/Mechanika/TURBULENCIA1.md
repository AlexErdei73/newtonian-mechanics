# Fully Developed Turbulence and the Energy Cascade

## Properties of Turbulence

We have seen from previous sections that pipe flow is only laminar, stationary, and vortex-free at low Reynolds numbers. This applies similarly to flow around a sphere, from which Stokes derived his law for drag force at very low Reynolds numbers. We have also seen how planar flow around an infinitely long cylinder becomes vortex-ridden and subsequently forms a von Kármán vortex street at higher Reynolds numbers. 

This process leads to a highly chaotic flow at high Reynolds numbers, which we refer to as turbulent flow. Of course, this cannot develop in purely planar flows, as the formation of turbulence is only possible in three dimensions. We will now examine why this is the case. In everyday life—as we shall see—we encounter turbulent flows in almost all instances once we step out of the laboratory or look beyond the simpler cases investigated so far.

### Experiments

[Properties of Turbulent Flow (YouTube Video)](https://www.youtube.com/watch?v=5zI9sG3pjVU)

This video shows many interesting details regarding turbulent flows: it discusses the boundary layer, the no-slip condition, examples where turbulence is practically useful, and naturally, the phenomenon itself along with its formation. Let us look at the main characteristics of turbulence:

*   **Spatial phenomenon:** It can only operate in 3D.
*   **Occurs at high Reynolds numbers:** When inertial forces dominate over viscous forces.
*   **Vortical flow:** The flow field is filled with rotating structures (eddies).
*   **Unpredictable and chaotic:** The velocity at any given point fluctuates wildly around a certain value.
*   **Accompanied by mixing:** Streamlines become tangled and mixed in an obviously irreversible manner.
*   **Requires energy to be maintained:** Energy is dissipated into the internal energy (heat) of the fluid, generally more intensely than in laminar flow.

Furthermore, we saw that although turbulence generally increases drag and hydrodynamic resistance in pipes, it can be explicitly beneficial in certain cases. 

#### Why Does a Golf Ball Have Dimples?
The dimpled surface of a golf ball intentionally creates a thin, turbulent boundary layer around the ball. This has two conflicting physical effects:

1. **Negative effect:** It slightly increases direct skin friction.
2. **Positive effect:** The turbulent flow adheres better to the surface, allowing air to flow further around the sphere before separating.

The consequence of this is that the low-pressure wake (pressure drag) forming behind the ball is drastically reduced, and the total drag becomes significantly smaller under identical conditions compared to a smooth ball.

---

## The Energy Cascade

The video also discussed how large eddies first form at high Reynolds numbers, and then these eddies break up into smaller eddies as they stretch out and begin to spin faster. Subsequently, these smaller eddies stretch even further and break apart into even smaller eddies, and this process continues until a sufficiently high velocity and small size are reached where friction is capable of consuming the energy of the eddies and converting it into the fluid's internal energy. 

This process is known as the **energy cascade**. Mechanical energy is injected into the large eddies, but this energy is then transferred down to the smaller eddies. At this intermediate level, energy is conserved because friction does not yet play a primary role. 

The process can only take place in three dimensions due to the vital role played by the stretching and spinning up of vortex filaments (*vortex stretching*). 

> **The Figure Skater Analogy:** Imagine a spinning figure skater. When they pull their arms in toward their axis of rotation (thereby stretching along the rotational axis), their spin suddenly accelerates due to the conservation of angular momentum. In turbulent flow, large eddies stretch smaller eddies along the third dimension in exactly this manner, causing them to rotate faster while their size decreases. In planar (2D) flows, this process is a physical impossibility due to the conservation of mass.

This step-by-step process therefore transfers the injected energy into smaller and smaller eddies until friction finally consumes the injected mechanical energy at the very end. Let us watch a video about this.

### Experiments

[The Energy Cascade, or Order Within Chaos (YouTube Video)](https://www.youtube.com/watch?v=_UoTTq651dE)

This video also explains the properties of turbulence, but it talks about the energy cascade in much greater detail. Following that, it mentions an important mathematical law.

>**The energy stored in eddies of various sizes, relative to a unit mass of fluid, is proportional to the $5/3$ power of the diameter $D$ of the eddies in turbulent flow.**

This is a very interesting correlation that experiments have verified with high precision in its original form for the intermediate size range of the energy cascade. The video also mentions that this finding comes from Russian mathematician Andrey Kolmogorov, who recognized the mechanics of the energy cascade and arrived at this law from a few simple assumptions. He is, of course, best known for his achievements in probability theory and statistics. 

He realized that solving the fundamental governing equations in such a complex case is hopeless, since it has not even been mathematically proven whether well-behaved solutions—which do not blow up to infinity at certain points—even exist. Thus, he employed statistical assumptions and simple dimensional analysis to reach his conclusions. His line of reasoning is highly intriguing, so we will attempt to explain it to interested readers in the next lesson!

> **Warning!** The creators of the video did not fully follow Kolmogorov's original line of reasoning. Due to a mathematical error during simplification, the featured assertion in the video became inaccurate. The error affects the exponent: both its sign and its magnitude are incorrect for the specified geometric size. For the quantity $E(D)$ according to real spatial dimensions, the correct exponent is actually -1/3, meaning the statement from the video correctly reads:
>
> $$E(D) \propto D^{-\frac{1}{3}}$$

We will discuss this, computational fluid dynamics simulations, and the magical power of dimensional analysis in detail in the next, advanced-level lesson.