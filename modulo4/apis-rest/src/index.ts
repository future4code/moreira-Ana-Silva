import express, { Response, Request } from 'express'
import cors from 'cors'
import { users, User, UserType } from './data'

const app = express()

app.use(express.json())
app.use(cors())

app.get("/test", (req, res) => {
    res.send("A API está funcionando!")
})

app.get('/users', (req: Request, res: Response) => {
    const listUsersType = users.map((user) => user)
    res.status(200).send(listUsersType)
})

//EXERCÍCIO 02 - GetUsersType
//A) Por meio de queryParams

app.get('/users/search-type/:type', (req: Request, res: Response) => {
    let errorCode = 400
    let type = req.params.type as string

    try {
        if (!type) {
            errorCode = 404
            throw new Error("É necessário passar um tipo de usuário!")
        } else {

            let typesUsers = users.filter((user) => {
                return user.type === type.toUpperCase()
            })
            if (type.toLowerCase() === 'admin' || type.toLowerCase() === 'normal') {
                res.status(202).send(typesUsers)
            } else {
                errorCode = 422
                throw new Error("Tipo de usuário não encontrado!")
            }
        }
    } catch (e: any) {
        res.status(errorCode).send(e.message)
    }
})

//EXERCÍCIO 03
//A) Path parameter
//B) 
app.get("/users/search-name/:name", (req: Request, res: Response) => {
    let errorCode = 400

    try {
        const userName: string = req.params.name as string
        const user: User[] | undefined = users.filter((user) => user.name.toLowerCase() === userName.toLowerCase())
        if (user === undefined) {
            errorCode = 404
            throw new Error("Usuário não encontrado!")
        }
        res.status(200).send(user);

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })

    }
})

//EXERCÍCIO 04 
//A) Com PUT funcionou da mesma forma
//B) Não, pois geralmente o método put serve para alterar dados de um item que já existe

app.post("/users", (req: Request, res: Response) => {
let errorCode: number = 400

    try {
        const id = Date.now().toString()
        const name: string = req.body.name
        const email: string = req.body.email
        const type: UserType = req.body.type
        const age: number = req.body.age

        const newUser = {
            id: id,
            name: name,
            email: email,
            type: type,
            age: age
        }   

    if (!newUser.name || !newUser.email || !newUser.type|| !newUser.age || !newUser.id) {
      errorCode = 422
      throw new Error("Verifique se todos os dados estão preenchidos!")
    }

    users.push(newUser)
    res.status(201).send(users)

  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }
})

app.listen(3003, () => {
    console.log("Backend rodando na porta 3003!")
})