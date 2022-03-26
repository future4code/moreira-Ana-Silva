

enum GENERO {
    ACAO = "Ação",
    DRAMA = "Drama",
    COMEDIA = "Comédia",
    ROMANCE = "Romance",
    TERROR = "Terror"
}

type Filme = { nomeFilme: string, anoLancamento: number, genero: GENERO, pontuacao?: number }

const retornaInfoFilme = (nomeFilme: string, anoLancamento: number, genero: GENERO, pontuacao?: number): Filme => {

    const filme: Filme = {
        nomeFilme: nomeFilme,
        anoLancamento: anoLancamento,
        genero: genero,
        pontuacao
    }
    return filme
}

console.table(retornaInfoFilme("Um amor pra recordar", 2003, GENERO.ROMANCE, 4.5))