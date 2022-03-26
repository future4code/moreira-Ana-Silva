

const retornaString = (nome: string, data: string): string => {

    let date: string[] = data.split("")

    const dia: string = date[0] + date[1]
    const mes: string = date[3] + date[4]
    const ano: string = date[6] + date[7] + date[8] + date[9]

    return `Olá! Me chamo ${nome}, nasci no dia ${dia} do mês ${mes} do ano de ${ano}.`
}

console.log (retornaString("Karine", "27/06/2001"))