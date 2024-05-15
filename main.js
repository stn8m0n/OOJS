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
const carroDaMaria2 = new Carro("Ka", "Ford", 2021, 2020);

console.log(carroDoJoao2);
console.log(carroDaMaria2);