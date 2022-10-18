import axios from 'axios';

// * 1. Fazer uma função que busque os repos de um usuário (utilizar axios) - API Github - https://docs.github.com/en/rest/reference/repos#list-repositories-for-a-user
//  * 2. Pegar apenas campos de interesse (os do desafio 1 + o que desejar)
//  * 3. Executar as funções que foram feitas no desafio 1 em cima dos dados produzidos em 2

//numero 1:

const request = async (user) => {
    const response = await axios.get(`https://api.github.com/users/${user}/repos`);
    return response.data;
}

//numero 2:

const campos = async () => {
    const getRequest = await request('isabelamuller');
    const getMapping = getRequest.map((value) => {
        const { id, name, url, created_at, updated_at, description, language } = value;
        return { id, name, url, created_at, updated_at, description, language };
    })
    return getMapping;
}

// numero 3:

// fazer o split de alguma info em duas arrays: 
const getAllLanguages = async () => {
    const getRequest = await campos();
    const allLanguages = getRequest.map((value) => {
        const { language } = value;
        return { language };
    })
    return allLanguages;
}
const splitLanguages = async () => {
    const getLanguagesRequest = await getAllLanguages();
    const splittingLanguages = getLanguagesRequest.reduce((acc, elem) => {
        acc[elem.language == "Java" ? "isJava" : "isNotJava"].push(elem);
        return acc;
    }, { isJava: [], isNotJava: [] })
    return splittingLanguages;
}

//concatenar as duas arrays:
const newArray = async () => {
    const getSplittingLanguages = await splitLanguages();
    const concatLanguages = getSplittingLanguages.isJava.concat(getSplittingLanguages.isNotJava)
    return concatLanguages;
}

// retornar o repo pelo id:
const findRepo = async (id) => {
    const getRequest = await campos();
    const foundRepo = getRequest.find(elem => elem.id === id);
    foundRepo ? console.log(foundRepo) : console.log('ID não encontrado');
}

// adicionar uma nova propriedade a um repositório "followers", que deve ser um número, toda vez que tentar adicionar a propriedade deve-se ou inicializá-la com 1 ou somar 1 ao valor existente
const findRepo2 = async (id) => {
    const getRequest = await campos();
    const foundRepo2 = getRequest.filter(elem => elem.id === id);
    const newItem = foundRepo2.map((element) => {
        return {
          ...element,
          followers: element?.followers ? element.followers + 1 : 1,
        };
      });
      return newItem
}
const teste = await findRepo2(471869519)
console.log(teste)


// Fazer o console.log de todos nomes de projetos que utilizam JavaScript
const jsProjects = async () => {
    const getRequest = await campos();
    const jsOnly = getRequest.filter(value => value.language === "JavaScript").map((value) => {
        const { name } = value;
        return { name }
    })
    return jsOnly;
}