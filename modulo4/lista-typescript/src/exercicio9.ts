
const retornaAnagrama = (palavra: string): number => {
    const anagrama: number = palavra.length
    let fator: number = 1

    for(let i = 1; i <= anagrama; i++){
        fator = fator * i
    }

    return fator
}
console.log(retornaAnagrama(process.argv[2]))