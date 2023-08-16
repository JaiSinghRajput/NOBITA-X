document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

document.getElementById("mobile-menu").addEventListener("click", function () {
    document.getElementById("nav-list").classList.toggle("active");
});
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        startTypingAnimation();
    }, 1000);
});

function startTypingAnimation() {
    const welcomeText = document.getElementById("welcome-text");
    welcomeText.style.animation = "none";
    void welcomeText.offsetWidth;
    welcomeText.style.animation = null;
}
function smoothScroll(target, duration) {
    const targetElement = document.querySelector(target);
    const targetPosition = targetElement.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const startTime = performance.now();

    function animateScroll(currentTime) {
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutCubic(progress);
        window.scrollTo(0, startPosition + targetPosition * ease);

        if (timeElapsed < duration) {
            requestAnimationFrame(animateScroll);
        }
    }

    function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    requestAnimationFrame(animateScroll);
}
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const target = link.getAttribute('href');
        smoothScroll(target, 800); // Adjust duration as needed
    });
});



