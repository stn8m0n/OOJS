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
    this.salario = salario;

    //this//funcionario, this chama(call) Pessoa construtora para dentro da funçao funcionário.
    Pessoa.call(this, nome);
}

const funcionario1 = new Funcionario ("Maria", "UX", 5000 );
const pessoa = new Pessoa ("Gian")

funcionario1.dizOi();
funcionario1.dizCargo();
//funcionario1.bataba();
//pessoa.dizCargo(); // diz cargo da errado pq ele não existe da

//aula6