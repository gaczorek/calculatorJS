function addition(a, b) {
    return a+b
}

function subtraction(a,b) {
    return a-b
}

function multiplication(a,b) {
    return a*b
}

function division(a,b){
    return a/b
}
      
function remainder(a,b){
    return a % b
}

function exponentiation(a,b){
    return a ** b
}

let numA = +prompt("Type a number", "");
let operator = prompt("choose math operator", "");

        while(operator=="+" || operator=="-" || operator =="*" || operator=="/" || operator=="%" || operator=="**"){

            switch(operator){ 

            case '+': 
            numB = +prompt("type a second number", "");
            numA = addition(numA, numB);
            operator = prompt(`it's ${numA} - what's next? choose operator`)
            break;

            case "-": 
            numB = +prompt("type a second number", "");
            numA = subtraction(numA, numB);
            operator = prompt(`it's ${numA} - what's next? choose operator`)
            break;

            case "*": 
            numB = +prompt("type a second number", "");
            numA = multiplication(numA,numB);
            operator = prompt(`it's ${numA} - what's next? choose operator`)
            break;

            case "/": 
            numB = +prompt("type a second number", "");
            if(numB==0){ numB = alert("nie dzielimy przez 0! podaj nową liczbę")} else {
            numA =  division(numA, numB);
            operator = prompt(`it's ${numA} - what's next? choose operator`)}
           break;

            case "%": 
            numB = +prompt("type a second number", "");
            numA = remainder(numA, numB);
           operator = prompt(`it's ${numA} - what's next? choose operator`)
            break;

            case "**": 
            numB = +prompt("type a second number", "");
            numA = exponentiation(numA, numB);
            operator = prompt(`it's ${numA} - what's next? choose operator`)
            break;

        
          }
        }
    
      