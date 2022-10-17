//exercicio de map, filter, reduce
const empresas = [
    { nome: 'Samsung', valorDeMercado: 50, CEO: 'Kim Hyun Suk', anoDeCriacao: 1938 },
    { nome: 'Microsoft', valorDeMercado: 415, CEO: 'Satya Nadella', anoDeCriacao: 1975 },
    { nome: 'Intel', valorDeMercado: 117, CEO: 'Brian Krzanich', anoDeCriacao: 1968 },
    { nome: 'Facebook', valorDeMercado: 383, CEO: 'Mark Zuckerberg', anoDeCriacao: 2004 },
    { nome: 'Spotify', valorDeMercado: 30, CEO: 'Daniel Ek', anoDeCriacao: 2006 },
    { nome: 'Apple', valorDeMercado: 845, CEO: 'Tim Cook', anoDeCriacao: 1976 }
];

// 1. Empresas criadas depois dos anos 90
const empresasAnos90 = empresas.filter((ano) => ano.anoDeCriacao >= 1990)
console.log(empresasAnos90)

// // 2. O nome de cada empresa e de seu CEO
const nomeCeo = empresas.map((empresa) => {
    return { nome: empresa.nome, CEO: empresa.CEO }
})
console.log(nomeCeo)

// 3. O valor de mercado de todas as empresas somadas
const valorTotal = empresas.reduce((total, valor) => {
    return total + valor.valorDeMercado
}, 0)
console.log(valorTotal)