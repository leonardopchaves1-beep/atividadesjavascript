// pergunta 1 -  João Victor
 
/* Uma empreendedora vende bolo de pote por R$ 12,00 cada.
O custo de produção por unidade é R$ 5,50.
Se ela vendeu 30 unidades, calcule:
• O lucro por unidade
• O lucro total */
 
 
const preco = 12.00;
let custo = 5.50;
let quantidade = 30;
let lucrounidade = preco - custo;
let lucrototal = lucrounidade * quantidade;
 
console.log ("Lucro por unidade: R$ " + lucrounidade);
console.log("Lucro total: R$ " + lucrototal)

/*Exercício 2 – Confeitaria (Desconto) - Leonardo chaves

constantes
*/


const precoBolo = 150.00;
const descontoPercentual = 0.10;

//interpolação 

let valorDesconto = precoBolo * descontoPercentual;
let valorFinal = precoBolo - valorDesconto;

console.log(`Valor do desconto: R$ ${valorDesconto}`)
console.log(`Valor final do bolo: R$ ${valorFinal}`)

//pergunta 3 - João Victor
 
/*
Uma estilista vendeu um vestido por R$ 800,00.
Ela recebe 15% de comissão sobre a venda.
Calcule o valor da comissão e exiba o resultado usando interpolação */
 
 
const valorvestido = 800.00;
 
const porcentagem = 15;
let valorcomissao = (valorvestido * porcentagem) / 100;
console.log (`O valor da comissão é R$ ${valorcomissao}`)

//Exercício 4 – Psicólogo (Faturamento Mensal) - Leonardo chaves

//constantes

const valorSessao = 120.00;
const quatidadedeSessoes = 40;

let faturamento = valorSessao * quatidadedeSessoes

console.log("O faturamento mensal do psicólogo é R$ " + faturamento + ",00");

