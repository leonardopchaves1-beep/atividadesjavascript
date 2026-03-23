// Exercício 1
 
const sabores = ["abacaxi", "maracujá", "morango", "chocolate"];
console.log("Sabores dísponiveis:", sabores);
 
sabores.push("limão");
console.log("novo sabor", sabores);
 
sabores.pop();
console.log("removedo último sabor", sabores);
 
console.log("total de sabores", sabores.length);
 
 
// Exercício 2
 
const clientes = ["João", "Maria", "Ana", "Carlos", "Pedro"];
 
 
console.log("Primeiro cliente:", clientes[0]);
 
console.log("Último cliente:", clientes[clientes.length - 1]);
 
const temCarlos = clientes.includes("Carlos");
console.log("Carlos está na lista?", temCarlos);
 
const posicaoMaria = clientes.indexOf("Maria");
console.log("Posição de Maria:", posicaoMaria);
 
// Exercicio 3
 
const pedidosManha = [6, 7, 8];
const pedidosTarde = [13, 14, 15];
 
const todosPedidos = pedidosManha.concat(pedidosTarde);
 
console.log("pedidos da manhã", pedidosManha);
console.log("pedidos da tarde", pedidosTarde);
console.log("todos os pedidos", todosPedidos);

//Questão 4 ateliê e costura

let servicos = ["barra de calça", "ajuste de vestido", "reforma de camisa"];

console.log(servicos[0]); // barra de calça
console.log(servicos[1]); // ajuste de vestido
console.log(servicos[2]); // reforma de camisa

servicos.shift();

console.log(servicos);

//Questão 5 agenda de pacientes psicologo

// Array com os pacientes
let pacientes = ["Ana", "Carlos", "Mariana", "João"];

// Laço for para mostrar os pacientes
for (let i = 0; i < pacientes.length; i++) {
    console.log("Índice " + i + ": " + pacientes[i]);
}

//Questão 6 Horários de atendimento da clinica

// matriz agenda (2 dias com 3 horários cada)
let agenda = [
    ["08:00", "10:00", "14:00"], // Dia 1
    ["09:00", "11:00", "15:00"]  // Dia 2
];

// dois loops para percorrer a matriz
for (let i = 0; i < agenda.length; i++) {
    for (let j = 0; j < agenda[i].length; j++) {
        console.log("[" + i + "][" + j + "] = " + agenda[i][j]);
    }
}