
let mouseCursor = document.querySelector('.cursor');
let navLinks = document.querySelectorAll('.nav__links li');

window.addEventListener( 'mousemove', cursor);


function cursor( e){
    // console.log( e.screenX);
    mouseCursor.style.top = `${e.pageY}px`;
    mouseCursor.style.left = `${e.pageX}px`;
}

navLinks.forEach( link => {
    link.addEventListener('mouseleave', ()=> {
        mouseCursor.classList.remove('link_grow');
    });
    link.addEventListener('mouseover', ()=> {
        mouseCursor.classList.add('link_grow');
    });
});