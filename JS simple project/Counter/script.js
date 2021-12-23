const showNumber = document.getElementById('counter-number');
const incre = document.getElementById('incre');
const reset = document.getElementById('reset');
const decre = document.getElementById('decre');
const btns = document.querySelectorAll('.btn');

let currentNumber = parseInt(showNumber.innerText);

// incre.addEventListener('click', (e)=>{
//     currentNumber++;
//     showNumber.innerText = currentNumber;
// });

// reset.addEventListener('click', ()=> {
//     currentNumber = 0;
//     showNumber.innerText = currentNumber;
// });

// decre.addEventListener('click', ()=>{
//     currentNumber--;
//     showNumber.innerText = currentNumber;
// });

btns.forEach(function(btn){
    btn.addEventListener('click', (e)=>{
        if ( e.target.classList.contains('incre')){
            currentNumber++;
        }
        else if( e.target.classList.contains('reset')){
            currentNumber = 0;
        }
        else{
            currentNumber--;
        }
        showNumber.innerText = currentNumber;
    });
});