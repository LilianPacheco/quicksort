//Uma lista com números de 1 a 15 foi criada por engano, quando na verdade deveria ser apenas de 1 a 5. 

// Criando a lista com números de 1 a 15
let listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// Removendo números a mais até a lista conter apenas os números de 1 a 5
while (listaNumeros.length > 5) {
    listaNumeros.pop();
}

// Mostrando a lista corrigida na tela
console.log("Lista corrigida:", listaNumeros);
