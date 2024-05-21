function Pessoa(nome){
    this.nome = nome;
    this.dizOi = function(){
        console.log(this.nome + " diz olá");
    }
    this.dizCargo = function(){
        console.log(this.cargo);
    }
    this.bataba = function(){
        console.log(this.salario);
    }

}

function Funcionario (nome, cargo, salario){
    this.cargo = cargo;
    // this.salario = salario; transformar em uma variaval para que ele não esteja mais exporta alteração(segurança) tornar atributo provado.
    let _salario = salario;

    //getter e setter
    this.getSalario = function(){ //função ou melhor método para acessar _salario //retorna função de get salario
        return _salario; //`O salário de ${this.nome} é ${_salario}`
    }

    this.setSalario = function(valor){ //if tratativa para não atribuir o valor de uma string na variavel salario.//retorna função de get salario
       if (typeof valor === 'number'){
        _salario = valor

       }
    } //vou atribuir o salario que vamos recuperar no ()

    this.aumento = function(){
        const novoSalario = _salario * 1.1; //multiplica 1 salario por ele mesmo + 0.1 = 10% pretendido.
        _salario = novoSalario;
    }

    // funcionario1.atribuirSalario(7000);
    //this//funcionario, this chama(call) Pessoa construtora para dentro da funçao funcionário.
    Pessoa.call(this, nome);
}

function Estagiario(nome){
    Funcionario.call(this, nome, "Estagiario", 2000);

    this.aumento = function(){
        const novoSalario = this.getSalario() * 1.07; //multiplica 1 salario por ele mesmo + 0.1 = 10% pretendido.
        this.setSalario(novoSalario);
    }
}

function Gerente (nome){
    Funcionario.call(this, nome, "Gerente", 10000);

    this.aumento = function(){
        const novoSalario = this.getSalario() * 1.15; //multiplica 1 salario por ele mesmo + 0.1 = 10% pretendido.
        this.setSalario(novoSalario);
    }
}

const funcionario1 = new Funcionario ("Maria", "UX", 5000 );
const funcionario2 = new Estagiario ("Pedro");
const funcionario3 = new Gerente ("Paula");
// const pessoa = new Pessoa ("Gian")

// funcionario1.dizOi();
// funcionario1.dizCargo();
// //funcionario1.bataba();
// //pessoa.dizCargo(); // diz cargo da errado pq ele não existe da

// funcionario1.setSalario('mil');

// console.log(funcionario1.getSalario())

funcionario1.aumento();
console.log(funcionario1.getSalario())

funcionario2.aumento();
console.log(funcionario2.getSalario())

funcionario3.aumento();
console.log(funcionario3.getSalario())

//aula07 Polimorfismo