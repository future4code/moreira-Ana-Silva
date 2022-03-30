import express from 'express'
import cors from 'cors'
import { users, posts } from './data'

const app = express();

app.use(express.json());
app.use(cors())

//EXERCÍCIO 1
app.get("/", (req, res) => {
    res.send("Hello from Express")
})

//EXERCÍCIO 4
app.get("/users", (req, res) => {
    res.status(200).send(users)
})

//EXERCÍCIO 7
app.get("/posts", (req, res) => {
    res.status(200).send(posts)
})

//EXERCÍCIO 8
app.get("/posts/:userId", (req, res) => {

    const userId = req.params.userId

    const postsUsers = posts.filter((post) => {
        return post.userId === Number(userId)
    })

    res.status(200).send(postsUsers)
})

//EXERCÍCIO 9
app.delete("/posts/:id", (req, res) => {
    const postId = req.params.id

    const postsUpdated = posts.filter((post) => {
        return post.id !== Number(postId)
    })

    res.status(200).send(postsUpdated)
})

//EXERCÍCIO 10
app.delete("/users/:id", (req, res) => {
    const userId = req.params.id

    const usersUpdated = users.filter((user) => {
        return user.id !== Number(userId)
    })
    
    res.status(200).send(usersUpdated)
})

app.listen(3003, () => {
    console.log("Backend rodando na porta 3003 com sucesso!");
});