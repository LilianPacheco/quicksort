let arr = [17, 14, 23, 2, 4, 9, 15, 1, 0, 3, 5]

function quicksort(array){
    //se array for um número só, já esta ordenado.
    //entao retornar ele
    if (array.length <= 1) {
        return array
    }

    // escolher um pivo
    let pivo = array[0]
    //criar dua variaveis, esquerda e direita
    let esquerda = []
    let direita = []

    //percorro o meu array e para cada numero
    //verifico se ele é maior ou menor que pivo
    //e posiciono ele na array esquerda e direita
    for (let i=1; i<array.length; i++) {
        if (array[i] < pivo) {
            esquerda.push(array[i]) //menor que o pivô vai para a esquerda
        } else {
            direita.push(array[i]) //maior ou igual ao pivô vai para a direita
        }
    }

    return quicksort(esquerda).concat(pivo, quicksort(direita))
    //escrever uma recusão para chamar novamente o
    //quivksort, uma x paea esquerda e uma x para direita
}

console.log(quicksort(arr))

