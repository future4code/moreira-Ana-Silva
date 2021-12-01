// EXERCÍCIO 01 DE INTERPRETAÇÃO DE CÓDIGOS
//O comando abaixo vai imprimir "undefined" pois o array não foi declarado.
let array
console.log('a. ', array) // a. undefined

//O comando abaixo vai imprimir "null" pois indica que o array está vazio.
array = null
console.log('b. ', array) // b. null

//O comando abaixo vai imprimir a quantidade de elementos existentes no array.
array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // c. 11

//O comando abaixo vai imprimir [3] que é o elemento da posição 0.
let i = 0
console.log('d. ', array[i]) // d. [3]

//O comando abaixo vai imprimir o array completo porém o número 4 será substituído pelo 19
array[i+1] = 19
console.log('e. ', array) // e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

//O comando abaixo 
const valor = array[i+6]
console.log('f. ', valor) // f. 9 

// EXERCÍCIO 02 DE INTERPRETAÇÃO DE CÓDIGOS
/*/No código abaixo primeiramente todas as letras 
da frase serão substituídas por letras maiúsculas e 
em seguida todas as letras "A" serão trocadas pela letra "I"
e por fim será mostrado a quantidade de elementos existentes
na string, incluindo os espaços*/
const frase = prompt("Digite uma frase")//Suponhamos que o usuário digite a frase "Subi num ônibus em Marrocos"

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) // A frase será: "SUBI NUM ÔNIBUS EM MIRROCOS
// O valor de elementos da string será: 27


// EXERCÍCIO 01 DE ESCRITA DE CÓDIGO
const nomeDoUsuario = prompt ("Qual o seu nome?");
const emailDoUsuario = prompt ("Qual o seu e-mail?");

const resultado = `O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`;
console.log (resultado);

// EXERCÍCIO 02 DE ESCRITA DE CÓDIGO
const comidasPreferidas = ["pizza", "sorvete", "hambúrguer", "lasanha", "peixe"];
console.log (comidasPreferidas);

const fraseComidasPreferidas = `Essas são as minhas comidas preferidas:
${comidasPreferidas[0]} 
${comidasPreferidas[1]}
${comidasPreferidas[2]}
${comidasPreferidas[3]}
${comidasPreferidas[4]}`;
console.log (fraseComidasPreferidas);

const comidaPreferidaUsuario = prompt ("Qual sua comida preferida?");

comidasPreferidas [1] = comidaPreferidaUsuario;
console.log ("A nova lista de comidas preferidas é", comidasPreferidas); 

// EXERCÍCIO 03 DE ESCRITA DE CÓDIGO
const listaDeTarefas = []
console.log (listaDeTarefas)

const tarefa1Usuario = prompt ("Digite uma tarefa que você precisa realizar no seu dia a dia");
const tarefa2Usuario = prompt ("Agora digite uma segunda terefa");
const tarefa3Usuario = prompt ("Por fim, digite uma terceira tarefa");

listaDeTarefas.push (tarefa1Usuario, tarefa2Usuario, tarefa3Usuario);
console.log (listaDeTarefas)

const indice = prompt ("Digite índice da tarefa que você já realizou: 0, 1 ou 2");
console.log (indice);

const resultado = listaDeTarefas.splice (indice, 1);
console.log ("A nova lista de tarefas será: ", listaDeTarefas);







