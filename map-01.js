/* =======================
*** Map Conceito***
=========================*/

// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers + '\n \n')

// const doubleNumbers = numbers.map( num => num * 2 )
// console.log(doubleNumbers)

/* =======================
*** Map Prática 1 ***
=========================*/
/** 
const produtoPreco = [3.20, 4.50, 5.89, 7.25]
console.log('valor de custo do produto é ')
console.log(produtoPreco + '\n')

const margemLucro = .30
const produtoLucro = produtoPreco.map( item => (item * margemLucro).toFixed(2))

console.log('valor de lucro do produto é')
console.log(produtoLucro)

*/

/* =======================
*** Map Prática 2***
=========================*/

const produtoPreco = [
    { nome: 'arroz cristal', preco: 37.50 },
    { nome: 'arroz pampa', preco: 29.50 }
]
console.log('valor de custo do produto é ')
console.log(produtoPreco + '\n')

const margemLucro = .30
const produtoLucro = produtoPreco.map( item => ( item['preco'] * margemLucro).toFixed(2) )

console.log('valor de lucro do produto é')
console.log(produtoLucro)
