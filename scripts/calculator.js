function updateDisplay(newValue){
    // find the display box
    var d = document.getElementById('display');
    var validInput = false;
    switch (newValue){
        case '':
            d.innerHTML = '';
            validInput = false;
            break;
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            d.innerHTML += newValue;
            validInput = true;
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            if(validInput){
                validInput = false;
                d.innerHTML +=newValue;
           }
           
            break;
        case '=':
                d.innerHTML=eval(d.innerHTML);
            break;
    }

}