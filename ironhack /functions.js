/*
function calculator(num1,num2,operator) {

    if(!num1 || !num2 || !operator){
        console.log("Please provide both numbers and operator!");
        return;
    }
    if (typeof num1 !== "number" || typeof num2 !== "number"){
        console.log("Please add a numeric value only!");
        return;
    }
    if(operator !== "+" && operator != "-" && operator != "*" && operator != "/"){
        console.log("Please provide valid operator.");
        return;
    }
    let result;
    if(operator === "+"){
        result = num1 + num2;
    }
    else if (operator === "-"){
        result = num1 + num2;
    }
    else if (operator === "*"){
        result = num1 * num2;
    }
    else if (operator === "/"){
        result = num1 / num2;
    }

    let response = ` ${num1} ${operator} ${num2} is ${result} `
    return response;
}

console.log(calculator(2,5,"/")); 
/*_________________________________*/


function myFunction() {
  setInterval(function(){var things = ['Rock', 'Paper', 'Scissor'];
var thing = things[Math.floor(Math.random()*things.length)];
document.getElementById(''); }, 3000);
}



const prices = [523, 7.99, 9.99, 20.99, -21];

let ironCities = ["Amsterdam", "Barcelona", "Berlin", "Lisbon",
 "Madrid", "Mexico City", "Miami", "Paris", "Sao Paulo" ];
let randomString = "voilalestring";

function welcome(name) {
    alert(`Hello ${name}!`);
}
function printNumbers(x) {
    for (let i = 0; i <= x; i++) {
        console.log(i);   
    }
}
function printEvens(someArr) {
    for (let i = 0; i < someArr.length; i++) {
        if (i % 2 === 0){ console.log(someArr[i]);;
        }
    }
}
let res = 0;
function summer(someArr2) {
    for (let i = 0; i < someArr2.length; i++) {   
        res += someArr2[i];   
        ; 
    }
    console.log(res + "$")
}
let letrasSeparadas = [];
function stringToLetters(someA) {
    for (let i = 0; i < someA.length; i++) {
        letrasSeparadas.push(someA.charAt(i));       
    }
    console.log(letrasSeparadas);
}
function unoHastaCien() {
    for (let i = 0; i < 101; i++) {
            if(i % 7 === 0){
            continue;}
            else if (i % 4 === 0 && i % 6 === 0){
            console.log("ironhack");
        }   else if(i % 4 === 0){
            console.log("hey");
        }   else if (i % 6 === 0){
            console.log("there");
        
        }   else if (i === 29){
            console.log(i + "!");
        }
    }
}