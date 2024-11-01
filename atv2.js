//Desenvolva um aplicativo de lista de compras automatizada.

// Criando um array vazio para a lista de compras
let listaCompras = [];

// Solicitando ao usuário para adicionar três itens à lista
for (let i = 0; i < 3; i++) {
    let item = prompt(`Adicione o item ${i + 1} à lista de compras:`);
    listaCompras.push(item);
}

// Verificando se o último item adicionado é "leite"
if (listaCompras[listaCompras.length - 1] !== "leite") {
    listaCompras.push("leite");
}

// Imprimindo a lista de compras
console.log("Lista de compras final:", listaCompras);
