// EXERCÍCIO 1 DE INTEPRETAÇÃO DE CÓDIGO
//A. O resultado que vai ser impresso no console é 10 e 50 respectivamente.
//B. Se tirar o console.log não vai aparecer nada no console.
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

//EXERCÍCIO 2 DE INTERPRETAÇÃO DE CÓDIGO
/*A. A função abaixo vai transformar todas as letras do texto 
digitado pelo usuário em letras minúsculas e em seguida será 
verificado se no texto digitado possui a palavra cenoura, caso 
seJA encontrada a palavra cenoura será retornado true do 
contrário será retornado false*/
//B. As saídas ficarão da seguinte forma: true, true, true
// i. Eu gosto de cenoura = eu gosto de 'cenoura'/true
//ii. CENOURA é bom pra vista = 'cenoura' é bom pra vista/true
//iii.Cenouras crescem na terra = 'cenoura's crescem na terra/true
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)


//EXERCÍCIO 1 DE ESCRITA DE CÓDIGO
//A.
function minhasInformacoes() {
    console.log ("Eu sou Ana Karine, tenho 20 anos, moro em Timon-MA e sou estudante.")

}
//B.
function informacoesDaPessoa(nome, idade, cidade, profissão) {

    console.log (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}.`);
}

informacoesDaPessoa ("Klarisse", "20", "Gramado", "dentista");

//EXERCÍCIO 2 DE ESCRITA DE CÓDIGO
//A.
function soma(numero1, numero2){

    return resultadoOperacao = numero1 + numero2
}
soma(25, 39);

console.log ("O resultado da soma será: ", resultadoOperacao);

//B. 
function booleano(numero1, numero2) {

    return resultadoBooleano = numero1 >= numero2

}
booleano(20, 30);

console.log ("O primeiro número é maior que o segundo? ", resultadoBooleano);

//C.
function numeroPar(numero) {

    return resultado = numero % 2 === 0

}
numeroPar(100);

console.log ("O número é par? ", resultado);

//D.
function formatar(frase){
    frase = frase.toUpperCase()

    return frase

}

const frase1 = formatar("olá, sou aluna da labenu!");

console.log (`A seguinte frase contém: ${frase1.length} caracteres - `, formatar(frase1))

//EXERCÍCIO 3 DE ESCRITA DE CÓDIGO
function adicao(numero1, numero2){

    return resultadoSoma = numero1 + numero2
}

function subtracao(numero1, numero2){

    return resultadoSubtracao = numero1 - numero2
}

function multiplicacao(numero1, numero2){

    return resultadoMultiplicacao = numero1 * numero2
}

function divisao(numero1, numero2){

    return resultadoDivisao = numero1 / numero2
}

const numero1 =  Number (prompt("Digite um número"));
const numero2 =  Number (prompt("Digite outro número"));

adicao(numero1, numero2);
subtracao(numero1, numero2);
multiplicacao(numero1, numero2);
divisao(numero1, numero2);

console.log (`Números inseridos: ${numero1} e ${numero2}`);
console.log (`Adição: ${resultadoSoma}`);
console.log (`Subtracao: ${resultadoSubtracao}`);
console.log (`Multiplicacao: ${resultadoMultiplicacao}`);
console.log (`Divisao: ${resultadoDivisao}`);