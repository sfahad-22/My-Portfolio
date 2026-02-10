// 1. Scroll Reveal Logic
const revealElements = () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealElements);
window.addEventListener('load', revealElements); // Initial check

// 2. Subtle Image Tilt Effect
const heroImage = document.querySelector('.hero-image img');
document.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 30;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 30;
    if(heroImage) heroImage.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
