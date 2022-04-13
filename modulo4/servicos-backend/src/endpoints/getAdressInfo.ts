import axios from 'axios'
import { Address } from '../types'

const baseUrl = "https://viacep.com.br/ws"

export const getAddressInfo = async (zipcode: string): Promise<Address | null> => {
    try {
        const response = await axios.get(`${baseUrl}/${zipcode}/json/`)

        const address: Address = {
            street: response.data.logradouro,
            district: response.data.bairro,
            city: response.data.localidade,
            state: response.data.uf
        }

        return address
    } catch (error) {
        console.error("Erro no serviço getAddressInfo: ", error)
        return null
    }
}