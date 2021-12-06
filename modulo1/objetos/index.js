


//EXERCÍCIO 01 DE INTERPRETAÇÃO DE CÓDIGO
/*A) O primeiro colose do código abaixo vai imprimir: o primeiro elemento do array elenco "Matheus Machtergaele" 
O segundo console vai imprimir: "Virginia Cavendish" que no caso é o último elemento do array 
O terceiro console vai imprimir: "Globo 14h"*/
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])


//EXERCÍCIO 02 DE INTERPRETAÇÃO DE CÓDIGO
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}
//A)
const gato = {...cachorro, nome: "Juba"} /* As informações do objeto cachorro serão copiadas para o objeto
gato e o nome do cachorro que era Juca será substituído por Juba.*/

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")} /* As informações atualizadas do objeto gato serão copiadas 
para o obejto tartaruga e as letras "a" do nome "Juba" serão trocada por "o"*/

console.log(cachorro) 
//Juca, 3, SRD
console.log(gato)
//Juba, 3, SRD
console.log(tartaruga)
//Jubo, 3, SRD

//B) Os três pontinhos antes do nome do objeto significa que o objeto está sendo copiado e transferido para um objeto novo.


//EXERCÍCIO 03 DE INTERPRETAÇÃO DE CÓDIGO
//A e B) O primeiro console vai imprimir o valor de "beckender", que no caso será: false, pois é o valor que lhe foi definido no objeto pessoa.
//O segundo console vai imprimir undefined pois o valor de "altura" não foi definido no objeto pessoa.
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

//EXERCÍCIO 01 DE ESCRITA DE CÓDIGO
//A)
const infoPessoa = {
    nome: "Gabriel",
    apelidos: ["Gaby", "Biel", "Bibi"]
}

const pessoa = (infoPessoa) => {
console.log (`Eu sou ${infoPessoa.nome}, mas pode me chamar de: ${infoPessoa.apelidos[0]}, 
${infoPessoa.apelidos[1]} ou ${infoPessoa.apelidos[2]}.`)

}
//B) 
const novosApelidos = {
    ...infoPessoa,
    apelidos: ["Gabis", "Bibo", "Ga"]
}

pessoa (novosApelidos);


//EXERCÍCIO 02 DE ESCRITA DE CÓDIGO
//A) 
const pessoa1 = {
    nome: "Maria Eduarda",
    idade: 28,
    profissao: "Médica Cirurgiã"

}

const pessoa2 = {
    nome: "Eldes Garcia",
    idade: 39,
    profissao: "Engenheiro"

}
//B)
informacoesPessoas = (pessoa1, pessoa2) 
    arrayPessoa1 = [pessoa1.nome, pessoa1.nome.length, pessoa1.idade, pessoa1.profissao, pessoa1.profissao.length]
    arrayPessoa2 = [pessoa2.nome, pessoa2.nome.length, pessoa2.idade, pessoa2.profissao, pessoa2.profissao.length]



console.log (arrayPessoa1, arrayPessoa2)


//EXERCÍCIO 03 DE ESCRITA DE CÓDIGO
let carrinho = []

const fruta1 = {
    nome: "jaca",
    disponibilidade: true

};

const fruta2 = {
    nome: "caju",
    disponibilidade: true

};

const fruta3 = {
    nome: "melancia",
    disponibilidade: true

};

function receberFrutas (fruta1, fruta2, fruta3) {
carrinho.push(fruta1);
carrinho.push(fruta2);
carrinho.push(fruta3);

};

receberFrutas (fruta1, fruta2, fruta3)

console.log (carrinho)