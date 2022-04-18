import { baseURL } from './baseURL'
import axios from "axios"

//A) A função nomeada é executada sequencialmente, ou seja, 
// se tiver uma função A e B respectivamente, a função B só será executada após a função A ser executada.
// Já nas funções assíncronas caso a função A não dê resposta a função B vai ser executada.

//B)
const getSubscribers = async(): Promise<any[]> => {
    const response = await axios.get(`${baseURL}/subscribers`)
    return response.data
}