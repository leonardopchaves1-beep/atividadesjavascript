
// Array com os sabores
let sabores = ["Chocolate 🍫", "Morango 🍓", "Baunilha 🍦", "Red Velvet 🍰"];

// variável para controlar se a lista está visível
let visivel = false;

// Função chamada ao clicar no botão
function mostrarSabores(){

    let lista = document.getElementById("lista");
    let botao = document.getElementById("botaoSabores");

    // se estiver visível, esconde
    if(visivel){
        lista.innerHTML = "";
        botao.textContent = "Mostrar Sabores";
        visivel = false;
    } 
    // se estiver escondido, mostra
    else{

        sabores.forEach(function(sabor){

            let item = document.createElement("li");
            item.textContent = sabor;

            lista.appendChild(item);

        });

        botao.textContent = "Esconder Sabores";
        visivel = true;
    }
}