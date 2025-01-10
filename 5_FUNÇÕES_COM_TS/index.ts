// 1 - funções que não retornam valor
function semRetorno():void {
    console.log('Essa função não tem retorno')
}

semRetorno()

// 2 - callback como argumento
function greeting(name: string):string {
    return `Ola ${name}`
}

function preGreeting(f: (name: string) => string, userName:string) {

    console.log('Preparando a função')

    const greet = f(userName)

    console.log(greet)

}
preGreeting(greeting, 'Nicolas')


// 3 - generic functions
function firstElemente<T>(arr: T[]): T {
    return arr[0]
}

console.log(firstElemente([1, 2, 3]))
console.log(firstElemente([true, false, true]))
console.log(firstElemente(["1", "2", "3"]))


function mergeObjects<U, T>(obj1: U, obj2: T) {
    return {
        ...obj1,
        ...obj2
    }
}

const newObject = mergeObjects({name: "Nicolas"}, {age: 30, job: "Developer"})

console.log(newObject)


// 4 - constraints
function biggestNumber<T extends number | string>(a: T, b: T): T {

    let biggest: T

    if (+a > +b) {
        biggest = a
    } else {
        biggest = b
    }

    return biggest
}

console.log(biggestNumber(5, 10))
console.log(biggestNumber("1", "10"))


// 5 - especificar tipo de argumento
function mergeArrays<T>(arr1: T[], arr2: T[]): T[] {

    return arr1.concat(arr2)
}

console.log(mergeArrays([1, 2, 3], [5, 6]))

console.log(mergeArrays<number | string>([1, 2, 3], ["1", "2", "3"]))


// 6 - parametros opcionais
function optParams(name: string, greet?: string): string {

    if(greet) {
        return `Ola ${greet} ${name}, tudo bem?`
    }

    return `Ola ${name} tudo bem?`
}
console.log(optParams('Nicolas', 'Doutor'))


// 7 - parametro default
function somaDefault(n: number, m = 10): number {
    return n + m
}

console.log(somaDefault(10, 20))


// 8 - tipo unknown
function fazAlgo(x: unknown) {
    if(Array.isArray(x)) {
        console.log(x[0])
    } else if (typeof x === "number") {
        console.log(`X é um numero ${x}`)
    }
}
fazAlgo([1, 2,3])


// 9 - tipo never
function showErrorMsg(msg: string): never {
    throw new Error(msg)
}

/* showErrorMsg('Algum erro') */


// 10 - Rest operator
function sumAll(...n: number[]) {
    return n.reduce((number, sum) => sum + number)
}

console.log(sumAll(1, 2, 3, 4, 5))


// 11 - Destructuring com parametro
function showProductDetails({name, price}: {name: string, price: number}): string {
    
    return `O nome do produto é ${name} e o preço é R$${price}`
    
}

const camisa = {name: 'Camisa', price: 20}

console.log(showProductDetails(camisa))

