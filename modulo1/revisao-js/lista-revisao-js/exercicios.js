// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {

    return (array.length)
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {

    return (array.reverse())
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    array.sort(function (a, b) {
        return a - b;
    })
    return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const numerosParesArray = array.filter((par) => {
        if (par % 2 === 0) {
            return par
        }
    });
    return numerosParesArray
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const numerosParesArray = array.filter((par) => {
        if (par % 2 === 0) {
            return par
        }
    });
    const duplicar = numerosParesArray => numerosParesArray ** 2;
    return numerosParesArray
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = 0;
    for (let index of array) {
        if (maiorNumero < index) {
            maiorNumero = index
        }
    }
    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const maior = Math.max(num1, num2);
    const menor = Math.min(num1, num2);

    function maiorDivididoMenor() {
        if (maior % menor === 0) {
            return true
        } else {
            return false
        }
    }

    const diferenca = maior - menor;

    const objetoNumeros = {
        maiorNumero: maior,
        maiorDivisivelPorMenor: maiorDivididoMenor(),
        diferenca: diferenca
    };
    return objetoNumeros
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const arrayDePares = []

    for (let contador = 0; arrayDePares.length < n; contador++) {
        if (contador % 2 === 0) {
            arrayDePares.push(contador)
        }
    }
    return arrayDePares
}

console.log(retornaNumerosPares(3))

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if
        (ladoA === ladoB && ladoA === ladoC) {
        return "Equilátero"
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        return "Isósceles"
    } else
        return "Escaleno"
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

}
// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    const assistirFilme = {
        nome: 'O Diabo Veste Prada',
        ano: 2006,
        diretor: 'David Frankel',
        atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
    }
    return (`Venha assistir ao filme ${assistirFilme.nome}, de ${assistirFilme.ano}, dirigido por ${assistirFilme.diretor} e estrelado por ${assistirFilme.atores[0]}, ${assistirFilme.atores[1]}, ${assistirFilme.atores[2]}, ${assistirFilme.atores[3]}.`)
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const novoObjeto = {
    ...pessoa, 
    nome: "ANÔNIMO",
    }
    return novoObjeto
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}