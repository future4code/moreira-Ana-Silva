import {irParaFeed} from '../Routes/Caminhos'
import { BASE_URL } from '../Constants/Urls'
import axios from 'axios'

export const fazerLogin = (body, limparInputs, navigate) => {

    axios
        .post(`${BASE_URL}/users/login`, body)

        .then((response) => {
            console.log(response)
            localStorage.setItem('token', response.data.token)
            irParaFeed(navigate)
            limparInputs()
        })

        .catch((erro) => {
            console.log(erro.data)
            alert(`Erro ao fazer login! 
${erro.response}.`)
        })
}

export const cadastrarUsuario = (body, limparInputs, navigate) => {

    axios
        .post(`${BASE_URL}//users/signup`, body)

        .then((response) => {
            console.log(response)
            localStorage.setItem('token', response.data.token)
            irParaFeed(navigate)
            limparInputs()
        })

        .catch((erro) => {
            console.log(erro.data)
            alert(`Erro ao fazer login! 
${erro.response}.`)
        })
}

