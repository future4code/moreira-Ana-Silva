import { useNavigate } from "react-router-dom"

navigate = useNavigate()

export const irParaFeed = () => {
    navigate("/")
}

export const irParaLogin = () => {
    navigate("/login")
}

export const irParaCadatro = () => {
    navigate("/cadastro")
}

export const irParaPost = (id) => {
    navigate(`/post/${id}`)
}