//QUESTÃO 01 DE INTERPRETAÇÃO DE CÓDIGO

/* No código abaixo primeiramente é declarado o valor da variável "valor", 
na linha 5 do código a variável i vai valer 0 (inicialização)
depois será verificado se é é menor que 5 (condição) e por último 
é executado o incremento 1 à variável i após cada passagem pelo loop (incremento), ou seja,
enquanto i for menor que 5 o código vai continuar executando
A cada interação o laço incrementa 1 à i e acrescenta o valor na variável "valor".
Com isso o valor que será impresso no console é: 10 */
let valor = 0
for (let i = 0; i < 5; i++) {
    valor += i
}
console.log(valor)


//QUESTÃO 02 DE INTERPRETAÇÃO DE CÓDIGO
/*A) O código abaixo vai imprimir todos os números maiores que 18
B) Não*/
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
    if (numero > 18) {
        console.log(numero)
  }
}


//QUESTÃO 03 DE INTERPRETAÇÃO DE CÓDIGO
/*O código abaixo vai imprimir 4 linhas de asterisco, a primeria contanto "*", a segunda "**", a terceira "***" e a quarta "***"
*/
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while (quantidadeAtual < quantidadeTotal) {
    let linha = ""
    for (let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++) {
        linha += "*"
    }
    console.log(linha)
    quantidadeAtual++
}


//QUESTÃO 01 DE ESCRITA DE CÓDIGO
const quantosBichinhosDoUsuario = Number(prompt("Quantos bichinhos de estimação você tem?"))
let listaDeNomesBichinhos = []

if (quantosBichinhosDoUsuario <= 0) {
    console.log("Que pena! Você pode adotar um pet!")
}
else if (quantosBichinhosDoUsuario > 0) {
    for (let contadorBichinhos = 0; contadorBichinhos < quantosBichinhosDoUsuario; contadorBichinhos++) {
        nomesDeBichinhos = prompt("Digite o tipo de bichinho que você tem com o nome dele ao lado. Exemplo: Gato = Jujuba")
        listaDeNomesBichinhos.push(nomesDeBichinhos)
    }
}

console.log("Seu(s) bichinho(s) de estimação é(são):", listaDeNomesBichinhos)

