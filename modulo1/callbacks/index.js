//QUESTÃO 01 EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO
//A) Será impresso no console o item 1 do array com seu indice "0" e o array completo
// Depois será impresso o item 2 do array com seu indice "1" e o array completo
//E tambem será impresso o item 3 do array com seu indice "2" e o array completo
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })


//QUESTÃO 02 EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO
//A) Será impresso no console um novo array contendo apenas os nomes dos usuários
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB)


//QUESTÃO 03 EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO
/*A) Será impresso no console um novo array contendo o nome e apelido do primeiro e segundo usuário porém o item que possui o apelido "Chijo" não vai ser impresso.*/
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)


//QUESTÃO 01 EXERCÍCIO DE ESCRITA DE CÓDIGO

const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]

//A) Crie um novo array que contenha apenas o nome dos doguinhos

const arrayNomesDogs = pets.map((item, index, array) => {
    return item.nome
})

console.log(arrayNomesDogs)

//B) Crie um novo array apenas com os cachorros salsicha

const arrayDogsSalcichas = pets.filter((item, index, array) => {
    return item.raca === "Salsicha"
})
console.log(arrayDogsSalcichas);

/*C) Crie um novo array que possuirá mensagens para enviar para todos 
os clientes que são poodles. A mensagem deve ser: "Você ganhou um 
cupom de desconto de 10% para tosar o/a [NOME]!"*/

let arrayDescontoPoodle = pets.filter((item, index, array) => {
    return item.raca === "Poodle"
})
const arrayNomesPoodle = arrayDescontoPoodle.map((item, index, array) => {
    return (`Você ganhou um cupom de desconto de 10% para tosar o/a: ${item.nome}`);
 })
    console.log (arrayNomesPoodle);


//QUESTÃO 02 EXERCÍCIO DE ESCRITA DE CÓDIGO
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

//A) Crie um novo array que contenha apenas o nome de cada item
const nomesProdutos = produtos.map((item, index, array) => {
    return item.nome
})

console.log(nomesProdutos)

//C) Crie um novo array que contenha apenas os objetos da categoria Bebidas
const produtoBebidas = produtos.filter((item, index, array) => {
    return item.categoria === "Bebidas"
})
console.log(produtoBebidas);

//D) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
const produtosMarcaYpe = produtos.filter((nome) => {
    return nome.nome.includes("Ypê")

})
console.log(produtosMarcaYpe)

/*E) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"*/
const comprarProdutoYpe = produtosMarcaYpe.map((item, index, array) => {
    return (`Compre ${item.nome} por ${item.preco}`)

})
console.log(comprarProdutoYpe)
