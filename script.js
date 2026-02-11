// Reveal Animation
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// Progress Bar Animation
const skillSection = document.querySelector(".skills");
const progressBars = document.querySelectorAll(".fill");

let started = false;

window.addEventListener("scroll", () => {
    const sectionTop = skillSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100 && !started) {
        progressBars.forEach(bar => {
            bar.style.width = bar.getAttribute("data-width");
        });
        started = true;
    }
});


// Typing Animation
const typingElement = document.querySelector(".typing");
const words = ["Digital Solutions", "Mobile Apps", "Web Applications"];
let wordIndex = 0;
let charIndex = 0;

function typeEffect() {
    if (charIndex < words[wordIndex].length) {
        typingElement.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 80);
    } else {
        setTimeout(eraseEffect, 1000);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typingElement.textContent =
            words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 200);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);
