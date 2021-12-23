
const text = document.querySelector('.fancy');
const strText = text.textContent;
const splitText = strText.split('');
text.textContent = "";
for( let letter of splitText) {
    text.innerHTML += '<span>' + letter + '</span>';
}


let char = 0;
let timer = setInterval( onTick, 50);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;

    if( char === splitText.length){
        complete();
        return ;
    }

}

function complete(){
    clearInterval( timer);
}