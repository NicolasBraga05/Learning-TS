"use strict";
// 1 - generics
function showData(arg) {
    return `O dado é: ${arg}`;
}
console.log(showData(5));
console.log(showData('testando generics'));
// 2 - constraints em generics
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
function showName(name) {
    return `O nome é ${name}`;
}
const nameUm = 'Nicolas';
const nameDois = 1;
const nameTres = true;
console.log(showName(nameUm));
console.log(showName(nameDois));
const myObj = { name: 'Porta', cor: 'Preta' };
const otherObj = { name: 'Carro', rodas: 4, engine: 1.0 };
console.log(showProductName(myObj));
console.log(showProductName(otherObj));
const myCar = { name: 'Fusca', wheels: 4, engine: 1.0, color: 'Branca' };
const myPen = { name: 'Caneta BIC', wheels: false, engine: false, color: 'Azul' };
console.log(myCar);
console.log(myPen);
// 4 - type parameters
function getSomeKey(obj, key) {
    return `A chave ${String(key)} esta presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
    hd: '2TB',
    ram: '32GB',
};
console.log(getSomeKey(server, 'ram'));
// 5 - keyof Type Operator
