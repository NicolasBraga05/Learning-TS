"use strict";
function showProdutoDetails(produto) {
    console.log(`O nome do produto é ${produto.name} e o preço é R$${produto.price}`);
    if (produto.eDisponivel) {
        console.log(`O produto ${produto.name} esta disponivel`);
    }
}
const camisa = {
    name: 'Camisa',
    price: 19,
    eDisponivel: true
};
showProdutoDetails(camisa);
showProdutoDetails({ name: 'Tenis', price: 19, eDisponivel: true });
function showUserDetails(user) {
    if (user.document) {
        console.log(`Os dados do usuario são:
                            Nome ${user.name}  
                            Idade ${user.age} 
                            Email ${user.email} 
                            Telefone ${user.phone} 
                            RG ou CPF ${user.document}`);
    }
    console.log(`Os dados do usuario são: 
                        Nome ${user.name} 
                        Idade ${user.age} 
                        Email ${user.email} 
                        Telefone ${user.phone}`);
}
const user = {
    name: 'Nicolas',
    age: 19,
    email: 'devnicolasbraga@gmail.com',
    phone: 11970139674,
};
showUserDetails(user);
const gol = {
    brand: 'VW',
    wheels: 4
};
console.log(gol);
let coords = {
    x: 10
};
const nicolas = {
    name: 'Nicolas',
    age: 19
};
const saitama = {
    name: 'Saintama',
    age: 25,
    superpoderes: ['super força', 'invencibilidade']
};
function showHuman(humam) {
    console.log(humam);
}
showHuman(saitama);
showHuman(nicolas);
const rambo = {
    name: 'Rambo',
    type: 'pistol',
    caliber: 9.9
};
const daniela = {
    name: 'daniela'
};
function showHumanWithGun(human) {
    if (human.type && human.caliber) {
        console.log(`O/A ${human.name} tem uma arma do tipo ${human.type} calibre ${human.caliber}`);
    }
    else {
        console.log(`O/A ${human.name} nao tem uma arma`);
    }
}
showHumanWithGun(daniela);
showHumanWithGun(rambo);
// 7 - ReadonlyArray
let myArray = ['Maça', 'Laranja', 'Banana'];
myArray.forEach((item) => {
    console.log(item);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
const myNumberArray = [1, 2, 3, 4, 5];
// 8 - tuplas com readonly
function showNumbers(numbers) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
