import express, { Request, Response } from 'express'
import { AddressInfo } from 'net'
import cors from 'cors'
import { OPERATION, bankUsers, Transation, User } from './data'

const app = express()

app.use(express.json())
app.use(cors())

const currentDate = new Date()
const currentYear = currentDate.getFullYear()

//PEGAR USUÁRIOS
app.get('/users', (req: Request, res: Response) => {
    let errorCode: number = 400

    try {
        res.status(200).send(bankUsers)
    }

    catch (error: any) {
        if (res.status(errorCode).send({ message: error.message })) {
            res.status(errorCode).send({ message: error.message })
        } else {
            res.status(500).send("A server error has occurred!")
        }
    }
})

//PEGAR SALDO DE USUÁRIO POR NOME E CPF
app.get('/users/balance/:name/:cpf', (req: Request, res: Response) => {
    let errorCode: number = 400

    try {
        let name = req.params.name
        let cpf = req.params.cpf

        let filterBalanceUser = bankUsers.find(user => user.cpf === cpf && user.name === name)
        if (filterBalanceUser === undefined) {
            errorCode = 404
            throw new Error("User not found. Check the fields filled!")
        } else {
            let balance = filterBalanceUser.balance
            res.send(`Seu value é de R$ ${balance},00.`)
        }
    }
    catch (error: any) {
        if (res.status(errorCode).send({ message: error.message })) {
            res.status(errorCode).send({ message: error.message })
        } else {
            res.status(500).send("A server error has occurred!")
        }
    }
})

//CRIAR CONTA
app.post('/users', (req: Request, res: Response) => {
    let errorCode: number = 400

    try {
        const { name, cpf, birtDate, balance, transation } = req.body
        const newBirtDate: string[] = birtDate.split('/')

        const newUser: User = { name, cpf, birtDate, balance, transation }

        if (currentYear - Number(newBirtDate[2]) < 18) {
            errorCode = 422
            throw new Error("Age must be 18 years of age or older!")
        }
        if (newUser.balance !== 0) {
            errorCode = 422
            throw new Error("The opening balance must be 0!")
        }
        for (let i = 0; i < bankUsers.length; i++) {
            if (bankUsers[i].cpf === req.body.cpf) {
                errorCode = 422
                throw new Error("There is already an account linked to the informed CPF!")
            }
        }

        bankUsers.push(newUser)
        res.status(200).send(bankUsers)
    }
    catch (error: any) {
        if (res.status(errorCode).send({ message: error.message })) {
            res.status(errorCode).send({ message: error.message })
        } else {
            res.status(500).send("A server error has occurred!")
        }
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const adress = server.address() as AddressInfo
        console.log(`Server is running in http://localhost: ${adress.port}`)
    } else {
        console.log(`Failure upon starting server.`)
    }
})