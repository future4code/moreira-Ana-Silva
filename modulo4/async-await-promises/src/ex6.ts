import { baseURL } from './baseURL'
import axios from "axios"
import { User } from './data'

/*A) Retorna uma única Promise que é resolvida quando todas as promises no 
argumento forem resolvidas ou quando o que é passado como argumento não contém promises.*/
//B) Agrega mais ao resultado de várias promises.

//C)
const sendNotifications = async (
    users: User[],
    message: string
): Promise<void> => {

    try {
        const promises = users.map(user => {
            return axios.post(`${baseURL}/notifications`,
                {
                    subscriberId: user.id,
                    message: message,
                })
        })

        await Promise.all(promises)

    } catch {
        console.log("Error")
    }
}