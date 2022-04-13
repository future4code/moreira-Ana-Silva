import { Request, Response } from "express"
import { getAddressInfo } from "../endpoints/getAdressInfo"
import {connection} from "../data/connection"
import { NewAddress } from "../types"

export const createAdress = async (req: Request, res: Response): Promise<void> => {
    try {
        const { zipcode, number, complement } = req.body
        const address = await getAddressInfo(zipcode)

        const newAddress: NewAddress = {
            id: Date.now(),
            cep: zipcode,
            street: address?.street,
            number: number,
            complement: complement,
            district: address?.district,
            city: address?.city,
            state: address?.state
        }

        await connection("Address").insert(newAddress)

        res.status(201).send("Address registered successfully!")

    } catch (error) {
        if (error instanceof Error) {
            res.send({ error, message: error.message })
        } else {
            res.send({ message: "Unexpected error" })
        }
    }
}