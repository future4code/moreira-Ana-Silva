// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
const altura = Number(prompt("Qual a altura do retângulo?"));
const largura = Number(prompt("Qual a largura do retângulo?"));

console.log (altura * largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
const anoAtual = Number(prompt("Digite o ano atual:"));
const anoDeNascimento = Number(prompt("Digite o ano do seu nascimento:"));

console.log (anoAtual-anoDeNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

return (peso/(altura*altura))
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const nomeUsuario = prompt("Digite seu nome:");
const idadeUsuario = prompt("Digite sua idade:")
const emailUsuario = prompt("Digite seu email:");

console.log (`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const cor1 = prompt("Digite sua cor favorita:");
const cor2 = prompt("Digite sua segunda cor favorita:");
const cor3 = prompt("Digite sua terceira cor favorita:");
const arrayCores = [cor1, cor2, cor3];

console.log (arrayCores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

  return (string.toUpperCase())
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

return (custo/valorIngresso)
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

return (string1.length === string2.length)
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

return (array[0]);
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

return (array.pop());
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
const primeiroElemento = array[0];
const ultimoElemento = array[array.length - 1];
  
array[0] = ultimoElemento;
array[array.length - 1] = primeiroElemento;
  
return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

return (string1.toLowerCase() == string2.toLowerCase())
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
const anoAtual = Number(prompt("Digite o ano atual:"));
const anoDeNascimento = Number(prompt("Digite o ano do seu nascimento:"));
const anoEmissaoCarteiraIdentidade = Number(prompt("Digite o ano de emissão da sua carteira de identidade:"));

const idade = anoAtual - anoDeNascimento;
const tempoDocumento = anoAtual - anoEmissaoCarteiraIdentidade

const checaRenovacaoRG1 = idade <= 20 && tempoDocumento >= 5;
const checaRenovacaoRG2 = idade > 20 && idade <= 50 && tempoDocumento >= 10;
const checaRenovacaoRG3 = idade > 50 && tempoDocumento >= 15;

console.log(checaRenovacaoRG1 ||  checaRenovacaoRG2 || checaRenovacaoRG3)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
const checaAnoBissexto1 = ano % 400 === 0
const checaAnoBissexto2 = (ano % 4 === 0) && (ano % 100 !== 0)

return checaAnoBissexto1 || checaAnoBissexto2
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
const maiorDe18 = prompt("Você é maior de 18 anos?");
const completouEnsinoMedio = prompt ("Você já completou o ensino médio?");
const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?");

console.log (maiorDe18 === "sim" && completouEnsinoMedio === "sim" && disponibilidade === "sim")
}