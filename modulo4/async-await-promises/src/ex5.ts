import { baseURL } from './baseURL'
import axios from "axios"
import { User } from './data'

const sendNotifications = async (users: User[], message: string): Promise<void> => {
    try {
        for (const user of users) {
            await axios.post(`${baseURL}/notifications`, 
            {
                subscriberId: user.id,
                message
            })
        }

        console.log("All notifications sent!")
    } catch {
        console.log("Error")
    }
}