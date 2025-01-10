// 1 - number
let x: number = 10;
console.log(x);
x = 16;
console.log(typeof x);
let y: number = 15.3432323;
console.log(y.toPrecision(3));

// 2 - string
const nome: string = "Nicolas";
console.log(nome.toUpperCase());
let nomeCompleto: string;
const ultimoNome: string = " Braga";
nomeCompleto = nome + ultimoNome;
console.log(nomeCompleto)
console.log(typeof nomeCompleto)

// 3 - boolean
let a: boolean = false;

console.log(a)
console.log(typeof a)

// 4 - inference e annotation

let ann: string = "Teste";
let inf = "Teste";

console.log(inf.length)


// DESAFIO DA SEÇÃO

let n: number = 10;

console.log(n + n.toString())


