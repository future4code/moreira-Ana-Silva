let dataDeNascimento = process.argv[2];
let emissaoRG = process.argv[3];

const verificaRenovacao = (dataDeNascimento: string, emissaoRG: string): boolean => {

    let anoAtual:number = new Date().getTime()
    let anoDeNascimento:number = new Date(dataDeNascimento).getTime()
    let anoDeEmissao:number = new Date(emissaoRG).getTime()
    let idadeDaPessoa: number = anoAtual - anoDeNascimento
    let anoRenovacao : number = anoAtual - anoDeEmissao

    if (idadeDaPessoa <= 20 && anoRenovacao >= 5) {
        return true
    } else if (idadeDaPessoa > 20 && idadeDaPessoa <= 50 && anoRenovacao >= 10) {
        return true
    } else if (idadeDaPessoa > 50 && anoRenovacao > 15) {
        return true
    } else {
        return false
    }
}