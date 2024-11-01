//Maria está realizando compras online. 

//Crie um array inicialmente vazio chamado 'carrinho'. 
let carrinho = []

//Adicione os produtos "camiseta", "calça" e "sapato" ao carrinho. 
carrinho.push("camiseta", "calça", "sapato")

//Remova o primeiro produto da lista e,
carrinho.shift()

//em seguida, modifique o segundo produto para "tênis". 
carrinho[1] = "tênis"

//Imprima o carrinho de compras atualizado no final.
console.log(carrinho)