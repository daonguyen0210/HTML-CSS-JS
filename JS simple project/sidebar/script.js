const sideBar = () => {
    let burger = document.querySelector('.sidebar__burger');
    let sidebar = document.querySelector('.sidebar');
    let sideLinks = document.querySelectorAll('.sidebar__link li');

    // alert('hel'); 
    burger.addEventListener('click', () => {
        burger.classList.toggle('toggle');
        
        sideLinks.forEach( (link, index) => {
            if ( link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `sideLinkMoveLeft .5s ease forwards ${index / 7 + .5}s`;
            }
        });
        if( burger.classList.contains('toggle')){
            sidebar.style.left = "0%";
        }
        else{
            sidebar.style.left = "-100%"
        }

    });
};

sideBar();