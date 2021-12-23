const expQues = () => {
    const addExp = document.querySelectorAll('.bx-message-alt-add');

    const minusExp = document.querySelectorAll('.bx-message-alt-minus');

    addExp.forEach((add) => {
        add.addEventListener('click', procesRq);
    });

    minusExp.forEach((minus) => {
        minus.addEventListener('click', procesRq);
    });

    function procesRq(e){
        // e.currentTarget.parentElement.nextElementSibling.classList.toggle('show__exp');
        if( e.currentTarget.classList.contains( 'bx-message-alt-add')){
            e.currentTarget.parentElement.nextElementSibling.classList.toggle('show__exp');
        }
        else{
            e.currentTarget.parentElement.classList.toggle('show__exp');
        }
    }
};


expQues();