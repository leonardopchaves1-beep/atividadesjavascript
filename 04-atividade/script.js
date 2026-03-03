//Bolo de Pote
 
/* Uma empreendedora vende bolos de potes nos sabores:
 
* 1 - Chocolate
* 2 - Morango
* 3 - Leite Ninho
 
Crie um programa que receba o número do sabor e mostre o sabor escolhido utilizando switch.
Considere q o cliente escolheu a opção 2. */
 
 
let bolo = "Morango";
 
switch(bolo){
    case "Chocolate":
        console.log("bolo de chocolate");
        break;
 
    case "Morango":
        console.log("bolo de morango");
        break;
   
    case "Leite Ninho":
        console.log("bolo de leite ninho");
        break;
 
    default:
        console.log("Não possui no estoque")
}
 
//Confeitaria
 
/* Uma confeitaria precisa produzir 5 bolos para uma encomenda.
crie uma programa que utilize while para mostrar no console a produção de cada bolo até completar os 5. */
 
let x = 1;
 
while(x <= 5){
    console.log(x);
    x = x + 1;
}


/*Exercício 3 – Ateliê de Costura (Switch – Tipo de Serviço)
Pergunta:
 
Um ateliê oferece os seguintes serviços:
• 1 → Ajuste de barra
• 2 → Reforma de vestido
• 3 → Confecção sob medida
 
Utilize switch para exibir o serviço escolhido.
Considere que o cliente escolheu a opção 3.*/

let opcao = 3;

switch (opcao) {
    case 1:
        console.log("Escolhido: Ajuste de barra");
        break;

    case 2:
        console.log("Escolhido: Reforma de vestido");
        break;

    case 3:
        console.log("Escolhido: Confecção sob medida");
        break;

        default:
            console.log("Opção inexistente");

}

/*Exercício 4 – Psicólogo (While – Sessões Realizadas)
Pergunta:
 
Um psicólogo realizou 4 sessões no dia.
Crie um programa utilizando while para exibir cada sessão realizada até completar
as 4 sessões.*/

let sessao = 1;

while (sessao <= 4) {
    console.log(sessao);
    sessao = sessao + 1;
}





