const navSlide = () => {
    
};
const burger = document.querySelector('.nav__burger');
const nav = document.querySelector('.nav__link');
const navLink = document.querySelectorAll('.nav__link li');

// toogle nav
burger.addEventListener('click', () => {
    nav.classList.toggle('nav__active');

    // animate link
    navLink.forEach( (link, index) => {
        if( link.style.animation){
            link.style.animation = '';

        }
        else {
            link.style.animation = `navLinkFade .5s ease forwards ${ index / 7 + 1}s`;
        }
    });

    //burger animation
    burger.classList.toggle('toggle');
});


// navSlide(); 
