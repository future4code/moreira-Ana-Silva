import { baseURL } from './baseURL'
import axios from "axios"

//A) Endpoint GET
//B) Promise<any[]>

//C)
const getAllSubscribers = async(): Promise<any[]> => {
    const response = await axios.get(`${baseURL}/subscribers`)
    return response.data
}

