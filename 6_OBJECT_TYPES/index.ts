// 1 - tipo de objeto para função com interface
interface Produto {
    name: string
    price: number
    eDisponivel: boolean
}

function showProdutoDetails(produto: Produto) {

    console.log(`O nome do produto é ${produto.name} e o preço é R$${produto.price}`)
    if(produto.eDisponivel) {
        console.log(`O produto ${produto.name} esta disponivel`)
    }
}

const camisa: Produto =  {
    name: 'Camisa',
    price: 19,
    eDisponivel: true
}
showProdutoDetails(camisa)
showProdutoDetails({name: 'Tenis', price: 19, eDisponivel: true})


// 2 - propriedades opcionais em interfaces

interface User {
    name: string
    age: number
    email: string
    phone: number
    document?: string
}

function showUserDetails(user: User) {
    if(user.document) {
        console.log(`Os dados do usuario são:
                            Nome ${user.name}  
                            Idade ${user.age} 
                            Email ${user.email} 
                            Telefone ${user.phone} 
                            RG ou CPF ${user.document}`)
    }
    console.log(`Os dados do usuario são: 
                        Nome ${user.name} 
                        Idade ${user.age} 
                        Email ${user.email} 
                        Telefone ${user.phone}`)
}

const user: User = {
    name: 'Nicolas',
    age: 19,
    email: 'devnicolasbraga@gmail.com',
    phone: 11970139674,
}

showUserDetails(user)


// 3 - propriedades readonly
interface Car {
    brand: string
    readonly wheels: number
}

const gol: Car = {
    brand: 'VW',
    wheels: 4
}

console.log(gol)


// 4 - index signature
interface CoordObject {
    [index: string] : number


}

let coords : CoordObject = {
    x: 10
}


// 5 - extending types
interface Human {
    name: string
    age: number
}

interface SuperHuman extends Human {
    superpoderes: string[]
}

const nicolas: Human = {
    name: 'Nicolas',
    age: 19
}

const saitama: SuperHuman = {
    name: 'Saintama',
    age: 25,
    superpoderes: ['super força', 'invencibilidade']
}


function showHuman(humam: Human){
    console.log(humam)
}
showHuman(saitama)
showHuman(nicolas)


// 6 - intersection types
interface Character { 
    name: string
}

interface Gun {
    type?: string
    caliber?: number
}

type HumanWithGun = Character & Gun


const rambo: HumanWithGun = {
    name: 'Rambo',
    type: 'pistol',
    caliber: 9.9
}

const daniela: HumanWithGun = {
    name: 'daniela'
}

function showHumanWithGun(human: HumanWithGun) {
    if(human.type && human.caliber){
        console.log(`O/A ${human.name} tem uma arma do tipo ${human.type} calibre ${human.caliber}`)
    } else {
        console.log(`O/A ${human.name} nao tem uma arma`)
    }

}
showHumanWithGun(daniela)
showHumanWithGun(rambo)


// 7 - ReadonlyArray
let myArray: ReadonlyArray<string> = ['Maça', 'Laranja', 'Banana']

myArray.forEach((item) => {
    console.log(item)
})

myArray = myArray.map((item) => {
    return `Fruta: ${item}`
})

console.log(myArray)


// 8 - tuplas
type fiveNumbers = [number, number, number, number, number]

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5]


// 8 - tuplas com readonly
function showNumbers(numbers: readonly [number, number]) {
    console.log(numbers[0])
    console.log(numbers[1])

}

showNumbers([1, 2])
