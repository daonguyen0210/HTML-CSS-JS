let scrIpt = document.querySelector('.previour_operand');
let scrOpt = document.querySelector('.current_operand');
let buttonsInput = document.querySelectorAll('button');
let value = 0;



let Calc = function () {
    

    for( let btn of buttonsInput){
        btn.addEventListener( 'click', (e) => {
            let keyIpt = e.currentTarget.textContent;

            
            if( keyIpt === 'AC'){
                clearScreen();
            }
            
            else if( keyIpt === 'DEL'){
                dltCharacter();
            }
            
            else if( keyIpt === '='){
                value = findResult();
                scrOpt.textConent = value;
            }
            
            else{
                displayIpt( keyIpt);
            }
            
            
        });
    }
};

Calc();

/* callback Functions*/

    function displayIpt( keyIpt){
        let operator = ['/', '*', '-', '+'];
        let wrongOperator = ['//', '**','/*','*/','-/','-*','+/','+*'];
        let collapseOperator = ['++', '--', '+-', '-+'];

        keyIpt = keyIpt.toString();

        let textCurrent = scrIpt.textContent;

        // alert( textCurrent.length);

        if( textCurrent.length === 0 ){
            if( keyIpt ==='-'){
                scrIpt.textContent += keyIpt;
                return ;
            }

            if( keyIpt === '.'){
                scrIpt.textContent += '0'+keyIpt;
                return ;
            }

            if( operator.indexOf( keyIpt) >= 0){ 
                scrIpt.textContent += keyIpt;
                scrOpt.textContent = 'Invalid';
                setTimeout(() => {
                    scrOpt.textContent = "0";
                    scrIpt.textContent = "";
                },700);
                return ;
            }
            textCurrent += keyIpt.toString();
            scrIpt.textContent = textCurrent;
            return ;
        }
        
        if( textCurrent.length > 0){
            let lastChar = textCurrent.substr( textCurrent.length -1);
            let temp;
            
            temp = operator.indexOf( lastChar);
            if(  temp >= 0 && keyIpt === '.'){
                keyIpt = ( '0' + keyIpt);
                scrIpt.textContent += keyIpt;
                return ;
            }
            
            
            temp = wrongOperator.indexOf( lastChar + keyIpt);
            if(  temp >= 0){
                scrIpt.textContent += keyIpt;
                scrOpt.textContent = 'Err';
                return ;
            }

            temp = collapseOperator.indexOf( lastChar + keyIpt);
            if( temp >= 0){
                scrIpt.textContent += keyIpt;
                setTimeout(() => {
                    scrIpt.textContent = scrIpt.textContent.slice(0, -2);
                    scrIpt.textContent += temp <= 1 ? '+' : '-';
                }, 550);
                return ;
            }

            scrIpt.textContent += keyIpt;
            return ;



        }
    }


    function clearScreen() {
        console.log(' line 29');
        scrIpt.textContent = "";
        scrOpt.textContent = "0";
        return ;
    }

    function dltCharacter(){

        let wrongOperator = ['//', '**','/*','*/','-/','-*','+/','+*'];


        let textCurrent = scrIpt.textContent;
        textCurrent = textCurrent.slice( 0, -1);
        scrIpt.textContent = textCurrent;

        if( scrOpt.textContent !== "Err"){
            scrOpt.textContent = "0";
        }

        let statusErr = false;
        for( let opr of wrongOperator){
            if( textCurrent.indexOf( opr) >= 0){
                statusErr = true;
            }
        }

        if( statusErr){
            scrOpt.textContent = "Err";
        }else {
            scrOpt.textContent = "0";
        }
        return ;
    }

    function findResult() {
        let operator = ["+", "-", "*", "/"];
        let textCurrent = scrIpt.textContent;
        let newText="";
        let dumb;

        for( let i= 0; i< textCurrent.length; i++){
            dumb = operator.indexOf( textCurrent[i]);
            if( dumb < 0){
                newText += textCurrent[i];
            }else {
                newText += (" " + textCurrent[i] + " ");
            }
        }
        newText = newText.split(" ");


        newText = priorityCalc( newText, "*");
        newText = priorityCalc( newText, "/");
        newText = normalCalc( newText);

        scrOpt.textContent = newText;
        return ;
        
    }

    function priorityCalc(text, opr){
        console.log( text);
        console.log( opr);

        while( text.indexOf(opr) !== -1){

            let dumb = text.indexOf( opr);
            let a = parseFloat( text[dumb - 1]);
            let b = parseFloat( text[dumb + 1]);
            let c = opr == "*" ? a*b : a/b;
            text[dumb -1] = c.toString();
            text.splice( dumb, 2);
            console.log( text);
        }   
        return text;
    }

    function normalCalc(text) {
        while( text.length > 1){
            let a = parseFloat(text[0]);
            let b = parseFloat(text[2]);
            let c = text[1] == "+" ? a+b : a-b;
            text[0] = c.toString();
            text.splice(1, 2);
        }
        return text;
    }