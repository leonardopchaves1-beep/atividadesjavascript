//Questão 1 psicólogo
 
function avaliarSessao(nomePaciente, quantidadeSessoes) {
    // Mostra o nome do paciente no console
    console.log("Nome do paciente:", nomePaciente);
 
    // Verifica se o número de sessões é maior ou igual a 10
    if (quantidadeSessoes >= 10) {
        return true; // Pode receber alta
    } else {
        return false; // Ainda não pode receber alta
    }
}

//Questão 2
function avaliarSessao(nomePaciente, quantidadeSessoes) {
    if (quantidadeSessoes >= 10) {
        return `Paciente ${nomePaciente} pode receber alta.`;
    } else if (quantidadeSessoes >= 5) {
        return `Paciente ${nomePaciente} está em tratamento contínuo.`;
    } else {
        return `Paciente ${nomePaciente} está no início do tratamento.`;
    }
}
 
console.log(avaliarSessao("Maria", 10));


/*  Exercício 3 – Ateliê
Crie uma função chamada listarMateriais que receba um array de materiais utilizados em um 
ateliê (ex: tintas, pincéis, tecidos).
A função deve:
• Exibir no console a quantidade total de materiais
• Criar um novo array com os nomes dos materiais em letras maiúsculas
• Retornar esse novo array
 Regras:
• Utilize map
• Utilize length
• Use console.log apenas para exibir a quantidade */

function listarMateriais (materiais){

    console.log(materiais.length);

    let novoArray = materiais.map(function(item){
        return item.toUpperCase();
    });

    return novoArray;
}

listarMateriais(["Tintas", "Pincéis", "Tecidos"]);

/* Exercício 4 – Confeitaria
Crie uma função chamada filtrarSaboresDisponiveis que receba:
• Um array com sabores de doces
• Um caractere (letra)
A função deve:
• Retornar apenas os sabores que comecem com a letra informada
• A função não deve exibir nada no console
• Usar função de callback para o filtro
 Regras:
• Utilize filter
• Utilize arrow function como callback
• A função deve retornar um novo array */ 

function filtrarSaboresDisponiveis (sabores, letra){
    let resultado = sabores.filter((sabor) => {
        return sabor.startsWith(letra);
    });
    
    return resultado;
}

filtrarSaboresDisponiveis(
    ["Brigadeiro", "Beijinho", "Cupcake", "Bolo"],
);


/*Exercício 5 – Psicólogo
• Crie um JSON válido para representar o cadastro de um paciente, contendo: 
nome completo, idade, plano de saúde (booleano indicando se possui), lista de 
queixas principais (array de strings), e um objeto com dados da última sessão (data 
em ISO, escala de humor de 1 a 10 e se houve prescrição de atividade).*/


let cadastroPaciente = `{
  "nomeCompleto": "Rodrigo Gomes",
  "idade": 25,
  "possuiPlanoSaude": false,
  "queixasPrincipais": ["Autoestima", "Ansiedade"],
  "ultimaSessao": {
    "data": "2026-01-10",
    "escalaHumor": 7,
    "prescricaoAtividade": true
  }
}`;



/*Exercício 6 – Ateliê de Costura
• Crie um JSON de pedido para um ateliê de costura, contendo: dados do cliente 
(nome e telefone), tipo de peça (ex.: vestido, camisa), medidas (busto, cintura, 
quadril em cm), tecido escolhido, prazo em dias e status do pedido (valores 
possíveis: “recebido”, “em produção”, “pronto”, “entregue”). Inclua pelo menos três 
medidas dentro de um objeto*/

let dadosCliente = `{
  "cliente": {
    "nome": "Francisca",
    "telefone": "11912345678"
  },
  "tipoPeca": "Vestido",
  "medidas": {
    "busto": 55,
    "cintura": 46,
    "quadril": 65
  },
  "tecido": "Algodão",
  "prazoDias": 4,
  "status": "em produção"
}`;


/* Exercício 7 – Bolo de Pote
• Crie um JSON de catálogo com três sabores de bolo de pote, onde cada item 
possua: nome do sabor, preço (número), se contém lactose (booleano), e uma lista 
de ingredientes. Em seguida, inclua um campo no topo chamado 
“promocaoAtiva” (booleano) e outro chamado “descontoPercentual” (número). 
Garanta que todos os valores textuais estejam entre aspas e que as chaves sigam 
nomes descritivos em minúsculas. */

let catalogo = `{
    "promocaoAtiva": true,
    "descontoPercentual": 10,
    "catalogo": [
    {
        "nome": "Brigadeiro",
        "preco": 10,
        "contemLactose": true,
        "ingredientes": ["Chocolate", "Leite Condensado"]
    },
        
    {
        "nome": "Maracuja",
        "preco": 12,
        "contemLactose": false,
        "ingredientes": ["Fruta Maracuja", "Mouse de Maracuja"]
    },
    {
        "nome": "Limão",
        "preco": 12,
        "contemLactose": true,
        "ingredientes": ["Fruta Limão", "Mouse de Limão"]    
    }
  ]
}`;


/*Exercício 8 – Confeitaria
• Crie um JSON de pedido online para uma confeitaria contendo: identificador do 
pedido, data do pedido (ISO), cliente (nome e e-mail), itens (lista de objetos com 
produto, quantidade e observações), endereço de entrega (rua, número, bairro, 
cidade, CEP), forma de pagamento (ex.: “cartão”, “pix”) e um campo 
“totalCalculado” (número). Certifique-se de que todos os objetos e arrays
estejam bem aninhados e que os tipos sejam coerentes */


let pedidoOnline = `{
  "identificadorDePedido": 2,
  "dataDoPedido": "2026-03-20",
  "cliente": {
    "nome": "Victor",
    "email": "victor@gmail.com"
  },
  "itens": [
    {
      "produto": "bolo de chocolate grande",
      "quantidade": 4,
      "observacoes": "Chocolate Amargo"
    }
  ],
  "enderecoEntrega": {
    "rua": "Av Brasil",
    "numero": 1234,
    "bairro": "Jardins",
    "cidade": "São Paulo",
    "cep": "00000-000"
  },
  "formaPagamento": "pix",
  "totalCalculado": 100
}`;