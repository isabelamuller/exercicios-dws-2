//  * 1. Entender o JSON – na pasta do one drive (repos.json)
//  * 2. Separar o array em 2 ou mais arrays de acordo com um critério que queira (sugestão, "language" ou "updated_at", nesse ultimo caso, determinar uma data de divisão, por exemplo até 1/2/3 ano(s) atrás)
//  * 3. Juntar de volta os arrays separados em um novo array
//  * 4. Buscar um repositório por id e mostrar suas informações / caso de não encontrar, mostrar mensagem se não encontrar
//  * 5. adicionar uma nova propriedade a um repositório "followers", que deve ser um número, toda vez que tentar adicionar a propriedade deve-se ou inicializá-la com 1 ou somar 1 ao valor existente
//  * 6. Fazer o console.log de todos nomes de projetos que utilizam JavaScript

const data = require('./repos.json');

// numero 2:
const getAllLanguages = data.map((value) => {
    return { language: value.language }
})

const splitArray = getAllLanguages.reduce((acc, elem) => {
    acc[elem.language == "Java" ? 'isJava' : 'isNotJava'].push(elem)
    return acc
}, { isJava: [], isNotJava: [] })

//numero 3:
const newArray = splitArray.isJava.concat(splitArray.isNotJava)


// numero 4:
const findRepo = (id) => {
    const foundRepo = data.find(elem => elem.id === id)
    foundRepo ? console.log(foundRepo) : console.log("Id não encontrado")
}


//numero 5: 
const findRepo2 = (id) => {
    const foundRepo2 = data.filter(elem => elem.id === id)
    const newItem = foundRepo2.map((element) => {
        return {
          ...element,
          followers: element?.followers ? element.followers + 1 : 1,
        };
      });
      return newItem
}
console.log(findRepo2(172751304))

// numero 6:
const jsProjects = data.filter(value => value.language === "JavaScript").map((value) => {
    return { name: value.name }
})