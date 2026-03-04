document.getElementById("btnVerificar").addEventListener("click", verificar);

//função
function verificar() {
    const input = document.getElementById("numero").value;
    const resultado = document.getElementById("resultado");

    const numero = Number(input);

    let bolospotevendido = numero;
    let metadevendas = 30;

    if(bolospotevendido === metadevendas) {
        resultado.innerHTML = "A meta foi atingida! ";
        resultado.style.color = "blue";
    }

    else if(bolospotevendido > metadevendas) {
        resultado.innerHTML = "A meta foi superada!";
        resultado.style.color = "green";
    }
    else{
        resultado.innerHTML = "A meta NÃO foi atingida"
        resultado.style.color = "red";
    }

}    