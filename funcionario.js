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
    this.cargo = cargo; // this.salario = salario; transformar em uma variaval para que ele não esteja mais exporta alteração(segurança) tornar atributo provado.
    let _salario = salario;

    //getter e setter
    this.getSalario = function(){
        return _salario;
    }

    this.setSalario = function(valor){ 
       if (typeof valor === 'number'){
        _salario = valor

       }
    } 

    this.aumento = function(){
        const novoSalario = _salario * 1.1; //multiplica 1 salario por ele mesmo + 0.1 = 10% pretendido.
        _salario = novoSalario;
    }

    Pessoa.call(this, nome);//call CHAMA Pessoa construtora para dentro da funçao funcionário.
}

function Estagiario(nome){
    Funcionario.call(this, nome, "Estagiario", 2000);

    this.aumento = function(){
        const novoSalario = this.getSalario() * 1.07;
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

funcionario1.aumento();
console.log(funcionario1.getSalario())

funcionario2.aumento();
console.log(funcionario2.getSalario())

funcionario3.aumento();
console.log(funcionario3.getSalario())