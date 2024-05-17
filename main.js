const carroDoJoao = {
    modelo: 'Fiesta',
    fabricante: 'Ford',
    anoModelo: 2020,
    anoFabricacao: 2019,
    acelerar: function(){
        console.log("vrum");
    }
}

const carroDaMaria = {
    modelo: 'Ka',
    fabricante: 'Ford',
    anoModelo: 2021,
    anoFabricacao: 2020,
    acelerar: function(){
        console.log("vrum");
    }
}

//segunda forma de criar um objeto no JavaScript

function Carro(modelo, fabricante, anoModelo, anoFabricacao){ //acelerar é 1 metodo compartilhado entre tds os carros, não precisa passar como argumento.
    this.modelo = modelo;//faz referência ao próprio carro.
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function(){
        console.log = ("acelerar");
        }
}

const carroDoJoao2 = new Carro("Fiesta", "Ford", 2020, 2019); // Se chamar só com o carro não tem retorno.
const carroDaMaria2 = new Carro("Ka", "Ford", 2021, 2020); //Carro é um construtor, o carroDaMaria2 é uma instancia de Carro

console.log(carroDoJoao2);
console.log(carroDaMaria2);

const nome = "gean"
const idade = 30
const ehMaiorDeIdade = true
const conhecimentos = ["html", "css", "javascript"]

const pessoa ={
    nome: nome,
    idade: idade,
    ehMaiorDeIdade: ehMaiorDeIdade,
    conhecimentos: conhecimentos,
}

// console.log( typeof nome);
// console.log( typeof idade);
// console.log( typeof ehMaiorDeIdade);
// console.log( typeof conhecimentos);
// console.log( typeof pessoa); //object
// console.log(typeof carroDaMaria);

// //Carro é um construtor, o carroDaMaria2 é uma instancia de Carro //instanceof usado para verificação de tipos de instancia
// console.log(carroDaMaria2 instanceof Carro)// carroDaMaria2 é uma instancia de Carro? Verdadeiro.
// console.log(conhecimentos instanceof Carro) //conhecimentos é uma instancia de Carro? Falso.

//Aula4 -Como acessar os atributos dentro de um objeto.

// notação ponto console.log(pessoa.nome) Acesso a constante pessoa . atributo nome
//console.log(pessoa[nome]) [nome] sem '' é variavel e o atributo nome aqui é uma string.



function exibeAtributo (nomeAtributo){
    console.log(pessoa[nomeAtributo])
}

exibeAtributo('nome');

pessoa.sobrenome = undefined;

Object.freeze(pessoa);

pessoa.nome = 'joao';

if (pessoa['sobrenome']){
    console.log("a pessoa tem um sobrenome")
}

if('sobrenome' in pessoa){
    console.log('tem sobtrenome');
}

console.log(pessoa.nome)
console.log(pessoa['nome'])

console.log(Object.keys(pessoa).length);//utiliza pra saber q quantidade de propriedades que existem em um objeto(.lenght).
console.log(Object.values(pessoa));

//Aula5 - Aplique herança