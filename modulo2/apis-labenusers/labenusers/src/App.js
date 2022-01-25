import React from "react";
import axios from "axios";
import styled from "styled-components";


class App extends React.Component {
  state = {
    usuarios: [],
    inputName: "",
    inputEmail: "",
  }

  componentDidMount = () => {
    this.getAllUsers();

  };

  onChangeName = (e) => {
    this.setState({ inputName: e.target.value });
  };

  onChangeEmail = (e) => {
    this.setState({ inputEmail: e.target.value });
  };

  getAllUsers = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const autorizacao = { headers: { Authorization: "karine-silva-vaughan" } }

    axios
      .get(url, autorizacao)
      .then((response) => {
        this.setState({ usuarios: response.data.result.list });
        console.log(response.data.result.list);
      })
      .catch((error) => {
        console.log(error.response);
      })
  };

  createUser = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail,
    };

    const autorizacao = { headers: { Authorization: "karine-silva-vaughan" } }

    axios
      .post(url, body, autorizacao)
      .then(() => {
        alert("Usuário criado com sucesso!");
        this.setState({ inputName: "" });
        this.setState({ inputEmail: "" });
        this.getAllUsers();
      })

      .catch((error) => {
        console.log(error.response);
        alert("Erro ao criar o usuário!")
      })
  };

  render() {
    const listaUsuarios = this.state.usuarios.map((lista) => {
      return (
        <div>
          <li>{lista.name}</li>
        </div>
      )
    });

    console.log(this.state)

    return (
      <div>
        <input
          placeholder="Nome"
          value={this.state.inputName}
          onChange={this.onChangeName}
        />

        <input
          placeholder="E-mail"
          value={this.state.inputEmail}
          onChange={this.onChangeEmail}
        />

        <button onClick={this.createUser}>Criar Usuário</button>

        <h4>Procurar usuário</h4>

        <input
          placeholder="Nome exato para busca"
        />

        <button>Pesquisar</button>

        {listaUsuarios}
      </div>
    )
  }
}
export default App;