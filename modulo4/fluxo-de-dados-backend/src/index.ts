import express from 'express'
import cors from 'cors'
import { products } from './data'

const app = express()

app.use(express.json())
app.use(cors())

//EXERCÍCIO 01 - Teste
app.get("/test", (req, res) => {

    res.status(200).send("A API está funcionando!")
})

//EXERCÍCIO 03 e 07 - CreateNewProduct
app.post("/create-product", (req, res) => {
    try {
        const id = Date.now().toString()
        const name: string = req.body.name
        const price: number = req.body.price

        const newProduct = {
            id: id,
            name: name,
            price: price
        }

        if (!newProduct.name || !newProduct.price || !newProduct.id) {
            throw new Error("Algum campo do produto está vazio!")
        }
        if (!newProduct.name || typeof newProduct.name !== "string") {
            throw new Error("O nome do produto é inválido!")
        }
        if (!newProduct.price || typeof newProduct.price !== "number") {
            throw new Error("O preço digitado precisa ser um número!")
        }
        if (newProduct.price <= 0) {
            throw new Error("O preço digitado precisa ser maior ou igual a zero!")
        }

        products.push(newProduct)

        res.status(200).send(products)

    } catch (error: any) {
        switch (error.message) {
            case "Algum campo do produto está vazio!":
                res.status(422).send(error.message)
                break
            case "O nome do produto é inválido!":
                res.status(422).send(error.message)
                break
            case "O preço digitado precisa ser um número!":
                res.status(422).send(error.message)
                break
            case "O preço digitado precisa ser maior ou igual a zero!":
                res.status(422).send(error.message)
                break
            default:
                res.status(500).send(error.message)
                break
        }
    }
})

//EXERCÍCIO 04 - GetProducts
app.get("/products", (req, res) => {

    res.status(200).send(products)
})

//EXERCÍCIO 05 e 08 - UpdatePrice
app.put("/products/:id", (req, res) => {
    try {
        const productId = req.params.id
        const newPrice = req.body.price
        let searchId = false

        if (!newPrice) {
            throw new Error("Preço não informado!")
        }
        if (typeof newPrice !== "number") {
            throw new Error("O preço digitado precisa ser um número!")
        }
        if (newPrice <= 0) {
            throw new Error("O preço digitado precisa ser maior ou igual a zero!")
        }

        const updatePriceProduct = products.map(product => {
            if (product.id === productId) {
                searchId = true
                return { ...product, price: newPrice }
            } else {
                return product
            }
        })

        if (!searchId) {
            throw new Error("Produto não foi encontrado, id informado está inválido!")
        }

        res.status(200).send(updatePriceProduct)

    } catch (error: any) {
        switch (error.message) {
            case "Preço não informado!":
                res.status(422).send(error.message)
                break
            case "O preço digitado precisa ser um número!":
                res.status(422).send(error.message)
                break
            case "O preço digitado precisa ser maior ou igual a zero!":
                res.status(422).send(error.message)
                break
            case "Produto não foi encontrado, id informado está inválido!":
                res.status(404).send(error.message)
                break
            default:
                res.status(500).send(error.message)
                break
        }
    }
})

//EXERCÍCIO 06 e 09 - DeleteProduct
app.delete("/products/:id", (req, res) => {
    try {
        const productId = req.params.id
        let searchId = false
        
        for (let product of products) {
            if (product.id === productId) {
                searchId = true
            }
        }

        if (!searchId) {
            throw new Error('Não foi possível deletar o produto, id informado está inválido!')
        }

        const updateListProducts = products.filter((product) => {
            if (product.id !== productId) {
                return product
            }
        })

        res.status(201).send(updateListProducts)

    } catch (error: any) {
        switch (error.message) {
            case 'Não foi possível deletar o produto, id informado está inválido!':
                res.status(404).send(error.message)
                break
            default:
                res.status(500).send(error.message)
                break
        }
    }
})

app.listen(3003, () => {
    console.log("Backend rodando na porta 3003!")
})