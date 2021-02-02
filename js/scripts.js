var input1 = "";
var input2 = "";
var operation = "";

function doMath(){
    if(operation != ""){
        var answer = 0;
        input1 = Number(input1);
        input2 = Number(input2);
        switch(true){
            case operation == '+':
                answer = (input1 + input2);
                break;
            case operation == '-':
                answer = (input1 - input2);
                break;
            case operation == '*':
                answer = (input1 * input2);
                break;
            case operation == '/':
                answer = (input1 / input2);
                break;
            case operation == '%':
                answer = (input1 % input2);
                break;
            case operation == 'power':
                answer = (Math.pow(input1, input2));
        }
        document.getElementById("answer").innerHTML = answer;
        input2 = "";
        input1 = answer.toString();
        operation = "";
    }
}
function inputNumber(num){
    if(operation == ""){
        input1 += num;
        document.getElementById("answer").innerHTML = input1;
    }else{
        input2 += num;
        document.getElementById("answer").innerHTML = input2;
    }
}
function inputOperation(sign){
    switch(true){
        case sign == '+':
            operation = '+';
            break;
        case sign == '-':
            operation = '-';
            break;
        case sign == '*':
            operation = '*';
            break;
        case sign == '/':
            operation = '/';
            break;
        case sign == 'mod':
            operation = '%';
            break;
        case sign == 'power':
            operation = 'power';
            break;
    }
    document.getElementById("answer").innerHTML = sign;
}

function clearCalc(){
    input1 = "";
    input2 = "";
    operation = "";
    document.getElementById("answer").innerHTML = "";
}

function square(){
    document.getElementById("answer").innerHTML = Math.pow(input1, 2);
    input1 = Math.pow(input1,2);
}
function sqrt(){
    document.getElementById("answer").innerHTML = Math.pow(input1, 0.5);
    input1 = Math.pow(input1,0.5); 
}
function absoluteVal(){
    document.getElementById("answer").innerHTML = Math.abs(input1);
    input1 = Math.abs(input1); 
}
function switchSign(){
    document.getElementById("answer").innerHTML = (input1 * -1);
    input1 = (input1 * -1);
}
function reciprocal(){
    document.getElementById("answer").innerHTML = (1 / input1);
    input1 = (1 / input1);
}
function factorial(){
    var factorial = 1;
    for(i = 1; i <= input1; i++){
        factorial *= i;
    }
    document.getElementById("answer").innerHTML = factorial;
    input1 = factorial;
}