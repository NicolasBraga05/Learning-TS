"use strict";
// 1 - type guard
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else if (typeof a === "number" && typeof b === "string") {
        console.log(a + parseFloat(b));
    }
    else if (typeof a === "string" && typeof b === "number") {
        console.log(parseFloat(a) + b);
    }
    else {
        console.log('Impossivel fazer essa soma!');
    }
}
sum("4", "5");
sum(1, 2);
sum(1, "2");
// 2 - checando se o valor existe
function operations(arr, operation) {
    if (operation) {
        if (operation === "sum") {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        }
        else if (operation === "multiply") {
            const multiply = arr.reduce((i, total) => i * total);
            console.log(multiply);
        }
    }
    else {
        console.log('Por favor defina uma operação!');
    }
}
operations([1, 2, 3], "sum");
operations([1, 2, 4], "multiply");
// 3 - instanceof
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class SuperUser extends User {
    constructor(name, age) {
        super(name, age);
    }
}
const nicolas = new User("Nicolas", 19);
const daniela = new SuperUser("Daniela", 18);
console.log(nicolas);
console.log(daniela);
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`Boas vindas ${user.name} parabens pelos os seus ${user.age} anos de idade`);
    }
    else if (user instanceof User) {
        console.log(`Oi ${user.name}`);
    }
    else {
        console.log('Tente novamente!');
    }
}
userGreeting(nicolas);
userGreeting(daniela);
// 4 - operador in
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const perola = new Dog("Perola");
const xara = new Dog("Xara", "Pastor Alemão capa preta");
function showDogDetails(dog) {
    if ('breed' in dog) {
        console.log(`O cachorro ${dog.name} é da raça ${dog.breed}`);
    }
    else {
        console.log(`O cachorro nao tem raça`);
    }
}
showDogDetails(xara);
showDogDetails(perola);
// DESAFIO DA SEÇÃO
function review(nota) {
    if (nota === undefined) {
        console.log('Nao houve feedback do cliente!');
        return;
    }
    if (nota > 0 && nota <= 2) {
        console.log('Desculpe-nos, vamos melhorar para atender suas expectativas, obrigado pelo feedback!');
    }
    else if (nota > 2 && nota <= 5) {
        console.log('Agradecemos a sua satisfação com os serviços, obrigado pelo feedback!');
    }
    else {
        console.log('Nota invalida, por favor avalie entre 1 e 5!');
    }
}
;
review();
review(2);
review(5);
review(1000000);
