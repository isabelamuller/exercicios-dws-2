// exercicios de destructuring

// Em um sistema de e-commerce, cada produto possui uma representação em formato JSON, com os dados do 
// produto e um array de fotos. Na listagem, você precisa exibir somente a primeira foto do produto, 
// então basta pegar o primeiro valor; os demais não são necessários.

const produto = {
    id: 2000,
    nome: 'Sabão em pó',
    preco: 12.29,
    fotos: [
        'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/f43bec8b2f13e0c5565b681d2d46432f.jpg',
        'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/c2c737e796f33585c3e9da8e7af982a5.jpg',
        'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/0673a9868ac3ac7a075c3b75bcaa62a4.jpg'
    ]
};


//resposta:
const [primeiraFoto] = produto.fotos


// Em um sistema de e-commerce, cada produto possui uma representação em formato JSON, com os dados do produto e um objeto com as fotos, separadas 
// em fotoPrimaria, fotoSecundaria e fotoAdicional. Na listagem, você precisa exibir o nome do produto e a fotoPrincipal. Os demais dados não são necessários.

const produto1 = {
    id: 2000,
    nome: 'Sabão em pó',
    preco: 12.29,
    fotos: {
        fotoPrincipal: 'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/f43bec8b2f13e0c5565b681d2d46432f.jpg',
        fotoSecundaria: 'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/c2c737e796f33585c3e9da8e7af982a5.jpg',
        fotoAdicional: 'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/0673a9868ac3ac7a075c3b75bcaa62a4.jpg'
    }
};

//resposta: NAO CONSEGUI FZR
const { principalFoto: fotos, nomeProduto: nome} = produto1



// Em uma página de comparação de produtos no e-commerce, você precisa extrair a foto principal de cada produto. Mas putz, se você 
// fizer isso do jeito clássico, vai dar erro, pois serão duas variáveis com o mesmo nome! Sendo assim, o objetivo é extrair os 
// valores, porém já renomeando as variáveis para poder usar.

const primeiroProduto = {
    nome: 'Sabão em pó OMO',
    fotos: {
        fotoPrincipal: 'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/f43bec8b2f13e0c5565b681d2d46432f.jpg'
    }
};

const segundoProduto = {
    nome: 'Sabão líquido ARIEL',
    fotos: {
        fotoPrincipal: 'https://a-static.mlcdn.com.br/1500x1500/sabao-liquido-ariel-hipoalergenico-suave-e-gentil-concentrado-2l/magazineluiza/225520500/62cf97beee48b9453835dcc55e6f1a5d.jpg'
    }
};

//resposta: NAO CONSEGUI FZR
const {fotos: tdsFts } = {primeiroProduto, segundoProduto}