import { BASE_URL } from '../Constants/Urls'
import axios from 'axios'

export const criarComentario = (body, limparInputs, id, getData) => {

    axios
        .post(`${BASE_URL}/posts/${id}/comments`, body, {
        headers: {
                Authorization: window.localStorage.getItem('token')
            }
        })

        .then((response) => {
            alert(response.data)
            getData()
            limparInputs()
        })

        .catch((erro) => {
            alert(`Erro ao criar comentário, tente novamente! ${erro.response.data}.`)
        })
}