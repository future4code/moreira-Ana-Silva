import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { irParaFeed } from "../Routes/Caminhos"

const useUnprotected = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")
        if(token){
            alert ("Você só pode acessar esta página de login caso esteja deslogado!")
            irParaFeed(navigate)
        }
    }, [navigate])
}

export default useUnprotected;