import express from 'express'
import cors from 'cors'
import { affair } from './data'

const app = express();

app.use(express.json());
app.use(cors());

//EXERCÍCIO 01
app.get("/ping", (req, res) => {

    res.status(200).send("Pong 🏓")
})

//GETAFFAIR
app.get("/affair", (req, res) => {
    res.send(affair)
})

//EXERCÍCIO 04

app.get("/affair/:status", (req, res) => {
    const statusAffair = req.params.status

    const listByStatus = affair.filter((aff) => {
        return String(aff.completed) === statusAffair
    })

    res.status(200).send(listByStatus)
})

//EXERCÍCIO 05
app.post("/createAffair", (req, res) => {

    const userId = Date.now().toString()
    const title: string = req.body.title
    const completed: boolean = req.body.completed
    const id = Date.now().toString()

    const newAffair = {
        userId: userId,
        id: id,
        title: title,
        completed: completed
    }

    affair.push(newAffair)

    res.status(200).send(affair)
})

//EXERCÍCIO 06
app.put("/affair/:affairId", (req, res) => {
    const affairId = req.params.affairId

    const changeStatus = affair

        .filter((aff) => {
            return aff.id === affairId
        })

        .map((aff) => {
            return aff = {
                userId: aff.userId,
                id: aff.id,
                title: aff.title,
                completed: !aff.completed
            }
        })

    res.status(220).send(changeStatus)
})

//EXERCÍCIO 07
app.delete("/affair/:affairId", (req, res) => {
    const affairId = req.params.affairId

    const affairUpdated = affair.filter((post) => {
        return post.id !== Number(affairId)
    })

    res.status(200).send(affairUpdated)
})

//EXERCÍCIO 08
app.get("/affair/user/:userId", (req, res) => {
    const userId = req.params.userId

    const affairUser = affair.filter((aff) => {
        return aff.userId === Number(userId)
    })

    res.status(200).send(affairUser)
})

app.listen(3003, () => {
    console.log("Backend rodando na porta 3003!");
});