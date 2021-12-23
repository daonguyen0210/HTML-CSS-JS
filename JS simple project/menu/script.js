const chooseNav = () => {
    let allBtn = document.getElementById('nav-all');
    let bfBtn = document.getElementById('nav-breakfast');
    let lcBtn = document.getElementById('nav-lunch');
    let dnBtn = document.getElementById('nav-dinner');

    // let breakfast = document.querySelectorAll('.container .bf');
    // let lunch = document.querySelectorAll('.container .lc');
    // let dinner = document.querySelectorAll('.container .dn');
    let all = document.querySelectorAll('.container .m__food');

    allBtn.addEventListener('click', toggleFunc);
    bfBtn.addEventListener('click', toggleFunc);
    lcBtn.addEventListener('click', toggleFunc);
    dnBtn.addEventListener('click', toggleFunc);

    function toggleFunc(e){
        let meal = e.currentTarget.classList[1];
        all.forEach( ( ele) => {

            ele.classList.add('hide__menu');

            if( meal == 'all'){
                if( ele.classList.contains('hide__menu')){
                    ele.classList.toggle('hide__menu');
                }
            }else{
                if( ele.classList.contains(meal)){
                    ele.classList.toggle('hide__menu');
                }
            }
        
        });
    }
};

chooseNav();