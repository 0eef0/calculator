var equation = "";
var mockEquation = "";

var awaitingButton = false;

function pressButton(input){
    if(!awaitingButton){
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
    }else{
        exp2(input);
        awaitingButton = false;
    }
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
    //mockEquation = temp;
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
function exp(){
    mockEquation += ".e+0";
    document.getElementById("answer").innerHTML = mockEquation;
    awaitingButton = true;
}
function exp2(input){
    var temp = "";
    var arr = equation.split(' ');

    console.log(arr);

    arr[arr.length-1] = (arr[arr.length-1] * Math.pow(10,input));

    console.log(arr);
    for(i = 0; i < arr.length; i++){
        temp += arr[i].toString();
    }
    console.log(temp);
    equation = temp;
    mockEquation = temp;
    document.getElementById("answer").innerHTML = mockEquation;
}