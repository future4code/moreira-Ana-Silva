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
    const arrayPares = array.filter((numero) => {
        if (numero % 2 === 0) {
            return numero
        }
    });
    return arrayPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayParesElevadosADois = [];
    for (let par = 0; par < array.length; par++) {
        if (array[par] % 2 === 0) {
            arrayParesElevadosADois.push(array[par] * array[par]);
        }
    }
    return arrayParesElevadosADois;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = 0;
    for (let contador of array) {
        if (maiorNumero < contador) {
            maiorNumero = contador
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
    let menorNumero = Infinity;
    let maiorNumero = -Infinity;
    let segundoMenorNumero = Infinity;
    let segundoMaiorNumero = -Infinity;
    let arraySegundoMaiorESegundoMenor = [];

    for (let numero of array) {
        if (numero < menorNumero) {
            menorNumero = numero;
        }
        if (numero > maiorNumero) {
            maiorNumero = numero;
        }
    }

    for (let numero of array) {
        if (numero < segundoMenorNumero && numero !== menorNumero) {
            segundoMenorNumero = numero;
        }
        if (numero > segundoMaiorNumero && numero !== maiorNumero) {
            segundoMaiorNumero = numero;
        }
    }
    arraySegundoMaiorESegundoMenor.push(segundoMaiorNumero);
    arraySegundoMaiorESegundoMenor.push(segundoMenorNumero);

    return arraySegundoMaiorESegundoMenor;
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
    const podeEntrarNaMontanhaRussa = [];
    for (const pessoa of pessoas) {
      if (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60) {
        podeEntrarNaMontanhaRussa.push(pessoa);
      }
    }
    return podeEntrarNaMontanhaRussa;
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