var equation = "";
var mockEquation = "";

var awaitingButton = false;
var shifted = false;

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
    var power = 2;
    if(shifted){
        power = 3;
    }

    arr[arr.length-1] = Math.pow(arr[arr.length-1],power).toString();
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
    var root = 0.5;
    if(shifted){
        root = (1 / 3);
    }

    arr[arr.length-1] = Math.ceil(Math.pow(arr[arr.length-1],root)).toString();
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

    arr[arr.length-1] = (arr[arr.length-1] * Math.pow(10,input));

    for(i = 0; i < arr.length; i++){
        temp += arr[i].toString();
    }
    equation = temp;
    mockEquation = temp;
    document.getElementById("answer").innerHTML = mockEquation;
}
function scientificNotation(){
    var temp = "";
    var arr = equation.split(' ');
    var number = 10;
    if(shifted){
        number = 2;
    }
    arr[arr.length-1] = Math.pow(number, arr[arr.length-1]);

    for(i = 0; i < arr.length; i++){
        temp += arr[i].toString();
    }
    equation = temp;
    mockEquation = temp;
    document.getElementById("answer").innerHTML = mockEquation;
}

function shiftButton(){
    if(!shifted){
        document.getElementById("squareButton").innerHTML = "x<sup>3</sup>";
        document.getElementById("rootButton").innerHTML = "<sup>3</sup>√";
        document.getElementById("customRootButton").innerHTML = "<sup>y</sup>√x";
        document.getElementById("sciNotationButton").innerHTML = "2<sup>x</sup>";
        document.getElementById("logButton").innerHTML = "log<sub>y</sub>x";
        document.getElementById("naturalLogButton").innerHTML = "e<sup>x</sup>";
        shifted = true;
    }else{
        document.getElementById("squareButton").innerHTML = "x<sup>2</sup>";
        document.getElementById("rootButton").innerHTML = "√";
        document.getElementById("customRootButton").innerHTML = "x<sup>y</sup>";
        document.getElementById("sciNotationButton").innerHTML = "10<sup>x</sup>";
        document.getElementById("logButton").innerHTML = "log";
        document.getElementById("naturalLogButton").innerHTML = "ln";
        shifted = false;
    }
}