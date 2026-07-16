// Enable 3D tilt
VanillaTilt.init(document.querySelectorAll(".threeD-card"), {
  max: 20,
  speed: 500,
  glare: true,
  "max-glare": 0.2,
});

// GSAP Entry Animation
// gsap.registerPlugin(ScrollTrigger);

// gsap.from(".threeD-card", {
//   opacity: 0,
//   y: 40,
//   duration: 1.1,
//   stagger: 0.1,
//   ease: "power3.out",
//   scrollTrigger: {
//     trigger: ".skills-grid",
//     start: "top 85%",
//   }
// });