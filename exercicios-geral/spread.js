// exercicios spread operator

// Junte as duas listas a seguir em uma única constante chamada `moradoresBrasil` utilizando o operado  … 
// Adicione mais pessoas a lista `moradoresBrasil`

const moradoresDeRecife = ["Mateus", "João", "Maria", "José"];
const moradoresDePOA = ["Joana", "Isabela", "Guilherme", "Enzo"];

// resposta
const moradoresBrasil = [...moradoresDeRecife, ...moradoresDePOA]
console.log(moradoresBrasil)

// Voce tá realizando um sistema para uma empresa de apartamentos. E existem dois tipos de apartamento, os padrões e a 
// cobertura. Crie uma const chamada `apartamentoCobertura` que recebe todos as informações do **apartamentoPadrao** e adicione as seguinte propiedades.
// - temPiscina: true
// - temChurrasqueira: true
// Também sobrescreva o número de **quartos**, e **metrosQuadrados**  já que na cobertura tem mais.

const apartamentoPadrao = {
	quartos: 2,
	metrosQuadrados: 50,
	temVaranda: true,
}

// Utilize o spreed para copiar os valores do apartamentoPadrao

const apartamentoCobertura = {...apartamentoPadrao, temPiscina: true, temChurrasqueira: true, quartos: 5, metrosQuadrados: 130}
console.log(apartamentoCobertura)