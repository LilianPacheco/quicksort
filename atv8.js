//Ana está organizando suas tarefas de limpeza semanal. 

//Crie um array inicialmente vazio chamado tarefasLimpeza. 
let tarefasLimpeza = []

//Solicite a Ana para adicionar quatro tarefas à lista. 
for (let i = 0; i < 3; i++) {
    let item = prompt(`Adicione as tarefas ${i + 1} na lista:`);
    tarefasLimpeza.push(item);
}
//Remova a terceira tarefa da lista e, em seguida,mude a segunda tarefa para "limpar banheiro". 
tarefasLimpeza.pop(2)
tarefasLimpeza [0] = "limpar banheiro"

//Imprima a lista de tarefas de limpeza atualizada no final.
console.log(tarefasLimpeza)