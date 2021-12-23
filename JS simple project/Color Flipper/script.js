const colors = ['#FFFFFF', '#64C7F2', '#A8ECA7', '#a7eccb', '#a7eca9', '#b3a7ec'];
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const bgColor = document.querySelector('.container');
const textColor = document.querySelector('.color');
const notiColor = document.getElementById('container-noti');

const btnSimple = document.getElementById('simple');
const btnHex = document.getElementById('hex');

let currentColor = 0;
textColor.innerHTML = colors[currentColor];



// =================== AddEventListner to each button or anchor
btn.addEventListener('click', changeColor);

btnSimple.addEventListener('click', () => {
    localStorage.setItem('status', 'simple');
});

btnHex.addEventListener('click', () => {
    localStorage.setItem('status', 'hex');
});

function changeColor(e) {

    let status = localStorage.getItem('status');
    if ( status === null){
        notiColor.innerHTML = "Choose simple or hex";
    }

    else if ( status === 'simple'){ 
        currentColor = currentColor < colors.length-1 ? currentColor+=1 : 0;
        textColor.innerHTML = colors[currentColor];
        bgColor.style.backgroundColor = colors[currentColor];
    }

    else if ( status === 'hex'){
        currentColor = "#";
        for ( let i = 0; i< 6;i ++ ){
            currentColor += hex[ getRandomNumber(hex)].toString();
        }
        textColor.innerHTML = currentColor;
        bgColor.style.backgroundColor = currentColor;
    }
}

function getRandomNumber(ele){
    return Math.floor( Math.random()*ele.length);
}

window.onload( () => {
    localStorage.clear();
});

