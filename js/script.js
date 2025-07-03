
// Inisialisasi Animation Click
AOS.init();

// Efek animasi tambahan dengan GSAP (opsional)
gsap.from("h2, h5", {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.2
});

AOS.init();

gsap.from("h4, h6", {
    duration: 1,
    y: 40,
    opacity: 0,
    stagger: 0.2
});


