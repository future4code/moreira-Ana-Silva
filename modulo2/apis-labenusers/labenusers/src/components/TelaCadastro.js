import React from "react";
import axios from "axios";
import styled from "styled-components";


const DivContainer = styled.div`
  padding: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  gap: 30px;
`
const Button = styled.button`
   border-radius: 10px;
   height: 30px;
   width: 200px;
`
const ButtonCadastro = styled.button`
   border-radius: 10px;
   height: 30px;
   width: 100px;
`
const CardCadastro = styled.div`
    box-shadow: 0 0 1em rgb(0, 52, 66);
    background-color: lavender;
    height: 400px;
    width: 400px;
    border: 1px solid black;
    border-radius: 20px;
    padding: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 70px;
`
const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Input = styled.input`
  width: 300px;
  height: 20px;
  background-color: lavender;
  border-width: 1px;
  border-radius: 4px;
`

const CorTexto = styled.h2`
  color: #00214B;
`

class TelaCadastro extends React.Component {
  state = {
    nome: "",
    email: "",
}

  inputNome = ((e) => {
    this.setState({ nome: e.target.value })
  })

  inputEmail = ((e) => {
    this.setState({ email: e.target.value })
  })

  cadastrarUsuarios = (() => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const body = {
      name: this.state.nome,
      email: this.state.email,
    }

    axios.post(url, body, {
      headers: { Authorization: "karine-silva-vaughan" }
    })

      .then((response) => {
        alert("Usuário(a) cadastrado(a) com sucesso!");
        this.setState({ nome: "", email: "" });
      })

      .catch((error) => {
        alert(`Erro ao cadastrar o usuário(a)! 
${error.response.data.message}!`)
      })
  })

  render() {
    return (
      <DivContainer>

        <CardCadastro>
          <CorTexto>CADASTRO</CorTexto>

          <DivInput>
            <label>Nome:</label>
            <Input
              placeholder={"Nome"}
              value={this.state.nome}
              onChange={this.inputNome}
            />

            <label>E-mail:</label>
            <Input
              placeholder={"E-mail"}
              value={this.state.email}
              onChange={this.inputEmail}
            />
          </DivInput>

          <ButtonCadastro onClick={this.cadastrarUsuarios}>Cadastrar</ButtonCadastro>
        </CardCadastro>

        <Button onClick={this.props.irParaLista}>Ir para Lista de Usuários</Button>

      </DivContainer>
    )
  }
}

export default TelaCadastro;