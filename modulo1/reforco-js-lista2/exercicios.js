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

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

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