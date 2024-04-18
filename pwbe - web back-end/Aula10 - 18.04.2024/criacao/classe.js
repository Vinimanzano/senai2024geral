// Patter Builder (Construtor)

/// Class Builder - Simples
class Arvore{
    especie;
    altura;
    idade;
}

// criando um objeto - Simples
const arvore = new Arvore();
console.log(arvore);

// Criar várias arvores - Simples
const arvore1 = new Arvore();
arvore1.especie = 'pau brasil'
arvore1.altura = 10;
arvore1.idade = 5;

const arvore2 = new Arvore();
arvore2.especie = 'pau brasil'
arvore2.altura = 30;
arvore2.idade = 50;

const arvore3 = new Arvore();
arvore3.especie = 'pau brasil'
arvore3.altura = 1000;
arvore3.idade = 92;

console.log(arvore1);
console.log(arvore2);
console.log(arvore3);

// Class Complexa - com método construtor
class Argo{
    constructor(ano) {
        this.marca = 'Argo';
        this.modelo = 'Fiat'
        this.ano = ano ==  undefined ? 2024 : ano;
    }
}

// Criação de 10 objetos complexos (os pares passamos o ano e os impares serao criados com o ano padrão)
const argos = []

for(i = 0; i < 10; i++) {
    if(i % 2 == 0){
        const argo = new Argo(2010+i);
        argos.push(argo);
    }else{
        const argo = new Argo();
        argos.push(argo);
    }  
}

console.log(argos);
