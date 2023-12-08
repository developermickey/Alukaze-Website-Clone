gsap.from("#nav", {
  y: "-100%",
  duration: 1,
});

gsap.from(".left", {
  y: "-100%",
  duration: 1,
  delay: 0.3,
});
gsap.from(".center", {
  y: "-100%",
  duration: 1,
  delay: 0.6,
});
gsap.from(".right", {
  y: "-100%",
  duration: 1,
  delay: 0.9,
});

gsap.from(".head1", {
  x: "-100%",
  duration: 1,
  delay: 0.3,
});
gsap.from(".head2", {
  x: "-150%",
  duration: 1,
  delay: 0.6,
});
gsap.from(".head3", {
  x: "-100%",
  duration: 1,
  delay: 0.9,
});

gsap.from(".heading1", {
  x: "100%",
  duration: 2,
  delay: 1,
});
gsap.from(".heading2", {
  x: "200%",
  duration: 2,
  delay: 1.3,
});
gsap.from(".heading3", {
  x: "100%",
  duration: 2,
  delay: 1.7,
});
gsap.from(".sign", {
  x: "100%",
  duration: 2,
  delay: 2,
});

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "100px",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    start: "top 10%",
    end: "top 11%",
    scrub: 1,
  },
});


gsap.to("#page2>h1", {
  opacity: 1,
  duration: 0.5,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    start: "top 10%",
    end: "top 50%",
    scrub: 0.3,
  },
});