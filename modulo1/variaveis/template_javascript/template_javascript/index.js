//1) Exercícios de interpretação de código
//O comando abaixo irá alterar o valor da variável b para 5, o resultado será (10, 5)
let a = 10
let b = 10

console.log(b);

b = 5
console.log(a, b);

//2) Exercícios de interpretação de código
//O resultado da execução abaixo será (10, 10 e 10)
let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)

//3) Exercícios de interpretação de código
//O comando abaixo mostrará o valor recebido por hora trabalhada, onde o valor do ganho por dia será dividido pelas horas trabalhadas
let horasTrabalhadas = prompt("Quantas horas você trabalha por dia?")
let ganhoPorDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${ganhoPorDia/horasTrabalhadas} por hora`)


//1) Exercício de escrita de código
let nome = prompt ("Qual o seu nome?");
let idade = prompt ("Qual sua idade?");
console.log ("Olá", nome);
console.log ("você têm", idade, "anos.");

console.log (typeof nome);
console.log (typeof idade);

//2) Exercício de escrita de código
let souAlunoLabenu = prompt("Você é estudante na Labenu?");
let corDaBlusa = prompt("Você está usando vermelho?");
let gostoPeloCurso = prompt("Você está gostando do curso?");

console.log ("Você é estudante na Labenu? -", souAlunoLabenu);
console.log ("Você está usando vermelho? -", corDaBlusa);
console.log ("Você está gostando do curso? -", gostoPeloCurso);


//3) Exercício de escrita de código
let a = 10
let b = 25
let c 

// Aqui faremos uma lógica para trocar os valores
c = a;
a = b;
b = c;


// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10