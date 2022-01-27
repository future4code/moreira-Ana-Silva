import React from "react";
import axios from "axios";
import styled from "styled-components";
import TelaCadastro from "./components/TelaCadastro";
import TelaListaUsuarios from "./components/TelaListaUsuarios";



class App extends React.Component {
  state = {
    telaAtual: "cadastro",
  }

  escolherTela = () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return <TelaCadastro irParaLista={this.irParaLista}/>
      case "lista":
        return <TelaListaUsuarios irParaCadastro={this.irParaCadastro}/>
      default:
        return <div>Erro! Página não encontrada!</div>
    }
  }

  irParaCadastro = () => {
    this.setState({ telaAtual: "cadastro" })
  }

  irParaLista = () => {
    this.setState({ telaAtual: "lista" })
  }

  render() {
    return (
      <div>
        {this.escolherTela()}
      </div>
    )
  }
}
export default App;