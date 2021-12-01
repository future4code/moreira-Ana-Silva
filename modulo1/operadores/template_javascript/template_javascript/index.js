//1) Exercício de interpretação de código
/*O código abaixo irá imprimir no console as respectivas respostas
a. O resultado será false, pois true && false = false
b. O resultado será false, pois true && false && true = false
c. O resultado será true, pois true {negação do resultado da operação anterior (!resultado)} && true ou true = true 
d. O resultado será bollean, pois typeof retorna o tipo da variável resultado*/ 
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 // true && false
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 // true && false && true
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) // true && true && true
console.log("c. ", resultado)

console.log("d. ", typeof resultado) // boollean

//2) Exercício de interpretação de código
/*O código abaixo está dando errado pois o console está 
entendendo os valores digitados como sendo strings*/

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

//3) Exercício de interpretação de código
/*Para que o resultado da operação acima seja correto é necessário 
transformar os valores que serão digitados em números, da seguinte forma:*/

let primeiroNumero = Number (prompt("Digite um numero!"))
let segundoNumero = Number (prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)

//1) Exercício de escrita de código

const idadeDoUsuario = Number (prompt ("Qual sua idade?"));
const idadeDoAmigo = Number (prompt ("Qual a idade do seu melhor amigo?"));
console.log ("Sua idade é maior do que a do seu melhor amigo?", idadeDoUsuario > idadeDoAmigo);

//2) Exercício de escrita de código

const numero = Number (prompt ("Digite um número par:"));
const numeroPar = numero % 2; //Para o número ser par o resto da divisão precisa ser igual a 0
console.log (numeroPar)

// Caso o usuário digite um número ímpar o resultado será maior que 0.

//3) Exercício de escrita de código
const idade = Number (prompt ("Quantos anos você tem?"));
console.log ("a) Sua idade em meses: ", idade * 12); //Um ano possui 12 meses
console.log ("b) Sua idade em dias: ", idade * 365); //Um ano possiu 365 dias
console.log ("c) Sua idade em horas: ", idade * 8760); //Um ano possui 8760 horas

//4) Exercício de escrita de código
const primeiroNumero = Number (prompt("Digite um número:"));
const segundoNumero = Number (prompt("Digite outro número:"));
console.log ("O primeiro numero é maior que segundo? ", primeiroNumero > segundoNumero);
console.log ("O primeiro numero é igual ao segundo? ", primeiroNumero === segundoNumero);
console.log ("O primeiro numero é divisível pelo segundo? ", primeiroNumero % segundoNumero === 0);
console.log ("O segundo numero é divisível pelo primeiro? ", segundoNumero % primeiroNumero === 0);
