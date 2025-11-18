// برای هر مهارت جداگانه
document.querySelectorAll('.skill-item').forEach((item, index) => {
    gsap.to(item, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: index * 0.1, // تاخیر برای هر آیتم
        scrollTrigger: {
            trigger: item,
            start: "top 90%",
            end: "top 50%",
            toggleActions: "play reverse play reverse"
        }
    });
});
// در فایل script.js
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item, {
            scale: 1.1,
            y: -10,
            duration: 0.3,
            ease: "power2.out",
            backgroundColor: "rgba(255,255,255,0.1)" // فقط موقع هاور
        });
    });
    
    item.addEventListener('mouseleave', () => {
        gsap.to(item, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
            backgroundColor: "rgba(255,255,255,0)" // بازگشت به شفاف
        });
    });
});