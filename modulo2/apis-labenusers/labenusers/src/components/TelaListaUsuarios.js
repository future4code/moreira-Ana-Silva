import axios from "axios";
import React from "react";
import styled from "styled-components";

const CardUsuario = styled.div`
    border: 1px solid black;
    background-color: lavender;
    border-radius: 8px;
    padding: 10px;
    margin: 10px;
    width: 200px;
    display: flex;
    justify-content: space-between;
`
const Button = styled.button`
   border-radius: 10px;
   height: 30px;
   width: 200px;
`
const DivContainer = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
`
const CorTexto = styled.h2`
  color: #00214B;
`
class TelaListaUsuarios extends React.Component {
    state = {
        usuarios: []
    }

    componentDidMount() {
        this.pegarUsuarios()
    }

    pegarUsuarios = (() => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        axios.get(url, {
            headers: { Authorization: "karine-silva-vaughan" }
        })
            .then((response) => {
                this.setState({ usuarios: response.data })
            })

            .catch((error) => {
                alert("Ocorreu um erro, tente novamente!")
            })
    })

    deletarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`

        axios.delete(url, {
            headers:
                { Authorization: "karine-silva-vaughan" }
        })

            .then((response) => {
                alert("Usuário(a) deletado(a) com sucesso!");
                this.pegarUsuarios()
            })
            .catch((error) => {
                alert("Erro ao deletar o usuário(a), tente novamente!")
            })
    }


    render() {
        const listaUsuarios = this.state.usuarios.map((user) => {
            return <CardUsuario key={user.id}>
                {user.name}
                <button onClick={() => this.deletarUsuario(user.id)}>X</button>
            </CardUsuario>

        })

        return (
            <DivContainer>
                <Button onClick={this.props.irParaCadastro}>Ir para Cadastro</Button>
                <CorTexto>LISTA DE USUÁRIOS</CorTexto>
                {listaUsuarios}
            </DivContainer>
        )
    }
}

export default TelaListaUsuarios;