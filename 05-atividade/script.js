/*Exercicio 1- Uma empreendedora precisa produzir 10 bolos de pote.
Crie um programa utilizando o laço for para mostrar no console cada bolo produzido, podem utilizar concatenação.
 */
 
for(let i = 1; i <= 10; i++){
    console.log("Bolo de pote " + i + " produzido.");
}
 
/*Uma confeiteira possui os seguintes sabores
Chocolate
Morango
Baunilha
Red Velvet
Utiliza forEach para exibir todos os sabores disponveis
 */
 
let sabores = ["Chocolate", "Morango", "Baunilha", "Red Velvet"];
sabores.forEach(function(sabor){
console.log(sabor)
});

//Questão 3

let servico = 0;
let valorServico = 200;

for (let i = 1; i <= 5; i++) {
    servico += valorServico;
}

console.log("Faturamento total do dia: R$ " + servico);

//Questão 4

let pacientes = ["Ana", "Carlos", "Juliana", "Pedro"];

pacientes.forEach(function(paciente) {
    console.log("Paciente atendido: " + paciente);
});

