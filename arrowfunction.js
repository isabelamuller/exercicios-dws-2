//arrow function exercicios

// Utilize o que foi aprendido neste capítulo e refatore a função imprimeProduto para utilizar arrow functions
let carrinho = [
    { nome: 'abacaxi', preco: '2.00' },
    { nome: 'detergente', preco: '2.50' },
    { nome: 'bolacha', preco: '3.80' }
]
// function imprimeProduto(nome, preco) {
//     console.log('Produto: ' + nome + ' | ' + 'Preço: ' + preco);
// }

// resposta:
const produto = carrinho.map((produtos) => 'Produto: ' + produtos.nome + ' | ' + 'Preço: ' + produtos.preco)
console.log(produto)

// Refatore o código a seguir para utilizar arrow functions:
let itens = ['abacaxi', 'banana', 'maçã', 'laranja', 'limão'];
itens.forEach(function (item) {
    // console.log(item);
})

// resposta:
const items = itens.forEach((item) => console.log(item))


// Utilize as arrow functions para deixar o código a seguir ainda menor.
let palavroes = [
    "Inconstitucionalíssimo",
    "Otorrinolaringologista",
    "Pneumoultramicroscopicossilicovulcanoconiose",
    "Oftalmotorrinolaringologista"
];

// resposta:
let tamanhos = palavroes.map((palavrao) => {
    return palavrao.length
});
console.log(tamanhos);
