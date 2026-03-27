//Questão 1
// 

class Psicologo {
  constructor(nome, valorSessao) {
    this.nome = nome;
    this.valorSessao = valorSessao;
  }

  calcularFaturamento(qtdSessoes) {
    return this.valorSessao * qtdSessoes;
  }
}

const psicologo1 = new Psicologo("Dra. Maria", 150);

const faturamento = psicologo1.calcularFaturamento(30);
console.log(`O faturamento de ${psicologo1.nome} para 30 sessões é r$ ${faturamento}`);


// Desafio 02
// Herança

console.log("---Herança---");

class Servico {

    constructor(tipo, valor) {
        this.tipo = tipo;
        this.valor = valor;
    }

    descricao(texto) {
        return console.log(texto);
    }

}

class Costura extends Servico {

    constructor(tipo, valor, prazoDias) {
        super(tipo, valor);
        this.prazoDias = prazoDias;
    }

    entrega() {
        return this.prazoDias > 1 ? `${this.prazoDias} Dias` : `${this.prazoDias} Dia`;
    }

}

const servico = new Servico("Costura", 19.99);
const costura = new Costura("Ajuste", 29.90, 5);

console.log("Serviço");
console.log("Tipo: " + servico.tipo);
console.log("Valor: R$ " + servico.valor + "\n");

console.log("Costura");
console.log("Tipo: " + costura.tipo);
console.log("Valor: R$" + costura.valor);
console.log("Entrega: " + costura.entrega());