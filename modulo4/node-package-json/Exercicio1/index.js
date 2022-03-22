// A) Basta utilizar process.argv[n]. nele os dois primeiros argumentos são fixos e a partir do process.argv[2], nós podemos atribuir valores.

//B) E C)
var nome = process.argv[2];
var idade = process.argv[3];
var novaIdade = Number(idade) + 7
  
console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade} anos.`) 