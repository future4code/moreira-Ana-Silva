export enum OPERATION {
    PAYMENT = "Pagamento",
    TRANSFER = "Transferência de dinheiro",
    ADD = "Depósito de dinheiro"
}

export type Transation = {
    value: number,
    date: string,
    description: OPERATION
}

export type User = {
    name: string,
    cpf: string,
    birtDate: string,
    balance: number,
    transation: Transation[],
}

export const bankUsers: User[] = [
    {
        name: "Karine",
        cpf: "111.111.111-11",
        birtDate: "27/06/2001",
        balance: 200,
        transation: [
            {
                value: 50,
                date: "02/04/2022",
                description: OPERATION.TRANSFER
            },
            {
                value: 100,
                date: "25/01/2021",
                description: OPERATION.PAYMENT
            },
            {
                value: 1000,
                date: "10/08/2021",
                description: OPERATION.ADD
            },
        ]
    },
    {
        name: "Juliana",
        cpf: "222.222.222-22",
        birtDate: "22/12/1987",
        balance: 10000,
        transation: []
    },
    {
        name: "Geyson",
        cpf: "333.333.333-33",
        birtDate: "04/06/2000",
        balance: 20500,
        transation: [
            {
                value: 5000,
                date: "19/01/2020",
                description: OPERATION.ADD
            },
        ]
    },
    {
        name: "José",
        cpf: "444.444.444-44",
        birtDate: "25/10/1995",
        balance: 500,
        transation: [
            {
                value: 1350,
                date: "30/01/2020",
                description: OPERATION.ADD
            },
            {
                value: 200,
                date: "25/03/2022",
                description: OPERATION.PAYMENT
            },
        ]
    },
]