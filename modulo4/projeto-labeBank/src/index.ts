import express, {Request, Response}from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/test', (req: Request, res: Response) => {
    res.status(200).send("A API está funcionando!")
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const adress = server.address() as AddressInfo
        console.log(`Server is running in http://localhost: ${adress.port}`)
    } else {
        console.log(`Failure upon starting server.`)
    }
})