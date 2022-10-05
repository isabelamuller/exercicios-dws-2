// exercicios de ternario

// Substitua o uso do if padrão por ternários.
const cargo = "Programador";
let retorno = "";

// resposta
retorno = "Programador" ? retorno = "Ótima profissão" : retorno = "Aprenda a programar"
console.log(retorno)


// Reescreva a função checarMaiorDeIdade utilizando Arrow Function e Ternário para determinar o o retorno da função

// resposta
const podeDirigir = ((idade) =>
    idade >= 18 ? true : false)
console.log(podeDirigir())



//  Você esta ajudando o governo a saber quanto de imposto deve cobrar de cada pessoa. Crie uma Arrow Function, 
// que recebe o parâmetro: renda , e caso a renda seja maior ou igual a 10.000, você deve cobrar 10% do valor da renda. 
// Caso não, cobre apenas 8%. Utilize o ternário para definir quanto de imposto sera cobrado.

// resposta
let renda = 9000;
const imposto = (renda) => renda >= 10000 ? renda * 0.1 : renda * 0.08
console.log(renda)
