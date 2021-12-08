//QUESTÃO 01 DE INTERPRETAÇÃO DE CÓDIGO
/*A) O código vai testar se o número que o usuário digitou é par (para ele ser par o resto da divisão 
do número digitado pelo usuário dividido por dois precisa ser 0) se for par ele vai imprimir no console
a frase "Passou no teste." senão ele vai imprimir "Não passou no teste."
B) O código vai imprimir "Passou no teste" apenas para números pares (cujo resto da divisão dele por 2 é = 0)
C) O código vai imprimir "Não passou no teste" apenas para números ímpares (cujo resto da divisão dele por 2 será maior que 0)*/

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

//QUESTÃO 02 DE INTERPRETAÇÃO DE CÓDIGO
/*A) O código abaixo vai imprimir no console o preço da fruta que o usuário digitar no prompt, 
caso o usuário digite uma fruta que não consta na lista o preço será "5"
B) Caso o usuário digite "Maçã" será impresso: "O preço da fruta Maçã, é, R$ 2.25"
C) Caso seja retirado o break que vem depois do item "Pêra" a mensagem que vai ser impressa é: "O preço da fruta Pêra, é, R$ 5"*/

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// QUESTÃO 03 DE INTERPRETAÇÃO DE CÓDIGO
/* A) Na primeira linha do código abaixo foi declarada uma variável cujo valor 
será o que o usuário digitar convetido para Number.
B) Caso o usuário digite "10", a mensagem impressa será "Esse número passou no teste", pois 10 é maior que 0,
Se o usuário digitar "-10", como -10 é menor que 0, aparecerá a informação de que a mensagem não está difinida.
C) O código apresenta erro pois dentro do bloco de condicional não foi colocada a condicional "else if", 
sendo assim o código só vai imprimir algo se o número digitado for maior que 0."
*/ 
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)


//QUESTÃO 01 DE ESCRITA DE CÓDIGO
const idadeDoUsuario = prompt("Qual sua idade?")
const numero = Number(idadeDoUsuario)

if (numero >= 18) {
    console.log("Você pode dirigir!")
} else {
    console.log("Você não pode dirigir!")
}

//QUESTÃO 02 DE ESCRITA DE CÓDIGO
const turnoDeEstudo = prompt("Digite o turno em que você estuda representado por M, V ou N: sendo M = matutino, V = vespertino, N = noturno.")

if (turnoDeEstudo === "M") {
    console.log("Bom Dia!")
}
else if (turnoDeEstudo === "V") {
    console.log("Bom Tarde!")
}
else if (turnoDeEstudo === "N") {
    console.log("Bom Noite!")
}
else {
    console.log("Você digitou o turno de forma incorreta, tente novamente!")
}

//QUESTÃO 03 DE ESCRITA DE CÓDIGO
const turnoDeEstudo = prompt("Digite o turno em que você estuda representado por M, V ou N: sendo M = matutino, V = vespertino, N = noturno.")

switch (turnoDeEstudo) {
    case 'M':
        console.log("Bom Dia!")
        break
    case "V":
        console.log("Bom Tarde!")
        break
    case "N":
        console.log("Bom Noite!")
        break
    default:
        console.log("Você digitou o turno de forma incorreta, tente novamente!")
}

//QUESTÃO 04 DE ESCRITA DE CÓDIGO
const generoFilme = prompt("Qual o gênero do filme?");
const valorIngresso = prompt ("Qual o valor do ingresso?");

if (generoFilme === "fantasia" && valorIngresso <= 15) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme!")
}