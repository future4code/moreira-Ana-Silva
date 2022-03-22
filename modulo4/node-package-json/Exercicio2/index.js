const operacao = process.argv[2]
const primeiroValor = Number(process.argv[3])
const segundoValor = Number(process.argv[4])
let total

    switch (operacao) {
        case 'soma':
            total = primeiroValor + segundoValor
            break
        case 'subt':
            total = primeiroValor - segundoValor
            break
        case 'mult':
            total = primeiroValor * segundoValor
            break
        case 'div':
            total = primeiroValor / segundoValor
            break
    }

console.log(`O resultado da operação de ${operacao} será: ${total}`)