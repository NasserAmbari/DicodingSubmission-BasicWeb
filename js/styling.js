/**
 * 
 * Toggle Navbar
 */

const iconOpen = document.querySelector(".icon-links");
const iconClose = document.querySelector(".res-nav-icon-links");
const resNavLinks = document.querySelector(".container-res-nav");

iconOpen.addEventListener('click', () => {
    resNavLinks.classList.add('active');
})

iconClose.addEventListener('click', () => {
    resNavLinks.classList.remove('active');
})

/**
 * 
 * Navbar Scroll
 */

const navbar = document.querySelectorAll(".nav-links li");
const resNavbar = document.querySelectorAll(".container-res-links li");
const mainSection = document.querySelectorAll("main > section");

let scrollIt = (target) => {
    window.scrollTo({
        top: target,
        left: 0,
        behavior: 'smooth'
    });
}

navbar.forEach((elm, idx) => {
    elm.addEventListener('click', () => {
        scrollIt(mainSection[idx].offsetTop - 60);
    })
});

resNavbar.forEach((elm, idx) => {
    elm.addEventListener('click', () => {
        resNavLinks.classList.remove('active');
        scrollIt(mainSection[idx].offsetTop - 60);
    })
});

// window.onscroll = function () {
//     console.log(
//         'top: ' + (window.pageYOffset || document.documentElement.scrollTop) + ' ' +
//         'left: ' + (window.pageXOffset || document.documentElement.scrollLeft)
//     );
// }

/**
 * 
 * Toogle Scroll Up
 */
const scrollUp = document.querySelector('.scroll-up');

scrollUp.addEventListener('click', () => {
    scrollIt(0);
});

window.onscroll = () => {
    if (window.pageYOffset > 400) {
        scrollUp.classList.add('active');
    }
    else{
        scrollUp.classList.remove('active');
    }
}