// انیمیشن تایپ رایتر برای عنوان
gsap.to(".animated-title", {
    opacity: 1,
    y: 0,
    duration: 3,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".about-section",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});

// انیمیشن برای متن‌ها
gsap.to(".animated-text", {
    opacity: 1,
    x: 0,
    duration: 3,
    stagger: 0.5,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".about-section",
        start: "top 70%",
        toggleActions: "play none none reverse"
    }
});

// انیمیشن برای دکمه
gsap.to(".animated-btn", {
    opacity: 1,
    scale: 1,
    duration: 3,
    delay: 1.2,
    ease: "elastic.out(1, 0.5)",
    scrollTrigger: {
        trigger: ".about-section",
        start: "top 70%",
        toggleActions: "play none none reverse"
    }
});