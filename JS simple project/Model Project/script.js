let modalContent = () => {
    const mdlLogo = document.querySelector('.modal__logo');
    const mdlContent = document.querySelector('.modal__content');
    const mdlButton = document.querySelector('.modal__open');
    const mdlBurger = document.querySelector('.modal__burger');
    const mdlEle  = document.querySelectorAll('.container .mdlEle');

    mdlButton.addEventListener('click', toggleEle);

    mdlBurger.addEventListener('click', toggleEle);
    
    function toggleEle(){
        mdlEle.forEach( ( ele) =>{
            ele.classList.toggle('dispear');
        });
        mdlBurger.classList.toggle('toggle');
        mdlContent.classList.toggle('show__content');
    }

};


modalContent();