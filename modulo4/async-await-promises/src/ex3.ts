import { baseURL } from './baseURL'
import axios from "axios"
import { User } from './data'

//A) Não.
//B) Isso é feito para que as coisas fiquem mais explícitadas.

//C) 

const getSubscribers = async (): Promise<User[]> => {
    const response = await axios.get(`${baseURL}/subscribers`)
    return response.data.map((res: any) => {
        return {
            id: res.id,
            name: res.name,
            email: res.email
        }
    })
}

