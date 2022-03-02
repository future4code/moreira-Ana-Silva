import { BASE_URL } from '../Constants/Urls'
import axios from 'axios'

export const criarPostagem = (body, limparInputs) => {

    axios
        .post(`${BASE_URL}/posts`, body, {
        headers: {
                Authorization: window.localStorage.getItem('token')
            }
        })

        .then((response) => {
            alert('Postagem criada com sucesso!')
            localStorage.setItem('token', response.data.token)
            limparInputs()
        })

        .catch((erro) => {
            alert(`Erro ao criar postagem, tente novamente! ${erro.response.data}.`)
        })
}

