// Inisialisasi AOS (Animasi Scroll)
AOS.init();

// Contoh animasi GSAP (opsional)
gsap.from("h2", {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.3
});
