//Ana está organizando suas tarefas diárias. 

// Criando um array inicialmente vazio para as tarefas
let tarefas = [];

// Solicitando a Ana para adicionar três tarefas à lista
for (let i = 0; i < 3; i++) {
    let tarefa = prompt(`Adicione a tarefa ${i + 1}:`);
    tarefas.push(tarefa);
}

// Removendo a segunda tarefa da lista
if (tarefas.length > 1) {
    tarefas.splice(1, 1); // Remove a tarefa no índice 1 (segunda tarefa)
}

// Adicionando "ligar para o médico" ao final da lista
tarefas.push("ligar para o médico");

// Imprimindo a lista de tarefas atualizada
console.log("Lista de tarefas atualizada:", tarefas);
