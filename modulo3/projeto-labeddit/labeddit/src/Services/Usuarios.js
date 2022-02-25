import {irParaFeed} from '../Routes/Caminhos'
import { BASE_URL } from '../Constants/Urls'
import axios from 'axios'

export const fazerLogin = (body, limparInputs, navigate, setTextoDoBotao) => {

    axios
        .post(`${BASE_URL}/users/login`, body)

        .then((response) => {
            localStorage.setItem('token', response.data.token)
            limparInputs()
            irParaFeed(navigate)
            setTextoDoBotao("Logout")
        })

        .catch((erro) => {
            alert(`Erro ao fazer login! ${erro.response.data}.`)
        })
}

export const cadastrarUsuario = (body, limparInputs, navigate, setTextoDoBotao) => {

    axios
        .post(`${BASE_URL}/users/signup`, body)

        .then((response) => {
            localStorage.setItem('token', response.data.token)
            limparInputs()
            irParaFeed(navigate)
            setTextoDoBotao("Logout")
        })

        .catch((erro) => {
            alert(`Erro ao cadastrar usuário! ${erro.response.data}.`)
        })
}

