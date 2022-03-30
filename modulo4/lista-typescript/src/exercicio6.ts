

type DadosCliente = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

const listaDeClientes: DadosCliente[] = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

const retornaNegativados = (listaDeClientes: DadosCliente[]): DadosCliente[] => {
    return listaDeClientes

        .filter((client) => {
            if (client.saldoTotal - client.debitos.reduce((total, proximoValor) => total + proximoValor, 0) <= 0) {
                return true
            } else return false
        })

        .map((client) => {
            return (
                {
                    cliente: client.cliente,
                    saldoTotal: client.saldoTotal - client.debitos.reduce((total, proximoValor) => total + proximoValor, 0),
                    debitos: []
                }
            )
        })
}