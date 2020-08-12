const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const allNavLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener("click", () => {
    // navbar animation
    navLinks.classList.toggle('nav-active');

    // navlinks animation
    allNavLinks.forEach((navLinkss, index) => {
        console.log(navLinkss.style.animation);
        if (navLinkss.style.animation) {
            navLinkss.style.animation = '';
        } else {
            navLinkss.style.animation = `fadeIn 0.5s ease-in-out forwards ${index/7 + 0.3}s`;
        }
    });

    // BurgerBtn Animation
    burger.classList.toggle('toggle');
});