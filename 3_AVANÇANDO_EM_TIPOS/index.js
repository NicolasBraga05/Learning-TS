"use strict";
// 1 - arrays
let numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers[2]);
numbers.pop();
console.log(numbers);
let nomes = ["Nicolas"];
//  2 - outra sintaxe array
let nums = [1, 2, 3];
nums.push(300);
// 3 - any
const arr1 = [1, true, "string", { nome: 'dani' }];
arr1.push(10);
// 4 - parametros tipados
function soma(a, b) {
    return a + b;
}
console.log(soma(4, 5));
// 5 - retorno de funcao
function greeting(name) {
    return `Olá ${name}`;
}
console.log(greeting("Nicolas"));
// 6 - funcoes anonimas
setTimeout(function () {
    const salario = 1000;
    // console.log(parseFloat(salario))
    // console.log(salario)
}, 2000);
// 7 - tipos de objeto
function passCordenadas(cord) {
    console.log(`X cordenadas + ${cord.x}`);
    console.log(`X cordenadas + ${cord.y}`);
}
const objCord = { x: 329, y: 546 };
passCordenadas(objCord);
// 8 - props opcionais
function showNumbers(a, b, c) {
    console.log('A, B e C = ' + a, b, c);
}
showNumbers(1, 2);
// 9 - validando argumento opcional
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `Ola, ${firstName} ${lastName}, saudações`;
    }
    return 'Ola ' + firstName;
}
advancedGreeting('Nicolas', 'Braga');
// 10 - union types
function unioFunction(a) {
    console.log(`O Union types aceita tanto quanto string ou number: ${a}`);
    console.log(`O Union types aceita tanto quanto string ou number: ${a}`);
}
unioFunction(10);
unioFunction("texto");
const arr2 = [1, "texto", false];
// 11 - avançando em union types
function showUserRole(role) {
    if (typeof role === 'boolean') {
        return "Usuario não aprovado!";
    }
    return `A função do usuario é ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole('admin'));
function showId(id) {
    console.log(`O ID é: ${id}`);
}
showId(1);
showId("2");
;
function showCords(obj) {
    console.log(`X: ${obj.x}, Y: ${obj.y} e Z: ${obj.z}`);
}
const cordObj = {
    x: 10,
    y: 50
};
showCords(cordObj);
;
;
const person = { name: 'Nicolas', age: 19 };
// 15 - literal types
let test;
test = "testando";
console.log(test);
function showDirection(direction) {
    console.log(`A direção é ${direction}`);
}
showDirection('left');
// 16 - non null assertion operators
const p = document.getElementById("some-p");
console.log(p?.innerText);
// 17 - bigint
let n;
n = 100000000n;
console.log(n);
console.log(typeof n);
// 18 - symbol
let irisOcular1;
let irisOcular2;
irisOcular1 = Symbol("1234fawcwdawwsd");
irisOcular2 = Symbol("1234fawcwdawwsd");
console.log(irisOcular1 == irisOcular2);
console.log(irisOcular1 === irisOcular2);
