class Ingredientes{
    constructor(descricao){
        this.descricao = descricao;
    }
}

class Comida{
    constructor(nome, tipo, peso){
        this.nome = nome != undefined ? nome: "Comida Genérica";
        this.tipo = tipo != undefined ? tipo: "Tipo Genérico";
        this.peso = peso != undefined ? peso: 0;
    }
}

class Salgada{
    constructor(nome, peso){
        this.nome = nome != undefined ? nome: "Comida Genérica";
        this.tipo = "Salgada";
        this.peso = peso != undefined ? peso: 0;
    }
}

class Doce{
    constructor(nome, peso){
        this.nome = nome != undefined ? nome: "Comida Genérica";
        this.tipo = "Doce";
        this.peso = peso != undefined ? peso: 0;
    }
}

class ComidaBuilder{
    constructor(nome, tipo, peso){
        if(nome != undefined && tipo != undefined && peso != undefined){
            this.comida = new Comida(nome, tipo, peso);
            if(tipo == "Salgada")
                this.comida = new Salgada(nome, peso);
            else if(tipo == "Doce")
                this.comida = new Doce(nome, peso);
            else
                this.comida = new Comida(nome, tipo, peso);
        } else if (nome != undefined && tipo != undefined){
            if(tipo == "Salgada")
                this.comida = new Salgada(nome);
            else if(tipo == "Doce")
                this.comida = new Doce(nome);
            else
                this.comida = new Comida(nome, tipo);
        } else if (nome != undefined){
            this.comida = new Comida(nome);
        } else{
            this.comida = new Comida();
        }
}

    addIngrediente(Ingredientes) {
        if (this.comida.ingrediente == undefined){
            this.comida.ingrediente = [];
        }
        this.comida.ingrediente.push(Ingredientes);
        return this;
}
  build(){
        return this.comida;
    }
}

const comidas = [
    new ComidaBuilder(),
    new ComidaBuilder("Bolo", "Salgada", 500),
    new ComidaBuilder("Feijão"),
    new ComidaBuilder("Brigadeiro", "Doce"),
    new ComidaBuilder("Bolo", "Doce", 500),
    new ComidaBuilder("Pudim", "Doce", 300),
    new ComidaBuilder("Lasanha", "Salgada", 200),
    new ComidaBuilder("Pizza", "Salgada", 100),
    new ComidaBuilder("Macarrão", "Salgada", 200),
    new ComidaBuilder("Salada", "Salgada", 100),
    new ComidaBuilder("Sorvete", "Doce"),
    new ComidaBuilder()
]

comidas[1].addIngrediente(new Ingredientes("Sal"));
comidas[1].addIngrediente(new Ingredientes("Alho"));
comidas[3].addIngrediente(new Ingredientes("Leite Condensado"));
comidas[3].addIngrediente(new Ingredientes("Chocolate em pó do Padre"));

console.log(comidas);
console.table(comidas);
console.log(JSON.stringify(comidas, null, 2));