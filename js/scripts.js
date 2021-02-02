var input1 = "";
var input2 = "";
var operation = "";

/*
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
*/

var equation = "";
var mockEquation = "";
function pressButton(input){
    switch(true){
        case input == " % ":
            mockEquation += " mod ";
            break;
        case input == "Math.PI":
            mockEquation += "π";
            break;
        default:
            mockEquation += input;
    }
    equation += input;
    document.getElementById("answer").innerHTML = mockEquation;
}
function doMath(){
    equation = eval(equation).toString();
    mockEquation = equation;
    document.getElementById("answer").innerHTML = mockEquation;
}
function clearCalc(){
    equation = "";
    mockEquation = '';
    document.getElementById("answer").innerHTML = "0";
}
function deletion(){
    if(equation.substring(equation.length-1) == " "){
        equation = equation.substring(0,equation.length-3);
        mockEquation = mockEquation.substring(0,mockEquation.length-3);
    }else{
        equation = equation.substring(0,equation.length-1);
        mockEquation = mockEquation.substring(0,mockEquation.length-1);
    }
    document.getElementById("answer").innerHTML = mockEquation;
}
function square(){
    var temp = "";
    var arr = equation.split(' ');

    arr[arr.length-1] = Math.pow(arr[arr.length-1],2).toString();
    for(i = 0; i < arr.length; i++){
        temp += arr[i].toString();
    }
    equation = temp;
    mockEquation = temp;
    document.getElementById("answer").innerHTML = mockEquation;
}
function sqrt(){
    var temp = "";
    var arr = equation.split(' ');

    arr[arr.length-1] = Math.pow(arr[arr.length-1],0.5).toString();
    for(i = 0; i < arr.length; i++){
        temp += arr[i].toString();
    }
    equation = temp;
    mockEquation = temp;
    document.getElementById("answer").innerHTML = mockEquation;
}
function reciprocal(){
    var temp = "";
    var arr = equation.split(' ');

    arr[arr.length-1] = (1 / arr[arr.length-1]).toString();
    for(i = 0; i < arr.length; i++){
        temp += arr[i].toString();
    }
    equation = temp;
    mockEquation = temp;
    document.getElementById("answer").innerHTML = mockEquation;
}
function absoluteVal(){
    var temp = "";
    var arr = equation.split(' ');

    arr[arr.length-1] = (Math.abs(arr[arr.length-1])).toString();
    for(i = 0; i < arr.length; i++){
        temp += arr[i].toString();
    }
    equation = temp;
    mockEquation = temp;
    document.getElementById("answer").innerHTML = mockEquation;
}
function changeSign(){
    var temp = "";
    var arr = equation.split(' ');

    arr[arr.length-1] = (arr[arr.length-1] * -1).toString();
    for(i = 0; i < arr.length; i++){
        temp += arr[i].toString();
    }
    equation = temp;
    mockEquation = temp;
    document.getElementById("answer").innerHTML = mockEquation;
}
function factorial(){
    var temp = "";
    var arr = equation.split(' ');
    var factorial = 1;
    for(i = 1; i <= arr[arr.length-1]; i++){
        factorial *= i;
    }
    arr[arr.length-1] = factorial;

    for(i = 0; i < arr.length; i++){
        temp += arr[i].toString();
    }
    equation = temp;
    mockEquation = temp;
    document.getElementById("answer").innerHTML = mockEquation;
}