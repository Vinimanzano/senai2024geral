// Patter Builder (Construtor)

// Class Builder - Complexa
class Carro{
    constructor (modelo, marca, ano){
        this.marca = marca == undefined? '' : marca;
        this.modelo = modelo == undefined? '' : modelo;
        this.ano = ano == undefined? new Date().getFullYear() : ano;
    }
}

const carro = new Carro('Fusca', 'Fiat');
console.log(carro);

class Argo{
    constructor(ano) {
        this.marca = 'Argo';
        this.modelo = 'Fiat'
        this.ano = ano ==  undefined ? new Date().getFullYear() : ano;
    }
}

class Gol{
    constructor(ano) {
        this.marca = 'Gol';
        this.modelo = 'VW'
        this.ano = ano ==  undefined ? new Date().getFullYear() : ano;
    }
}

class Turbo{
    constructor(marca) {
        this.marca = marca == undefined ? 'Genérica' : marca;
        }
}

class CarroBuilder{
    constructor(modelo, marca, ano){
        if(modelo && marca && ano){
            if(modelo == 'Argo') {
                this.carro = new Argo(ano);
            } else if(modelo == 'Gol'){
                this.carro = new Gol(ano);
            } else {
                this.carro = new Carro(modelo, marca, ano);
            }
        }else if (modelo && marca){
            if(modelo == 'Argo'){
                this.carro = new Argo(ano);
            }
            else if(modelo == 'Gol'){
                this.carro = new Gol();
            } else {
                this.carro = new Carro(modelo)
            } 
        } else {
            this.carro = new Carro();
        }    
    }

 
    setTurbo(turbo){
    this.carro.turbo = new Turbo(turbo);
    return this;
}

    build() {
    return this.carro;
    }
}

const carro1 = new CarroBuilder('Fusca', 'Fiat', 2015);
const carro2 = new CarroBuilder('Gol', 'VW', 2015);
carro2.setTurbo('Garrett');
const carro3 = new CarroBuilder('Model X', 'Tesla', 2015);
const carro4 = new CarroBuilder();

const carros = [
    carro1.build(),
    carro2.build(),
    carro3.build(),
    carro4.build()
]

console.log(carros);