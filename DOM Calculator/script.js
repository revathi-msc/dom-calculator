const container=document.createElement("div");
container.class="center";//whole container
const calhead=document.createElement("h2");
calhead.id="Domcalculator";
calhead.innerText="DOM calculator";// calculator heading
document.body.append(container);//to add in body

const calculator=document.createElement("div");// calculator container
calculator.id="calculator";

container.append(calhead);//to add inside container center
container.append(calculator);//to add calculator inside container

//result container
var input = document.createElement('input');
input.type = "text";
input.placeholder = "0";
input.setAttribute("id","output");
calculator.append(input);
console.log(input);

const keyboard=document.createElement("div");
keyboard.id="keyboard";
const operator1=document.createElement("button");//operator key Clear
//var operator1Text=document.createTextNode("AC");
//operator1.class="operator";
//operator1.id="clear";
operator1.setAttribute('id','clear');
operator1.setAttribute('class','operator') ;
operator1.setAttribute('onclick',"clr()");
operator1.addEventListener('onclick',runEvent);

operator1.innerText="AC";
keyboard.append(operator1);//to add operator1 in keyboard

const operator2=document.createElement("button");
operator2.setAttribute('id','delete');
operator2.setAttribute('class','operator') ;
operator2.setAttribute('onclick',"del()");
operator2.addEventListener('onclick',runEvent);
//operator2.id="backspace";
operator2.innerText="DEL";
keyboard.append(operator2);//to add operator2 in keyboard


const operator3=document.createElement("button");
operator3.setAttribute('id','%');
operator3.setAttribute('class','operator') ;
operator3.setAttribute('onclick',"display('%')");
operator3.addEventListener('onclick',runEvent);
//operator3.class="operator";
//operator3.id="%";
operator3.innerText="%";
keyboard.append(operator3);//to add operator3 in keyboard

const operator4=document.createElement("button");
operator4.setAttribute('id','/');
operator4.setAttribute('class','operator') ;
operator4.setAttribute('onclick',"display('/')");
operator4.addEventListener('onclick',runEvent);
//operator4.class="operator";
//operator4.id="/";
operator4.innerHTML=`&#247`;//hexacode to add symbol
keyboard.append(operator4);//to add operator4 in keyboard

const number7=document.createElement("button");
number7.setAttribute('id','7');
number7.setAttribute('class','number') ;
number7.setAttribute('onclick',"display('7')");
number7.addEventListener('onclick',runEvent);
//number7.class="number";
//number7.id="7";
number7.innerText="7";
keyboard.append(number7);//to add number7 in keyboard


const number8=document.createElement("button");
number8.setAttribute('id','8');
number8.setAttribute('class','number') ;
number8.setAttribute('onclick',"display('8')");
number8.addEventListener('onclick',runEvent);
//number8.class="number";
//number8.id="8";
number8.innerText="8";
keyboard.append(number8);//to add number8 in keyboard


const number9=document.createElement("button");
number9.setAttribute('id','9');
number9.setAttribute('class','number') ;
number9.setAttribute('onclick',"display('9')");
number9.addEventListener('onclick',runEvent);
//number9.class="number";
//number9.id="9";
number9.innerText="9";
keyboard.append(number9);//to add number9 in keyboard

const operator5=document.createElement("button");
operator5.setAttribute('id','*');
operator5.setAttribute('class','number') ;
operator5.setAttribute('onclick',"display('*')");
operator5.addEventListener('onclick',runEvent);
//operator5.class="operator";
//operator5.id="*";
operator5.innerText="*";
keyboard.append(operator5);//to add operator5"*" in keyboard



const number4=document.createElement("button");
number4.setAttribute('id','4');
number4.setAttribute('class','number') ;
number4.setAttribute('onclick',"display('4')");
number4.addEventListener('onclick',runEvent);
//number4.class="number";
//number4.id="4";
number4.innerText="4";
keyboard.append(number4);//to add number4 in keyboard

