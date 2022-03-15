import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { irParaLogin } from "../Routes/Caminhos"

const useProtected = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")
        if(!token){
            alert ("Para acessar esta página é preciso o usuário estar logado!")
            irParaLogin(navigate)
        }
    }, [navigate])
}

export default useProtected;