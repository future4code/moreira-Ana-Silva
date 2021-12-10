/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
// Sorteia uma carta. Por exemplo, o rei de ouros

console.log("Boas vindas ao jogo de Blackjack!")


if (confirm("Você quer iniciar uma nova rodada do jogo?")) {
   confirm = true
   const cartaUsuario = comprarCarta()
   const cartaComputador = comprarCarta()
   const somaDasCartasUsuario = cartaUsuario.valor + cartaUsuario.valor
   const somaDasCartasComputador= cartaComputador.valor + cartaComputador.valor

   console.log(`Usuário - cartas: ${cartaUsuario.texto} ${cartaUsuario.valor} - pontuação: ${somaDasCartasUsuario}`);
   console.log(`Computador - cartas: ${cartaComputador.texto} ${cartaComputador.valor} - pontuação: ${somaDasCartasComputador}`)

   if (cartaUsuario.valor < cartaComputador.valor) {
      console.log("O computador ganhou!")
   } else if (cartaUsuario.valor > cartaUsuario.valor) {
      console.log("O usuário ganhou!")
   } else if (cartaUsuario.valor === cartaComputador.valor)
      console.log("Empate!")

} else {
   console.log("O jogo acabou!")
}