const number5=document.createElement("button");
number5.setAttribute('id','5');
number5.setAttribute('class','number') ;
number5.setAttribute('onclick',"display('5')");
number5.addEventListener('onclick',runEvent);
//number5.class="number";
//number5.id="5";
number5.innerText="5";
keyboard.append(number5);//to add number9 in keyboard

const number6=document.createElement("button");
number6.setAttribute('id','6');
number6.setAttribute('class','number') ;
number6.setAttribute('onclick',"display('6')");
number6.addEventListener('onclick',runEvent);
//number6.class="number";
//number6.id="6";
number6.innerText="6";
keyboard.append(number6);//to add number6 in keyboard


const operator6=document.createElement("button");
operator6.setAttribute('id','-');
operator6.setAttribute('class','operator') ;
operator6.setAttribute('onclick',"display('-')");
operator6.addEventListener('onclick',runEvent);
//operator6.class="operator";
//operator6.id="-";
operator6.innerText="-";
keyboard.append(operator6);//to add operator6"-" in keyboard

const number1=document.createElement("button");
number1.setAttribute('id','1');
number1.setAttribute('class','number') ;
number1.setAttribute('onclick',"display('1')");
number1.addEventListener('onclick',runEvent);
//number1.class="number";
//number1.id="1";
number1.innerText="1";
keyboard.append(number1);//to add number1 in keyboard

const number2=document.createElement("button");
number2.setAttribute('id','2');
number2.setAttribute('class','number') ;
number2.setAttribute('onclick',"display('2')");
number2.addEventListener('onclick',runEvent);
//number2.class="number";
//number2.id="2";
number2.innerText="2";
keyboard.append(number2);//to add number2 in keyboard

const number3=document.createElement("button");
number3.setAttribute('id','3');
number3.setAttribute('class','number');
number3.setAttribute('onclick',"display('3')");
number3.addEventListener('onclick',runEvent);
//number3.class="number";
//number3.id="3";
number3.innerText="3";
keyboard.append(number3);//to add number6 in keyboard


const operator7=document.createElement("button");
operator7.setAttribute('id','+');
operator7.setAttribute('class','operator') ;
operator7.setAttribute('onclick',"display('+')");
operator7.addEventListener('onclick',runEvent);
//operator7.class="operator";
//operator7.id="+";
operator7.innerText="+";
keyboard.append(operator7);//to add operator7"+" in keyboard

const empty1=document.createElement("button");
empty1.setAttribute('id','empty');
empty1.setAttribute('class','empty') ;
//empty1.class="empty";
//empty1.id="empty";
empty1.innerText="";
keyboard.append(empty1);//to add empty"" in keyboard

const number0=document.createElement("button");
number0.setAttribute('id','0');
number0.setAttribute('class','number') ;
number0.setAttribute('onclick',"display('0')");
number0.addEventListener('onclick',runEvent);
//number0.class="number";
//number0.id="0";
number0.innerText="0";
keyboard.append(number0);//to add number0 in keyboard

const empty2=document.createElement("button");
empty2.setAttribute('id','empty');
empty2.setAttribute('class','empty') ;
//empty2.class="empty";
//empty2.id="empty2";
empty2.innerText="";
keyboard.append(empty2);//to add empty"" in keyboard

const operator8=document.createElement("button");
operator8.setAttribute('id','=');
operator8.setAttribute('class','operator') ;
operator8.setAttribute('onclick',"calculate()");
operator8.addEventListener('onclick',runEvent);
//operator8.class="operator";
//operator8.id="=";
operator8.innerText="=";
keyboard.append(operator8);//to add operator6"-" in keyboard
calculator.append(keyboard);



function runEvent(e){
    console.log(onclick);
}

let output = document.getElementById('output');
// console.log(outputScreen);

function display(num){
    output.value += num;
}

function calculate(){
    try{
        output.value = eval(output.value);
    }
    catch{
     alert("Only numbers are allowed");
    }
}

function clr(){
    output.value ="";
}

function del(){
    output.value = output.value.slice(0,-1);
}

