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
        return `O salário de ${this.nome} é ${_salario}`;
    }

    this.setSalario = function(valor){ //if tratativa para não atribuir o valor de uma string na variavel salario.//retorna função de get salario
       if (typeof valor === 'number'){
        _salario = valor

       }
    } //vou atribuir o salario que vamos recuperar no ()

    // funcionario1.atribuirSalario(7000);

    //this//funcionario, this chama(call) Pessoa construtora para dentro da funçao funcionário.
    Pessoa.call(this, nome);
}

const funcionario1 = new Funcionario ("Maria", "UX", 5000 );
const pessoa = new Pessoa ("Gian")

funcionario1.dizOi();
funcionario1.dizCargo();
//funcionario1.bataba();
//pessoa.dizCargo(); // diz cargo da errado pq ele não existe da

funcionario1.setSalario('mil');

console.log(funcionario1.getSalario())